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
 * The component now has a min-height to prevent layout shifts during loading.
 */
const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  centered = true,
  backgroundPattern = true,
}) => {
  return (
    <section className="relative bg-white py-14 md:py-20 overflow-hidden min-h-[180px] md:min-h-[220px] flex items-center">
      {backgroundPattern && (
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        </div>
      )}
      <div className="container mx-auto px-4 w-full">
        <div className={`max-w-5xl mx-auto ${centered ? 'text-center' : 'text-left'}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{title}</h1>
          {description && (
            <p className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
