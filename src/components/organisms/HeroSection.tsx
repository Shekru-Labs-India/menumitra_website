'use client';

import Image from 'next/image';
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="hero bg-gray dark:bg-dark overflow-hidden relative max-lg:pt-[160px] max-lg:pb-25 pt-[230px] pb-[140px] max-md:pb-[70px]" id="scene">
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
      
      <div className="container">
        <div className="grid grid-cols-12 items-center relative z-10 max-lg:gap-y-10 aos-init aos-animate" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-once="true">
          <div className="col-span-12 md:col-span-6 ">
            <p className="max-lg:mb-4 mb-8 font-medium uppercase">Join 15,000+ Restaurants</p>
            <h1 className="mb-12 max-md:mb-8">
              Revolutionize your
              <span className="font-playfair italic inline-block px-5 border-2 rounded-[88px] pt-0.5 pb-2.5 leading-none border-paragraph bg-[#D9D9D900] dark:border-[#F0F3EA]">Restaurant</span>
              operations.
            </h1>
            <p className="mb-12 max-md:mb-8 max-w-[590px]">
              From digital menus to order management, MenuMitra empowers restaurants to deliver exceptional dining experiences. Boost efficiency, reduce costs, and increase customer satisfaction with our all-in-one platform.
            </p>
            <form>
              <div className="grid grid-cols-12 items-center border rounded-[60px] bg-white dark:bg-dark-200 dark:border-[#31332F] border-borderColour pl-4 sm:pl-5 pe-1 pt-1 pb-1 max-w-[520px] w-full focus-within:border-primary dark:focus-within:border-primary  duration-300 transition-all">
                <input type="text" placeholder="Your restaurant email address" className=" col-span-8 xs:col-span-8 bg-transparent outline-none placeholder:text-light dark:placeholder:text-[#A1A49D] text-[#A1A49D] text-light focus:outline-none  leading-[1.75]" />
                <button className="btn col-span-4 xs:col-span-4 max-lg:!px-3 max-lg:!text-sm ">Get Started</button>
              </div>
            </form>
          </div>
          <div className="col-span-12 md:col-span-6 ">
            <div className="relative w-full min-h-[530px] max-md:min-h-[400px] lg:ml-15">
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