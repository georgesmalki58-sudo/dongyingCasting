/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // The default Next image optimizer does not run on the Cloudflare Workers
    // runtime (OpenNext), so serve the static /public images directly. They are
    // already reasonably sized; to re-enable optimization, configure a Cloudflare
    // Images loader and remove `unoptimized`.
    unoptimized: true
  },
  // Security headers are also enforced at the edge via middleware.ts (with CSP nonce)
  // and via public/_headers for Cloudflare Pages. This block is a defense-in-depth fallback.
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' }
        ]
      }
    ];
  }
};
export default nextConfig;
