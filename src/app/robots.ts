import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/'] },
      // Explicitly welcome major Chinese search crawlers.
      { userAgent: 'Baiduspider', allow: '/', disallow: ['/api/'] },
      { userAgent: 'Sogou web spider', allow: '/', disallow: ['/api/'] },
      { userAgent: '360Spider', allow: '/', disallow: ['/api/'] },
      { userAgent: 'Yisouspider', allow: '/', disallow: ['/api/'] }
    ],
    sitemap: `${SITE.url}/sitemap.xml`
  };
}
