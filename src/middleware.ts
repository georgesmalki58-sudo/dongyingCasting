import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from '@/i18n/config';
import { PRODUCT_SLUGS, BLOG_SLUGS } from '@/lib/known-slugs';

function detectLocale(req: NextRequest): string {
  const header = req.headers.get('accept-language');
  if (header) {
    for (const part of header.split(',')) {
      const code = part.split(';')[0].trim().slice(0, 2).toLowerCase();
      if ((locales as readonly string[]).includes(code)) return code;
    }
  }
  return defaultLocale;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // API routes are locale-agnostic — never redirect them (that would break POSTs).
  if (pathname.startsWith('/api/')) {
    return NextResponse.next();
  }

  // 1) Locale routing: redirect bare paths to a locale-prefixed path.
  const hasLocale = (locales as readonly string[]).some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (!hasLocale) {
    const locale = detectLocale(req);
    const url = req.nextUrl.clone();
    url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
    return NextResponse.redirect(url);
  }

  // 2) Security headers, incl. a per-request CSP nonce.
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  const isProd = process.env.NODE_ENV === 'production';

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set('x-nonce', nonce);
  // Expose the active locale so the root layout can server-render <html lang/dir>
  // (important for Baidu, which doesn't reliably run the client-side patch).
  requestHeaders.set('x-locale', pathname.split('/')[1] || 'en');

  // Strict nonce-based CSP is applied in PRODUCTION only. Next.js dev mode relies on
  // inline scripts, eval, and an HMR websocket that a strict CSP would block (blank page).
  let csp: string | null = null;
  if (isProd) {
    csp = [
      `default-src 'self'`,
      `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://challenges.cloudflare.com https://hm.baidu.com https://static.cloudflareinsights.com`,
      `style-src 'self' 'unsafe-inline'`,
      `img-src 'self' data: blob: https://hm.baidu.com`,
      `font-src 'self' data:`,
      `frame-src https://challenges.cloudflare.com https://www.google.com`,
      `connect-src 'self' https://challenges.cloudflare.com https://hm.baidu.com https://cloudflareinsights.com`,
      `object-src 'none'`,
      `base-uri 'self'`,
      `form-action 'self'`,
      `frame-ancestors 'self'`,
      `upgrade-insecure-requests`
    ].join('; ');
    // Next.js reads the nonce from the CSP header on the REQUEST to auto-propagate
    // it onto its own framework scripts. Must be set on the request, not only the response.
    requestHeaders.set('Content-Security-Policy', csp);
  }

  // Unknown product/blog slugs -> rewrite to an unmatched route so Next serves the
  // not-found page with a real 404 status (instead of a streamed 200 soft-404).
  const m = pathname.match(/^\/([a-z]{2})\/(products|blog)\/([^/]+)\/?$/);
  const unknownSlug = !!m && !(m[2] === 'products' ? PRODUCT_SLUGS : BLOG_SLUGS).has(m[3]);
  const res = unknownSlug
    ? NextResponse.rewrite(new URL(`/${m![1]}/__not-found__`, req.url), { request: { headers: requestHeaders } })
    : NextResponse.next({ request: { headers: requestHeaders } });
  if (csp) res.headers.set('Content-Security-Policy', csp);
  // Static security headers (nosniff, HSTS, frame/referrer/permissions, COOP/CORP, DNS-prefetch)
  // come from next.config.mjs headers() so they're sent exactly once on every route.
  return res;
}

export const config = {
  // Run on everything except static assets and API (API handles its own headers).
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|assets|images|robots.txt|sitemap.xml|.*\\.\\w+$).*)']
};
