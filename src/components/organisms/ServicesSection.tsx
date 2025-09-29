'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import GraphBackground from '@/components/atoms/GraphBackground';

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-white pb-150 relative sm:overflow-hidden">
      <div className="absolute left-0 right-0 top-25 bg-[url('/images/service-bg.png')] bg-no-repeat bg-cover bg-center opacity-70 w-full h-full sm:hidden"></div>
      <div className="container">
        <div className="mb-12">
          <p className="section-tagline max-lg:text-center">Our Services</p>
          <div className="block max-lg:text-center lg:flex">
            <h2 className="max-lg:mb-5">
              Complete Digital Menu <br />
              Solutions for Restaurants
            </h2>
            <p className="max-w-[520px] mx-auto lg:ml-auto">
              Transform your restaurant operations with our comprehensive suite of AI-powered tools designed to boost sales, streamline operations, and enhance customer experience.
            </p>
          </div>
        </div>

        <div className="relative z-10">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex -z-10 max-sm:hidden">
            <div className="w-[330px] h-[330px] xl:w-[442px] xl:h-[442px] blur-[145px] rounded-full bg-primary-200/20"></div>
            <div className="w-[330px] h-[330px] xl:w-[442px] xl:h-[442px] blur-[145px] rounded-full bg-primary-200/25 lg:-ml-[170px]"></div>
            <div className="w-[330px] h-[330px] xl:w-[442px] xl:h-[442px] blur-[145px] rounded-full bg-primary-200/20 lg:-ml-[170px]"></div>
          </div>

          <div className="grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-medium p-2.5 shadow-nav relative scale-100 hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="border border-dashed rounded border-gray-100 max-lg:p-5 p-10">
                <Image 
                  src="/images/services/investment.svg" 
                  alt="image" 
                  width={64} 
                  height={64} 
                  className="inline-block  mb-6"
                />
                <h3 className="mb-2.5">QR Code Digital Menus</h3>
                <p className="mb-6">Create stunning, contactless QR code menus that customers can access instantly. No app downloads required - just scan and order.</p>
              </div>
            </div>

            <div className="bg-white rounded-medium p-2.5 shadow-nav relative scale-100 hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="border border-dashed rounded border-gray-100 p-10 h-full max-lg:p-5">
                <Image 
                  src="/images/services/sales.svg" 
                  alt="image" 
                  width={64} 
                  height={64} 
                  className="inline-block  mb-6"
                />
                <h3 className="mb-2.5">AI-Powered Order Management</h3>
                <p className="mb-6">Streamline your kitchen operations with intelligent order routing, real-time updates, and automated inventory management.</p>
              </div>
            </div>

            <div className="bg-white rounded-medium p-2.5 shadow-nav relative scale-100 hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="border border-dashed rounded border-gray-100 p-10 h-full max-lg:p-5">
                <Image 
                  src="/images/services/loan.svg" 
                  alt="image" 
                  width={64} 
                  height={64} 
                  className="inline-block  mb-6"
                />
                <h3 className="mb-2.5">Real-Time Analytics Dashboard</h3>
                <p className="mb-6">Track sales performance, popular items, customer preferences, and revenue insights with comprehensive analytics.</p>
              </div>
            </div>

            <div className="bg-white rounded-medium p-2.5 shadow-nav relative scale-100 hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="border border-dashed rounded border-gray-100 p-10 h-full max-lg:p-5">
                <Image 
                  src="/images/services/finance.svg" 
                  alt="image" 
                  width={64} 
                  height={64} 
                  className="inline-block  mb-6"
                />
                <h3 className="mb-2.5">Multi-Location Management</h3>
                <p className="mb-6">Manage multiple restaurant locations from a single dashboard with centralized menu updates and performance tracking.</p>
              </div>
            </div>

            <div className="bg-white rounded-medium p-2.5 shadow-nav relative scale-100 hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="border border-dashed rounded border-gray-100 p-10 h-full max-lg:p-5">
                <Image 
                  src="/images/services/effeciency.svg" 
                  alt="image" 
                  width={64} 
                  height={64} 
                  className="inline-block  mb-6"
                />
                <h3 className="mb-2.5">Customer Experience Enhancement</h3>
                <p className="mb-6">Provide seamless ordering experience with instant menu updates, allergen information, and personalized recommendations.</p>
              </div>
            </div>

            <div className="bg-white rounded-medium p-2.5 shadow-nav relative scale-100 hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="border border-dashed rounded border-gray-100 p-10 h-full max-lg:p-5">
                <Image 
                  src="/images/services/fund.svg" 
                  alt="image" 
                  width={64} 
                  height={64} 
                  className="inline-block  mb-6"
                />
                <h3 className="mb-2.5">24/7 Customer Support</h3>
                <p className="mb-6">Get dedicated support from our restaurant technology experts to ensure smooth operations and maximum ROI.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </section>
  );
};

export default ServicesSection;