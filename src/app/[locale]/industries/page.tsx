import type { Metadata } from 'next';
import { type Locale, getDictionary } from '@/i18n/config';
import { buildMetadata } from '@/lib/seo';
import { SectionHeading } from '@/components/SectionHeading';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale);
  return buildMetadata({ locale, path: 'industries', title: t.industries.title, description: t.seo.metaDesc.industries, keywords: t.seo.keywords.industries });
}

export default async function Industries({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDictionary(locale);
  const items = Object.values(t.industries.items);
  return (
    <>
      <JsonLd data={breadcrumbSchema(locale, [{ name: t.nav.home, path: '' }, { name: t.industries.title, path: 'industries' }])} />
      <section className="container-x py-16">
        <SectionHeading as="h1" title={t.industries.title} intro={t.industries.intro} />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <div key={i.name} className="card">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand-accent" />
                <h2 className="text-lg font-semibold text-brand">{i.name}</h2>
              </div>
              <p className="prose-muted mt-2 text-base">{i.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
