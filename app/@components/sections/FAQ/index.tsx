'use client';

import React, { useState, useRef, useEffect } from 'react';
import { faqData } from '@/app/@lib/data/faq';
import { Section } from '../../ui/layout';
import { ChevronRight, ChevronDown, Search, ArrowRight, Info, HelpCircle, MessageCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

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
 * An enhanced FAQ section with:
 * - Category tabs for easy navigation
 * - Search functionality
 * - Responsive design for all devices
 * - Visual indicators for active items
 * - Smooth animations for better user experience
 */
const FAQ = () => {
  // Use faqData if available, otherwise use fallback
  const faqCategories = faqData || fallbackFaqData;
  
  // State management
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Array<{categoryIndex: number, questionIndex: number, question: string}>>([]);
  const [showSearch, setShowSearch] = useState(false);
  
  // Refs for scrolling
  const questionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Get currently selected FAQ item
  const selectedCategory = faqCategories[activeCategory];
  const selectedQuestion = selectedCategory?.items[activeQuestion] || { question: '', answer: '' };

  // Handle search
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const results: Array<{categoryIndex: number, questionIndex: number, question: string}> = [];
    
    faqCategories.forEach((category, catIndex) => {
      category.items.forEach((item, qIndex) => {
        if (
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          results.push({
            categoryIndex: catIndex,
            questionIndex: qIndex,
            question: item.question
          });
        }
      });
    });
    
    setSearchResults(results);
  }, [searchQuery, faqCategories]);

  // Handle selecting a question - scroll to the content
  const handleSelectQuestion = (catIndex: number, qIndex: number) => {
    setActiveCategory(catIndex);
    setActiveQuestion(qIndex);
    
    // Scroll to content on mobile
    if (window.innerWidth < 1024 && contentRef.current) {
      const yOffset = -100; // Account for sticky header
      const y = contentRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Handle selecting from search results
  const handleSelectSearchResult = (catIndex: number, qIndex: number) => {
    handleSelectQuestion(catIndex, qIndex);
    setSearchQuery('');
    setShowSearch(false);
  };

  // Get icon for category
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Services & Scheduling':
        return <MessageCircle className="h-5 w-5" />;
      case 'Pricing & Contracts':
        return <Info className="h-5 w-5" />;
      case 'Quality & Safety':
        return <HelpCircle className="h-5 w-5" />;
      default:
        return <HelpCircle className="h-5 w-5" />;
    }
  };

  return (
    <div id="faq">
      <Section className="bg-gray-50">
        {/* Header with Search Toggle */}
        <div className="text-center mb-10">
          <span className="inline-block text-sm font-bold tracking-wider text-primary uppercase bg-primary/10 px-4 py-1 rounded-full mb-3">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Find answers to common questions about our commercial cleaning services. If you don't
            see what you're looking for, please contact us.
          </p>
          
          {/* Search Toggle Button */}
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Search className="h-4 w-4 mr-2" />
            {showSearch ? 'Hide Search' : 'Search FAQs'}
          </button>
        </div>
        
        {/* Search Bar */}
        <AnimatePresence>
          {showSearch && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8 overflow-hidden"
            >
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search for questions or keywords..."
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                {/* Search Results */}
                {searchResults.length > 0 && (
                  <div className="mt-4 bg-white rounded-lg shadow-md p-4 max-h-60 overflow-y-auto">
                    <p className="text-sm text-gray-500 mb-2">{searchResults.length} results found</p>
                    {searchResults.map((result, index) => (
                      <button
                        key={index}
                        className="w-full text-left p-2 hover:bg-gray-50 rounded text-gray-700 flex items-start mb-2"
                        onClick={() => handleSelectSearchResult(result.categoryIndex, result.questionIndex)}
                      >
                        <ChevronRight className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span>{result.question}</span>
                      </button>
                    ))}
                  </div>
                )}
                
                {searchQuery && searchResults.length === 0 && (
                  <div className="mt-4 bg-white rounded-lg shadow-md p-4">
                    <p className="text-gray-500">No results found for "{searchQuery}"</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category Tabs */}
        <div className="mb-8 flex overflow-x-auto scrollbar-hide pb-2">
          <div className="flex space-x-2 mx-auto">
            {faqCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  activeCategory === index
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span className="flex items-center">
                  {getCategoryIcon(category.title)}
                  <span className="ml-2">{category.title}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Left column - Questions */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <h3 className="font-bold text-lg px-6 py-4 border-b border-gray-100 text-primary">
                {selectedCategory?.title || 'Questions'}
              </h3>
              <div className="divide-y divide-gray-100">
                {selectedCategory?.items.map((item, qIndex) => (
                  <div
                    key={qIndex}
                    ref={(el) => questionRefs.current[qIndex] = el}
                    className={`cursor-pointer px-6 py-4 hover:bg-gray-50 transition-colors ${
                      activeQuestion === qIndex ? 'bg-primary/5' : ''
                    }`}
                    onClick={() => handleSelectQuestion(activeCategory, qIndex)}
                  >
                    <div className="flex items-start">
                      <div className={`flex-shrink-0 mt-1 ${activeQuestion === qIndex ? 'text-primary' : 'text-gray-400'}`}>
                        <ChevronRight className="h-4 w-4" />
                      </div>
                      <span className={`ml-2 ${activeQuestion === qIndex ? 'text-primary font-medium' : 'text-gray-700'}`}>
                        {item.question}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right column - Answer display */}
          <div className="lg:col-span-7" ref={contentRef}>
            <div className="bg-white rounded-xl shadow-md p-8 lg:sticky lg:top-24">
              <motion.div
                key={`${activeCategory}-${activeQuestion}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  {selectedQuestion.question}
                </h3>
                <div className="prose prose-sm max-w-none text-gray-600">
                  {selectedQuestion.answer}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-gray-500 text-sm font-medium mb-3">Was this helpful?</p>
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="#contact" 
                      className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors text-sm font-medium"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Contact support
                    </a>
                    <button className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors text-sm font-medium">
                      <ChevronDown className="h-4 w-4 mr-2" />
                      Yes, this helped
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 py-8 px-6 rounded-xl max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              We're here to help! Contact our friendly team for personalized assistance.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center h-12 px-8 font-medium bg-primary text-white rounded-md shadow hover:bg-primary/90 transition-colors"
            >
              <span>Contact Us</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default FAQ;
