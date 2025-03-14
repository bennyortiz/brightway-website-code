import React, { ReactNode } from 'react';
import { StandardPage, StandardPageProps } from './StandardPage';

/**
 * Interface for the ListingPage component
 */
export interface ListingPageProps extends StandardPageProps {
  /**
   * Optional search/filter component to display at the top of the listing
   */
  filterComponent?: ReactNode;
  
  /**
   * Optional component to display when no items are found
   */
  emptyState?: ReactNode;
  
  /**
   * Optional header component for the listing section
   */
  listingHeader?: ReactNode;
  
  /**
   * Optional footer component for the listing section
   */
  listingFooter?: ReactNode;
  
  /**
   * Whether to show the filter component in a sticky container
   */
  stickyFilter?: boolean;
  
  /**
   * Whether items are loading (for loading state)
   */
  isLoading?: boolean;
  
  /**
   * Whether to show the loading state
   */
  showLoading?: boolean;
  
  /**
   * Custom loading component
   */
  loadingComponent?: ReactNode;
}

/**
 * Default empty state component
 */
const DefaultEmptyState = ({ message = "No items found" }: { message?: string }) => (
  <div className="py-12 text-center">
    <p className="text-gray-500 text-lg">{message}</p>
  </div>
);

/**
 * Default loading component
 */
const DefaultLoadingComponent = () => (
  <div className="py-12 text-center">
    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

/**
 * ListingPage Component
 * 
 * A specialized page template for displaying lists of items.
 * It extends the StandardPage component and adds features specific to listing pages:
 * - Filter/search functionality
 * - Empty state handling
 * - Loading state
 * - Pagination support
 * 
 * This template is ideal for pages like Service Areas, Blog Listings, etc.
 */
export function ListingPage({
  children,
  filterComponent,
  emptyState,
  listingHeader,
  listingFooter,
  stickyFilter = false,
  isLoading = false,
  showLoading = false,
  loadingComponent,
  ...standardPageProps
}: ListingPageProps) {
  // Render empty state if children is null or undefined and not loading
  const isEmpty = children === null || children === undefined;
  const showEmptyState = isEmpty && !isLoading && !showLoading;
  
  // Determine whether to show loading state
  const showLoadingState = isLoading || showLoading;
  
  // Default empty and loading components
  const emptyStateComponent = emptyState || <DefaultEmptyState />;
  const loadingStateComponent = loadingComponent || <DefaultLoadingComponent />;

  return (
    <StandardPage {...standardPageProps}>
      {/* Filter section with optional sticky behavior */}
      {filterComponent && (
        <div className={`w-full mb-8 ${stickyFilter ? 'sticky top-20 z-10 bg-white py-4 shadow-sm' : ''}`}>
          {filterComponent}
        </div>
      )}
      
      {/* Listing header */}
      {listingHeader && (
        <div className="mb-6">
          {listingHeader}
        </div>
      )}
      
      {/* Listing content with loading and empty states */}
      <div className="w-full">
        {showLoadingState ? (
          loadingStateComponent
        ) : showEmptyState ? (
          emptyStateComponent
        ) : (
          children
        )}
      </div>
      
      {/* Listing footer (often used for pagination) */}
      {listingFooter && (
        <div className="mt-8">
          {listingFooter}
        </div>
      )}
    </StandardPage>
  );
}

export default ListingPage; 