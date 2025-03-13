import React from 'react';
import SafeImage from '../../ui/safe-image';
import { siteConfig } from '@/app/constants/siteConfig';

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
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-md rounded-xl overflow-hidden shadow-md">
              <div className="aspect-[5/4]">
                <SafeImage
                  src="/images/brightway-commercial-cleaning-wiping.jpg"
                  alt="Brightway Professional Cleaning Team"
                  fallbackText="Professional Cleaning Team"
                  loading="lazy"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Header and Company Info */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Header content */}
            <div className="mb-6">
              <div className="text-primary font-medium mb-2">About Us</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Trusted Cleaning Partner</h2>
              <p className="text-gray-600 mb-6">
                Based in Bedford, TX, and serving the entire DFW metroplex, we provide reliable, high-quality cleaning services.
              </p>
            </div>
            
            {/* Company information */}
            <p className="text-lg text-gray-600 mb-4">
              For over {yearsInBusiness} years, Brightway Cleaning has been providing exceptional
              cleaning services to businesses throughout the DFW metroplex.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              We've built our reputation on reliability, attention to detail, and a genuine
              commitment to customer satisfaction with a {siteConfig.business.satisfaction} client satisfaction rate.
            </p>
            <div className="mt-6">
              <a
                href="/about-us"
                className="text-primary font-medium hover:underline"
              >
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
