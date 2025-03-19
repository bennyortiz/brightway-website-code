/**
 * Core Types
 * 
 * This file contains simplified core type definitions used throughout the application.
 * It uses TypeScript utility types for better composability and reduces duplication.
 */

// -----------------------------------------------------
// Basic Shared Types
// -----------------------------------------------------

/**
 * Base metadata for all content types
 */
export interface BaseMetadata {
  title: string;
  description: string;
  image?: string;
  slug: string;
}

/**
 * SEO-specific metadata that can be added to any content
 */
export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
}

/**
 * Common fields for all content types
 */
export interface ContentBase {
  id: string;
  title: string;
  slug: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  seo?: SEOData;
}

// -----------------------------------------------------
// UI & Layout Types
// -----------------------------------------------------

/**
 * Simplified variant options for UI components
 */
export type UIVariant = 'default' | 'primary' | 'secondary' | 'outline' | 'subtle' | 'highlight';

/**
 * Common size options
 */
export type SizeVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Spacing options
 */
export type SpacingVariant = 'none' | 'xs' | 'sm' | 'default' | 'lg' | 'xl';

/**
 * Alignment options
 */
export type AlignVariant = 'left' | 'center' | 'right';

/**
 * Simple navigation item
 */
export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
  isExternal?: boolean;
}

// -----------------------------------------------------
// Business & Service Types
// -----------------------------------------------------

/**
 * Contact information
 */
export interface ContactInfo {
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country?: string;
  };
}

/**
 * Simplified service information
 */
export interface Service extends ContentBase {
  excerpt: string;
  content: string;
  features: string[];
  image?: string;
  icon?: string;
  price?: string;
}

// -----------------------------------------------------
// Blog Types
// -----------------------------------------------------

/**
 * Author information
 */
export interface Author {
  id: string;
  name: string;
  avatar?: string;
  bio?: string;
  role?: string;
}

/**
 * Category information
 */
export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

/**
 * Tag information
 */
export interface Tag {
  id: string;
  name: string;
  slug: string;
}

/**
 * Blog post with simplified relations
 */
export interface BlogPost extends ContentBase {
  excerpt: string;
  content: string;
  featuredImage?: string;
  authorId: string;
  categoryIds: string[];
  tagIds?: string[];
  readTime?: number;
  isFeatured?: boolean;
}

// Create simplified preview versions using utility types
export type BlogPostPreview = Omit<BlogPost, 'content'>;
export type ServicePreview = Omit<Service, 'content' | 'features'> & { featureCount: number }; 