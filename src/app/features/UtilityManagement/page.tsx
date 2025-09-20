"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import YouTubeVideo from '@/components/atoms/YouTubeVideo';
import { 
  CheckCircle, 
} from 'lucide-react';

const UtilityManagementPage: React.FC = () => {
  const sectionConfig = useSectionConfig('features');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Utility Management
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Optimize your restaurant's utility consumption and reduce operational costs with our comprehensive utility management system. 
        Monitor energy usage, water consumption, and other utilities to improve efficiency.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our utility management platform provides real-time monitoring, automated alerts, and detailed analytics 
        to help you identify opportunities for cost savings and environmental sustainability.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Whether you're managing a single location or multiple outlets, our system helps you track 
        and optimize utility consumption across all your restaurant operations.
      </p>

      {/* Feature Image */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav">
        <img
          src="/images/service-single1.png"
          alt="MenuMitra Utility Management - Smart Utility Monitoring with real-time tracking and optimization of utility consumption"
          className="w-[900px] h-auto object-cover rounded mx-auto block"
          loading="lazy"
        />
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Utility Management Features</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our utility management system provides everything you need to monitor and optimize your restaurant's utility consumption. 
        From energy tracking to cost analysis, we've designed every feature with efficiency in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center"> 
          <span>Real-time energy and water consumption monitoring</span>
        </li>
        <li className="flex items-center"> 
          <span>Automated alerts for unusual consumption patterns</span>
        </li>
        <li className="flex items-center"> 
          <span>Cost tracking and budget management</span>
        </li>
        <li className="flex items-center"> 
          <span>Sustainability reporting and environmental impact tracking</span>
        </li>
      </ul>

      {/* Video Section */}
      <YouTubeVideo 
        videoId="j2e2stCcICo"
        title="See Utility Management in Action"
        description="Watch how our utility system manages resources"
      />

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Restaurant</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our utility management system helps you reduce operational costs, improve efficiency, and contribute to environmental sustainability. 
        With detailed monitoring and automated alerts, you can optimize your utility consumption.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center"> 
          <span>Reduce utility costs and improve profitability</span>
        </li>
        <li className="flex items-center"> 
          <span>Identify and fix equipment inefficiencies</span>
        </li>
        <li className="flex items-center"> 
          <span>Contribute to environmental sustainability goals</span>
        </li>
        <li className="flex items-center"> 
          <span>Optimize utility consumption across all locations</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem="Utility Management"
      backgroundImage={sectionConfig.backgroundImage}
      routeMappings={sectionConfig.routeMappings}
      mainContent={mainContent}
    />
  );
};

export default UtilityManagementPage;