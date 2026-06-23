import { SITE } from './site';
import type { Locale } from '@/i18n/config';

// JSON-LD has no metadataBase resolution, so image/logo URLs must be absolute.
const abs = (p: string) => (p.startsWith('http') ? p : `${SITE.url}${p}`);

const addr = {
  '@type': 'PostalAddress',
  streetAddress: SITE.address.street,
  addressLocality: SITE.address.locality,
  addressRegion: SITE.address.region,
  postalCode: SITE.address.postalCode,
  addressCountry: SITE.address.country
};

export function organizationSchema(locale: Locale = 'en') {
  const zh = locale === 'zh';
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: zh ? SITE.legalNameZh : SITE.legalName,
    alternateName: zh ? SITE.legalName : SITE.legalNameZh,
    url: SITE.url,
    logo: abs(SITE.ogImage),
    foundingDate: SITE.founded,
    email: SITE.email,
    telephone: SITE.phone,
    address: addr,
    sameAs: [SITE.linkedin]
  };
}

export function localBusinessSchema(locale: Locale = 'en') {
  const zh = locale === 'zh';
  return {
    '@context': 'https://schema.org',
    '@type': 'Manufacturer',
    '@id': `${SITE.url}/#organization`,
    name: zh ? SITE.legalNameZh : SITE.legalName,
    alternateName: zh ? SITE.legalName : SITE.legalNameZh,
    url: SITE.url,
    image: abs(SITE.ogImage),
    telephone: SITE.phone,
    address: addr,
    geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    areaServed: 'Worldwide',
    hasCredential: SITE.certifications
  };
}

export function productSchema(p: { name: string; description: string; image?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.name,
    description: p.description,
    image: abs(p.image ?? SITE.ogImage),
    brand: { '@type': 'Brand', name: SITE.name },
    manufacturer: { '@type': 'Organization', name: SITE.legalName }
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a }
    }))
  };
}

export function breadcrumbSchema(locale: Locale, trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: `${SITE.url}/${locale}${t.path ? `/${t.path}` : ''}`
    }))
  };
}
