import type { Metadata } from 'next';
import { type Locale, getDictionary } from '@/i18n/config';
import { buildMetadata } from '@/lib/seo';
import { SectionHeading } from '@/components/SectionHeading';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale);
  return buildMetadata({ locale, path: 'industries', title: t.industries.title, description: t.industries.intro });
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
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <div key={i} className="card flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-accent" />
              <span className="font-semibold text-steel-900">{i}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
