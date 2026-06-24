import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { inquirySchema, validateUpload, verifyFileSignature, type InquiryInput } from '@/lib/validation';
import { rateLimit, clientIp, verifyTurnstile } from '@/lib/rate-limit';
import { SITE } from '@/lib/site';

export const runtime = 'nodejs';

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));

// Sends the inquiry to SITE.contactTo via SMTP (e.g. Hostinger Business Email).
// Configure SMTP_HOST / SMTP_PORT / SMTP_USER / SMTP_PASS in the environment.
// Returns true if the message was accepted by the SMTP server.
async function sendInquiryEmail(data: InquiryInput, attachments: File[]): Promise<boolean> {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) {
    console.warn('[contact] SMTP not configured — inquiry not emailed.', { to: SITE.contactTo, name: data.name });
    return false;
  }
  const port = Number(process.env.SMTP_PORT || 465);
  // From must be the authenticated mailbox (or same domain) for good deliverability.
  const from = process.env.CONTACT_FROM || `Dongying Casting <${user}>`;

  const html = `
    <h2>New website inquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(data.company || '-')}</p>
    <p><strong>Phone:</strong> ${escapeHtml(data.phone || '-')}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(data.message).replace(/\n/g, '<br>')}</p>`;

  const oneLine = (s: string) => s.replace(/[\r\n]+/g, ' ').trim();

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // 465 = SSL, 587 = STARTTLS
      auth: { user, pass }
    });

    const fileAtt = await Promise.all(
      attachments.map(async (f) => ({
        filename: f.name,
        content: Buffer.from(await f.arrayBuffer())
      }))
    );

    // 1) Notify the company.
    await transporter.sendMail({
      from,
      to: SITE.contactTo,
      replyTo: data.email,
      subject: oneLine(`New inquiry from ${data.name}${data.company ? ` (${data.company})` : ''}`),
      html,
      attachments: fileAtt
    });

    // 2) Auto-reply confirmation to the sender.
    const ack = `
      <p>Dear ${escapeHtml(data.name)},</p>
      <p>Thank you for contacting <strong>Dongying Casting</strong> (${escapeHtml(SITE.legalName)}). We have received your inquiry and our engineers will respond shortly, typically within 24 hours.</p>
      <p><strong>Your message:</strong></p>
      <blockquote style="border-left:3px solid #0b3d91;padding-left:12px;color:#444">${escapeHtml(data.message).replace(/\n/g, '<br>')}</blockquote>
      <p>Best regards,<br>Dongying Casting Team<br>${escapeHtml(SITE.contactTo)} · ${escapeHtml(SITE.phone)}</p>`;
    try {
      await transporter.sendMail({
        from,
        to: data.email,
        replyTo: SITE.contactTo,
        subject: 'We received your inquiry — Dongying Casting',
        html: ack
      });
    } catch (e) {
      console.error('[contact] auto-reply failed (inquiry still delivered)', e);
    }

    return true;
  } catch (e) {
    console.error('[contact] SMTP send failed', e);
    return false;
  }
}

// CSRF mitigation: this endpoint is cookieless, so we verify the request was
// initiated from our own origin (Origin/Referer must match the Host).
function sameOrigin(req: Request): boolean {
  const host = req.headers.get('host');
  const src = req.headers.get('origin') || req.headers.get('referer');
  // Only block on an explicit cross-origin mismatch. A missing Origin/Referer is
  // allowed (some browsers omit it on same-origin POSTs) to avoid false rejections;
  // a real cross-site attacker's browser always sends a (mismatching) Origin.
  if (!host || !src) return true;
  try {
    return new URL(src).host === host;
  } catch {
    return true;
  }
}

export async function POST(req: Request) {
  try {
  if (!sameOrigin(req)) {
    return NextResponse.json({ error: 'Cross-origin request blocked.' }, { status: 403 });
  }

  const ip = clientIp(req);
  // Rate limit only in production. In dev all requests share the 'unknown' bucket
  // (no cf-connecting-ip locally), which would falsely trip during testing.
  if (process.env.NODE_ENV === 'production') {
    const limit = rateLimit(`contact:${ip}`, 8, 60_000);
    if (!limit.ok) {
      return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
    }
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: 'Invalid form data.' }, { status: 400 });
  }

  const parsed = inquirySchema.safeParse({
    name: form.get('name'),
    email: form.get('email'),
    company: form.get('company') ?? '',
    phone: form.get('phone') ?? '',
    message: form.get('message'),
    consent: form.get('consent') === 'true',
    website: form.get('website') ?? '',
    turnstileToken: form.get('cf-turnstile-response')?.toString()
  });

  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation failed.', issues: parsed.error.flatten() }, { status: 422 });
  }
  // Honeypot tripped -> silently accept (don't tip off bots), but drop.
  if (parsed.data.website) return NextResponse.json({ ok: true });

  const human = await verifyTurnstile(parsed.data.turnstileToken, ip);
  if (!human) return NextResponse.json({ error: 'Verification failed.' }, { status: 403 });

  // Multiple attachments are supported. Enforce a per-request file count and total size.
  const MAX_FILES = 8;
  const MAX_TOTAL_BYTES = 10 * 1024 * 1024; // 10 MB across all files per message
  const files = form.getAll('attachment').filter((f): f is File => f instanceof File && f.size > 0);
  if (files.length > MAX_FILES) {
    return NextResponse.json({ error: `Too many files (max ${MAX_FILES}).` }, { status: 422 });
  }
  let total = 0;
  for (const file of files) {
    total += file.size;
    if (total > MAX_TOTAL_BYTES) {
      return NextResponse.json({ error: 'Total attachment size exceeds 10 MB. Please split your files across several submissions.' }, { status: 422 });
    }
    // 1) Name / size / extension / MIME checks.
    const err = validateUpload({ name: file.name, size: file.size, type: file.type });
    if (err) return NextResponse.json({ error: `${file.name}: ${err}` }, { status: 422 });
    // 2) Content check — read leading bytes and verify the real file signature.
    const head = new Uint8Array(await file.slice(0, 4096).arrayBuffer());
    const sigErr = verifyFileSignature(file.name, head);
    if (sigErr) return NextResponse.json({ error: `${file.name}: ${sigErr}` }, { status: 422 });
    // For production hardening: scan each file (AV) before persisting/forwarding.
  }

  // Deliver the inquiry to the company inbox (SITE.email).
  const sent = await sendInquiryEmail(parsed.data, files);
  console.log(JSON.stringify({ evt: 'inquiry', ip, ts: Date.now(), files: files.length, delivered: sent }));

  return NextResponse.json({ ok: true });
  } catch (e) {
    // Any unexpected error becomes a readable JSON response instead of an opaque 500.
    console.error('[contact] unhandled error', e);
    const msg =
      process.env.NODE_ENV === 'production'
        ? 'Server error. Please email us directly at the address shown.'
        : `Server error: ${(e as Error)?.message ?? String(e)}`;
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
