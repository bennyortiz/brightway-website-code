import React, { useRef, useEffect } from 'react';
import SafeImage from '../../ui/safe-image';
import { siteConfig } from '@/app/@lib/constants/siteConfig';
import { Section } from '../../ui/layout';

/**
 * About Section Component
 *
 * Displays information about the company in a two-column layout.
 * Left column contains a responsive image that matches the content height.
 * Right column contains the company information.
 * Uses modern CSS Grid for a responsive layout with proper height handling.
 */
const About = () => {
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - siteConfig.business.startYear;
  const contentRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Effect to ensure image container height matches content height on larger screens
  useEffect(() => {
    const handleResize = () => {
      // Only apply on desktop screens
      if (window.innerWidth >= 768 && contentRef.current && imageContainerRef.current) {
        const contentHeight = contentRef.current.offsetHeight;
        imageContainerRef.current.style.height = `${contentHeight}px`;
      } else if (imageContainerRef.current) {
        // Reset height on mobile
        imageContainerRef.current.style.height = 'auto';
      }
    };

    // Initial setup
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="about">
      <Section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Modern two-column grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left Column - Image */}
            <div ref={imageContainerRef} className="md:col-span-5 h-full">
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">
                <SafeImage
                  src="/images/brightway-commercial-cleaning-wiping.jpg"
                  alt="Brightway Professional Cleaning Team"
                  fallbackText="Professional Cleaning Team"
                  loading="lazy"
                  placement="mid-page"
                  quality={90}
                  className="object-cover object-center"
                  containerHeight={true}
                />
              </div>
            </div>

            {/* Right Column - About Content */}
            <div ref={contentRef} className="md:col-span-7">
              <div className="space-y-6">
                {/* Section header */}
                <div className="mb-6">
                  <span className="inline-block text-sm font-bold tracking-wider text-primary uppercase bg-primary/10 px-4 py-1 rounded-full mb-3">About Us</span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Trusted Cleaning Partner</h2>
                  <p className="text-gray-600">
                    Based in Bedford, TX, and serving the entire DFW metroplex, we provide reliable, high-quality cleaning services.
                  </p>
                </div>
                
                {/* Company information */}
                <p className="text-lg text-gray-600">
                  For over {yearsInBusiness} years, Brightway Cleaning has been providing exceptional
                  cleaning services to businesses throughout the DFW metroplex.
                </p>
                
                <p className="text-lg text-gray-600">
                  We've built our reputation on reliability, attention to detail, and a genuine
                  commitment to customer satisfaction with a {siteConfig.business.satisfaction} client satisfaction rate.
                </p>
                
                <p className="text-lg text-gray-600">
                  Our team consists of highly trained professionals who understand the unique needs of commercial spaces.
                  We use industry-leading equipment and eco-friendly cleaning products to deliver consistent, excellent results.
                </p>
                
                {/* CTA Link */}
                <div className="pt-4">
                  <a
                    href="/about-us"
                    className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
                  >
                    Learn more about us
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
