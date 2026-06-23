import { notFound } from 'next/navigation';
import { locales, isLocale, dir, type Locale } from '@/i18n/config';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyContact } from '@/components/StickyContact';
import { JsonLd } from '@/components/JsonLd';
import { organizationSchema, localBusinessSchema } from '@/lib/schema';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children, params
}: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const d = dir(l);
  return (
    <div lang={l} dir={d}>
      <JsonLd data={[organizationSchema(l), localBusinessSchema(l)]} />
      <Header locale={l} />
      <main id="main">{children}</main>
      <Footer locale={l} />
      <StickyContact locale={l} />
    </div>
  );
}
