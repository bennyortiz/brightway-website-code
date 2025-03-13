import { Metadata } from 'next';
import { generatePageMetadata } from '@/app/@lib/utils/metadata';

/**
 * Home Page Metadata
 *
 * Defines metadata for the home page using Next.js Metadata API
 * This includes SEO elements like title, description, and Open Graph data
 * The metadata is generated using a utility function for consistency
 */
export const metadata: Metadata = generatePageMetadata({
  title: 'Brightway Commercial Cleaning Services', 
  description: 'Professional commercial cleaning services for businesses in Austin, TX. Brighten your workspace with Brightway.',
  pageType: 'home',
  canonicalPath: '/', // Explicitly set canonical path for home page
}); 