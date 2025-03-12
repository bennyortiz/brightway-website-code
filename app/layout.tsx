import type { Metadata } from 'next'
import '@fontsource-variable/plus-jakarta-sans'
import './globals.css'
import { siteConfig } from './constants/siteConfig'
import Script from 'next/script'

// Setup the Plus Jakarta Sans as the main font
const fontClassName = 'font-plus-jakarta'

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

// Export viewport configuration separately as recommended by Next.js 
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0070f3',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={fontClassName}>
      <head>
        {/* Preconnect to domains for resources */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        
        {/* Font display optimization */}
        <style dangerouslySetInnerHTML={{ __html: `
          @font-face {
            font-family: 'Plus Jakarta Sans Variable';
            font-display: swap;
          }
        `}} />
      </head>
      <body className="bg-white text-gray-900 min-h-screen flex flex-col">
        {children}
        
        {/* Web Vitals & Performance Monitoring - only in production */}
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