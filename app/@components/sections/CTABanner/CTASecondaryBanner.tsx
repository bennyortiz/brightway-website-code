import React from 'react';
import { PrimaryButton } from '../../ui/buttons';
import { CalendarDays } from 'lucide-react';

/**
 * CTASecondaryBanner Component
 *
 * A second call-to-action banner with a different focus (consultation scheduling)
 * to be displayed further down the page after testimonials and FAQ.
 */
const CTASecondaryBanner = () => {
  return (
    <section className="w-full py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl bg-primary overflow-hidden shadow-xl">
          <div className="relative px-6 py-12 md:py-16 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                Schedule a Free Consultation Today
              </h2>
              <p className="text-lg text-white/90 max-w-2xl">
                Our cleaning experts will help you create a customized cleaning plan for your business. 
                No obligation, just professional advice to meet your needs.
              </p>
            </div>

            <div className="flex-shrink-0">
              <PrimaryButton href="#contact" size="lg" className="bg-white text-primary hover:bg-gray-100 group">
                <CalendarDays className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Schedule Consultation
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASecondaryBanner; 