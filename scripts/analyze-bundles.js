/**
 * This script uses webpack-bundle-analyzer to visualize bundle contents
 * Run with: NODE_ENV=production node scripts/analyze-bundles.js
 */

const { resolve } = require('path');
const { writeFileSync } = require('fs');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// Save the Next.js configuration
const nextConfig = require('../next.config.js');
const originalWebpack = nextConfig.webpack || ((config) => config);

// Create a modified next.config.js that includes the bundle analyzer
const analyzeConfig = {
  ...nextConfig,
  webpack: (config, options) => {
    // Call the original webpack config
    const newConfig = originalWebpack(config, options);
    
    // Only run analyzer in server build
    if (options.isServer) return newConfig;
    
    // Add bundle analyzer plugin
    newConfig.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: resolve(process.cwd(), 'bundle-analysis.html'),
        openAnalyzer: false,
      })
    );
    
    return newConfig;
  }
};

// Write the temporary config file
writeFileSync(
  resolve(process.cwd(), 'next.analyze.js'),
  `module.exports = ${JSON.stringify(analyzeConfig, null, 2)}`
);

console.log('Bundle analysis config created. Run the following command:');
console.log('ANALYZE=true NODE_ENV=production NEXT_CONFIG_FILE=next.analyze.js next build'); 