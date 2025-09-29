import React from 'react';
import FooterSection from '@/components/organisms/FooterSection';
import BookDemoForm from '@/components/forms/BookDemoForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import { email, phone, location, getEmailLink, getPhoneLink } from '@/config/contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact MenuMitra - Get Help Desk Assistance for Restaurant Digital Menu Solutions",
  description: "Ready to transform your restaurant with MenuMitra's AI-powered digital menu platform? Contact our help desk for assistance. Get in touch with our team to learn how MenuMitra can boost your sales and streamline operations.",
  keywords: [
    "contact MenuMitra",
    "restaurant help desk",
    "digital menu support",
    "QR code menu assistance",
    "restaurant technology support",
    "MenuMitra contact",
    "restaurant software help",
    "menu management support",
    "restaurant automation help",
    "contactless dining support",
    "restaurant digital transformation",
    "menu platform support",
    "restaurant tech assistance",
    "AI menu support",
    "restaurant management help"
  ],
  
  openGraph: {
    title: "Contact MenuMitra - Get Help Desk Assistance for Restaurant Digital Menu Solutions",
    description: "Ready to transform your restaurant with MenuMitra's AI-powered digital menu platform? Contact our help desk for assistance and learn how to boost your sales.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact MenuMitra - Restaurant Digital Menu Platform Support',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Contact MenuMitra - Get Help Desk Assistance for Restaurant Digital Menu Solutions",
    description: "Ready to transform your restaurant with MenuMitra's AI-powered digital menu platform? Contact our help desk for assistance.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'contact:phone': '+91 93178 18283',
    'contact:email': 'menumitra.info@gmail.com',
    'contact:address': 'Muktangan English School & Jr College, office No. 6, 2 Floor manogat, Parvati, Pune, Maharashtra 411009',
    'business:contact_data:phone_number': '+91 93178 18283',
    'business:contact_data:email': 'menumitra.info@gmail.com',
    'business:contact_data:street_address': 'Muktangan English School & Jr College, office No. 6, 2 Floor manogat, Parvati',
    'business:contact_data:locality': 'Pune',
    'business:contact_data:region': 'Maharashtra',
    'business:contact_data:postal_code': '411009',
    'business:contact_data:country_name': 'India',
    'page:type': 'contact',
    'page:purpose': 'customer_support',
    'page:action': 'get_help',
    'support:available': '24/7',
    'support:methods': 'phone, email, contact_form',
    'support:response_time': 'within_24_hours',
    'cta:primary': 'Book Now',
    'cta:secondary': 'Get in touch',
    'form:fields': 'full_name, mobile_number, outlet_name, outlet_type, city, email',
    'form:purpose': 'restaurant_demo_booking',
  },
};

const ContactPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero overflow-hidden relative max-lg:pt-150 pt-[240px] pb-[60px] z-40">
        <div className="container">
          <div
            className="max-w-[948px] mx-auto text-center"
            data-aos="fade-up"
            data-aos-offset={50}
            data-aos-duration={500}
            data-aos-once="true"
          >
            <p className="mb-4 font-medium uppercase">Get in touch</p>
            <h1 className="max-lg:mb-10 mb-10">
              Contact our help desk for assistance
            </h1>
            <p className="max-lg:mb-10 mb-12 max-w-[590px] mx-auto">
              Ready to transform your restaurant with our AI-powered digital menu platform? 
              Get in touch with our team to learn more about how MenuMitra can boost your sales and streamline your operations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="pb-150 relative">
        <div className="absolute left-1/2 -top-[250px] w-full h-[550px] -translate-x-1/2 bg-cover bg-[url('/images/hero-gradient.png')] bg-no-repeat bg-center opacity-70 md:hidden -z-10"></div>
        <div className="container">
          <div className="relative z-10">
            <div className="absolute left-1/2 top-20 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10 max-md:hidden">
              <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/20 blur-[145px]"></div>
              <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/25 -ml-[170px] max-md:ml-0 blur-[145px]"></div>
              <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/20 -ml-[170px] max-md:ml-0 blur-[145px]"></div>
            </div>
            <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8">
              {/* Address Card */}
              <div className="bg-white shadow-box rounded-medium p-2.5" data-aos="fade-up" data-aos-offset={50} data-aos-duration={500} data-aos-once="true">
                <div className="border border-dashed rounded border-gray-100 p-10 h-full max-lg:p-5 text-center flex flex-col justify-center">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <MapPin className="w-10 h-10 text-paragraph" />
                    <h3 className="mb-0">Our Address</h3>
                  </div>
                  <p className="text-center">{location}</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white shadow-box rounded-medium p-2.5" data-aos="fade-up" data-aos-offset={50} data-aos-duration={500} data-aos-delay="100" data-aos-once="true">
                <div className="border border-dashed rounded border-gray-100 p-10 h-full max-lg:p-5 text-center flex flex-col justify-center">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <Mail className="w-10 h-10 text-paragraph" />
                    <h3 className="mb-0">Email Us</h3>
                  </div>
                  <a href={getEmailLink()} className="text-center hover:underline">{email}</a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-white shadow-box rounded-medium p-2.5" data-aos="fade-up" data-aos-offset={50} data-aos-duration={500} data-aos-delay="200" data-aos-once="true">
                <div className="border border-dashed rounded border-gray-100 p-10 h-full max-lg:p-5 text-center flex flex-col justify-center">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <Phone className="w-10 h-10 text-paragraph" />
                    <h3 className="mb-0">Call Us</h3>
                  </div>
                  <a href={getPhoneLink()} className="text-center hover:underline">{phone}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="mb-150 relative">
        <div className="absolute left-1/2 w-full h-[550px] -translate-x-1/2 bg-cover bg-[url('/images/hero-gradient.png')] bg-no-repeat bg-center opacity-70 md:hidden -z-10"></div>
        <div className="container relative" data-aos="fade-up" data-aos-offset={50} data-aos-duration={500} data-aos-once="true">
          <div className="mb-12 text-center max-w-[475px] mx-auto">
            <p className="section-tagline">Contact</p>
            <h2>Let us know how we can assist you</h2>
          </div>
          
          <BookDemoForm />
        </div>
      </section>

      <FooterSection />
    </>
  );
};

export default ContactPage;
