import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import { SITE } from '@/lib/site';
import { dir, isLocale, type Locale } from '@/i18n/config';
import { BaiduAnalytics } from '@/components/BaiduAnalytics';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const robotoMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono', display: 'swap' });

async function activeLocale(): Promise<Locale> {
  const l = (await headers()).get('x-locale') ?? 'en';
  return isLocale(l) ? l : 'en';
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await activeLocale();
  // Locale-aware title template — avoids appending the Latin brand to Chinese titles.
  const brand = locale === 'zh' ? SITE.nameZh : SITE.name;
  const def =
    locale === 'zh'
      ? '中国精密熔模铸造厂家_失蜡铸造|不锈钢/碳钢铸件CNC加工-东营万隆'
      : `${SITE.name} | Precision Investment Casting Manufacturer in China`;
  return {
    metadataBase: new URL(SITE.url),
    title: { default: def, template: `%s | ${brand}` },
    description:
      locale === 'zh'
        ? '东营万隆机械模具有限公司，专业精密熔模铸造（失蜡铸造）与CNC加工厂家，通过ISO9001:2015认证，提供不锈钢/碳钢/耐热钢铸件来图定制，24小时报价。'
        : 'Precision investment casting and CNC machining manufacturer in China. ISO 9001:2015 certified, 25+ years of foundry experience.',
    applicationName: SITE.name,
    authors: [{ name: SITE.legalName }],
    formatDetection: { telephone: true, email: true },
    verification: SITE.verification.baidu ? { other: { 'baidu-site-verification': SITE.verification.baidu } } : undefined,
    other: {
      ...(SITE.verification.sogou ? { 'sogou_site_verification': SITE.verification.sogou } : {}),
      ...(SITE.verification.so360 ? { '360-site-verification': SITE.verification.so360 } : {})
    }
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await activeLocale();
  const htmlLang = locale === 'zh' ? 'zh-CN' : locale;
  return (
    <html lang={htmlLang} dir={dir(locale)} className={`${inter.variable} ${robotoMono.variable}`} suppressHydrationWarning>
      <body className="font-sans">{children}<BaiduAnalytics /></body>
    </html>
  );
}
