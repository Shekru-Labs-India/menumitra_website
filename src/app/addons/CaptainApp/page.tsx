"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import { 
  Smartphone, 
  CheckCircle, 
  Play
} from 'lucide-react';

const CaptainAppPage: React.FC = () => {
  const sectionConfig = useSectionConfig('addons');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Captain App
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Empower your restaurant captains with our comprehensive mobile application designed specifically for restaurant management. 
        The Captain App provides real-time insights, order management, and staff coordination tools.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our intuitive interface allows captains to monitor table status, manage orders, coordinate with kitchen staff, 
        and provide exceptional customer service. Built with restaurant operations in mind, it streamlines daily workflows 
        and improves overall efficiency.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Whether you're managing a single location or multiple outlets, the Captain App scales with your business, 
        providing consistent management tools across all your restaurant operations.
      </p>

      {/* Feature Image */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav mb-8">
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 text-center">
          <Smartphone className="w-24 h-24 text-primary-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Mobile-First Design</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Optimized for mobile devices with intuitive touch controls
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Key Features</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        The Captain App includes everything you need to manage your restaurant operations efficiently. 
        From real-time order tracking to staff management, we've designed every feature with restaurant captains in mind.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Experience seamless integration with your existing POS systems, comprehensive reporting capabilities, and 
        real-time notifications that keep you informed of all restaurant activities.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Real-time order tracking and management</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Table status monitoring and assignment</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Staff coordination and communication tools</span>
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
          <h3 className="text-xl font-semibold mb-2">See Captain App in Action</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Watch how our Captain App transforms restaurant management
          </p>
          <button className="btn-primary inline-flex items-center">
            <Play className="w-4 h-4 mr-2" />
            Watch Demo
          </button>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Restaurant Captains</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        The Captain App is designed to make restaurant management easier and more efficient. 
        With real-time data and intuitive controls, captains can focus on providing excellent customer service 
        while the app handles the operational complexities.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our comprehensive analytics and reporting tools provide insights into restaurant performance, 
        helping captains make data-driven decisions to improve operations and customer satisfaction.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Improved operational efficiency and productivity</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Enhanced customer service capabilities</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Real-time insights and performance tracking</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Seamless integration with existing systems</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem="Captain App"
      backgroundImage={sectionConfig.backgroundImage}
      mainContent={mainContent}
    >
      {/* Additional content can be added here */}
    </SectionLayout>
  );
};

export default CaptainAppPage;
