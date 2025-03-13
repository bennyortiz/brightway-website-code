/**
 * Root Layout Component
 *
 * This component defines the global layout structure for the entire application.
 * It wraps all pages and provides common elements like:
 * - HTML structure with lang attribute
 * - Font configuration
 * - Metadata and SEO settings
 * - Performance monitoring scripts
 *
 * In Next.js App Router, this layout.tsx file creates a persistent layout
 * that remains consistent across all pages in the application.
 */

import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from './@lib/constants/siteConfig';
import Script from 'next/script';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

/**
 * Font Configuration
 *
 * Using Next.js built-in font optimization for Plus Jakarta Sans
 * This automatically handles font loading, preloading, and CSS generation
 */
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta-sans',
  preload: true,
  fallback: ['system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
});

/**
 * Global Metadata Configuration
 *
 * Defines the default metadata for all pages, including:
 * - Title and description
 * - SEO keywords
 * - Author information
 * - OpenGraph and Twitter card data for social sharing
 * - Favicon and icon definitions
 *
 * These values are pulled from the centralized siteConfig
 */
export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.business.legalName }],
  creator: siteConfig.business.legalName,
  publisher: siteConfig.business.legalName,
  metadataBase: new URL(siteConfig.url),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.seo.locale,
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.social.handles?.twitter || '@brightwayservices',
  },
  icons: {
    icon: [{ url: '/favicon.ico' }, { url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  verification: {
    google: siteConfig.seo.verification?.google,
    yandex: siteConfig.seo.verification?.yandex,
    other: {
      'msvalidate.01': siteConfig.seo.verification?.bing,
    },
  },
  formatDetection: siteConfig.seo.formatDetection,
};

/**
 * Viewport Configuration
 *
 * Defines responsive behavior settings:
 * - Sets the viewport width to device width
 * - Sets initial scale to 1 for proper mobile rendering
 * - Defines theme color for browser UI elements
 *
 * Next.js 13+ recommends exporting viewport separately from metadata
 */
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

/**
 * Root Layout Component
 *
 * The main layout wrapper that surrounds all page content
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The page content to be rendered within the layout
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plusJakartaSans.className}>
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for third-party services */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />

        {/* Optimized font loading for LCP performance */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          @font-face {
            font-family: 'Plus Jakarta Sans Variable';
            font-display: swap;
            font-style: normal;
            font-weight: 100 900;
          }

          /* Font optimization for LCP */
          .hero-text p, .hero-text h1, .hero-text h2 {
            font-display: swap;
            text-rendering: optimizeSpeed;
            content-visibility: auto;
            contain-intrinsic-size: 1px 1000px;
          }

          /* Mobile optimization for text rendering */
          @media (max-width: 768px) {
            .text-lg, .text-xl, .text-2xl {
              font-display: block;
              text-rendering: optimizeSpeed;
            }
            
            /* Force LCP content to render quickly */
            .hero-content p {
              content-visibility: auto;
              contain-intrinsic-size: 1px 500px;
            }
          }
        `,
          }}
        />

        {/* Preload critical fonts and resources */}
        <link
          rel="preload"
          href="/fonts/plus-jakarta-sans-variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-white text-gray-900 min-h-screen flex flex-col">
        {children}

        {/* Vercel Analytics with enhanced configuration */}
        <Analytics 
          mode={process.env.NODE_ENV === 'production' ? 'production' : 'development'}
          debug={process.env.NODE_ENV !== 'production'}
        />
        
        {/* Vercel Speed Insights for enhanced performance metrics */}
        <SpeedInsights />

        {/* Defer non-critical scripts */}
        <Script 
          src="https://polyfill.io/v3/polyfill.min.js" 
          strategy="lazyOnload" 
          id="polyfill-io"
        />
        
        {/* Add Web Vitals measurement script with improved timing */}
        <Script
          id="web-vitals"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              const sendToVercelAnalytics = (metric) => {
                // Send to Vercel Analytics
                if (window.va) {
                  window.va('event', {
                    name: metric.name,
                    value: metric.value.toString(),
                    metricId: metric.id,
                    attribution: metric.attribution,
                    navigationType: metric.navigationType
                  });
                }
                // Log in development
                if (process.env.NODE_ENV !== 'production') {
                  console.log(metric);
                }
              };
              
              // Only load web-vitals after page is fully loaded and idle
              if ('requestIdleCallback' in window) {
                window.requestIdleCallback(() => {
                  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
                    getCLS(sendToVercelAnalytics);
                    getFID(sendToVercelAnalytics);
                    getFCP(sendToVercelAnalytics);
                    getLCP(sendToVercelAnalytics);
                    getTTFB(sendToVercelAnalytics);
                  });
                }, { timeout: 5000 });
              } else {
                // Fallback for browsers that don't support requestIdleCallback
                window.addEventListener('load', () => {
                  setTimeout(() => {
                    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
                      getCLS(sendToVercelAnalytics);
                      getFID(sendToVercelAnalytics);
                      getFCP(sendToVercelAnalytics);
                      getLCP(sendToVercelAnalytics);
                      getTTFB(sendToVercelAnalytics);
                    });
                  }, 5000);
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
