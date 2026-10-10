// Slug allow-lists used by the middleware to return a real HTTP 404 for unknown
// /[locale]/products/[slug] and /[locale]/blog/[slug] URLs. (The root layout reads
// request headers, so pages render dynamically and notFound() alone would stream a
// 200 "soft 404".) Kept tiny so the middleware bundle doesn't pull in article bodies.
import { PRODUCT_LINES } from './product-lines';

export const PRODUCT_SLUGS = new Set(PRODUCT_LINES.map((l) => l.slug));

// Must match POSTS in blog.ts — enforced at build time by app/sitemap.ts.
export const BLOG_SLUGS = new Set([
  'investment-casting-guide',
  'lost-wax-casting',
  'stainless-steel-casting',
  'cnc-machining-cast-components',
  'surface-finishing-cast-parts',
  'heat-treatment-steel-castings'
]);
