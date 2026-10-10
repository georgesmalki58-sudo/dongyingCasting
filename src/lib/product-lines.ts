// Product lines with dedicated, indexable detail pages (/[locale]/products/[slug]).
// Facts (materials, processes, MOQ) mirror the company's Alibaba store listings;
// localized names/descriptions live in the dictionaries under `lines.<key>`.
import type { Dictionary } from '@/i18n/config';

const ALI = 'https://www.alibaba.com/product-detail/';

export type LineKey = 'superalloy' | 'pump' | 'exhaust' | 'impeller' | 'mould';

export type ProductLine = {
  key: LineKey;
  slug: string;
  images: string[];          // first = main image
  moq: number;               // minimum order quantity (pieces)
  alibaba: string;           // representative Alibaba listing
};

export const PRODUCT_LINES: ProductLine[] = [
  {
    key: 'superalloy',
    slug: 'superalloy-turbine-components',
    images: ['/images/products/superalloy-ngv-1.webp', '/images/products/superalloy-ngv-2.webp', '/images/high-temp-alloy.webp'],
    moq: 1,
    alibaba: `${ALI}Custom-Inconel-Superalloy-Nozzle-Guide-Vane_1601975332980.html`
  },
  {
    key: 'pump',
    slug: 'pump-impellers-housings',
    images: ['/images/products/pump-impeller-316l.webp', '/images/products/pump-housing-ss316.webp', '/images/products/pump-impeller-ductile.webp'],
    moq: 1,
    alibaba: `${ALI}316L-Stainless-Steel-Anti-Corrosion-Anti_1601974624278.html`
  },
  {
    key: 'exhaust',
    slug: 'exhaust-manifolds',
    images: ['/images/products/exhaust-manifold-hta.webp', '/images/products/exhaust-header.webp'],
    moq: 5,
    alibaba: `${ALI}High-Temperature-Alloy-Exhaust-Manifold-Lost_1601974228015.html`
  },
  {
    key: 'impeller',
    slug: 'impellers-fan-wheels',
    images: ['/images/products/impeller-fan-wheel.webp', '/images/products/pump-impeller-316l.webp'],
    moq: 2,
    alibaba: `${ALI}OEM-Investment-Cast-Stainless-Steel-Impellers_1601974160477.html`
  },
  {
    key: 'mould',
    slug: 'casting-moulds-prototypes',
    images: ['/images/products/mould-prototype-ngv.webp', '/images/products/mould-die-cast.webp', '/images/product-6.webp', '/images/product-5.webp'],
    moq: 1,
    alibaba: `${ALI}Mold-Prototype-3D-Print-NGV-Molds_1601974536191.html`
  }
];

export const getLine = (slug: string) => PRODUCT_LINES.find((l) => l.slug === slug);

export function moqText(t: Dictionary, n: number): string {
  const l = t.lines.labels;
  return n === 1 ? l.moqOne : n === 2 ? l.moqTwo : l.moqMany.replace('{n}', String(n));
}
