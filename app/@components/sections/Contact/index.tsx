import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

/**
 * Contact Section Component
 *
 * Main contact section that combines the contact form and contact information.
 * Acts as a container for the modularized contact components.
 * Optimized for responsive layouts on all device sizes.
 * Added minimum heights and container dimensions to prevent layout shifts.
 */
const Contact = () => {
  return (
    <section 
      id="contact" 
      className="w-full py-12 md:py-16 lg:py-24 bg-white min-h-[600px] md:min-h-[700px] layout-stable"
      style={{ contain: 'layout paint' }}
    >
      <div className="w-full px-4 sm:px-6 layout-stable">
        <div className="text-center mb-8 md:mb-12 max-w-4xl mx-auto min-h-[100px]" style={{ contain: 'layout' }}>
          <span className="inline-block text-sm font-bold tracking-wider text-primary uppercase bg-primary/10 px-4 py-1 rounded-full mb-3">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to experience the Brightway difference? Contact us for a free quote or to learn
            more about our professional cleaning services.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-3 max-w-7xl mx-auto min-h-[400px] md:min-h-[500px]" style={{ contain: 'layout' }}>
          {/* On mobile: Contact info shown first */}
          <div className="lg:col-span-1 order-2 lg:order-1 min-h-[300px]">
            <ContactInfo />
          </div>

          {/* On mobile: Form shown first */}
          <div className="lg:col-span-2 order-1 lg:order-2 min-h-[300px]">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
