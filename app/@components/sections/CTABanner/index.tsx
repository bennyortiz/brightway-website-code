import React from 'react';
import { PrimaryButton } from '../../ui/buttons';

/**
 * CTABanner Component
 *
 * A call-to-action banner that encourages users to take action.
 * Features a compelling headline, description, and CTA button.
 */
const CTABanner = () => {
  return (
    <section className="w-full py-16">
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
