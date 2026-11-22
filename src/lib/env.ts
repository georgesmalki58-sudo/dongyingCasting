import { z } from 'zod';

// Server-side environment contract. Validated once at boot (src/instrumentation.ts)
// and reused by /api/health. Never return secret VALUES from here — names only.
const serverSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  NEXT_PUBLIC_SITE_URL: z.string().url(),
  SMTP_HOST: z.string().min(1),
  SMTP_PORT: z.coerce.number().int().positive().default(465),
  SMTP_USER: z.string().email(),
  SMTP_PASS: z.string().min(1),
  CONTACT_FROM: z.string().min(3).optional(),
  CONTACT_COPY_TO: z.string().email().optional().or(z.literal('')),
  CONTACT_COPY_ZH_TO: z.string().email().optional().or(z.literal('')),
  TURNSTILE_SECRET_KEY: z.string().optional(),
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: z.string().optional()
});

export type EnvReport = { ok: boolean; invalid: string[]; warnings: string[] };

let cached: EnvReport | null = null;

export function checkEnv(): EnvReport {
  if (cached) return cached;
  const res = serverSchema.safeParse(process.env);
  const invalid = res.success ? [] : [...new Set(res.error.issues.map((i) => String(i.path[0])))];
  const warnings: string[] = [];
  // Turnstile must be configured as a pair, otherwise the form is either unprotected or unusable.
  const site = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (site && !secret) warnings.push('TURNSTILE_SECRET_KEY missing while site key is set');
  if (!site && secret) warnings.push('NEXT_PUBLIC_TURNSTILE_SITE_KEY missing while secret is set');
  if (!site && !secret) warnings.push('Turnstile disabled (no bot verification on contact form)');
  cached = { ok: invalid.length === 0, invalid, warnings };
  return cached;
}
