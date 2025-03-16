import { NextResponse, NextRequest } from 'next/server';

/**
 * Middleware for optimizing performance
 * - Adds Cache-Control headers based on route and environment
 * - Adds security headers
 * - Sets appropriate caching strategies for static assets
 */
export function middleware(request: NextRequest) {
  // Get the pathname from the URL
  const pathname = request.nextUrl.pathname;
  const response = NextResponse.next();

  // Set security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');

  // Only add Cache-Control headers in production
  if (process.env.NODE_ENV === 'production') {
    // Static assets - long cache times
    if (
      pathname.startsWith('/_next/static/') ||
      pathname.startsWith('/images/') ||
      pathname.startsWith('/fonts/') ||
      pathname.startsWith('/insights/') ||
      pathname.startsWith('/speed-insights/') ||
      pathname.endsWith('.jpg') ||
      pathname.endsWith('.png') ||
      pathname.endsWith('.svg') ||
      pathname.endsWith('.ico')
    ) {
      // Static assets can be cached for a long time
      response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    }
    // API routes - no caching
    else if (pathname.startsWith('/api/')) {
      response.headers.set('Cache-Control', 'no-store');
    }
    // Main page - short cache with revalidation
    else if (pathname === '/') {
      response.headers.set(
        'Cache-Control',
        'public, max-age=300, s-maxage=3600, stale-while-revalidate=86400'
      );
    }
    // Other pages - longer cache with revalidation
    else {
      response.headers.set(
        'Cache-Control',
        'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800'
      );
    }
  } else {
    // In development, don't cache anything
    response.headers.set('Cache-Control', 'no-store, max-age=0');
  }

  return response;
}

// Specify which paths this middleware will run on
export const config = {
  matcher: [
    // Apply to all routes except specific Next.js paths
    '/((?!_next/static|_next/image|favicon.ico).*)',
    // Explicitly include speed-insights and insights paths
    '/insights/:path*',
    '/speed-insights/:path*'
  ],
};
