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
          
      {/* Main Content */}
      <section className="relative pt-[160px] pb-[160px] max-md:pt-150 overflow-hidden">
        
      <div className="container mx-auto text-center py-20">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-dark">
            Grievance Escalation Matrix
          </h1>
    </div>
        <div className="container mx-auto max-w-6xl px-6">
            {/* JSON-LD Structured Data */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-gray-800 mb-4 leading-relaxed">
              This Escalation Matrix provides clear contact information and escalation procedures for MenuMitra customers to ensure timely resolution of support requests, technical issues, and service concerns.
            </p>
            <p className="text-gray-800 mb-4 leading-relaxed">
              For any grievances or issues related to our services, please follow the escalation matrix below. We are committed to resolving all customer concerns in a timely and efficient manner.
            </p>
            <p className="text-gray-800 mb-6 leading-relaxed">
              All official communication should be directed through the channels mentioned in this matrix. Please ensure you provide detailed information about your issue to help us assist you better.
            </p>
          </div>

          {/* Escalation Matrix Table */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Escalation Matrix :</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 bg-white">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="border border-gray-00 p-4 text-left font-semibold text-white">Escalation Level</th>
                    <th className="border border-gray-300 p-4 text-left font-semibold text-white">Team Responsible</th>
                    <th className="border border-gray-300 p-4 text-left font-semibold text-white">Time to Respond</th>
                    <th className="border border-gray-300 p-4 text-left font-semibold text-white">Time to Resolve</th>
                    <th className="border border-gray-300 p-4 text-left font-semibold text-white">Escalation Criteria</th>
                    <th className="border border-gray-300 p-4 text-left font-semibold text-white">Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-4 text-gray-800">L1 (Basic Support)</td>
                    <td className="border border-gray-300 p-4 text-gray-800">Support Agents</td>
                    <td className="border border-gray-300 p-4 text-gray-800">1 Hour</td>
                    <td className="border border-gray-300 p-4 text-gray-800">2 Hours</td>
                    <td className="border border-gray-300 p-4 text-gray-800">First contact, common issues.</td>
                    <td className="border border-gray-300 p-4 text-gray-800">
                      <a href="mailto:menumitra.info@gmail.com" className="text-primary-600 hover:text-primary-800">
                        menumitra.info@gmail.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4 text-gray-800">L2 (Escalation Sr. Manager)</td>
                    <td className="border border-gray-300 p-4 text-gray-800">Senior Manager</td>
                    <td className="border border-gray-300 p-4 text-gray-800">2 Hours</td>
                    <td className="border border-gray-300 p-4 text-gray-800">4 Hours</td>
                    <td className="border border-gray-300 p-4 text-gray-800">If not resolved by the L1 within TAT.</td>
                    <td className="border border-gray-300 p-4 text-gray-800">
                      <a href="mailto:menumitra.info@gmail.com" className="text-primary-600 hover:text-primary-800">
                        menumitra.info@gmail.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4 text-gray-800">L3 (VP)</td>
                    <td className="border border-gray-300 p-4 text-gray-800">VP</td>
                    <td className="border border-gray-300 p-4 text-gray-800">4 Hours</td>
                    <td className="border border-gray-300 p-4 text-gray-800">6 Hours</td>
                    <td className="border border-gray-300 p-4 text-gray-800">If not resolved by L1 / L2 within time.</td>
                    <td className="border border-gray-300 p-4 text-gray-800">
                      <a href="mailto:menumitra.info@gmail.com" className="text-primary-600 hover:text-primary-800">
                        menumitra.info@gmail.com
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Important Information */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Important information :</h2>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Tasks are defined as any issue, query, or request raised by the customer that requires resolution or response from MenuMitra.</li>
              <li>Escalation will be triggered if the issue is not resolved within the specified time to resolve (TTR) mentioned in the matrix above.</li>
              <li>Time to respond (TTR) is calculated from the time the issue is logged in our system until the first response is provided to the customer.</li>
              <li>Time to resolve (TTR) is the total time taken to completely resolve the customer&apos;s issue or provide a satisfactory solution.</li>
            </ul>
    </div>
  </div>
</section>

      <FooterSection />
    </>
  );
}
