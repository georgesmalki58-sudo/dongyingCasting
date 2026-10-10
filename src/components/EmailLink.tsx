// Renders a mailto link wrapped in Cloudflare's <!--email_off--> markers.
//
// Cloudflare "Email Address Obfuscation" rewrites e-mail addresses in the HTML and
// injects email-decode.min.js — which our nonce-based CSP (correctly) blocks. The
// rewritten HTML then no longer matches what React renders, causing a hydration
// error (#418) on every page. Inside email_off markers Cloudflare leaves the address
// untouched. dangerouslySetInnerHTML is required because React can't emit HTML
// comments; the values are static, escaped constants (no user input).
const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));

export function EmailLink({ email, className }: { email: string; className?: string }) {
  const e = esc(email);
  const cls = className ? ` class="${esc(className)}"` : '';
  return (
    <span
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: `<!--email_off--><a href="mailto:${e}"${cls}>${e}</a><!--/email_off-->` }}
    />
  );
}
