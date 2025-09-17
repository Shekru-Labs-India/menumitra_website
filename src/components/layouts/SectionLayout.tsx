"use client";

import React, { useState, ReactNode } from 'react';
import Header from '@/components/organisms/Header';
import FooterSection from '@/components/organisms/FooterSection';
import SectionDivider from '@/components/atoms/SectionDivider';
import { ChevronRight } from 'lucide-react';

interface SectionLayoutProps {
  children: ReactNode;
  sidebarTitle: string;
  sidebarItems: string[];
  defaultActiveItem: string;
  mainContent: ReactNode;
  backgroundImage?: string;
}

const SectionLayout: React.FC<SectionLayoutProps> = ({
  children,
  sidebarTitle,
  sidebarItems,
  defaultActiveItem,
  mainContent,
  backgroundImage = "bg-service-bg"
}) => {
  const [activeItem, setActiveItem] = useState(defaultActiveItem);

  return (
    <>
      <Header />
      
      {/* Main Content Section */}
      <section className="pt-[200px] pb-150 max-md:pt-25 relative max-md:overflow-hidden max-md:pb-20">
        <div className={`absolute left-0 right-0 -top-8 ${backgroundImage} bg-no-repeat bg-cover bg-center opacity-70 w-full h-full sm:hidden`}></div>
        <div className="container relative z-10">
          <div className="absolute left-1/2 top-52 -translate-x-1/2 flex max-md:flex-col -z-10 max-md:hidden">
            <div className="lg:w-[330px] lg:h-[330px] xl:w-[442px] xl:h-[442px] blur-[145px] rounded-full bg-primary-200/20"></div>
            <div className="lg:w-[330px] lg:h-[330px] xl:w-[442px] xl:h-[442px] blur-[145px] rounded-full bg-primary-200/25 lg:-ml-[170px]"></div>
            <div className="lg:w-[330px] lg:h-[330px] xl:w-[442px] xl:h-[442px] blur-[145px] rounded-full bg-primary-200/20 lg:-ml-[170px]"></div>
          </div>

          <div className="grid grid-cols-12 gap-y-15 md:gap-8 lg:gap-16 auto-rows-max">
            {/* Sidebar Navigation */}
            <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav max-md:hidden md:col-span-6 lg:col-span-4 self-start md:sticky md:top-20 max-md:static">
              <div className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark pt-9 px-10 pb-7">
                <h3 className="mb-3">{sidebarTitle}</h3>
                <ul className="[&>*:not(:last-child)]:border-dashed [&>*:not(:last-child)]:border-gray-100 dark:[&>*:not(:last-child)]:border-borderColour-dark [&>*:not(:last-child)]:border-b">
                  {sidebarItems.map((item, index) => (
                    <li key={index} className={`group ${activeItem === item ? 'tabActive' : ''}`}>
                      <button
                        onClick={() => setActiveItem(item)}
                        className="flex items-center justify-between py-5 font-medium relative before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 w-full text-left"
                      >
                        {item}
                        <ChevronRight className={`w-4 h-4 ${activeItem === item ? 'block' : 'hidden'}`} />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="relative max-md:col-span-full md:col-span-6 lg:col-span-8">
              <div className="relative singlePage max-md:mt-20">
                {mainContent}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content */}
      {children}

      <SectionDivider />
      <FooterSection />
    </>
  );
};

export default SectionLayout;
