#!/usr/bin/env node

/**
 * Asset Optimization Script for MenuMitra
 * Optimizes static assets for better performance
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting asset optimization...');

const buildDir = path.join(__dirname, '../build');

// Function to compress files
function compressFile(filePath) {
  try {
    const stats = fs.statSync(filePath);
    const originalSize = stats.size;
    
    // Compress CSS files
    if (filePath.endsWith('.css')) {
      execSync(`gzip -9 -c "${filePath}" > "${filePath}.gz"`, { stdio: 'ignore' });
      const compressedSize = fs.statSync(`${filePath}.gz`).size;
      console.log(`✅ Compressed CSS: ${path.basename(filePath)} (${originalSize} → ${compressedSize} bytes)`);
    }
    
    // Compress JS files
    if (filePath.endsWith('.js')) {
      execSync(`gzip -9 -c "${filePath}" > "${filePath}.gz"`, { stdio: 'ignore' });
      const compressedSize = fs.statSync(`${filePath}.gz`).size;
      console.log(`✅ Compressed JS: ${path.basename(filePath)} (${originalSize} → ${compressedSize} bytes)`);
    }
    
    // Compress HTML files
    if (filePath.endsWith('.html')) {
      execSync(`gzip -9 -c "${filePath}" > "${filePath}.gz"`, { stdio: 'ignore' });
      const compressedSize = fs.statSync(`${filePath}.gz`).size;
      console.log(`✅ Compressed HTML: ${path.basename(filePath)} (${originalSize} → ${compressedSize} bytes)`);
    }
    
  } catch (error) {
    console.warn(`⚠️  Could not compress ${filePath}:`, error.message);
  }
}

// Function to recursively process directory
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      processDirectory(filePath);
    } else if (stats.isFile()) {
      // Only compress certain file types
      if (file.endsWith('.css') || file.endsWith('.js') || file.endsWith('.html')) {
        compressFile(filePath);
      }
    }
  });
}

// Function to add compression headers to _headers file
function addCompressionHeaders() {
  const headersFile = path.join(buildDir, '_headers');
  let headersContent = '';
  
  if (fs.existsSync(headersFile)) {
    headersContent = fs.readFileSync(headersFile, 'utf8');
  }
  
  const compressionHeaders = `
# Compression headers for better performance
/*.css
  Content-Encoding: gzip
  Cache-Control: public, max-age=31536000, immutable

/*.js
  Content-Encoding: gzip
  Cache-Control: public, max-age=31536000, immutable

/*.html
  Content-Encoding: gzip
  Cache-Control: public, max-age=0, must-revalidate
`;
  
  headersContent += compressionHeaders;
  fs.writeFileSync(headersFile, headersContent);
  console.log('✅ Added compression headers');
}

// Function to optimize images (if imagemagick is available)
function optimizeImages() {
  try {
    execSync('which convert', { stdio: 'ignore' });
    console.log('✅ ImageMagick found, optimizing images...');
    
    // This would optimize images if ImageMagick is available
    // For now, we'll skip this step
    console.log('ℹ️  Image optimization skipped (ImageMagick optimization not implemented)');
  } catch (error) {
    console.log('ℹ️  ImageMagick not found, skipping image optimization');
  }
}

// Main execution
try {
  if (!fs.existsSync(buildDir)) {
    console.error('❌ Build directory not found. Run "npm run build" first.');
    process.exit(1);
  }
  
  console.log('📁 Processing build directory...');
  processDirectory(buildDir);
  
  console.log('📝 Adding compression headers...');
  addCompressionHeaders();
  
  console.log('🖼️  Checking image optimization...');
  optimizeImages();
  
  console.log('🎉 Asset optimization complete!');
  console.log('📊 Summary:');
  console.log('   - CSS, JS, and HTML files compressed with gzip');
  console.log('   - Compression headers added to _headers file');
  console.log('   - Ready for deployment with optimized assets');
  
} catch (error) {
  console.error('❌ Optimization failed:', error.message);
  process.exit(1);
}
