import React from 'react';
import SafeImage from '../../ui/safe-image';
import { siteConfig } from '@/app/@lib/constants/siteConfig';
import { Grid, Column, Section, Container } from '../../ui/layout';

/**
 * About Section Component
 *
 * Displays information about the company in a two-column layout.
 * Left column contains a responsive image that matches the content height.
 * Right column contains the company information.
 * Uses Grid and Column components for responsive layout.
 */
const About = () => {
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - siteConfig.business.startYear;

  return (
    <div id="about">
      <Section className="bg-white">
        {/* Content Layout with Image and Text side by side */}
        <Grid columns={{ default: 1, md: 12 }} gap={8} className="mb-8">
          {/* Left Column - Image, takes 5/12 columns on desktop */}
          <Column span={{ default: 'full', md: 5 }} className="flex items-stretch">
            <div className="relative w-full rounded-xl overflow-hidden shadow-md h-full">
              <SafeImage
                src="/images/brightway-commercial-cleaning-wiping.jpg"
                alt="Brightway Professional Cleaning Team"
                fallbackText="Professional Cleaning Team"
                loading="lazy"
                className="object-cover object-center h-full"
                containerHeight={true}
              />
            </div>
          </Column>

          {/* Right Column - Header and Company Info, takes 7/12 columns on desktop */}
          <Column span={{ default: 'full', md: 7 }} className="flex flex-col justify-center">
            {/* Header content */}
            <div className="mb-6 text-center md:text-left">
              <span className="inline-block text-sm font-bold tracking-wider text-primary uppercase bg-primary/10 px-4 py-1 rounded-full mb-3">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Trusted Cleaning Partner</h2>
              <p className="text-gray-600 mb-6">
                Based in Bedford, TX, and serving the entire DFW metroplex, we provide reliable, high-quality cleaning services.
              </p>
            </div>
            
            {/* Company information */}
            <p className="text-lg text-gray-600 mb-4 text-center md:text-left">
              For over {yearsInBusiness} years, Brightway Cleaning has been providing exceptional
              cleaning services to businesses throughout the DFW metroplex.
            </p>
            <p className="text-lg text-gray-600 mb-4 text-center md:text-left">
              We've built our reputation on reliability, attention to detail, and a genuine
              commitment to customer satisfaction with a {siteConfig.business.satisfaction} client satisfaction rate.
            </p>
            <div className="mt-6 text-center md:text-left">
              <a
                href="/about-us"
                className="text-primary font-medium hover:underline"
              >
                Learn more about us →
              </a>
            </div>
          </Column>
        </Grid>
      </Section>
    </div>
  );
};

export default About;
