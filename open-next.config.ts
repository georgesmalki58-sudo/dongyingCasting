// OpenNext adapter config for deploying this Next.js app to Cloudflare Workers.
// Build/preview/deploy via the package.json scripts:
//   npm run preview   # local Workers preview
//   npm run deploy    # build + deploy to Cloudflare
import { defineCloudflareConfig } from '@opennextjs/cloudflare';

export default defineCloudflareConfig({
  // Enable R2/KV-backed incremental cache here later if you add those bindings.
});
