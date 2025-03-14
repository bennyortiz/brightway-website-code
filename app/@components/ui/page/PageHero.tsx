import React from 'react';
import SafeImage from '@/app/@components/ui/safe-image';
import { Grid, Column, Container } from '@/app/@components/ui/layout';
import { Button } from '@/app/@components/ui/buttons';
import Link from 'next/link';

/**
 * Interface for the PageHero component
 */
export interface PageHeroProps {
  /**
   * The main title of the page
   */
  title: string;
  
  /**
   * Optional subtitle or description text
   */
  description?: string;
  
  /**
   * Optional eyebrow text displayed above the title
   */
  eyebrow?: string;
  
  /**
   * Optional image to display in the hero
   */
  heroImage?: {
    src: string;
    alt: string;
  };
  
  /**
   * Whether to use a gradient background (default: true)
   */
  withGradient?: boolean;
  
  /**
   * Optional classes to add to the component
   */
  className?: string;
  
  /**
   * Optional primary CTA button
   */
  primaryCTA?: {
    text: string;
    href: string;
  };
  
  /**
   * Optional secondary CTA button
   */
  secondaryCTA?: {
    text: string;
    href: string;
  };
  
  /**
   * Text color for the content (default: white for gradient bg, dark for non-gradient)
   */
  textColor?: 'white' | 'dark';
}

/**
 * PageHero Component
 * 
 * A consistent hero component for page headers across the site.
 * It supports various configurations including:
 * - With or without an image
 * - With or without gradient background
 * - Various CTA buttons
 * - Customizable content
 */
export function PageHero({
  title,
  description,
  eyebrow,
  heroImage,
  withGradient = true,
  className = '',
  primaryCTA,
  secondaryCTA,
  textColor,
}: PageHeroProps) {
  // Determine text color based on gradient setting or explicit override
  const contentTextColor = textColor || (withGradient ? 'white' : 'dark');
  const textColorClasses = contentTextColor === 'white' ? 'text-white' : 'text-gray-900';
  
  return (
    <div className={`${withGradient ? 'bg-gradient-to-r from-primary to-primary-dark' : 'bg-gray-50'} ${className}`}>
      <Container className="py-16 lg:py-24">
        <Grid columns={{ default: 1, md: heroImage ? 2 : 1 }} gap={12} className="items-center">
          <Column className={textColorClasses}>
            {eyebrow && (
              <div className={`inline-block text-sm font-bold tracking-wider ${withGradient ? 'text-white bg-white/10' : 'text-primary bg-primary/10'} px-4 py-1 rounded-full mb-3`}>
                {eyebrow}
              </div>
            )}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {title}
            </h1>
            {description && (
              <p className={`text-xl ${withGradient ? 'opacity-90' : 'text-gray-600'} mb-8`}>
                {description}
              </p>
            )}
            
            {/* CTA Buttons */}
            {(primaryCTA || secondaryCTA) && (
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                {primaryCTA && (
                  <Link
                    href={primaryCTA.href}
                    className={`inline-block ${withGradient ? 'bg-white text-primary' : 'bg-primary text-white'} font-semibold px-8 py-4 rounded-md shadow-md hover:bg-opacity-90 transition-colors`}
                  >
                    {primaryCTA.text}
                  </Link>
                )}
                
                {secondaryCTA && (
                  <Link
                    href={secondaryCTA.href}
                    className={`inline-block ${withGradient ? 'border border-white/30 text-white hover:bg-white/10' : 'border border-primary/30 text-primary hover:bg-primary/10'} font-semibold px-8 py-4 rounded-md transition-colors`}
                  >
                    {secondaryCTA.text}
                  </Link>
                )}
              </div>
            )}
          </Column>
          
          {heroImage && (
            <Column className="hidden md:block">
              <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-2xl">
                <SafeImage
                  src={heroImage.src}
                  alt={heroImage.alt}
                  className="object-cover"
                  priority={true}
                  placement="above-fold"
                  quality={85}
                  containerHeight={true}
                />
              </div>
            </Column>
          )}
        </Grid>
      </Container>
    </div>
  );
}

export default PageHero; 