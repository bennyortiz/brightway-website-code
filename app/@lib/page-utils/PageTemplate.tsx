/**
 * PageTemplate Component
 * 
 * A standardized template for page layouts that provides consistent styling
 * across all pages while allowing for customization through page-specific sections.
 * 
 * This template implements full-width sections by default and handles responsive
 * layout concerns in a consistent manner.
 */

import React from 'react';
import MainLayout from '@/app/@components/ui/layout/MainLayout';
import { PageHeader } from '@/app/@components/ui/page';

export interface PageTemplateProps {
  /** Main content sections for the page */
  children: React.ReactNode;
  /** Page title displayed in the header */
  title: string;
  /** Optional page description displayed in the header */
  description?: string;
  /** Show a pattern in the header background */
  headerPattern?: boolean;
  /** Use custom header instead of standard PageHeader */
  customHeader?: React.ReactNode;
  /** Custom background color for the entire page */
  pageBgColor?: 'white' | 'gray-50' | 'primary-light';
  /** Options for header styling */
  headerOptions?: {
    centered?: boolean;
    className?: string;
    fullWidth?: boolean;
  };
}

/**
 * PageTemplate Component
 * 
 * Provides consistent page layout and styling for all pages
 */
const PageTemplate: React.FC<PageTemplateProps> = ({
  children,
  title,
  description,
  headerPattern = true,
  customHeader,
  pageBgColor = 'white',
  headerOptions = {
    centered: true,
    fullWidth: true
  }
}) => {
  // Map background colors to tailwind classes
  const bgColors = {
    'white': 'bg-white',
    'gray-50': 'bg-gray-50',
    'primary-light': 'bg-primary/10'
  };

  return (
    <MainLayout>
      <div className={`min-h-screen ${bgColors[pageBgColor]}`}>
        {/* Page Header */}
        {customHeader ? (
          customHeader
        ) : (
          <div className={headerOptions.fullWidth ? 'w-full' : 'container mx-auto px-4'}>
            <PageHeader 
              title={title} 
              description={description}
              centered={headerOptions.centered}
              backgroundPattern={headerPattern}
            />
          </div>
        )}

        {/* Page Content */}
        <main className="w-full">
          {children}
        </main>
      </div>
    </MainLayout>
  );
};

export default PageTemplate; 