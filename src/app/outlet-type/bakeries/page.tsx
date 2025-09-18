"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import { 
  Croissant,
  CheckCircle, 
  Play
} from 'lucide-react';

const BakeriesPage: React.FC = () => {
  const sectionConfig = useSectionConfig('outlet-types');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Bakery Management
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Streamline your bakery operations with our specialized management system. 
        Manage fresh baked goods, track inventory, and optimize production schedules for maximum freshness.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our bakery management platform provides production planning, freshness tracking, and customer ordering systems 
        to help you deliver the freshest baked goods while minimizing waste and maximizing profitability.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Whether you're running a small artisan bakery or a large commercial operation, our system helps you 
        maintain quality, freshness, and efficient production processes.
      </p>

      {/* Feature Image */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav mb-8">
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 text-center">
          <Croissant className="w-24 h-24 text-primary-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Fresh Bakery Operations</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Specialized management for bakery and pastry operations
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Bakery Management Features</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our bakery management system provides everything you need to operate a successful bakery business. 
        From production planning to freshness tracking, we've designed every feature with bakery operations in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center"> 
          <span>Production planning and batch scheduling</span>
        </li>
        <li className="flex items-center"> 
          <span>Freshness tracking and expiration management</span>
        </li>
        <li className="flex items-center"> 
          <span>Ingredient inventory and recipe management</span>
        </li>
        <li className="flex items-center"> 
          <span>Customer pre-orders and custom cake requests</span>
        </li>
      </ul>

      {/* Video Section */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav relative mb-8">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-300 dark:to-dark-400 rounded-lg p-12 text-center relative">
          <Play className="w-16 h-16 text-primary-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">See Bakery Management in Action</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Watch how our system optimizes bakery operations
          </p>
          <button className="btn-primary inline-flex items-center">
            <Play className="w-4 h-4 mr-2" />
            Watch Demo
          </button>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Bakery</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our bakery management system helps you maintain freshness, reduce waste, and optimize production. 
        With specialized tools and automated processes, you can focus on creating delicious baked goods.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center"> 
          <span>Maintain product freshness and quality standards</span>
        </li>
        <li className="flex items-center"> 
          <span>Reduce waste with accurate production planning</span>
        </li>
        <li className="flex items-center"> 
          <span>Optimize ingredient usage and cost management</span>
        </li>
        <li className="flex items-center"> 
          <span>Enhance customer service with pre-order capabilities</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem="Bakery"
      backgroundImage={sectionConfig.backgroundImage}
      routeMappings={sectionConfig.routeMappings}
      mainContent={mainContent}
    />
  );
};

export default BakeriesPage;