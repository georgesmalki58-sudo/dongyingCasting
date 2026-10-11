'use client';
import { usePathname, useRouter } from 'next/navigation';
import { locales, localeNames, type Locale } from '@/i18n/config';

export function LanguageSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: string) {
    const segs = pathname.split('/');
    segs[1] = next; // replace locale segment
    router.push(segs.join('/') || `/${next}`);
  }

  return (
    <label className="relative inline-flex items-center">
      <span className="sr-only">Language</span>
      {/* globe icon */}
      <svg
        className="pointer-events-none absolute start-2.5 text-steel-500"
        width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" />
      </svg>
      <select
        value={current}
        onChange={(e) => switchTo(e.target.value)}
        className="h-10 cursor-pointer appearance-none rounded-md border border-steel-300 bg-white py-2 pe-8 ps-9 text-sm font-semibold text-steel-800 transition-colors hover:border-brand focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
        aria-label="Select language"
      >
        {locales.map((l) => (
          <option key={l} value={l}>{localeNames[l]}</option>
        ))}
      </select>
      {/* chevron icon */}
      <svg
        className="pointer-events-none absolute end-2.5 text-steel-500"
        width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </label>
  );
}
