import type { Metadata } from "next";
import FooterSection from "@/components/organisms/FooterSection";
import { email, website } from "@/config/contact";

export const metadata: Metadata = {
  title: "Compliance | MenuMitra",
  description:
    "MenuMitra's Compliance Information: Learn about our regulatory compliance, data protection standards, and adherence to industry regulations for our restaurant management services.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Compliance | MenuMitra",
    description:
      "MenuMitra's Compliance Information: Learn about our regulatory compliance, data protection standards, and adherence to industry regulations for our restaurant management services.",
    url: "{website.base}/compliance",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compliance | MenuMitra",
    description:
      "MenuMitra's Compliance Information: Learn about our regulatory compliance, data protection standards, and adherence to industry regulations for our restaurant management services.",
  },
  alternates: {
    canonical: "{website.base}/compliance",
  },
};

export default function CompliancePage() {
  // Fixed dates for legal compliance
  const effectiveDate = "January 15, 2025";
  const lastUpdatedDate = "January 15, 2025";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Compliance",
    description:
      "MenuMitra's Compliance Information explaining regulatory compliance, data protection standards, and adherence to industry regulations for restaurant management software services.",
    url: "{website.base}/compliance",
    about: {
      "@type": "WebPage",
      name: "MenuMitra Compliance",
      description:
        "Compliance information for MenuMitra restaurant management software and POS services",
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
        Compliance
              </h1>
    </div>
            
            {/* Effective Date */}
            <p className="text-sm text-gray-600 mb-6">
              <strong>Effective Date:</strong> {effectiveDate}<br />
              <strong>Last Updated:</strong> {lastUpdatedDate}
            </p>
            
    <div className="singlePage">
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6">
                  <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Work in Progress</h2>
                <p className="text-gray-600 max-w-md mx-auto">
                  Our compliance information is currently being updated. Please check back soon for detailed information about our regulatory compliance and data protection standards.
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  For immediate assistance, please contact us at <a href="mailto:{email}" className="text-primary-600 hover:text-primary-800">{email}</a>
                </p>
              </div>
    </div>
          </main>
  </div>
</section>

      <FooterSection />
    </>
  );
}
