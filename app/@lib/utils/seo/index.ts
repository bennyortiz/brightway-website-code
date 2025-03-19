/**
 * SEO Utilities
 * 
 * A consolidated module for all SEO-related functionality including:
 * - JSON-LD schema generation
 * - Metadata generation
 * - Description generation
 * 
 * This module reduces duplication and provides a unified API for SEO functionality.
 */

import { Metadata } from 'next';
import { siteConfig } from '../../constants/siteConfig';

// ------------------------------------------------------------
// Types
// ------------------------------------------------------------

export type PageType = 'home' | 'about' | 'contact' | 'custom';
export type SchemaType = 'LocalBusiness' | 'Website' | 'Organization' | 'FAQ' | 'Service';

// Simplified SEO control options
export interface SEOOptions {
  noIndex?: boolean;
  noFollow?: boolean;
  noArchive?: boolean;
  maxSnippet?: number;
  maxImagePreview?: 'none' | 'standard' | 'large';
}

export interface MetadataOptions {
  pageType: PageType;
  title?: string;
  description?: string;
  ogImage?: string;
  customData?: Record<string, string>;
  slug?: string;
  canonicalPath?: string;
  seo?: SEOOptions;
}

// ------------------------------------------------------------
// Description Generation
// ------------------------------------------------------------

/**
 * Generates appropriate meta descriptions based on page type
 */
export function generateDescription(type: PageType, customData?: Record<string, string>): string {
  if (type === 'custom') return siteConfig.description;
  
  switch (type) {
    case 'home':
      return siteConfig.description;
    case 'about':
      return `Learn about ${siteConfig.name}, established in ${siteConfig.business.startYear} with ${siteConfig.business.clientsServed} satisfied clients.`;
    case 'contact':
      return `Contact ${siteConfig.name} for ${siteConfig.business.satisfaction} satisfaction guaranteed cleaning services. Get a free quote today!`;
    default:
      return siteConfig.description;
  }
}

// ------------------------------------------------------------
// Metadata Generation
// ------------------------------------------------------------

/**
 * Generates consistent metadata for any page
 */
export function generateMetadata({
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
  const metaDescription = description || generateDescription(pageType, customData);

  // Create canonical URL
  let canonicalUrl: string;
  if (pageType === 'home' || canonicalPath === '/') {
    canonicalUrl = siteConfig.url.replace(/\/+$/, '');
  } else {
    const resolvedPath = canonicalPath || (slug ? `/${slug.replace(/^\/+/, '')}` : '');
    canonicalUrl = `${siteConfig.url.replace(/\/+$/, '')}${resolvedPath}`;
  }

  // Determine OG image
  const ogImageUrl = ogImage || siteConfig.ogImage;

  // Build robots directives
  const robotsDirectives: Record<string, boolean | number | string> = {
    index: !seo.noIndex,
    follow: !seo.noFollow,
  };

  // Add optional robots directives
  if (seo.noArchive) robotsDirectives['noarchive'] = true;
  if (seo.maxSnippet !== undefined) robotsDirectives['max-snippet'] = seo.maxSnippet;
  if (seo.maxImagePreview) robotsDirectives['max-image-preview'] = seo.maxImagePreview;

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

// ------------------------------------------------------------
// Schema Generation
// ------------------------------------------------------------

/**
 * Unified schema generator function that creates JSON-LD for any schema type
 */
export function generateSchema(type: SchemaType, data?: any): Record<string, any> {
  switch (type) {
    case 'LocalBusiness':
      return generateLocalBusinessSchema();
    case 'Website':
      return generateWebsiteSchema();
    case 'Organization':
      return generateOrganizationSchema();
    case 'FAQ':
      return generateFAQSchema(data);
    case 'Service':
      return generateServiceSchema(data);
    default:
      return generateLocalBusinessSchema();
  }
}

/**
 * Generates Schema.org JSON-LD for a LocalBusiness
 */
function generateLocalBusinessSchema(): Record<string, any> {
  const { business, contact, social } = siteConfig;

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: contact.phone.raw,
    email: contact.email,
    foundingDate: `${business.startYear}`,
    logo: `${siteConfig.url}/logo.png`,
    image: siteConfig.ogImage,
    priceRange: '$$',
    paymentAccepted: 'Cash, Credit Card',
    currenciesAccepted: 'USD',
    openingHours: contact.hours,
    sameAs: [social.facebook, social.twitter, social.instagram, social.linkedin].filter(Boolean),
    address: {
      '@type': 'PostalAddress',
      streetAddress: contact.address.street,
      addressLocality: contact.address.city,
      addressRegion: contact.address.state,
      postalCode: contact.address.zip,
      addressCountry: contact.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: contact.coordinates.latitude,
      longitude: contact.coordinates.longitude,
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: contact.coordinates.latitude,
        longitude: contact.coordinates.longitude,
      },
      geoRadius: '50000',
    },
  };
}

/**
 * Generates Schema.org JSON-LD for a WebSite
 */
function generateWebsiteSchema(): Record<string, any> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Generates Schema.org JSON-LD for an Organization
 */
function generateOrganizationSchema(): Record<string, any> {
  const { business, contact, social } = siteConfig;

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: business.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    email: contact.email,
    telephone: contact.phone.raw,
    address: {
      '@type': 'PostalAddress',
      streetAddress: contact.address.street,
      addressLocality: contact.address.city,
      addressRegion: contact.address.state,
      postalCode: contact.address.zip,
      addressCountry: contact.address.country,
    },
    sameAs: [social.facebook, social.twitter, social.instagram, social.linkedin].filter(Boolean),
  };
}

/**
 * Generates Schema.org JSON-LD for FAQs
 */
function generateFAQSchema(faqs: Array<{ question: string; answer: string }>): Record<string, any> {
  if (!faqs || !Array.isArray(faqs) || faqs.length === 0) {
    return {};
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generates Schema.org JSON-LD for a Service
 */
function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  image?: string;
}): Record<string, any> {
  if (!service) return {};

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: siteConfig.business.legalName,
      url: siteConfig.url,
    },
    url: service.url,
    ...(service.image && { image: service.image }),
  };
} 