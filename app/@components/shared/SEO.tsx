'use client';

import Script from 'next/script';
import { generateSchema, SchemaType } from '@/app/@lib/utils/seo/index';

interface SEOProps {
  type?: SchemaType | SchemaType[];
  jsonLd?: Record<string, any>;
  data?: any;
}

/**
 * SEO component that adds JSON-LD structured data to pages
 * 
 * Simplified to use the consolidated schema generator.
 * 
 * @example
 * // Add all standard schemas
 * <SEO type={['LocalBusiness', 'Website', 'Organization']} />
 * 
 * // Add FAQ schema with data
 * <SEO type="FAQ" data={faqItems} />
 * 
 * // Add Service schema with data
 * <SEO type="Service" data={{ name: 'Office Cleaning', description: '...', url: '/services/office-cleaning' }} />
 * 
 * // Add custom JSON-LD
 * <SEO jsonLd={{ '@type': 'Product', name: 'Custom Product' }} />
 */
export default function SEO({ type = ['LocalBusiness', 'Website'], jsonLd, data }: SEOProps) {
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
