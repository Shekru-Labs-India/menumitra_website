import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminWebp from 'imagemin-webp';
import fs from 'fs';
import path from 'path';

// Configuration
const config = {
  // JPEG compression settings
  jpeg: {
    quality: 85, // High quality but compressed
    progressive: true
  },
  // PNG compression settings
  png: {
    quality: [0.6, 0.8], // Quality range
    speed: 4
  },
  // WebP settings
  webp: {
    quality: 85,
    method: 6
  }
};

// Directories to process
const directories = [
  'src/assets/images/outlets',
  'src/assets/images/mm_brand',
  'src/assets/images/integrations',
  'src/assets/images'
];

async function compressImages() {
  console.log('🚀 Starting automated image compression...\n');
  
  let totalOriginalSize = 0;
  let totalCompressedSize = 0;
  let processedFiles = 0;

  for (const dir of directories) {
    if (!fs.existsSync(dir)) {
      console.log(`⚠️  Directory ${dir} does not exist, skipping...`);
      continue;
    }

    console.log(`📁 Processing directory: ${dir}`);
    
    // Get all image files
    const files = fs.readdirSync(dir).filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png'].includes(ext);
    });

    if (files.length === 0) {
      console.log(`   No images found in ${dir}\n`);
      continue;
    }

    for (const file of files) {
      const filePath = path.join(dir, file);
      const ext = path.extname(file).toLowerCase();
      
      try {
        // Get original file size
        const originalStats = fs.statSync(filePath);
        const originalSize = originalStats.size;
        totalOriginalSize += originalSize;

        console.log(`   🔄 Compressing: ${file} (${formatBytes(originalSize)})`);

        let compressedBuffer;
        
        if (ext === '.jpg' || ext === '.jpeg') {
          // Compress JPEG
          compressedBuffer = await imagemin([filePath], {
            plugins: [
              imageminMozjpeg(config.jpeg)
            ]
          });
        } else if (ext === '.png') {
          // Compress PNG
          compressedBuffer = await imagemin([filePath], {
            plugins: [
              imageminPngquant(config.png)
            ]
          });
        }

        if (compressedBuffer && compressedBuffer.length > 0) {
          const compressedSize = compressedBuffer[0].data.length;
          totalCompressedSize += compressedSize;
          
          // Replace original file
          fs.writeFileSync(filePath, compressedBuffer[0].data);
          
          const savings = originalSize - compressedSize;
          const savingsPercent = ((savings / originalSize) * 100).toFixed(1);
          
          console.log(`   ✅ Compressed: ${file} → ${formatBytes(compressedSize)} (${formatBytes(savings)} saved, ${savingsPercent}%)`);
          processedFiles++;
        } else {
          console.log(`   ⚠️  Failed to compress: ${file}`);
        }
        
      } catch (error) {
        console.log(`   ❌ Error compressing ${file}: ${error.message}`);
      }
    }
    
    console.log(`   📊 Directory ${dir} completed\n`);
  }

  // Summary
  console.log('🎉 Compression completed!\n');
  console.log('📊 SUMMARY:');
  console.log(`   Files processed: ${processedFiles}`);
  console.log(`   Original total size: ${formatBytes(totalOriginalSize)}`);
  console.log(`   Compressed total size: ${formatBytes(totalCompressedSize)}`);
  console.log(`   Total savings: ${formatBytes(totalOriginalSize - totalCompressedSize)}`);
  console.log(`   Compression ratio: ${(((totalOriginalSize - totalCompressedSize) / totalOriginalSize) * 100).toFixed(1)}%`);
  
  // Calculate estimated performance improvement
  const estimatedLoadTimeImprovement = ((totalOriginalSize - totalCompressedSize) / totalOriginalSize) * 100;
  console.log(`\n🚀 Estimated performance improvement: ${estimatedLoadTimeImprovement.toFixed(1)}% faster loading`);
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Run the compression
compressImages().catch(console.error);
