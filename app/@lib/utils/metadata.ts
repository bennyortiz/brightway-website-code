import { Metadata } from 'next';
import { siteConfig } from '../constants/siteConfig';
import { generateMetaDescription } from './seo';

type PageType = 'home' | 'about' | 'contact' | 'custom';

interface MetadataOptions {
  pageType: PageType;
  title?: string;
  description?: string;
  ogImage?: string;
  customData?: Record<string, string>;
  slug?: string;
  noIndex?: boolean;
  canonicalPath?: string;
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
  noIndex = false,
  canonicalPath,
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
  const resolvedPath = canonicalPath || (slug ? `/${slug.replace(/^\/+/, '')}` : '');
  const canonicalUrl = `${siteConfig.url.replace(/\/+$/, '')}${resolvedPath}`;

  // Determine the proper OG image
  const ogImageUrl = ogImage || siteConfig.ogImage;

  // Return complete metadata object
  return {
    title: baseTitle,
    description: metaDescription,
    metadataBase: new URL(siteConfig.url),
    robots: noIndex ? { index: false, follow: true } : { index: true, follow: true },
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
