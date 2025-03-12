'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiHome, FiBriefcase, FiLayers, FiCheckCircle } from 'react-icons/fi';

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center rounded-full border border-primary py-1 px-3 text-sm text-primary mb-4 bg-primary-light">
            <span>Our Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Cleaning Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of professional cleaning services designed to meet the unique needs of your business. Our experienced team and advanced equipment ensure exceptional results every time.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <motion.div 
            className="group flex flex-col p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary-20 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="p-4 bg-primary-light rounded-lg self-start mb-4">
              <FiHome className="h-14 w-14 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Office Cleaning</h3>
            <p className="text-gray-600 mb-4">Comprehensive cleaning solutions for offices of all sizes, ensuring a clean and productive workspace.</p>
            
            <div className="mt-auto">
              <p className="font-medium text-gray-900 mb-2">Services include:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FiCheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Daily sanitization</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Carpet cleaning</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Glass & window cleaning</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Restroom maintenance</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Service 2 */}
          <motion.div 
            className="group flex flex-col p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary-20 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-4 bg-primary-light rounded-lg self-start mb-4">
              <FiBriefcase className="h-14 w-14 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Commercial Spaces</h3>
            <p className="text-gray-600 mb-4">Specialized cleaning services for retail stores, restaurants, and other commercial establishments.</p>
            
            <div className="mt-auto">
              <p className="font-medium text-gray-900 mb-2">Services include:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FiCheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Storefront cleaning</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Floor maintenance</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Display dusting</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">High-traffic area focus</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Service 3 */}
          <motion.div 
            className="group flex flex-col p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary-20 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="p-4 bg-primary-light rounded-lg self-start mb-4">
              <FiLayers className="h-14 w-14 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Industrial Cleaning</h3>
            <p className="text-gray-600 mb-4">Heavy-duty cleaning solutions for warehouses, factories, and industrial facilities.</p>
            
            <div className="mt-auto">
              <p className="font-medium text-gray-900 mb-2">Services include:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FiCheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Equipment cleaning</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Hazardous waste handling</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Loading dock maintenance</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Large space management</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <Link 
            href="#contact" 
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-lg font-medium text-white shadow transition-colors hover:bg-primary-90"
          >
            Request a Custom Quote
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 