import React from 'react'
import SafeImage from '../../ui/safe-image'
import SectionHeader from '../../ui/section-header'
import { siteConfig } from '@/app/constants/siteConfig'

/**
 * About Section Component
 * 
 * Displays information about the company, including:
 * - Section header with title and description
 * - Company history and mission
 * - Relevant images
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
        
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="md:w-1/2">
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
          
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-3xl font-bold">Our Story</h3>
            <p className="text-lg text-gray-600">
              For over {yearsInBusiness} years, Brightway Cleaning has been providing exceptional cleaning services to businesses throughout the DFW metroplex. What started as a small family-owned operation has grown into one of the region's most trusted commercial cleaning companies.
            </p>
            <p className="text-lg text-gray-600">
              We've built our reputation on reliability, attention to detail, and a genuine commitment to customer satisfaction. Our team of {siteConfig.business.employeeCount} dedicated professionals takes pride in transforming spaces and exceeding expectations with every clean.
            </p>
            <p className="text-lg text-gray-600">
              From daily office maintenance to specialized industrial cleaning, we approach every job with the same level of care and professionalism that has earned us a {siteConfig.business.satisfaction} client satisfaction rate.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 