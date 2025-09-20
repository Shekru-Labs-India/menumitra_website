"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import YouTubeVideo from '@/components/atoms/YouTubeVideo';
import { 
  CheckCircle, 
} from 'lucide-react';

const FoodCourtsPage: React.FC = () => {
  const sectionConfig = useSectionConfig('outlet-types');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Food Court Management
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Optimize your food court operations with our specialized management system. 
        Coordinate multiple vendors, manage shared spaces, and ensure smooth operations across all food outlets.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our food court management platform provides vendor coordination, shared resource management, and centralized operations 
        to help you maintain efficiency and quality across all food court outlets.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Whether you're managing a mall food court or a corporate dining facility, our system helps you 
        coordinate operations and deliver exceptional dining experiences.
      </p>

      {/* Feature Image */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav">
        <img
          src="/images/service-single1.png"
          alt="MenuMitra Food Court Management - Multi-Vendor Coordination with centralized management for food court operations"
          className="w-[900px] h-auto object-cover rounded mx-auto block"
          loading="lazy"
        />
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Food Court Management Features</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our food court management system provides everything you need to coordinate multiple vendors and maintain efficient operations. 
        From vendor management to shared resource coordination, we've designed every feature with food court operations in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center"> 
          <span>Multi-vendor coordination and management</span>
        </li>
        <li className="flex items-center"> 
          <span>Shared resource and facility management</span>
        </li>
        <li className="flex items-center"> 
          <span>Centralized payment and billing systems</span>
        </li>
        <li className="flex items-center"> 
          <span>Performance monitoring and analytics</span>
        </li>
      </ul>

      {/* Video Section */}
      <YouTubeVideo 
        videoId="j2e2stCcICo"
        title="See Food Court Management in Action"
        description="Watch how our system manages food court operations"
      />

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Food Court</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our food court management system helps you maintain operational efficiency, ensure quality standards, and optimize vendor performance. 
        With centralized coordination and shared resources, you can create a thriving food court environment.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center"> 
          <span>Streamline operations across multiple vendors</span>
        </li>
        <li className="flex items-center"> 
          <span>Optimize shared resources and reduce costs</span>
        </li>
        <li className="flex items-center"> 
          <span>Maintain consistent quality and service standards</span>
        </li>
        <li className="flex items-center"> 
          <span>Increase overall food court profitability</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem="Food Court"
      backgroundImage={sectionConfig.backgroundImage}
      routeMappings={sectionConfig.routeMappings}
      mainContent={mainContent}
    />
  );
};

export default FoodCourtsPage;