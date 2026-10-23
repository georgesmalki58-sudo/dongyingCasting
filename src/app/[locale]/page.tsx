import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { type Locale, getDictionary } from '@/i18n/config';
import { SITE, IMAGES, companyName } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';
import { SectionHeading } from '@/components/SectionHeading';
import { JsonLd } from '@/components/JsonLd';
import { faqSchema } from '@/lib/schema';
import { FEATURED_LINE } from '@/lib/product-lines';
import { ApprovalMark } from '@/components/TypeApprovalCard';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale);
  return buildMetadata({ locale, path: '', title: t.home.h1, description: t.home.heroSub, image: IMAGES.hero, keywords: t.seo.keywords.home });
}

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDictionary(locale);
  const base = `/${locale}`;
  const featured = FEATURED_LINE;
  const fc = t.lines[featured.key];

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
        <Image src={IMAGES.hero} alt="Dongying Wanlong precision investment casting factory in Dongying, Shandong, China" fill priority sizes="100vw"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60" />
        {/* Darker on the left for text legibility, clearer building on the right */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-steel-950/95 via-steel-950/80 to-steel-950/55" />
        <div className="container-x py-24 sm:py-32">
          <p className="eyebrow text-brand-accent">{companyName(locale)} · ISO 9001:2015</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">{t.home.h1}</h1>
          <p className="mt-6 max-w-2xl text-xl text-steel-200">{t.home.heroSub}</p>
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

      {/* FEATURED PRODUCT — type-approved GMC 3000 hitch coupling */}
      <section className="container-x pt-20">
        <article className="grid overflow-hidden rounded-2xl border border-steel-200 bg-white shadow-sm lg:grid-cols-5">
          <Link href={`${base}/products/${featured.slug}`} className="relative block aspect-[3/2] bg-steel-950 lg:col-span-3 lg:aspect-auto lg:min-h-[420px]">
            <Image src={featured.images[1]} alt={fc.name} fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" />
          </Link>
          <div className="flex flex-col justify-center gap-4 p-6 md:p-10 lg:col-span-2">
            <span className="inline-flex w-fit rounded-full bg-brand px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">{t.lines.labels.approvedBadge}</span>
            <h2 className="text-2xl font-bold text-brand md:text-3xl">{fc.name}</h2>
            <p className="prose-muted">{fc.summary}</p>
            {featured.approval ? <ApprovalMark a={featured.approval} className="text-brand" /> : null}
            <ul className="grid grid-cols-2 gap-3">
              {[featured.images[0], featured.images[2]].map((src, i) => (
                <li key={src} className="relative aspect-[16/9] overflow-hidden rounded-lg border border-steel-200 bg-steel-950">
                  <Image src={src} alt={`${fc.name} ${i + 2}`} fill sizes="(min-width: 1024px) 18vw, 50vw" className="object-cover" />
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link href={`${base}/products/${featured.slug}`}
                    className="inline-flex w-fit rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark">
                {t.lines.labels.viewDetails}
              </Link>
              <Link href={`${base}/contact`}
                    className="inline-flex w-fit rounded-md border border-brand px-5 py-2.5 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white">
                {t.cta.quote}
              </Link>
            </div>
          </div>
        </article>
      </section>

      {/* INVESTMENT CASTING + CNC */}
      <section className="container-x py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="card">
            <Image src={IMAGES.investmentSvc} alt={t.home.investmentCasting} width={640} height={360}
              className="mb-5 h-52 w-full rounded-lg object-cover" />
            <h2 className="text-2xl font-bold text-brand">{t.home.investmentCasting}</h2>
            <p className="prose-muted mt-3">{t.home.investmentCastingBody}</p>
          </article>
          <article className="card">
            <Image src={IMAGES.image2} alt={t.home.cnc} width={640} height={360}
              className="mb-5 h-52 w-full rounded-lg object-cover" />
            <h2 className="text-2xl font-bold text-brand">{t.home.cnc}</h2>
            <p className="prose-muted mt-3">{t.home.cncBody}</p>
          </article>
        </div>
        {/* H3 sub-services */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {subs.map((s) => (
            <div key={s.t} className="group overflow-hidden rounded-xl border border-steel-200">
              <Image src={s.img} alt={s.t} width={400} height={240} className="h-36 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <h3 className="p-4 text-sm font-semibold text-brand">{s.t}</h3>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href={SITE.alibaba} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 rounded-md bg-[#FF6A00] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M3 7l9-4 9 4v10l-9 4-9-4V7zm9 .8L6 5.4 4.5 6 12 9.2 19.5 6 18 5.4 12 7.8z"/></svg>
            {t.cta.alibaba}
          </a>
        </div>
      </section>

      {/* FOUNDRY — keyword-rich H2/H3 section */}
      <section className="bg-steel-50 py-20">
        <div className="container-x">
          <SectionHeading title={t.home.foundry.title} intro={t.home.foundry.intro} center />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.home.foundry.items.map(([h, b]) => (
              <div key={h} className="card h-full">
                <h3 className="text-base font-semibold text-brand">{h}</h3>
                <p className="prose-muted mt-2 text-xl">{b}</p>
              </div>
            ))}
          </div>
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
                <h3 className="font-semibold text-brand">{w.t}</h3>
                <p className="prose-muted mt-1 text-xl">{w.b}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST SIGNALS — verified-manufacturer facts (Alibaba) */}
      <section className="bg-steel-50 py-16">
        <div className="container-x">
          <SectionHeading title={t.home.trust.title} intro={t.home.trust.intro} center />
          <dl className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4">
            {t.home.trust.items.map(([v, l]) => (
              <div key={l} className="rounded-xl border border-steel-200 bg-white px-4 py-6 text-center">
                <dt className="text-3xl font-extrabold text-brand">{v}</dt>
                <dd className="prose-muted mt-1 text-sm">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* QUALITY + FACTORY + GLOBAL band */}
      <section className="bg-brand text-white">
        <div className="container-x grid gap-10 py-16 md:grid-cols-3">
          <div>
            <h2 className="text-xl font-bold">{t.home.quality}</h2>
            <p className="mt-2 text-xl font-medium text-blue-50">{t.quality.isoBody}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold">{t.home.factory}</h2>
            <p className="mt-2 text-xl font-medium text-blue-50">{t.factory.equipmentBody}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold">{t.home.global}</h2>
            <p className="mt-2 text-xl font-medium text-blue-50">{t.why.exportBody}</p>
          </div>
        </div>
      </section>

      {/* REQUEST A QUOTE CTA */}
      <section className="container-x py-20">
        <div className="rounded-2xl bg-steel-900 px-8 py-14 text-center text-white sm:px-16">
          <h2 className="text-3xl font-bold">{t.home.requestQuote}</h2>
          <p className="prose-muted mx-auto mt-3 max-w-xl text-steel-200">{t.home.requestQuoteBody}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href={`${base}/contact`} className="btn-accent">{t.cta.quote}</Link>
            <Link href={`${base}/contact`} className="btn-ghost border-white/30 text-white hover:bg-white/10">{t.cta.uploadDrawing}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
