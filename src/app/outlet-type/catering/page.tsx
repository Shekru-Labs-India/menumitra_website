"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import YouTubeVideo from '@/components/atoms/YouTubeVideo';
import { 
  CheckCircle, 
} from 'lucide-react';

const CateringPage: React.FC = () => {
  const sectionConfig = useSectionConfig('outlet-types');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Catering Management
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Streamline your catering operations with our comprehensive management system. 
        Manage events, coordinate deliveries, and ensure exceptional service for all your catering clients.
      </p>
      <p className="text-lg text-gray-600 mb-6">
        Our catering management platform provides event planning, menu customization, and delivery coordination 
        to help you deliver memorable experiences and build lasting client relationships.
      </p>
      <p className="text-lg text-gray-600 mb-8">
        Whether you're catering corporate events or private parties, our system helps you 
        manage all aspects of your catering business efficiently.
      </p>

      {/* Feature Image */}
      <div className="bg-white rounded-medium p-2.5 shadow-nav">
        <img
          src="/images/catering-management.png"
          alt="MenuMitra Catering Management - Event Catering Excellence with specialized management for catering and event operations"
          className="w-[900px] h-auto object-cover rounded mx-auto block"
          loading="lazy"
        />
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Catering Management Features</h3>
      <p className="text-lg text-gray-600 mb-6">
        Our catering management system provides everything you need to operate a successful catering business. 
        From event planning to delivery coordination, we've designed every feature with catering operations in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center"> 
          <span>Event planning and client management</span>
        </li>
        <li className="flex items-center"> 
          <span>Menu customization and dietary requirement handling</span>
        </li>
        <li className="flex items-center"> 
          <span>Delivery coordination and logistics management</span>
        </li>
        <li className="flex items-center"> 
          <span>Staff scheduling and on-site service coordination</span>
        </li>
      </ul>

      {/* Video Section */}
      <YouTubeVideo 
        videoId="j2e2stCcICo"
        title="See Catering Management in Action"
        description="Watch how our system manages catering operations"
      />

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Catering Business</h3>
      <p className="text-lg text-gray-600 mb-6">
        Our catering management system helps you deliver exceptional events, build client relationships, and grow your business. 
        With specialized tools and comprehensive planning, you can focus on creating memorable experiences.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center"> 
          <span>Deliver exceptional events and build client loyalty</span>
        </li>
        <li className="flex items-center"> 
          <span>Streamline operations and reduce coordination complexity</span>
        </li>
        <li className="flex items-center"> 
          <span>Optimize resource allocation and reduce costs</span>
        </li>
        <li className="flex items-center"> 
          <span>Scale operations and take on larger events</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem="Catering"
      backgroundImage={sectionConfig.backgroundImage}
      routeMappings={sectionConfig.routeMappings}
      mainContent={mainContent}
    />
  );
};

export default CateringPage;
