import React from 'react'
import { CheckCircle2 } from 'lucide-react'

/**
 * Service item type definition
 */
export interface ServiceItem {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
}

/**
 * ServiceCard Component
 * 
 * Displays information about a single service offering.
 * Includes an icon, title, description, and list of features.
 * 
 * @param {ServiceItem} props - The service data to display
 */
const ServiceCard = ({ icon, title, description, features }: ServiceItem) => {
  return (
    <div className="flex flex-col h-full p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mt-auto">
        <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mr-2" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ServiceCard 