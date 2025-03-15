import { Metadata } from 'next';
import { generatePageMetadata } from '@/app/@lib/utils/metadata';
import { PageTemplate, PageSection } from '@/app/@lib/page-utils';
import Link from 'next/link';
import { Calendar, FileText, Download } from 'lucide-react';
import { siteConfig } from '@/app/@lib/constants/siteConfig';
import DocumentInfoSection from '@/app/@components/ui/document-info-section';

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

// Terms of Service sections for table of contents navigation
const sections = [
  { id: 'acceptance', title: '1. Acceptance of Terms' },
  { id: 'description', title: '2. Description of Services' },
  { id: 'agreements', title: '3. Service Agreements' },
  { id: 'scheduling', title: '4. Scheduling and Access' },
  { id: 'payment', title: '5. Payment Terms' },
  { id: 'cancellation', title: '6. Cancellation Policy' },
  { id: 'quality', title: '7. Quality Guarantee' },
  { id: 'liability', title: '8. Liability Limitations' },
  { id: 'insurance', title: '9. Insurance' },
  { id: 'confidentiality', title: '10. Confidentiality' },
  { id: 'modification', title: '11. Modification of Terms' },
  { id: 'termination', title: '12. Termination' },
  { id: 'governing-law', title: '13. Governing Law' },
  { id: 'contact', title: '14. Contact Information' },
];

// Get current date formatted for last updated info
const currentDate = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

export default function TermsOfService() {
  return (
    <PageTemplate
      title="Terms of Service"
      description="Please read these terms carefully before using Brightway Cleaning's services."
      headerOptions={{ fullWidth: true, centered: true }}
      headerPattern={false}
    >
      {/* Document Info Section */}
      <PageSection contentWidth="container" maxWidth="full" bgColor="white" spacingY="md">
        <div className="max-w-7xl mx-auto">
          <DocumentInfoSection lastUpdated={currentDate} />
        </div>
      </PageSection>

      {/* Main Content with Table of Contents */}
      <PageSection contentWidth="container" maxWidth="full" bgColor="white" spacingY="lg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Table of Contents - Sticky on desktop */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-gray-50 p-4 rounded-lg">
                <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                <nav>
                  <ul className="space-y-2 text-sm">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <a 
                          href={`#${section.id}`}
                          className="text-gray-700 hover:text-primary transition-colors block py-1"
                        >
                          {section.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-600 mb-6">
                  Welcome to Brightway Cleaning&apos;s (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) Terms of Service. By using our services, you agree to be bound by these terms.
                </p>

                <section id="acceptance" className="scroll-mt-24">
                  <h2>1. Acceptance of Terms</h2>
                  <p>
                    By accessing and using the services provided by Brightway Cleaning (&quot;we,&quot; &quot;our,&quot; or
                    &quot;us&quot;), you agree to be bound by these Terms of Service. If you do not agree to all the
                    terms and conditions, you should not use our services.
                  </p>
                </section>

                <section id="description" className="scroll-mt-24">
                  <h2>2. Description of Services</h2>
                  <p>
                    Brightway Cleaning provides commercial cleaning services in the DFW metroplex. Our
                    services include but are not limited to office cleaning, commercial space cleaning,
                    industrial cleaning, sanitization services, and waste management.
                  </p>
                </section>

                <section id="agreements" className="scroll-mt-24">
                  <h2>3. Service Agreements</h2>
                  <p>
                    All cleaning services are subject to a service agreement that outlines specific terms,
                    including scope of work, schedule, pricing, and payment terms. Service agreements may
                    contain additional terms that supplement these Terms of Service.
                  </p>
                </section>

                <section id="scheduling" className="scroll-mt-24">
                  <h2>4. Scheduling and Access</h2>
                  <p>
                    Clients are responsible for providing necessary access to the premises where services
                    will be performed. If we are unable to access the premises at the scheduled time, we
                    reserve the right to charge a cancellation fee as specified in your service agreement.
                  </p>
                </section>

                <section id="payment" className="scroll-mt-24">
                  <h2>5. Payment Terms</h2>
                  <p>
                    Payment terms are specified in your service agreement. We accept various payment
                    methods and may require a deposit for certain services. Late payments may incur
                    additional fees as outlined in your service agreement.
                  </p>
                </section>

                <section id="cancellation" className="scroll-mt-24">
                  <h2>6. Cancellation Policy</h2>
                  <p>
                    We require 48 hours&apos; notice for cancellations of regular cleaning services. For specialized or
                    one-time cleaning services, cancellation policies may vary and will be specified in your service
                    agreement. Cancellations with insufficient notice may result in a cancellation fee of up to 50% of
                    the service cost.
                  </p>
                </section>

                <section id="quality" className="scroll-mt-24">
                  <h2>7. Quality Guarantee</h2>
                  <p>
                    We stand behind the quality of our work. If you are not satisfied with any aspect of our service,
                    please notify us within 24 hours of service completion, and we will return to address any issues at
                    no additional cost. This guarantee is subject to reasonable expectations and the scope of work outlined
                    in your service agreement.
                  </p>
                </section>

                <section id="liability" className="scroll-mt-24">
                  <h2>8. Liability Limitations</h2>
                  <p>
                    While we take precautions to prevent damage, we are not responsible for normal wear
                    and tear, pre-existing damage, or damage resulting from client negligence. Our
                    liability is limited to the cost of services provided.
                  </p>
                </section>

                <section id="insurance" className="scroll-mt-24">
                  <h2>9. Insurance</h2>
                  <p>
                    Brightway Cleaning maintains general liability insurance and workers&apos; compensation
                    insurance. Proof of insurance is available upon request.
                  </p>
                </section>

                <section id="confidentiality" className="scroll-mt-24">
                  <h2>10. Confidentiality</h2>
                  <p>
                    We respect the confidentiality of our clients&apos; information and premises. Our staff is
                    trained to maintain confidentiality and handle sensitive information appropriately.
                  </p>
                </section>

                <section id="modification" className="scroll-mt-24">
                  <h2>11. Modification of Terms</h2>
                  <p>
                    We reserve the right to modify these Terms of Service at any time. Changes will be
                    effective upon posting to our website. Continued use of our services after changes
                    indicates your acceptance of the modified terms.
                  </p>
                </section>

                <section id="termination" className="scroll-mt-24">
                  <h2>12. Termination</h2>
                  <p>
                    Either party may terminate services as specified in the service agreement. We reserve
                    the right to terminate services immediately for non-payment or violation of these
                    Terms of Service.
                  </p>
                </section>

                <section id="governing-law" className="scroll-mt-24">
                  <h2>13. Governing Law</h2>
                  <p>
                    These Terms of Service are governed by the laws of the State of Texas. Any disputes
                    arising from these terms shall be resolved in the courts of Tarrant County, Texas.
                  </p>
                </section>

                <section id="contact" className="scroll-mt-24">
                  <h2>14. Contact Information</h2>
                  <p>
                    If you have questions about these Terms of Service, please contact us at:
                    <br />
                    Email: {siteConfig.contact.email}
                    <br />
                    Phone: {siteConfig.contact.phone.display}
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Related Links Section */}
      <PageSection contentWidth="container" maxWidth="full" bgColor="gray-50" spacingY="md">
        <div className="max-w-7xl mx-auto">
          <div className="border-t pt-8">
            <h2 className="text-xl font-bold mb-4">Related Information</h2>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/privacy-policy"
                className="px-4 py-2 bg-white rounded border hover:border-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookie-policy"
                className="px-4 py-2 bg-white rounded border hover:border-primary transition-colors"
              >
                Cookie Policy
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 bg-white rounded border hover:border-primary transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </PageSection>
    </PageTemplate>
  );
}
