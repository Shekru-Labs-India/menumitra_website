'use client';

import React, { useEffect } from 'react';
import FooterSection from '@/components/organisms/FooterSection';
import TestimonialsSlider from '@/components/organisms/TestimonialsSlider';
import { useAOS } from '@/hooks/useAOS';

const AboutPage: React.FC = () => {
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
      <p className="mb-4 font-medium uppercase">about company</p>
      <h1 className="max-lg:mb-10 mb-10">
        The future of restaurant management is being shaped by MenuMitra
      </h1>
      <p className="max-lg:mb-10 mb-12 max-w-[590px] mx-auto">
        MenuMitra is revolutionizing the restaurant industry with our comprehensive 
        digital solutions that streamline operations, enhance customer experience, 
        and drive business growth.
      </p>
    </div>
  </div>
</section>
<section className="relative">
<div className="absolute left-1/2 -top-[300px] w-full h-[550px] -translate-x-1/2 bg-cover  bg-[url('/images/hero-gradient.png')] bg-no-repeat bg-center opacity-70 md:hidden -z-10" />
  <div className="container relative ">
    <div className="absolute left-1/2 top-20 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10 max-md:hidden ">
      <div className="max-1xl:w-[335px] max-1xl:h-[335px]  1xl:w-[442px] 1xl:h-[442px]  rounded-full bg-primary-200/20 blur-[145px]" />
      <div className="max-1xl:w-[335px] max-1xl:h-[335px]  1xl:w-[442px] 1xl:h-[442px]  rounded-full bg-primary-200/25 -ml-[170px] max-md:ml-0 blur-[145px]" />
      <div className="max-1xl:w-[335px] max-1xl:h-[335px]  1xl:w-[442px] 1xl:h-[442px]  rounded-full bg-primary-200/20 -ml-[170px] max-md:ml-0 blur-[145px]" />
    </div>
    <div className="grid grid-cols-3 max-md:grid-cols-1 gap-10 items-center  max-md:mb-25 mb-[160px]">
      <div
        className="p-2.5 bg-white dark:bg-dark-200 rounded-medium overflow-hidden shadow-box"
        data-aos="fade-up"
        data-aos-offset={200}
        data-aos-duration={300}
        data-aos-once="true"
      >
        <img
          src="/images/about/about1.png"
          alt="MenuMitra restaurant management system"
          className="rounded w-full"
        />
      </div>
      <div
        className="p-2.5 bg-white dark:bg-dark-200 rounded-medium overflow-hidden shadow-box"
        data-aos="fade-up"
        data-aos-offset={200}
        data-aos-duration={300}
        data-aos-delay={100}
        data-aos-once="true"
      >
        <img
          src="/images/about/about2.png"
          alt="MenuMitra digital menu solutions"
          className="rounded w-full"
        />
      </div>
      <div
        className="p-2.5 bg-white dark:bg-dark-200 rounded-medium overflow-hidden shadow-box"
        data-aos="fade-up"
        data-aos-offset={200}
        data-aos-duration={300}
        data-aos-delay={200}
        data-aos-once="true"
      >
        <img
          src="/images/about/about3.png"
          alt="MenuMitra customer experience platform"
          className="rounded w-full"
        />
      </div>
    </div>
    <div className="grid grid-cols-12">
      <div className="max-md:col-span-full md:col-span-6">
        <div className="max-w-[550px]">
          <p className="section-tagline">Numbers</p>
          <h2>More than 5 years experience in restaurant technology</h2>
        </div>
      </div>
      <div className="max-md:col-span-full md:col-span-6 max-w-[590px] py-10">
        <p>
          MenuMitra has been at the forefront of restaurant digital transformation, 
          helping thousands of restaurants streamline their operations and enhance 
          customer satisfaction through innovative technology solutions.
          <br />
          <br />
          Our comprehensive platform includes digital menus, POS systems, kitchen 
          display systems, customer apps, and analytics tools that work seamlessly 
          together to create a complete restaurant management ecosystem. We believe 
          in empowering restaurants with technology that actually works.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="relative max-md:overflow-hidden max-md:py-25 py-150">
  <div className="absolute left-0 right-0 top-25 bg-[url('/images/core-gradient.png')] bg-no-repeat bg-center opacity-70 w-full h-full bg-[length:600px_1000px] md:hidden" />
  <div className="container ">
    <div className="mb-12 text-center max-w-[475px] mx-auto">
      <p className="section-tagline">Our Values</p>
      <h2>Our business is steered by our core values</h2>
    </div>
    <div className="relative z-10">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10 max-md:hidden">
        <div className="max-1xl:w-[335px] max-1xl:h-[335px]  1xl:w-[442px] 1xl:h-[442px]  rounded-full bg-primary-200/20 blur-[145px]" />
        <div className="max-1xl:w-[335px] max-1xl:h-[335px]  1xl:w-[442px] 1xl:h-[442px]  rounded-full bg-primary-200/25 -ml-[170px] max-md:ml-0 blur-[145px]" />
        <div className="max-1xl:w-[335px] max-1xl:h-[335px]  1xl:w-[442px] 1xl:h-[442px]  rounded-full bg-primary-200/20 -ml-[170px] max-md:ml-0 blur-[145px]" />
      </div>
      <div className=" grid grid-cols-3 max-md:grid-cols-1 gap-8">
        <div className="bg-white dark:bg-dark-200 shadow-box rounded-medium p-2.5">
          <div className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-10 max-lg:p-5 text-center h-full">
            <img
              src="/images/about/passion.svg"
              alt="value image"
              className="inline-block dark:hidden mb-6"
            />
            <img
              src="/images/about/passion-dark.svg"
              alt="value image"
              className="hidden dark:inline-block mb-6"
            />
            <h3 className="mb-2.5">Our Passion</h3>
            <p>
              We are passionate about revolutionizing the restaurant industry through 
              innovative technology solutions that make operations smoother and more efficient.
            </p>
          </div>
        </div>
        <div className="bg-white dark:bg-dark-200 shadow-box rounded-medium p-2.5 ">
          <div className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-10 max-lg:p-5 text-center h-full">
            <img
              src="/images/about/transparency.svg"
              alt="value image"
              className="inline-block dark:hidden mb-6"
            />
            <img
              src="/images/about/transparency-dark.svg"
              alt="value image"
              className="hidden dark:inline-block mb-6"
            />
            <h3 className="mb-2.5">Transparency</h3>
            <p>
              We believe in complete transparency with our clients, providing clear 
              pricing, honest communication, and reliable support throughout our partnership.
            </p>
          </div>
        </div>
        <div className="bg-white dark:bg-dark-200 shadow-box rounded-medium p-2.5">
          <div className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-10 max-lg:p-5 text-center h-full">
            <img
              src="/images/about/mission.svg"
              alt="value image"
              className="inline-block dark:hidden mb-6"
            />
            <img
              src="/images/about/mission-dark.svg"
              alt="value image"
              className="hidden dark:inline-block mb-6"
            />
            <h3 className="mb-2.5">Our Mission</h3>
            <p>
              To empower restaurants with cutting-edge technology that enhances 
              customer experience, streamlines operations, and drives sustainable growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<TestimonialsSlider />

      <FooterSection />
    </>
  );
};

export default AboutPage;
