import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales, type Locale, getDictionary } from '@/i18n/config';
import { SITE } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { PRODUCT_LINES, getLine, moqText } from '@/lib/product-lines';

type Params = { params: Promise<{ locale: Locale; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => PRODUCT_LINES.map((l) => ({ locale, slug: l.slug })));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params;
  const line = getLine(slug);
  if (!line) return {};
  const c = getDictionary(locale).lines[line.key];
  return buildMetadata({ locale, path: `products/${slug}`, title: c.name, description: c.summary, image: line.images[0], keywords: c.keywords });
}

export default async function ProductLinePage({ params }: Params) {
  const { locale, slug } = await params;
  const line = getLine(slug);
  if (!line) notFound();
  const t = getDictionary(locale);
  const L = t.lines.labels;
  const c = t.lines[line.key];
  const others = PRODUCT_LINES.filter((l) => l.slug !== slug);
  const url = `${SITE.url}/${locale}/products/${slug}`;

  const productLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: c.name,
    description: `${c.summary} ${c.body}`,
    image: line.images.map((i) => `${SITE.url}${i}`),
    url,
    material: c.materials,
    brand: { '@type': 'Brand', name: SITE.name },
    manufacturer: { '@type': 'Organization', name: SITE.legalName, url: SITE.url },
    category: t.products.title
  };

  return (
    <>
      <JsonLd data={[
        productLd,
        breadcrumbSchema(locale, [
          { name: t.nav.home, path: '' },
          { name: t.products.title, path: 'products' },
          { name: c.name, path: `products/${slug}` }
        ])
      ]} />
      <section className="container-x py-12 md:py-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-steel-500">
          <Link href={`/${locale}`} className="hover:text-brand">{t.nav.home}</Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <Link href={`/${locale}/products`} className="hover:text-brand">{t.products.title}</Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <span className="text-steel-700">{c.name}</span>
        </nav>

        {line.banner ? (
          <div className="relative mb-10 aspect-[1600/463] w-full overflow-hidden rounded-xl border border-steel-200">
            <Image src={line.banner} alt={c.name} fill priority sizes="100vw" className="object-cover" />
          </div>
        ) : null}

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="relative aspect-square overflow-hidden rounded-xl border border-steel-200 bg-white">
              <Image src={line.images[0]} alt={c.name} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain p-4" />
            </div>
            {line.images.length > 1 ? (
              <ul className="mt-4 grid grid-cols-4 gap-3">
                {line.images.slice(1).map((src, i) => (
                  <li key={src} className="relative aspect-square overflow-hidden rounded-lg border border-steel-200 bg-white">
                    <Image src={src} alt={`${c.name} ${i + 2}`} fill sizes="25vw" className="object-contain p-2" />
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold text-steel-900 md:text-4xl">{c.name}</h1>
            <p className="text-lg text-steel-700">{c.summary}</p>
            <dl className="divide-y divide-steel-200 rounded-xl border border-steel-200 text-sm">
              {([
                [L.materials, c.materials],
                [L.process, c.process],
                ...('surface' in c ? [[L.surface, (c as { surface: string }).surface]] : []),
                [L.moq, moqText(t, line.moq)]
              ] as [string, string][]).map(([k, v]) => (
                <div key={k} className="grid grid-cols-3 gap-4 px-4 py-3">
                  <dt className="font-semibold text-steel-700">{k}</dt>
                  <dd className="col-span-2 text-steel-900">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-wrap gap-3">
              <Link href={`/${locale}/contact`}
                    className="inline-flex rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark">
                {t.cta.quote}
              </Link>
              <a href={line.alibaba} target="_blank" rel="noopener noreferrer"
                 className="inline-flex rounded-md border border-[#FF6A00] px-5 py-3 text-sm font-semibold text-[#c2410c] transition-colors hover:bg-[#FF6A00] hover:text-white">
                {L.viewAlibaba}
              </a>
            </div>
            <p className="text-sm text-steel-500">{L.drawingNote}</p>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="leading-relaxed text-steel-700">{c.body}</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-steel-900">{L.applications}</h2>
            <ul className="mt-3 space-y-2 text-steel-700">
              {c.apps.map((a) => (
                <li key={a} className="flex gap-2"><span aria-hidden="true" className="text-brand">•</span>{a}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-xl font-bold text-steel-900">{L.others}</h2>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/${locale}/products/${o.slug}`} className="group block overflow-hidden rounded-xl border border-steel-200 bg-white transition-shadow hover:shadow-md">
                  <div className="relative aspect-[4/3] bg-white">
                    <Image src={o.images[0]} alt={t.lines[o.key].name} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-contain p-3" />
                  </div>
                  <p className="border-t border-steel-200 px-4 py-3 text-sm font-semibold text-steel-900 group-hover:text-brand">{t.lines[o.key].name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
