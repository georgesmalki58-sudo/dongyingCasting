import type { Metadata } from 'next';
import { SITE } from './site';
import { locales, defaultLocale, type Locale } from '@/i18n/config';

// Open Graph requires language_TERRITORY codes, not bare language codes.
const OG_LOCALE: Record<Locale, string> = {
  en: 'en_US',
  zh: 'zh_CN',
  de: 'de_DE',
  es: 'es_ES',
  ar: 'ar_AR'
};

type Args = {
  locale: Locale;
  path?: string;            // e.g. 'products' (no leading slash)
  title: string;
  description: string;
  image?: string;
};

// Builds canonical + hreflang alternates and OG/Twitter for a page.
export function buildMetadata({ locale, path = '', title, description, image }: Args): Metadata {
  const seg = path ? `/${path}` : '';
  const canonical = `${SITE.url}/${locale}${seg}`;
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = `${SITE.url}/${l}${seg}`;
  languages['x-default'] = `${SITE.url}/${defaultLocale}${seg}`;

  return {
    title,
    description,
    alternates: { canonical, languages },
    openGraph: {
      type: 'website',
      url: canonical,
      siteName: SITE.name,
      title,
      description,
      images: [{ url: image ?? SITE.ogImage, width: 1200, height: 630, alt: title }],
      locale: OG_LOCALE[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => OG_LOCALE[l])
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image ?? SITE.ogImage]
    },
    robots: { index: true, follow: true }
  };
}
