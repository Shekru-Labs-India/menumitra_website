"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import YouTubeVideo from '@/components/atoms/YouTubeVideo';
import { 
  Coffee, 
  CheckCircle, 
} from 'lucide-react';

const CafePage: React.FC = () => {
  const sectionConfig = useSectionConfig('outlet-types');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Cafe Management
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Streamline your cafe operations with our specialized management system designed for coffee shops and cafes. 
        From order management to customer loyalty, we provide everything you need to run a successful cafe.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our cafe management platform features quick order processing, inventory tracking for coffee beans and pastries, 
        and customer relationship tools to build a loyal customer base.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Whether you're a small neighborhood cafe or a busy downtown coffee shop, our system scales with your business 
        and helps you deliver exceptional coffee experiences.
      </p>

      {/* Feature Image */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav mb-8">
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 text-center">
          <Coffee className="w-24 h-24 text-primary-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Cafe-Focused Solutions</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Specialized tools for coffee shops and cafe operations
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Cafe Management Features</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our cafe management system provides specialized features for coffee shops and cafes. 
        From beverage customization to loyalty programs, we've designed every feature with cafe owners in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center"> 
          <span>Quick order processing and customization</span>
        </li>
        <li className="flex items-center"> 
          <span>Beverage and pastry inventory management</span>
        </li>
        <li className="flex items-center"> 
          <span>Customer loyalty and rewards programs</span>
        </li>
        <li className="flex items-center"> 
          <span>Peak hour management and staff scheduling</span>
        </li>
      </ul>

      {/* Video Section */}
      <YouTubeVideo 
        videoId="j2e2stCcICo"
        title="See Cafe Management in Action"
        description="Watch how our system streamlines cafe operations"
      />

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Cafe</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our cafe management system helps you serve more customers faster, reduce waste, and build a loyal customer base. 
        With features designed specifically for cafes, you can focus on crafting the perfect cup of coffee.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center"> 
          <span>Faster service during peak hours</span>
        </li>
        <li className="flex items-center"> 
          <span>Reduce food waste with smart inventory</span>
        </li>
        <li className="flex items-center"> 
          <span>Build customer loyalty with rewards programs</span>
        </li>
        <li className="flex items-center"> 
          <span>Optimize staff scheduling for busy periods</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem="Cafe"
      backgroundImage={sectionConfig.backgroundImage}
      routeMappings={sectionConfig.routeMappings}
      mainContent={mainContent}
    />
  );
};

export default CafePage;