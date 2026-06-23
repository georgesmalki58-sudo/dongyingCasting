import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import { SITE } from '@/lib/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const robotoMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} | Precision Investment Casting Manufacturer in China`, template: `%s | ${SITE.name}` },
  description: 'Precision investment casting and CNC machining manufacturer in China. ISO 9001:2015 certified, 25+ years of foundry experience.',
  applicationName: SITE.name,
  authors: [{ name: SITE.legalName }],
  formatDetection: { telephone: true, email: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${inter.variable} ${robotoMono.variable}`} suppressHydrationWarning>
      <body className="font-sans">{children}</body>
    </html>
  );
}
