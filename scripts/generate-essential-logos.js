const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Check if sharp is installed
try {
  require.resolve('sharp');
} catch (e) {
  console.log('Installing sharp package for image processing...');
  execSync('npm install sharp --save-dev');
}

const sharp = require('sharp');

// Define only the essential logo sizes
const essentialSizes = {
  // Favicon and small icons
  'favicon': { width: 32, height: 32 },
  'icon': { width: 64, height: 64 },
  
  // Social media profile pictures
  'social-profile': { width: 400, height: 400 },
  
  // Standard logo sizes
  'logo-small': { width: 300, height: 64 },
  'logo-large': { width: 600, height: 128 },
  
  // Business card logo
  'business-card': { width: 1050, height: 600 },
  
  // T-shirt logo
  'tshirt': { width: 500, height: 500 },
};

// Source and destination directories
const svgDir = path.join(__dirname, '..', 'public', 'assets', 'logos');
const essentialDir = path.join(__dirname, '..', 'public', 'assets', 'logos', 'essential');

// Create essential directory if it doesn't exist
if (!fs.existsSync(essentialDir)) {
  fs.mkdirSync(essentialDir, { recursive: true });
}

// Essential source files
const sourceFiles = {
  'brightway-symbol-color.svg': ['favicon', 'icon', 'social-profile'],
  'brightway-logo-horizontal-color.svg': ['logo-small', 'logo-large'],
  'brightway-business-card.svg': ['business-card'],
  'brightway-tshirt-front.svg': ['tshirt']
};

async function generateEssentialAssets() {
  console.log('Generating essential logo assets...');

  for (const [sourceFile, sizeTypes] of Object.entries(sourceFiles)) {
    const svgPath = path.join(svgDir, sourceFile);
    
    if (!fs.existsSync(svgPath)) {
      console.warn(`SVG file not found: ${svgPath}`);
      continue;
    }
    
    // Copy original SVG to essential directory
    const svgBasename = path.basename(sourceFile);
    fs.copyFileSync(svgPath, path.join(essentialDir, svgBasename));
    console.log(`Copied: ${svgBasename} to essential directory`);
    
    // Create PNGs for each specified size
    for (const sizeType of sizeTypes) {
      const size = essentialSizes[sizeType];
      const outputName = svgBasename.replace('.svg', `-${sizeType}.png`);
      const outputPath = path.join(essentialDir, outputName);
      
      try {
        await sharp(svgPath)
          .resize(size.width, size.height)
          .png()
          .toFile(outputPath);
        
        console.log(`Created: ${outputName}`);
      } catch (error) {
        console.error(`Error converting ${svgPath} to PNG:`, error);
      }
    }
  }
  
  console.log('Essential asset generation complete.');
}

// Main function
async function main() {
  try {
    await generateEssentialAssets();
    console.log('All essential logo assets generated successfully.');
  } catch (error) {
    console.error('Error generating essential logo assets:', error);
  }
}

main(); 