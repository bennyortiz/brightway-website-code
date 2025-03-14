'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';
import { ErrorPageLayout } from './@components/ui/page';

/**
 * Error Component - Refactored
 * 
 * Next.js Error Boundary component for the entire application
 * This component is rendered when an uncaught exception is thrown
 * in a React component tree at runtime.
 * 
 * Refactored version using the ErrorPageLayout component for consistent styling.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <ErrorPageLayout
      title="Something went wrong"
      description="We apologize for the inconvenience. Our team has been notified of this issue."
      icon={<AlertTriangle className="w-8 h-8 text-red-500" />}
      actionButton={
        <button
          onClick={reset}
          className="inline-flex items-center justify-center h-11 px-6 font-medium bg-primary text-white rounded-md shadow hover:bg-primary-dark transition-colors"
        >
          Try again
        </button>
      }
      secondaryActionButton={
        <Link
          href="/"
          className="inline-flex items-center justify-center h-11 px-6 font-medium bg-gray-100 text-gray-900 rounded-md shadow hover:bg-gray-200 transition-colors"
        >
          Go home
        </Link>
      }
    />
  );
} 