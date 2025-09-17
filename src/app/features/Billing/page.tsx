"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import { 
  CreditCard, 
  CheckCircle, 
  Play
} from 'lucide-react';

const BillingPage: React.FC = () => {
  const sectionConfig = useSectionConfig('features');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Smart Billing Management
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Transform your restaurant's billing operations with our comprehensive, AI-powered billing management system. 
        From invoice generation to payment processing, we handle every aspect of your financial operations.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our advanced billing platform integrates seamlessly with your existing restaurant management systems, 
        providing real-time insights, automated workflows, and secure payment processing. Reduce manual work by 80% 
        and get paid faster with our intelligent billing solutions.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Whether you're a small cafe or a large restaurant chain, our scalable billing system grows with your business, 
        ensuring you always have the tools you need to manage your finances effectively.
      </p>

      {/* Feature Image */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav mb-8">
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 text-center">
          <CreditCard className="w-24 h-24 text-primary-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Comprehensive Billing Dashboard</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Manage all your billing operations from one centralized platform
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">What to Expect</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our billing management system provides everything you need to streamline your restaurant's financial operations. 
        From automated invoice generation to real-time payment tracking, we've designed every feature with restaurant owners in mind.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Experience seamless integration with your existing POS systems, comprehensive reporting capabilities, and 
        enterprise-grade security that protects your business and customer data.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>AI-powered invoice generation and processing</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Multi-payment gateway integration</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Real-time financial analytics and reporting</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Automated payment reminders and reconciliation</span>
        </li>
      </ul>

      {/* Video Section */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav relative mb-8">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-300 dark:to-dark-400 rounded-lg p-12 text-center relative">
          <Play className="w-16 h-16 text-primary-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Watch Our Billing System in Action</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            See how MenuMitra's billing management transforms restaurant operations
          </p>
          <button className="btn-primary inline-flex items-center">
            <Play className="w-4 h-4 mr-2" />
            Watch Demo
          </button>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Key Benefits & Features</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our billing management system is designed specifically for the restaurant industry, understanding the unique 
        challenges and requirements of food service businesses. From handling complex tax calculations to managing 
        multiple payment methods, we've got you covered.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        With our advanced analytics and reporting tools, you'll gain insights into your business performance like never before. 
        Track revenue trends, identify payment patterns, and make data-driven decisions to grow your restaurant.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Scalable architecture that grows with your business</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Enterprise-grade security and compliance</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>24/7 customer support and training</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Mobile app for on-the-go management</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem={sectionConfig.defaultActiveItem}
      backgroundImage={sectionConfig.backgroundImage}
      mainContent={mainContent}
    >
      {/* CTA Section */}
      <section className="relative pb-25 max-md:overflow-hidden">
        <div className="container relative max-md:text-center">
          <div className="absolute left-1/2 -bottom-[442px] -translate-x-1/2 flex max-md:flex-col -z-10 max-md:hidden">
            <div className="max-md:hidden max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/20 blur-[145px]"></div>
            <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/25 -ml-[170px] max-md:ml-0 blur-[145px]"></div>
            <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/20 -ml-[170px] max-md:ml-0 blur-[145px]"></div>
          </div>
          <div className="absolute left-1/2 -bottom-[350px] p-[350px] -translate-x-1/2 bg-contain w-full h-full bg-hero-gradient bg-no-repeat bg-center opacity-70 md:hidden -z-10"></div>
          <div>
            <div>
              <p className="text-primary-600 font-medium mb-2">Start Today</p>
            </div>
            <div className="grid grid-cols-12 grid-y-10 items-start">
              <div className="max-md:col-span-full md:col-span-6 lg:col-span-7">
                <h2 className="mb-5 max-lg:text-[32px] text-[48px] font-semibold">
                  Start your free trial now!
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Transform your restaurant's billing operations with our comprehensive billing management system.
                </p>
              </div>
              <div className="max-md:col-span-full md:col-span-6 lg:col-span-5 max-md:mt-5">
                <form>
                  <div className="grid grid-cols-12 items-center max-lg:gap-y-5 lg:gap-x-6">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="bg-transparent placeholder:text-light dark:placeholder:text-[#A1A49D] text-[#A1A49D] text-light focus:outline-none leading-[1.5] border rounded-[60px] bg-white dark:bg-dark-200 dark:border-[#31332F] border-borderColour max-lg:col-span-full lg:col-span-8 h-full ps-5 max-lg:py-3.5 focus:border-primary dark:focus:border-primary duration-300 transition-all outline-none"
                    />
                    <button className="btn max-lg:col-span-full lg:col-span-4">Get Started</button>
                  </div>
                </form>
                <ul className="flex max-md:flex-col max-lg:gap-y-2.5 items-center max-lg:justify-between lg:gap-5 mt-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    <p className="text-sm">No Credit Card Required</p>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    <p className="text-sm">Free For 14 Day Trial</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionLayout>
  );
};

export default BillingPage;
