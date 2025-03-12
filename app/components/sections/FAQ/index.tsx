import React from 'react'
import FAQCategory from './FAQCategory'
import { faqData } from './faqData'

/**
 * FAQ Section Component
 * 
 * Displays frequently asked questions organized by categories.
 * The accordion-style layout allows users to expand/collapse answers.
 */
const FAQ = () => {
  return (
    <section id="faq" className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our commercial cleaning services. If you don't see what you're looking for, please contact us.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 md:px-0">
          {faqData.map((category, index) => (
            <FAQCategory 
              key={index}
              title={category.title}
              items={category.items}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center h-12 px-8 font-medium bg-primary text-white rounded-md shadow hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ 