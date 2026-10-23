import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { type Locale, getDictionary } from '@/i18n/config';
import { buildMetadata } from '@/lib/seo';
import { SectionHeading } from '@/components/SectionHeading';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { FEATURED_LINE } from '@/lib/product-lines';
import { ApprovalMark } from '@/components/TypeApprovalCard';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale);
  return buildMetadata({ locale, path: 'industries', title: t.industries.title, description: t.seo.metaDesc.industries, keywords: t.seo.keywords.industries });
}

export default async function Industries({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDictionary(locale);
  const { trailer, ...rest } = t.industries.items;
  const items = Object.values(rest);
  const p = FEATURED_LINE;
  const host = p.infoUrl ? new URL(p.infoUrl).hostname : '';
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
              <p className="prose-muted mt-2 text-xl">{i.desc}</p>
            </div>
          ))}
          {/* Towing & trailers — links to our type-approved GMC 3000 coupling */}
          <article className="card grid gap-5 sm:col-span-2 md:grid-cols-2">
            <Link href={`/${locale}/products/${p.slug}`} className="relative block aspect-[16/9] overflow-hidden rounded-lg bg-steel-950">
              <Image src={p.cardImage ?? p.images[0]} alt={t.lines[p.key].name} fill sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
            </Link>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand-accent" />
                <h2 className="text-lg font-semibold text-brand">{trailer.name}</h2>
              </div>
              <p className="prose-muted text-xl">{trailer.desc}</p>
              {p.approval ? <ApprovalMark a={p.approval} className="text-brand" /> : null}
              <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-sm font-semibold">
                <Link href={`/${locale}/products/${p.slug}`} className="text-brand hover:underline">{t.lines.labels.viewDetails} →</Link>
                {p.infoUrl ? (
                  <a href={p.infoUrl} target="_blank" rel="noopener" className="text-brand-light hover:underline">
                    {t.lines.labels.moreInfo} <span dir="ltr">{host}</span> ↗
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
