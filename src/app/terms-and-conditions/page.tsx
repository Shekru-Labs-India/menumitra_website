import type { Metadata } from "next";
import FooterSection from "@/components/organisms/FooterSection";

export const metadata: Metadata = {
  title: "Terms and Conditions | MenuMitra",
  description:
    "MenuMitra's Terms and Conditions: Review our service agreements, user policies, and legal requirements for our restaurant management software and POS services.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms and Conditions | MenuMitra",
    description:
      "MenuMitra's Terms and Conditions: Review our service agreements, user policies, and legal requirements for our restaurant management software and POS services.",
    url: "https://menumitra.com/terms-and-conditions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions | MenuMitra",
    description:
      "MenuMitra's Terms and Conditions: Review our service agreements, user policies, and legal requirements for our restaurant management software and POS services.",
  },
  alternates: {
    canonical: "https://menumitra.com/terms-and-conditions",
  },
};

export default function TermsConditionsPage() {
  // Fixed dates for legal compliance
  const effectiveDate = "January 15, 2025";
  const lastUpdatedDate = "September 25, 2025";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms and Conditions",
    description:
      "MenuMitra's Terms and Conditions explaining service agreements, user policies, and legal requirements for restaurant management software services.",
    url: "https://menumitra.com/terms-and-conditions",
    about: {
      "@type": "TermsOfService",
      name: "MenuMitra Terms and Conditions",
      description:
        "Terms and conditions for MenuMitra restaurant management software and POS services",
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
          
          <main className="prose prose-gray max-w-4xl mx-auto px-6 py-12 leading-relaxed">
            {/* JSON-LD Structured Data */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            
            <div className="singlePage pb-10">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-center">
                Terms and Conditions
              </h1>
            </div>
            
            {/* Effective Date */}
            <p className="text-sm text-gray-600 mb-6">
              <strong>Effective Date:</strong> {effectiveDate}<br />
              <strong>Last Updated:</strong> {lastUpdatedDate}
            </p>
            
            <div className="singlePage">
              <p className="mb-4">
                To provide comprehensive restaurant management solutions, we have created certain add-ons and services which restaurateurs can avail by paying through our online Payment Gateway. Below are the Terms and Conditions for the same.
              </p>

              {/* Table of Contents */}
              <nav aria-label="Table of Contents" className="mb-8 border-l-4 border-primary-500 pl-4 text-sm space-y-1">
                <h2 className="text-lg font-semibold mb-3">Table of Contents</h2>
                <a href="#introduction" className="block hover:text-primary-600">1. Introduction</a>
                <a href="#definitions" className="block hover:text-primary-600">2. Definitions</a>
                <a href="#conduct" className="block hover:text-primary-600">3. General Rules Relating To Conduct</a>
                <a href="#intellectual" className="block hover:text-primary-600">4. Intellectual Property Rights And Content</a>
                <a href="#trial" className="block hover:text-primary-600">5. Free Trial And Fees</a>
                <a href="#privacy" className="block hover:text-primary-600">6. MenuMitra Privacy Policy</a>
                <a href="#disclaimer" className="block hover:text-primary-600">7. Disclaimer / Liability</a>
                <a href="#suspension" className="block hover:text-primary-600">8. Service Suspension</a>
                <a href="#advertisers" className="block hover:text-primary-600">9. Advertisers In The App</a>
                <a href="#security" className="block hover:text-primary-600">10. Data Security and Backup</a>
                <a href="#restaurant" className="block hover:text-primary-600">11. Restaurant-Specific Terms</a>
                <a href="#general" className="block hover:text-primary-600">12. General</a>
                <a href="#contact" className="block hover:text-primary-600">13. Contact Information</a>
              </nav>

              <section id="introduction" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">1. Introduction</h2>
                <ul className="mb-4">
                  <li>These Terms of Service (the "Terms") are intended to make you aware of your legal rights and responsibilities with respect to your access to and use of the website at www.menumitra.com (the "Site") and any related mobile or software applications whether existing now or in the future ("the App") of MenuMitra ("MenuMitra") or "We" or "Us").</li>
                  <li>By downloading or otherwise accessing the App you agree to be bound by the following terms and conditions ("Terms"), privacy policy and License Agreement. If you have any queries about the App or these Terms, you can contact Us by any of the means set out in paragraph 13 of these Terms. If you do not agree with these Terms, you should stop using the App immediately.</li>
                </ul>
              </section>

              <section id="definitions" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">2. Definitions</h2>
                <ul className="mb-4">
                  <li><strong>"Services"</strong> will include business applications like POS management, staff management mobile app, customer management mobile app, inventory management, analytics dashboard, and other restaurant management tools, which are integrated to MenuMitra's comprehensive restaurant management platform.</li>
                  <li><strong>"Content"</strong> means the content that MenuMitra creates and makes available in connection with the Services including, but not limited to, visual interfaces, interactive features, graphics, design, compilation, computer code, products, software, functionalities, aggregate ratings, reports and other usage-related data in connection with activities associated with your account and all other elements and components of the Services excluding Your Content and third party content. It will include (but is not limited to) images, photos, audio, video, and all other forms of information or data.</li>
                  <li><strong>"Your content"</strong> or <strong>"User Content"</strong> means content that you upload, share or transmit to, through or in connection with the Services, such as menu items, pricing, customer information, order data, staff records, inventory data, restaurant analytics, and any other materials that you display or are displayed in your account.</li>
                </ul>
              </section>

              <section id="conduct" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">3. General Rules Relating To Conduct</h2>
                <ul className="mb-4">
                  <li>The App is made available for your own, personal and business use. We grant you a personal, limited, nonexclusive and non-transferable license to access and use the Services only as expressly permitted in these Terms.</li>
                  <li>You shall not use the Services for any illegal purpose or in any manner inconsistent with these Terms.</li>
                  <li>When you use the App you must comply with all applicable laws of India and with any applicable international laws (together referred to as "Applicable Laws").</li>
                  <li>You agree that when using the App you will comply with all Applicable Laws and these Terms. In particular, but without limitation, you agree not to:  
                    <ul className="mt-2 ml-4">
                      <li>Use the App in any unlawful manner or in a manner which promotes or encourages illegal activity including (without limitation) copyright infringement; or</li>
                      <li>Attempt to gain unauthorized access to the App or any networks, servers or computer systems connected to the App; or</li>
                      <li>Modify, adapt, translate or reverse engineer any part of the App or re-format or frame any portion of the pages comprising the App, save to the extent expressly permitted by these Terms or by law.</li>
                    </ul>
                  </li>
                  <li>You agree to indemnify MenuMitra and its group companies in full and on demand from and against any loss, damage, costs or expenses which they suffer or incur directly or indirectly as a result of your use of the App otherwise than in accordance with these Terms or Applicable Laws.</li>
                </ul>
              </section>

              <section id="intellectual" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">4. Intellectual Property Rights And Content</h2>
                <ul className="mb-4">
                  <li>We are the sole and exclusive copyright owners of the Services and our Content. We also exclusively own the copyrights, trademarks, service marks, logos, trade names, trade dress and other intellectual and proprietary rights associated with the Services and Our Content. All rights are reserved.</li>
                  <li>You acknowledge that the Services contain original works and have been developed, compiled, prepared, revised, selected, and arranged by us and others through the application of methods and standards of judgment developed and applied through the expenditure of substantial time, effort, and money and constitutes valuable intellectual property of us and such others.</li>
                  <li>To the fullest extent permitted by applicable law, we neither warrant nor represent that your use of materials displayed on the Services will not infringe rights of third parties not owned by or affiliated with us. You agree to immediately notify us upon becoming aware of any claim that the Services infringe upon any copyright trademark, or other contractual, intellectual, statutory, or common law right.</li>
                  <li>You further acknowledge that the Services may contain information which is designated as confidential by MenuMitra and that you shall not disclose such information without MenuMitra's prior written consent.</li>
                  <li>Except as otherwise expressly granted to you in writing, we do not grant you any other express or implied right or license to the Services, our Content or our Intellectual Property Rights.</li>
                  <li>By submitting Your Content you hereby irrevocably grant us a perpetual, irrevocable, nonexclusive, royalty-free, right to use Your Content for any purpose including API partnerships with third parties and in any media existing now or in future. You irrevocably waive, and cause to be waived, any claims and assertions of moral rights or attribution with respect to Your Content brought against us, by any third party services and our and their users.</li>
                  <li>You are responsible for Your Content. You represent and warrant that  
                    <ul className="mt-2 ml-4">
                      <li>Your Content was not submitted via the use of any automated process such as a script bot;</li>
                      <li>Use of Your Content by us, third party services, and our and their third party users will not violate or infringe any rights of yours or any third party; and</li>
                      <li>Your Content does not violate the Terms or any applicable laws.</li>
                    </ul>
                  </li>
                  <li>You assume all risks associated with Your Content, including anyone's reliance on its quality, accuracy, or reliability, or any disclosure by you of information in Your Content that makes you personally identifiable.</li>
                </ul>
              </section>

              <section id="trial" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">5. Free Trial And Fees</h2>
                <ul className="mb-4">
                  <li>You may start using our App with a free trial. The free trial period of the App lasts for 14 days, or as otherwise specified during sign-up and is intended to allow you to try the service. You will be notified during sign-up whether you are eligible for a free trial.</li>
                  <li>We will bill your Payment Method for your subscription fee at the end of the free trial period unless you cancel your subscription prior to the end of the free trial period. You will not receive a notice from us that your paid membership has begun.</li>
                  <li>You may cancel your membership at any time. However, we do not provide refunds or credits for partial membership periods.</li>
                  <li>We may change our service plans and the price of our Services from time to time. We will notify you of any price changes at least 30 days in advance.</li>
                </ul>
              </section>

              <section id="privacy" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">6. MenuMitra Privacy Policy</h2>
                <ul className="mb-4">
                  <li>We take your privacy very seriously. MenuMitra will only use your personal information in accordance with the terms of our privacy policy. By using the App you acknowledge and agree that you have read and accept the terms of our privacy policy and these Terms.</li>
                </ul>
              </section>

              <section id="disclaimer" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">7. Disclaimer / Liability</h2>
                <ul className="mb-4">
                  <li>USE OF THE APP IS AT YOUR OWN RISK. THE APP IS PROVIDED ON AN "AS IS" BASIS. TO THE MAXIMUM EXTENT PERMITTED BY LAW: (A) MENUMITRA DISCLAIMS ALL LIABILITY WHATSOEVER, WHETHER ARISING IN CONTRACT, TORT (INCLUDING NEGLIGENCE) OR OTHERWISE IN RELATION TO THE APP; AND (B) ALL IMPLIED WARRANTIES, TERMS AND CONDITIONS RELATING TO THE APP (WHETHER IMPLIED BY STATUE, COMMON LAW OR OTHERWISE), INCLUDING (WITHOUT LIMITATION) ANY WARRANTY, TERM OR CONDITION AS TO ACCURACY, COMPLETENESS, SATISFACTORY QUALITY, PERFORMANCE, FITNESS FOR PURPOSE OR ANY SPECIAL PURPOSE, AVAILABILITY, NON INFRINGEMENT, INFORMATION ACCURACY, AS BETWEEN MENUMITRA AND YOU, ARE HEREBY EXCLUDED. IN PARTICULAR, BUT WITHOUT PREJUDICE TO THE FOREGOING, WE ACCEPT NO RESPONSIBILITY FOR ANY TECHNICAL FAILURE OF THE INTERNET AND/OR THE APP; OR ANY DAMAGE OR INJURY TO USERS OR THEIR EQUIPMENT AS A RESULT OF OR RELATING TO THEIR USE OF THE APP. YOUR STATUTORY RIGHTS ARE NOT AFFECTED.</li>
                  <li>MenuMitra will not be liable, in contract, tort (including, without limitation, negligence), under statute or otherwise, as a result of or in connection with the App, for any:  
                    <ul className="mt-2 ml-4">
                      <li>economic loss (including, without limitation, loss of revenues, profits, contracts, business or anticipated savings); or</li>
                      <li>loss of goodwill or reputation; or</li>
                      <li>special or indirect or consequential loss.</li>
                    </ul>
                  </li>
                  <li>IF MENUMITRA IS LIABLE TO YOU DIRECTLY OR INDIRECTLY IN RELATION TO THE APP, THAT LIABILITY (HOWSOEVER ARISING) SHALL BE LIMITED TO THE SUMS PAID BY YOU UPON PURCHASING THE APP, OR ANY IN-APP SPEND, INCLUDING SUBSCRIPTIONS.</li>
                </ul>
              </section>

              <section id="suspension" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">8. Service Suspension</h2>
                <ul className="mb-4">
                  <li>MenuMitra reserves the right to suspend or cease providing any services relating to the apps published by it, with or without notice, and shall have no liability or responsibility to you in any manner whatsoever if it chooses to do so.</li>
                </ul>
              </section>

              <section id="advertisers" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">9. Advertisers In The App</h2>
                <ul className="mb-4">
                  <li>We accept no responsibility for advertisements contained within the App. If you agree to purchase goods and/or services from any third party who advertises in the App, you do so at your own risk. The advertiser, not MenuMitra, is responsible for such goods and/or services and if you have any queries or complaints in relation to them, your only recourse is against the advertiser.</li>
                </ul>
              </section>

              <section id="security" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">10. Data Security and Backup</h2>
                <ul className="mb-4">
                  <li>MenuMitra implements industry-standard security measures to protect your data, including encryption in transit and at rest.</li>
                  <li>We maintain regular backups of your data, but you are responsible for maintaining your own backups of critical business data.</li>
                  <li>In the event of data loss, MenuMitra's liability is limited to the cost of restoring data from our most recent backup.</li>
                </ul>
              </section>

              <section id="restaurant" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">11. Restaurant-Specific Terms</h2>
                <ul className="mb-4">
                  <li>You are responsible for ensuring compliance with all local health and safety regulations in your jurisdiction.</li>
                  <li>MenuMitra provides tools for restaurant management but does not guarantee compliance with any specific regulations.</li>
                  <li>You are responsible for maintaining accurate menu information, pricing, and inventory data.</li>
                  <li>Any errors in menu display, pricing, or order processing are your responsibility to correct.</li>
                </ul>
              </section>

              <section id="general" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">12. General</h2>
                <ul className="mb-4">
                  <li>These Terms (as amended from time to time) constitute the entire agreement between you and MenuMitra concerning your use of the App.</li>
                  <li>MenuMitra reserves the right to update these Terms from time to time. If it does so, the updated version will be effective immediately, and the current Terms are available through a link in the App to this page. You are responsible for regularly reviewing these Terms so that you are aware of any changes to them and you will be bound by the new policy upon your continued use of the App. No other variation to these Terms shall be effective unless in writing and signed by an authorized representative on behalf of MenuMitra.</li>
                  <li>We will send you information relating to your account (e.g. payment authorizations, invoices, changes in password or Payment Method, confirmation messages, notices) in electronic form only.</li>
                  <li>These Terms shall be governed by and construed in accordance with Indian laws and you agree to submit to the exclusive jurisdiction of the courts in India.</li>
                  <li>If any provision(s) of these Terms is held by a court of competent jurisdiction to be invalid or unenforceable, then such provision(s) shall be construed, as nearly as possible, to reflect the intentions of the parties (as reflected in the provision(s)) and all other provisions shall remain in full force and effect.</li>
                  <li>MenuMitra's failure to exercise or enforce any right or provision of these Terms shall not constitute a waiver of such right or provision unless acknowledged and agreed to by MenuMitra in writing.</li>
                </ul>
              </section>

              <section id="contact" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">13. Contact Information</h2>
                <p className="mb-3">For questions, requests or complaints regarding these Terms, contact:</p>
                <p className="mb-4">
                  <strong>Email:</strong> <a href="mailto:info@menumitra.com" className="text-primary-600 hover:text-primary-800">info@menumitra.com</a><br />
                  <strong>Phone:</strong> <a href="tel:+919317818283" className="text-primary-600 hover:text-primary-800">+91 93178 18283</a><br />
                  <strong>Website:</strong> www.menumitra.com
                </p>
                <p className="mb-4"><strong>Thank you</strong> for choosing MenuMitra for your restaurant management needs. We are committed to providing you with excellent service while maintaining the highest standards of data security and user experience.</p>
              </section>
            </div>
          </main>
        </div>
      </section>

      <FooterSection />
    </>
  );
}
