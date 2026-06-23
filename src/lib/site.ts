// Central source of truth for NAP (Name/Address/Phone), nav, and contact data.
export const SITE = {
  name: 'Dongying Casting',
  legalName: 'Dongying Wanlong Mechanical Mould Co., Ltd.',
  url: 'https://dongying-casting.com',
  founded: '2000',
  email: 'cindy@dywanlong.com',
  phone: '+8613356605369',
  whatsapp: '8613356605369', // digits only, no + (used in https://wa.me/<number>)
  wechat: 'dongyingcasting',
  linkedin: 'https://www.linkedin.com/in/elina-xing-0143a5224/',
  address: {
    street: 'No. 17, Chuanghui Road, Niuzhuang Innovation Park',
    locality: 'Dongying District, Dongying',
    region: 'Shandong',
    postalCode: '257000',
    country: 'CN',
    countryName: 'China'
  },
  geo: { lat: 37.4346, lng: 118.6747 },
  certifications: ['ISO 9001:2015', 'GB/T 19001', 'CE'],
  ports: ['Qingdao', 'Dongying', 'Shanghai', 'Tianjin'],
  incoterms: ['FOB', 'CFR', 'CIF', 'EXW', 'FCA', 'CPT', 'CIP'],
  payment: ['L/C', 'T/T'],
  // Local OG image, 1200x630 (resolved to an absolute URL via metadataBase).
  ogImage: '/images/og.jpg'
} as const;

// Opens a direct WhatsApp chat with the company number, with an optional pre-filled message.
export const WHATSAPP_DEFAULT_MSG = 'Hello Dongying Casting, I would like to request a quote.';
export function whatsappHref(message: string = WHATSAPP_DEFAULT_MSG): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const NAV = [
  { key: 'home', href: '' },
  { key: 'about', href: 'about' },
  { key: 'products', href: 'products' },
  { key: 'industries', href: 'industries' },
  { key: 'quality', href: 'quality' },
  { key: 'factory', href: 'factory' },
  { key: 'blog', href: 'blog' },
  { key: 'contact', href: 'contact' }
] as const;

// Local image assets (reused from the existing website, served from /public/images).
export const IMAGES = {
  logo: '/images/logo.png',
  hero: '/images/hero.jpg',
  innovator: '/images/about.jpg',
  image1: '/images/product-1.jpg',
  image2: '/images/cnc.jpg',
  industry1: '/images/industry-1.jpg',
  industry2: '/images/industry-2.jpg',
  investment1: '/images/investment-casting-1.jpg',
  investment2: '/images/investment-casting-2.jpg',
  lostWax: '/images/lost-wax-casting.jpg',
  investmentSvc: '/images/service-investment.jpg',
  product3: '/images/product-3.jpg',
  product4: '/images/product-4.png',
  product5: '/images/product-5.png',
  product6: '/images/product-6.png'
} as const;
