/**
 * @file next.config.js
 * @description Configuration file for Next.js 15+ with App Router
 *
 * This configuration file contains settings that affect how Next.js builds and serves
 * the application, particularly for Vercel deployment.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React's Strict Mode for development
  // This helps identify issues early by running certain checks and warnings twice
  reactStrictMode: true,

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

  // Output standalone build
  // This creates a standalone build that includes all dependencies
  // Essential for proper Vercel deployment with serverless functions
  output: 'standalone',

  // Image optimization configuration
  // Controls which external images can be optimized and what formats to use
  images: {
    // Define which remote patterns are allowed for image optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Allow images from Unsplash
        pathname: '/**',
      },
    ],
    // Specify which next-gen image formats to use
    formats: ['image/avif', 'image/webp'],
    // Reduce the impact of images on Core Web Vitals with proper sizing
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Improve LCP by minimizing image size while maintaining visual quality
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  // Enable more aggressive code optimizations
  compiler: {
    // Remove console.log statements in production
    removeConsole: process.env.NODE_ENV === 'production',
    // Enable React optimizations
    reactRemoveProperties: { properties: ['^data-test$'] },
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
            value: 'public, max-age=2592000, s-maxage=31536000, immutable',
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
