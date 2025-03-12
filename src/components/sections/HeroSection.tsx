'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="w-full pt-28 pb-12 md:py-32 lg:py-40 bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text content */}
          <motion.div 
            className="flex flex-col space-y-6 md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center rounded-full border border-primary py-1 px-3 text-sm text-primary self-center md:self-start bg-primary-light">
              <span>Professional Commercial Cleaning</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Pristine Spaces for <span className="text-primary">Productive</span> Businesses
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-[600px]">
              Brightway Cleaning delivers exceptional commercial cleaning services tailored to your business needs, ensuring a healthy, professional environment.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Link 
                href="#contact" 
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-lg font-medium text-white shadow transition-colors hover:bg-primary-90"
              >
                Get a Free Quote
              </Link>
              <Link 
                href="#services" 
                className="inline-flex h-12 items-center justify-center rounded-md border border-primary bg-transparent px-6 text-lg font-medium text-primary shadow-sm transition-colors hover:bg-primary-light"
              >
                Explore Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 pt-8">
              <div className="flex flex-col items-center md:items-start">
                <p className="text-2xl md:text-3xl font-bold text-primary">12+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="w-px h-12 bg-gray-200 hidden sm:block"></div>
              <div className="flex flex-col items-center md:items-start">
                <p className="text-2xl md:text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-gray-600">Happy Clients</p>
              </div>
              <div className="w-px h-12 bg-gray-200 hidden sm:block"></div>
              <div className="flex flex-col items-center md:items-start">
                <p className="text-2xl md:text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-gray-600">Satisfaction</p>
              </div>
            </div>
          </motion.div>
          
          {/* Image section */}
          <motion.div 
            className="mt-12 md:mt-0 md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative w-full max-w-[500px] aspect-video md:aspect-square rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
                <div className="text-gray-500 text-center px-4">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="64" 
                    height="64" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="mx-auto mb-4 text-primary opacity-40"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  <p className="text-lg font-medium">Professional Cleaning</p>
                  <p className="text-sm">Quality commercial cleaning services</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 