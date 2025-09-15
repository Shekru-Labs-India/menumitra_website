'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GraphBackground from '@/components/atoms/GraphBackground';

interface FeatureItem {
  text: string;
}

interface DataIntegrationsSectionProps {
  className?: string;
}

const defaultFeatures: FeatureItem[] = [
  { text: 'Guided Payment Procurement' },
  { text: 'Guided Payment Procurement' },
  { text: 'Guided Payment Procurement' }
];

const DataIntegrationsSection: React.FC<DataIntegrationsSectionProps> = ({ 
  className = '' 
}) => {
  return (
    <section className={`bg-gray dark:bg-dark overflow-hidden relative pt-[300px] pb-150 max-md:pb-20 -mt-24 max-md:pt-[320px] max-md:-mt-60 dark:-mt-24 dark:max-md:-mt-60 ${className}`}>
      {/* Full Background Graph Pattern */}
      <GraphBackground 
        position="center"
        rotation="0deg"
        opacity={0.15}
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10 1xl:gap-x-24 items-end">
          <div>
            <p className="section-tagline">Data Integrations</p>
            <h2 className="max-lg:mb-4 mb-8">A strong vision is crucial for the analysis of wealth.</h2>
            <p className="max-lg:mb-5 mb-11">
              Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text nothing Before & After magazine.
            </p>
            <ul className="mb-14 [&>*:not(:last-child)]:mb-6 max-lg:[&>*:not(:last-child)]:mb-4">
              {defaultFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-x-2">
                  <span className="relative w-7 h-7 rounded-full bg-white dark:bg-dark-200 shadow-icon flex items-center justify-center">
                    <i className="fa-solid fa-check text-paragraph dark:text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></i>
                  </span>
                  <span className="dark:text-white font-jakarta_sans font-medium">{feature.text}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn">
              Start Your Journey
            </Link>
          </div>
          
          <div className="relative max-md:mt-150">
            <Image 
              src="/images/vision/vision-image.png" 
              alt="vision image" 
              width={310} 
              height={400}
              className="w-[260px] xl:w-[310px] dark:hidden"
            />
            <Image 
              src="/images/vision/vision-image-dark.png" 
              alt="vision image" 
              width={310} 
              height={400}
              className="w-[260px] xl:w-[310px] hidden dark:inline-block"
            />
            
            {/* Floating image elements */}
            <div className="absolute -top-25 left-40 md:-top-12 xl:-top-[150px] xl:left-[290px] w-[200px] md:w-[200px] xl:w-[310px]">
              <Image 
                src="/images/vision/vision-image-1.png" 
                alt="vision image shape" 
                width={310} 
                height={200}
                className="w-full dark:hidden"
              />
              <Image 
                src="/images/vision/vision-image-dark-1.png" 
                alt="vision image shape" 
                width={310} 
                height={200}
                className="w-full hidden dark:inline-block"
              />
            </div>
            
            <div className="absolute bottom-5 left-20 md:bottom-0 xl:bottom-8 md:left-[100px] xl:left-150 w-[280px] md:w-[200px] xl:w-[350px]">
              <Image 
                src="/images/vision/vision-image-2.png" 
                alt="vision image shape" 
                width={350} 
                height={300}
                className="w-full h-full dark:hidden"
              />
              <Image 
                src="/images/vision/vision-image-dark-2.png" 
                alt="vision image shape" 
                width={350} 
                height={300}
                className="w-full h-full hidden dark:inline-block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataIntegrationsSection;
