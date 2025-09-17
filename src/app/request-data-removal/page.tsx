import type { Metadata } from "next";
import FooterSection from "@/components/organisms/FooterSection";

export const metadata: Metadata = {
  title: "Request Data Removal | MenuMitra",
  description:
    "Request the removal of your personal data from MenuMitra systems. Learn about your data rights under GDPR and how to submit a data removal request for our restaurant management services.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Request Data Removal | MenuMitra",
    description:
      "Request the removal of your personal data from MenuMitra systems. Learn about your data rights under GDPR and how to submit a data removal request for our restaurant management services.",
    url: "https://menumitra.com/request-data-removal",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Request Data Removal | MenuMitra",
    description:
      "Request the removal of your personal data from MenuMitra systems. Learn about your data rights under GDPR and how to submit a data removal request for our restaurant management services.",
  },
  alternates: {
    canonical: "https://menumitra.com/request-data-removal",
  },
};

export default function RequestDataRemovalPage() {
  // Fixed dates for legal compliance
  const effectiveDate = "January 15, 2025";
  const lastUpdatedDate = "September 25, 2025";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Request Data Removal",
    description:
      "MenuMitra's data removal request page explaining user rights and procedures for requesting personal data deletion from restaurant management systems.",
    url: "https://menumitra.com/request-data-removal",
    about: {
      "@type": "DataCatalog",
      name: "MenuMitra Data Removal Request",
      description:
        "Data removal request process for MenuMitra restaurant management software and services",
    },
    publisher: {
      "@type": "Organization",
      name: "MenuMitra",
      url: "https://menumitra.com",
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@menumitra.com",
        telephone: "+91 93178 18283",
        contactType: "customer service",
      },
    },
    dateModified: lastUpdatedDate,
    inLanguage: "en",
  };

  return (
    <>
      <section className="relative pt-[160px] max-md:pt-150 overflow-hidden">
        <div className="absolute left-0 right-0 -top-[800px] bg-core-gradient bg-no-repeat bg-center opacity-70 w-full h-full bg-[length:600px_1000px] md:hidden" />
        <div
          className="container relative !max-w-[800px]"
          data-aos="fade-up"
          data-aos-offset={200}
          data-aos-duration={1000}
          data-aos-once="true"
        >
          <div className="absolute left-1/2 top-20 -translate-x-1/2 -translate-y-1/2 flex -z-10 max-md:hidden">
            <div className="w-[442px] h-[442px] rounded-full bg-primary-200/20 blur-[145px]" />
            <div className="w-[442px] h-[442px] rounded-full bg-primary-200/25 -ml-[170px] blur-[145px]" />
            <div className="w-[442px] h-[442px] rounded-full bg-primary-200/20 -ml-[170px] blur-[145px]" />
          </div>
          
          <main className="max-w-4xl mx-auto px-6 py-12 leading-relaxed text-gray-700">
            {/* JSON-LD Structured Data */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            
            <div className="singlePage pb-10">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-center">
                Request Data Removal
              </h1>
            </div>
            
            {/* Effective Date */}
            <p className="text-sm text-gray-600 mb-6">
              <strong>Effective Date:</strong> {effectiveDate}<br />
              <strong>Last Updated:</strong> {lastUpdatedDate}
            </p>
            
            <div className="singlePage">
              <p className="mb-4">
                At MenuMitra, we respect your privacy and data rights. This page explains how you can request the removal of your personal data from our systems in accordance with applicable data protection laws, including the General Data Protection Regulation (GDPR).
              </p>

              {/* Table of Contents */}
              <nav aria-label="Table of Contents" className="mb-8 border-l-4 border-primary-500 pl-4 text-sm space-y-1">
                <h2 className="text-lg font-semibold mb-3">Table of Contents</h2>
                <a href="#your-rights" className="block hover:text-primary-600">1. Your Data Rights</a>
                <a href="#what-data" className="block hover:text-primary-600">2. What Data We Collect</a>
                <a href="#removal-process" className="block hover:text-primary-600">3. Data Removal Process</a>
                <a href="#how-to-request" className="block hover:text-primary-600">4. How to Submit a Request</a>
                <a href="#verification" className="block hover:text-primary-600">5. Identity Verification</a>
                <a href="#response-time" className="block hover:text-primary-600">6. Response Timeline</a>
                <a href="#exceptions" className="block hover:text-primary-600">7. Exceptions and Limitations</a>
                <a href="#business-data" className="block hover:text-primary-600">8. Business Data vs Personal Data</a>
                <a href="#contact" className="block hover:text-primary-600">9. Contact Information</a>
              </nav>

              <section id="your-rights" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">1. Your Data Rights</h2>
                <p className="mb-4">Under applicable data protection laws, you have the following rights regarding your personal data:</p>
                <ul className="mb-4 list-disc list-inside space-y-2">
                  <li><strong>Right to Access:</strong> Request a copy of your personal data we hold</li>
                  <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
                  <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                  <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
                  <li><strong>Right to Data Portability:</strong> Receive your data in a structured format</li>
                  <li><strong>Right to Object:</strong> Object to certain types of data processing</li>
                  <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for data processing</li>
                </ul>
                <p className="mb-4">This page specifically covers your <strong>Right to Erasure</strong> (also known as the "Right to be Forgotten").</p>
              </section>

              <section id="what-data" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">2. What Data We Collect</h2>
                <p className="mb-4">MenuMitra may collect and process the following types of personal data:</p>
                
                <h3 className="text-xl font-semibold mt-8 mb-3">2.1 Account Information</h3>
                <ul className="mb-4 list-disc list-inside space-y-2">
                  <li>Name and contact details (email, phone number)</li>
                  <li>Business information (restaurant name, address)</li>
                  <li>Account credentials and preferences</li>
                  <li>Billing and payment information</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-3">2.2 Usage Data</h3>
                <ul className="mb-4 list-disc list-inside space-y-2">
                  <li>App usage patterns and feature interactions</li>
                  <li>Device information and technical logs</li>
                  <li>IP addresses and location data (anonymized)</li>
                  <li>Support communications and feedback</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-3">2.3 Business Data</h3>
                <ul className="mb-4 list-disc list-inside space-y-2">
                  <li>Menu items, pricing, and inventory data</li>
                  <li>Order history and transaction records</li>
                  <li>Staff information and schedules</li>
                  <li>Customer data (if you collect it through our platform)</li>
                </ul>
              </section>

              <section id="removal-process" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">3. Data Removal Process</h2>
                <p className="mb-4">When you request data removal, we will:</p>
                <ul className="mb-4 list-disc list-inside space-y-2">
                  <li><strong>Verify your identity</strong> to ensure the request is legitimate</li>
                  <li><strong>Review your request</strong> and identify all personal data we hold</li>
                  <li><strong>Assess legal obligations</strong> that may require data retention</li>
                  <li><strong>Delete or anonymize</strong> your personal data where legally permissible</li>
                  <li><strong>Notify third parties</strong> who may have received your data</li>
                  <li><strong>Confirm completion</strong> of the removal process</li>
                </ul>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                  <p className="text-sm"><strong>Important:</strong> Data removal is irreversible. Once deleted, we cannot recover your data or restore your account.</p>
                </div>
              </section>

              <section id="how-to-request" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">4. How to Submit a Request</h2>
                
                <h3 className="text-xl font-semibold mt-8 mb-3">4.1 Email Request (Recommended)</h3>
                <p className="mb-3">Send an email to <strong><a href="mailto:info@menumitra.com" className="text-primary-600 hover:text-primary-800">info@menumitra.com</a></strong> with the subject line "Data Removal Request" and include:</p>
                <ul className="mb-4 list-disc list-inside space-y-2">
                  <li>Your full name and email address associated with your account</li>
                  <li>Business name (if applicable)</li>
                  <li>Clear statement requesting data removal</li>
                  <li>Reason for the request (optional but helpful)</li>
                  <li>Preferred method of confirmation</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-3">4.2 Phone Request</h3>
                <p className="mb-4">Call us at <strong><a href="tel:+919317818283" className="text-primary-600 hover:text-primary-800">+91 93178 18283</a></strong> during business hours (Monday-Friday, 9 AM - 6 PM IST).</p>

                <h3 className="text-xl font-semibold mt-8 mb-3">4.3 Request Template</h3>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-sm font-mono">
                    Subject: Data Removal Request<br/><br/>
                    Dear MenuMitra Team,<br/><br/>
                    I am writing to request the removal of my personal data from your systems in accordance with my rights under applicable data protection laws.<br/><br/>
                    <strong>Account Details:</strong><br/>
                    Name: [Your Full Name]<br/>
                    Email: [Your Email Address]<br/>
                    Business Name: [If Applicable]<br/><br/>
                    <strong>Request:</strong><br/>
                    Please delete all personal data associated with my account, including but not limited to account information, usage data, and any other personal information you may hold.<br/><br/>
                    Please confirm receipt of this request and provide an estimated timeline for completion.<br/><br/>
                    Thank you for your assistance.<br/><br/>
                    [Your Name]
                  </p>
                </div>
              </section>

              <section id="verification" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">5. Identity Verification</h2>
                <p className="mb-4">To protect your privacy and prevent unauthorized data removal requests, we will verify your identity before processing your request. We may ask for:</p>
                <ul className="mb-4 list-disc list-inside space-y-2">
                  <li>Confirmation of your email address</li>
                  <li>Account details or transaction history</li>
                  <li>Government-issued ID (in certain cases)</li>
                  <li>Additional security questions</li>
                </ul>
                <p className="mb-4">We will only use this information for verification purposes and will not store it longer than necessary.</p>
              </section>

              <section id="response-time" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">6. Response Timeline</h2>
                <ul className="mb-4 list-disc list-inside space-y-2">
                  <li><strong>Initial Response:</strong> Within 72 hours of receiving your request</li>
                  <li><strong>Identity Verification:</strong> Within 5 business days</li>
                  <li><strong>Data Removal Completion:</strong> Within 30 days of verification</li>
                  <li><strong>Confirmation:</strong> Within 5 business days of completion</li>
                </ul>
                <p className="mb-4">Complex requests may take up to 60 days. We will notify you if additional time is needed and explain the reasons for the delay.</p>
              </section>

              <section id="exceptions" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">7. Exceptions and Limitations</h2>
                <p className="mb-4">We may not be able to delete your personal data in certain circumstances, including:</p>
                <ul className="mb-4 list-disc list-inside space-y-2">
                  <li><strong>Legal Obligations:</strong> When we are required to retain data by law</li>
                  <li><strong>Legitimate Business Interests:</strong> For fraud prevention or security purposes</li>
                  <li><strong>Public Interest:</strong> For research or statistical purposes (anonymized)</li>
                  <li><strong>Legal Claims:</strong> When data is needed for legal proceedings</li>
                  <li><strong>Vital Interests:</strong> To protect someone's life or safety</li>
                </ul>
                <p className="mb-4">If we cannot fulfill your request, we will explain the reasons and inform you of your right to lodge a complaint with a supervisory authority.</p>
              </section>

              <section id="business-data" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">8. Business Data vs Personal Data</h2>
                <p className="mb-4">It's important to understand the difference between personal data and business data:</p>
                
                <h3 className="text-xl font-semibold mt-8 mb-3">8.1 Personal Data (Can be removed)</h3>
                <ul className="mb-4 list-disc list-inside space-y-2">
                  <li>Your name, email, phone number</li>
                  <li>Account preferences and settings</li>
                  <li>Usage patterns and analytics</li>
                  <li>Support communications</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-3">8.2 Business Data (May be retained)</h3>
                <ul className="mb-4 list-disc list-inside space-y-2">
                  <li>Menu items and pricing (if anonymized)</li>
                  <li>Aggregate sales data (no personal identifiers)</li>
                  <li>System logs (anonymized)</li>
                  <li>Legal and compliance records</li>
                </ul>
                <p className="mb-4">We will work with you to determine what data can be removed while maintaining business continuity and legal compliance.</p>
              </section>

              <section id="contact" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">9. Contact Information</h2>
                <p className="mb-3">For data removal requests or questions about your data rights:</p>
                <p className="mb-4">
                  <strong>Email:</strong> <a href="mailto:info@menumitra.com" className="text-primary-600 hover:text-primary-800">info@menumitra.com</a><br />
                  <strong>Phone:</strong> <a href="tel:+919317818283" className="text-primary-600 hover:text-primary-800">+91 93178 18283</a><br />
                  <strong>Business Hours:</strong> Monday-Friday, 9 AM - 6 PM IST<br />
                  <strong>Website:</strong> www.menumitra.com
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                  <p className="text-sm"><strong>Data Protection Officer:</strong> For complex data protection matters, you can also contact our Data Protection Officer at the same email address with "DPO" in the subject line.</p>
                </div>
                
                <p className="mb-4"><strong>Thank you</strong> for trusting MenuMitra with your data. We are committed to protecting your privacy and respecting your data rights.</p>
              </section>
            </div>
          </main>
        </div>
      </section>

      <FooterSection />
    </>
  );
}
