import React from 'react';
import { MapPin, Users } from 'lucide-react';

export interface ServiceAreaCardProps {
  city: string;
  description: string;
  population?: string;
  keyLocations: string[];
  isFeatured?: boolean;
}

/**
 * ServiceAreaCard Component
 *
 * Displays information about a single service area in a card format
 * Highlights featured areas with a special badge
 */
const ServiceAreaCard: React.FC<ServiceAreaCardProps> = ({
  city,
  description,
  population,
  keyLocations,
  isFeatured = false,
}) => {
  return (
    <div
      className={`
      bg-white rounded-xl shadow-lg overflow-hidden transition-transform 
      duration-300 hover:shadow-xl hover:-translate-y-1
      ${isFeatured ? 'border-l-4 border-primary' : ''}
    `}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900">{city}</h3>
          {isFeatured && (
            <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-medium">
              Featured Area
            </span>
          )}
        </div>

        <p className="text-gray-600 mb-4">{description}</p>

        {population && (
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Users className="h-4 w-4 mr-2 text-primary/70" />
            <span>Population: {population}</span>
          </div>
        )}

        <div className="mt-4">
          <div className="flex items-center mb-2">
            <MapPin className="h-4 w-4 mr-2 text-primary" />
            <span className="text-sm font-medium text-gray-700">Key Areas Served</span>
          </div>
          <ul className="pl-6 grid grid-cols-2 gap-x-2 gap-y-1">
            {keyLocations.map((location, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-primary/60 rounded-full mr-2"></span>
                {location}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaCard;
