'use client';

import Image from 'next/image';
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="hero bg-gray dark:bg-dark overflow-hidden relative max-lg:pt-[160px] max-lg:pb-25 pt-[230px] pb-[140px] max-md:pb-[70px]" id="scene">
      {/* Background decoration - using simple gradient instead of complex SVG */}
      <div className="absolute top-0 max-w-[1612px] left-1/2 -translate-x-1/2 max-lg:hidden">
        <div className="w-full h-[520px] bg-gradient-to-b from-transparent via-primary/10 to-transparent opacity-50"></div>
      </div>
      
      <div className="container">
        <div className="grid grid-cols-12 items-center relative z-10 max-lg:gap-y-10 aos-init aos-animate" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-once="true">
          <div className="col-span-12 md:col-span-6 ">
            <p className="max-lg:mb-4 mb-8 font-medium uppercase">50k+ Trusted Businesses</p>
            <h1 className="mb-12 max-md:mb-8">
              Make your
              <span className="font-playfair italic inline-block px-5 border-2 rounded-[88px] pt-0.5 pb-2.5 leading-none border-paragraph bg-[#D9D9D900] dark:border-[#F0F3EA]">Finance</span>
              more efficient.
            </h1>
            <p className="mb-12 max-md:mb-8 max-w-[590px]">
              Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&apos;s not Latin, though it
              looks like it
            </p>
            <form>
              <div className="grid grid-cols-12 items-center border rounded-[60px] bg-white dark:bg-dark-200 dark:border-[#31332F] border-borderColour pl-4 sm:pl-5 pe-1 pt-1 pb-1 max-w-[520px] w-full focus-within:border-primary dark:focus-within:border-primary  duration-300 transition-all">
                <input type="text" placeholder="Enter your email" className=" col-span-8 xs:col-span-8 bg-transparent outline-none placeholder:text-light dark:placeholder:text-[#A1A49D] text-[#A1A49D] text-light focus:outline-none  leading-[1.75]" />
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