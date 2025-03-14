import React from 'react';
import { PrimaryButton } from '../../ui/buttons';
import { Grid, Column, Container, Section } from '../../ui/layout';

/**
 * CTABanner Component
 *
 * A call-to-action banner that encourages users to take action.
 * Features a compelling headline, description, and CTA button.
 * Uses Grid and Column components for responsive layout.
 */
const CTABanner = () => {
  return (
    <Section 
      className="bg-gradient-to-r from-primary/5 to-secondary/5"
      spacing="md"
    >
      <div className="relative rounded-2xl bg-white shadow-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />

        <div className="relative px-6 py-12 md:py-16 md:px-12">
          <Grid 
            columns={{ default: 1, md: 12 }} 
            gap={8} 
            className="items-center"
          >
            <Column span={{ default: 'full', md: 8 }} className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                Ready to Transform Your Space in DFW?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Get a customized cleaning solution that meets your business needs throughout the DFW
                metroplex. Contact us today for a free, no-obligation quote.
              </p>
            </Column>

            <Column span={{ default: 'full', md: 4 }} className="flex justify-center md:justify-end">
              <PrimaryButton href="#contact" size="lg">
                Get Your Free Quote
              </PrimaryButton>
            </Column>
          </Grid>
        </div>
      </div>
    </Section>
  );
};

export default CTABanner;
