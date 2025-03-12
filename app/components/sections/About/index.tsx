import React from 'react';
import SafeImage from '../../ui/safe-image';
import SectionHeader from '../../ui/section-header';
import { siteConfig } from '@/app/constants/siteConfig';

/**
 * About Section Component
 *
 * Displays comprehensive information about the company, including:
 * - Company history and story
 * - Mission and values
 * - Achievements and milestones
 * - Team introduction
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

        {/* Company Story Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="md:w-1/2 mx-auto">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-xl">
              <div className="w-full h-full">
                <SafeImage
                  src="/images/brightway-commercial-cleaning-wiping.jpg"
                  alt="Brightway Professional Cleaning Team"
                  fallbackText="Professional Cleaning Team"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h3 className="text-3xl font-bold">Our Story</h3>
            <p className="text-lg text-gray-600">
              For over {yearsInBusiness} years, Brightway Cleaning has been providing exceptional
              cleaning services to businesses throughout the DFW metroplex. What started as a small
              family-owned operation has grown into one of the region's most trusted commercial
              cleaning companies.
            </p>
            <p className="text-lg text-gray-600">
              We've built our reputation on reliability, attention to detail, and a genuine
              commitment to customer satisfaction. Our team of {siteConfig.business.employeeCount}{' '}
              dedicated professionals takes pride in transforming spaces and exceeding expectations
              with every clean.
            </p>
            <p className="text-lg text-gray-600">
              From daily office maintenance to specialized industrial cleaning, we approach every
              job with the same level of care and professionalism that has earned us a{' '}
              {siteConfig.business.satisfaction} client satisfaction rate.
            </p>
          </div>
        </div>

        {/* Mission and Values Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Our Mission & Values</h3>
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-3">Mission Statement</h4>
              <p className="text-lg text-gray-600">
                Our mission is to create cleaner, healthier, and more productive work environments
                for businesses throughout the DFW metroplex through professional cleaning services
                that exceed expectations and enhance workplace wellbeing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-3 text-primary">Excellence</h4>
                <p className="text-gray-600">
                  We strive for excellence in every cleaning task, no matter how small, because we
                  believe that details matter and quality is non-negotiable.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-3 text-primary">Integrity</h4>
                <p className="text-gray-600">
                  We operate with complete transparency, honesty, and accountability in all our
                  business relationships and cleaning practices.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-3 text-primary">Reliability</h4>
                <p className="text-gray-600">
                  Our clients can count on us to show up on time, every time, and deliver
                  consistent, dependable cleaning services they can trust.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Community Involvement */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Community Involvement</h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            As a locally owned business, we're committed to giving back to the DFW community. We
            regularly participate in local charity events, sponsor youth sports teams, and offer
            special cleaning services to non-profit organizations.
          </p>
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
