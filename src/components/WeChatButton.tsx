'use client';
import { useState } from 'react';
import Image from 'next/image';

// Floating WeChat button with a QR popover (WeChat has no universal web chat link,
// so we reveal the scannable QR + ID on click). Shown on every page via StickyContact.
export function WeChatButton({ id, hint }: { id: string; hint: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative flex justify-end">
      {open && (
        <div className="absolute bottom-14 right-0 w-56 rounded-xl border border-steel-200 bg-white p-4 text-center shadow-xl">
          <p className="text-sm font-semibold text-steel-900">WeChat</p>
          <p className="prose-muted mt-1 text-xs">{hint}</p>
          <Image src="/images/wechat.png" alt="WeChat QR" width={160} height={160}
            className="mx-auto mt-3 h-40 w-40 rounded-md border border-steel-200 object-contain" />
          <p className="mt-2 text-xs font-semibold text-steel-800">ID: {id}</p>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="WeChat"
        aria-expanded={open}
        title="WeChat"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#07C160] text-white shadow-lg transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
          <path d="M8.69 4C4.62 4 1.3 6.78 1.3 10.2c0 1.96 1.1 3.71 2.82 4.86l-.55 1.74 2.05-1.08c.74.2 1.5.32 2.27.34-.1-.43-.15-.87-.15-1.32 0-3.2 3.04-5.7 6.78-5.7.25 0 .5.02.74.05C14.6 6.02 11.96 4 8.69 4zm-2.4 3.2a.95.95 0 110 1.9.95.95 0 010-1.9zm4.8 0a.95.95 0 110 1.9.95.95 0 010-1.9zM22.7 14.1c0-2.86-2.86-5.18-6.18-5.18s-6.18 2.32-6.18 5.18 2.86 5.18 6.18 5.18c.69 0 1.36-.1 1.98-.29l1.8.95-.49-1.53c1.74-1 2.89-2.6 2.89-4.31zm-8.16-1.05a.8.8 0 110 1.6.8.8 0 010-1.6zm3.96 0a.8.8 0 110 1.6.8.8 0 010-1.6z"/>
        </svg>
      </button>
    </div>
  );
}
