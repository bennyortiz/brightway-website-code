import React from 'react'
import HeroContent from './HeroContent'
import SafeImage from '../../ui/safe-image'

/**
 * Hero Section Component
 * 
 * The main hero section displayed at the top of the homepage.
 * Features a headline, description, rating, CTA buttons, and hero image.
 */
const Hero = () => {
  return (
    <section className="w-full pt-28 pb-12 md:py-32 lg:py-40 bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text content */}
          <HeroContent />
          
          {/* Image section */}
          <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <SafeImage
                src="/images/brightway-commercial-cleaning-team.jpg"
                alt="Brightway Commercial Cleaning Team"
                fallbackText="Commercial Cleaning Team"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 