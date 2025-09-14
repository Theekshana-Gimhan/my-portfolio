/*
Image optimization script for the profile picture.

This script reads `src/assets/profile_pic.jpg` and writes two optimized versions:
 - src/assets/profile_pic.webp (optimized WebP)
 - src/assets/profile_pic_600.jpg (resized JPEG at 600px width)

It uses Sharp. Install with:
  npm install --save-dev sharp

Run with:
  node scripts/optimize-profile.js
*/

const path = require('path');
const fs = require('fs');

const input = path.resolve(__dirname, '../src/assets/profile_pic.jpg');
const outWebp = path.resolve(__dirname, '../src/assets/profile_pic.webp');
const outJpg600 = path.resolve(__dirname, '../src/assets/profile_pic_600.jpg');

async function run() {
  if (!fs.existsSync(input)) {
    console.error('Input image not found:', input);
    process.exit(1);
  }

  const sharp = require('sharp');

  try {
    // Create a WebP version with reasonable compression
    await sharp(input)
      .resize({ width: 800 }) // scale down if larger
      .webp({ quality: 80 })
      .toFile(outWebp);
    console.log('Written', outWebp);

    // Create a resized JPG 600px wide for fallback / lower bandwidth
    await sharp(input)
      .resize({ width: 600 })
      .jpeg({ quality: 80 })
      .toFile(outJpg600);
    console.log('Written', outJpg600);

    console.log('Image optimization complete.');
  } catch (err) {
    console.error('Sharp processing error:', err);
    process.exit(1);
  }
}

run();
