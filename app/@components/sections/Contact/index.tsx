import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import { Grid, Column, Section, Container } from '../../ui/layout';

/**
 * Contact Section Component
 *
 * Main contact section that combines the contact form and contact information.
 * Acts as a container for the modularized contact components.
 * Optimized for responsive layouts on all device sizes.
 * Uses Grid and Column components for responsive layout.
 */
const Contact = () => {
  return (
    <div id="contact">
      <Section className="bg-gray-50">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to experience the Brightway difference? Contact us for a free quote or to learn
            more about our professional cleaning services.
          </p>
        </div>

        <Grid columns={{ default: 1, lg: 3 }} gap={{ default: 8, md: 10 }}>
          {/* On mobile: Contact info shown first */}
          <Column span={{ default: 'full', lg: 1 }} order={{ default: 2, lg: 1 }}>
            <ContactInfo />
          </Column>
          
          {/* On mobile: Form shown first */}
          <Column span={{ default: 'full', lg: 2 }} order={{ default: 1, lg: 2 }}>
            <ContactForm />
          </Column>
        </Grid>
      </Section>
    </div>
  );
};

export default Contact;
