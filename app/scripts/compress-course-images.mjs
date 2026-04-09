import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import { join, extname, basename } from 'path';

const inputDir = 'public/images/cources';

const files = readdirSync(inputDir).filter(f => /\.(png|jpg|jpeg)$/i.test(f));

console.log(`\n🔄 Compressing ${files.length} images to WebP...\n`);

let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const inputPath = join(inputDir, file);
  const outputName = basename(file, extname(file)) + '.webp';
  const outputPath = join(inputDir, outputName);

  const sizeBefore = statSync(inputPath).size;
  totalBefore += sizeBefore;

  try {
    await sharp(inputPath)
      .resize(600, 338, {   // 16:9 thumbnail, max 600px wide
        fit: 'cover',
        position: 'center',
        withoutEnlargement: true
      })
      .webp({ quality: 65, effort: 6 })
      .toFile(outputPath);

    const sizeAfter = statSync(outputPath).size;
    totalAfter += sizeAfter;
    const reduction = (((sizeBefore - sizeAfter) / sizeBefore) * 100).toFixed(1);
    console.log(`  ✅ ${file}`);
    console.log(`     ${(sizeBefore / 1024).toFixed(0)} KB → ${(sizeAfter / 1024).toFixed(0)} KB  (${reduction}% smaller)`);
  } catch (err) {
    console.error(`  ❌ Failed: ${file} — ${err.message}`);
  }
}

console.log(`\n📊 Total: ${(totalBefore / 1024 / 1024).toFixed(1)} MB → ${(totalAfter / 1024 / 1024).toFixed(1)} MB`);
console.log(`🚀 Saved ${((totalBefore - totalAfter) / 1024 / 1024).toFixed(1)} MB\n`);
