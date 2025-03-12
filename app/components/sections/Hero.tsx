import Link from 'next/link'
import { Star } from 'lucide-react'
import SafeImage from '../ui/safe-image'
import { PrimaryButton, OutlineButton } from '../ui/buttons'

const Hero = () => {
  return (
    <section className="w-full pt-28 pb-12 md:py-32 lg:py-40 bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text content */}
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
            
            {/* Rating element */}
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
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <PrimaryButton href="#contact">
                Get a Free Quote
              </PrimaryButton>
              <OutlineButton href="#services" withArrow>
                Explore Services
              </OutlineButton>
            </div>
          </div>
          
          {/* Image section */}
          <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-[500px] aspect-video md:aspect-square rounded-lg overflow-hidden shadow-xl">
              <div className="w-full h-full">
                <SafeImage
                  src="/images/brightway-commercial-hallway.jpg"
                  alt="Brightway Commercial Cleaning Services"
                  fallbackText="Commercial Cleaning Excellence"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 