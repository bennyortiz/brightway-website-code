'use client';

import React, { useState } from 'react';
import { faqData } from '@/app/@lib/data/faq';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/app/@lib/utils';
import FAQCategoryIcon from './FAQCategoryIcon';
import FAQStats from './FAQStats';

// Fallback data in case the import fails
const fallbackFaqData = [
  {
    title: 'Services & Scheduling',
    items: [
      {
        question: 'What cleaning services do you offer for businesses?',
        answer:
          'We offer a comprehensive range of commercial cleaning services including daily office cleaning, deep cleaning, floor maintenance, window cleaning, sanitization services, and specialized cleaning for different industries.',
      },
    ],
  },
];

/**
 * FAQ Section Component
 *
 * Displays frequently asked questions in a modern, full-width layout with category tabs
 * and expandable accordion items for easy navigation.
 */
const FAQ = () => {
  // Use faqData if available, otherwise use fallback
  const faqCategories = faqData || fallbackFaqData;

  // Track the active category and expanded questions
  const [activeCategory, setActiveCategory] = useState(0);
  const [expandedQuestions, setExpandedQuestions] = useState<{[key: string]: boolean}>({});

  // Toggle question expansion
  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setExpandedQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Check if a question is expanded
  const isQuestionExpanded = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    return expandedQuestions[key] || false;
  };

  return (
    <section id="faq" className="w-full py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="inline-block text-sm font-bold tracking-wider text-primary uppercase bg-primary/10 px-4 py-1 rounded-full mb-3">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find quick answers to common questions about our cleaning services. 
            If you need more information, don't hesitate to contact us.
          </p>
        </div>

        {/* Category Tabs - Desktop */}
        <div className="hidden md:flex mb-8 border-b border-gray-200 overflow-x-auto pb-1 flex-nowrap">
          {faqCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={cn(
                "flex items-center flex-shrink-0 px-5 py-3 text-base font-medium border-b-2 whitespace-nowrap mr-2 transition-all",
                activeCategory === index
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              )}
            >
              <FAQCategoryIcon category={category.title} className={cn(
                "mr-2 h-4 w-4",
                activeCategory === index ? "text-primary" : "text-gray-400"
              )} />
              {category.title}
            </button>
          ))}
        </div>

        {/* Mobile Category Selector */}
        <div className="md:hidden mb-8">
          <div className="relative">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(Number(e.target.value))}
              className="block w-full rounded-lg border border-gray-300 bg-white py-3 px-4 pr-10 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none"
              aria-label="Select FAQ category"
            >
              {faqCategories.map((category, index) => (
                <option key={index} value={index}>
                  {category.title}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ChevronDown className="h-5 w-5" />
            </div>
          </div>
        </div>

        {/* FAQ Accordion Items */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {faqCategories[activeCategory].items.map((item, qIndex) => (
            <div key={qIndex} className="border-b border-gray-100 last:border-b-0">
              <button
                onClick={() => toggleQuestion(activeCategory, qIndex)}
                className="flex w-full justify-between items-center py-5 px-6 text-left focus:outline-none focus:bg-gray-50 hover:bg-gray-50 transition-colors"
                aria-expanded={isQuestionExpanded(activeCategory, qIndex)}
              >
                <h3 className="text-lg font-medium text-gray-800">{item.question}</h3>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-primary transition-transform duration-300 flex-shrink-0 ml-4",
                    isQuestionExpanded(activeCategory, qIndex) ? "rotate-180" : ""
                  )}
                />
              </button>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  isQuestionExpanded(activeCategory, qIndex)
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                )}
              >
                <div className="px-6 pb-6 pt-1 text-gray-600 leading-relaxed">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Next/Previous Category Controls - Only for mobile */}
        {faqCategories.length > 1 && (
          <div className="mt-6 flex justify-between md:hidden">
            <button 
              onClick={() => setActiveCategory((activeCategory - 1 + faqCategories.length) % faqCategories.length)}
              className="text-primary font-medium text-sm flex items-center"
              aria-label="Previous category"
            >
              <ChevronDown className="h-4 w-4 rotate-90 mr-1" />
              Previous
            </button>
            <button 
              onClick={() => setActiveCategory((activeCategory + 1) % faqCategories.length)}
              className="text-primary font-medium text-sm flex items-center"
              aria-label="Next category"
            >
              Next
              <ChevronDown className="h-4 w-4 -rotate-90 ml-1" />
            </button>
          </div>
        )}

        {/* Contact CTA */}
        <div className="text-center mt-16 p-8 bg-gray-100 rounded-xl">
          <p className="text-gray-600 mb-4">Still have questions? We're here to help!</p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center h-12 px-8 font-medium bg-primary text-white rounded-md shadow hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
