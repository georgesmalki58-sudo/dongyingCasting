// Central source of truth for NAP (Name/Address/Phone), nav, and contact data.
export const SITE = {
  name: 'Dongying Casting',
  nameZh: '东营万隆',
  legalName: 'Dongying Wanlong Mechanical Mould Co., Ltd.',
  legalNameZh: '东营万隆机械模具有限公司',
  url: 'https://dongying-casting.com',
  founded: '2000',
  email: 'cindy@dywanlong.com',          // public contact email (footer/contact/schema)
  contactTo: 'quote@dongying-casting.com', // where contact/quote form submissions are sent
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
  certifications: ['ISO 9001:2015', 'GB/T 19001', 'CE', 'UN ECE R55'],
  ports: ['Qingdao', 'Dongying', 'Shanghai', 'Tianjin'],
  incoterms: ['FOB', 'CFR', 'CIF', 'EXW', 'FCA', 'CPT', 'CIP'],
  payment: ['L/C', 'T/T'],
  // Local OG image, 1200x630 (resolved to an absolute URL via metadataBase).
  ogImage: '/images/og.jpg',
  // China filings — fill once obtained (shown in the zh footer).
  icp: '', // e.g. '鲁ICP备XXXXXXXX号'
  // Search-engine site-verification codes (left blank until registered).
  verification: {
    baidu: process.env.NEXT_PUBLIC_BAIDU_VERIFICATION || '',
    sogou: process.env.NEXT_PUBLIC_SOGOU_VERIFICATION || '',
    so360: process.env.NEXT_PUBLIC_360_VERIFICATION || ''
  }
} as const;

// Localized company name (legal name stays Latin for non-zh entity references).
export function companyName(locale: string): string {
  return locale === 'zh' ? SITE.legalNameZh : SITE.legalName;
}

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

// Local image assets, pre-compressed to WebP for fast loading (served from /public/images).
export const IMAGES = {
  logo: '/images/logo.png',
  hero: '/images/hero.webp',
  innovator: '/images/about.webp',
  image1: '/images/product-1.webp',
  image2: '/images/cnc.webp',
  industry1: '/images/industry-1.webp',
  industry2: '/images/industry-2.webp',
  investment1: '/images/investment-casting-1.webp',
  investment2: '/images/investment-casting-2.webp',
  lostWax: '/images/lost-wax-casting.webp',
  investmentSvc: '/images/service-investment.webp',
  product3: '/images/product-3.webp',
  product4: '/images/product-4.webp',
  product5: '/images/product-5.webp',
  product6: '/images/product-6.webp'
} as const;
