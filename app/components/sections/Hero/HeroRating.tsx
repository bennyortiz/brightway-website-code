import React from 'react'
import { Star } from 'lucide-react'

/**
 * HeroRating Component
 * 
 * Displays a rating element with stars, rating value, and number of reviews.
 * Used in the Hero section to showcase the company's reputation.
 */
const HeroRating = () => {
  return (
    <div className="flex items-center py-2 justify-center md:justify-start">
      <div className="inline-flex bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm items-center space-x-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <span className="text-gray-700 font-medium">5.0</span>
        <span className="text-gray-500 text-sm">(500+ reviews)</span>
      </div>
    </div>
  )
}

export default HeroRating 