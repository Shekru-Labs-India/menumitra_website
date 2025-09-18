"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import YouTubeVideo from '@/components/atoms/YouTubeVideo';
import { 
  LinkIcon, 
  CheckCircle
} from 'lucide-react';

const ChainManagementPage: React.FC = () => {
  const sectionConfig = useSectionConfig('features');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Chain Management
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Manage your restaurant chain operations with our comprehensive chain management system. 
        Coordinate multiple locations, maintain brand consistency, and optimize performance across all outlets.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our chain management platform provides centralized control over operations, inventory, staff, and customer data 
        while allowing each location to maintain its local identity and operational flexibility.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Whether you're managing a small chain or a large franchise network, our system scales with your business 
        and provides the tools you need for effective chain operations.
      </p>

      {/* Feature Image */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav mb-8">
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 text-center">
          <LinkIcon className="w-24 h-24 text-primary-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Multi-Location Control</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Centralized management for all your chain locations
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Chain Management Features</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our chain management system provides everything you need to operate multiple restaurant locations effectively. 
        From centralized control to local autonomy, we've designed every feature with chain operations in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center"> 
          <span>Centralized inventory and supply chain management</span>
        </li>
        <li className="flex items-center"> 
          <span>Standardized operations and quality control</span>
        </li>
        <li className="flex items-center"> 
          <span>Multi-location staff scheduling and management</span>
        </li>
        <li className="flex items-center"> 
          <span>Performance monitoring and benchmarking across locations</span>
        </li>
      </ul>

      {/* Video Section */}
      <YouTubeVideo 
        videoId="j2e2stCcICo"
        title="See Chain Management in Action"
        description="Watch how our system streamlines chain operations"
      />

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Chain</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our chain management system helps you maintain consistency, reduce costs, and improve performance across all locations. 
        With centralized control and local flexibility, you can scale your chain effectively.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center"> 
          <span>Maintain brand consistency across all locations</span>
        </li>
        <li className="flex items-center"> 
          <span>Reduce operational costs through centralized management</span>
        </li>
        <li className="flex items-center"> 
          <span>Improve performance through benchmarking and best practices</span>
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
      defaultActiveItem="Chain Management"
      backgroundImage={sectionConfig.backgroundImage}
      routeMappings={sectionConfig.routeMappings}
      mainContent={mainContent}
    />
  );
};

export default ChainManagementPage;