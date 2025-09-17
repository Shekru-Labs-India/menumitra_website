"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import { 
  Utensils, 
  CheckCircle, 
  Play
} from 'lucide-react';

const RestaurantPage: React.FC = () => {
  const sectionConfig = useSectionConfig('outlet-types');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Restaurant Management
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Transform your restaurant operations with our comprehensive management system designed specifically for restaurants. 
        From table management to kitchen coordination, we handle every aspect of your business.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our restaurant management platform integrates seamlessly with your existing systems, providing real-time insights, 
        automated workflows, and enhanced customer service capabilities.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Whether you're running a casual dining restaurant or a fine dining establishment, our scalable system 
        adapts to your specific needs and helps you deliver exceptional dining experiences.
      </p>

      {/* Feature Image */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav mb-8">
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 text-center">
          <Utensils className="w-24 h-24 text-primary-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Complete Restaurant Solution</h3>
          <p className="text-gray-600 dark:text-gray-300">
            All-in-one platform for restaurant management and operations
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Restaurant Management Features</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our restaurant management system provides everything you need to run a successful restaurant. 
        From front-of-house operations to back-of-house management, we've designed every feature with restaurant owners in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Table management and reservation system</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Kitchen display system and order management</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Staff scheduling and performance tracking</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Customer relationship management and feedback</span>
        </li>
      </ul>

      {/* Video Section */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav relative mb-8">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-300 dark:to-dark-400 rounded-lg p-12 text-center relative">
          <Play className="w-16 h-16 text-primary-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">See Restaurant Management in Action</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Watch how our system transforms restaurant operations
          </p>
          <button className="btn-primary inline-flex items-center">
            <Play className="w-4 h-4 mr-2" />
            Watch Demo
          </button>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Restaurant</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our restaurant management system helps you increase efficiency, improve customer satisfaction, and boost profitability. 
        With comprehensive analytics and automated processes, you can focus on what matters most - serving great food.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Increase table turnover and revenue</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Reduce operational costs and waste</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Improve staff productivity and satisfaction</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Enhance customer experience and loyalty</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem="Restaurant"
      backgroundImage={sectionConfig.backgroundImage}
      routeMappings={sectionConfig.routeMappings}
      mainContent={mainContent}
    />
  );
};

export default RestaurantPage;