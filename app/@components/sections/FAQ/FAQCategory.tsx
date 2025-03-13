import React from 'react';
import FAQItem from './FAQItem';
import { FAQCategory as FAQCategoryType } from './faqData';

/**
 * FAQCategory Component
 *
 * Displays a group of related FAQ items under a category title.
 *
 * @param {FAQCategoryType} props - The FAQ category data
 */
const FAQCategory = ({ title, items }: FAQCategoryType) => {
  return (
    <div className="mb-12 last:mb-0">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 border-l-4 border-primary pl-4 py-1">
        {title}
      </h2>
      <div className="bg-white rounded-lg shadow-md p-1">
        {items.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQCategory;
