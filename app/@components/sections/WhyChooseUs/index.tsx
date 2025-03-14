'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Clock, Sparkles, Award, ThumbsUp } from 'lucide-react';
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

        {/* Key stats bar */}
        <div className="mb-16 bg-gray-50 rounded-2xl p-8 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            <StatItem 
              value={siteConfig.business.satisfaction}
              label="Client Satisfaction"
            />
            <StatItem 
              value={`${yearsInBusiness}+`}
              label="Years Experience"
            />
            <StatItem 
              value={`${siteConfig.business.clientsServed}+`}
              label="Clients Served"
            />
            <StatItem 
              value={siteConfig.business.servicesCount}
              label="Service Options"
            />
          </div>
        </div>
        
        {/* Main benefits section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900">Why Businesses Choose Us</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard 
              icon={<CheckCircle className="h-6 w-6" />}
              title="Certified Professionals"
              description="Our cleaning specialists undergo rigorous training and certification to deliver exceptional results."
            />
            
            <BenefitCard 
              icon={<Shield className="h-6 w-6" />}
              title="Fully Insured & Bonded"
              description="Complete protection and peace of mind with comprehensive insurance coverage."
            />
            
            <BenefitCard 
              icon={<Clock className="h-6 w-6" />}
              title="Flexible Scheduling"
              description="We work around your business hours to minimize disruption to your operations."
            />
            
            <BenefitCard 
              icon={<Sparkles className="h-6 w-6" />}
              title="Eco-Friendly Products"
              description="Safe, effective cleaning solutions that protect your employees and the environment."
            />
            
            <BenefitCard 
              icon={<Award className="h-6 w-6" />}
              title="Quality Guarantee"
              description="We stand behind our work with a satisfaction guarantee on every cleaning service."
            />
            
            <BenefitCard 
              icon={<ThumbsUp className="h-6 w-6" />}
              title="Customized Approach"
              description="Every cleaning plan is tailored to your specific needs and business requirements."
            />
          </div>
        </div>
        
        {/* CTA banner */}
        <motion.div 
          className="bg-primary rounded-2xl p-8 md:p-10 text-white overflow-hidden relative"
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
        >
          <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] bg-repeat opacity-5"></div>
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Ready to Experience the Brightway Difference?</h3>
              <p className="text-white/90 mb-6 md:mb-0 max-w-xl">
                Get a customized cleaning solution that meets your business needs throughout the DFW metroplex. Contact us today for a free, no-obligation quote.
              </p>
            </div>
            <div className="flex-shrink-0">
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Your Free Quote
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Simple stat item component
const StatItem = ({ value, label }: { value: string | number, label: string }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="text-4xl font-bold text-primary mb-2">{value}</span>
      <span className="text-sm uppercase tracking-wider text-gray-600">{label}</span>
    </div>
  );
};

// Benefit card component
const BenefitCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
        {icon}
      </div>
      <h4 className="text-lg font-semibold mb-2 text-gray-900">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default WhyChooseUs;
