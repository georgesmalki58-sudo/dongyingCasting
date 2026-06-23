'use client';
import { useEffect, useState } from 'react';
import Script from 'next/script';
import type { Dictionary } from '@/i18n/config';

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export function InquiryForm({ t }: { t: Dictionary }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  const [showSuccess, setShowSuccess] = useState(false);

  // Show the centered success notice for 8 seconds, then auto-hide.
  useEffect(() => {
    if (!showSuccess) return;
    const id = setTimeout(() => setShowSuccess(false), 8000);
    return () => clearTimeout(id);
  }, [showSuccess]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch('/api/contact', { method: 'POST', body: data });
      if (res.ok) { setStatus('idle'); setShowSuccess(true); form.reset(); } else { setStatus('error'); }
    } catch { setStatus('error'); }
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

    <form onSubmit={onSubmit} encType="multipart/form-data" className="space-y-4" noValidate>
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
        <input name="attachment" type="file" multiple accept=".pdf,.docx,.xlsx,.step,.stp,.dwg,.dxf,.zip,.jpg,.jpeg,.png" className="mt-1 block w-full text-sm text-steel-600 file:mr-3 file:rounded file:border-0 file:bg-steel-100 file:px-3 file:py-2 file:text-sm file:font-semibold" />
      </label>
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
      <button type="submit" disabled={status === 'sending'} className="btn-primary w-full sm:w-auto">
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
          <p className="rounded-md border border-red-200 bg-red-50 p-3 text-sm font-medium text-red-800">{t.contact.error}</p>
        )}
      </div>
    </form>
    </>
  );
}
