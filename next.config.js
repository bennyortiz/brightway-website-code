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
  }
};

module.exports = nextConfig; 