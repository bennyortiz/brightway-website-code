/**
 * Metadata utilities index file
 * Provides a centralized export for all metadata-related functions
 */

import { 
  generatePageMetadata,
  type SEOOptions
} from '../metadata';

// Re-export from the metadata.ts file
export { generatePageMetadata };
export type { SEOOptions };

// Export any new metadata utilities here 