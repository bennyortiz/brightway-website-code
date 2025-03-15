/**
 * Page-related type definitions
 */

/**
 * Metadata for pages
 */
export interface PageMetadata {
  pageType: 'home' | 'about' | 'services' | 'contact' | 'blog' | 'custom';
  title: string;
  description: string;
  slug?: string;
  ogImage?: string;
} 