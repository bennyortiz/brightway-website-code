import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

/**
 * Contact Section Component
 *
 * Main contact section that combines the contact form and contact information.
 * Acts as a container for the modularized contact components.
 */
const Contact = () => {
  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to experience the Brightway difference? Contact us for a free quote or to learn
            more about our professional cleaning services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
