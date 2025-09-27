"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import YouTubeVideo from '@/components/atoms/YouTubeVideo';
import { 
  CheckCircle, 
} from 'lucide-react';

const CloudKitchensPage: React.FC = () => {
  const sectionConfig = useSectionConfig('outlet-types');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Cloud Kitchen Management
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Optimize your cloud kitchen operations with our specialized management system. 
        Handle multiple brands, delivery platforms, and kitchen workflows efficiently.
      </p>
      <p className="text-lg text-gray-600 mb-6">
        Our cloud kitchen management platform provides multi-brand support, delivery integration, and kitchen optimization 
        to help you maximize efficiency and profitability in your delivery-focused operation.
      </p>
      <p className="text-lg text-gray-600 mb-8">
        Whether you're running a single brand or multiple virtual restaurants, our system helps you 
        manage complex operations and deliver exceptional food to your customers.
      </p>

      {/* Feature Image */}
      <div className="bg-white rounded-medium p-2.5 shadow-nav">
        <img
          src="/images/service-single1.png"
          alt="MenuMitra Cloud Kitchen Management - Multi-Brand Operations with specialized management for cloud kitchen and delivery operations"
          className="w-[900px] h-auto object-cover rounded mx-auto block"
          loading="lazy"
        />
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Cloud Kitchen Management Features</h3>
      <p className="text-lg text-gray-600 mb-6">
        Our cloud kitchen management system provides everything you need to operate a successful delivery-focused kitchen. 
        From multi-brand management to delivery optimization, we've designed every feature with cloud kitchen operations in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center"> 
          <span>Multi-brand and virtual restaurant management</span>
        </li>
        <li className="flex items-center"> 
          <span>Delivery platform integration and order aggregation</span>
        </li>
        <li className="flex items-center"> 
          <span>Kitchen workflow optimization and capacity management</span>
        </li>
        <li className="flex items-center"> 
          <span>Real-time performance analytics and profitability tracking</span>
        </li>
      </ul>

      {/* Video Section */}
      <YouTubeVideo 
        videoId="j2e2stCcICo"
        title="See Cloud Kitchen Management in Action"
        description="Watch how our system optimizes cloud kitchen operations"
      />

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Cloud Kitchen</h3>
      <p className="text-lg text-gray-600 mb-6">
        Our cloud kitchen management system helps you maximize efficiency, reduce costs, and increase profitability. 
        With specialized tools and automated processes, you can focus on delivering great food.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center"> 
          <span>Maximize kitchen capacity and operational efficiency</span>
        </li>
        <li className="flex items-center"> 
          <span>Reduce delivery times and improve customer satisfaction</span>
        </li>
        <li className="flex items-center"> 
          <span>Optimize multi-brand operations and revenue streams</span>
        </li>
        <li className="flex items-center"> 
          <span>Track performance and profitability across all brands</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem="Cloud Kitchen"
      backgroundImage={sectionConfig.backgroundImage}
      routeMappings={sectionConfig.routeMappings}
      mainContent={mainContent}
    />
  );
};

export default CloudKitchensPage;