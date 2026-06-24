'use client';
import { useEffect, useState } from 'react';
import Script from 'next/script';
import type { Dictionary } from '@/i18n/config';

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const fmtSize = (b: number) => (b < 1024 * 1024 ? `${Math.round(b / 1024)} KB` : `${(b / 1024 / 1024).toFixed(1)} MB`);

export function InquiryForm({ t }: { t: Dictionary }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const MAX_TOTAL = 10 * 1024 * 1024;
  const total = files.reduce((sum, f) => sum + f.size, 0);
  const overLimit = total > MAX_TOTAL;

  function addFiles(picked: File[]) {
    if (!picked.length) return;
    setFiles((prev) => {
      const merged = [...prev];
      for (const f of picked) {
        if (!merged.some((m) => m.name === f.name && m.size === f.size)) merged.push(f);
      }
      return merged;
    });
  }
  function removeFile(i: number) {
    setFiles((prev) => prev.filter((_, idx) => idx !== i));
  }

  // Show the centered success notice for 8 seconds, then auto-hide.
  useEffect(() => {
    if (!showSuccess) return;
    const id = setTimeout(() => setShowSuccess(false), 8000);
    return () => clearTimeout(id);
  }, [showSuccess]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    // Client-side 10 MB cap so the user is told before a long upload.
    if (overLimit) {
      setErrorMsg(t.contact.attachmentNote);
      setStatus('error');
      return;
    }
    setStatus('sending');
    // Build FormData from the managed file list (source of truth) + the text fields.
    const data = new FormData(form);
    data.delete('attachment');
    for (const f of files) data.append('attachment', f);
    try {
      const res = await fetch('/api/contact', { method: 'POST', body: data });
      if (res.ok) {
        setStatus('idle'); setShowSuccess(true); form.reset(); setFiles([]);
      } else {
        // Surface the server's actual reason (e.g. validation / 429) instead of a generic message.
        let msg = t.contact.error;
        try { const j = await res.json(); if (j?.error) msg = j.error; } catch { /* ignore */ }
        setErrorMsg(msg);
        setStatus('error');
      }
    } catch { setErrorMsg(t.contact.error); setStatus('error'); }
  }

  const field = 'mt-1 w-full rounded-md border border-steel-300 px-3 py-2 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand';

  return (
    <>
    {/* Centered success notice — large, clear, auto-hides after 8s */}
    {showSuccess && (
      <div
        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4"
        role="alert"
        aria-live="assertive"
        onClick={() => setShowSuccess(false)}
      >
        <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl" onClick={(e) => e.stopPropagation()}>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
            <svg viewBox="0 0 20 20" width="36" height="36" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.3 3.3 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd"/></svg>
          </div>
          <p className="mt-5 text-xl font-bold leading-relaxed text-steel-900">{t.contact.success}</p>
        </div>
      </div>
    )}

    <form onSubmit={onSubmit} encType="multipart/form-data" className="space-y-4">
      {/* Honeypot — visually hidden, bots fill it */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-steel-800">{t.contact.name}*
          <input name="name" required minLength={2} className={field} />
        </label>
        <label className="block text-sm font-medium text-steel-800">{t.contact.email}*
          <input name="email" type="email" required className={field} />
        </label>
        <label className="block text-sm font-medium text-steel-800">{t.contact.company}
          <input name="company" className={field} />
        </label>
        <label className="block text-sm font-medium text-steel-800">{t.contact.phone}
          <input name="phone" className={field} />
        </label>
      </div>
      <label className="block text-sm font-medium text-steel-800">{t.contact.message}*
        <textarea name="message" required minLength={10} rows={5} className={field} />
      </label>
      <label className="block text-sm font-medium text-steel-800">{t.contact.attachment}
        <input
          name="attachment"
          type="file"
          multiple
          accept=".pdf,.docx,.xlsx,.step,.stp,.dwg,.dxf,.zip,.jpg,.jpeg,.png"
          onChange={(e) => { addFiles(Array.from(e.target.files ?? [])); e.target.value = ''; }}
          className="mt-1 block w-full text-sm text-steel-600 file:mr-3 file:rounded file:border-0 file:bg-steel-100 file:px-3 file:py-2 file:text-sm file:font-semibold"
        />
      </label>
      <p className="-mt-2 text-xs text-steel-500">{t.contact.attachmentNote}</p>
      {files.length > 0 && (
        <>
          <ul className="space-y-1">
            {files.map((f, i) => (
              <li key={`${f.name}-${i}`} className="flex items-center gap-2 rounded-md border border-steel-200 bg-steel-50 px-3 py-2 text-sm text-steel-700">
                <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor" aria-hidden="true" className="shrink-0 text-brand"><path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-6L8 3H4z"/></svg>
                <span className="truncate">{f.name}</span>
                <span className="ml-auto shrink-0 text-xs text-steel-400">{fmtSize(f.size)}</span>
                <button type="button" onClick={() => removeFile(i)} aria-label={`Remove ${f.name}`}
                  className="shrink-0 rounded p-0.5 text-steel-400 hover:bg-red-100 hover:text-red-600">
                  <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M10 8.6l4.3-4.3 1.4 1.4L11.4 10l4.3 4.3-1.4 1.4L10 11.4l-4.3 4.3-1.4-1.4L8.6 10 4.3 5.7l1.4-1.4L10 8.6z" clipRule="evenodd"/></svg>
                </button>
              </li>
            ))}
          </ul>
          <p className={`text-xs ${overLimit ? 'font-semibold text-red-600' : 'text-steel-500'}`}>
            {files.length} {files.length === 1 ? 'file' : 'files'} · {fmtSize(total)} / 10 MB
          </p>
        </>
      )}
      <label className="flex items-start gap-2 text-sm text-steel-700">
        <input name="consent" type="checkbox" required value="true" className="mt-0.5" />
        <span>{t.contact.consent}</span>
      </label>
      {/* Cloudflare Turnstile — only loads/renders when a site key is configured */}
      {TURNSTILE_SITE_KEY ? (
        <>
          <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer strategy="afterInteractive" />
          <div className="cf-turnstile" data-sitekey={TURNSTILE_SITE_KEY} />
        </>
      ) : null}
      <button type="submit" disabled={status === 'sending' || overLimit} className="btn-primary w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-60">
        {status === 'sending' ? (
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            {t.contact.sending}
          </span>
        ) : (
          t.contact.submit
        )}
      </button>

      {/* Inline status notices (success is shown as a centered overlay above) */}
      <div aria-live="polite">
        {status === 'sending' && (
          <p className="flex items-center gap-2 rounded-md border border-brand/20 bg-blue-50 p-3 text-sm text-brand-dark">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-brand/30 border-t-brand" />
            {t.contact.sending}
          </p>
        )}
        {status === 'error' && (
          <p className="rounded-md border border-red-200 bg-red-50 p-3 text-sm font-medium text-red-800">{errorMsg || t.contact.error}</p>
        )}
      </div>
    </form>
    </>
  );
}
