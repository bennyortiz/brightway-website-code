'use client';

import Script from 'next/script';
import {
  generateLocalBusinessSchema,
  generateWebsiteSchema,
  generateOrganizationSchema,
} from '@/app/utils/seo';

interface SEOProps {
  type?: 'local_business' | 'website' | 'organization' | 'all';
  jsonLd?: Record<string, any>;
}

/**
 * SEO component that adds JSON-LD structured data to pages
 * This component should be added to pages that need specific schema markup
 */
export default function SEO({ type = 'all', jsonLd }: SEOProps) {
  // If custom JSON-LD is provided, use it instead of generated ones
  if (jsonLd) {
    return (
      <Script
        id="json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    );
  }

  // Generate schemas based on type
  const getSchemas = () => {
    switch (type) {
      case 'local_business':
        return [generateLocalBusinessSchema()];
      case 'website':
        return [generateWebsiteSchema()];
      case 'organization':
        return [generateOrganizationSchema()];
      case 'all':
        return [
          generateLocalBusinessSchema(),
          generateWebsiteSchema(),
          generateOrganizationSchema(),
        ];
      default:
        return [generateLocalBusinessSchema()];
    }
  };

  // Get the generated schemas
  const schemas = getSchemas();

  // Add each schema as a separate script to improve readability and maintainability
  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          key={`json-ld-${index}`}
          id={`json-ld-${index}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
