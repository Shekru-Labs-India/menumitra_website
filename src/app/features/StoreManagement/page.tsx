"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import YouTubeVideo from '@/components/atoms/YouTubeVideo';
import { 
  CheckCircle, 
} from 'lucide-react';

const StoreManagementPage: React.FC = () => {
  const sectionConfig = useSectionConfig('features');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Store Management
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Streamline your restaurant operations with our comprehensive store management system. 
        Manage multiple locations, coordinate staff, and maintain consistent operations across all outlets.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our store management platform provides centralized control over inventory, staff scheduling, and operational procedures. 
        Ensure consistency and quality across all your restaurant locations.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Whether you're managing a single location or a restaurant chain, our system scales with your business 
        and provides the tools you need for efficient store operations.
      </p>

      {/* Feature Image */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav">
        <img
          src="/images/service-single1.png"
          alt="MenuMitra Store Management - Multi-Location Control with centralized management for all your restaurant locations"
          className="w-[900px] h-auto object-cover rounded mx-auto block"
          loading="lazy"
        />
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Store Management Features</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our store management system provides everything you need to operate multiple restaurant locations efficiently. 
        From inventory coordination to staff management, we've designed every feature with multi-location operations in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center"> 
          <span>Multi-location inventory and supply management</span>
        </li>
        <li className="flex items-center"> 
          <span>Centralized staff scheduling and payroll</span>
        </li>
        <li className="flex items-center"> 
          <span>Standardized operational procedures and training</span>
        </li>
        <li className="flex items-center"> 
          <span>Performance monitoring and reporting across locations</span>
        </li>
      </ul>

      {/* Video Section */}
      <YouTubeVideo 
        videoId="j2e2stCcICo"
        title="See Store Management in Action"
        description="Watch how our store system optimizes operations"
      />

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Business</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our store management system helps you maintain consistency, reduce costs, and improve efficiency across all locations. 
        With centralized control and standardized processes, you can scale your restaurant business effectively.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center"> 
          <span>Maintain consistent quality across all locations</span>
        </li>
        <li className="flex items-center"> 
          <span>Reduce operational costs through centralized management</span>
        </li>
        <li className="flex items-center"> 
          <span>Improve staff efficiency and training consistency</span>
        </li>
        <li className="flex items-center"> 
          <span>Scale operations with standardized procedures</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem="Store Management"
      backgroundImage={sectionConfig.backgroundImage}
      routeMappings={sectionConfig.routeMappings}
      mainContent={mainContent}
    />
  );
};

export default StoreManagementPage;