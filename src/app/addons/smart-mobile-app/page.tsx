"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import { 
  Smartphone, 
  CheckCircle, 
  Play
} from 'lucide-react';

const SmartMobileAppPage: React.FC = () => {
  const sectionConfig = useSectionConfig('addons');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Smart Mobile App
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Empower your restaurant operations with our comprehensive smart mobile application. 
        Manage your business on-the-go with powerful tools and real-time insights.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our smart mobile app provides restaurant owners and managers with complete control over operations, 
        from inventory management to staff scheduling, all accessible from their mobile device.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Whether you're managing a single location or multiple outlets, our mobile app gives you the flexibility 
        to run your restaurant business from anywhere, anytime.
      </p>

      {/* Feature Image */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav mb-8">
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 text-center">
          <Smartphone className="w-24 h-24 text-primary-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Mobile Business Management</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Complete restaurant management in your pocket
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Smart Mobile App Features</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our smart mobile app provides everything you need to manage your restaurant business remotely. 
        From real-time monitoring to operational control, we've designed every feature with mobile convenience in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Real-time sales monitoring and analytics</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Inventory management and stock alerts</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Staff scheduling and performance tracking</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Customer feedback and review management</span>
        </li>
      </ul>

      {/* Video Section */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav relative mb-8">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-300 dark:to-dark-400 rounded-lg p-12 text-center relative">
          <Play className="w-16 h-16 text-primary-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">See Smart Mobile App in Action</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Watch how our app empowers mobile restaurant management
          </p>
          <button className="btn-primary inline-flex items-center">
            <Play className="w-4 h-4 mr-2" />
            Watch Demo
          </button>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Business</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our smart mobile app helps you stay connected to your restaurant business 24/7. With real-time insights and 
        remote control capabilities, you can manage your operations effectively from anywhere.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Stay connected to your business 24/7</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Make informed decisions with real-time data</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Respond quickly to operational issues</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Optimize operations with mobile insights</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem="Smart Mobile App"
      backgroundImage={sectionConfig.backgroundImage}
      routeMappings={sectionConfig.routeMappings}
      mainContent={mainContent}
    />
  );
};

export default SmartMobileAppPage;