'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Clock, Sparkles, Award, ThumbsUp, ArrowRight } from 'lucide-react';
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
    <section id="why-choose-us" className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeInUp>
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Why Brightway Cleaning</h2>
            <p className="text-xl text-gray-600">
              Discover why businesses throughout DFW choose us for their commercial cleaning needs.
            </p>
          </div>
        </FadeInUp>
        
        {/* Main benefits section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard 
              icon={<Shield className="h-6 w-6" />}
              title="Certified & Insured Team"
              description="Fully bonded and insured cleaning professionals with extensive training and certification."
            />
            
            <BenefitCard 
              icon={<Clock className="h-6 w-6" />}
              title="Flexible Scheduling"
              description="Service available when it's convenient for you – early mornings, evenings, or weekends."
            />
            
            <BenefitCard 
              icon={<Sparkles className="h-6 w-6" />}
              title="Eco-Friendly Solutions"
              description="Environmentally safe cleaning products that protect your employees and the planet."
            />
            
            <BenefitCard 
              icon={<CheckCircle className="h-6 w-6" />}
              title="Customized Cleaning Plans"
              description="Tailored cleaning solutions designed specifically for your facility's unique needs."
            />
            
            <BenefitCard 
              icon={<ThumbsUp className="h-6 w-6" />}
              title="Consistent Quality"
              description="Rigorous quality control systems ensuring the same high standard every time."
            />
            
            <BenefitCard 
              icon={<Award className="h-6 w-6" />}
              title={`${yearsInBusiness}+ Years Experience`}
              description={`Trusted by ${siteConfig.business.clientsServed}+ businesses throughout the DFW metroplex since ${siteConfig.business.startYear}.`}
            />
          </div>
          
          <div className="text-center mt-8">
            <motion.a
              href="#contact"
              className="inline-flex items-center text-primary font-medium hover:text-primary-dark"
              whileHover={{ x: 4 }}
            >
              Get A Free Quote <span className="ml-2">→</span>
            </motion.a>
          </div>
        </div>
        
        {/* Guarantees section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Satisfaction Guarantee */}
          <motion.div 
            className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md relative overflow-hidden group"
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8"></div>
            <div className="relative">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our 100% Satisfaction Guarantee</h3>
              </div>
              
              <p className="text-gray-700 mb-6 text-lg">
                If you're not completely satisfied with our service, we'll come back and re-clean the areas in question at no additional cost. Your happiness is our priority.
              </p>
              
              <motion.a
                href="#contact"
                className="inline-flex items-center text-primary font-medium hover:text-primary-dark group-hover:translate-x-1 transition-transform"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>
          
          {/* Bonded & Insured */}
          <motion.div 
            className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md relative overflow-hidden group"
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8"></div>
            <div className="relative">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Fully Bonded & Insured</h3>
              </div>
              
              <p className="text-gray-700 mb-6 text-lg">
                We carry comprehensive insurance coverage, including liability and workers' compensation. Your property and peace of mind are protected.
              </p>
              
              <motion.a
                href="#contact"
                className="inline-flex items-center text-primary font-medium hover:text-primary-dark group-hover:translate-x-1 transition-transform"
              >
                Contact us <ArrowRight className="ml-2 h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        {/* Stats bar */}
        <div className="bg-primary rounded-2xl p-8 md:p-10 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white">By The Numbers</h3>
            <p className="text-white/80 mt-2">Our track record of excellence and reliability</p>
          </div>
          
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
          
          <div className="text-center mt-8">
            <motion.a
              href="#testimonials"
              className="inline-flex items-center text-white font-medium hover:text-white/90"
              whileHover={{ x: 4 }}
            >
              Read our reviews <span className="ml-2">→</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Simple stat item component
const StatItem = ({ value, label }: { value: string | number, label: string }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="text-4xl font-bold text-white mb-2">{value}</span>
      <span className="text-sm uppercase tracking-wider text-white/80">{label}</span>
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
