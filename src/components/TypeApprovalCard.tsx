import type { Dictionary, Locale } from '@/i18n/config';
import type { TypeApproval } from '@/lib/product-lines';

// The "E-circle" approval mark as it appears on the part (e.g. (E57) 55R – 03 0158).
export function ApprovalMark({ a, className = '' }: { a: TypeApproval; className?: string }) {
  return (
    <span dir="ltr" className={`inline-flex items-center gap-2 font-semibold ${className}`}>
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-current text-xs font-bold">
        {a.eCode}
      </span>
      <span className="font-mono">{a.mark}</span>
    </span>
  );
}

export function TypeApprovalCard({ a, t, locale }: { a: TypeApproval; t: Dictionary; locale: Locale }) {
  const L = t.lines.labels;
  const granted = new Intl.DateTimeFormat(locale, { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(a.granted));
  const rows: [string, string][] = [
    [L.approvalNo, a.number],
    [L.regulation, a.regulation],
    [L.deviceClass, a.deviceClass],
    [L.values, a.values.map(([k, v]) => `${k} = ${v}`).join(' · ')],
    [L.authority, a.authority],
    [L.granted, granted]
  ];
  return (
    <section aria-labelledby="type-approval" className="rounded-xl border border-steel-200 bg-white">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-steel-200 px-5 py-4">
        <h2 id="type-approval" className="text-lg font-bold text-brand">{L.approvalTitle}</h2>
        <ApprovalMark a={a} className="text-brand" />
      </div>
      <dl className="divide-y divide-steel-200 text-sm">
        {rows.map(([k, v]) => (
          <div key={k} className="grid grid-cols-3 gap-4 px-5 py-3">
            <dt className="font-semibold text-steel-700">{k}</dt>
            <dd className="col-span-2 text-steel-900 [unicode-bidi:plaintext]">{v}</dd>
          </div>
        ))}
      </dl>
      <p className="border-t border-steel-200 px-5 py-3 text-sm text-steel-600">{L.approvalNote}</p>
    </section>
  );
}
