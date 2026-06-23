export const locales = ['en', 'zh', 'de', 'es', 'ar'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
  de: 'Deutsch',
  es: 'Español',
  ar: 'العربية'
};

// Right-to-left locales.
export const rtlLocales: Locale[] = ['ar'];
export function dir(locale: Locale): 'rtl' | 'ltr' {
  return rtlLocales.includes(locale) ? 'rtl' : 'ltr';
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

import en from './dictionaries/en.json';
import zh from './dictionaries/zh.json';
import de from './dictionaries/de.json';
import es from './dictionaries/es.json';
import ar from './dictionaries/ar.json';

export type Dictionary = typeof en;
const dictionaries: Record<Locale, Dictionary> = {
  en,
  zh: zh as Dictionary,
  de: de as Dictionary,
  es: es as Dictionary,
  ar: ar as Dictionary
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}
