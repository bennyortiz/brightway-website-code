import React from 'react';

/**
 * Benefit Item Interface
 */
export interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

/**
 * BenefitItem Component
 *
 * Displays a single benefit with an icon, title, and description.
 * Used in the About section to highlight company advantages.
 *
 * @param {BenefitItemProps} props - The benefit data
 */
const BenefitItem = ({ icon, title, description }: BenefitItemProps) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="p-2 bg-primary/10 rounded-full">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default BenefitItem;
