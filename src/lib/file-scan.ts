// Deep content scanning for uploaded files (defense in depth on top of the
// extension whitelist + magic-byte check in validation.ts).
//
// Uploads are never stored or served by the site — they are only forwarded to the
// company mailbox as attachments. The threat model is therefore "malicious file
// delivered to staff": macro documents, PDFs with JavaScript / launch actions /
// embedded files, archives carrying executables, zip bombs, polyglot images and
// spoofed file names. Anything we cannot inspect (encrypted PDF/ZIP) is rejected.
import { inflateRawSync, inflateSync } from 'node:zlib';

/** Returns a reason string when the file must be rejected, or null when clean. */
export type ScanResult = string | null;

const MAX_ZIP_ENTRIES = 500;
const MAX_UNCOMPRESSED_TOTAL = 200 * 1024 * 1024; // declared size across a zip
const MAX_RATIO = 100; // compression ratio above this (on >1 MB entries) = zip bomb
const MAX_INFLATE_ENTRY = 20 * 1024 * 1024; // max bytes we inflate for one entry/stream
const MAX_INFLATE_BUDGET = 60 * 1024 * 1024; // max bytes inflated per uploaded file

// Executable / script / macro-capable formats that must never arrive inside an upload.
const DANGEROUS_EXT = new Set([
  'exe', 'dll', 'scr', 'com', 'pif', 'cpl', 'msi', 'msp', 'msc', 'bat', 'cmd', 'ps1', 'psm1',
  'vbs', 'vbe', 'js', 'jse', 'wsf', 'wsh', 'hta', 'lnk', 'url', 'reg', 'inf', 'scf', 'jar',
  'class', 'apk', 'app', 'dmg', 'pkg', 'sh', 'bash', 'py', 'pl', 'rb', 'php', 'phtml', 'asp',
  'aspx', 'jsp', 'html', 'htm', 'xhtml', 'svg', 'swf', 'chm', 'iso', 'img', 'vhd', 'vhdx',
  'docm', 'dotm', 'xlsm', 'xltm', 'xlam', 'pptm', 'potm', 'ppam', 'sldm', 'one', 'library-ms',
  'settingcontent-ms', 'appx', 'msix', 'gadget', 'ws', 'xll', 'xla', 'diagcab'
]);
// Nested archives can't be inspected reliably — ask the sender to flatten them.
const ARCHIVE_EXT = new Set(['zip', 'rar', '7z', 'gz', 'tgz', 'tar', 'bz2', 'xz', 'cab', 'arj', 'lzh', 'ace', 'zst']);

const extOf = (name: string) => {
  const base = name.split(/[\\/]/).pop() ?? '';
  const i = base.lastIndexOf('.');
  return i > 0 ? base.slice(i + 1).toLowerCase() : '';
};
const latin1 = (b: Uint8Array) => Buffer.from(b.buffer, b.byteOffset, b.byteLength).toString('latin1');

// ---------------------------------------------------------------------------
// File names
// ---------------------------------------------------------------------------

/** Rejects spoofed / unsafe names (RTL-override tricks, control chars, paths). */
export function checkFileName(name: string): ScanResult {
  if (!name || name.length > 180) return 'Invalid or too long file name.';
  if (/[\u0000-\u001f\u007f]/.test(name)) return 'File name contains control characters.';
  // Bidi overrides (e.g. "invoice‮fdp.exe" renders as "invoiceexe.pdf").
  if (/[‪-‮⁦-⁩‎‏؜﻿]/.test(name)) return 'File name contains hidden direction characters.';
  if (/[\\/:*?"<>|]/.test(name)) return 'File name contains invalid characters.';
  return null;
}

/** Safe attachment name for the outgoing email (keeps Arabic/Chinese letters). */
export function safeAttachmentName(name: string): string {
  const cleaned = name.normalize('NFC').replace(/[^\p{L}\p{N}._ ()+-]/gu, '_').replace(/^\.+/, '');
  return (cleaned || 'attachment').slice(0, 180);
}

// ---------------------------------------------------------------------------
// Generic checks (all file types)
// ---------------------------------------------------------------------------

function genericScan(text: string, ext: string): ScanResult {
  // Embedded Windows / Linux executables anywhere in the file.
  if (text.includes('This program cannot be run in DOS mode') || text.includes('This program must be run under Win32')) {
    return 'embedded Windows executable';
  }
  if (text.startsWith('\x7fELF')) return 'ELF executable';
  // Script / server-code polyglots hidden in images or CAD text files.
  if (['jpg', 'jpeg', 'png', 'dxf', 'step', 'stp', 'dwg'].includes(ext)) {
    if (/<script[\s>]|<\?php|<%@|<%=|javascript:/i.test(text)) return 'embedded script (polyglot file)';
  }
  return null;
}

// ---------------------------------------------------------------------------
// PDF
// ---------------------------------------------------------------------------

// Active-content keys: scripts, program launch, embedded files, rich media,
// form submission/data import, and remote go-to actions.
const PDF_DANGEROUS = /\/(JavaScript|JS|Launch|EmbeddedFiles?|RichMedia|SubmitForm|ImportData|GoToE|GoToR)(?![A-Za-z0-9])/;

// PDF names may hide characters as #xx hex escapes (e.g. /J#61vaScript).
const decodePdfNames = (s: string) =>
  s.replace(/\/[^\s/[\]<>(){}%]+/g, (m) => m.replace(/#([0-9A-Fa-f]{2})/g, (_, h) => String.fromCharCode(parseInt(h, 16))));

function scanPdf(buf: Uint8Array, budget: { left: number }): ScanResult {
  const raw = latin1(buf);
  const text = decodePdfNames(raw);
  if (/\/Encrypt(?![A-Za-z])/.test(text)) return 'encrypted PDF (cannot be inspected)';
  const hit = text.match(PDF_DANGEROUS);
  if (hit) return `PDF contains active content (${hit[1]})`;

  // Dictionaries can also live inside compressed object streams (/ObjStm).
  const streamRe = /stream\r?\n/g;
  let m: RegExpExecArray | null;
  while ((m = streamRe.exec(raw))) {
    const dictStart = raw.lastIndexOf('<<', m.index);
    const dict = dictStart >= 0 ? decodePdfNames(raw.slice(dictStart, m.index)) : '';
    if (!/\/ObjStm/.test(dict) || !/\/FlateDecode/.test(dict)) continue;
    const start = m.index + m[0].length;
    const end = raw.indexOf('endstream', start);
    if (end < 0) break;
    const limit = Math.min(MAX_INFLATE_ENTRY, budget.left);
    if (limit <= 0) return 'PDF too complex to inspect';
    let inflated: Buffer;
    try {
      inflated = inflateSync(buf.subarray(start, end), { maxOutputLength: limit });
    } catch {
      continue; // corrupt/truncated stream — the raw scan above still applied
    }
    budget.left -= inflated.length;
    const inner = decodePdfNames(inflated.toString('latin1'));
    const innerHit = inner.match(PDF_DANGEROUS);
    if (innerHit) return `PDF contains active content (${innerHit[1]})`;
    streamRe.lastIndex = end;
  }
  return null;
}

// ---------------------------------------------------------------------------
// ZIP / Office Open XML (docx, xlsx)
// ---------------------------------------------------------------------------

type ZipEntry = { name: string; flags: number; method: number; compSize: number; size: number; localOffset: number };

function readZipEntries(buf: Uint8Array): ZipEntry[] | string {
  const dv = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
  // End Of Central Directory record (search the last 64 KB + 22 bytes).
  let eocd = -1;
  for (let i = buf.length - 22; i >= Math.max(0, buf.length - 65557); i--) {
    if (dv.getUint32(i, true) === 0x06054b50) { eocd = i; break; }
  }
  if (eocd < 0) return 'corrupt archive (no central directory)';
  const total = dv.getUint16(eocd + 10, true);
  const cdSize = dv.getUint32(eocd + 12, true);
  const cdOffset = dv.getUint32(eocd + 16, true);
  if (total === 0xffff || cdOffset === 0xffffffff) return 'ZIP64 archives are not accepted';
  if (total > MAX_ZIP_ENTRIES) return `archive has too many files (${total})`;
  if (cdOffset + cdSize > buf.length) return 'corrupt archive';

  const entries: ZipEntry[] = [];
  let p = cdOffset;
  for (let n = 0; n < total; n++) {
    if (p + 46 > buf.length || dv.getUint32(p, true) !== 0x02014b50) return 'corrupt archive';
    const flags = dv.getUint16(p + 8, true);
    const method = dv.getUint16(p + 10, true);
    const compSize = dv.getUint32(p + 20, true);
    const size = dv.getUint32(p + 24, true);
    const nameLen = dv.getUint16(p + 28, true);
    const extraLen = dv.getUint16(p + 30, true);
    const commentLen = dv.getUint16(p + 32, true);
    const localOffset = dv.getUint32(p + 42, true);
    const nameBytes = buf.subarray(p + 46, p + 46 + nameLen);
    const name = flags & 0x800 ? new TextDecoder().decode(nameBytes) : latin1(nameBytes);
    entries.push({ name, flags, method, compSize, size, localOffset });
    p += 46 + nameLen + extraLen + commentLen;
  }
  return entries;
}

function inflateEntry(buf: Uint8Array, e: ZipEntry, budget: { left: number }): Buffer | string {
  const dv = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
  const lo = e.localOffset;
  if (lo + 30 > buf.length || dv.getUint32(lo, true) !== 0x04034b50) return 'corrupt archive entry';
  const start = lo + 30 + dv.getUint16(lo + 26, true) + dv.getUint16(lo + 28, true);
  const data = buf.subarray(start, start + e.compSize);
  const limit = Math.min(MAX_INFLATE_ENTRY, budget.left);
  if (limit <= 0) return 'archive too large to inspect';
  try {
    const out =
      e.method === 0 ? Buffer.from(data.subarray(0, limit))
      : e.method === 8 ? inflateRawSync(data, { maxOutputLength: limit })
      : null;
    if (!out) return `unsupported compression in "${e.name}"`;
    budget.left -= out.length;
    return out;
  } catch {
    return `entry "${e.name}" could not be inspected`;
  }
}

function scanZipLike(buf: Uint8Array, kind: 'zip' | 'ooxml', depth: number, budget: { left: number }): ScanResult {
  const entries = readZipEntries(buf);
  if (typeof entries === 'string') return entries;

  let declared = 0;
  for (const e of entries) {
    if (e.flags & 0x1) return 'password-protected archive (cannot be inspected)';
    if (/^([a-zA-Z]:|[\\/])/.test(e.name) || e.name.split(/[\\/]/).includes('..')) return `unsafe path in archive: ${e.name}`;
    if (/[‪-‮⁦-⁩]/.test(e.name)) return 'archive entry with spoofed name';
    const ext = extOf(e.name);
    const segments = (e.name.split(/[\\/]/).pop() ?? '').toLowerCase().split('.').slice(1);
    if (DANGEROUS_EXT.has(ext) || segments.some((s) => DANGEROUS_EXT.has(s))) return `archive contains a blocked file type: ${e.name}`;
    if (ARCHIVE_EXT.has(ext)) return `nested archive not accepted: ${e.name}`;
    declared += e.size;
    if (declared > MAX_UNCOMPRESSED_TOTAL) return 'archive expands too large (possible zip bomb)';
    if (e.size > 1024 * 1024 && e.compSize > 0 && e.size / e.compSize > MAX_RATIO) return 'abnormal compression ratio (possible zip bomb)';
  }

  if (kind === 'ooxml') {
    const names = entries.map((e) => e.name);
    if (!names.includes('[Content_Types].xml')) return 'not a valid Office document';
    // Macros, ActiveX controls and OLE embeddings (OLE "Package" objects can carry executables).
    const bad = names.find((n) => /vbaProject\.bin$|vbaData\.xml$|\/activeX\/|\/embeddings\/.*\.bin$|\.bin$/i.test(n) && !/printerSettings/i.test(n));
    if (bad) return `Office document contains macros or embedded objects (${bad})`;
    for (const e of entries) {
      if (e.name !== '[Content_Types].xml' && !e.name.endsWith('.rels')) continue;
      const xml = inflateEntry(buf, e, budget);
      if (typeof xml === 'string') return xml;
      const s = xml.toString('utf8');
      if (/macroEnabled|vbaProject|ms-office\.activeX/i.test(s)) return 'macro-enabled Office document';
      // Remote template / OLE / frame injection (e.g. CVE-2017-0199, "Follina"-style).
      const rels = s.match(/<Relationship\b[^>]*>/g) ?? [];
      for (const r of rels) {
        if (/TargetMode\s*=\s*"External"/i.test(r) && !/\/hyperlink"/i.test(r)) return 'Office document loads external content';
        if (/Target\s*=\s*"(mhtml:|ms-|file:|\\\\)/i.test(r)) return 'Office document references a dangerous protocol';
      }
    }
  }

  // Inspect documents inside a plain .zip once (no deeper recursion).
  if (kind === 'zip' && depth === 0) {
    for (const e of entries) {
      const ext = extOf(e.name);
      if (!['pdf', 'docx', 'xlsx', 'jpg', 'jpeg', 'png', 'dxf', 'step', 'stp', 'dwg'].includes(ext)) {
        if (e.name.endsWith('/')) continue; // directory
        return `archive contains an unsupported file type: ${e.name}`;
      }
      const inner = inflateEntry(buf, e, budget);
      if (typeof inner === 'string') return inner;
      const r = scanContent(e.name, inner, depth + 1, budget);
      if (r) return `${e.name}: ${r}`;
    }
  }
  return null;
}

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------

function scanContent(name: string, buf: Uint8Array, depth: number, budget: { left: number }): ScanResult {
  const ext = extOf(name);
  const generic = genericScan(latin1(buf), ext);
  if (generic) return generic;
  switch (ext) {
    case 'pdf':
      return scanPdf(buf, budget);
    case 'docx':
    case 'xlsx':
      return scanZipLike(buf, 'ooxml', depth, budget);
    case 'zip':
      return depth > 0 ? 'nested archive not accepted' : scanZipLike(buf, 'zip', depth, budget);
    default:
      return null; // jpg/png/dwg/dxf/step: magic bytes + generic scan
  }
}

/** Full-content malware heuristics for one uploaded file. */
export function scanUpload(name: string, buf: Uint8Array): ScanResult {
  return checkFileName(name) ?? scanContent(name, buf, 0, { left: MAX_INFLATE_BUDGET });
}
