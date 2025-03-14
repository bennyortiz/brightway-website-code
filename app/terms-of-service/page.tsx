import { Metadata } from 'next';
import Link from 'next/link';
import MainLayout from '@/app/@components/ui/layout/MainLayout';
import { generatePageMetadata } from '@/app/@lib/utils/metadata';
import { Container } from '@/app/@components/ui/layout';

/**
 * Page Metadata
 * 
 * Terms of Service pages should be indexed by search engines for transparency
 * and to ensure users can find your legal documents.
 */
export const metadata: Metadata = generatePageMetadata({
  pageType: 'custom',
  title: 'Terms of Service | Brightway Cleaning',
  description: 'Our terms of service outline the agreement between Brightway Cleaning and our clients. Please review these terms before using our services.',
  canonicalPath: '/terms-of-service',
  seo: {
    maxSnippet: 0, // Prevent showing snippets of legal text in search results
  }
});

export default function TermsOfService() {
  return (
    <MainLayout>
      <Container className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Last Updated: March 2023
            </p>
            
            <p>
              Welcome to Brightway Cleaning. These Terms of Service ("Terms") govern your use of our website and services. By accessing our website or using our services, you agree to be bound by these Terms.
            </p>
            
            <h2>Services</h2>
            <p>
              Brightway Cleaning provides commercial cleaning services to businesses in the Dallas-Fort Worth metroplex. Our services include, but are not limited to, regular janitorial services, deep cleaning, floor care, and specialized cleaning solutions.
            </p>
            
            <h2>Service Agreements</h2>
            <p>
              All cleaning services are subject to a Service Agreement that outlines the specific services to be performed, scheduling, pricing, and other terms. The Service Agreement, once executed, becomes part of these Terms.
            </p>
            
            <h2>Scheduling and Access</h2>
            <p>
              Clients are responsible for providing safe access to the premises during scheduled cleaning times. If access is not available during the scheduled time, we reserve the right to charge a cancellation fee as outlined in your Service Agreement.
            </p>
            
            <h2>Payment Terms</h2>
            <p>
              Payment terms are specified in your Service Agreement. Generally, payment is due upon receipt of invoice, unless otherwise arranged. We accept various payment methods, including credit card, check, and electronic bank transfers.
            </p>
            <p>
              Late payments may incur a fee as specified in your Service Agreement. Continued non-payment may result in suspension or termination of services.
            </p>
            
            <h2>Cancellation Policy</h2>
            <p>
              Cancellation policies are outlined in your Service Agreement. Generally, we require at least 24 hours' notice for cancellation of scheduled services to avoid a cancellation fee.
            </p>
            
            <h2>Service Quality and Satisfaction</h2>
            <p>
              We strive to provide high-quality cleaning services. If you are not satisfied with any aspect of our service, please notify us within 24 hours of service completion, and we will address the issue promptly.
            </p>
            
            <h2>Insurance and Liability</h2>
            <p>
              Brightway Cleaning maintains comprehensive liability insurance and workers' compensation coverage. However, we are not responsible for pre-existing damage or normal wear and tear to facilities or equipment.
            </p>
            
            <h2>Confidentiality</h2>
            <p>
              We respect the confidentiality of our clients' business information. Our employees are trained to maintain confidentiality regarding any information they may encounter during the course of their duties.
            </p>
            
            <h2>Modification of Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our services after any changes indicates your acceptance of the modified Terms.
            </p>
            
            <h2>Termination</h2>
            <p>
              Either party may terminate services as outlined in the Service Agreement. We reserve the right to terminate services immediately if payment is significantly overdue or if there are safety concerns for our employees.
            </p>
            
            <h2>Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of Texas. Any disputes arising from these Terms or our services shall be resolved in the courts of Tarrant County, Texas.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have questions or concerns about these Terms, please contact us at:
            </p>
            <p>
              <strong>Brightway Cleaning</strong><br />
              1234 Main Street<br />
              Bedford, TX 76021<br />
              Email: legal@brightwaycleaning.com<br />
              Phone: (817) 555-1234
            </p>
            
            <div className="mt-12 pt-6 border-t border-gray-200">
              <p>
                Looking for our Privacy Policy? <Link href="/privacy-policy" className="text-primary hover:underline">Click here</Link>.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </MainLayout>
  );
} 