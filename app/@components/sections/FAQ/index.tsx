'use client';

import React, { useState } from 'react';
import { faqData } from '@/app/@lib/data/faq';
import { Plus, Minus, Search } from 'lucide-react';

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
 * Displays frequently asked questions in an accessible, intuitive accordion layout
 * with featured questions and search functionality.
 */
const FAQ = () => {
  // Use faqData if available, otherwise use fallback
  const faqCategories = faqData || fallbackFaqData;
  
  // State for the expanded question in each category
  const [expandedStates, setExpandedStates] = useState<Record<string, number | null>>({});
  const [searchQuery, setSearchQuery] = useState('');
  
  // Helper to handle toggling questions
  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    setExpandedStates(prev => {
      const categoryKey = `category-${categoryIndex}`;
      const isCurrentlyExpanded = prev[categoryKey] === questionIndex;
      
      return {
        ...prev,
        [categoryKey]: isCurrentlyExpanded ? null : questionIndex
      };
    });
  };
  
  // Featured questions for quick access (first question from each category)
  const featuredQuestions = faqCategories.map(category => category.items[0]);
  
  // Filter questions based on search
  const filteredCategories = searchQuery.trim() === '' 
    ? faqCategories 
    : faqCategories.map(category => ({
        ...category,
        items: category.items.filter(item => 
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.items.length > 0);

  return (
    <section id="faq" className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container-fluid px-4 md:px-8 mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-bold tracking-wider text-primary uppercase bg-primary/10 px-4 py-1 rounded-full mb-3">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get quick answers to our most commonly asked questions. Need more help? Contact us directly.
          </p>
        </div>
        
        {/* Search bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3 pl-12 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        
        {/* Featured Questions - Card style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {featuredQuestions.map((item, index) => (
            <div key={`featured-${index}`} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100">
              <h3 className="font-bold text-lg mb-3 text-gray-800">{item.question}</h3>
              <p className="text-gray-600 line-clamp-3">{item.answer}</p>
              <a 
                href={`#category-${index}`}
                className="mt-4 inline-block text-primary font-medium hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  setExpandedStates({ [`category-${index}`]: 0 });
                  document.getElementById(`category-${index}`)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Read more
              </a>
            </div>
          ))}
        </div>

        {/* Main FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-8">
          {filteredCategories.map((category, catIndex) => (
            <div 
              key={`category-${catIndex}`} 
              id={`category-${catIndex}`}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <h3 className="bg-gray-50 px-6 py-4 font-bold text-lg text-gray-800 border-b border-gray-100">
                {category.title}
              </h3>
              
              <div className="divide-y divide-gray-100">
                {category.items.map((item, qIndex) => {
                  const isExpanded = expandedStates[`category-${catIndex}`] === qIndex;
                  return (
                    <div key={`q-${catIndex}-${qIndex}`} className="border-b border-gray-100 last:border-b-0">
                      <button
                        className="flex items-center justify-between w-full p-6 text-left hover:bg-gray-50 transition-colors"
                        onClick={() => toggleQuestion(catIndex, qIndex)}
                        aria-expanded={isExpanded}
                      >
                        <span className="font-medium text-gray-800 pr-8">{item.question}</span>
                        {isExpanded ? (
                          <Minus className="h-5 w-5 text-primary flex-shrink-0" />
                        ) : (
                          <Plus className="h-5 w-5 text-primary flex-shrink-0" />
                        )}
                      </button>
                      
                      {isExpanded && (
                        <div className="px-6 pb-6 prose prose-sm max-w-none text-gray-600 animate-fadeIn">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-primary/5 rounded-2xl p-8 mt-16 text-center max-w-3xl mx-auto">
          <h3 className="font-bold text-xl mb-3">Still have questions?</h3>
          <p className="text-gray-600 mb-6">Our team is ready to answer any specific questions you have about our services</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center h-12 px-8 font-medium bg-primary text-white rounded-md shadow hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center h-12 px-8 font-medium bg-white text-primary border border-primary rounded-md hover:bg-gray-50 transition-colors"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
