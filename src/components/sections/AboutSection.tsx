'use client';

import { motion } from 'framer-motion';
import { FiCheckCircle, FiShield, FiThumbsUp, FiAward } from 'react-icons/fi';

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center rounded-full border border-primary py-1 px-3 text-sm text-primary mb-4 bg-primary-light">
            <span>About Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Brightway Difference</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Founded in 2010, Brightway Cleaning has been delivering exceptional cleaning services
            to businesses throughout the region. Our mission is to create cleaner, healthier workspaces.
          </p>
        </motion.div>

        {/* Content */}
        <div className="text-center">
          <motion.p 
            className="text-lg text-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            More content for the About section will be added here.
          </motion.p>
        </div>
      </div>
    </section>
  );
} 