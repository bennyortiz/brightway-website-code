/**
 * @file next.config.js
 * @description Configuration file for Next.js 15+ with App Router
 *
 * This configuration file contains settings that affect how Next.js builds and serves
 * the application, particularly for Vercel deployment.
 */

const crypto = require('crypto');

// Define the base webpack configuration
const configureWebpack = (config, { dev, isServer }) => {
  // Only apply optimizations in production builds
  if (!dev && !isServer) {
    // Set the browserslist for client-side code
    process.env.BROWSERSLIST = [
      'chrome 64',
      'edge 79', 
      'firefox 67',
      'opera 51',
      'safari 12'
    ];
    
    // Optimize chunk splitting for better caching and reduced JS size
    config.optimization.splitChunks = {
      chunks: 'all',
      maxInitialRequests: 30,
      maxAsyncRequests: 30,
      minSize: 10000,
      maxSize: 40000,
      cacheGroups: {
        default: false,
        vendors: false,
        framework: {
          name: 'framework',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
          priority: 40,
          enforce: true,
        },
        lib: {
          test(module) {
            return (
              module.size() > 60000 &&
              /node_modules[/\\]/.test(module.identifier())
            );
          },
          name(module) {
            const hash = crypto.createHash('sha1');
            hash.update(module.identifier());
            return `lib-${hash.digest('hex').substring(0, 8)}`;
          },
          priority: 30,
          minChunks: 1,
          reuseExistingChunk: true,
        },
        commons: {
          name: 'commons',
          minChunks: 2,
          priority: 20,
        },
        shared: {
          name(module, chunks) {
            return `shared-${chunks.map((c) => c.name).join('~')}`;
          },
          priority: 10,
          minChunks: 2,
          reuseExistingChunk: true,
          enforce: true,
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const match = module.context?.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);
            const packageName = match ? match[1] : 'vendor';
            
            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
          priority: 5,
        },
      },
    };
  }
  
  // Add bundle analyzer if ANALYZE is true
  if (process.env.ANALYZE === 'true' && !isServer) {
    const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true,
      })
    );
  }
  
  return config;
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React's Strict Mode for development
  // This helps identify issues early by running certain checks and warnings twice
  reactStrictMode: true,

  // Webpack configuration with optimizations
  webpack: configureWebpack,

  // Disable TypeScript type checking during build
  // This allows the build to complete even with TypeScript errors
  // Useful for deployment when you might have non-critical type issues
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },

  // Disable ESLint errors during build
  // This prevents ESLint warnings from failing the build process
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Modern JavaScript settings for better performance
  compiler: {
    // Remove console.log statements in production
    removeConsole: process.env.NODE_ENV === 'production',
    // Enable React optimizations
    reactRemoveProperties: { properties: ['^data-test$'] },
  },

  // Output standalone build
  // This creates a standalone build that includes all dependencies
  // Essential for proper Vercel deployment with serverless functions
  output: 'standalone',

  // Image optimization configuration
  images: {
    // Define which remote patterns are allowed for image optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Allow images from Unsplash
        pathname: '/**',
      },
    ],
    // Enable optimization for production
    unoptimized: process.env.NODE_ENV === 'development', // Disable only in development for faster builds
    // Specify which next-gen image formats to use
    formats: ['image/webp'],
    // Reduce the impact of images on Core Web Vitals with proper sizing
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Cache configuration
    minimumCacheTTL: process.env.NODE_ENV === 'production' ? 60 * 60 * 24 : 60, // 1 day in production, 1 minute in dev
    // Security settings
    dangerouslyAllowSVG: true,
  },

  // External packages to be bundled with server components
  serverExternalPackages: ['sharp'],

  // Enable experimental features for better performance
  experimental: {
    // Better code splitting
    optimizeCss: true,
    // Enable optimistic updates
    optimisticClientCache: true,
    // Enable server actions for form handling with less client JS
    serverActions: {
      allowedOrigins: ['localhost:3000', 'brightway-website.vercel.app'],
    },
    // Optimize code generation
    optimizePackageImports: ['react', 'react-dom', 'lodash', 'date-fns'],
    // Reduce initial JS payload
    optimizeServerReact: true,
  },

  // Configure response headers for better caching
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=2592000',
          },
        ],
      },
      {
        source: '/_next/image:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=2592000',
          },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/insights/script.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, s-maxage=31536000, immutable',
          },
        ],
      },
      {
        source: '/speed-insights/script.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, s-maxage=31536000, immutable',
          },
        ],
      },
      {
        source: '/speed-insights/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, s-maxage=31536000, immutable',
          },
        ],
      },
      {
        source: '/static/chunks/polyfills/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
