# Production deploy checklist — dongying-casting.com

Host: Hostinger VPS (pm2 app `dongying`, port 3002, nginx, behind Cloudflare).
Deploy: `scripts/deploy-vps.sh` · Rollback: `scripts/rollback-vps.sh`.

| # | Item | How it is covered |
|---|------|-------------------|
| 01 | Env vars | `.env.example` documents every key. `src/lib/env.ts` validates them with zod at boot (`src/instrumentation.ts`); deploy aborts if a required key is missing. |
| 02 | Secrets | `.env*.local` git-ignored, never committed (history checked). Server copy `chmod 600`. Secrets are server-only (no `NEXT_PUBLIC_` prefix); `/api/health` never exposes names or values. |
| 03 | Debug mode | `NODE_ENV=production` build/start, `poweredByHeader: false`, no browser source maps, generic error messages in production. |
| 04 | Migrations | N/A — the site has no database (content in code, inquiries go by email). |
| 05 | Security | CSP with per-request nonce, HSTS preload, frame/referrer/permissions headers, same-origin check, rate limit, honeypot, Turnstile, upload magic-byte + deep content scan. Deploy fails on any critical `npm audit` finding (prod deps: 0 vulnerabilities as of 2026-11-22). |
| 06 | Validation | zod schema for all form fields (length caps, control-char/CRLF blocking), upload whitelist, size/count limits. |
| 07 | HTTPS | Cloudflare TLS, HSTS `max-age=63072000; includeSubDomains; preload`, CSP `upgrade-insecure-requests`; origin accepts Cloudflare IPs only. |
| 08 | Logging | `src/lib/log.ts` writes one JSON line per event (`inquiry`, `upload_blocked`, `smtp_send_failed`, `env_invalid`, …) → `pm2 logs dongying`. |
| 09 | Monitoring | `GET /api/health` → 200 `{status:"ok",build,uptimeSec}` or 503. Used by the deploy script; point an uptime monitor (e.g. UptimeRobot / Cloudflare Health Checks) at `https://dongying-casting.com/api/health`. |
| 10 | Rollback | Deploy builds beside the live dir, swaps, health-checks and auto-rolls back on failure. Last 3 snapshots kept; `scripts/rollback-vps.sh` restores the newest one manually. |
