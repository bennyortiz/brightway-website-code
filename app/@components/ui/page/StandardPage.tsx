import React, { ReactNode } from 'react';
import MainLayout from '@/app/@components/ui/layout/MainLayout';
import PageHero, { PageHeroProps } from './PageHero';
import { Container } from '@/app/@components/ui/layout';

/**
 * Interface for the StandardPage component
 */
export interface StandardPageProps extends Omit<PageHeroProps, 'className'> {
  /**
   * The content of the page
   */
  children: ReactNode;
  
  /**
   * Whether to show breadcrumbs (default: true)
   */
  hasBreadcrumbs?: boolean;
  
  /**
   * Whether to show the hero section (default: true)
   */
  withHero?: boolean;
  
  /**
   * Additional classes for the page content container
   */
  contentClassName?: string;
  
  /**
   * Additional classes for the hero section
   */
  heroClassName?: string;
  
  /**
   * Whether to use default page padding (default: true)
   */
  withPadding?: boolean;
  
  /**
   * Additional SEO components to include
   */
  seo?: ReactNode;
}

/**
 * StandardPage Component
 * 
 * A standardized page template component that provides consistent structure
 * for content pages throughout the site. It includes:
 * - MainLayout wrapper
 * - Optional PageHero section
 * - Optional breadcrumbs
 * - Content container with consistent padding
 * 
 * This component helps ensure design consistency and reduces code duplication
 * across multiple page components.
 */
export function StandardPage({
  title,
  description,
  eyebrow,
  heroImage,
  children,
  hasBreadcrumbs = true,
  withHero = true,
  contentClassName = '',
  heroClassName = '',
  withGradient = true,
  withPadding = true,
  primaryCTA,
  secondaryCTA,
  textColor,
  seo,
}: StandardPageProps) {
  return (
    <MainLayout>
      {/* Optional SEO components */}
      {seo}
      
      {/* Hero Section */}
      {withHero && (
        <PageHero
          title={title}
          description={description}
          eyebrow={eyebrow}
          heroImage={heroImage}
          withGradient={withGradient}
          className={heroClassName}
          primaryCTA={primaryCTA}
          secondaryCTA={secondaryCTA}
          textColor={textColor}
        />
      )}
      
      {/* Breadcrumbs would go here */}
      {hasBreadcrumbs && (
        <div className="bg-gray-50 py-3 border-b border-gray-100">
          <Container>
            <div className="text-sm text-gray-500">
              {/* Breadcrumb implementation would go here */}
              Home / {title}
            </div>
          </Container>
        </div>
      )}
      
      {/* Page Content */}
      <div className={withPadding ? 'py-16 md:py-24' : ''}>
        <Container className={contentClassName}>
          {children}
        </Container>
      </div>
    </MainLayout>
  );
}

export default StandardPage; 