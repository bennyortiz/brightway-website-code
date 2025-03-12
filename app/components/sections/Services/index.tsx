'use client'

import React, { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import ServiceCard from './ServiceCard'
import { serviceItems } from './serviceData'

/**
 * Services Section Component
 * 
 * Displays a grid of service offerings with animation effects.
 * Uses the IntersectionObserver API for scroll-based animations.
 */
const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="w-full py-16 md:py-24 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive cleaning services for businesses of all sizes, with customized solutions tailored to your specific needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={index}
              className={`transform transition-all duration-700 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-white shadow transition-colors hover:bg-primary/90"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services 