/**
 * Page Utilities Exports
 *
 * This file serves as a central export point for all page utility components.
 * It allows importing page utilities from a single location for better maintainability.
 *
 * Example usage:
 * import { PageSection, PageHeader, createPageWrapper } from '@/app/@lib/page-utils';
 */

// Export utility functions for page components
export * from './createPageWrapper';

// Export page structure components
export { default as PageTemplate } from './PageTemplate';
export { default as PageSection } from './PageSection';
export * from './pageStructure';

// Export section layout components
export * from './sectionLayout';
