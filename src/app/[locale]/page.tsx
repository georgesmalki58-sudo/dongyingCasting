import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { type Locale, getDictionary } from '@/i18n/config';
import { SITE, IMAGES, companyName } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';
import { SectionHeading } from '@/components/SectionHeading';
import { JsonLd } from '@/components/JsonLd';
import { faqSchema } from '@/lib/schema';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale);
  const keywords =
    locale === 'zh'
      ? ['精密铸造厂家', '熔模铸造', '失蜡铸造', '不锈钢铸件', '碳钢铸件', '耐热钢铸件', 'CNC加工', '数控加工', '铸件加工', '东营万隆', '山东铸造厂']
      : ['investment casting', 'lost wax casting', 'precision casting manufacturer', 'stainless steel casting', 'carbon steel casting', 'CNC machining', 'China casting foundry'];
  return buildMetadata({ locale, path: '', title: t.home.h1, description: t.home.heroSub, image: IMAGES.hero, keywords });
}

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDictionary(locale);
  const base = `/${locale}`;

  const stats = [
    { v: '25+', l: t.home.stats.experience },
    { v: '21', l: t.home.stats.centers },
    { v: '40+', l: t.home.stats.markets },
    { v: '100+', l: t.home.stats.employees }
  ];
  const subs = [
    { t: t.home.subStainless, img: IMAGES.investment1 },
    { t: t.home.subCarbon, img: IMAGES.investment2 },
    { t: t.home.subLostWax, img: IMAGES.lostWax },
    { t: t.home.subCnc, img: IMAGES.image1 }
  ];
  const industries = [t.home.subAutomotive, t.home.subMarine, t.home.subMachinery, t.home.subPump];
  const why = [
    { t: t.why.experience, b: t.why.experienceBody },
    { t: t.why.certified, b: t.why.certifiedBody },
    { t: t.why.export, b: t.why.exportBody },
    { t: t.why.oneStop, b: t.why.oneStopBody }
  ];
  const faqs = [
    { q: t.products.items.investment.name, a: t.products.items.investment.body },
    { q: t.home.cnc, a: t.home.cncBody },
    { q: t.quality.iso, a: t.quality.isoBody }
  ];

  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      {/* HERO */}
      <section className="relative isolate flex min-h-[560px] flex-col justify-center overflow-hidden bg-steel-950 text-white sm:min-h-[640px]">
        <Image src={IMAGES.hero} alt="" fill priority sizes="100vw"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60" />
        {/* Darker on the left for text legibility, clearer building on the right */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-steel-950/95 via-steel-950/80 to-steel-950/55" />
        <div className="container-x py-24 sm:py-32">
          <p className="eyebrow text-brand-accent">{companyName(locale)} · ISO 9001:2015</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">{t.home.h1}</h1>
          <p className="mt-6 max-w-2xl text-lg text-steel-200">{t.home.heroSub}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`${base}/contact`} className="btn-accent">{t.cta.quote}</Link>
            <Link href={`${base}/products`} className="btn-ghost border-white/30 text-white hover:bg-white/10">{t.cta.solutions}</Link>
          </div>
          <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l}>
                <dt className="font-mono text-3xl font-bold text-brand-accent">{s.v}</dt>
                <dd className="mt-1 text-sm text-steel-300">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* INVESTMENT CASTING + CNC */}
      <section className="container-x py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="card">
            <Image src={IMAGES.investmentSvc} alt={t.home.investmentCasting} width={640} height={360}
              className="mb-5 h-52 w-full rounded-lg object-cover" />
            <h2 className="text-2xl font-bold text-steel-900">{t.home.investmentCasting}</h2>
            <p className="prose-muted mt-3">{t.home.investmentCastingBody}</p>
          </article>
          <article className="card">
            <Image src={IMAGES.image2} alt={t.home.cnc} width={640} height={360}
              className="mb-5 h-52 w-full rounded-lg object-cover" />
            <h2 className="text-2xl font-bold text-steel-900">{t.home.cnc}</h2>
            <p className="prose-muted mt-3">{t.home.cncBody}</p>
          </article>
        </div>
        {/* H3 sub-services */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {subs.map((s) => (
            <div key={s.t} className="group overflow-hidden rounded-xl border border-steel-200">
              <Image src={s.img} alt={s.t} width={400} height={240} className="h-36 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <h3 className="p-4 text-sm font-semibold text-steel-900">{s.t}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-steel-50 py-20">
        <div className="container-x">
          <SectionHeading eyebrow={SITE.name} title={t.home.industries} center />
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
            {industries.map((i) => (
              <div key={i} className="rounded-lg bg-white px-4 py-6 text-center text-sm font-semibold text-steel-800 shadow-sm">{i}</div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href={`${base}/industries`} className="text-sm font-semibold text-brand-light">{t.industries.title} →</Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="container-x py-20">
        <SectionHeading title={t.home.whyChoose} center />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {why.map((w) => (
            <div key={w.t} className="flex gap-4">
              <div className="mt-1 h-8 w-1.5 shrink-0 rounded bg-brand-accent" />
              <div>
                <h3 className="font-semibold text-steel-900">{w.t}</h3>
                <p className="prose-muted mt-1 text-sm">{w.b}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QUALITY + FACTORY + GLOBAL band */}
      <section className="bg-brand text-white">
        <div className="container-x grid gap-10 py-16 md:grid-cols-3">
          <div>
            <h2 className="text-xl font-bold">{t.home.quality}</h2>
            <p className="mt-2 text-sm text-blue-100">{t.quality.isoBody}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold">{t.home.factory}</h2>
            <p className="mt-2 text-sm text-blue-100">{t.factory.equipmentBody}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold">{t.home.global}</h2>
            <p className="mt-2 text-sm text-blue-100">{t.why.exportBody}</p>
          </div>
        </div>
      </section>

      {/* REQUEST A QUOTE CTA */}
      <section className="container-x py-20">
        <div className="rounded-2xl bg-steel-900 px-8 py-14 text-center text-white sm:px-16">
          <h2 className="text-3xl font-bold">{t.home.requestQuote}</h2>
          <p className="prose-muted mx-auto mt-3 max-w-xl text-steel-300">{t.home.requestQuoteBody}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href={`${base}/contact`} className="btn-accent">{t.cta.quote}</Link>
            <Link href={`${base}/contact`} className="btn-ghost border-white/30 text-white hover:bg-white/10">{t.cta.uploadDrawing}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
