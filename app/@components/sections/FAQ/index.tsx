'use client';

import React, { useState } from 'react';
import { faqData } from '@/app/@lib/data/faq';
import { Grid, Column, Section } from '../../ui/layout';
import { ChevronRight } from 'lucide-react';

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
 * Displays frequently asked questions in a two-column layout.
 * Left column shows categories and questions, right column shows the selected answer.
 * Uses Grid and Column components for responsive layout.
 */
const FAQ = () => {
  // Use faqData if available, otherwise use fallback
  const faqCategories = faqData || fallbackFaqData;
  
  // Track the active category and question
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(0);
  
  // Get currently selected FAQ item
  const selectedCategory = faqCategories[activeCategory];
  const selectedQuestion = selectedCategory?.items[activeQuestion] || { question: '', answer: '' };

  return (
    <div id="faq">
      <Section className="bg-gray-50">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold tracking-wider text-primary uppercase bg-primary/10 px-4 py-1 rounded-full mb-3">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our commercial cleaning services. If you don't
            see what you're looking for, please contact us.
          </p>
        </div>

        <Grid columns={{ default: 1, lg: 12 }} gap={8} className="max-w-6xl mx-auto">
          {/* Left column - Categories and Questions */}
          <Column span={{ default: 'full', lg: 5 }} className="space-y-8 h-full">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex} className="bg-white rounded-xl shadow-md overflow-hidden">
                <h3 
                  className={`font-bold text-lg px-6 py-4 border-b cursor-pointer hover:bg-gray-50 transition-colors ${
                    activeCategory === catIndex ? 'text-primary border-primary' : 'text-gray-800 border-gray-100'
                  }`}
                  onClick={() => setActiveCategory(catIndex)}
                >
                  {category.title}
                </h3>
                {activeCategory === catIndex && (
                  <div className="divide-y divide-gray-100">
                    {category.items.map((item, qIndex) => (
                      <button
                        key={qIndex}
                        className={`flex items-center w-full text-left p-4 hover:bg-gray-50 transition-colors ${
                          activeQuestion === qIndex && activeCategory === catIndex
                            ? 'bg-primary/5 text-primary font-medium'
                            : 'text-gray-700'
                        }`}
                        onClick={() => setActiveQuestion(qIndex)}
                      >
                        <ChevronRight 
                          className={`mr-2 h-4 w-4 flex-shrink-0 ${
                            activeQuestion === qIndex && activeCategory === catIndex ? 'text-primary' : 'text-gray-400'
                          }`} 
                        />
                        <span className="line-clamp-2">{item.question}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </Column>
          
          {/* Right column - Answer display */}
          <Column span={{ default: 'full', lg: 7 }}>
            <div className="bg-white rounded-xl shadow-md p-8 sticky top-24">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                {selectedQuestion.question}
              </h3>
              <div className="prose prose-sm max-w-none text-gray-600">
                {selectedQuestion.answer}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-gray-500 text-sm">Was this helpful?</p>
                <div className="flex space-x-4 mt-2">
                  <a 
                    href="#contact" 
                    className="text-primary hover:text-primary-dark font-medium transition-colors text-sm"
                  >
                    Contact support
                  </a>
                  <button className="text-gray-500 hover:text-primary transition-colors text-sm">
                    Yes, thanks!
                  </button>
                </div>
              </div>
            </div>
          </Column>
        </Grid>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-12 px-8 font-medium bg-primary text-white rounded-md shadow hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </Section>
    </div>
  );
};

export default FAQ;
