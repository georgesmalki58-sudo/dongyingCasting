// Auto-compress images in /public/images to WebP. Runs before every build (prebuild)
// and on demand via `npm run optimize:images`. Any new .jpg/.jpeg/.png you drop in
// gets a compressed .webp sibling — reference it as /images/<name>.webp in code.
//
// A few assets are kept in their original format on purpose:
//   logo.png / logo.svg  – brand mark (transparency / vector)
//   wechat.png           – QR code (kept crisp)
//   og.jpg               – social share image (PNG/JPG expected by crawlers)
import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const DIR = path.join(process.cwd(), 'public', 'images');
const KEEP = new Set(['logo.png', 'logo.svg', 'wechat.png', 'og.jpg']);
const MAX_WIDTH = 1600;
const QUALITY = 78;

async function run() {
  let entries;
  try {
    entries = await readdir(DIR);
  } catch {
    console.log('[optimize-images] no public/images directory — skipping.');
    return;
  }

  const sources = entries.filter(
    (f) => /\.(jpe?g|png)$/i.test(f) && !KEEP.has(f)
  );

  let made = 0;
  for (const file of sources) {
    const src = path.join(DIR, file);
    const out = path.join(DIR, file.replace(/\.(jpe?g|png)$/i, '.webp'));

    // Skip if an up-to-date .webp already exists.
    try {
      const [s, o] = await Promise.all([stat(src), stat(out)]);
      if (o.mtimeMs >= s.mtimeMs) continue;
    } catch {
      /* out doesn't exist yet — generate it */
    }

    const before = (await stat(src)).size;
    await sharp(src)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(out);
    const after = (await stat(out)).size;
    made++;
    console.log(
      `[optimize-images] ${file} ${(before / 1024).toFixed(0)}KB → ${path.basename(out)} ${(after / 1024).toFixed(0)}KB`
    );
  }

  console.log(made ? `[optimize-images] done — ${made} image(s) optimized.` : '[optimize-images] all images already optimized.');
}

run().catch((e) => {
  console.error('[optimize-images] failed:', e);
  process.exit(1);
});
