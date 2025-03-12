/**
 * Image Optimization Script
 * 
 * This script optimizes all images in the public/images directory:
 * 1. Converts images to WebP format
 * 2. Resizes large images to appropriate dimensions
 * 3. Compresses images for better performance
 * 
 * Run with: node scripts/optimize-images.js
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
const sourceDir = path.join(process.cwd(), 'public', 'images');
const outputDir = path.join(process.cwd(), 'public', 'images', 'optimized');
const sizes = [640, 1280, 1920]; // Responsive sizes
const quality = 80; // WebP quality (0-100)

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
  console.log(`Created output directory: ${outputDir}`);
}

// Process all images in the source directory
async function processImages() {
  try {
    const files = fs.readdirSync(sourceDir);
    
    for (const file of files) {
      // Skip the optimized directory itself and non-image files
      if (file === 'optimized' || !file.match(/\.(jpg|jpeg|png|gif)$/i)) {
        continue;
      }
      
      const sourcePath = path.join(sourceDir, file);
      const fileStats = fs.statSync(sourcePath);
      
      // Skip directories
      if (fileStats.isDirectory()) {
        continue;
      }
      
      const filename = path.parse(file).name;
      
      console.log(`Processing: ${file}`);
      
      // Create original WebP version with high quality
      await sharp(sourcePath)
        .webp({ quality })
        .toFile(path.join(outputDir, `${filename}.webp`));
      
      // Create responsive versions at different sizes
      for (const size of sizes) {
        const resizedFilename = `${filename}-${size}.webp`;
        await sharp(sourcePath)
          .resize(size)
          .webp({ quality })
          .toFile(path.join(outputDir, resizedFilename));
        
        console.log(`  Created: ${resizedFilename}`);
      }
    }
    
    console.log('Image optimization complete!');
    console.log('To use these images, reference them as: /images/optimized/filename.webp');
    
  } catch (error) {
    console.error('Error processing images:', error);
  }
}

// Run the image processing
processImages(); 