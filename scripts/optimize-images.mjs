import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, extname, basename } from 'path';

const INPUT_DIR = './public/imgs';
const OUTPUT_DIR = './public/imgs-optimized';
const MAX_WIDTH = 1920;
const QUALITY = 80;

async function optimizeImages() {
  console.log('Starting image optimization...\n');

  // Create output directory
  await mkdir(OUTPUT_DIR, { recursive: true });

  const files = await readdir(INPUT_DIR);
  const imageFiles = files.filter(f =>
    /\.(jpg|jpeg|png|webp)$/i.test(f)
  );

  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const file of imageFiles) {
    const inputPath = join(INPUT_DIR, file);
    const ext = extname(file).toLowerCase();
    const name = basename(file, ext);
    const outputPath = join(OUTPUT_DIR, `${name}.webp`);

    try {
      const originalStats = await stat(inputPath);
      totalOriginal += originalStats.size;

      await sharp(inputPath)
        .resize(MAX_WIDTH, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: QUALITY })
        .toFile(outputPath);

      const optimizedStats = await stat(outputPath);
      totalOptimized += optimizedStats.size;

      const savings = ((1 - optimizedStats.size / originalStats.size) * 100).toFixed(1);
      console.log(`${file} -> ${name}.webp (${savings}% smaller)`);
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }

  const totalSavings = ((1 - totalOptimized / totalOriginal) * 100).toFixed(1);
  console.log(`\nTotal: ${(totalOriginal / 1024 / 1024).toFixed(2)}MB -> ${(totalOptimized / 1024 / 1024).toFixed(2)}MB (${totalSavings}% reduction)`);
  console.log(`\nOptimized images saved to ${OUTPUT_DIR}`);
  console.log('Update your imports to use the optimized images from /imgs-optimized/');
}

optimizeImages().catch(console.error);
