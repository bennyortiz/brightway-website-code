/**
 * Page Components Library
 * 
 * This file serves as a central export point for all page-related components.
 * It allows importing components from a single location, making it easier
 * to maintain and update the page component library.
 * 
 * Usage:
 * ```tsx
 * // Import specific page components
 * import { StandardPage, PageHero } from '@/app/@components/ui/page';
 * 
 * // Example usage
 * export default function ServicePage() {
 *   return (
 *     <StandardPage
 *       title="Our Services"
 *       description="Professional cleaning services for your business"
 *       heroImage={{ src: '/images/services-hero.jpg', alt: 'Our Services' }}
 *     >
 *       <ServiceContent />
 *     </StandardPage>
 *   );
 * }
 * ```
 */

export { default as PageHero } from './PageHero';
export type { PageHeroProps } from './PageHero';

export { default as StandardPage } from './StandardPage';
export type { StandardPageProps } from './StandardPage';

export { default as ErrorPageLayout } from './ErrorPageLayout';
export type { ErrorPageLayoutProps } from './ErrorPageLayout';

export { default as ListingPage } from './ListingPage';
export type { ListingPageProps } from './ListingPage';

export { default as FormPage } from './FormPage';
export type { FormPageProps } from './FormPage';

// Export additional page components as they are added
// export { default as DetailPage } from './DetailPage'; 