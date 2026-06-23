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
    <label className="relative">
      <span className="sr-only">Language</span>
      <select
        value={current}
        onChange={(e) => switchTo(e.target.value)}
        className="cursor-pointer rounded-md border border-steel-300 bg-white py-1.5 pl-2 pr-7 text-sm text-steel-700 focus:border-brand focus:outline-none"
        aria-label="Select language"
      >
        {locales.map((l) => (
          <option key={l} value={l}>{localeNames[l]}</option>
        ))}
      </select>
    </label>
  );
}
