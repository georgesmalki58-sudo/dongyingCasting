import Link from 'next/link';

export function Card({ title, body, href }: { title: string; body: string; href?: string }) {
  const inner = (
    <div className="card h-full">
      <h3 className="text-lg font-semibold text-steel-900">{title}</h3>
      <p className="prose-muted mt-2 text-sm">{body}</p>
      {href ? <span className="mt-4 inline-block text-sm font-semibold text-brand-light">→</span> : null}
    </div>
  );
  return href ? <Link href={href} className="block focus-visible:outline-none">{inner}</Link> : inner;
}
