'use client';

import Image from 'next/image';
import React from 'react';
import { SplitText } from '@/components/reactbits';

const HeroSection: React.FC = () => {
  return (
    <section className="hero bg-gray dark:bg-dark overflow-hidden relative min-h-screen flex items-center justify-center pt-[250px] pb-16 md:pt-32 md:pb-28 lg:pt-40 lg:pb-32" id="scene">
      {/* Background decoration - Desktop SVG graphs */}
      <div className="absolute top-0 left-0 w-full max-lg:hidden">
        <Image 
          src="/images/hero/hero-graph-top.svg" 
          alt="Hero background graph" 
          width={1612} 
          height={520} 
          className="w-full h-auto opacity-50"
          priority
        />
      </div>
      
      {/* Background decoration - Mobile SVG graphs */}
      <div className="absolute top-0 left-0 w-full lg:hidden">
        <Image 
          src="/images/hero/hero-graph-top.svg" 
          alt="Hero background graph mobile" 
          width={375} 
          height={520} 
          className="w-full h-auto opacity-50"
          priority
        />
      </div>
      
      {/* Bottom background decoration - Desktop */}
      <div className="absolute bottom-0 left-0 w-full max-lg:hidden">
        <Image 
          src="/images/hero/hero-graph-bottom.svg" 
          alt="Hero background graph bottom" 
          width={1920} 
          height={444} 
          className="w-full h-auto opacity-30"
        />
      </div>
      
      {/* Bottom background decoration - Mobile */}
      <div className="absolute bottom-0 left-0 w-full lg:hidden">
        <Image 
          src="/images/hero/hero-graph-bottom.svg" 
          alt="Hero background graph bottom mobile" 
          width={375} 
          height={444} 
          className="w-full h-auto opacity-30"
        />
      </div>
      
      <div className="container w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center relative z-10 gap-8 md:gap-10 lg:gap-12 aos-init aos-animate" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-once="true">
          <div className="md:col-span-8 order-1 md:order-1">
            <p className="mb-4 md:mb-6 lg:mb-8 font-medium uppercase text-base md:text-lg lg:text-xl">Join 15,000+ Restaurants Boosting Sales</p>
            <h1 className="mb-8 md:mb-10 lg:mb-12">
              <SplitText 
                text="Boost Sales by 30%" 
                delay={0.2} 
                duration={0.8} 
                className="block" 
                fontWeight="font-black"
                fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                textColor="text-primary"
                letterSpacing="tracking-tight"
                lineHeight="leading-tight"
              />
              <SplitText 
                text="with Smart QR Menus" 
                delay={0.8} 
                duration={0.8} 
                className="block" 
                fontWeight="font-black"
                fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                textColor="text-gray-900 dark:text-white"
                letterSpacing="tracking-tight"
                lineHeight="leading-tight"
              />
              <SplitText 
                text="& AI Analytics" 
                delay={1.2} 
                duration={0.8} 
                className="block" 
                fontWeight="font-black"
                fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                textColor="text-primary"
                letterSpacing="tracking-tight"
                lineHeight="leading-tight"
              />
            </h1>
            <p className="mb-8 md:mb-10 lg:mb-12 text-base sm:text-lg md:text-xl lg:text-2xl max-w-full md:max-w-[590px] leading-relaxed">
              Transform your restaurant with MenuMitra's revolutionary QR code menu system. Our AI-powered platform creates contactless digital menus, automates order management, provides real-time sales analytics, and increases revenue by 30%. Join 15,000+ restaurants already boosting profits with smart menu technology. Start your free trial today - see results in 24 hours!
            </p>
          </div>
          <div className="md:col-span-4 order-2 md:order-2 flex items-center justify-center">
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px]">
              {/* Main circle - center */}
              <div className="absolute !left-1/2 !top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Image src="/images/hero/hero-circle.png" alt="hero Image" width={400} height={400} className="inline-block dark:hidden" />
                <Image src="/images/hero/hero-circle-dark.png" alt="hero Image" width={400} height={400} className="hidden dark:inline-block" />
              </div>
              
              {/* Policy card - top left with parallax effect */}
              <div className="absolute max-lg:w-[220px] max-lg:aspect-video max-lg:!left-0 max-md:!top-5 !top-15 !-left-[40px] lg:!-top-[20px] parallax-effect aos-init aos-animate" parallax-value="-1" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-once="true">
                <Image src="/images/hero/hero-policy.png" alt="hero Image" width={220} height={120} className="inline-block dark:hidden" />
                <Image src="/images/hero/hero-policy-dark.png" alt="hero Image" width={220} height={120} className="hidden dark:inline-block" />
              </div>
              
              {/* Rating card - bottom left with parallax effect */}
              <div className="absolute max-lg:w-28 max-lg:aspect-square max-md:!left-[50px] max-md:!bottom-[70px] !bottom-[150px] !left-[50px] lg:!bottom-0 lg:!left-[45px] xl:!left-[85px] parallax-effect aos-init aos-animate" parallax-value="1" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-once="true">
                <Image src="/images/hero/hero-rating.png" alt="hero Image" width={112} height={112} className="inline-block dark:hidden" />
                <Image src="/images/hero/hero-rating-dark.png" alt="hero Image" width={112} height={112} className="hidden dark:inline-block" />
              </div>
              
              {/* Chart card - bottom right with parallax effect */}
              <div className="absolute max-lg:w-[196px] !-right-5 !-bottom-0 max-md:!-bottom-5 max-md:!-right-5 lg:!not-sr-only-bottom-[45px] lg:right-0 xl:right-[30px] parallax-effect aos-init aos-animate" parallax-value="2" data-aos="fade-left" data-aos-offset="200" data-aos-duration="1000" data-aos-once="true">
                <Image src="/images/hero/hero-chart.png" alt="hero Image" width={196} height={120} className="inline-block dark:hidden" />
                <Image src="/images/hero/hero-chart-dark.png" alt="hero Image" width={196} height={120} className="hidden dark:inline-block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;