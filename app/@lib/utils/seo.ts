/**
 * @deprecated This file is deprecated. Import from '@/app/@lib/utils/seo/index' instead.
 */

// Re-export everything from the new location
export * from './seo/index';

// Export the old function names for backward compatibility
import { 
  generateSchema,
  generateDescription
} from './seo/index';

// Old function names mapped to new consolidated API
export const generateLocalBusinessSchema = () => generateSchema('LocalBusiness');
export const generateWebsiteSchema = () => generateSchema('Website');
export const generateOrganizationSchema = () => generateSchema('Organization');
export const generateFAQSchema = (faqs: any) => generateSchema('FAQ', faqs);
export const generateMetaDescription = generateDescription;
