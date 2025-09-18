"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import { 
  Truck, 
  CheckCircle, 
  Play
} from 'lucide-react';

const FoodTruckPage: React.FC = () => {
  const sectionConfig = useSectionConfig('outlet-types');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Food Truck Management
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Optimize your food truck operations with our mobile-friendly management system. 
        Manage locations, track inventory, and serve customers efficiently wherever you go.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our food truck management platform provides location tracking, inventory management, and customer engagement tools 
        to help you maximize sales and build a loyal customer base on the go.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Whether you're running a single food truck or a fleet, our system helps you 
        manage operations efficiently and grow your mobile food business.
      </p>

      {/* Feature Image */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav mb-8">
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 text-center">
          <Truck className="w-24 h-24 text-primary-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Mobile Food Operations</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Specialized management for food truck and mobile operations
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Food Truck Management Features</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our food truck management system provides everything you need to operate a successful mobile food business. 
        From location management to customer engagement, we've designed every feature with food truck operations in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center"> 
          <span>Location tracking and route optimization</span>
        </li>
        <li className="flex items-center"> 
          <span>Mobile inventory and supply management</span>
        </li>
        <li className="flex items-center"> 
          <span>Customer engagement and social media integration</span>
        </li>
        <li className="flex items-center"> 
          <span>Sales tracking and performance analytics</span>
        </li>
      </ul>

      {/* Video Section */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav relative mb-8">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-300 dark:to-dark-400 rounded-lg p-12 text-center relative">
          <Play className="w-16 h-16 text-primary-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">See Food Truck Management in Action</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Watch how our system optimizes mobile food operations
          </p>
          <button className="btn-primary inline-flex items-center">
            <Play className="w-4 h-4 mr-2" />
            Watch Demo
          </button>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Food Truck</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our food truck management system helps you increase sales, build customer loyalty, and optimize operations. 
        With mobile-friendly tools and location-based features, you can grow your mobile food business effectively.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center"> 
          <span>Increase sales with strategic location planning</span>
        </li>
        <li className="flex items-center"> 
          <span>Build customer loyalty with engagement tools</span>
        </li>
        <li className="flex items-center"> 
          <span>Optimize inventory and reduce waste</span>
        </li>
        <li className="flex items-center"> 
          <span>Streamline operations and improve efficiency</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem="Food Truck"
      backgroundImage={sectionConfig.backgroundImage}
      routeMappings={sectionConfig.routeMappings}
      mainContent={mainContent}
    />
  );
};

export default FoodTruckPage;
