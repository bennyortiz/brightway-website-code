/**
 * Centralized utilities index file
 * Re-exports utility functions from specialized files
 * This approach maintains backward compatibility while providing better organization
 */

// Core utility functions - re-export from main utils.ts file
export { cn, generateId, scrollToElement, debounce, isValidEmail } from '../utils';

// Formatting utilities
export { 
  formatPhoneNumber,
  formatDate,
  truncateText,
  formatCurrency,
  toTitleCase
} from './formatting';

// SEO and metadata utilities
export { 
  generateLocalBusinessSchema,
  generateWebsiteSchema,
  generateOrganizationSchema,
  generateFAQSchema,
  generateMetaDescription
} from './seo';
export { generatePageMetadata } from './metadata';
export type { SEOOptions } from './metadata';

// Lazy loading utilities
export { lazyLoad, preloadComponent } from './lazyLoad';
export type { PagePlacement, LazyLoadOptions } from './lazyLoad';

// Icon utilities
export * from './icons'; 