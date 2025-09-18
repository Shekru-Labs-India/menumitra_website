"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import YouTubeVideo from '@/components/atoms/YouTubeVideo';
import { 
  Pizza, 
  CheckCircle, 
} from 'lucide-react';

const PizzeriaPage: React.FC = () => {
  const sectionConfig = useSectionConfig('outlet-types');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Pizzeria Management
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Streamline your pizzeria operations with our specialized management system. 
        Manage pizza orders, track ingredients, and optimize your kitchen workflow for maximum efficiency.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our pizzeria management platform provides order management, ingredient tracking, and kitchen optimization 
        to help you serve delicious pizzas quickly and consistently.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Whether you're running a traditional pizzeria or a modern pizza chain, our system helps you 
        maintain quality, speed, and customer satisfaction.
      </p>

      {/* Feature Image */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav mb-8">
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 text-center">
          <Pizza className="w-24 h-24 text-primary-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Pizza Operations Excellence</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Specialized management for pizzeria operations
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Pizzeria Management Features</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our pizzeria management system provides everything you need to operate a successful pizza business. 
        From order processing to ingredient management, we've designed every feature with pizzeria operations in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center"> 
          <span>Pizza order management and customization</span>
        </li>
        <li className="flex items-center"> 
          <span>Ingredient tracking and dough management</span>
        </li>
        <li className="flex items-center"> 
          <span>Kitchen workflow optimization and timing</span>
        </li>
        <li className="flex items-center"> 
          <span>Delivery and pickup coordination</span>
        </li>
      </ul>

      {/* Video Section */}
      <YouTubeVideo 
        videoId="j2e2stCcICo"
        title="See Pizzeria Management in Action"
        description="Watch how our system optimizes pizzeria operations"
      />

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Pizzeria</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our pizzeria management system helps you serve customers faster, maintain consistent quality, and optimize your operations. 
        With specialized tools and automated processes, you can focus on creating delicious pizzas.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center"> 
          <span>Reduce order preparation time and improve efficiency</span>
        </li>
        <li className="flex items-center"> 
          <span>Maintain consistent pizza quality and taste</span>
        </li>
        <li className="flex items-center"> 
          <span>Optimize ingredient usage and reduce waste</span>
        </li>
        <li className="flex items-center"> 
          <span>Enhance customer satisfaction with faster service</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem="Pizzeria"
      backgroundImage={sectionConfig.backgroundImage}
      routeMappings={sectionConfig.routeMappings}
      mainContent={mainContent}
    />
  );
};

export default PizzeriaPage;