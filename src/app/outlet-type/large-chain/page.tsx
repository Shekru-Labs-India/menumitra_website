"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import YouTubeVideo from '@/components/atoms/YouTubeVideo';
import { 
  CheckCircle, 
} from 'lucide-react';

const LargeChainPage: React.FC = () => {
  const sectionConfig = useSectionConfig('outlet-types');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Large Chain Management
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Scale your restaurant chain operations with our enterprise-grade management system. 
        Coordinate multiple locations, maintain consistency, and optimize performance across your entire network.
      </p>
      <p className="text-lg text-gray-600 mb-6">
        Our large chain management platform provides centralized control, standardized operations, and comprehensive analytics 
        to help you maintain quality and drive growth across all your restaurant locations.
      </p>
      <p className="text-lg text-gray-600 mb-8">
        Whether you're managing a regional chain or a national franchise network, our system helps you 
        maintain operational excellence and drive consistent growth.
      </p>

      {/* Feature Image */}
      <div className="bg-white rounded-medium p-2.5 shadow-nav">
        <img
          src="/images/chain-management.png"
          alt="MenuMitra Large Chain Management - Enterprise Chain Operations with comprehensive management for large restaurant chains"
          className="w-[900px] h-auto object-cover rounded mx-auto block"
          loading="lazy"
        />
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Large Chain Management Features</h3>
      <p className="text-lg text-gray-600 mb-6">
        Our large chain management system provides everything you need to operate a successful restaurant chain. 
        From centralized control to performance optimization, we've designed every feature with chain operations in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center"> 
          <span>Centralized operations and multi-location management</span>
        </li>
        <li className="flex items-center"> 
          <span>Standardized procedures and quality control</span>
        </li>
        <li className="flex items-center"> 
          <span>Comprehensive analytics and performance benchmarking</span>
        </li>
        <li className="flex items-center"> 
          <span>Franchise management and support systems</span>
        </li>
      </ul>

      {/* Video Section */}
      <YouTubeVideo 
        videoId="j2e2stCcICo"
        title="See Large Chain Management in Action"
        description="Watch how our system manages large chain operations"
      />

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Restaurant Chain</h3>
      <p className="text-lg text-gray-600 mb-6">
        Our large chain management system helps you maintain consistency, optimize performance, and drive growth across all locations. 
        With centralized control and comprehensive analytics, you can scale your chain effectively.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center"> 
          <span>Maintain consistent quality and service standards</span>
        </li>
        <li className="flex items-center"> 
          <span>Optimize performance and identify best practices</span>
        </li>
        <li className="flex items-center"> 
          <span>Reduce operational costs through centralized management</span>
        </li>
        <li className="flex items-center"> 
          <span>Scale operations and support franchise growth</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem="Large Chain"
      backgroundImage={sectionConfig.backgroundImage}
      routeMappings={sectionConfig.routeMappings}
      mainContent={mainContent}
    />
  );
};

export default LargeChainPage;