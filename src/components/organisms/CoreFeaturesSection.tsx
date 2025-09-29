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
                <div className="flex items-start gap-4">
                  <Image
                    src="/images/services/investment.svg"
                    alt="Smart QR Menus"
                    width={64}
                    height={64}
                    className="flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="mb-2.5 relative after:absolute after:-left-[49px] after:w-0.5 after:h-full after:bg-primary after:opacity-0 group-hover:after:opacity-100 after:duration-500 after:transition-opacity text-xl md:text-2xl font-bold leading-normal">
                      Smart QR Menus
                    </h3>
                    <p className="text-base leading-relaxed">
                      Transform your dining experience with interactive QR code menus. Customers scan, browse beautiful digital menus, and place orders instantly - no apps needed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Real-time Analytics */}
              <div className="relative px-0 lg:px-12 py-12 after:absolute lg:after:right-0 lg:after:top-1/2 after:overflow-hidden lg:after:-translate-y-1/2 lg:after:w-[1px] lg:after:h-full lg:after:content-[url('/images/payment/coreborder-right.svg')]  group max-lg:after:content-[url('/images/payment/coreborder-bottom-mobile.svg')] max-lg:after:w-full max-lg:after:h-[1px] max-lg:after:bottom-0 max-lg:top-auto">
                <div className="flex items-start gap-4">
                  <Image
                    src="/images/services/loan.svg"
                    alt="Live Business Insights"
                    width={64}
                    height={64}
                    className="flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="mb-2.5 relative after:absolute after:-left-[49px] after:w-0.5 after:h-full after:bg-primary after:opacity-0 group-hover:after:opacity-100 after:duration-500 after:transition-opacity text-xl md:text-2xl font-bold leading-normal">
                      Live Business Insights
                    </h3>
                    <p className="text-base leading-relaxed">
                      Make data-driven decisions with real-time analytics. Monitor sales trends, track popular dishes, understand customer behavior, and optimize your menu for maximum profitability.
                    </p>
                  </div>
                </div>
              </div>

              {/* Order Management */}
              <div className="relative px-0 lg:px-12 py-12 after:absolute lg:after:right-0 lg:after:top-1/2 after:overflow-hidden lg:after:-translate-y-1/2 lg:after:w-[1px] lg:after:h-full lg:after:content-[url('/images/payment/coreborder-right.svg')]  group max-lg:after:content-[url('/images/payment/coreborder-bottom-mobile.svg')] max-lg:after:w-full max-lg:after:h-[1px] max-lg:after:bottom-0 max-lg:top-auto">
                <div className="flex items-start gap-4">
                  <Image
                    src="/images/services/sales.svg"
                    alt="Intelligent Order Flow"
                    width={64}
                    height={64}
                    className="flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="mb-2.5 relative after:absolute after:-left-[49px] after:w-0.5 after:h-full after:bg-primary after:opacity-0 group-hover:after:opacity-100 after:duration-500 after:transition-opacity text-xl md:text-2xl font-bold leading-normal">
                      Intelligent Order Flow
                    </h3>
                    <p className="text-base leading-relaxed">
                      Revolutionize your kitchen operations with smart order management. Automatically route orders to the right stations, track preparation times, and maintain perfect inventory levels.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="relative grid grid-cols-3 max-lg:grid-cols-1 [&>*:nth-child(3n+1)]:before:absolute [&>*:nth-child(3n+1)]:before:left-0 [&>*:nth-child(3n+1)]:before:top-1/2 [&>*:nth-child(3n+1)]:before:-translate-y-1/2 [&>*:nth-child(3n+1)]:before:w-[1px] [&>*:nth-child(3n+1)]:before:h-full [&>*:nth-child(3n+1)]:before:content-[url('/images/payment/coreborder-right.svg')] max-lg:[&>*:nth-child(3n+1)]:before:hidden">
              
              {/* Multi-location Management */}
              <div className="relative px-0 lg:px-12 py-12 after:absolute lg:after:right-0 lg:after:top-1/2 after:overflow-hidden lg:after:-translate-y-1/2 lg:after:w-[1px] lg:after:h-full lg:after:content-[url('/images/payment/coreborder-right.svg')]  group max-lg:after:content-[url('/images/payment/coreborder-bottom-mobile.svg')] max-lg:after:w-full max-lg:after:h-[1px] max-lg:after:bottom-0 max-lg:top-auto">
                <div className="flex items-start gap-4">
                  <Image
                    src="/images/services/finance.svg"
                    alt="Unified Restaurant Control"
                    width={64}
                    height={64}
                    className="flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="mb-2.5 relative after:absolute after:-left-[49px] after:w-0.5 after:h-full after:bg-primary after:opacity-0 group-hover:after:opacity-100 after:duration-500 after:transition-opacity text-xl md:text-2xl font-bold leading-normal">
                      Unified Restaurant Control
                    </h3>
                    <p className="text-base leading-relaxed">
                      Scale your restaurant empire effortlessly. Control multiple locations from one powerful dashboard - update menus instantly, monitor performance across all outlets, and maintain consistent brand experience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Customer Experience */}
              <div className="relative px-0 lg:px-12 py-12 after:absolute lg:after:right-0 lg:after:top-1/2 after:overflow-hidden lg:after:-translate-y-1/2 lg:after:w-[1px] lg:after:h-full lg:after:content-[url('/images/payment/coreborder-right.svg')]  group max-lg:after:content-[url('/images/payment/coreborder-bottom-mobile.svg')] max-lg:after:w-full max-lg:after:h-[1px] max-lg:after:bottom-0 max-lg:top-auto">
                <div className="flex items-start gap-4">
                  <Image
                    src="/images/services/effeciency.svg"
                    alt="Exceptional Dining Journey"
                    width={64}
                    height={64}
                    className="flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="mb-2.5 relative after:absolute after:-left-[49px] after:w-0.5 after:h-full after:bg-primary after:opacity-0 group-hover:after:opacity-100 after:duration-500 after:transition-opacity text-xl md:text-2xl font-bold leading-normal">
                      Exceptional Dining Journey
                    </h3>
                    <p className="text-base leading-relaxed">
                      Delight your customers with personalized dining experiences. Smart recommendations, detailed allergen information, dietary preferences, and instant menu updates create memorable visits.
                    </p>
                  </div>
                </div>
              </div>

              {/* 24/7 Support */}
              <div className="relative px-0 lg:px-12 py-12 after:absolute lg:after:right-0 lg:after:top-1/2 after:overflow-hidden lg:after:-translate-y-1/2 lg:after:w-[1px] lg:after:h-full lg:after:content-[url('/images/payment/coreborder-right.svg')]  group">
                <div className="flex items-start gap-4">
                  <Image
                    src="/images/services/fund.svg"
                    alt="Always-On Expert Support"
                    width={64}
                    height={64}
                    className="flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="mb-2.5 relative after:absolute after:-left-[49px] after:w-0.5 after:h-full after:bg-primary after:opacity-0 group-hover:after:opacity-100 after:duration-500 after:transition-opacity text-xl md:text-2xl font-bold leading-normal">
                      Always-On Expert Support
                    </h3>
                    <p className="text-base leading-relaxed">
                      Never face challenges alone. Our dedicated restaurant technology specialists provide round-the-clock support, ensuring your operations run smoothly and your investment delivers maximum returns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeaturesSection;
