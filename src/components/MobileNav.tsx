'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

type NavItem = { key: string; label: string; href: string };

export function MobileNav({
  items,
  quoteHref,
  quoteLabel,
  menuLabel
}: {
  items: NavItem[];
  quoteHref: string;
  quoteLabel: string;
  menuLabel: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={menuLabel}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-steel-300 text-steel-800 transition-colors hover:border-brand hover:text-brand"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          {open ? (
            <>
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <>
          {/* Click-outside overlay (below the sticky header) */}
          <div
            className="fixed inset-x-0 bottom-0 top-16 z-40 bg-steel-900/20"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className="absolute end-0 top-full z-50 mt-2 flex w-64 flex-col overflow-hidden rounded-xl border border-steel-200 bg-white py-2 shadow-xl"
          >
            {items.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-5 py-3 text-sm font-medium text-steel-700 transition-colors hover:bg-steel-50 hover:text-brand"
              >
                {item.label}
              </Link>
            ))}
            <Link href={quoteHref} onClick={() => setOpen(false)} className="btn-accent mx-4 mt-2">
              {quoteLabel}
            </Link>
          </nav>
        </>
      )}
    </div>
  );
}
