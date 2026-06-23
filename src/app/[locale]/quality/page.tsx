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
  return buildMetadata({ locale, path: 'quality', title: t.quality.title, description: t.quality.intro });
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
        <ul className="mt-8 flex flex-wrap gap-3">
          {SITE.certifications.map((c) => (
            <li key={c} className="rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white">{c}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
