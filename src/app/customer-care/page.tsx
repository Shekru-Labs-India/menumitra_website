import React from 'react';
import FooterSection from '@/components/organisms/FooterSection';
import BookDemoForm from '@/components/forms/BookDemoForm';
import { Mail, Phone, Clock, MessageCircle, HelpCircle, Shield, CheckCircle } from 'lucide-react';
import { email, phone, getEmailLink, getPhoneLink } from '@/config/contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Customer Care - MenuMitra Support Center",
  description: "Get comprehensive customer support for MenuMitra's restaurant management platform. Find help with digital menus, billing, inventory, and technical issues. Our dedicated support team is here to assist you 24/7.",
  keywords: [
    "customer care",
    "MenuMitra support",
    "restaurant software help",
    "digital menu support",
    "technical support",
    "customer service",
    "help desk",
    "restaurant management support",
    "menu platform assistance",
    "billing support",
    "inventory help",
    "QR code menu support"
  ],
  
  openGraph: {
    title: "Customer Care - MenuMitra Support Center",
    description: "Get comprehensive customer support for MenuMitra's restaurant management platform. Our dedicated support team is here to assist you 24/7.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Customer Care - Restaurant Management Support',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Customer Care - MenuMitra Support Center",
    description: "Get comprehensive customer support for MenuMitra's restaurant management platform. Our dedicated support team is here to assist you 24/7.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
};

const CustomerCarePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero overflow-hidden relative max-lg:pt-150 pt-[240px] pb-[60px] z-40">
        <div className="container">
          <div className="max-w-[948px] mx-auto text-center">
            <p className="mb-4 font-medium uppercase">Customer Care</p>
            <h1 className="max-lg:mb-10 mb-10">
              We're here to help you succeed
            </h1>
            <p className="max-lg:mb-10 mb-12 max-w-[590px] mx-auto">
              Our dedicated customer care team is committed to providing you with exceptional support. 
              Whether you need help with setup, training, or technical issues, we're just a call or message away.
            </p>
          </div>
        </div>
      </section>

      {/* Support Options */}
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
              {/* Phone Support */}
              <div className="bg-white shadow-box rounded-medium p-2.5">
                <div className="border border-dashed rounded border-gray-100 p-10 h-full max-lg:p-5 text-center flex flex-col justify-center">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <Phone className="w-10 h-10 text-paragraph" />
                    <h3 className="mb-0">Phone Support</h3>
                  </div>
                  <p className="mb-4">Call us for immediate assistance</p>
                  <a href={getPhoneLink()} className="text-primary hover:underline font-semibold">{phone}</a>
                  <p className="text-sm text-gray-600 mt-2">Available 24/7</p>
                </div>
              </div>

              {/* Email Support */}
              <div className="bg-white shadow-box rounded-medium p-2.5">
                <div className="border border-dashed rounded border-gray-100 p-10 h-full max-lg:p-5 text-center flex flex-col justify-center">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <Mail className="w-10 h-10 text-paragraph" />
                    <h3 className="mb-0">Email Support</h3>
                  </div>
                  <p className="mb-4">Send us your queries</p>
                  <a href={getEmailLink()} className="text-primary hover:underline font-semibold">{email}</a>
                  <p className="text-sm text-gray-600 mt-2">Response within 24 hours</p>
                </div>
              </div>

              {/* Live Chat */}
              <div className="bg-white shadow-box rounded-medium p-2.5">
                <div className="border border-dashed rounded border-gray-100 p-10 h-full max-lg:p-5 text-center flex flex-col justify-center">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <MessageCircle className="w-10 h-10 text-paragraph" />
                    <h3 className="mb-0">Live Chat</h3>
                  </div>
                  <p className="mb-4">Chat with our support team</p>
                  <button className="btn btn-navbar btn-sm font-bold text-nowrap">
                    Start Chat
                  </button>
                  <p className="text-sm text-gray-600 mt-5">Mon-Fri: 9 AM - 6 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="mb-150 relative">
        <div className="container">
          <div className="mb-12 text-center max-w-[475px] mx-auto">
            <p className="section-tagline">Support Services</p>
            <h2>How we can help you</h2>
          </div>
          
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8">
            {/* Technical Support */}
            <div className="bg-white shadow-box rounded-medium p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-0">Technical Support</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>System setup and configuration</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Menu management assistance</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Billing and payment issues</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Inventory management help</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>QR code menu troubleshooting</span>
                </li>
              </ul>
            </div>

            {/* Training & Onboarding */}
            <div className="bg-white shadow-box rounded-medium p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-0">Training & Onboarding</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Staff training sessions</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>System onboarding support</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Best practices guidance</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Feature walkthroughs</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Ongoing support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="mb-150 relative">
        <div className="absolute left-1/2 w-full h-[550px] -translate-x-1/2 bg-cover bg-[url('/images/hero-gradient.png')] bg-no-repeat bg-center opacity-70 md:hidden -z-10"></div>
        <div className="container relative">
          <div className="mb-12 text-center max-w-[475px] mx-auto">
            <p className="section-tagline">Get Help</p>
            <h2>Send us your support request</h2>
            <p className="mt-4 text-gray-600">
              Fill out the form below and our support team will get back to you as soon as possible.
            </p>
          </div>
          
          <BookDemoForm />
        </div>
      </section>

      <FooterSection />
    </>
  );
};

export default CustomerCarePage;
