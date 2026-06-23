'use client';
import { useEffect } from 'react';

// Syncs <html lang> and <html dir> with the active locale (RTL for Arabic).
// The root <html> has suppressHydrationWarning, so this client-side sync is safe.
export function HtmlLangDir({ lang, dir }: { lang: string; dir: 'rtl' | 'ltr' }) {
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);
  return null;
}
