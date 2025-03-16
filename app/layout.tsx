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
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import dynamic from 'next/dynamic';
import '@fontsource-variable/plus-jakarta-sans';

// Dynamically import components
const SkipLink = dynamic(() => import('./@components/ui/SkipLink'));
const WebVitals = dynamic(() => import('./@components/shared/WebVitals'));
const PolyfillScript = dynamic(() => import('./@components/shared/PolyfillScript'));

/**
 * Font Configuration
 *
 * Using Next.js built-in font optimization for fonts
 * This automatically handles font loading, preloading, and CSS generation
 */
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta-sans',
  preload: true,
  fallback: ['system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
  weight: ['400', '500', '600', '700'],
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
    creator: siteConfig.social.handles?.twitter,
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: '/favicon.svg',
    shortcut: '/favicon.svg',
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
  themeColor: '#0070f3',
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
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <head>
        {/* Connection optimization for critical domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for third-party services */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />

        {/* Remove external font loading since we're using Next.js font optimization */}
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {/* Skip to content link for keyboard accessibility */}
        <SkipLink />

        {/* Main content area with ID for skip link target */}
        <div id="main-content">{children}</div>

        {/* Performance monitoring */}
        <WebVitals />
        <Analytics />
        <SpeedInsights />

        {/* Load polyfill script via client component */}
        <PolyfillScript />
      </body>
    </html>
  );
}
