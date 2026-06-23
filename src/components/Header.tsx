import Link from 'next/link';
import Image from 'next/image';
import { NAV, SITE, IMAGES } from '@/lib/site';
import { type Locale, getDictionary } from '@/i18n/config';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const base = `/${locale}`;
  return (
    <header className="sticky top-0 z-40 border-b border-steel-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link href={base} className="flex items-center gap-2" aria-label={SITE.name}>
          <Image src={IMAGES.logo} alt={SITE.name} width={70} height={84} className="h-9 w-auto" />
          <span className="text-lg font-bold tracking-tight text-steel-900">Dongying<span className="text-brand">Casting</span></span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {NAV.map((item) => (
            <Link key={item.key} href={item.href ? `${base}/${item.href}` : base}
              className="text-sm font-medium text-steel-700 hover:text-brand">
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher current={locale} />
          <Link href={`${base}/contact`} className="btn-accent hidden sm:inline-flex">{t.cta.quote}</Link>
        </div>
      </div>
    </header>
  );
}
