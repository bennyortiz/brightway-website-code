/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Enhanced image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60, // Cache optimized images for 60 seconds minimum
  },
  
  // Enable React server components
  experimental: {
    // Optional: Enable if you want to use serverActions
    // serverActions: true,
    
    // Optimize CSS loading
    optimizeCss: true,
  },
  
  // Compression for faster response times
  compress: true,
  
  // Cache headers for static assets
  async headers() {
    return [
      {
        // Apply to all static assets
        source: '/(.*\\.(?:jpg|jpeg|png|webp|avif|svg|ico|css|js)$)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // API routes caching
        source: '/api/:path*',
        headers: [
          { key: 'Cache-Control', value: 'no-store' },
          { key: 'x-dns-prefetch-control', value: 'on' },
        ],
      },
      {
        // Security headers for all routes
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },
  
  // Increase webpack optimization
  webpack: (config, { dev, isServer }) => {
    // Only run in production
    if (!dev) {
      // Optimize bundle size with module concatenation
      config.optimization.concatenateModules = true;
      
      // Optimize chunk size
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 25,
        minSize: 20000,
      };
    }
    
    return config;
  },
}

module.exports = nextConfig 