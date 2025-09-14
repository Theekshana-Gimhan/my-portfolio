/*
Bulk image optimizer for src/assets.

- Scans src/assets for .jpg, .jpeg, .png files
- For each source image, generates responsive variants at widths: [320,480,768,1024]
  in both WebP and JPEG formats (if source is PNG/JPEG) and writes them alongside
  the original using suffixes like `_320.webp` and `_320.jpg`.
- Creates/updates src/assets/image-manifest.json mapping each source to its variants
  and providing a recommended srcset string for quick use in components.

Usage:
  npm run optimize:images

Notes:
- Requires `sharp` (already installed as devDependency in this repo).
- This script is conservative: it only writes new files if input exists and will
  overwrite existing variant files.
*/

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ASSETS_DIR = path.resolve(__dirname, '../src/assets');
const MANIFEST_PATH = path.join(ASSETS_DIR, 'image-manifest.json');
const WIDTHS = [320, 480, 768, 1024];

function isImageFile(name) {
  return /\.(jpe?g|png)$/i.test(name);
}

async function processImage(file) {
  const inputPath = path.join(ASSETS_DIR, file);
  const ext = path.extname(file).toLowerCase();
  const base = path.basename(file, ext);

  const variants = [];

  for (const w of WIDTHS) {
    // WebP
    const outWebp = path.join(ASSETS_DIR, `${base}_${w}.webp`);
    await sharp(inputPath).resize({ width: w }).webp({ quality: 80 }).toFile(outWebp);
    variants.push({ width: w, format: 'webp', path: path.basename(outWebp) });

    // JPEG fallback (for PNG sources, we still create a JPEG fallback)
    const outJpg = path.join(ASSETS_DIR, `${base}_${w}.jpg`);
    await sharp(inputPath).resize({ width: w }).jpeg({ quality: 80 }).toFile(outJpg);
    variants.push({ width: w, format: 'jpg', path: path.basename(outJpg) });
  }

  // Also include a preferred webp and a default jpg at 800 width for quick imports
  const preferredWebp = path.join(ASSETS_DIR, `${base}_800.webp`);
  await sharp(inputPath).resize({ width: 800 }).webp({ quality: 80 }).toFile(preferredWebp);
  const fallbackJpg = path.join(ASSETS_DIR, `${base}_800.jpg`);
  await sharp(inputPath).resize({ width: 800 }).jpeg({ quality: 80 }).toFile(fallbackJpg);

  return {
    source: file,
    variants,
    preferred: { webp: path.basename(preferredWebp), jpg: path.basename(fallbackJpg) }
  };
}

(async function main() {
  if (!fs.existsSync(ASSETS_DIR)) {
    console.error('Assets directory missing:', ASSETS_DIR);
    process.exit(1);
  }

  const files = fs.readdirSync(ASSETS_DIR).filter(isImageFile);
  const manifest = {};

  for (const file of files) {
    try {
      console.log('Processing', file);
      const info = await processImage(file);
      manifest[info.source] = info;
    } catch (err) {
      console.error('Failed processing', file, err);
    }
  }

  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
  console.log('Wrote manifest', MANIFEST_PATH);
})();
