import { Metadata } from 'next';
import { generatePageMetadata } from '@/app/@lib/utils/metadata';
import { PageTemplate, PageSection } from '@/app/@lib/page-utils';
import Link from 'next/link';
import { siteConfig } from '@/app/@lib/constants/siteConfig';
import DocumentInfoSection from '@/app/@components/ui/document-info-section';

/**
 * Page Metadata
 *
 * Privacy Policy pages should be indexed by search engines for transparency
 * and to comply with various privacy regulations that require policies to be
 * easily accessible.
 */
export const metadata: Metadata = generatePageMetadata({
  pageType: 'custom',
  title: 'Privacy Policy | Brightway Cleaning',
  description:
    'Learn about how Brightway Cleaning collects, uses, and protects your personal information.',
  canonicalPath: '/privacy-policy',
  seo: {
    maxSnippet: 0, // Prevent showing snippets of legal text in search results
    maxImagePreview: 'standard',
    maxVideoPreview: 0, // Don't show video previews for legal pages
    noArchive: true, // Don't show cached version in search results
  },
});

// Privacy Policy sections for table of contents navigation
const sections = [
  { id: 'introduction', title: '1. Introduction' },
  { id: 'information-we-collect', title: '2. Information We Collect' },
  { id: 'how-we-use-information', title: '3. How We Use Your Information' },
  { id: 'information-sharing', title: '4. Information Sharing' },
  { id: 'cookies', title: '5. Cookies and Tracking Technologies' },
  { id: 'your-rights', title: '6. Your Rights and Choices' },
  { id: 'data-security', title: '7. Data Security' },
  { id: 'changes', title: '8. Changes to This Privacy Policy' },
  { id: 'contact', title: '9. Contact Us' },
];

// Get current date formatted for last updated info
const currentDate = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

export default function PrivacyPolicy() {
  return (
    <PageTemplate
      title="Privacy Policy"
      description="Learn about how Brightway Cleaning collects, uses, and protects your personal information."
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
                  Welcome to Brightway Cleaning&apos;s (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) Privacy Policy. We are committed to protecting your personal information.
                </p>

                <section id="introduction" className="scroll-mt-24">
                  <h2>1. Introduction</h2>
                  <p>
                    Brightway Cleaning (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to
                    protecting your personal information. This Privacy Policy explains how we collect,
                    use, disclose, and safeguard your information when you visit our website or use our
                    services.
                  </p>
                </section>

                <section id="information-we-collect" className="scroll-mt-24">
                  <h2>2. Information We Collect</h2>
                  <p>We may collect personal information that you voluntarily provide to us when you:</p>
                  <ul>
                    <li>Fill out forms on our website</li>
                    <li>Request a quote for our services</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Contact us via email or phone</li>
                    <li>Participate in surveys or promotions</li>
                  </ul>
                  <p>The types of information we may collect include:</p>
                  <ul>
                    <li>Name, email address, phone number, and mailing address</li>
                    <li>Business information, if applicable</li>
                    <li>Service preferences and requirements</li>
                    <li>Payment information (processed securely through our payment processors)</li>
                  </ul>
                </section>

                <section id="how-we-use-information" className="scroll-mt-24">
                  <h2>3. How We Use Your Information</h2>
                  <p>We may use the information we collect for various purposes, including:</p>
                  <ul>
                    <li>Providing and improving our services</li>
                    <li>Processing transactions and sending service confirmations</li>
                    <li>Communicating with you about services, offers, and promotions</li>
                    <li>Responding to your inquiries and service requests</li>
                    <li>Analyzing website usage to improve user experience</li>
                    <li>Complying with legal obligations</li>
                  </ul>
                </section>

                <section id="information-sharing" className="scroll-mt-24">
                  <h2>4. Information Sharing</h2>
                  <p>
                    We do not sell or rent your personal information to third parties. We may share
                    information with:
                  </p>
                  <ul>
                    <li>Service providers who assist us in operating our business</li>
                    <li>Legal authorities when required by law or to protect our rights</li>
                    <li>Business partners with your consent</li>
                  </ul>
                </section>

                <section id="cookies" className="scroll-mt-24">
                  <h2>5. Cookies and Tracking Technologies</h2>
                  <p>
                    We use cookies and similar tracking technologies to enhance your browsing experience,
                    analyze site traffic, and personalize content. You can set your browser to refuse
                    cookies, but this may limit functionality of our website.
                  </p>
                </section>

                <section id="your-rights" className="scroll-mt-24">
                  <h2>6. Your Rights and Choices</h2>
                  <p>
                    Depending on your location, you may have rights regarding your personal information,
                    including:
                  </p>
                  <ul>
                    <li>Accessing your personal information</li>
                    <li>Correcting inaccurate information</li>
                    <li>Deleting your information</li>
                    <li>Restricting or objecting to processing</li>
                    <li>Data portability</li>
                  </ul>
                  <p>To exercise these rights, please contact us using the information provided below.</p>
                </section>

                <section id="data-security" className="scroll-mt-24">
                  <h2>7. Data Security</h2>
                  <p>
                    We implement reasonable security measures to protect your personal information from
                    unauthorized access, alteration, disclosure, or destruction. However, no data
                    transmission over the internet is completely secure.
                  </p>
                </section>

                <section id="changes" className="scroll-mt-24">
                  <h2>8. Changes to This Privacy Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. The date at the top of this page
                    indicates when it was last revised. We encourage you to review this policy
                    periodically.
                  </p>
                </section>

                <section id="contact" className="scroll-mt-24">
                  <h2>9. Contact Us</h2>
                  <p>
                    If you have questions or concerns about this Privacy Policy or our privacy practices,
                    please contact us at:
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
                href="/terms-of-service"
                className="px-4 py-2 bg-white rounded border hover:border-primary transition-colors"
              >
                Terms of Service
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
