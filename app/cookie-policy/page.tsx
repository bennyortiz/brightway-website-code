import { Metadata } from 'next';
import { generatePageMetadata } from '@/app/@lib/utils/metadata';
import { PageTemplate, PageSection } from '@/app/@lib/page-utils';
import Link from 'next/link';
import { siteConfig } from '@/app/@lib/constants/siteConfig';
import DocumentInfoSection from '@/app/@components/ui/document-info-section';

/**
 * Page Metadata
 *
 * Cookie Policy pages should be indexed by search engines for transparency
 * and to comply with cookie regulations like GDPR that require cookie information
 * to be easily accessible.
 */
export const metadata: Metadata = generatePageMetadata({
  pageType: 'custom',
  title: 'Cookie Policy | Brightway Cleaning',
  description: 'Learn how Brightway Cleaning uses cookies and similar technologies on our website.',
  canonicalPath: '/cookie-policy',
  seo: {
    maxSnippet: 0, // Prevent showing snippets of legal text in search results
    maxImagePreview: 'standard',
    maxVideoPreview: 0, // Don't show video previews for legal pages
    noArchive: true, // Don't show cached version in search results
  },
});

// Cookie Policy sections for table of contents navigation
const sections = [
  { id: 'what-are-cookies', title: '1. What Are Cookies' },
  { id: 'how-we-use-cookies', title: '2. How We Use Cookies' },
  { id: 'third-party-cookies', title: '3. Third-Party Cookies' },
  { id: 'managing-cookies', title: '4. Managing Cookies' },
  { id: 'cookie-consent', title: '5. Cookie Consent' },
  { id: 'changes', title: '6. Changes to This Cookie Policy' },
  { id: 'contact', title: '7. Contact Us' },
];

// Get current date formatted for last updated info
const currentDate = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

export default function CookiePolicy() {
  return (
    <PageTemplate
      title="Cookie Policy"
      description="Learn how Brightway Cleaning uses cookies and similar technologies on our website."
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
                  This policy explains how Brightway Cleaning uses cookies and similar tracking technologies on our website.
                </p>

                <section id="what-are-cookies" className="scroll-mt-24">
                  <h2>1. What Are Cookies</h2>
                  <p>
                    Cookies are small text files that are placed on your computer or mobile device when
                    you visit a website. They are widely used to make websites work more efficiently and
                    provide information to the website owners. Cookies help provide a better browsing
                    experience by remembering your preferences and enabling certain functionality.
                  </p>
                </section>

                <section id="how-we-use-cookies" className="scroll-mt-24">
                  <h2>2. How We Use Cookies</h2>
                  <p>Brightway Cleaning uses cookies for several purposes, including:</p>
                  <ul>
                    <li>
                      <strong>Essential Cookies:</strong> These cookies are necessary for the website to
                      function properly and cannot be turned off in our systems. They are usually set in
                      response to actions you take such as setting your privacy preferences, logging in,
                      or filling in forms.
                    </li>
                    <li>
                      <strong>Performance Cookies:</strong> These cookies allow us to count visits and
                      traffic sources so we can measure and improve the performance of our site. They help
                      us know which pages are the most and least popular and see how visitors move around
                      the site.
                    </li>
                    <li>
                      <strong>Functional Cookies:</strong> These cookies enable the website to provide
                      enhanced functionality and personalization. They may be set by us or by third-party
                      providers whose services we have added to our pages.
                    </li>
                    <li>
                      <strong>Targeting Cookies:</strong> These cookies may be set through our site by our
                      advertising partners. They may be used by those companies to build a profile of your
                      interests and show you relevant advertisements on other sites.
                    </li>
                  </ul>
                </section>

                <section id="third-party-cookies" className="scroll-mt-24">
                  <h2>3. Third-Party Cookies</h2>
                  <p>
                    In addition to our own cookies, we may also use various third-party cookies to report
                    usage statistics of the website and deliver advertisements on and through the website.
                    These may include:
                  </p>
                  <ul>
                    <li>Google Analytics (performance)</li>
                    <li>Google Ads (targeting)</li>
                    <li>Facebook Pixel (targeting)</li>
                    <li>HubSpot (functional)</li>
                  </ul>
                </section>

                <section id="managing-cookies" className="scroll-mt-24">
                  <h2>4. Managing Cookies</h2>
                  <p>
                    Most web browsers allow some control of most cookies through the browser settings. To
                    find out more about cookies, including how to see what cookies have been set and how
                    to manage and delete them, visit
                    <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">
                      {' '}
                      www.allaboutcookies.org
                    </a>
                    .
                  </p>
                  <p>
                    To opt out of being tracked by Google Analytics across all websites, visit{' '}
                    <a
                      href="http://tools.google.com/dlpage/gaoptout"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      http://tools.google.com/dlpage/gaoptout
                    </a>
                    .
                  </p>
                </section>

                <section id="cookie-consent" className="scroll-mt-24">
                  <h2>5. Cookie Consent</h2>
                  <p>
                    When you first visit our website, you will be presented with a cookie banner that
                    allows you to accept or decline non-essential cookies. You can change your preferences
                    at any time by clicking on the &quot;Cookie Settings&quot; link in the footer of our website.
                  </p>
                </section>

                <section id="changes" className="scroll-mt-24">
                  <h2>6. Changes to This Cookie Policy</h2>
                  <p>
                    We may update this Cookie Policy from time to time to reflect changes in technology,
                    regulation, or our business practices. Any changes will become effective when we post
                    the revised policy on this page. We encourage you to periodically review this page for
                    the latest information on our cookie practices.
                  </p>
                </section>

                <section id="contact" className="scroll-mt-24">
                  <h2>7. Contact Us</h2>
                  <p>
                    If you have any questions about our Cookie Policy, please contact us at:
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
                href="/terms-of-service"
                className="px-4 py-2 bg-white rounded border hover:border-primary transition-colors"
              >
                Terms of Service
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
