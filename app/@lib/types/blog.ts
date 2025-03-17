/**
 * Blog-related type definitions
 */

/**
 * Blog author information
 */
export interface BlogAuthor {
  id: string;
  name: string;
  avatar?: string;
  bio?: string;
  role?: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
    instagram?: string;
  };
}

/**
 * Blog category
 */
export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

/**
 * Blog tag
 */
export interface BlogTag {
  id: string;
  name: string;
  slug: string;
}

/**
 * Blog post
 */
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  author: BlogAuthor | string; // Can be either author object or author ID
  publishedAt: string | Date;
  updatedAt?: string | Date;
  categories: (BlogCategory | string)[]; // Can be category objects or category IDs
  tags?: (BlogTag | string)[]; // Can be tag objects or tag IDs
  readTime?: number; // Estimated reading time in minutes
  isFeatured?: boolean; // Whether post should be featured on homepage or blog index
  seo?: {
    title?: string; // Overrides default title
    description?: string; // Overrides default description
    keywords?: string[]; // Additional keywords
    ogImage?: string; // Custom OG image
  };
}

/**
 * Blog post preview (used in listings)
 */
export type BlogPostPreview = Omit<BlogPost, 'content'>; 