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

import type { Metadata } from 'next'
import '@fontsource-variable/plus-jakarta-sans'
import './globals.css'
import { siteConfig } from './constants/siteConfig'
import Script from 'next/script'

/**
 * Font Configuration
 * 
 * Sets up Plus Jakarta Sans as the main font for the entire site
 * We're using the variable font version for better performance and flexibility
 */
const fontClassName = 'font-plus-jakarta'

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
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.business.legalName }],
  creator: siteConfig.business.legalName,
  publisher: siteConfig.business.legalName,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
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
        alt: siteConfig.name
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico'
  },
}

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
  themeColor: '#0070f3',
}

/**
 * Root Layout Component
 * 
 * The main layout wrapper that surrounds all page content
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The page content to be rendered within the layout
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={fontClassName}>
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        
        {/* Preload critical resources */}
        <link 
          rel="preload" 
          href="/images/optimized/brightway-commercial-cleaning-wiping.webp" 
          as="image" 
          type="image/webp"
        />
        
        {/* Font optimization - ensures proper font display while loading */}
        <style dangerouslySetInnerHTML={{ __html: `
          @font-face {
            font-family: 'Plus Jakarta Sans Variable';
            font-display: swap;
          }
        `}} />
      </head>
      <body className="bg-white text-gray-900 min-h-screen flex flex-col">
        {children}
        
        {/* 
         * Web Vitals & Performance Monitoring 
         * Only included in production builds
         * Measures key performance metrics like:
         * - Cumulative Layout Shift (CLS)
         * - Largest Contentful Paint (LCP)
         * - First Input Delay (FID)
         */}
        {process.env.NODE_ENV === 'production' && (
          <Script id="performance-monitoring" strategy="afterInteractive">
            {`
              // Cumulative Layout Shift detection
              let cls = 0;
              new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                  if (!entry.hadRecentInput) {
                    cls += entry.value;
                  }
                }
                console.log('Cumulative Layout Shift:', cls);
              }).observe({type: 'layout-shift', buffered: true});
              
              // Largest Contentful Paint detection
              new PerformanceObserver((entryList) => {
                const entries = entryList.getEntries();
                const lastEntry = entries[entries.length - 1];
                console.log('Largest Contentful Paint:', lastEntry.startTime);
              }).observe({type: 'largest-contentful-paint', buffered: true});
              
              // First Input Delay detection
              new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                  console.log('First Input Delay:', entry.processingStart - entry.startTime);
                }
              }).observe({type: 'first-input', buffered: true});
            `}
          </Script>
        )}
      </body>
    </html>
  )
} 