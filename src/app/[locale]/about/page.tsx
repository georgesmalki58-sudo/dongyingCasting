import Image from 'next/image';
import type { Metadata } from 'next';
import { type Locale, getDictionary } from '@/i18n/config';
import { SITE, IMAGES } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';
import { SectionHeading } from '@/components/SectionHeading';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale);
  return buildMetadata({ locale, path: 'about', title: t.about.title, description: t.about.intro });
}

export default async function About({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDictionary(locale);
  const blocks = [
    { h: t.about.history, b: t.about.historyBody },
    { h: t.about.capacity, b: t.about.capacityBody },
    { h: t.about.team, b: t.about.teamBody }
  ];
  return (
    <>
      <JsonLd data={breadcrumbSchema(locale, [{ name: t.nav.home, path: '' }, { name: t.about.title, path: 'about' }])} />
      <section className="container-x py-16">
        <SectionHeading as="h1" eyebrow={SITE.legalName} title={t.about.title} intro={t.about.intro} />
        <Image src={IMAGES.innovator} alt={t.about.title} width={1200} height={500}
          className="mt-10 h-72 w-full rounded-xl object-cover sm:h-96" />
        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          {blocks.map((x) => (
            <div key={x.h}>
              <h2 className="text-xl font-bold text-steel-900">{x.h}</h2>
              <p className="prose-muted mt-3">{x.b}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <h2 className="text-xl font-bold text-steel-900">{t.about.certs}</h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {SITE.certifications.map((c) => (
              <li key={c} className="rounded-md border border-steel-300 bg-steel-50 px-4 py-2 text-sm font-semibold text-steel-800">{c}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
