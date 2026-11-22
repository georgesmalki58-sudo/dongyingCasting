// Minimal structured logger: one JSON object per line on stdout/stderr, which pm2
// captures (pm2 logs dongying / ~/.pm2/logs). Never pass secrets or full form bodies.
type Level = 'info' | 'warn' | 'error';

function errInfo(e: unknown) {
  if (e instanceof Error) return { name: e.name, message: e.message, stack: process.env.NODE_ENV === 'production' ? undefined : e.stack };
  return { message: String(e) };
}

function write(level: Level, evt: string, data: Record<string, unknown> = {}) {
  const { err, ...rest } = data;
  const line = JSON.stringify({ ts: new Date().toISOString(), level, evt, ...rest, ...(err !== undefined ? { err: errInfo(err) } : {}) });
  if (level === 'error') console.error(line);
  else if (level === 'warn') console.warn(line);
  else console.log(line);
}

export const log = {
  info: (evt: string, data?: Record<string, unknown>) => write('info', evt, data),
  warn: (evt: string, data?: Record<string, unknown>) => write('warn', evt, data),
  error: (evt: string, data?: Record<string, unknown>) => write('error', evt, data)
};
