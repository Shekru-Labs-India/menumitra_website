import React from 'react';
import Image from 'next/image';

interface SolutionSectionProps {
  className?: string;
}

const SolutionSection: React.FC<SolutionSectionProps> = ({ className = '' }) => {
  return (
    <section className=" bg-white dark:bg-dark-300 overflow-hidden relative pt-[160px] pb-150 lg:pb-15 max-lg:pt-20 max-lg:pb-150">
  <div className="container ">
    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10 1xl:gap-x-24 items-center">
      <div className="max-md:order-2">
        <div className="relative pt-150 lg:py-150 lg:px-150">
          <div className="w-[250px] lg:w-[300px] aspect-video relative mx-auto">
            <img
              src="images/solution/solution.png"
              alt="vision image"
              className="dark:hidden"
            />
            <img
              src="images/solution/solution-dark.png"
              alt="vision image"
              className="hidden dark:inline-block"
            />
            <div
              className="absolute left-10 -top-[130px] lg:-top-[185px] lg:left-15 right-auto bottom-auto w-[250px] h-[150px] lg:w-[280px] lg:h-[180px] xl:w-[320px] xl:h-[230px]"
              data-aos="fade-left"
              data-aos-offset={200}
              data-aos-duration={1000}
              data-aos-once="true"
            >
              <img
                src="images/solution/solution-shape1.png"
                alt="vision image"
                className="dark:hidden  w-full"
              />
              <img
                src="images/solution/solution-shape1-dark.png"
                alt="vision image"
                className="hidden dark:inline-block w-full"
              />
            </div>
            <div
              className="absolute right-12 top-12 lg:right-20 left-auto bottom-auto w-[280px] h-[190px] lg:w-[320px] lg:h-[230px] xl:w-[368px] xl:h-[280px]"
              data-aos="fade-up"
              data-aos-offset={200}
              data-aos-duration={1000}
              data-aos-delay={100}
              data-aos-once="true"
            >
              <img
                src="images/solution/solution-shape2.png"
                alt="vision image"
                className="dark:hidden  w-full"
              />
              <img
                src="images/solution/solution-shape2-dark.png"
                alt="vision image"
                className="hidden dark:inline-block w-full"
              />
            </div>
            <div
              className="absolute left-[175px] -bottom-[70px] lg:-bottom-[86px] lg:left-[200px] right-auto top-auto w-[150px] lg:w-[170px] aspect-video"
              data-aos="fade-left"
              data-aos-offset={200}
              data-aos-duration={1000}
              data-aos-delay={200}
              data-aos-once="true"
            >
              <img
                src="images/solution/solution-shape3.png"
                alt="vision image"
                className="dark:hidden  w-full"
              />
              <img
                src="images/solution/solution-shape3-dark.png"
                alt="vision image"
                className="hidden dark:inline-block w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-md:order-1 lg:-mt-15">
        <p className="section-tagline">Smart Solutions</p>
        <h2 className="max-lg:mb-4 mb-8">
          Powerful restaurant technology solutions that work 24/7
        </h2>
        <p className="max-lg:mb-6 mb-11">
          MenuMitra provides comprehensive digital menu solutions that transform your restaurant operations. 
          Our AI-powered platform ensures seamless service delivery and maximum efficiency for your business.
        </p>
        <ul className="max-lg:mb-6 mb-14 flex max-md:flex-col max-md:gap-y-5 lg:items-center lg:[&>*:not(:last-child)]:mr-10 ">
          <li className="relative flex items-center gap-x-2 ">
            <i className="fa-solid fa-check text-paragraph dark:text-primary" />
            <span className="dark:text-white font-jakarta_sans font-medium">
              24/7 Support
            </span>
          </li>
          <li className="relative flex items-center gap-x-2 ">
            <i className="fa-solid fa-check text-paragraph dark:text-primary" />
            <span className="dark:text-white font-jakarta_sans font-medium">
              Real-time Analytics
            </span>
          </li>
          <li className="relative flex items-center gap-x-2 ">
            <i className="fa-solid fa-check text-paragraph dark:text-primary" />
            <span className="dark:text-white font-jakarta_sans font-medium">
              Cloud-based Platform
            </span>
          </li>
        </ul>
        <a href="/book-demo" className="btn-outline">
          Get Started Today
        </a>
      </div>
    </div>
  </div>
</section>

  );
};

export default SolutionSection;
