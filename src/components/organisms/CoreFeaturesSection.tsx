'use client';

import React from 'react';
import Image from 'next/image';

interface CoreFeaturesSectionProps {
  className?: string;
}

const CoreFeaturesSection: React.FC<CoreFeaturesSectionProps> = ({ className = '' }) => {
  return (
    <section className={`pt-150 relative ${className}`}>
      <div className="absolute left-0 right-0 top-150 bg-[url('/images/core-gradient.png')] bg-no-repeat bg-center opacity-70 w-full h-full bg-[length:600px_1800px] md:hidden" />
      <div className="container">
        <div className="mb-12 text-center max-w-[575px] mx-auto">
          <p className="section-tagline">Core Features</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug">Features that help you run your restaurant business</h2>
        </div>
        <div className="relative z-10">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10 max-md:hidden">
            <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/20 blur-[145px]" />
            <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/25 -ml-[170px] max-md:ml-0 blur-[145px]" />
            <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/20 -ml-[170px] max-md:ml-0 blur-[145px]" />
          </div>
          <div className="flex flex-col relative [&>*:not(:last-child)]:after:absolute [&>*:not(:last-child)]:after:h-0.5 [&>*:not(:last-child)]:after:w-full [&>*:not(:last-child)]:after:content-[url('/images/payment/seperator.png')] [&>*:not(:last-child)]:after:bottom-0 [&>*:not(:last-child)]:after:overflow-hidden max-md:[&>*:not(:last-child)]:after:hidden">
            
            {/* First Row */}
            <div className="relative grid grid-cols-3 max-lg:grid-cols-1 [&>*:nth-child(3n+1)]:before:absolute [&>*:nth-child(3n+1)]:before:left-0 [&>*:nth-child(3n+1)]:before:top-1/2 [&>*:nth-child(3n+1)]:before:-translate-y-1/2 [&>*:nth-child(3n+1)]:before:w-[1px] [&>*:nth-child(3n+1)]:before:h-full [&>*:nth-child(3n+1)]:before:content-[url('/images/payment/coreborder-right.svg')] max-lg:[&>*:nth-child(3n+1)]:before:hidden">
              
              {/* QR Code Menus */}
              <div className="relative px-0 lg:px-12 py-12 after:absolute lg:after:right-0 lg:after:top-1/2 after:overflow-hidden lg:after:-translate-y-1/2 lg:after:w-[1px] lg:after:h-full lg:after:content-[url('/images/payment/coreborder-right.svg')]  group max-lg:after:content-[url('/images/payment/coreborder-bottom-mobile.svg')] max-lg:after:w-full max-lg:after:h-[1px] max-lg:after:bottom-0 max-lg:top-auto">
                <Image
                  src="/images/services/investment.svg"
                  alt="QR Code Menus"
                  width={64}
                  height={64}
                  className="inline-block  mb-6"
                />
                <h3 className="mb-2.5 relative after:absolute after:-left-[49px] after:w-0.5 after:h-full after:bg-primary after:opacity-0 group-hover:after:opacity-100 after:duration-500 after:transition-opacity text-xl md:text-2xl font-medium leading-normal">
                  QR Code Menus
                </h3>
                <p className="text-base leading-relaxed">
                  Create stunning, contactless digital menus that customers can access instantly. No app downloads required - just scan and order.
                </p>
              </div>

              {/* Real-time Analytics */}
              <div className="relative px-0 lg:px-12 py-12 after:absolute lg:after:right-0 lg:after:top-1/2 after:overflow-hidden lg:after:-translate-y-1/2 lg:after:w-[1px] lg:after:h-full lg:after:content-[url('/images/payment/coreborder-right.svg')]  group max-lg:after:content-[url('/images/payment/coreborder-bottom-mobile.svg')] max-lg:after:w-full max-lg:after:h-[1px] max-lg:after:bottom-0 max-lg:top-auto">
                <Image
                  src="/images/services/loan.svg"
                  alt="Real-time Analytics"
                  width={64}
                  height={64}
                  className="inline-block  mb-6"
                />
                <h3 className="mb-2.5 relative after:absolute after:-left-[49px] after:w-0.5 after:h-full after:bg-primary after:opacity-0 group-hover:after:opacity-100 after:duration-500 after:transition-opacity text-xl md:text-2xl font-medium leading-normal">
                  Real-time Analytics
                </h3>
                <p className="text-base leading-relaxed">
                  Track sales performance, popular items, and customer preferences with comprehensive analytics and insights.
                </p>
              </div>

              {/* Order Management */}
              <div className="relative px-0 lg:px-12 py-12 after:absolute lg:after:right-0 lg:after:top-1/2 after:overflow-hidden lg:after:-translate-y-1/2 lg:after:w-[1px] lg:after:h-full lg:after:content-[url('/images/payment/coreborder-right.svg')]  group max-lg:after:content-[url('/images/payment/coreborder-bottom-mobile.svg')] max-lg:after:w-full max-lg:after:h-[1px] max-lg:after:bottom-0 max-lg:top-auto">
                <Image
                  src="/images/services/sales.svg"
                  alt="Order Management"
                  width={64}
                  height={64}
                  className="inline-block  mb-6"
                />
                <h3 className="mb-2.5 relative after:absolute after:-left-[49px] after:w-0.5 after:h-full after:bg-primary after:opacity-0 group-hover:after:opacity-100 after:duration-500 after:transition-opacity text-xl md:text-2xl font-medium leading-normal">
                  Order Management
                </h3>
                <p className="text-base leading-relaxed">
                  Streamline kitchen operations with intelligent order routing and automated inventory management.
                </p>
              </div>
            </div>

            {/* Second Row */}
            <div className="relative grid grid-cols-3 max-lg:grid-cols-1 [&>*:nth-child(3n+1)]:before:absolute [&>*:nth-child(3n+1)]:before:left-0 [&>*:nth-child(3n+1)]:before:top-1/2 [&>*:nth-child(3n+1)]:before:-translate-y-1/2 [&>*:nth-child(3n+1)]:before:w-[1px] [&>*:nth-child(3n+1)]:before:h-full [&>*:nth-child(3n+1)]:before:content-[url('/images/payment/coreborder-right.svg')] max-lg:[&>*:nth-child(3n+1)]:before:hidden">
              
              {/* Multi-location Management */}
              <div className="relative px-0 lg:px-12 py-12 after:absolute lg:after:right-0 lg:after:top-1/2 after:overflow-hidden lg:after:-translate-y-1/2 lg:after:w-[1px] lg:after:h-full lg:after:content-[url('/images/payment/coreborder-right.svg')]  group max-lg:after:content-[url('/images/payment/coreborder-bottom-mobile.svg')] max-lg:after:w-full max-lg:after:h-[1px] max-lg:after:bottom-0 max-lg:top-auto">
                <Image
                  src="/images/services/finance.svg"
                  alt="Multi-location Management"
                  width={64}
                  height={64}
                  className="inline-block  mb-6"
                />
                <h3 className="mb-2.5 relative after:absolute after:-left-[49px] after:w-0.5 after:h-full after:bg-primary after:opacity-0 group-hover:after:opacity-100 after:duration-500 after:transition-opacity text-xl md:text-2xl font-medium leading-normal">
                  Multi-location Management
                </h3>
                <p className="text-base leading-relaxed">
                  Manage multiple restaurant locations from a single dashboard with centralized menu updates and performance tracking.
                </p>
              </div>

              {/* Customer Experience */}
              <div className="relative px-0 lg:px-12 py-12 after:absolute lg:after:right-0 lg:after:top-1/2 after:overflow-hidden lg:after:-translate-y-1/2 lg:after:w-[1px] lg:after:h-full lg:after:content-[url('/images/payment/coreborder-right.svg')]  group max-lg:after:content-[url('/images/payment/coreborder-bottom-mobile.svg')] max-lg:after:w-full max-lg:after:h-[1px] max-lg:after:bottom-0 max-lg:top-auto">
                <Image
                  src="/images/services/effeciency.svg"
                  alt="Customer Experience"
                  width={64}
                  height={64}
                  className="inline-block  mb-6"
                />
                <h3 className="mb-2.5 relative after:absolute after:-left-[49px] after:w-0.5 after:h-full after:bg-primary after:opacity-0 group-hover:after:opacity-100 after:duration-500 after:transition-opacity text-xl md:text-2xl font-medium leading-normal">
                  Customer Experience
                </h3>
                <p className="text-base leading-relaxed">
                  Provide seamless ordering experience with instant menu updates, allergen information, and personalized recommendations.
                </p>
              </div>

              {/* 24/7 Support */}
              <div className="relative px-0 lg:px-12 py-12 after:absolute lg:after:right-0 lg:after:top-1/2 after:overflow-hidden lg:after:-translate-y-1/2 lg:after:w-[1px] lg:after:h-full lg:after:content-[url('/images/payment/coreborder-right.svg')]  group">
                <Image
                  src="/images/services/fund.svg"
                  alt="24/7 Support"
                  width={64}
                  height={64}
                  className="inline-block  mb-6"
                />
                <h3 className="mb-2.5 relative after:absolute after:-left-[49px] after:w-0.5 after:h-full after:bg-primary after:opacity-0 group-hover:after:opacity-100 after:duration-500 after:transition-opacity text-xl md:text-2xl font-medium leading-normal">
                  24/7 Support
                </h3>
                <p className="text-base leading-relaxed">
                  Get dedicated support from our restaurant technology experts to ensure smooth operations and maximum ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeaturesSection;
