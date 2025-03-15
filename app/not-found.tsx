/**
 * Not Found (404) Page Component
 *
 * This component renders when users navigate to a non-existent route.
 * Next.js automatically serves this component for 404 errors using the App Router.
 * It provides a user-friendly error message and a way to return to the homepage.
 *
 * This component is part of Next.js's built-in error handling system.
 * For more information, see: https://nextjs.org/docs/app/api-reference/file-conventions/not-found
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from './@lib/utils/metadata';
import { siteConfig } from './@lib/constants/siteConfig';

/**
 * 404 Page Metadata
 *
 * Defines the metadata specifically for the 404 error page
 * This enhances SEO by providing appropriate title and description
 * for search engines that index this page.
 */
export const metadata: Metadata = generatePageMetadata({
  pageType: 'custom',
  title: `Page Not Found | ${siteConfig.name}`,
  description: `The page you're looking for could not be found. Return to ${siteConfig.name} homepage.`,
  canonicalPath: '/404',
  seo: {
    noIndex: true, // Don't index 404 pages
    maxSnippet: 0, // Don't show snippets
  },
});

/**
 * NotFound Component
 *
 * Renders a clean, user-friendly 404 error page that:
 * - Clearly communicates the page was not found
 * - Provides context on possible reasons
 * - Offers a prominent way to return to the homepage
 *
 * The design follows the same styling as the rest of the site
 * for a consistent user experience, even during errors.
 */
export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center min-h-screen">
      {/* Error code display */}
      <h1 className="text-5xl font-bold mb-4">404</h1>

      {/* Main error message */}
      <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>

      {/* Explanatory text */}
      <p className="text-xl text-gray-600 mb-8 text-center max-w-xl">
        The page you are looking for might have been removed, had its name changed, or is
        temporarily unavailable.
      </p>

      {/* Action button to return to homepage */}
      <Link
        href="/"
        className="inline-flex h-11 items-center justify-center rounded-md bg-blue-600 px-8 text-base font-medium text-white shadow"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
