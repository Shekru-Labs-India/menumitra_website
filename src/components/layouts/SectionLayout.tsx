"use client";

import React, { useState, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import FooterSection from '@/components/organisms/FooterSection';
import SectionDivider from '@/components/atoms/SectionDivider';
import BookDemoForm from '@/components/forms/BookDemoForm';
import { ChevronRight } from 'lucide-react';

interface SectionLayoutProps {
  children?: ReactNode;
  sidebarTitle: string;
  sidebarItems: string[];
  defaultActiveItem: string;
  mainContent: ReactNode;
  backgroundImage?: string;
  routeMappings: Record<string, string>;
}

const SectionLayout: React.FC<SectionLayoutProps> = ({
  children,
  sidebarTitle,
  sidebarItems,
  defaultActiveItem,
  mainContent,
  backgroundImage = "bg-service-bg",
  routeMappings
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState(defaultActiveItem);

  const handleItemClick = (item: string) => {
    const route = routeMappings[item];
    if (route && route !== pathname) {
      router.push(route);
    }
    setActiveItem(item);
  };

  return (
    <>
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
            <div className="bg-white rounded-medium p-2.5 shadow-nav max-md:hidden md:col-span-6 lg:col-span-4 self-start md:sticky md:top-25 max-md:static">
              <div className="border border-dashed rounded border-gray-100 pt-4 px-6 pb-5">
                <h3 className="mb-3">{sidebarTitle}</h3>
                <ul className="[&>*:not(:last-child)]:border-dashed [&>*:not(:last-child)]:border-gray-100 [&>*:not(:last-child)]:border-b">
                  {sidebarItems.map((item, index) => (
                    <li key={index} className={`group ${activeItem === item ? 'tabActive' : ''}`}>
                      <button
                        onClick={() => handleItemClick(item)}
                        className="flex items-center justify-between py-3 font-medium relative before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 w-full text-left"
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

      {/* Book Demo Form Section */}
      <section className="relative pb-25 max-md:overflow-hidden">
        <div className="container relative max-md:text-center">
          <div className="absolute left-1/2 -bottom-[442px] -translate-x-1/2 flex max-md:flex-col -z-10 max-md:hidden">
            <div className="max-md:hidden max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/20 blur-[145px]"></div>
            <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/25 -ml-[170px] max-md:ml-0 blur-[145px]"></div>
            <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/20 -ml-[170px] max-md:ml-0 blur-[145px]"></div>
          </div>
          <div className="absolute left-1/2 -bottom-[350px] p-[350px] -translate-x-1/2 bg-contain w-full h-full bg-hero-gradient bg-no-repeat bg-center opacity-70 md:hidden -z-10"></div>
          
          <div className="text-center mb-12">
            <p className="text-primary-600 font-medium mb-2">Get Started</p>
            <h2 className="mb-5 max-lg:text-[32px] text-[48px] font-semibold">
              Ready to transform your restaurant operations?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Book a personalized demo and see how MenuMitra can streamline your restaurant management, 
              from billing to inventory, all in one powerful platform.
            </p>
          </div>
          
          <BookDemoForm 
            title="Book Your Free Demo"
            description="Fill out the form below and our team will contact you within 24 hours to schedule your personalized demo."
            submitButtonText="Book Demo Now"
            showBackground={false}
            containerClassName="bg-transparent"
            formClassName="bg-white border border-dashed rounded border-gray-100 p-12 max-md:p-5"
          />
        </div>
      </section>

      <SectionDivider />
      <FooterSection />
    </>
  );
};

export default SectionLayout;
