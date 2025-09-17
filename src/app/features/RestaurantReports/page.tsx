"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import { 
  BarChart3, 
  CheckCircle, 
  Play
} from 'lucide-react';

const RestaurantReportsPage: React.FC = () => {
  const sectionConfig = useSectionConfig('features');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Restaurant Reports & Analytics
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Make data-driven decisions with our comprehensive restaurant reporting and analytics system. 
        Track performance, identify trends, and optimize your operations with detailed insights.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our analytics platform provides real-time dashboards, customizable reports, and predictive insights 
        to help you understand your business performance and make informed decisions.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Whether you're analyzing sales trends or optimizing staff schedules, our reporting tools 
        provide the insights you need to grow your restaurant business.
      </p>

      {/* Feature Image */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav mb-8">
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 text-center">
          <BarChart3 className="w-24 h-24 text-primary-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Advanced Analytics Dashboard</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Real-time insights and performance metrics
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Reporting Features</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our restaurant reporting system provides comprehensive analytics across all aspects of your business. 
        From sales performance to customer behavior, we've designed every report with restaurant owners in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Real-time sales and revenue analytics</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Customer behavior and preference analysis</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Staff performance and productivity metrics</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Inventory usage and waste tracking</span>
        </li>
      </ul>

      {/* Video Section */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav relative mb-8">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-300 dark:to-dark-400 rounded-lg p-12 text-center relative">
          <Play className="w-16 h-16 text-primary-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">See Analytics in Action</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Watch how our reporting system provides business insights
          </p>
          <button className="btn-primary inline-flex items-center">
            <Play className="w-4 h-4 mr-2" />
            Watch Demo
          </button>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Business</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our restaurant reporting system helps you identify opportunities, optimize operations, and increase profitability. 
        With detailed analytics and actionable insights, you can make informed decisions to grow your business.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Identify profitable menu items and pricing strategies</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Optimize staff scheduling and reduce labor costs</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Track customer satisfaction and retention rates</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
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