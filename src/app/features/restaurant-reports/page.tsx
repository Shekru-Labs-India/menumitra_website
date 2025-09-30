"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import YouTubeVideo from '@/components/atoms/YouTubeVideo';
import { 
  CheckCircle, 
} from 'lucide-react';

const RestaurantReportsPage: React.FC = () => {
  const sectionConfig = useSectionConfig('features');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Restaurant Reports & Analytics
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Make data-driven decisions with our comprehensive restaurant reporting and analytics system. 
        Track performance, identify trends, and optimize your operations with detailed insights.
      </p>
      <p className="text-lg text-gray-600 mb-6">
        Our analytics platform provides real-time dashboards, customizable reports, and predictive insights 
        to help you understand your business performance and make informed decisions.
      </p>
      <p className="text-lg text-gray-600 mb-8">
        Whether you're analyzing sales trends or optimizing staff schedules, our reporting tools 
        provide the insights you need to grow your restaurant business.
      </p>

      {/* Feature Image */}
      <div className="bg-white rounded-medium p-2.5 shadow-nav">
        <img
          src="/images/restaurant-reports.png"
          alt="MenuMitra Restaurant Reports & Analytics - Advanced Analytics Dashboard with real-time insights and performance metrics"
          className="w-[900px] h-auto object-cover rounded mx-auto block"
          loading="lazy"
        />
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Reporting Features</h3>
      <p className="text-lg text-gray-600 mb-6">
        Our restaurant reporting system provides comprehensive analytics across all aspects of your business. 
        From sales performance to customer behavior, we've designed every report with restaurant owners in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center"> 
          <span>Real-time sales and revenue analytics</span>
        </li>
        <li className="flex items-center"> 
          <span>Customer behavior and preference analysis</span>
        </li>
        <li className="flex items-center"> 
          <span>Staff performance and productivity metrics</span>
        </li>
        <li className="flex items-center"> 
          <span>Inventory usage and waste tracking</span>
        </li>
      </ul>

      {/* Video Section */}
      <YouTubeVideo 
        videoId="j2e2stCcICo"
        title="See Analytics in Action"
        description="Watch how our analytics system provides business insights"
      />

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Business</h3>
      <p className="text-lg text-gray-600 mb-6">
        Our restaurant reporting system helps you identify opportunities, optimize operations, and increase profitability. 
        With detailed analytics and actionable insights, you can make informed decisions to grow your business.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center"> 
          <span>Identify profitable menu items and pricing strategies</span>
        </li>
        <li className="flex items-center"> 
          <span>Optimize staff scheduling and reduce labor costs</span>
        </li>
        <li className="flex items-center"> 
          <span>Track customer satisfaction and retention rates</span>
        </li>
        <li className="flex items-center"> 
          <span>Monitor inventory levels and reduce waste</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem="Restaurant Reports"
      backgroundImage={sectionConfig.backgroundImage}
      routeMappings={sectionConfig.routeMappings}
      mainContent={mainContent}
    />
  );
};

export default RestaurantReportsPage;