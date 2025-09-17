import React from 'react';
import Header from '@/components/organisms/Header';
import FooterSection from '@/components/organisms/FooterSection';
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
                <div className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-10 h-full max-lg:p-5 text-center">
                  <MapPin className="w-10 h-10 mx-auto mb-6 text-paragraph dark:text-white" />
                  <h3 className="mb-2.5">Our Address</h3>
                  <p>{location}</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white dark:bg-dark-200 shadow-box rounded-medium p-2.5" data-aos="fade-up" data-aos-offset={50} data-aos-duration={500} data-aos-delay="100" data-aos-once="true">
                <div className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-10 h-full max-lg:p-5 text-center">
                  <Mail className="w-10 h-10 mx-auto mb-6 text-paragraph dark:text-white" />
                  <h3 className="mb-2.5">Email Us</h3>
                  <a href={getEmailLink()} className="text-primary hover:underline">{email}</a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-white dark:bg-dark-200 shadow-box rounded-medium p-2.5" data-aos="fade-up" data-aos-offset={50} data-aos-duration={500} data-aos-delay="200" data-aos-once="true">
                <div className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-10 h-full max-lg:p-5 text-center">
                  <Phone className="w-10 h-10 mx-auto mb-6 text-paragraph dark:text-white" />
                  <h3 className="mb-2.5">Call Us</h3>
                  <a href={getPhoneLink()} className="text-primary hover:underline">{phone}</a>
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
          <div className="relative z-10 max-w-[850px] mx-auto">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex -z-10 max-lg:max-w-full max-md:hidden">
              <div className="w-[442px] h-[442px] rounded-full bg-primary-200/20 blur-[145px]"></div>
              <div className="w-[442px] h-[442px] rounded-full bg-primary-200/25 -ml-[170px] blur-[145px]"></div>
              <div className="w-[442px] h-[442px] rounded-full bg-primary-200/20 -ml-[170px] blur-[145px]"></div>
            </div>

            <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav">
              <div className="bg-white dark:bg-dark-200 border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-12 max-md:p-5">
                <form>
                  <div className="grid grid-cols-12 max-md:gap-y-10 md:gap-x-12 md:gap-8">
                    <div className="max-md:col-span-full md:col-span-6">
                      <label htmlFor="username" className="block text-sm font-medium text-paragraph dark:text-white mb-2">
                        Your name
                      </label>
                      <input 
                        type="text" 
                        name="first-name" 
                        id="username" 
                        placeholder="Name" 
                        className="block w-full text-sm rounded-[48px] border border-borderColour dark:border-borderColour-dark py-2.5 px-5 text-paragraph-light placeholder:text-paragraph-light dark:placeholder:text-paragraph-light outline-none bg-white dark:bg-dark-200 focus:border-primary dark:focus:border-primary duration-300 transition-all"
                      />
                    </div>
                    <div className="max-md:col-span-full md:col-span-6">
                      <label htmlFor="email" className="block text-sm font-medium text-paragraph dark:text-white mb-2">
                        Your Email
                      </label>
                      <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Email" 
                        className="block w-full text-sm rounded-[48px] border border-borderColour dark:border-borderColour-dark py-2.5 px-5 text-paragraph-light placeholder:text-paragraph-light dark:placeholder:text-paragraph-light outline-none bg-white dark:bg-dark-200 focus:border-primary dark:focus:border-primary duration-300 transition-all"
                      />
                    </div>
                    <div className="col-span-full">
                      <label htmlFor="message" className="block text-sm font-medium text-paragraph dark:text-white mb-2">
                        Message
                      </label>
                      <textarea 
                        name="message" 
                        id="message" 
                        rows={10} 
                        placeholder="Your message..."
                        className="block w-full text-sm rounded border border-borderColour dark:border-borderColour-dark py-2.5 px-5 text-paragraph-light placeholder:text-paragraph-light dark:placeholder:text-paragraph-light outline-none resize-none bg-white dark:bg-dark-200 focus:border-primary dark:focus:border-primary duration-300 transition-all"
                      ></textarea>
                    </div>
                    <div className="mx-auto col-span-full text-center">
                      <button type="submit" className="btn">
                        Contact Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
};

export default ContactPage;
