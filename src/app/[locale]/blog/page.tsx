import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { type Locale, getDictionary } from '@/i18n/config';
import { buildMetadata } from '@/lib/seo';
import { SectionHeading } from '@/components/SectionHeading';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { POSTS } from '@/lib/blog';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale);
  return buildMetadata({ locale, path: 'blog', title: t.blog.title, description: t.blog.intro });
}

export default async function Blog({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDictionary(locale);
  const base = `/${locale}/blog`;
  return (
    <>
      <JsonLd data={breadcrumbSchema(locale, [{ name: t.nav.home, path: '' }, { name: t.blog.title, path: 'blog' }])} />
      <section className="container-x py-16">
        <SectionHeading as="h1" title={t.blog.title} intro={t.blog.intro} />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <article key={p.slug} className="group overflow-hidden rounded-xl border border-steel-200 bg-white shadow-sm transition-shadow hover:shadow-md">
              <Link href={`${base}/${p.slug}`} className="block">
                <Image src={p.image} alt={t.blog.posts[p.key]} width={500} height={300}
                  className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="p-5">
                  <p className="font-mono text-xs text-steel-400">{new Date(p.date).toLocaleDateString(locale)} · {p.readMins} min</p>
                  <h2 className="mt-2 text-lg font-semibold text-steel-900">{t.blog.posts[p.key]}</h2>
                  <p className="prose-muted mt-2 text-sm">{p.excerpt}</p>
                  <p className="mt-4 text-sm font-semibold text-brand-light">{t.blog.readMore} →</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
