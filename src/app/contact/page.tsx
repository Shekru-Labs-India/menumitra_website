'use client';

import React from 'react';
import Header from '@/components/organisms/Header';
import FooterSection from '@/components/organisms/FooterSection';
import BookDemoForm from '@/components/forms/BookDemoForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import { email, phone, location, getEmailLink, getPhoneLink } from '@/config/contact';

const ContactPage: React.FC = () => {
  return (
    <>
      <Header />
      
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
              <div className="bg-white dark:bg-dark-200 shadow-box rounded-medium p-2.5" data-aos="fade-up" data-aos-offset={50} data-aos-duration={500} data-aos-once="true">
                <div className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-10 h-full max-lg:p-5 text-center flex flex-col justify-center">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <MapPin className="w-10 h-10 text-paragraph dark:text-white" />
                    <h3 className="mb-0">Our Address</h3>
                  </div>
                  <p className="text-center">{location}</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white dark:bg-dark-200 shadow-box rounded-medium p-2.5" data-aos="fade-up" data-aos-offset={50} data-aos-duration={500} data-aos-delay="100" data-aos-once="true">
                <div className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-10 h-full max-lg:p-5 text-center flex flex-col justify-center">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <Mail className="w-10 h-10 text-paragraph dark:text-white" />
                    <h3 className="mb-0">Email Us</h3>
                  </div>
                  <a href={getEmailLink()} className="text-center hover:underline">{email}</a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-white dark:bg-dark-200 shadow-box rounded-medium p-2.5" data-aos="fade-up" data-aos-offset={50} data-aos-duration={500} data-aos-delay="200" data-aos-once="true">
                <div className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-10 h-full max-lg:p-5 text-center flex flex-col justify-center">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <Phone className="w-10 h-10 text-paragraph dark:text-white" />
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
