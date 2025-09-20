"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import YouTubeVideo from '@/components/atoms/YouTubeVideo';
import { 
  CheckCircle, 
} from 'lucide-react';

const MenuPage: React.FC = () => {
  const sectionConfig = useSectionConfig('features');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Digital Menu Management
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Create, manage, and optimize your restaurant's digital menu with our comprehensive menu management system. 
        Update prices, add new items, and track performance with real-time analytics.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our intuitive menu platform allows you to design beautiful digital menus, manage seasonal items, 
        and provide customers with detailed nutritional information and allergen warnings.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Whether you're running a single restaurant or a chain, our menu management system scales with your business, 
        ensuring consistent branding and easy updates across all locations.
      </p>

      {/* Feature Image */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav">
        <img
          src="/images/service-single1.png"
          alt="MenuMitra Digital Menu Management - Dynamic Menu Builder with create and customize menus with drag-and-drop simplicity"
          className="w-[900px] h-auto object-cover rounded mx-auto block"
          loading="lazy"
        />
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Menu Management Features</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our menu management system provides everything you need to create and maintain professional digital menus. 
        From item descriptions to pricing updates, we've designed every feature with restaurant owners in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center"> 
          <span>Drag-and-drop menu builder with templates</span>
        </li>
        <li className="flex items-center"> 
          <span>Real-time price and availability updates</span>
        </li>
        <li className="flex items-center"> 
          <span>Nutritional information and allergen management</span>
        </li>
        <li className="flex items-center"> 
          <span>Menu performance analytics and insights</span>
        </li>
      </ul>

      {/* Video Section */}
      <YouTubeVideo 
        videoId="j2e2stCcICo"
        title="See Menu Management in Action"
        description="Watch how our menu system streamlines operations"
      />

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Business</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our menu management system helps you increase sales, improve customer experience, and streamline operations. 
        With detailed analytics and easy updates, you can optimize your menu for maximum profitability.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center"> 
          <span>Increase average order value with upselling features</span>
        </li>
        <li className="flex items-center"> 
          <span>Reduce menu printing costs with digital solutions</span>
        </li>
        <li className="flex items-center"> 
          <span>Improve customer satisfaction with detailed item information</span>
        </li>
        <li className="flex items-center"> 
          <span>Optimize menu items based on performance data</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem="Menu"
      backgroundImage={sectionConfig.backgroundImage}
      routeMappings={sectionConfig.routeMappings}
      mainContent={mainContent}
    >
      {/* Additional content can be added here */}
    </SectionLayout>
  );
};

export default MenuPage;