import React from 'react';
import Header from '@/components/organisms/Header';
import FooterSection from '@/components/organisms/FooterSection';

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
            data-aos-offset={200}
            data-aos-duration={1000}
            data-aos-once="true"
          >
            <p className="mb-4 font-medium uppercase">Get in touch</p>
            <h1 className="max-lg:mb-10 mb-10">
              Contact MenuMitra
            </h1>
            <p className="max-lg:mb-10 mb-12 max-w-[590px] mx-auto">
              Ready to transform your restaurant with our AI-powered digital menu platform? 
              Get in touch with our team to learn more about how MenuMitra can boost your sales and streamline your operations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="relative py-20">
        <div className="container">
          <div className="grid grid-cols-12 gap-8">
            {/* Contact Information */}
            <div className="col-span-12 lg:col-span-6">
              <div className="max-w-[550px]">
                <p className="section-tagline">Contact Information</p>
                <h2 className="mb-8">Let's discuss your restaurant's digital transformation</h2>
                <p className="mb-8">
                  Our team of experts is ready to help you implement MenuMitra's digital menu solution. 
                  Contact us today to schedule a demo or get answers to your questions.
                </p>
                
                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-envelope text-primary text-lg"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                      <p className="text-gray-600 dark:text-gray-300">info@menumitra.com</p>
                      <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-phone text-primary text-lg"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                      <p className="text-gray-600 dark:text-gray-300">+91 93178 18283</p>
                      <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM IST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-map-marker-alt text-primary text-lg"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                      <p className="text-gray-600 dark:text-gray-300">India</p>
                      <p className="text-sm text-gray-500">Serving restaurants worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form Placeholder */}
            <div className="col-span-12 lg:col-span-6">
              <div className="bg-white dark:bg-dark-200 rounded-medium p-8 shadow-box">
                <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Contact form will be implemented here. For now, please use the contact information provided.
                </p>
                
                {/* Placeholder form structure */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-300 text-gray-900 dark:text-white"
                      placeholder="Your name"
                      disabled
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-300 text-gray-900 dark:text-white"
                      placeholder="your@email.com"
                      disabled
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-300 text-gray-900 dark:text-white"
                      placeholder="Your message..."
                      disabled
                    ></textarea>
                  </div>
                  
                  <button 
                    className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                    disabled
                  >
                    Send Message
                  </button>
                </div>
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
