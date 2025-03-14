/**
 * Not Found (404) Page Component - Refactored
 *
 * This component renders when users navigate to a non-existent route.
 * Next.js automatically serves this component for 404 errors using the App Router.
 * 
 * Refactored version using the ErrorPageLayout component for consistent styling.
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from './@lib/utils/metadata';
import { siteConfig } from './@lib/constants/siteConfig';
import { ErrorPageLayout } from './@components/ui/page';

/**
 * 404 Page Metadata
 */
export const metadata: Metadata = generatePageMetadata({
  pageType: 'custom',
  title: `Page Not Found | ${siteConfig.name}`,
  description: `The page you're looking for could not be found. Return to ${siteConfig.name} homepage.`,
  canonicalPath: '/404',
  seo: {
    noIndex: true, // Don't index 404 pages
    maxSnippet: 0,  // Don't show snippets
  }
});

/**
 * NotFound Component - Refactored
 * 
 * Demonstrates usage of the ErrorPageLayout component for consistent error page styling
 */
export default function NotFound() {
  return (
    <ErrorPageLayout
      status="404"
      title="Page Not Found"
      description="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
      actionButton={
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-white shadow hover:bg-primary/90 transition-colors"
        >
          Return to Homepage
        </Link>
      }
    />
  );
} 