import React from 'react';
import SafeImage from '../../ui/safe-image';
import { siteConfig } from '@/app/@lib/constants/siteConfig';

/**
 * About Section Component
 *
 * Displays basic information about the company with a simple image and text layout.
 */
const About = () => {
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - siteConfig.business.startYear;

  return (
    <section id="about" className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Content Layout with Image and Text side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          {/* Left Column - Image */}
          <div className="lg:col-span-5 flex items-stretch">
            <div className="relative w-full rounded-xl overflow-hidden shadow-md h-full">
              <SafeImage
                src="/images/brightway-commercial-cleaning-wiping.jpg"
                alt="Brightway Professional Cleaning Team"
                fallbackText="Professional Cleaning Team"
                loading="lazy"
                className="object-cover object-center h-full"
              />
            </div>
          </div>

          {/* Right Column - Header and Company Info */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Header content */}
            <div className="mb-6 text-center lg:text-left">
              <span className="inline-block text-sm font-bold tracking-wider text-primary uppercase bg-primary/10 px-4 py-1 rounded-full mb-3">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Trusted Cleaning Partner</h2>
              <p className="text-gray-600 mb-6">
                Based in Bedford, TX, and serving the entire DFW metroplex, we provide reliable,
                high-quality cleaning services.
              </p>
            </div>

            {/* Company information */}
            <p className="text-lg text-gray-600 mb-4 text-center lg:text-left">
              For over {yearsInBusiness} years, Brightway Cleaning has been providing exceptional
              cleaning services to businesses throughout the DFW metroplex.
            </p>
            <p className="text-lg text-gray-600 mb-8 text-center lg:text-left">
              We&apos;ve built our reputation on reliability, attention to detail, and a genuine
              commitment to customer satisfaction with a {siteConfig.business.satisfaction} client
              satisfaction rate.
            </p>
            <div className="mt-6 text-center lg:text-left">
              <a href="/about-us" className="text-primary font-medium hover:underline">
                Learn more about us →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
