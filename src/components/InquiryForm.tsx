'use client';
import { useState } from 'react';
import Script from 'next/script';
import type { Dictionary } from '@/i18n/config';

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export function InquiryForm({ t }: { t: Dictionary }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch('/api/contact', { method: 'POST', body: data });
      if (res.ok) { setStatus('ok'); form.reset(); } else { setStatus('error'); }
    } catch { setStatus('error'); }
  }

  const field = 'mt-1 w-full rounded-md border border-steel-300 px-3 py-2 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand';

  return (
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
        {status === 'sending' ? '…' : t.contact.submit}
      </button>
      {status === 'ok' && <p className="rounded-md bg-green-50 p-3 text-sm text-green-800">{t.contact.success}</p>}
      {status === 'error' && <p className="rounded-md bg-red-50 p-3 text-sm text-red-800">{t.contact.error}</p>}
    </form>
  );
}
