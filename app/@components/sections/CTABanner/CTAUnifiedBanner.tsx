import React from 'react';
import { PrimaryButton } from '../../ui/buttons';
import { CalendarDays } from 'lucide-react';
import clsx from 'clsx';

/**
 * CTAUnifiedBanner Component
 *
 * A flexible call-to-action banner that adapts to any background.
 * This component replaces both the primary and secondary CTA banners
 * with a single unified component that handles all use cases.
 */
interface CTAUnifiedBannerProps {
  variant?: 'quote' | 'consultation'; // The variant determines the content and CTA button
  className?: string; // External classes, including background color
}

const CTAUnifiedBanner: React.FC<CTAUnifiedBannerProps> = ({ 
  variant = 'quote',
  className = ''
}) => {
  // Content based on variant
  const content = {
    quote: {
      title: 'Ready to Transform Your Space in DFW?',
      description: 'Get a customized cleaning solution that meets your business needs throughout the DFW metroplex. Contact us today for a free, no-obligation quote.',
      buttonText: 'Get Your Free Quote',
      icon: null
    },
    consultation: {
      title: 'Schedule a Free Consultation Today',
      description: 'Our cleaning experts will help you create a customized cleaning plan for your business. No obligation, just professional advice to meet your needs.',
      buttonText: 'Schedule Consultation',
      icon: <CalendarDays className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
    }
  };

  const { title, description, buttonText, icon } = content[variant];

  return (
    <section className={clsx('w-full py-16', className)}>
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl bg-primary overflow-hidden shadow-xl">
          <div className="relative px-6 py-12 md:py-16 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                {title}
              </h2>
              <p className="text-lg text-white/90 max-w-2xl">
                {description}
              </p>
            </div>

            <div className="flex-shrink-0">
              <PrimaryButton 
                href="#contact" 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 group"
              >
                {icon}
                {buttonText}
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAUnifiedBanner; 