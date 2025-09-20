'use client';

import React, { useEffect } from 'react';
import FooterSection from '@/components/organisms/FooterSection';
import TestimonialsSlider from '@/components/organisms/TestimonialsSlider';
import { useAOS } from '@/hooks/useAOS';

const AboutClient: React.FC = () => {
  const { refreshAOS } = useAOS();
  
  useEffect(() => {
    // Refresh AOS when component mounts to ensure animations work on first load
    const timer = setTimeout(() => {
      refreshAOS();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [refreshAOS]);
  
  return (
    <>
      <section className="hero  overflow-hidden relative max-lg:pt-150 pt-[240px] pb-[60px] z-40">
  <div className="container">
    <div
      className="max-w-[948px] mx-auto text-center"
      data-aos="fade-up"
      data-aos-offset={200}
      data-aos-duration={300}
      data-aos-once="true"
    >
      <p className="section-tagline">About Us</p>
      <h1 className="max-lg:mb-4 mb-8">
        We're revolutionizing restaurant management with AI-powered digital solutions
      </h1>
      <p className="max-lg:mb-6 mb-11">
        MenuMitra is a comprehensive restaurant management platform that helps restaurants streamline their operations, enhance customer experience, and boost revenue through intelligent digital solutions.
      </p>
    </div>
  </div>
</section>

<section className="bg-white dark:bg-dark-300 max-md:py-20 pt-150 pb-150 relative ">
  <div className="container relative">
    <div className="text-center max-w-[550px] mx-auto mb-16">
      <p className="section-tagline">Our Mission</p>
      <h2>Transforming the food service industry through innovation</h2>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div className="max-lg:order-2">
        <div className="relative pt-150 lg:py-150 lg:px-150">
          <div className="w-[250px] lg:w-[300px] aspect-video relative mx-auto">
            <img src="images/solution/solution.png" alt="vision image" className="dark:hidden" />
            <img src="images/solution/solution-dark.png" alt="vision image" className="hidden dark:inline-block" />
            <div className="absolute left-10 -top-[130px] lg:-top-[185px] lg:left-15 right-auto bottom-auto w-[250px] h-[150px] lg:w-[280px] lg:h-[180px] xl:w-[320px] xl:h-[230px]" data-aos="fade-left" data-aos-offset={200} data-aos-duration={1000} data-aos-once="true">
              <img src="images/solution/solution-shape1.png" alt="vision image" className="dark:hidden  w-full" />
              <img src="images/solution/solution-shape1-dark.png" alt="vision image" className="hidden dark:inline-block w-full" />
            </div>
            <div className="absolute right-12 top-12 lg:right-20 left-auto bottom-auto w-[280px] h-[190px] lg:w-[320px] lg:h-[230px] xl:w-[368px] xl:h-[280px]" data-aos="fade-up" data-aos-offset={200} data-aos-duration={1000} data-aos-delay={100} data-aos-once="true">
              <img src="images/solution/solution-shape2.png" alt="vision image" className="dark:hidden  w-full" />
              <img src="images/solution/solution-shape2-dark.png" alt="vision image" className="hidden dark:inline-block w-full" />
            </div>
            <div className="absolute left-[175px] -bottom-[70px] lg:-bottom-[86px] lg:left-[200px] right-auto top-auto w-[150px] lg:w-[170px] aspect-video" data-aos="fade-left" data-aos-offset={200} data-aos-duration={1000} data-aos-delay={200} data-aos-once="true">
              <img src="images/solution/solution-shape3.png" alt="vision image" className="dark:hidden  w-full" />
              <img src="images/solution/solution-shape3-dark.png" alt="vision image" className="hidden dark:inline-block w-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-lg:order-1 lg:-mt-15">
        <p className="section-tagline">Our Vision</p>
        <h2 className="max-lg:mb-4 mb-8">
          Creating a seamless digital ecosystem for restaurants worldwide
        </h2>
        <p className="max-lg:mb-6 mb-11">
          We envision a future where every restaurant can operate efficiently with cutting-edge technology, providing exceptional customer experiences while maximizing profitability through intelligent automation and data-driven insights.
        </p>
        <ul className="max-lg:mb-6 mb-14 flex max-md:flex-col max-md:gap-y-5 lg:items-center lg:[&>*:not(:last-child)]:mr-10 ">
          <li className="relative flex items-center gap-x-2 ">
            <svg ref={undefined} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-qr-code w-10 h-10 text-paragraph dark:text-primary" aria-hidden="true">
              <rect width="5" height="5" x="3" y="3" rx="1" />
              <rect width="5" height="5" x="16" y="3" rx="1" />
              <rect width="5" height="5" x="3" y="16" rx="1" />
              <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
              <path d="M21 21v.01" />
              <path d="M12 7v3a2 2 0 0 1-2 2H7" />
              <path d="M3 12h.01" />
              <path d="M12 3h.01" />
              <path d="M12 16v.01" />
              <path d="M16 12h1" />
            </svg>
            <span className="dark:text-white font-jakarta_sans font-medium">Digital Innovation</span>
          </li>
          <li className="relative flex items-center gap-x-2 ">
            <svg ref={undefined} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-column w-10 h-10 text-paragraph dark:text-primary" aria-hidden="true">
              <path d="M3 3v16a2 2 0 0 0 2 2h16" />
              <path d="M18 17V9" />
              <path d="M13 17V5" />
              <path d="M8 17v-3" />
            </svg>
            <span className="dark:text-white font-jakarta_sans font-medium">Data-Driven Growth</span>
          </li>
          <li className="relative flex items-center gap-x-2 ">
            <svg ref={undefined} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package w-10 h-10 text-paragraph dark:text-primary" aria-hidden="true">
              <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
              <path d="M12 22V12" />
              <polyline points="3.29 7 12 12 20.71 7" />
              <path d="m7.5 4.27 9 5.15" />
            </svg>
            <span className="dark:text-white font-jakarta_sans font-medium">Comprehensive Solutions</span>
          </li>
        </ul>
        <a href="/contact" className="btn-outline">Get Started Today</a>
      </div>
    </div>
  </div>
</section>

<section className="bg-white dark:bg-dark-300 max-md:py-20 pt-150 pb-150 relative ">
  <div className="container relative">
    <div className="text-center max-w-[550px] mx-auto mb-16">
      <p className="section-tagline">Our Team</p>
      <h2>Meet the experts behind MenuMitra's success</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white dark:bg-dark-200 rounded-medium p-8 shadow-nav" data-aos="fade-up" data-aos-offset={200} data-aos-duration={1000} data-aos-once="true">
        <div className="w-20 h-20 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-center mb-2">Rajesh Kumar</h3>
        <p className="text-paragraph-light dark:text-[#A1A49D] text-center mb-4">CEO & Founder</p>
        <p className="text-paragraph dark:text-white text-center text-sm">
          Visionary leader with 15+ years in restaurant technology, passionate about transforming the food service industry.
        </p>
      </div>
      
      <div className="bg-white dark:bg-dark-200 rounded-medium p-8 shadow-nav" data-aos="fade-up" data-aos-offset={200} data-aos-duration={1000} data-aos-delay={100} data-aos-once="true">
        <div className="w-20 h-20 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-center mb-2">Priya Sharma</h3>
        <p className="text-paragraph-light dark:text-[#A1A49D] text-center mb-4">CTO</p>
        <p className="text-paragraph dark:text-white text-center text-sm">
          Technology expert specializing in AI and machine learning solutions for the hospitality industry.
        </p>
      </div>
      
      <div className="bg-white dark:bg-dark-200 rounded-medium p-8 shadow-nav" data-aos="fade-up" data-aos-offset={200} data-aos-duration={1000} data-aos-delay={200} data-aos-once="true">
        <div className="w-20 h-20 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-center mb-2">Amit Patel</h3>
        <p className="text-paragraph-light dark:text-[#A1A49D] text-center mb-4">Head of Product</p>
        <p className="text-paragraph dark:text-white text-center text-sm">
          Product strategist focused on creating intuitive user experiences that drive restaurant success.
        </p>
      </div>
    </div>
  </div>
</section>

<TestimonialsSlider />
<FooterSection />
    </>
  );
};

export default AboutClient;
