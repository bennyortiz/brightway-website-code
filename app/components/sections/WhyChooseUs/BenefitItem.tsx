import React from 'react'

/**
 * Benefit Item Interface
 */
export interface BenefitItemProps {
  icon: React.ReactNode
  title: string
  description: string
}

/**
 * BenefitItem Component
 * 
 * Displays a single benefit with an icon, title, and description.
 * Used in the Why Choose Us section to highlight company advantages.
 * 
 * @param {BenefitItemProps} props - The benefit data
 */
const BenefitItem = ({ icon, title, description }: BenefitItemProps) => {
  return (
    <div className="flex flex-col items-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="p-3 bg-primary/10 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  )
}

export default BenefitItem 