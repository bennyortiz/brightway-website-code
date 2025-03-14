/**
 * SEO utilities index file
 * Provides a centralized export for all SEO-related functions
 */

import { 
  generateLocalBusinessSchema,
  generateWebsiteSchema,
  generateOrganizationSchema,
  generateFAQSchema,
  generateMetaDescription
} from '../seo';

// Re-export from the seo.ts file
export { 
  generateLocalBusinessSchema,
  generateWebsiteSchema,
  generateOrganizationSchema,
  generateFAQSchema,
  generateMetaDescription
};

// Export any new SEO utilities here 