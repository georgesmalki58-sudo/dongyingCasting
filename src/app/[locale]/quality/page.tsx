import type { Metadata } from 'next';
import { type Locale, getDictionary } from '@/i18n/config';
import { SITE } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';
import { SectionHeading } from '@/components/SectionHeading';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale);
  return buildMetadata({ locale, path: 'quality', title: t.quality.title, description: t.seo.metaDesc.quality, keywords: t.seo.keywords.quality });
}

export default async function Quality({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDictionary(locale);
  const blocks = [
    { h: t.quality.iso, b: t.quality.isoBody },
    { h: t.quality.testing, b: t.quality.testingBody },
    { h: t.quality.inspection, b: t.quality.inspectionBody }
  ];
  return (
    <>
      <JsonLd data={breadcrumbSchema(locale, [{ name: t.nav.home, path: '' }, { name: t.quality.title, path: 'quality' }])} />
      <section className="container-x py-16">
        <SectionHeading as="h1" title={t.quality.title} intro={t.quality.intro} />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {blocks.map((x) => (
            <div key={x.h} className="card">
              <h2 className="text-lg font-bold text-steel-900">{x.h}</h2>
              <p className="prose-muted mt-2 text-sm">{x.b}</p>
            </div>
          ))}
        </div>
        {/* International type approval reference (UN ECE R55) */}
        <div className="mt-12 overflow-hidden rounded-xl border border-steel-200 bg-steel-50">
          <div className="grid gap-6 p-6 md:grid-cols-[1.3fr_1fr] md:p-8">
            <div>
              <h2 className="text-xl font-bold text-steel-900">{t.quality.approval.title}</h2>
              <p className="prose-muted mt-3">{t.quality.approval.body}</p>
            </div>
            <dl className="divide-y divide-steel-200 self-start rounded-lg border border-steel-200 bg-white text-sm">
              {t.quality.approval.rows.map(([k, v]) => (
                <div key={k} className="px-4 py-3">
                  <dt className="font-semibold text-steel-700">{k}</dt>
                  <dd className="mt-0.5 text-steel-900">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <ul className="mt-8 flex flex-wrap gap-3">
          {SITE.certifications.map((c) => (
            <li key={c} className="rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white">{c}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
