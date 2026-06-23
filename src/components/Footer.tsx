import Link from 'next/link';
import Image from 'next/image';
import { NAV, SITE, IMAGES } from '@/lib/site';
import { type Locale, getDictionary } from '@/i18n/config';

export function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const base = `/${locale}`;
  return (
    <footer className="mt-24 bg-steel-950 text-steel-200">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <Image src={IMAGES.logo} alt={SITE.name} width={70} height={84} className="h-9 w-auto" />
            <span className="text-lg font-bold text-white">{SITE.name}</span>
          </div>
          <p className="mt-3 text-sm font-semibold text-steel-200">{SITE.legalName}</p>
          <p className="mt-2 text-sm text-steel-400">{t.footer.tagline}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{t.footer.quickLinks}</p>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV.map((i) => (
              <li key={i.key}>
                <Link href={i.href ? `${base}/${i.href}` : base} className="text-steel-400 hover:text-white">{t.nav[i.key]}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{t.footer.contact}</p>
          <address className="mt-3 space-y-2 text-sm not-italic text-steel-400">
            <p>{SITE.address.street}, {SITE.address.locality}, {SITE.address.region}, {SITE.address.countryName}</p>
            <p><a className="hover:text-white" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
            <p><a className="hover:text-white" href={`tel:${SITE.phone}`}>{SITE.phone}</a></p>
            <p className="text-xs text-steel-500">{t.contact.hours}</p>
          </address>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{t.footer.certifications}</p>
          <ul className="mt-3 flex flex-wrap gap-2 text-xs">
            {SITE.certifications.map((c) => (
              <li key={c} className="rounded border border-steel-700 px-2 py-1 text-steel-300">{c}</li>
            ))}
          </ul>
          <p className="mt-5 text-sm font-semibold text-white">{t.footer.ports}</p>
          <p className="mt-2 text-xs text-steel-400">{SITE.ports.join(' · ')}</p>
        </div>
      </div>
      <div className="border-t border-steel-800">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-steel-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.legalName}. {t.footer.rights}</p>
          <p>Incoterms: {SITE.incoterms.join(', ')}</p>
        </div>
      </div>
    </footer>
  );
}
