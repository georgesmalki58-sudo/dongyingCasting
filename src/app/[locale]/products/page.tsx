import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { type Locale, getDictionary } from '@/i18n/config';
import { IMAGES, SITE } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';
import { SectionHeading } from '@/components/SectionHeading';
import { Card } from '@/components/Card';
import { JsonLd } from '@/components/JsonLd';
import { productSchema, breadcrumbSchema } from '@/lib/schema';
import { PRODUCT_LINES, moqText } from '@/lib/product-lines';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale);
  return buildMetadata({ locale, path: 'products', title: t.products.title, description: t.seo.metaDesc.products, image: IMAGES.investment1, keywords: t.seo.keywords.products });
}

export default async function Products({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDictionary(locale);
  const items = Object.values(t.products.items);
  return (
    <>
      <JsonLd data={[
        breadcrumbSchema(locale, [{ name: t.nav.home, path: '' }, { name: t.products.title, path: 'products' }]),
        productSchema({ name: t.products.featured.title, description: t.products.featured.body, image: IMAGES.highTempAlloy }),
        ...items.map((i) => productSchema({ name: i.name, description: i.body, image: IMAGES.investment1 }))
      ]} />
      <section className="container-x py-16">
        <SectionHeading as="h1" title={t.products.title} intro={t.products.intro} />
        {/* Featured: High-Temperature Alloy Series */}
        <article className="mt-10 grid overflow-hidden rounded-xl border border-steel-200 bg-white shadow-sm md:grid-cols-2">
          <div className="relative aspect-[910/556] md:aspect-auto md:min-h-[320px]">
            <Image src={IMAGES.highTempAlloy} alt={t.products.featured.alt} fill
                   sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="flex flex-col justify-center gap-4 p-6 md:p-10">
            <span className="inline-flex w-fit rounded-full bg-brand px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              {t.products.featured.badge}
            </span>
            <h2 className="text-2xl font-bold text-brand">{t.products.featured.title}</h2>
            <p className="prose-muted">{t.products.featured.body}</p>
            <div className="flex flex-wrap gap-3">
              <Link href={`/${locale}/contact`}
                    className="inline-flex w-fit rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark">
                {t.cta.quote}
              </Link>
              <Link href={`/${locale}/products/superalloy-turbine-components`}
                    className="inline-flex w-fit rounded-md border border-brand px-5 py-2.5 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white">
                {t.lines.labels.viewDetails}
              </Link>
            </div>
          </div>
        </article>

        {/* Product lines with dedicated detail pages */}
        <div className="mt-14">
          <h2 className="text-2xl font-bold text-brand">{t.lines.labels.title}</h2>
          <p className="prose-muted mt-2">{t.lines.labels.intro}</p>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_LINES.map((l) => (
              <li key={l.slug}>
                <Link href={`/${locale}/products/${l.slug}`}
                      className="group flex h-full flex-col overflow-hidden rounded-xl border border-steel-200 bg-white transition-shadow hover:shadow-md">
                  <div className="relative aspect-[4/3] bg-white">
                    <Image src={l.images[0]} alt={t.lines[l.key].name} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-contain p-4" />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 border-t border-steel-200 p-5">
                    <h3 className="text-lg font-semibold text-brand group-hover:text-brand">{t.lines[l.key].name}</h3>
                    <p className="prose-muted text-lg">{t.lines[l.key].summary}</p>
                    <p className="mt-auto pt-2 text-sm font-semibold text-steel-800">{t.lines.labels.moq}: {moqText(t, l.moq)}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
