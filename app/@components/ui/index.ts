/**
 * UI Components Library
 * 
 * This file serves as a central export point for all reusable UI components.
 * It allows importing components from a single location, making it easier
 * to maintain and update the UI library.
 * 
 * Usage:
 * ```tsx
 * // Import specific components from specific categories
 * import { Button, ButtonLink } from '@/app/@components/ui/buttons';
 * import { Input, Textarea } from '@/app/@components/ui/forms';
 * 
 * // Or import everything from the UI library
 * import { Button, Input, Card, ... } from '@/app/@components/ui';
 * ```
 */

// Export all UI components from a single file for easier imports
// This pattern simplifies imports by allowing:
// import { ComponentName } from '@/app/@components/ui';

// Core UI Components
export { default as Logo } from './Logo';
export { default as SkipLink } from './SkipLink';
export { default as ErrorBoundary } from './ErrorBoundary';
export { default as SectionHeader } from './section-header';

// Images - Use SafeImage for all image needs
export { default as SafeImage } from './safe-image';
export { default as ImageSkeleton } from './image-skeleton';

// Layout Components (re-export from nested directories)
export * from './layout';
export * from './page';
export * from './buttons';
export * from './forms';
export * from './cards';
export * from './carousel';

// Virtual List for large data sets
export { default as VirtualList } from './virtual-list';

// Add additional component exports as the library grows
// export * from './navigation';
// export * from './feedback';
// export * from './data-display';
// etc. 