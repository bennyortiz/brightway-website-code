'use client'

import { useRef, useEffect, useState } from 'react'
import { Building2, Briefcase, Building, Droplets, Trash2, Clock, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const serviceItems = [
  {
    icon: <Building2 className="h-14 w-14 text-primary" />,
    title: 'Office Cleaning',
    description: 'Comprehensive cleaning solutions for offices of all sizes, ensuring a clean and productive workspace.',
    features: ['Daily sanitization', 'Carpet cleaning', 'Glass & window cleaning', 'Restroom maintenance']
  },
  {
    icon: <Briefcase className="h-14 w-14 text-primary" />,
    title: 'Commercial Spaces',
    description: 'Specialized cleaning services for retail stores, restaurants, and other commercial establishments.',
    features: ['Storefront cleaning', 'Floor maintenance', 'Display dusting', 'High-traffic area focus']
  },
  {
    icon: <Building className="h-14 w-14 text-primary" />,
    title: 'Industrial Cleaning',
    description: 'Heavy-duty cleaning solutions for warehouses, factories, and industrial facilities.',
    features: ['Equipment cleaning', 'Hazardous waste handling', 'Loading dock maintenance', 'Large space management']
  },
  {
    icon: <Droplets className="h-14 w-14 text-primary" />,
    title: 'Sanitization Services',
    description: 'Professional disinfection and sanitization to maintain a healthy environment.',
    features: ['Hospital-grade disinfectants', 'Virus & bacteria elimination', 'Surface protection', 'Air quality improvement']
  },
  {
    icon: <Trash2 className="h-14 w-14 text-primary" />,
    title: 'Waste Management',
    description: 'Efficient waste collection and disposal services for commercial properties.',
    features: ['Trash collection', 'Recycling programs', 'Hazardous waste disposal', 'Compliance with regulations']
  },
  {
    icon: <Clock className="h-14 w-14 text-primary" />,
    title: 'Scheduled Maintenance',
    description: 'Regular cleaning schedules tailored to your business needs and operating hours.',
    features: ['Customized schedules', 'After-hours service', 'Regular inspections', 'Seasonal deep cleaning']
  }
]

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect()
      }
    }
  }, [])

  return (
    <section id="services" ref={sectionRef} className="w-full py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ease-in-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary mb-4">
            <span>Our Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Cleaning Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of professional cleaning services designed to meet the unique needs of your business. Our experienced team and advanced equipment ensure exceptional results every time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={index} 
              className={`group flex flex-col p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 transform ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="p-4 bg-primary/5 rounded-lg self-start mb-4 group-hover:bg-primary/10 transition-colors">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <div className="mt-auto">
                <p className="font-medium text-gray-900 mb-2">Services include:</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`flex justify-center mt-12 transition-all duration-700 ease-in-out delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <Link
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-lg font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Request a Custom Quote
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services 