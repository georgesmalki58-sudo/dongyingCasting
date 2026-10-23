// Product lines with dedicated, indexable detail pages (/[locale]/products/[slug]).
// Facts (materials, processes, MOQ) mirror the company's Alibaba store listings;
// localized names/descriptions live in the dictionaries under `lines.<key>`.
import type { Dictionary } from '@/i18n/config';

const ALI = 'https://www.alibaba.com/product-detail/';

export type LineKey = 'coupling' | 'superalloy' | 'pump' | 'exhaust' | 'impeller' | 'mould';

// UN ECE type-approval data, copied verbatim from the approval communication.
export type TypeApproval = {
  number: string;            // approval number
  mark: string;              // approval mark shown on the part (next to the E-circle)
  eCode: string;             // approving country code, e.g. "E57"
  regulation: string;
  deviceClass: string;
  values: [string, string][]; // characteristic values, e.g. ["D", "14.208 kN"]
  authority: string;
  granted: string;           // ISO date
};

export type ProductLine = {
  key: LineKey;
  slug: string;
  images: string[];          // first = main image
  moq?: number;              // minimum order quantity (pieces)
  banner?: string;           // optional full-width banner image
  alibaba?: string;          // representative Alibaba listing
  photo?: boolean;           // full-bleed photos/renders (object-cover) instead of white-background product shots
  cardImage?: string;        // listing-card image when images[0] has text that a 4:3 crop would cut
  brand?: string;            // product brand when it differs from the site name
  approval?: TypeApproval;
};

export const PRODUCT_LINES: ProductLine[] = [
  {
    key: 'coupling',
    slug: 'gmc-3000-hitch-coupling',
    images: [
      '/images/products/dongying-casting-gmc-3000-hitch-coupling.webp',
      '/images/products/dongying-casting-gmc-3000-hitch-coupling-caravan.webp',
      '/images/products/dongying-casting-gmc-3000-hitch-coupling-towbar.webp'
    ],
    photo: true,
    cardImage: '/images/products/dongying-casting-gmc-3000-hitch-coupling-towbar.webp',
    brand: 'GMC Hitch Coupling',
    // Source: Republic of San Marino approval communication E57*55R03/00*0158*00,
    // test report ATS-SM-IR-55-22811 (Automotive Technical Service S.r.l.).
    approval: {
      number: 'E57*55R03/00*0158*00',
      mark: '55R – 03 0158',
      eCode: 'E57',
      regulation: 'UN ECE R55 (03 series)',
      deviceClass: 'B50-X',
      values: [['D / Dc', '14.208 kN'], ['S', '150 kg']],
      authority: 'Republic of San Marino (E57)',
      granted: '2025-07-03'
    }
  },
  {
    key: 'superalloy',
    slug: 'superalloy-turbine-components',
    images: ['/images/products/dongying-casting-inconel-superalloy-ngv-guide-vane.webp', '/images/products/dongying-casting-superalloy-turbine-nozzle-guide-vane.webp', '/images/dongying-casting-high-temperature-alloy-turbine-wheel.webp'],
    banner: '/images/products/dongying-casting-high-temperature-alloy-turbine-components.webp',
    moq: 1,
    alibaba: `${ALI}Custom-Inconel-Superalloy-Nozzle-Guide-Vane_1601975332980.html`
  },
  {
    key: 'pump',
    slug: 'pump-impellers-housings',
    images: ['/images/products/dongying-casting-316l-stainless-steel-pump-impeller.webp', '/images/products/dongying-casting-ss316-investment-cast-pump-housing.webp', '/images/products/dongying-casting-ductile-iron-pump-impeller.webp'],
    moq: 1,
    alibaba: `${ALI}316L-Stainless-Steel-Anti-Corrosion-Anti_1601974624278.html`
  },
  {
    key: 'exhaust',
    slug: 'exhaust-manifolds',
    images: ['/images/products/dongying-casting-high-temp-alloy-exhaust-manifold.webp', '/images/products/dongying-casting-stainless-steel-exhaust-header.webp'],
    moq: 5,
    alibaba: `${ALI}High-Temperature-Alloy-Exhaust-Manifold-Lost_1601974228015.html`
  },
  {
    key: 'impeller',
    slug: 'impellers-fan-wheels',
    images: ['/images/products/dongying-casting-stainless-steel-impeller-fan-wheel.webp', '/images/products/dongying-casting-316l-stainless-steel-pump-impeller.webp'],
    moq: 2,
    alibaba: `${ALI}OEM-Investment-Cast-Stainless-Steel-Impellers_1601974160477.html`
  },
  {
    key: 'mould',
    slug: 'casting-moulds-prototypes',
    images: ['/images/products/dongying-casting-cnc-ngv-prototype-mould.webp', '/images/products/dongying-casting-die-casting-mould.webp', '/images/dongying-casting-transmission-castings.webp', '/images/dongying-casting-precision-casting-mould.webp'],
    moq: 1,
    alibaba: `${ALI}Mold-Prototype-3D-Print-NGV-Molds_1601974536191.html`
  }
];

export const getLine = (slug: string) => PRODUCT_LINES.find((l) => l.slug === slug);

export const FEATURED_LINE = PRODUCT_LINES[0];

export function moqText(t: Dictionary, n: number): string {
  const l = t.lines.labels;
  return n === 1 ? l.moqOne : n === 2 ? l.moqTwo : l.moqMany.replace('{n}', String(n));
}
