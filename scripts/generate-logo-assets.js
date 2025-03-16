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

// Define the logo sizes we need for different contexts
const sizes = {
  'symbol': [
    { width: 32, height: 32, suffix: 'favicon' },
    { width: 64, height: 64, suffix: 'small' },
    { width: 128, height: 128, suffix: 'medium' },
    { width: 256, height: 256, suffix: 'large' },
    { width: 512, height: 512, suffix: 'xlarge' },
  ],
  'logo-horizontal': [
    { width: 300, height: 64, suffix: 'default' },
    { width: 600, height: 128, suffix: 'large' },
    { width: 1200, height: 256, suffix: 'xlarge' },
  ],
  'logo-vertical': [
    { width: 200, height: 220, suffix: 'default' },
    { width: 400, height: 440, suffix: 'large' },
  ],
};

// Define the logo variations
const variations = [
  'brightway-symbol-color',
  'brightway-symbol-white',
  'brightway-symbol-black',
  'brightway-logo-horizontal-color',
  'brightway-logo-horizontal-white',
  'brightway-logo-vertical-color',
];

// Source and destination directories
const svgDir = path.join(__dirname, '..', 'public', 'assets', 'logos');
const pngDir = path.join(__dirname, '..', 'public', 'assets', 'logos', 'png');

// Create PNG directory if it doesn't exist
if (!fs.existsSync(pngDir)) {
  fs.mkdirSync(pngDir, { recursive: true });
}

async function generatePNGs() {
  console.log('Generating PNG logo assets...');

  for (const variation of variations) {
    const svgPath = path.join(svgDir, `${variation}.svg`);
    
    if (!fs.existsSync(svgPath)) {
      console.warn(`SVG file not found: ${svgPath}`);
      continue;
    }
    
    // Determine which size group to use
    let sizeGroup = 'symbol';
    if (variation.includes('horizontal')) {
      sizeGroup = 'logo-horizontal';
    } else if (variation.includes('vertical')) {
      sizeGroup = 'logo-vertical';
    }
    
    for (const size of sizes[sizeGroup]) {
      const outputPath = path.join(pngDir, `${variation}-${size.suffix}.png`);
      
      try {
        await sharp(svgPath)
          .resize(size.width, size.height)
          .png()
          .toFile(outputPath);
        
        console.log(`Created: ${outputPath}`);
      } catch (error) {
        console.error(`Error converting ${svgPath} to PNG:`, error);
      }
    }
  }
  
  console.log('PNG generation complete.');
}

// Generate social media specific sizes
async function generateSocialMediaAssets() {
  console.log('Generating social media profile images...');
  
  const socialSizes = {
    'linkedin': 400,
    'facebook': 180,
    'instagram': 110,
    'twitter': 400
  };
  
  const symbolSvgPath = path.join(svgDir, 'brightway-symbol-color.svg');
  
  if (!fs.existsSync(symbolSvgPath)) {
    console.warn('Symbol SVG not found for social media assets');
    return;
  }
  
  for (const [platform, size] of Object.entries(socialSizes)) {
    const outputPath = path.join(pngDir, `brightway-profile-${platform}.png`);
    
    try {
      await sharp(symbolSvgPath)
        .resize(size, size)
        .png()
        .toFile(outputPath);
      
      console.log(`Created social media asset: ${outputPath}`);
    } catch (error) {
      console.error(`Error creating social media asset for ${platform}:`, error);
    }
  }
  
  console.log('Social media asset generation complete.');
}

// Main function
async function main() {
  try {
    await generatePNGs();
    await generateSocialMediaAssets();
    console.log('All logo assets generated successfully.');
  } catch (error) {
    console.error('Error generating logo assets:', error);
  }
}

main(); 