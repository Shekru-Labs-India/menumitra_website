'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-dark-300 pb-150 relative sm:overflow-hidden">
      <div className="absolute left-0 right-0 top-25 bg-[url('/images/service-bg.png')] bg-no-repeat bg-cover bg-center opacity-70 w-full h-full sm:hidden"></div>
      <div className="container">
        <div className="mb-12">
          <p className="section-tagline max-lg:text-center">Our Services</p>
          <div className="block max-lg:text-center lg:flex">
            <h2 className="max-lg:mb-5">
              The world&apos;s best companies <br />
              trust aplio.
            </h2>
            <p className="max-w-[520px] mx-auto lg:ml-auto">
              Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&apos;s not Latin, though it
              looks like it
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
            <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav relative scale-100 hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark max-lg:p-5 p-10">
                <Image 
                  src="/images/services/investment.svg" 
                  alt="image" 
                  width={64} 
                  height={64} 
                  className="inline-block dark:hidden mb-6"
                />
                <Image 
                  src="/images/services/investment-dark.svg" 
                  alt="image" 
                  width={64} 
                  height={64} 
                  className="hidden dark:inline-block mb-6"
                />
                <Link href="/services-single" className="block">
                  <h3 className="mb-2.5">Investment Banks</h3>
                </Link>
                <p className="mb-6">Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.</p>
                <Link href="/services-single" className="btn-outline btn-sm">
                  Read More
                </Link>
              </div>
            </div>

            <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav relative scale-100 hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-10 h-full max-lg:p-5">
                <Image 
                  src="/images/services/sales.svg" 
                  alt="image" 
                  width={64} 
                  height={64} 
                  className="inline-block dark:hidden mb-6"
                />
                <Image 
                  src="/images/services/sales-dark.svg" 
                  alt="image" 
                  width={64} 
                  height={64} 
                  className="hidden dark:inline-block mb-6"
                />
                <Link href="/services-single" className="block">
                  <h3 className="mb-2.5">Sales & Trading</h3>
                </Link>
                <p className="mb-6">Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.</p>
                <Link href="/services-single" className="btn-outline btn-sm">
                  Read More
                </Link>
              </div>
            </div>

            <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav relative scale-100 hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-10 h-full max-lg:p-5">
                <Image 
                  src="/images/services/loan.svg" 
                  alt="image" 
                  width={64} 
                  height={64} 
                  className="inline-block dark:hidden mb-6"
                />
                <Image 
                  src="/images/services/loan-dark.svg" 
                  alt="image" 
                  width={64} 
                  height={64} 
                  className="hidden dark:inline-block mb-6"
                />
                <Link href="/services-single" className="block">
                  <h3 className="mb-2.5">Mortgage Loans</h3>
                </Link>
                <p className="mb-6">Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.</p>
                <Link href="/services-single" className="btn-outline btn-sm">
                  Read More
                </Link>
              </div>
            </div>

            <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav relative scale-100 hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-10 h-full max-lg:p-5">
                <Image 
                  src="/images/services/finance.svg" 
                  alt="image" 
                  width={64} 
                  height={64} 
                  className="inline-block dark:hidden mb-6"
                />
                <Image 
                  src="/images/services/finance-dark.svg" 
                  alt="image" 
                  width={64} 
                  height={64} 
                  className="hidden dark:inline-block mb-6"
                />
                <Link href="/services-single" className="block">
                  <h3 className="mb-2.5">Finance Analysis</h3>
                </Link>
                <p className="mb-6">Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.</p>
                <Link href="/services-single" className="btn-outline btn-sm">
                  Read More
                </Link>
              </div>
            </div>

            <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav relative scale-100 hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-10 h-full max-lg:p-5">
                <Image 
                  src="/images/services/effeciency.svg" 
                  alt="image" 
                  width={64} 
                  height={64} 
                  className="inline-block dark:hidden mb-6"
                />
                <Image 
                  src="/images/services/effeciency-dark.svg" 
                  alt="image" 
                  width={64} 
                  height={64} 
                  className="hidden dark:inline-block mb-6"
                />
                <Link href="/services-single" className="block">
                  <h3 className="mb-2.5">Increased Efficiency</h3>
                </Link>
                <p className="mb-6">Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.</p>
                <Link href="/services-single" className="btn-outline btn-sm">
                  Read More
                </Link>
              </div>
            </div>

            <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav relative scale-100 hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-10 h-full max-lg:p-5">
                <Image 
                  src="/images/services/fund.svg" 
                  alt="image" 
                  width={64} 
                  height={64} 
                  className="inline-block dark:hidden mb-6"
                />
                <Image 
                  src="/images/services/fund-dark.svg" 
                  alt="image" 
                  width={64} 
                  height={64} 
                  className="hidden dark:inline-block mb-6"
                />
                <Link href="/services-single" className="block">
                  <h3 className="mb-2.5">Fundraising Advice</h3>
                </Link>
                <p className="mb-6">Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.</p>
                <Link href="/services-single" className="btn-outline btn-sm">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;