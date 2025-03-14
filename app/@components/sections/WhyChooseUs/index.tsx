'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Clock, Sparkles } from 'lucide-react';
import { siteConfig } from '@/app/@lib/constants/siteConfig';
import { FadeIn, FadeInUp } from '../../ui/animations/motion-components';

/**
 * Why Choose Us Section Component
 *
 * A clean, sleek section highlighting Brightway Cleaning's core advantages
 * with a minimalist Apple-inspired design approach.
 */
const WhyChooseUs = () => {
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - siteConfig.business.startYear;
  
  return (
    <section id="why-choose-us" className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <FadeInUp>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">The Brightway Difference</h2>
            <p className="text-xl text-gray-600">
              Expert commercial cleaning services designed to exceed expectations, delivered by professionals who care about your business environment.
            </p>
          </div>
        </FadeInUp>

        {/* Main content area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left column - Key statistics */}
          <FadeIn>
            <div className="flex flex-col justify-center h-full">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Setting the Standard in Commercial Cleaning</h3>
              <p className="text-lg text-gray-700 mb-8">
                For over {yearsInBusiness} years, Brightway Cleaning has provided exceptional commercial cleaning services across the DFW metroplex, maintaining the highest standards of cleanliness, professionalism, and customer satisfaction.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-primary mb-2">{siteConfig.business.satisfaction}</span>
                  <span className="text-sm uppercase tracking-wider text-gray-600">Client Satisfaction</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-primary mb-2">{yearsInBusiness}+</span>
                  <span className="text-sm uppercase tracking-wider text-gray-600">Years Experience</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-primary mb-2">{siteConfig.business.clientsServed}+</span>
                  <span className="text-sm uppercase tracking-wider text-gray-600">Clients Served</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-primary mb-2">{siteConfig.business.servicesCount}</span>
                  <span className="text-sm uppercase tracking-wider text-gray-600">Service Options</span>
                </div>
              </div>
            </div>
          </FadeIn>
          
          {/* Right column - Key benefits */}
          <FadeIn>
            <div className="bg-gray-50 rounded-2xl p-10 h-full">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Why Businesses Choose Us</h3>
              
              <div className="space-y-6">
                <BenefitRow 
                  icon={<CheckCircle className="h-6 w-6" />} 
                  title="Certified Professional Team" 
                  description="Our cleaning specialists undergo rigorous training and certification to deliver exceptional results." 
                />
                
                <BenefitRow 
                  icon={<Shield className="h-6 w-6" />} 
                  title="Fully Insured & Bonded" 
                  description="Complete protection and peace of mind with comprehensive insurance coverage." 
                />
                
                <BenefitRow 
                  icon={<Clock className="h-6 w-6" />} 
                  title="Flexible Scheduling" 
                  description="We work around your business hours to minimize disruption to your operations." 
                />
                
                <BenefitRow 
                  icon={<Sparkles className="h-6 w-6" />} 
                  title="Premium Eco-Friendly Products" 
                  description="Safe, effective cleaning solutions that protect your employees and the environment." 
                />
              </div>
            </div>
          </FadeIn>
        </div>
        
        {/* Two-card layout for guarantees */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-primary/5 border border-primary/20 rounded-2xl p-8"
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <h3 className="text-xl font-bold mb-4 text-primary">Our Satisfaction Guarantee</h3>
            <p className="text-gray-700 mb-4">
              Your complete satisfaction is our priority. If you're not entirely happy with our service, we'll return and re-clean the areas in question at no additional cost.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center text-primary font-medium hover:text-primary-dark"
              whileHover={{ x: 4 }}
            >
              Get a Free Quote <span className="ml-2">→</span>
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <h3 className="text-xl font-bold mb-4 text-gray-900">Customer-Centric Approach</h3>
            <p className="text-gray-700 mb-4">
              Every cleaning plan is customized to your specific needs. We partner with you to understand your requirements and deliver exactly what your business needs.
            </p>
            <motion.a
              href="#services"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-primary text-white rounded-md font-medium hover:bg-primary-dark transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Our Services
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Simple benefit row component
const BenefitRow = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-4 mt-1">
        <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-1 text-gray-900">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default WhyChooseUs;
