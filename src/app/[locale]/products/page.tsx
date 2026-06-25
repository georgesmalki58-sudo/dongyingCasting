import type { Metadata } from 'next';
import { type Locale, getDictionary } from '@/i18n/config';
import { IMAGES, SITE } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';
import { SectionHeading } from '@/components/SectionHeading';
import { Card } from '@/components/Card';
import { JsonLd } from '@/components/JsonLd';
import { productSchema, breadcrumbSchema } from '@/lib/schema';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale);
  return buildMetadata({ locale, path: 'products', title: t.products.title, description: t.products.intro, image: IMAGES.investment1 });
}

export default async function Products({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDictionary(locale);
  const items = Object.values(t.products.items);
  return (
    <>
      <JsonLd data={[
        breadcrumbSchema(locale, [{ name: t.nav.home, path: '' }, { name: t.products.title, path: 'products' }]),
        ...items.map((i) => productSchema({ name: i.name, description: i.body, image: IMAGES.investment1 }))
      ]} />
      <section className="container-x py-16">
        <SectionHeading as="h1" title={t.products.title} intro={t.products.intro} />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => <Card key={i.name} title={i.name} body={i.body} />)}
        </div>
        <div className="mt-12 text-center">
          <a href={SITE.alibaba} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 rounded-md bg-[#FF6A00] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M3 7l9-4 9 4v10l-9 4-9-4V7zm9 .8L6 5.4 4.5 6 12 9.2 19.5 6 18 5.4 12 7.8z"/></svg>
            {t.cta.alibaba}
          </a>
        </div>
      </section>
    </>
  );
}
