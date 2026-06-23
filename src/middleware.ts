import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from '@/i18n/config';

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

  // Strict nonce-based CSP is applied in PRODUCTION only. Next.js dev mode relies on
  // inline scripts, eval, and an HMR websocket that a strict CSP would block (blank page).
  let csp: string | null = null;
  if (isProd) {
    csp = [
      `default-src 'self'`,
      `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://challenges.cloudflare.com`,
      `style-src 'self' 'unsafe-inline'`,
      `img-src 'self' data: blob:`,
      `font-src 'self' data:`,
      `frame-src https://challenges.cloudflare.com https://www.google.com`,
      `connect-src 'self' https://challenges.cloudflare.com`,
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

  const res = NextResponse.next({ request: { headers: requestHeaders } });
  if (csp) res.headers.set('Content-Security-Policy', csp);
  res.headers.set('X-Content-Type-Options', 'nosniff');
  res.headers.set('X-Frame-Options', 'SAMEORIGIN');
  res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), browsing-topics=()');
  res.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  res.headers.set('X-DNS-Prefetch-Control', 'off');
  // Cross-origin isolation hardening.
  res.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  res.headers.set('Cross-Origin-Resource-Policy', 'same-origin');
  return res;
}

export const config = {
  // Run on everything except static assets and API (API handles its own headers).
  matcher: ['/((?!_next/static|_next/image|favicon.ico|assets|images|robots.txt|sitemap.xml|.*\\.\\w+$).*)']
};
