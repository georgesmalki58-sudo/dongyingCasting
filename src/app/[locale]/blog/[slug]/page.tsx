import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales, type Locale, getDictionary } from '@/i18n/config';
import { SITE } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema, faqSchema } from '@/lib/schema';
import { POSTS, getPost, postContent, hasLocalizedBody } from '@/lib/blog';

export function generateStaticParams() {
  return locales.flatMap((locale) => POSTS.map((p) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const t = getDictionary(locale);
  const c = postContent(post, locale);
  return buildMetadata({ locale, path: `blog/${slug}`, title: t.blog.posts[post.key], description: c.excerpt, image: post.image, keywords: post.keywords });
}

export default async function BlogPost({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const t = getDictionary(locale);
  const title = t.blog.posts[post.key];
  const c = postContent(post, locale);
  const bodyLang = hasLocalizedBody(post.slug, locale) ? (locale === 'zh' ? 'zh-CN' : locale) : 'en';
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: c.excerpt,
    image: post.image.startsWith('http') ? post.image : `${SITE.url}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: bodyLang,
    keywords: post.keywords.join(', '),
    author: { '@type': 'Organization', name: SITE.legalName },
    publisher: { '@type': 'Organization', name: SITE.legalName },
    mainEntityOfPage: `${SITE.url}/${locale}/blog/${post.slug}`
  };

  return (
    <>
      <JsonLd data={[
        articleSchema,
        breadcrumbSchema(locale, [
          { name: t.nav.home, path: '' },
          { name: t.blog.title, path: 'blog' },
          { name: title, path: `blog/${post.slug}` }
        ]),
        faqSchema(c.faq)
      ]} />

      <article className="container-x py-16">
        <nav className="mb-6 text-sm text-steel-500">
          <Link href={`/${locale}`} className="hover:text-brand">{t.nav.home}</Link>
          <span className="mx-2">/</span>
          <Link href={`/${locale}/blog`} className="hover:text-brand">{t.blog.title}</Link>
        </nav>

        <header className="max-w-3xl">
          <p className="font-mono text-xs text-steel-400">{new Date(post.date).toLocaleDateString(locale)} · {post.readMins} min</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-steel-900">{title}</h1>
          <p className="prose-muted mt-4 text-lg">{c.intro}</p>
        </header>

        <Image src={post.image} alt={title} width={1200} height={500}
          className="mt-8 h-72 w-full rounded-xl object-cover sm:h-96" priority />

        <div className="mt-10 max-w-3xl space-y-10">
          {c.sections.map((s) => (
            <section key={s.h}>
              <h2 className="text-2xl font-bold text-steel-900">{s.h}</h2>
              {s.p.map((para, i) => <p key={i} className="prose-muted mt-3">{para}</p>)}
            </section>
          ))}

          <section className="rounded-xl border border-steel-200 bg-steel-50 p-6">
            <h2 className="text-xl font-bold text-steel-900">FAQ</h2>
            <dl className="mt-4 space-y-4">
              {c.faq.map((f) => (
                <div key={f.q}>
                  <dt className="font-semibold text-steel-800">{f.q}</dt>
                  <dd className="prose-muted mt-1 text-sm">{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>

          <div className="rounded-2xl bg-steel-900 px-8 py-10 text-center text-white">
            <h2 className="text-2xl font-bold">{t.home.requestQuote}</h2>
            <p className="prose-muted mx-auto mt-2 max-w-lg text-steel-300">{t.home.requestQuoteBody}</p>
            <Link href={`/${locale}/contact`} className="btn-accent mt-6">{t.cta.quote}</Link>
          </div>
        </div>

        <aside className="mt-16">
          <h2 className="text-xl font-bold text-steel-900">{t.blog.title}</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {related.map((p) => (
              <Link key={p.slug} href={`/${locale}/blog/${p.slug}`} className="group block overflow-hidden rounded-xl border border-steel-200">
                <Image src={p.image} alt={t.blog.posts[p.key]} width={400} height={220} className="h-32 w-full object-cover transition-transform group-hover:scale-105" />
                <h3 className="p-4 text-sm font-semibold text-steel-900">{t.blog.posts[p.key]}</h3>
              </Link>
            ))}
          </div>
        </aside>
      </article>
    </>
  );
}
