import React from 'react';
import { ThumbsUp, Clock, Calendar, Users } from 'lucide-react';

/**
 * FAQStats Component
 * 
 * Displays key statistics about the business alongside the FAQ section
 * to build customer confidence and provide quick information.
 */
const FAQStats: React.FC = () => {
  const stats = [
    {
      icon: <ThumbsUp className="h-8 w-8 text-primary" />,
      value: '98%',
      label: 'Customer Satisfaction',
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      value: '24/7',
      label: 'Customer Support',
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      value: '10+',
      label: 'Years of Experience',
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      value: '5,000+',
      label: 'Happy Customers',
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 my-12">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 text-center flex flex-col items-center"
        >
          <div className="mb-3">
            {stat.icon}
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-gray-600">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQStats; 