"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import { 
  Package, 
  CheckCircle, 
  Play
} from 'lucide-react';

const InventoryPage: React.FC = () => {
  const sectionConfig = useSectionConfig('features');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Smart Inventory Management
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Streamline your restaurant's inventory operations with our comprehensive inventory management system. 
        Track stock levels, manage suppliers, and optimize your food costs with real-time insights.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our intelligent inventory platform provides automated stock tracking, low-stock alerts, and 
        predictive analytics to help you maintain optimal inventory levels and reduce waste.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Whether you're managing a single location or multiple outlets, our scalable inventory system 
        ensures you always have the right ingredients at the right time.
      </p>

      {/* Feature Image */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav mb-8">
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 text-center">
          <Package className="w-24 h-24 text-primary-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Real-Time Inventory Tracking</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Monitor stock levels and get alerts when items are running low
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Key Features</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our inventory management system includes everything you need to control your restaurant's stock efficiently. 
        From automated tracking to supplier management, we've designed every feature with restaurant operations in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center"> 
          <span>Real-time stock level monitoring</span>
        </li>
        <li className="flex items-center"> 
          <span>Automated low-stock alerts and notifications</span>
        </li>
        <li className="flex items-center"> 
          <span>Supplier management and purchase orders</span>
        </li>
        <li className="flex items-center"> 
          <span>Cost tracking and waste reduction analytics</span>
        </li>
      </ul>

      {/* Video Section */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav relative mb-8">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-300 dark:to-dark-400 rounded-lg p-12 text-center relative">
          <Play className="w-16 h-16 text-primary-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">See Inventory Management in Action</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Watch how our inventory system optimizes restaurant operations
          </p>
          <button className="btn-primary inline-flex items-center">
            <Play className="w-4 h-4 mr-2" />
            Watch Demo
          </button>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Restaurant</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our inventory management system helps you reduce costs, minimize waste, and ensure you never run out of essential ingredients. 
        With predictive analytics and automated alerts, you can focus on serving great food while we handle the inventory complexity.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center"> 
          <span>Reduce food waste by up to 30%</span>
        </li>
        <li className="flex items-center"> 
          <span>Optimize purchasing decisions with data insights</span>
        </li>
        <li className="flex items-center"> 
          <span>Streamline supplier relationships and ordering</span>
        </li>
        <li className="flex items-center"> 
          <span>Improve cash flow with better inventory control</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem="Inventory"
      backgroundImage={sectionConfig.backgroundImage}
      routeMappings={sectionConfig.routeMappings}
      mainContent={mainContent}
    >
      {/* Additional content can be added here */}
    </SectionLayout>
  );
};

export default InventoryPage;