import type { Metadata } from 'next';
import Image from 'next/image';
import { type Locale, getDictionary } from '@/i18n/config';
import { SITE, whatsappHref } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';
import { SectionHeading } from '@/components/SectionHeading';
import { InquiryForm } from '@/components/InquiryForm';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale);
  return buildMetadata({ locale, path: 'contact', title: t.contact.title, description: t.contact.intro });
}

export default async function Contact({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDictionary(locale);
  const info = [
    [t.contact.info, `${SITE.address.street}, ${SITE.address.locality}, ${SITE.address.region}, ${SITE.address.countryName}`],
    ['Email', SITE.email],
    ['Phone', SITE.phone],
    ['WeChat', SITE.wechat],
    [t.contact.hours, '']
  ];
  return (
    <>
      <JsonLd data={breadcrumbSchema(locale, [{ name: t.nav.home, path: '' }, { name: t.contact.title, path: 'contact' }])} />
      <section className="container-x py-16">
        <SectionHeading as="h1" title={t.contact.title} intro={t.contact.intro} />
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-xl border border-steel-200 p-6 sm:p-8">
            <InquiryForm t={t} />
          </div>
          <aside className="space-y-6">
            <div className="rounded-xl bg-steel-50 p-6">
              <h2 className="text-lg font-bold text-steel-900">{t.contact.info}</h2>
              <dl className="mt-4 space-y-3 text-sm">
                {info.map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-semibold text-steel-700">{k}</dt>
                    {v ? <dd className="prose-muted">{v}</dd> : null}
                  </div>
                ))}
              </dl>
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer nofollow"
                 aria-label="WhatsApp" title="WhatsApp"
                 className="mt-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition-transform hover:scale-105">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.488-.607zm5.586-5.713c-.075-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                </svg>
              </a>
            </div>

            {/* WeChat */}
            <div className="rounded-xl border border-steel-200 p-6 text-center">
              <div className="flex items-center justify-center gap-2">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="#07C160" aria-hidden="true">
                  <path d="M8.69 4C4.62 4 1.3 6.78 1.3 10.2c0 1.96 1.1 3.71 2.82 4.86l-.55 1.74 2.05-1.08c.74.2 1.5.32 2.27.34-.1-.43-.15-.87-.15-1.32 0-3.2 3.04-5.7 6.78-5.7.25 0 .5.02.74.05C14.6 6.02 11.96 4 8.69 4zm-2.4 3.2a.95.95 0 110 1.9.95.95 0 010-1.9zm4.8 0a.95.95 0 110 1.9.95.95 0 010-1.9zM22.7 14.1c0-2.86-2.86-5.18-6.18-5.18s-6.18 2.32-6.18 5.18 2.86 5.18 6.18 5.18c.69 0 1.36-.1 1.98-.29l1.8.95-.49-1.53c1.74-1 2.89-2.6 2.89-4.31zm-8.16-1.05a.8.8 0 110 1.6.8.8 0 010-1.6zm3.96 0a.8.8 0 110 1.6.8.8 0 010-1.6z"/>
                </svg>
                <h2 className="text-lg font-bold text-steel-900">WeChat</h2>
              </div>
              <p className="prose-muted mt-1 text-sm">{t.contact.wechatHint}</p>
              <Image src="/images/wechat.png" alt="WeChat QR" width={180} height={180}
                className="mx-auto mt-4 h-44 w-44 rounded-md border border-steel-200 object-contain" />
              <p className="mt-3 text-sm font-semibold text-steel-800">ID: {SITE.wechat}</p>
            </div>

            <div className="overflow-hidden rounded-xl border border-steel-200">
              <iframe
                title="Map"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${SITE.geo.lat},${SITE.geo.lng}&z=12&output=embed`}
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
