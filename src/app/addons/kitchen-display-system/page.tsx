"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import { 
  Monitor, 
  CheckCircle, 
  Play
} from 'lucide-react';

const KitchenDisplaySystemPage: React.FC = () => {
  const sectionConfig = useSectionConfig('addons');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Kitchen Display System
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Optimize your kitchen operations with our advanced kitchen display system. 
        Streamline order processing, improve communication, and enhance kitchen efficiency.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our kitchen display system provides real-time order visibility, automated notifications, and workflow optimization 
        to help your kitchen staff prepare orders faster and more accurately.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Whether you're running a fast-food kitchen or a fine dining establishment, our system adapts to your 
        kitchen layout and operational requirements.
      </p>

      {/* Feature Image */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav mb-8">
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 text-center">
          <Monitor className="w-24 h-24 text-primary-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Smart Kitchen Display</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Real-time order management and kitchen coordination
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Kitchen Display Features</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our kitchen display system provides everything you need to optimize kitchen operations. 
        From order management to workflow optimization, we've designed every feature with kitchen efficiency in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center"> 
          <span>Real-time order display and status tracking</span>
        </li>
        <li className="flex items-center"> 
          <span>Automated order prioritization and timing</span>
        </li>
        <li className="flex items-center"> 
          <span>Kitchen workflow optimization and station coordination</span>
        </li>
        <li className="flex items-center"> 
          <span>Performance analytics and efficiency monitoring</span>
        </li>
      </ul>

      {/* Video Section */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav relative mb-8">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-300 dark:to-dark-400 rounded-lg p-12 text-center relative">
          <Play className="w-16 h-16 text-primary-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">See Kitchen Display System in Action</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Watch how our system optimizes kitchen operations
          </p>
          <button className="btn-primary inline-flex items-center">
            <Play className="w-4 h-4 mr-2" />
            Watch Demo
          </button>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Kitchen</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our kitchen display system helps you reduce order times, improve accuracy, and optimize kitchen workflow. 
        With real-time visibility and automated processes, your kitchen can operate more efficiently.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center"> 
          <span>Reduce order preparation time and improve efficiency</span>
        </li>
        <li className="flex items-center"> 
          <span>Minimize order errors and improve accuracy</span>
        </li>
        <li className="flex items-center"> 
          <span>Optimize kitchen workflow and station coordination</span>
        </li>
        <li className="flex items-center"> 
          <span>Enhance communication between front and back of house</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem="Kitchen Display System"
      backgroundImage={sectionConfig.backgroundImage}
      routeMappings={sectionConfig.routeMappings}
      mainContent={mainContent}
    />
  );
};

export default KitchenDisplaySystemPage;