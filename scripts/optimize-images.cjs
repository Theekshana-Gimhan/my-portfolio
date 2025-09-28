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
const OUTPUT_DIR = path.join(ASSETS_DIR, 'optimized');
const MANIFEST_PATH = path.join(ASSETS_DIR, 'image-manifest.json');
const WIDTHS = [320, 480, 768, 1024];

function isImageFile(name) {
  return /\.(jpe?g|png)$/i.test(name);
}

async function processImage(relFilePath) {
  // relFilePath is relative to ASSETS_DIR, may include subfolders (e.g., 'pro1/pro1s1.PNG')
  const inputPath = path.join(ASSETS_DIR, relFilePath);
  const ext = path.extname(relFilePath).toLowerCase();
  const base = path.basename(relFilePath, ext);
  // Create a slug from the relative path (without extension) to avoid filename collisions
  const relNoExt = relFilePath.slice(0, -ext.length);
  const slug = relNoExt.replace(/[\\/]/g, '_');

  const variants = [];

  for (const w of WIDTHS) {
    // WebP
    const outWebp = path.join(OUTPUT_DIR, `${slug}_${w}.webp`);
    await sharp(inputPath).resize({ width: w }).webp({ quality: 80 }).toFile(outWebp);
    variants.push({ width: w, format: 'webp', path: `optimized/${path.basename(outWebp)}` });

    // JPEG fallback (for PNG sources, we still create a JPEG fallback)
    const outJpg = path.join(OUTPUT_DIR, `${slug}_${w}.jpg`);
    await sharp(inputPath).resize({ width: w }).jpeg({ quality: 80 }).toFile(outJpg);
    variants.push({ width: w, format: 'jpg', path: `optimized/${path.basename(outJpg)}` });
  }

  // Also include a preferred webp and a default jpg at 800 width for quick imports
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const preferredWebp = path.join(OUTPUT_DIR, `${slug}_800.webp`);
  await sharp(inputPath).resize({ width: 800 }).webp({ quality: 80 }).toFile(preferredWebp);
  const fallbackJpg = path.join(OUTPUT_DIR, `${slug}_800.jpg`);
  await sharp(inputPath).resize({ width: 800 }).jpeg({ quality: 80 }).toFile(fallbackJpg);

  return {
    // Keep manifest key as the original relative path (normalized with forward slashes)
    source: relFilePath.replace(/\\/g, '/'),
    variants,
    preferred: { webp: `optimized/${path.basename(preferredWebp)}`, jpg: `optimized/${path.basename(fallbackJpg)}` }
  };
}

(async function main() {
  if (!fs.existsSync(ASSETS_DIR)) {
    console.error('Assets directory missing:', ASSETS_DIR);
    process.exit(1);
  }

  // Ensure the output directory exists before any writes
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Recursively walk assets directory to include subfolder images (excluding optimized folder and manifest file)
  /** @type {string[]} */
  const relFiles = [];

  function walk(dir, relBase = '') {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const abs = path.join(dir, entry.name);
      const rel = path.join(relBase, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === 'optimized') continue; // skip output folder
        walk(abs, rel);
      } else if (entry.isFile()) {
        if (entry.name === 'image-manifest.json') continue; // skip manifest itself
        if (isImageFile(entry.name)) {
          relFiles.push(rel);
        }
      }
    }
  }

  walk(ASSETS_DIR, '');

  const manifest = {};

  for (const rel of relFiles) {
    try {
      console.log('Processing', rel);
      const info = await processImage(rel);
      manifest[info.source] = info;
    } catch (err) {
      console.error('Failed processing', rel, err);
    }
  }

  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
  console.log('Wrote manifest', MANIFEST_PATH);
})();
