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

**Pages** (i18n: `en`, `zh`, `de`, `es`, `ar` — Arabic is RTL) — Home, About, Products, Industries, Quality, Factory, Knowledge Center (Blog), Contact.

**Security (defense in depth)**
- `src/middleware.ts`: per-request **CSP with nonce** (`strict-dynamic`, no `unsafe-inline`/`unsafe-eval` in prod), HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy.
- `public/_headers`: same headers for Cloudflare-served static assets.
- `next.config.mjs`: header fallback + `poweredByHeader: false`.
- Forms: Zod validation (control-char/CRLF filtering), honeypot, Workers Rate Limiting binding (`src/lib/rate-limit.ts`), Cloudflare Turnstile, upload whitelist (PDF/DOCX/XLSX/STEP/DWG/DXF/ZIP/JPG/PNG), 20 MB per submission, magic-byte checks (`src/lib/validation.ts`).
- Upload malware scan (`src/lib/file-scan.ts`): blocks Office macros/ActiveX/OLE embeddings and external-template injection, PDF JavaScript/Launch/EmbeddedFile (incl. #xx-obfuscated names and compressed object streams), encrypted PDFs/ZIPs, executables or nested archives in ZIPs, zip bombs, path traversal, polyglot images, RTL-override file names. No database ⇒ no SQL injection surface.
- API routes set `runtime = 'nodejs'`; cookies (when added) should be `HttpOnly; Secure; SameSite=Strict`.

**SEO**
- Dynamic `Metadata` per page + canonical + **hreflang** alternates (`src/lib/seo.ts`).
- JSON-LD: Organization, Manufacturer/LocalBusiness, Product, FAQ, Breadcrumb (`src/lib/schema.ts`), nonce-bound.
- `app/sitemap.ts` (with language alternates) and `app/robots.ts`.
- `next/image` with AVIF/WebP, lazy loading, and Core Web Vitals-friendly layout.

**Images** are self-hosted in `public/images` (WebP, auto-optimized by `scripts/optimize-images.mjs` on `prebuild`). No remote image hosts.

## Deploy (production)

Production runs on the **Hostinger VPS** (`srv1083692`, `72.60.34.211`) behind Cloudflare:
`/var/www/dongyingCasting` → `next start` on port **3002** (pm2 app `dongying`) → nginx vhost `dongying` → Cloudflare proxy.

```powershell
# from C:\dongyingCasting, after pushing to GitHub main:
Get-Content -Raw scripts\deploy-vps.sh | ssh -i $env:USERPROFILE\.ssh\ashtar_vps root@72.60.34.211 "tr -d '\r\357\273\277' | bash -s"
```
The script clones `main` into a release dir, builds it, swaps it in, restarts pm2 and rolls back automatically if the health check fails (previous build kept as `/var/www/dongyingCasting-prev-<ts>`).

Server notes: secrets live in `/var/www/dongyingCasting/.env.local` (copied on each deploy). nginx `client_max_body_size 22M`; origin accepts **Cloudflare IPs only** (`snippets/cloudflare-origin-only.conf` + `conf.d/cloudflare-geo.conf`), real client IP from `CF-Connecting-IP`. TLS origin: Let's Encrypt cert `/etc/letsencrypt/live/dongying-casting.com` (auto-renew via certbot.timer) on a 443 server block → Cloudflare SSL mode should be **Full (strict)**.

> Cloudflare Workers is NOT used for production: Hostinger SMTP sits on Cloudflare IPs, which Workers sockets cannot reach. `wrangler.jsonc` only drives the optional `preview.dongying-casting.com` staging Worker.

## TODO
- Fill China filings / verification: `SITE.icp`, Baidu/Sogou/360 verification env vars, `NEXT_PUBLIC_CF_BEACON_TOKEN`.
- Verify SMTP (nodemailer) delivery from the Cloudflare Worker runtime; fall back to an HTTP email API if TCP SMTP is unavailable.
- Back the in-memory rate limiter with KV / a Cloudflare WAF rate-limit rule (Workers isolates don't share memory).
- Add a downloadable Company Profile PDF.
