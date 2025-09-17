"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import { 
  Receipt, 
  CheckCircle, 
  Play
} from 'lucide-react';

const PointOfSalePage: React.FC = () => {
  const sectionConfig = useSectionConfig('addons');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Point of Sale System
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Streamline your restaurant's sales operations with our comprehensive point of sale system. 
        Process orders, handle payments, and manage transactions with ease and efficiency.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our POS system provides intuitive order processing, multiple payment options, and real-time sales tracking 
        to help you manage your restaurant's daily operations effectively.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Whether you're running a small cafe or a large restaurant, our POS system adapts to your 
        business needs and provides the tools you need for successful sales management.
      </p>

      {/* Feature Image */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav mb-8">
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 text-center">
          <Receipt className="w-24 h-24 text-primary-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Complete POS Solution</h3>
          <p className="text-gray-600 dark:text-gray-300">
            All-in-one point of sale system for restaurants
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">POS System Features</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our point of sale system provides everything you need to manage sales operations efficiently. 
        From order processing to payment handling, we've designed every feature with restaurant operations in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Intuitive order processing and menu management</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Multiple payment options and secure processing</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Real-time sales tracking and reporting</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Inventory integration and automatic updates</span>
        </li>
      </ul>

      {/* Video Section */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav relative mb-8">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-300 dark:to-dark-400 rounded-lg p-12 text-center relative">
          <Play className="w-16 h-16 text-primary-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">See POS System in Action</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Watch how our system streamlines sales operations
          </p>
          <button className="btn-primary inline-flex items-center">
            <Play className="w-4 h-4 mr-2" />
            Watch Demo
          </button>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Restaurant</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our point of sale system helps you increase sales efficiency, reduce errors, and improve customer service. 
        With streamlined operations and real-time insights, you can focus on growing your business.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Increase sales efficiency and reduce wait times</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Minimize order errors and improve accuracy</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Enhance customer experience with faster service</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Gain insights into sales patterns and performance</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem="Point of Sale"
      backgroundImage={sectionConfig.backgroundImage}
      routeMappings={sectionConfig.routeMappings}
      mainContent={mainContent}
    />
  );
};

export default PointOfSalePage;