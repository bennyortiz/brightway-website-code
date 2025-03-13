import React from 'react';
import SafeImage from '../../ui/safe-image';
import SectionHeader from '../../ui/section-header';
import { siteConfig } from '@/app/constants/siteConfig';

/**
 * About Section Component
 *
 * Displays comprehensive information about the company with a sleek,
 * full-width layout optimized for desktop viewing.
 */
const About = () => {
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - siteConfig.business.startYear;

  return (
    <section id="about" className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="About Us"
          title="Your Trusted Cleaning Partner"
          description={`Based in Bedford, TX, and serving the entire DFW metroplex, we provide reliable, high-quality cleaning services that keep your business looking its best.`}
        />

        {/* Main Content - Full Width Modern Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left Column - Image */}
          <div className="lg:col-span-5 flex items-start justify-center lg:sticky lg:top-24 self-start">
            <div className="relative w-full max-w-md lg:max-w-full h-auto rounded-xl overflow-hidden shadow-xl">
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

          {/* Right Column - Company Story */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">Our Story</h3>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                For over {yearsInBusiness} years, Brightway Cleaning has been providing exceptional
                cleaning services to businesses throughout the DFW metroplex. What started as a small
                family-owned operation has grown into one of the region's most trusted commercial
                cleaning companies.
              </p>
              <p>
                We've built our reputation on reliability, attention to detail, and a genuine
                commitment to customer satisfaction. Our team of {siteConfig.business.employeeCount}{' '}
                dedicated professionals takes pride in transforming spaces and exceeding expectations
                with every clean.
              </p>
              <p>
                From daily office maintenance to specialized industrial cleaning, we approach every
                job with the same level of care and professionalism that has earned us a{' '}
                {siteConfig.business.satisfaction} client satisfaction rate.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section - Modern Card Layout */}
        <div className="bg-gray-50 rounded-xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <h4 className="text-xl font-semibold mb-4 text-primary">Excellence</h4>
              <p className="text-gray-600">
                We strive for excellence in every cleaning task, no matter how small, because we
                believe that details matter and quality is non-negotiable.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <h4 className="text-xl font-semibold mb-4 text-primary">Integrity</h4>
              <p className="text-gray-600">
                We operate with complete transparency, honesty, and accountability in all our
                business relationships and cleaning practices.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <h4 className="text-xl font-semibold mb-4 text-primary">Reliability</h4>
              <p className="text-gray-600">
                Our clients can count on us to show up on time, every time, and deliver
                consistent, dependable cleaning services they can trust.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement - Full Width Banner */}
        <div className="relative w-full bg-primary rounded-xl overflow-hidden mb-16">
          <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-white to-transparent"></div>
          <div className="relative z-10 p-10 md:p-16 text-white max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-xl">
              Our mission is to create cleaner, healthier, and more productive work environments
              for businesses throughout the DFW metroplex through professional cleaning services
              that exceed expectations and enhance workplace wellbeing.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-12 px-8 font-medium bg-primary text-white rounded-md shadow hover:bg-primary/90 transition-colors"
          >
            Connect With Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
