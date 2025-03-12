import React from 'react'
import HeroRating from './HeroRating'
import { PrimaryButton, OutlineButton } from '../../ui/buttons'

/**
 * HeroContent Component
 * 
 * Displays the main textual content of the Hero section, including:
 * - Badge
 * - Heading
 * - Description
 * - Rating
 * - Call-to-action buttons
 */
const HeroContent = () => {
  return (
    <div className="flex flex-col space-y-6 md:w-1/2 text-center md:text-left">
      <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary self-center md:self-start">
        <span>Professional Commercial Cleaning</span>
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
        Pristine Spaces for <span className="text-primary">Productive</span> Businesses
      </h1>
      
      <p className="text-lg md:text-xl text-gray-600 max-w-[600px]">
        Brightway Cleaning delivers exceptional commercial cleaning services tailored to your business needs, ensuring a healthy, professional environment.
      </p>
      
      <HeroRating />
      
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
        <PrimaryButton href="#contact">
          Get a Free Quote
        </PrimaryButton>
        <OutlineButton href="#services" withArrow>
          Explore Services
        </OutlineButton>
      </div>
    </div>
  )
}

export default HeroContent 