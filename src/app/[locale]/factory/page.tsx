import Image from 'next/image';
import type { Metadata } from 'next';
import { type Locale, getDictionary } from '@/i18n/config';
import { IMAGES } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';
import { SectionHeading } from '@/components/SectionHeading';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale);
  return buildMetadata({ locale, path: 'factory', title: t.factory.title, description: t.factory.intro, image: IMAGES.industry1 });
}

export default async function Factory({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDictionary(locale);
  const gallery = [IMAGES.industry1, IMAGES.industry2, IMAGES.image1, IMAGES.image2, IMAGES.investment1, IMAGES.investment2];
  return (
    <>
      <JsonLd data={breadcrumbSchema(locale, [{ name: t.nav.home, path: '' }, { name: t.factory.title, path: 'factory' }])} />
      <section className="container-x py-16">
        <SectionHeading as="h1" title={t.factory.title} intro={t.factory.intro} />
        <div className="mt-8 max-w-3xl">
          <h2 className="text-xl font-bold text-steel-900">{t.factory.equipment}</h2>
          <p className="prose-muted mt-3">{t.factory.equipmentBody}</p>
        </div>
        <h2 className="mt-12 text-xl font-bold text-steel-900">{t.factory.process}</h2>
        <ol className="mt-4 flex flex-wrap gap-3">
          {t.factory.processSteps.map((s, i) => (
            <li key={s} className="flex items-center gap-2 rounded-md border border-steel-200 bg-steel-50 px-4 py-2 text-sm">
              <span className="font-mono font-bold text-brand">{String(i + 1).padStart(2, '0')}</span> {s}
            </li>
          ))}
        </ol>
        <h2 className="mt-12 text-xl font-bold text-steel-900">{t.factory.line}</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((src, i) => (
            <Image key={src} src={src} alt={`${t.factory.line} ${i + 1}`} width={500} height={350}
              className="h-56 w-full rounded-lg object-cover" loading={i < 3 ? 'eager' : 'lazy'} />
          ))}
        </div>
      </section>
    </>
  );
}
