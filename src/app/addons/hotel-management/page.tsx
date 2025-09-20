"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import YouTubeVideo from '@/components/atoms/YouTubeVideo';
import { 
  CheckCircle, 
} from 'lucide-react';

const HotelManagementPage: React.FC = () => {
  const sectionConfig = useSectionConfig('addons');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Hotel Management
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Streamline your hotel's restaurant and food service operations with our comprehensive hotel management system. 
        Manage multiple dining outlets, room service, and catering operations from one centralized platform.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our hotel management platform provides integrated restaurant operations, guest service management, and multi-outlet coordination 
        to help you deliver exceptional dining experiences across all your hotel's food service areas.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Whether you're managing a boutique hotel or a large resort, our system helps you coordinate 
        all food service operations and maintain consistent quality across all outlets.
      </p>

      {/* Feature Image */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav">
        <img
          src="/images/service-single1.png"
          alt="MenuMitra Hotel Management - Integrated Hotel Operations with comprehensive management for hotel food service operations"
          className="w-[900px] h-auto object-cover rounded mx-auto block"
          loading="lazy"
        />
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Hotel Management Features</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our hotel management system provides everything you need to coordinate food service operations across your hotel. 
        From multi-outlet management to guest service integration, we've designed every feature with hotel operations in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center"> 
          <span>Multi-outlet restaurant and dining management</span>
        </li>
        <li className="flex items-center"> 
          <span>Room service and in-room dining coordination</span>
        </li>
        <li className="flex items-center"> 
          <span>Event catering and banquet management</span>
        </li>
        <li className="flex items-center"> 
          <span>Guest preference tracking and personalized service</span>
        </li>
      </ul>

      {/* Video Section */}
      <YouTubeVideo 
        videoId="j2e2stCcICo"
        title="See Hotel Management in Action"
        description="Watch how our hotel management system streamlines operations"
      />

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Hotel</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our hotel management system helps you deliver exceptional dining experiences, improve operational efficiency, and increase guest satisfaction. 
        With integrated operations and personalized service, you can create memorable experiences for your guests.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center"> 
          <span>Deliver consistent quality across all dining outlets</span>
        </li>
        <li className="flex items-center"> 
          <span>Enhance guest experience with personalized service</span>
        </li>
        <li className="flex items-center"> 
          <span>Optimize operations and reduce costs</span>
        </li>
        <li className="flex items-center"> 
          <span>Increase revenue through improved service delivery</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem="Hotel Management"
      backgroundImage={sectionConfig.backgroundImage}
      routeMappings={sectionConfig.routeMappings}
      mainContent={mainContent}
    />
  );
};

export default HotelManagementPage;