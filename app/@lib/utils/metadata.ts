/**
 * @deprecated This file is deprecated. Import from '@/app/@lib/utils/seo' instead.
 */

// Re-export from the new location for backward compatibility
export * from './seo/index';

// Import the function with the new name for backward compatibility
import { generateMetadata as generatePageMetadataNew } from './seo/index';

// Export with the old name for backward compatibility
export const generatePageMetadata = generatePageMetadataNew;
