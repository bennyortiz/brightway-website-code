import React from 'react';

interface PageHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function PageHeading({
  title,
  subtitle,
  centered = false,
  className = '',
}: PageHeadingProps) {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''} ${className}`}>
      <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">{title}</h1>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl">{subtitle}</p>
      )}
    </div>
  );
} 