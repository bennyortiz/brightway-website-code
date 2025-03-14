import React from 'react';
import { PrimaryButton } from '../../ui/buttons';
import { CalendarDays } from 'lucide-react';

/**
 * CTABanner Component
 * 
 * A versatile call-to-action banner that can be configured for different contexts.
 * This unified component replaces separate primary and secondary banners with a single
 * adaptable solution controlled via props.
 * 
 * @param props.variant - 'primary' (quote) or 'secondary' (consultation)
 * @param props.backgroundColor - Background color of the section (not the banner)
 * @param props.title - Custom banner title
 * @param props.description - Custom banner description
 * @param props.buttonText - Custom button text
 * @param props.buttonIcon - Optional icon to display on the button
 */
interface CTABannerProps {
  variant?: 'primary' | 'secondary';
  backgroundColor?: 'white' | 'gray';
  title?: string;
  description?: string;
  buttonText?: string;
  buttonIcon?: React.ReactNode;
}

const CTABanner: React.FC<CTABannerProps> = ({
  variant = 'primary',
  backgroundColor = 'white',
  title,
  description,
  buttonText,
  buttonIcon
}) => {
  // Default content based on variant
  const defaultContent = {
    primary: {
      title: 'Ready to Transform Your Space in DFW?',
      description: 'Get a customized cleaning solution that meets your business needs throughout the DFW metroplex. Contact us today for a free, no-obligation quote.',
      buttonText: 'Get Your Free Quote',
      buttonIcon: null
    },
    secondary: {
      title: 'Schedule a Free Consultation Today',
      description: 'Our cleaning experts will help you create a customized cleaning plan for your business. No obligation, just professional advice to meet your needs.',
      buttonText: 'Schedule Consultation',
      buttonIcon: <CalendarDays className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
    }
  };

  // Use provided content or fallback to defaults
  const content = {
    title: title || defaultContent[variant].title,
    description: description || defaultContent[variant].description,
    buttonText: buttonText || defaultContent[variant].buttonText,
    buttonIcon: buttonIcon !== undefined ? buttonIcon : defaultContent[variant].buttonIcon
  };

  return (
    <section className={`w-full py-16 ${backgroundColor === 'gray' ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl bg-primary overflow-hidden shadow-xl">
          <div className="relative px-6 py-12 md:py-16 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                {content.title}
              </h2>
              <p className="text-lg text-white/90 max-w-2xl">
                {content.description}
              </p>
            </div>

            <div className="flex-shrink-0">
              <PrimaryButton 
                href="#contact" 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 group"
              >
                {content.buttonIcon}
                {content.buttonText}
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
