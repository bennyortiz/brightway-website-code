import React from 'react';
import SafeImage from '@/app/@components/ui/safe-image';
import { Filter } from 'lucide-react';

// Sample gallery items data
const galleryItems = [
  {
    id: 1,
    title: 'Office Space Cleaning',
    description: 'Complete cleaning service for a modern office space in Dallas.',
    imageUrl: '/images/brightway-commercial-cleaning-wiping.jpg',
    category: 'Office',
  },
  {
    id: 2,
    title: 'Medical Facility Sanitization',
    description: 'Deep cleaning and sanitization of a healthcare facility.',
    imageUrl: '/images/brightway-commercial-cleaning-wiping.jpg',
    category: 'Healthcare',
  },
  {
    id: 3,
    title: 'Restaurant Cleaning',
    description: 'Thorough kitchen and dining area cleaning for a restaurant in Fort Worth.',
    imageUrl: '/images/brightway-commercial-cleaning-wiping.jpg',
    category: 'Restaurant',
  },
  {
    id: 4,
    title: 'School Janitorial Services',
    description: 'Regular maintenance cleaning for an elementary school.',
    imageUrl: '/images/brightway-commercial-cleaning-wiping.jpg',
    category: 'Education',
  },
  {
    id: 5,
    title: 'Industrial Warehouse Cleaning',
    description: 'Heavy-duty cleaning for a large warehouse facility.',
    imageUrl: '/images/brightway-commercial-cleaning-wiping.jpg',
    category: 'Industrial',
  },
  {
    id: 6,
    title: 'Retail Store Maintenance',
    description: 'Daily cleaning and floor maintenance for a retail chain.',
    imageUrl: '/images/brightway-commercial-cleaning-wiping.jpg',
    category: 'Retail',
  },
];

// Get unique categories for filtering
const categories = ['All', ...Array.from(new Set(galleryItems.map(item => item.category)))];

/**
 * Gallery Section Component
 * 
 * Displays a filterable grid of gallery items showcasing the company's work.
 * Each gallery item includes an image, title, description, and category.
 */
const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Category Filter */}
      <div className="flex items-center justify-center flex-wrap gap-3 mb-10">
        <span className="text-sm font-medium text-gray-700 mr-2 flex items-center">
          <Filter className="h-4 w-4 mr-1"/> Filter by:
        </span>
        {categories.map(category => (
          <button
            key={category}
            className="px-4 py-2 rounded-full text-sm bg-gray-100 hover:bg-primary/10 text-gray-700 hover:text-primary transition-colors"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col h-full transform hover:-translate-y-1"
          >
            <div className="relative h-56 md:h-64 w-full overflow-hidden">
              <SafeImage
                src={item.imageUrl}
                alt={item.title}
                width={600}
                height={400}
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                placement="mid-page"
              />
              <div className="absolute top-3 left-3 z-10">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                  {item.category}
                </span>
              </div>
            </div>
            <div className="p-5 md:p-6 flex-grow">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
