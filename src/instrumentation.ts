// Runs once when the Next.js server boots. Validates the environment so a bad
// .env.local is visible immediately in `pm2 logs dongying` (and in /api/health),
// instead of surfacing later as a failed customer inquiry.
export async function register() {
  if (process.env.NEXT_RUNTIME !== 'nodejs') return;
  const { checkEnv } = await import('@/lib/env');
  const { log } = await import('@/lib/log');
  const r = checkEnv();
  if (!r.ok) log.error('env_invalid', { invalid: r.invalid });
  for (const w of r.warnings) log.warn('env_warning', { msg: w });
  log.info('server_start', { node: process.version, env: process.env.NODE_ENV, envOk: r.ok });
}
