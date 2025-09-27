"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import YouTubeVideo from '@/components/atoms/YouTubeVideo';
import { 
  CheckCircle, 
} from 'lucide-react';

const BarPubPage: React.FC = () => {
  const sectionConfig = useSectionConfig('outlet-types');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Bar & Pub Management
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Optimize your bar and pub operations with our specialized management system. 
        Manage drinks, food service, and entertainment to create the perfect atmosphere for your customers.
      </p>
      <p className="text-lg text-gray-600 mb-6">
        Our bar and pub management platform provides beverage management, food service coordination, and entertainment scheduling 
        to help you deliver exceptional experiences and maximize profitability.
      </p>
      <p className="text-lg text-gray-600 mb-8">
        Whether you're running a neighborhood pub or a trendy bar, our system helps you 
        manage all aspects of your establishment efficiently.
      </p>

      {/* Feature Image */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav">
        <img
          src="/images/service-single1.png"
          alt="MenuMitra Bar & Pub Management - Bar Operations Excellence with specialized management for bar and pub operations"
          className="w-[900px] h-auto object-cover rounded mx-auto block"
          loading="lazy"
        />
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Bar & Pub Management Features</h3>
      <p className="text-lg text-gray-600 mb-6">
        Our bar and pub management system provides everything you need to operate a successful establishment. 
        From beverage management to entertainment coordination, we've designed every feature with bar operations in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center"> 
          <span>Beverage inventory and bar management</span>
        </li>
        <li className="flex items-center"> 
          <span>Food service and kitchen coordination</span>
        </li>
        <li className="flex items-center"> 
          <span>Entertainment scheduling and event management</span>
        </li>
        <li className="flex items-center"> 
          <span>Customer loyalty and membership programs</span>
        </li>
      </ul>

      {/* Video Section */}
      <YouTubeVideo 
        videoId="j2e2stCcICo"
        title="See Bar & Pub Management in Action"
        description="Watch how our system optimizes bar operations"
      />

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Bar & Pub</h3>
      <p className="text-lg text-gray-600 mb-6">
        Our bar and pub management system helps you increase sales, improve customer experience, and optimize operations. 
        With specialized tools and integrated services, you can create a thriving establishment.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center"> 
          <span>Increase beverage sales and profitability</span>
        </li>
        <li className="flex items-center"> 
          <span>Enhance customer experience and loyalty</span>
        </li>
        <li className="flex items-center"> 
          <span>Optimize inventory and reduce waste</span>
        </li>
        <li className="flex items-center"> 
          <span>Streamline operations and improve efficiency</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem="Bar & Pub"
      backgroundImage={sectionConfig.backgroundImage}
      routeMappings={sectionConfig.routeMappings}
      mainContent={mainContent}
    />
  );
};

export default BarPubPage;
