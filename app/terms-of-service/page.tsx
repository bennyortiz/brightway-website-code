import { Metadata } from 'next';
import MainLayout from '@/app/@components/ui/layout/MainLayout';
import { generatePageMetadata } from '@/app/@lib/utils/metadata';
import { PageHeader } from '@/app/@components/ui/page';

/**
 * Page Metadata
 *
 * Terms of Service pages should be indexed by search engines for transparency
 * and to ensure users can find your legal documents.
 */
export const metadata: Metadata = generatePageMetadata({
  pageType: 'custom',
  title: 'Terms of Service | Brightway Cleaning',
  description:
    'Please read our Terms of Service to understand the conditions for using Brightway Cleaning services.',
  canonicalPath: '/terms-of-service',
  seo: {
    maxSnippet: 0, // Prevent showing snippets of legal text in search results
  },
});

export default function TermsOfService() {
  return (
    <MainLayout>
      <PageHeader title="Terms of Service" backgroundPattern={false} />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p>
              Last Updated:{' '}
              {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>

            <p className="text-lg text-gray-600 mb-4">
              Welcome to Brightway Cleaning&apos;s (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) Terms of Service. By using our services, you agree to be bound by these terms.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the services provided by Brightway Cleaning (&quot;we,&quot; &quot;our,&quot; or
              &quot;us&quot;), you agree to be bound by these Terms of Service. If you do not agree to all the
              terms and conditions, you should not use our services.
            </p>

            <h2>2. Description of Services</h2>
            <p>
              Brightway Cleaning provides commercial cleaning services in the DFW metroplex. Our
              services include but are not limited to office cleaning, commercial space cleaning,
              industrial cleaning, sanitization services, and waste management.
            </p>

            <h2>3. Service Agreements</h2>
            <p>
              All cleaning services are subject to a service agreement that outlines specific terms,
              including scope of work, schedule, pricing, and payment terms. Service agreements may
              contain additional terms that supplement these Terms of Service.
            </p>

            <h2>4. Scheduling and Access</h2>
            <p>
              Clients are responsible for providing necessary access to the premises where services
              will be performed. If we are unable to access the premises at the scheduled time, we
              reserve the right to charge a cancellation fee as specified in your service agreement.
            </p>

            <h2>5. Payment Terms</h2>
            <p>
              Payment terms are specified in your service agreement. We accept various payment
              methods and may require a deposit for certain services. Late payments may incur
              additional fees as outlined in your service agreement.
            </p>

            <h2>6. Cancellation Policy</h2>
            <p className="text-lg text-gray-600 mb-4">
              We typically require 48 hours&apos; notice for cancellations.
            </p>

            <h2>7. Quality Guarantee</h2>
            <p className="text-lg text-gray-600 mb-4">
              We&apos;re committed to providing the highest quality service.
            </p>

            <h2>8. Liability Limitations</h2>
            <p>
              While we take precautions to prevent damage, we are not responsible for normal wear
              and tear, pre-existing damage, or damage resulting from client negligence. Our
              liability is limited to the cost of services provided.
            </p>

            <h2>9. Insurance</h2>
            <p>
              Brightway Cleaning maintains general liability insurance and workers&apos; compensation
              insurance. Proof of insurance is available upon request.
            </p>

            <h2>10. Confidentiality</h2>
            <p>
              We respect the confidentiality of our clients&apos; information and premises. Our staff is
              trained to maintain confidentiality and handle sensitive information appropriately.
            </p>

            <h2>11. Modification of Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be
              effective upon posting to our website. Continued use of our services after changes
              indicates your acceptance of the modified terms.
            </p>

            <h2>12. Termination</h2>
            <p>
              Either party may terminate services as specified in the service agreement. We reserve
              the right to terminate services immediately for non-payment or violation of these
              Terms of Service.
            </p>

            <h2>13. Governing Law</h2>
            <p>
              These Terms of Service are governed by the laws of the State of Texas. Any disputes
              arising from these terms shall be resolved in the courts of Tarrant County, Texas.
            </p>

            <h2>14. Contact Information</h2>
            <p>
              If you have questions about these Terms of Service, please contact us at:
              <br />
              Email: info@brightwaycleaning.com
              <br />
              Phone: (555) 123-4567
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
