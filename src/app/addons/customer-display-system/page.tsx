"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import { 
  Monitor, 
  CheckCircle, 
  Play
} from 'lucide-react';

const CustomerDisplaySystemPage: React.FC = () => {
  const sectionConfig = useSectionConfig('addons');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Customer Display System
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Enhance your customer experience with our interactive customer display system. 
        Showcase your menu, promotions, and order status with engaging digital displays.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our customer display system provides dynamic menu presentations, real-time order updates, and promotional content 
        to engage customers and improve their dining experience.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Whether you're running a quick-service restaurant or a casual dining establishment, our system helps you 
        communicate effectively with your customers and drive sales.
      </p>

      {/* Feature Image */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav mb-8">
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 text-center">
          <Monitor className="w-24 h-24 text-primary-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Interactive Customer Displays</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Engaging digital displays for enhanced customer experience
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Customer Display Features</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our customer display system provides everything you need to engage and inform your customers. 
        From menu presentations to order tracking, we've designed every feature with customer experience in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Dynamic menu displays with high-quality images</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Real-time order status and preparation updates</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Promotional content and special offer displays</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Customizable layouts and branding options</span>
        </li>
      </ul>

      {/* Video Section */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav relative mb-8">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-300 dark:to-dark-400 rounded-lg p-12 text-center relative">
          <Play className="w-16 h-16 text-primary-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">See Customer Display System in Action</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Watch how our system enhances customer engagement
          </p>
          <button className="btn-primary inline-flex items-center">
            <Play className="w-4 h-4 mr-2" />
            Watch Demo
          </button>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Restaurant</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our customer display system helps you increase sales, improve customer satisfaction, and reduce wait times. 
        With engaging displays and real-time updates, you can create a better dining experience.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Increase sales with attractive menu presentations</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Reduce perceived wait times with order updates</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Enhance brand image with professional displays</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Promote special offers and drive additional sales</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem="Customer Display System"
      backgroundImage={sectionConfig.backgroundImage}
      routeMappings={sectionConfig.routeMappings}
      mainContent={mainContent}
    />
  );
};

export default CustomerDisplaySystemPage;