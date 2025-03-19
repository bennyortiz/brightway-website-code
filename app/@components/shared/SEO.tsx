'use client';

import Script from 'next/script';
import { generateSchema, SchemaType } from '@/app/@lib/utils/seo/index';
import type { SEOData } from '@/app/@lib/types/core';

// Simplified props using our consolidated type system
interface SEOProps {
  type?: SchemaType | SchemaType[];
  jsonLd?: Record<string, any>;
  data?: any;
  seo?: SEOData;
}

/**
 * SEO component that adds JSON-LD structured data to pages
 * 
 * Uses simplified core types for better consistency.
 * 
 * @example
 * // Add all standard schemas
 * <SEO type={['LocalBusiness', 'Website']} />
 * 
 * // Add FAQ schema with data
 * <SEO type="FAQ" data={faqItems} />
 * 
 * // Add Service schema with data and SEO metadata
 * <SEO 
 *   type="Service" 
 *   data={{ name: 'Office Cleaning', description: '...', url: '/services/office-cleaning' }}
 *   seo={{ title: 'Custom title', keywords: ['office', 'cleaning'] }}
 * />
 */
export default function SEO({ type = ['LocalBusiness', 'Website'], jsonLd, data, seo }: SEOProps) {
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
    if (Array.isArray(type)) {
      return type.map(schemaType => generateSchema(schemaType, data));
    }
    return [generateSchema(type, data)];
  };

  // Get the generated schemas, filtering out empty objects
  const schemas = getSchemas().filter(schema => Object.keys(schema).length > 0);

  if (schemas.length === 0) return null;

  // Add each schema as a separate script
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
