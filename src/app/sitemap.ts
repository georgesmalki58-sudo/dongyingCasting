import type { MetadataRoute } from 'next';
import { SITE, NAV } from '@/lib/site';
import { locales } from '@/i18n/config';
import { POSTS } from '@/lib/blog';

// Stable last-modified for static pages so every deploy doesn't churn <lastmod>.
const SITE_UPDATED = new Date('2026-06-23');

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const item of NAV) {
    for (const locale of locales) {
      const path = item.href ? `/${locale}/${item.href}` : `/${locale}`;
      entries.push({
        url: `${SITE.url}${path}`,
        lastModified: SITE_UPDATED,
        changeFrequency: item.href === 'blog' ? 'weekly' : 'monthly',
        priority: item.href === '' ? 1 : 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${SITE.url}/${l}${item.href ? `/${item.href}` : ''}`])
          )
        }
      });
    }
  }

  for (const post of POSTS) {
    for (const locale of locales) {
      entries.push({
        url: `${SITE.url}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'yearly',
        priority: 0.6,
        alternates: {
          languages: Object.fromEntries(locales.map((l) => [l, `${SITE.url}/${l}/blog/${post.slug}`]))
        }
      });
    }
  }

  return entries;
}
