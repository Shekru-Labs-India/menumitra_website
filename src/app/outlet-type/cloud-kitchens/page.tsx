"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import { 
  Cloud, 
  CheckCircle, 
  Play
} from 'lucide-react';

const CloudKitchensPage: React.FC = () => {
  const sectionConfig = useSectionConfig('outlet-types');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Cloud Kitchen Management
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Optimize your cloud kitchen operations with our specialized management system. 
        Handle multiple brands, delivery platforms, and kitchen workflows efficiently.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our cloud kitchen management platform provides multi-brand support, delivery integration, and kitchen optimization 
        to help you maximize efficiency and profitability in your delivery-focused operation.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Whether you're running a single brand or multiple virtual restaurants, our system helps you 
        manage complex operations and deliver exceptional food to your customers.
      </p>

      {/* Feature Image */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav mb-8">
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 text-center">
          <Cloud className="w-24 h-24 text-primary-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Multi-Brand Operations</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Specialized management for cloud kitchen and delivery operations
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Cloud Kitchen Management Features</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
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
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav relative mb-8">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-300 dark:to-dark-400 rounded-lg p-12 text-center relative">
          <Play className="w-16 h-16 text-primary-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">See Cloud Kitchen Management in Action</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Watch how our system optimizes cloud kitchen operations
          </p>
          <button className="btn-primary inline-flex items-center">
            <Play className="w-4 h-4 mr-2" />
            Watch Demo
          </button>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Cloud Kitchen</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
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