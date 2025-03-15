/**
 * Section Wrapper Component
 * 
 * A helper component that wraps each section in an ErrorBoundary
 * to prevent errors in one section from crashing the entire page.
 * 
 * @example
 * <SectionWrapper name="Hero">
 *   <HeroComponent />
 * </SectionWrapper>
 */

import dynamic from 'next/dynamic';

// Import ErrorBoundary with dynamic loading
const ErrorBoundary = dynamic(() => import('@/app/@components/ui/ErrorBoundary'));

interface SectionWrapperProps {
  children: React.ReactNode;
  name: string;
}

/**
 * SectionWrapper Component
 * 
 * @param children - The section content to be rendered
 * @param name - The name of the section (used in error messages)
 */
export default function SectionWrapper({ children, name }: SectionWrapperProps) {
  return (
    <ErrorBoundary
      fallback={(error, reset) => (
        <div className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Unable to load {name} section
            </h2>
            <p className="text-gray-600 mb-6">
              We encountered an error while loading this content.
            </p>
            <button
              onClick={reset}
              className="px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      )}
    >
      {children}
    </ErrorBoundary>
  );
} 