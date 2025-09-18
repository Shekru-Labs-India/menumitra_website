"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import YouTubeVideo from '@/components/atoms/YouTubeVideo';
import { 
  Utensils, 
  CheckCircle, 
} from 'lucide-react';

const FineDinePage: React.FC = () => {
  const sectionConfig = useSectionConfig('outlet-types');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Fine Dining Management
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Elevate your fine dining restaurant operations with our sophisticated management system. 
        Deliver exceptional dining experiences with premium service and elegant presentation.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our fine dining management platform provides advanced reservation systems, wine pairing recommendations, 
        and detailed service protocols to ensure every guest receives a memorable dining experience.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Whether you're running a Michelin-starred restaurant or an upscale dining establishment, our system helps you 
        maintain the highest standards of service and culinary excellence.
      </p>

      {/* Feature Image */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav mb-8">
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 text-center">
          <Utensils className="w-24 h-24 text-primary-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Premium Dining Experience</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Sophisticated management for fine dining establishments
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Fine Dining Management Features</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our fine dining management system provides everything you need to deliver exceptional dining experiences. 
        From reservation management to service protocols, we've designed every feature with fine dining excellence in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center"> 
          <span>Advanced reservation and table management</span>
        </li>
        <li className="flex items-center"> 
          <span>Wine pairing and sommelier recommendations</span>
        </li>
        <li className="flex items-center"> 
          <span>Detailed service protocols and staff training</span>
        </li>
        <li className="flex items-center"> 
          <span>Guest preference tracking and personalized service</span>
        </li>
      </ul>

      {/* Video Section */}
      <YouTubeVideo 
        videoId="j2e2stCcICo"
        title="See Fine Dining Management in Action"
        description="Watch how our system enhances fine dining experience"
      />

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Fine Dining Restaurant</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our fine dining management system helps you deliver exceptional service, maintain high standards, and create memorable experiences. 
        With sophisticated tools and detailed protocols, you can exceed guest expectations.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center"> 
          <span>Deliver exceptional service and guest experiences</span>
        </li>
        <li className="flex items-center"> 
          <span>Maintain consistent quality and service standards</span>
        </li>
        <li className="flex items-center"> 
          <span>Build a loyal clientele with personalized service</span>
        </li>
        <li className="flex items-center"> 
          <span>Optimize operations while maintaining elegance</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem="Fine Dining"
      backgroundImage={sectionConfig.backgroundImage}
      routeMappings={sectionConfig.routeMappings}
      mainContent={mainContent}
    />
  );
};

export default FineDinePage;