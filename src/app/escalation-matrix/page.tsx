import type { Metadata } from "next";
import FooterSection from "@/components/organisms/FooterSection";
import { email, website } from "@/config/contact";

export const metadata: Metadata = {
  title: "Escalation Matrix | MenuMitra",
  description:
    "MenuMitra's Escalation Matrix: Contact information and escalation procedures for support, technical issues, and service requests for our restaurant management platform.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Escalation Matrix | MenuMitra",
    description:
      "MenuMitra's Escalation Matrix: Contact information and escalation procedures for support, technical issues, and service requests for our restaurant management platform.",
    url: "{website.base}/escalation-matrix",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Escalation Matrix | MenuMitra",
    description:
      "MenuMitra's Escalation Matrix: Contact information and escalation procedures for support, technical issues, and service requests for our restaurant management platform.",
  },
  alternates: {
    canonical: "{website.base}/escalation-matrix",
  },
};

export default function EscalationMatrixPage() {
  // Fixed dates for legal compliance
  const effectiveDate = "January 15, 2025";
  const lastUpdatedDate = "January 15, 2025";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Escalation Matrix",
    description:
      "MenuMitra's Escalation Matrix providing contact information and escalation procedures for support, technical issues, and service requests for restaurant management software services.",
    url: "{website.base}/escalation-matrix",
    about: {
      "@type": "WebPage",
      name: "MenuMitra Escalation Matrix",
      description:
        "Escalation matrix and contact procedures for MenuMitra restaurant management software and POS services",
    },
    publisher: {
      "@type": "Organization",
      name: "MenuMitra",
      url: "{website.base}",
      contactPoint: {
        "@type": "ContactPoint",
        email: "{email}",
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
          
          <main className="prose prose-gray max-w-4xl mx-auto px-6 py-12 leading-relaxed">
            {/* JSON-LD Structured Data */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            
            <div className="singlePage pb-10">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-center">
        Escalation Matrix
              </h1>
    </div>
            
            {/* Effective Date */}
            <p className="text-sm text-gray-600 mb-6">
              <strong>Effective Date:</strong> {effectiveDate}<br />
              <strong>Last Updated:</strong> {lastUpdatedDate}
            </p>
            
    <div className="singlePage">
              <p className="mb-4">
                This Escalation Matrix provides clear contact information and escalation procedures for MenuMitra customers to ensure timely resolution of support requests, technical issues, and service concerns.
              </p>

              <section id="contact-information" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">Contact Information</h2>
                <p className="mb-4">
                  For general inquiries, support requests, and technical assistance, please contact us through the following channels:
                </p>
                <ul className="mb-4">
                  <li><strong>Email:</strong> <a href="mailto:{email}" className="text-primary-600 hover:text-primary-800">{email}</a></li>
                  <li><strong>Phone:</strong> <a href="tel:+919317818283" className="text-primary-600 hover:text-primary-800">+91 93178 18283</a></li>
                  <li><strong>Website:</strong> <a href="{website.base}" className="text-primary-600 hover:text-primary-800">menumitra.com</a></li>
                </ul>
              </section>

              <section id="escalation-procedures" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">Escalation Procedures</h2>
                <p className="mb-4">
                  If your issue is not resolved within the expected timeframe or requires immediate attention, please follow the escalation procedures outlined below.
                </p>
              </section>

              <section id="response-times" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">Response Times</h2>
                <p className="mb-4">
                  We are committed to providing timely responses to all customer inquiries. Our standard response times are as follows:
                </p>
                <ul className="mb-4">
                  <li><strong>General Inquiries:</strong> Within 24 hours</li>
                  <li><strong>Technical Support:</strong> Within 4-8 hours</li>
                  <li><strong>Critical Issues:</strong> Within 2 hours</li>
                  <li><strong>Emergency Support:</strong> Immediate response</li>
                </ul>
              </section>

              <section id="escalation-levels" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">Escalation Levels</h2>
                <p className="mb-4">
                  If you need to escalate your concern, please follow these levels:
                </p>
                <ul className="mb-4">
                  <li><strong>Level 1:</strong> Initial contact through standard support channels</li>
                  <li><strong>Level 2:</strong> Escalation to senior support team</li>
                  <li><strong>Level 3:</strong> Management escalation for critical issues</li>
                  <li><strong>Level 4:</strong> Executive escalation for unresolved matters</li>
                </ul>
              </section>
    </div>
          </main>
  </div>
</section>

      <FooterSection />
    </>
  );
}
