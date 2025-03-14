/**
 * Page Utilities Exports
 * 
 * This file serves as a central export point for all page utility components.
 * It allows importing page utilities from a single location for better maintainability.
 * 
 * Example usage:
 * import { PageSection, PageHeader, createPageWrapper } from '@/app/@lib/page-utils';
 */

// Export the page wrapper HOC
export * from './createPageWrapper';

// Export page structure components
export * from './pageStructure';

// Export section layout components
export * from './sectionLayout';

/**
 * Page utilities index file
 * Re-exports all page-specific utilities for centralized imports
 */

// Re-export any page-specific utilities here
// This will include functions specific to page management and handling 