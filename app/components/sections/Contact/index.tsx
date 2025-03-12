import React from 'react'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

/**
 * Contact Section Component
 * 
 * This component assembles the complete contact section by combining:
 * - Section header with title and description
 * - Contact information (phone, email, address)
 * - Contact form for user submissions
 * 
 * The component is structured with a responsive layout that stacks on mobile
 * and displays side-by-side on larger screens.
 */
const Contact = () => {
  return (
    <section id="contact" className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to experience the Brightway difference? Get in touch for a free quote or to learn more about our services.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <ContactInfo />
          </div>
          
          <div className="lg:w-2/3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 