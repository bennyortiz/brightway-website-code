import React from 'react'
import SectionHeader from '../../ui/section-header'
import BenefitItem from '../About/BenefitItem'
import { benefitsData } from '../About/benefitsData'
import { siteConfig } from '@/app/constants/siteConfig'

/**
 * Why Choose Us Section Component
 * 
 * Highlights the company's competitive advantages and unique selling points.
 * Displays benefits with icons in a grid layout.
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
        
        <div className="max-w-5xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefitsData.map((benefit, index) => (
              <BenefitItem 
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
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

export default WhyChooseUs 