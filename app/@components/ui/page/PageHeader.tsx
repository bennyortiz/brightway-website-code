import React from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  centered?: boolean;
  backgroundPattern?: boolean;
}

/**
 * PageHeader Component
 * 
 * A consistent header component to be used across all interior pages.
 * It provides a standardized appearance with an optional description and background pattern.
 */
const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  centered = true,
  backgroundPattern = true,
}) => {
  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      {backgroundPattern && (
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        </div>
      )}
      <div className="container mx-auto px-4">
        <div className={`max-w-5xl mx-auto ${centered ? 'text-center' : 'text-left'}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader; 