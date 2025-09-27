'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GraphBackground from '@/components/atoms/GraphBackground';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faDatabase, 
  faChartBar, 
  faSyncAlt,
  faCheck
} from '@fortawesome/free-solid-svg-icons';

interface FeatureItem {
  text: string;
  icon: any;
}

interface DataIntegrationsSectionProps {
  className?: string;
}

const defaultFeatures: FeatureItem[] = [
  { text: 'Real-Time Analytics Dashboard', icon: faChartBar },
  { text: 'POS System Integration', icon: faDatabase },
  { text: 'Automatic Data Synchronization', icon: faSyncAlt }
];

const DataIntegrationsSection: React.FC<DataIntegrationsSectionProps> = ({ 
  className = '' 
}) => {
  return (
    <section className={`bg-gray overflow-hidden relative pt-[300px] pb-150 max-md:pb-20 -mt-24 max-md:pt-[320px] max-md:-mt-60 ${className}`}>
    
      <div className="container relative z-10">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10 1xl:gap-x-24 items-end">
          <div>
            <p className="section-tagline">Data Integrations</p>
            <h2 className="max-lg:mb-4 mb-8">Seamless Integration with Your Restaurant Systems</h2>
            <p className="max-lg:mb-5 mb-11">
              Connect MenuMitra with your existing POS systems, payment processors, and analytics tools for a unified restaurant management experience.
            </p>
            <ul className="mb-14 [&>*:not(:last-child)]:mb-6 max-lg:[&>*:not(:last-child)]:mb-4">
              {defaultFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-x-3">
                  <span className="relative w-8 h-8 rounded-full bg-primary/10 shadow-icon flex items-center justify-center">
                    <FontAwesomeIcon 
                      icon={feature.icon} 
                      className="text-primary text-sm"
                    />
                  </span>
                  <span className=" font-jakarta_sans font-medium">{feature.text}</span>
                </li>
              ))}
            </ul>
            <Link href="/book-demo" className="btn">
              See Integration Demo
            </Link>
          </div>
          
          <div className="relative max-md:mt-150">
            <Image 
              src="/images/vision/vision-image.png" 
              alt="vision image" 
              width={310} 
              height={400}
              className="w-[260px] xl:w-[310px] "
            />
            <Image 
              src="/images/vision/vision-image-dark.png" 
              alt="vision image" 
              width={310} 
              height={400}
              className="w-[260px] xl:w-[310px] hidden"
            />
            
            {/* Floating image elements */}
            <div className="absolute -top-25 left-40 md:-top-12 xl:-top-[150px] xl:left-[290px] w-[200px] md:w-[200px] xl:w-[310px]">
              <Image 
                src="/images/vision/vision-image-1.png" 
                alt="vision image shape" 
                width={310} 
                height={200}
                className="w-full "
              />
              <Image 
                src="/images/vision/vision-image-dark-1.png" 
                alt="vision image shape" 
                width={310} 
                height={200}
                className="w-full hidden"
              />
            </div>
            
            <div className="absolute bottom-5 left-20 md:bottom-0 xl:bottom-8 md:left-[100px] xl:left-150 w-[280px] md:w-[200px] xl:w-[350px]">
              <Image 
                src="/images/vision/vision-image-2.png" 
                alt="vision image shape" 
                width={350} 
                height={300}
                className="w-full h-full "
              />
              <Image 
                src="/images/vision/vision-image-dark-2.png" 
                alt="vision image shape" 
                width={350} 
                height={300}
                className="w-full h-full hidden"
              />
            </div>
          </div>
        </div>
      </div>
        {/* Full Background Graph Pattern */}
        <GraphBackground 
        position="bottom"
        rotation="0deg"
        opacity={0.15}
      />

    </section>
  );
};

export default DataIntegrationsSection;
