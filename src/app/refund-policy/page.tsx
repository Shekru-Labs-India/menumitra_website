import type { Metadata } from "next";
import FooterSection from "@/components/organisms/FooterSection";
import { email, website } from "@/config/contact";

export const metadata: Metadata = {
  title: "Refund Policy | MenuMitra",
  description:
    "MenuMitra's Refund Policy: Learn about our refund eligibility, procedures, and billing policies for our restaurant management services.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Refund Policy | MenuMitra",
    description:
      "MenuMitra's Refund Policy: Learn about our refund eligibility, procedures, and billing policies for our restaurant management services.",
    url: "{website.base}/refund-policy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund Policy | MenuMitra",
    description:
      "MenuMitra's Refund Policy: Learn about our refund eligibility, procedures, and billing policies for our restaurant management services.",
  },
  alternates: {
    canonical: "{website.base}/refund-policy",
  },
};

export default function RefundPolicyPage() {
  // Fixed dates for legal compliance
  const effectiveDate = "June 03, 2021";
  const lastUpdatedDate = "June 03, 2021";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Refund Policy",
    description:
      "MenuMitra's Refund Policy explaining refund eligibility, procedures, and billing policies for restaurant management software services.",
    url: "{website.base}/refund-policy",
    about: {
      "@type": "WebPage",
      name: "MenuMitra Refund Policy",
      description:
        "Refund policy for MenuMitra restaurant management software and POS services",
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
        Refund Policy
              </h1>
    </div>
            
            {/* Effective Date */}
            <p className="text-sm text-gray-600 mb-6">
              <strong>Effective Date:</strong> {effectiveDate}<br />
              <strong>Last Updated:</strong> {lastUpdatedDate}
            </p>
            
    <div className="singlePage">
              <p className="mb-4">
                <strong>(FOR OUTSIDE INDIA CUSTOMERS)</strong>
              </p>
              <p className="mb-4">
                We, MenuMitra ("We", "Us", "Our", "Company"), is in the business of providing a cloud-based point of sales software application under the brand name "MenuMitra" for restaurants together with optionally integrated services such as mobile or card payments, inventory management, deals and discounts, ordering and delivery apps, table booking apps, suppliers' marketplace, analytics apps, etc. using a programmable API architecture. The Company through such point of sale software application and websites (together referred to as "MenuMitra Platforms") also provides end to end integration of services for restaurant management to various restaurants and food outlets. The Company has created and owns the MenuMitra Platforms and licensed the use of the same by way of various subscription model for a Subscription Fee.
              </p>
              <p className="mb-4">
                The subscription to the MenuMitra POS Platform and other value added services("MenuMitra Subscription") offered by us is subject to our Terms of Services that is agreed by you (or anyone who accesses and uses the MenuMitra Platforms shall be referred to as "You", "Your" or "User" as the context may require) at the time of subscription. You may select a MenuMitra subscription plan of your choice and make payment as per the required payment method(s) available for different MenuMitra subscription plans.
              </p>

              <section id="fees" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">Subscription Fees</h2>
                <p className="mb-4">
                  You are required to pay subscription fee as per the MenuMitra Subscription plan subscribed by you ("Subscription Fee"). The Subscription Fee for MenuMitra Subscription as stated in various subscription plans is generally non-refundable, except as expressly set forth in this Refund Policy. Taxes may apply on the subscription fee. Your paid MenuMitra Subscription will be activated only upon successful payment of the Subscription Fee made through the MenuMitra Platforms as per the applicable subscription plan chosen by you.
                </p>
              </section>

              <section id="refund-eligibility" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">Refund Eligibility</h2>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">15-Day Money-Back Guarantee</h3>
                <p className="mb-4">
                  If you cancel your paid MenuMitra Subscription within 15 business days of signing up for such paid MenuMitra Subscription, we will issue a credit note to you and refund your full Subscription Fee, provided that we may charge you (or withhold from your refund) the value of MenuMitra benefits used by you and your account during this 15 business day period by issuing a partial credit note to you.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">Annual Subscription Refunds</h3>
                <p className="mb-4">
                  If you cancel your annual MenuMitra Subscription at any other time, we will raise a credit note and refund your Subscription Fee only to the extent of your usage of the subscription plan of our MenuMitra Platform since the payment of the Subscription Fee. This means you will receive a prorated refund based on the unused portion of your annual subscription.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">Monthly Subscription Refunds</h3>
                <p className="mb-4">
                  If you cancel your monthly MenuMitra Subscription, the subscription fee will be refunded only if you have not made any usage or taken advantage of any of the MenuMitra benefits since payment of your Subscription Fee. This means no usage must have occurred for a monthly subscription to be eligible for a refund.
                </p>
              </section>

              <section id="refund-process" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">Refund Process</h2>
                <p className="mb-4">
                  <strong>Processing Time:</strong> It will take 30 days to process a refund to be credited to the customer's bank account.
                </p>
                <p className="mb-4">
                  <strong>Refund Method:</strong> Refunds will be processed using the same payment method used for the original transaction. If this is not possible, we will contact you to arrange an alternative refund method.
                </p>
                <p className="mb-4">
                  <strong>Credit Notes:</strong> All refunds are processed through credit notes issued by MenuMitra. The credit note will detail the refund amount and any deductions made for usage.
                </p>
              </section>

              <section id="non-refundable" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">Non-Refundable Items</h2>
                <p className="mb-4">
                  The following items are generally non-refundable:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Subscription fees for services that have been used beyond the 15-day trial period</li>
                  <li>Monthly subscriptions where usage has occurred</li>
                  <li>Third-party integrations or add-on services</li>
                  <li>Custom development or implementation services</li>
                  <li>Training or consultation services that have been delivered</li>
                </ul>
              </section>

              <section id="termination-refunds" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">Refunds for Termination by MenuMitra</h2>
                <p className="mb-4">
                  If we terminate your MenuMitra Subscription at our discretion without notice for reasons other than violation of terms, we will issue a credit note to you and give a prorated refund based on the remaining term of your then subscription term, whether annual or monthly.
                </p>
                <p className="mb-4">
                  However, we will not give any refund for termination related to conduct that we determine, in our discretion, violates the Terms of Service or any applicable law, involves fraud or misuse of the MenuMitra Subscription, or is harmful to our interests or another user.
                </p>
              </section>

              <section id="limitation" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">Limitation of Liability</h2>
                <p className="mb-4">
                  IN ADDITION TO OTHER LIMITATIONS AND EXCLUSIONS IN CONDITIONS OF USE AND SALE, IN NO EVENT WILL WE OR OUR DIRECTORS, OFFICERS, EMPLOYEES, AGENTS OR OTHER REPRESENTATIVES BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY OTHER DAMAGES OF ANY KIND, ARISING OUT OF OR RELATED TO MENUMITRA PLATFORMS. OUR TOTAL LIABILITY, WHETHER IN CONTRACT, WARRANTY, TORT (INCLUDING NEGLIGENCE) OR OTHERWISE, WILL NOT EXCEED THE LAST SUBSCRIPTION FEE YOU PAID. THESE EXCLUSIONS AND LIMITATIONS OF LIABILITY WILL APPLY TO THE FULLEST EXTENT PERMITTED BY LAW AND WILL SURVIVE CANCELLATION OR TERMINATION OF YOUR MENUMITRA SUBSCRIPTION.
                </p>
              </section>

              <section id="contact" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">Contact Information</h2>
                <p className="mb-4">
                  If you have any questions about this Refund Policy or need assistance with a refund request, please contact us:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Email: {email}</li>
                  <li>Phone: +91 93178 18283</li>
                  <li>Through your MenuMitra account dashboard</li>
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
