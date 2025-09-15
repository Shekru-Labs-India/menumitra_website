'use client';

import Image from 'next/image';
import React from 'react';
import { SplitText, TargetCursor } from '@/components/reactbits';
import ActionButtonsSection from './ActionButtonsSection';
import MobileDeviceOverlay from '@/components/atoms/MobileDeviceOverlay';

const HeroSection: React.FC = () => {
  return (
    <section className="hero bg-gray dark:bg-dark overflow-hidden relative min-h-screen flex items-center justify-center pt-[250px] pb-16 md:pt-32 md:pb-28 lg:pt-40 lg:pb-32" id="scene">
      {/* Background decoration - Desktop SVG graphs */}
      <div className="absolute top-0 left-0 w-full max-lg:hidden">
        <Image 
          src="/images/hero/hero-graph-top.svg" 
          alt="MenuMitra QR menu analytics dashboard background" 
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
          alt="MenuMitra QR menu analytics dashboard mobile background" 
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
          alt="MenuMitra restaurant analytics data visualization background" 
          width={1920} 
          height={444} 
          className="w-full h-auto opacity-30"
        />
      </div>
      
      {/* Bottom background decoration - Mobile */}
      <div className="absolute bottom-0 left-0 w-full lg:hidden">
        <Image 
          src="/images/hero/hero-graph-bottom.svg" 
          alt="MenuMitra restaurant analytics data visualization mobile background" 
          width={375} 
          height={444} 
          className="w-full h-auto opacity-30"
        />
      </div>
      
      <div className="container w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12  relative z-10 gap-8 md:gap-10 lg:gap-12 aos-init aos-animate" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-once="true">
          <div className="md:col-span-8 order-1 md:order-1">
            <p className="mb-4 md:mb-6 lg:mb-8 font-medium uppercase text-base md:text-lg lg:text-xl">Join 15,000+ Restaurants Using MenuMitra</p>
            <h1 className="mb-8 md:mb-10 lg:mb-12">
              <SplitText 
                text="MenuMitra: Boost Sales" 
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
                text="& Real-time Insights" 
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
              MenuMitra is the leading QR code menu solution for restaurants worldwide. Our digital menu platform creates contactless dining experiences, automates order management, and provides real-time sales insights. MenuMitra helps restaurants increase revenue through smart menu technology. Join 15,000+ restaurants already using MenuMitra to boost profits. Start your free MenuMitra trial today - see results quickly!
            </p>
          </div>
          
          <div className="md:col-span-4 order-2 md:order-2 relative md:z-10">
            {/* Background blur effects */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex -z-10 max-md:hidden">
              <div className="max-lg:hidden max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/20 blur-[145px]"></div>
              <div className="max-lg:w-[335px] max-1xl:h-[335px] max-1xl:blur-[80px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/25 -ml-[170px] -mt-150 max-md:ml-0 blur-[145px]"></div>
              <div className="max-lg:hidden max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/20 -ml-[170px] blur-[145px]"></div>
            </div>
            
            {/* Mobile gradient background */}
            <div className="absolute left-1/2 -bottom-150 p-[350px] -translate-x-1/2 bg-contain w-full h-full bg-[url('/images/hero-gradient.png')] bg-no-repeat bg-center opacity-70 md:hidden -z-10"></div>
            
            <div className="w-full h-full">
              {/* Complete dashboard with phone overlay - reusable component */}
              <MobileDeviceOverlay 
                position="bottom-right"
                size="md"
                showMainImage={true}
              />
            </div>
          </div>
        </div>
        <ActionButtonsSection />
      </div>
      
      {/* Target Cursor for interactive elements */}
      <TargetCursor 
        targetSelector=".cursor-target"
        spinDuration={2}
      />
    </section>
  );
};

export default HeroSection;