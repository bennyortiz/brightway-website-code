import { Metadata } from 'next';
import { siteConfig } from '../constants/siteConfig';
import { generateMetaDescription } from './seo';

type PageType = 'home' | 'about' | 'contact' | 'custom';

// Enhanced SEO control options
export interface SEOOptions {
  noIndex?: boolean;
  noFollow?: boolean;
  noCache?: boolean;
  noArchive?: boolean;
  noSnippet?: boolean;
  maxSnippet?: number;
  maxImagePreview?: 'none' | 'standard' | 'large';
  maxVideoPreview?: number;
  unavailableAfter?: string; // ISO date format
}

interface MetadataOptions {
  pageType: PageType;
  title?: string;
  description?: string;
  ogImage?: string;
  customData?: Record<string, string>;
  slug?: string;
  canonicalPath?: string;
  seo?: SEOOptions; // Using our new SEO options interface
}

/**
 * Generates consistent metadata for any page
 * Makes it easy to maintain SEO across the site
 */
export function generatePageMetadata({
  pageType,
  title,
  description,
  ogImage,
  customData,
  slug = '',
  canonicalPath,
  seo = {},
}: MetadataOptions): Metadata {
  // Generate the base title
  const baseTitle =
    title ||
    (pageType === 'home'
      ? `${siteConfig.name} | ${siteConfig.tagline}`
      : `${pageType.charAt(0).toUpperCase() + pageType.slice(1)} | ${siteConfig.name}`);

  // Generate the meta description
  const metaDescription =
    description ||
    (pageType === 'custom'
      ? siteConfig.description
      : generateMetaDescription(pageType, customData));

  // Create a canonical URL
  // For the homepage, use the site URL directly without any path
  // For other pages, append the canonicalPath or slug to the site URL
  let canonicalUrl: string;

  if (pageType === 'home' || canonicalPath === '/') {
    // For the homepage, just use the base URL without trailing slash
    canonicalUrl = siteConfig.url.replace(/\/+$/, '');
  } else {
    // For other pages, properly format the path with a leading slash
    const resolvedPath = canonicalPath || (slug ? `/${slug.replace(/^\/+/, '')}` : '');
    canonicalUrl = `${siteConfig.url.replace(/\/+$/, '')}${resolvedPath}`;
  }

  // Determine the proper OG image
  const ogImageUrl = ogImage || siteConfig.ogImage;

  // Build robots directives
  const robotsDirectives: Record<string, boolean | number | string> = {
    index: !seo.noIndex,
    follow: !seo.noFollow,
  };

  // Add optional robots directives if specified
  if (seo.noCache) robotsDirectives['noarchive'] = true;
  if (seo.noArchive) robotsDirectives['noarchive'] = true;
  if (seo.noSnippet) robotsDirectives['nosnippet'] = true;
  if (seo.maxSnippet !== undefined) robotsDirectives['max-snippet'] = seo.maxSnippet;
  if (seo.maxImagePreview) robotsDirectives['max-image-preview'] = seo.maxImagePreview;
  if (seo.maxVideoPreview !== undefined)
    robotsDirectives['max-video-preview'] = seo.maxVideoPreview;
  if (seo.unavailableAfter) robotsDirectives['unavailable_after'] = seo.unavailableAfter;

  // Return complete metadata object
  return {
    title: baseTitle,
    description: metaDescription,
    metadataBase: new URL(siteConfig.url),
    robots: {
      ...robotsDirectives,
      googleBot: {
        ...robotsDirectives,
        'max-image-preview': seo.maxImagePreview || 'large',
        'max-snippet': seo.maxSnippet || -1,
        'max-video-preview': seo.maxVideoPreview || -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: baseTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: baseTitle,
        },
      ],
      locale: siteConfig.seo.locale,
      type: pageType === 'home' ? 'website' : 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: baseTitle,
      description: metaDescription,
      images: [ogImageUrl],
      creator: siteConfig.social.handles?.twitter || '@brightwayservices',
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
}
