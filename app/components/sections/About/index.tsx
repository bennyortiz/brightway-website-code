import React from 'react'
import SafeImage from '../../ui/safe-image'
import SectionHeader from '../../ui/section-header'
import BenefitItem from './BenefitItem'
import { benefitsData } from './benefitsData'

/**
 * About Section Component
 * 
 * Displays information about the company, including:
 * - Section header with title and description
 * - Company image
 * - List of company benefits
 */
const About = () => {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader 
          subtitle="About Us"
          title="Your Trusted Cleaning Partner"
          description="With years of experience in the commercial cleaning industry, we provide reliable, high-quality cleaning services that keep your business looking its best."
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
          
          <div className="md:w-1/2 space-y-8">
            <h3 className="text-3xl font-bold">Why Choose Brightway?</h3>
            <p className="text-lg text-gray-600">
              We take pride in our exceptional cleaning services and our commitment to customer satisfaction. Here's what sets us apart:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefitsData.map((benefit, index) => (
                <BenefitItem 
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 