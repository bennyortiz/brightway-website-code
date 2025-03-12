'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQItem as FAQItemType } from './faqData'

/**
 * FAQItem Component
 * 
 * An accordion-style component that displays a question and its answer.
 * The answer is toggled when the question is clicked.
 * 
 * @param {FAQItemType} props - The FAQ item data 
 */
const FAQItem = ({ question, answer }: FAQItemType) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={toggleOpen}
        className="flex w-full justify-between items-center py-5 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-gray-800">{question}</h3>
        <ChevronDown 
          className={`h-5 w-5 text-primary transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-gray-600 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  )
}

export default FAQItem 