import React from 'react'
import SectionHeader from '../../ui/section-header'
import BenefitItem from './BenefitItem'
import { benefitsData } from './benefitsData'
import { siteConfig } from '@/app/constants/siteConfig'

/**
 * Why Choose Us Section Component
 * 
 * Highlights the company's competitive advantages and unique selling points.
 * Displays benefits with icons in a visually appealing grid layout.
 */
const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader 
          subtitle="Why Choose Us"
          title="What Sets Us Apart"
          description="We take pride in our exceptional cleaning services and our commitment to customer satisfaction throughout the DFW metroplex."
        />
        
        <div className="mt-16">
          {/* Statistics Bar */}
          <div className="bg-primary text-white rounded-xl p-8 mb-16 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">{siteConfig.business.clientsServed}+</p>
                <p className="text-sm uppercase tracking-wider">Clients Served</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">{yearsInBusiness()}</p>
                <p className="text-sm uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">{siteConfig.business.servicesCount}+</p>
                <p className="text-sm uppercase tracking-wider">Service Options</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">{siteConfig.business.satisfaction}</p>
                <p className="text-sm uppercase tracking-wider">Satisfaction Rate</p>
              </div>
            </div>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefitsData.slice(0, 8).map((benefit, index) => (
              <BenefitItem 
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
          
          {/* Client Promise */}
          <div className="mt-16 text-center bg-white rounded-xl p-8 shadow-md max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Our Client Promise</h3>
            <p className="text-lg text-gray-600 mb-6">
              When you choose Brightway Cleaning, you're not just getting a cleaning service - you're getting a committed partner in maintaining the cleanliness, health, and professional appearance of your business environment.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Experience the Brightway difference for yourself. Our {siteConfig.business.satisfaction} satisfaction rate speaks volumes about our dedication to excellence.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center h-12 px-8 font-medium bg-primary text-white rounded-md shadow hover:bg-primary/90 transition-colors"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// Helper function to calculate years in business
const yearsInBusiness = () => {
  const currentYear = new Date().getFullYear();
  return currentYear - siteConfig.business.startYear;
};

export default WhyChooseUs 