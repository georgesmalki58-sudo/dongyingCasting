import { NextResponse } from 'next/server';
import { checkEnv } from '@/lib/env';

// Liveness/readiness probe for the deploy script and external uptime monitors.
// Returns 200 when the app is up and its environment is valid, 503 otherwise.
// Exposes no variable names or values — only coarse status.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const started = Date.now();
const build = process.env.BUILD_ID || process.env.GIT_SHA || 'unknown';

export function GET() {
  const env = checkEnv();
  const body = {
    status: env.ok ? 'ok' : 'degraded',
    build,
    uptimeSec: Math.round((Date.now() - started) / 1000),
    checks: { env: env.ok ? 'ok' : 'fail', turnstile: env.warnings.length ? 'warn' : 'ok' }
  };
  return NextResponse.json(body, {
    status: env.ok ? 200 : 503,
    headers: { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' }
  });
}
