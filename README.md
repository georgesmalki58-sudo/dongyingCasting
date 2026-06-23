# Dongying Casting — Corporate Website

Modern, secure, SEO-optimized website for **Dongying Wanlong Mechanical Mould Co., Ltd.**
Built with **Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS**.

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in values as needed
npm run dev                  # http://localhost:3000  → redirects to /en
npm run build && npm start   # production build
npm run typecheck            # tsc --noEmit
```

## What's included

**Pages** (i18n: `en`, `zh`, `de`, `es`) — Home, About, Products, Industries, Quality, Factory, Knowledge Center (Blog), Contact.

**Security (defense in depth)**
- `src/middleware.ts`: per-request **CSP with nonce** (`strict-dynamic`, no `unsafe-inline`/`unsafe-eval` in prod), HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy.
- `public/_headers`: same headers for Cloudflare-served static assets.
- `next.config.mjs`: header fallback + `poweredByHeader: false`.
- Forms: Zod validation, honeypot, in-memory rate limiting (`src/lib/rate-limit.ts`), Cloudflare Turnstile verification, secure upload validation with extension whitelist (PDF/DOCX/XLSX/STEP/DWG/DXF/ZIP), 15 MB cap, MIME checks (`src/lib/validation.ts`).
- API routes set `runtime = 'nodejs'`; cookies (when added) should be `HttpOnly; Secure; SameSite=Strict`.

**SEO**
- Dynamic `Metadata` per page + canonical + **hreflang** alternates (`src/lib/seo.ts`).
- JSON-LD: Organization, Manufacturer/LocalBusiness, Product, FAQ, Breadcrumb (`src/lib/schema.ts`), nonce-bound.
- `app/sitemap.ts` (with language alternates) and `app/robots.ts`.
- `next/image` with AVIF/WebP, lazy loading, and Core Web Vitals-friendly layout.

**Images** are reused from the existing site via `next/image` `remotePatterns` (`dongying-casting.com`). For full self-hosting, download assets into `public/images` and update `src/lib/site.ts`.

## Deploy to Cloudflare

Recommended: **Cloudflare Workers via OpenNext**.

```bash
npm i -D @opennextjs/cloudflare wrangler
npx opennextjs-cloudflare build
npx wrangler deploy
```

Then in the Cloudflare dashboard, enable: WAF + rate-limiting rules, Bot Fight Mode / Turnstile, "Always Use HTTPS", automatic HTTPS rewrites, and Tiered Cache. Set secrets with `npx wrangler secret put TURNSTILE_SECRET_KEY` etc. Bind KV for distributed rate limiting and R2 for attachment storage (scan uploads with an AV step before persisting).

> Static-export alternative (Cloudflare Pages) is possible but drops the API routes and nonce-based middleware CSP; the Workers path above preserves them.

## TODO before launch
- Replace placeholder phone/WhatsApp/WeChat/geo in `src/lib/site.ts`.
- Wire email/CRM delivery in `src/app/api/contact/route.ts`.
- Add real blog article routes and Company Profile PDF.
- Move reused images to local `public/` for full control.
