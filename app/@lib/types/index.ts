/**
 * Common type definitions for the application
 * Re-exports the simplified type system for easier imports
 */

// Re-export all types from core types file
export * from './core';

// Re-export specialized types for backward compatibility
// but exclude conflicting exports
export * from './page';
export * from './service';
export * from './navigation';
export * from './business';
export * from './form';

// Manually re-export blog types to avoid conflicts
// Using proper type exports for TypeScript isolatedModules
import type { BlogAuthor, BlogCategory, BlogTag } from './blog';
export type { BlogAuthor, BlogCategory, BlogTag };

// Create backward compatibility types
import { 
  ContentBase, 
  Service as CoreService,
  SEOData,
  BlogPost as CoreBlogPost
} from './core';

/**
 * @deprecated Use interfaces from core.ts instead
 */
export interface PageMetadata {
  pageType: 'home' | 'about' | 'services' | 'contact' | 'blog' | 'custom';
  title: string;
  description: string;
  slug?: string;
  ogImage?: string;
}

/**
 * @deprecated Use Service from core.ts instead
 */
export interface Service {
  title: string;
  description: string;
  features: string[];
  icon?: React.ReactNode | string;
  image?: string;
  slug?: string;
}

/**
 * @deprecated Use Service interface instead
 */
export type ServiceItem = Service;

/**
 * @deprecated Use ContactInfo from core.ts instead or create a specialized form type
 */
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  serviceType?: string;
  preferredContact?: 'email' | 'phone';
  consent: boolean;
}

/**
 * Navigation item
 */
export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
  isExternal?: boolean;
}

/**
 * Business information
 */
export interface BusinessInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: {
    days: string;
    hours: string;
  }[];
}
