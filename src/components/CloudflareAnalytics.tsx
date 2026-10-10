'use client';
import Script from 'next/script';

// Cloudflare Web Analytics (privacy-first, cookieless). Get the token from
// Cloudflare → Analytics & Logs → Web Analytics → Add a site, then set
// NEXT_PUBLIC_CF_BEACON_TOKEN in the environment. Loaded with a nonce (CSP-safe).
export function CloudflareAnalytics() {
  const token = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN;
  if (!token) return null;
  return (
    <Script
      src="https://static.cloudflareinsights.com/beacon.min.js"
      strategy="afterInteractive"
      data-cf-beacon={JSON.stringify({ token })}
    />
  );
}
