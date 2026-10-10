import { getCloudflareContext } from '@opennextjs/cloudflare';

// Rate limiting: on Cloudflare Workers the globally-consistent Workers Rate Limiting
// binding (CONTACT_RATE_LIMITER in wrangler.jsonc) is used. Each Worker isolate has
// its own memory, so the in-memory limiter below is only a per-isolate fallback
// (local `next start`, or if the binding is missing).
type RateLimiterBinding = { limit: (opts: { key: string }) => Promise<{ success: boolean }> };

export async function edgeRateLimit(key: string, fallbackLimit = 5, windowMs = 60_000): Promise<boolean> {
  try {
    const { env } = getCloudflareContext();
    const rl = (env as unknown as Record<string, RateLimiterBinding | undefined>).CONTACT_RATE_LIMITER;
    if (rl) return (await rl.limit({ key })).success;
  } catch {
    // Not running on Workers (local dev / next start) — fall through.
  }
  return rateLimit(key, fallbackLimit, windowMs).ok;
}

type Bucket = { count: number; reset: number };
const store = new Map<string, Bucket>();

export function rateLimit(key: string, limit = 5, windowMs = 60_000): { ok: boolean; remaining: number } {
  const now = Date.now();
  const b = store.get(key);
  if (!b || now > b.reset) {
    store.set(key, { count: 1, reset: now + windowMs });
    return { ok: true, remaining: limit - 1 };
  }
  if (b.count >= limit) return { ok: false, remaining: 0 };
  b.count += 1;
  return { ok: true, remaining: limit - b.count };
}

export function clientIp(req: Request): string {
  const h = req.headers;
  return (
    h.get('cf-connecting-ip') ||
    h.get('x-real-ip') ||
    h.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    'unknown'
  );
}

// Verifies a Cloudflare Turnstile token. No-ops (returns true) if no secret is set,
// so local/dev builds work; set TURNSTILE_SECRET_KEY in production.
export async function verifyTurnstile(token: string | undefined, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    if (process.env.NODE_ENV === 'production') {
      console.error('[security] TURNSTILE_SECRET_KEY is not set — contact form has no bot verification.');
    }
    return true;
  }
  if (!token) return false;
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token, remoteip: ip })
    });
    const data = (await res.json()) as { success: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}
