import { z } from 'zod';

// Whitelisted upload extensions and limits (spec requirement).
export const ALLOWED_EXTENSIONS = ['pdf', 'docx', 'xlsx', 'step', 'stp', 'dwg', 'dxf', 'zip', 'jpg', 'jpeg', 'png'] as const;
export const ALLOWED_MIME = new Set([
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/zip',
  'application/x-zip-compressed',
  'application/octet-stream', // STEP/DWG/DXF are often reported as this
  'model/step',
  'image/vnd.dwg',
  'image/vnd.dxf',
  'image/jpeg',
  'image/png'
]);
export const MAX_FILE_BYTES = 15 * 1024 * 1024; // 15 MB

// Honeypot field `website` must stay empty (basic spam protection).
export const inquirySchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(150),
  company: z.string().max(150).optional().default(''),
  phone: z.string().max(40).optional().default(''),
  message: z.string().min(10).max(5000),
  consent: z.literal(true),
  website: z.string().max(0).optional().default(''), // honeypot
  turnstileToken: z.string().min(1).optional()
});

export type InquiryInput = z.infer<typeof inquirySchema>;

export function extensionOf(filename: string): string {
  const parts = filename.toLowerCase().split('.');
  return parts.length > 1 ? parts[parts.length - 1] : '';
}

export function validateUpload(file: { name: string; size: number; type: string }): string | null {
  if (file.size > MAX_FILE_BYTES) return 'File exceeds 15 MB limit.';
  if (file.size === 0) return 'File is empty.';
  const ext = extensionOf(file.name);
  if (!(ALLOWED_EXTENSIONS as readonly string[]).includes(ext)) return `File type .${ext} is not allowed.`;
  // Block disguised executables via dotted segments (e.g. "drawing.exe.pdf", "a.php.pdf").
  // Segment match (not substring), so legitimate names like "flashlight.png" are fine.
  const DANGEROUS = new Set(['exe', 'js', 'html', 'htm', 'svg', 'php', 'bat', 'cmd', 'sh', 'com', 'scr', 'jar', 'msi', 'dll']);
  const segments = file.name.toLowerCase().split('.').slice(1); // all dotted parts
  if (segments.some((s) => DANGEROUS.has(s))) return 'File name contains a disallowed extension.';
  // MIME is advisory; extension whitelist is authoritative. Reject obvious mismatches.
  if (file.type && !ALLOWED_MIME.has(file.type) && file.type !== '') {
    if (!file.type.includes('zip') && file.type !== 'application/octet-stream') return 'File MIME type not permitted.';
  }
  return null;
}

// ---- Magic-byte (file signature) verification ----
// Extension and MIME can be spoofed; this checks the actual file content.
const startsWith = (b: Uint8Array, sig: number[]) => sig.every((v, i) => b[i] === v);
const textHead = (b: Uint8Array, len = 1024) =>
  new TextDecoder('latin1').decode(b.subarray(0, len)).replace(/^﻿/, '').trimStart();

// PK zip family (docx/xlsx/zip). 03 04 = local file, 05 06 = empty, 07 08 = spanned.
function isZip(b: Uint8Array): boolean {
  return startsWith(b, [0x50, 0x4b, 0x03, 0x04]) || startsWith(b, [0x50, 0x4b, 0x05, 0x06]) || startsWith(b, [0x50, 0x4b, 0x07, 0x08]);
}

/**
 * Verifies that the file's leading bytes match its claimed extension.
 * `head` should be at least the first ~1024 bytes of the file.
 */
export function verifyFileSignature(filename: string, head: Uint8Array): string | null {
  const ext = extensionOf(filename);
  const mismatch = `File content does not match a valid .${ext} file.`;
  switch (ext) {
    case 'pdf':
      return startsWith(head, [0x25, 0x50, 0x44, 0x46, 0x2d]) ? null : mismatch; // %PDF-
    case 'jpg':
    case 'jpeg':
      return startsWith(head, [0xff, 0xd8, 0xff]) ? null : mismatch; // JPEG SOI marker
    case 'png':
      return startsWith(head, [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]) ? null : mismatch; // PNG signature
    case 'docx':
    case 'xlsx':
    case 'zip':
      return isZip(head) ? null : mismatch; // Office Open XML files are ZIP containers
    case 'step':
    case 'stp': {
      const t = textHead(head);
      return t.startsWith('ISO-10303-21') ? null : mismatch; // STEP (ISO 10303-21) header
    }
    case 'dwg':
      // AutoCAD DWG: "AC10" followed by a version code (AC1014..AC1032).
      return startsWith(head, [0x41, 0x43, 0x31, 0x30]) ? null : mismatch;
    case 'dxf': {
      const t = textHead(head, 2048);
      const ok = t.startsWith('AutoCAD Binary DXF') || /^\s*0[\r\n]+SECTION/.test(t) || (t.includes('SECTION') && t.includes('HEADER'));
      return ok ? null : mismatch;
    }
    default:
      return `File type .${ext} is not allowed.`;
  }
}
