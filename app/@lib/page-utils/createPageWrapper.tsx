import React from 'react';
import MainLayout from '@/app/@components/ui/layout/MainLayout';

/**
 * Interface for the page layout props
 */
export interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

/**
 * Create Page Wrapper
 *
 * A higher-order component that provides consistent page layout structure.
 * It wraps the page content in the main layout and applies consistent spacing.
 *
 * @param Component The component to wrap
 * @param options Optional configuration options
 * @returns A wrapped component with consistent page layout
 */
export function createPageWrapper<T extends PageLayoutProps>(
  Component: React.ComponentType<T>,
  options: {
    withMainLayout?: boolean;
    layoutProps?: Omit<PageLayoutProps, 'children'>;
  } = {}
) {
  const { withMainLayout = true, layoutProps = {} } = options;

  // Create the wrapper component
  const WrappedPage = (props: T) => {
    // If we don't want the main layout, just render the component
    if (!withMainLayout) {
      return <Component {...props} />;
    }

    // Otherwise, wrap the component with the main layout
    return (
      <MainLayout>
        <div className={`container mx-auto px-4 py-16 md:py-24 ${layoutProps.className || ''}`}>
          <Component {...props} />
        </div>
      </MainLayout>
    );
  };

  // Copy display name for better debugging
  WrappedPage.displayName = `PageWrapper(${Component.displayName || Component.name || 'Component'})`;

  return WrappedPage;
}
