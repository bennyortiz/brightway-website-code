import React from 'react';
import { PrimaryButton } from '../../ui/buttons';
import { useCtaBackground, BackgroundColor } from './CTAContext';

/**
 * CTABanner Component
 *
 * A call-to-action banner that encourages users to take action.
 * Features a compelling headline, description, and CTA button.
 * Uses the CTAContext to automatically determine the appropriate background
 * color based on the previous section, but also accepts an override prop.
 */
interface CTABannerProps {
  backgroundColor?: BackgroundColor; // Optional override for the background color
  nextSectionBackground?: BackgroundColor; // Sets the expected background of the next section
}

const CTABanner: React.FC<CTABannerProps> = ({ 
  backgroundColor,
  nextSectionBackground = 'white'
}) => {
  // Get the current background from context
  const { currentBackground, setNextBackground } = useCtaBackground();
  
  // Use the provided backgroundColor or get it from context
  const bgColor = backgroundColor || currentBackground;
  
  // Set the next section's background
  React.useEffect(() => {
    setNextBackground(nextSectionBackground);
  }, [nextSectionBackground, setNextBackground]);
  
  return (
    <section className={`w-full py-16 bg-${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl bg-primary overflow-hidden shadow-xl">
          <div className="relative px-6 py-12 md:py-16 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                Ready to Transform Your Space in DFW?
              </h2>
              <p className="text-lg text-white/90 max-w-2xl">
                Get a customized cleaning solution that meets your business needs throughout the DFW
                metroplex. Contact us today for a free, no-obligation quote.
              </p>
            </div>

            <div className="flex-shrink-0">
              <PrimaryButton href="#contact" size="lg" className="bg-white text-primary hover:bg-gray-100">
                Get Your Free Quote
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
