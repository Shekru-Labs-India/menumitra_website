"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import { 
  QrCode, 
  CheckCircle, 
  Play
} from 'lucide-react';

const ScanOrderPage: React.FC = () => {
  const sectionConfig = useSectionConfig('features');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Scan & Order System
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Revolutionize your dining experience with our contactless scan and order system. 
        Customers can browse menus, place orders, and pay seamlessly using QR codes.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our scan and order platform provides a safe, convenient way for customers to order food without physical contact. 
        Reduce wait times, improve order accuracy, and enhance the overall dining experience.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Whether you're running a quick-service restaurant or fine dining establishment, our system adapts to your 
        business model and provides a modern, efficient ordering experience.
      </p>

      {/* Feature Image */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav mb-8">
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 text-center">
          <QrCode className="w-24 h-24 text-primary-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Contactless Ordering</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Safe and convenient QR code-based ordering system
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Scan & Order Features</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our scan and order system provides everything you need for contactless dining. 
        From QR code generation to order processing, we've designed every feature with safety and convenience in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center"> 
          <span>QR code generation and table management</span>
        </li>
        <li className="flex items-center"> 
          <span>Mobile-optimized menu browsing and ordering</span>
        </li>
        <li className="flex items-center"> 
          <span>Secure payment processing and order confirmation</span>
        </li>
        <li className="flex items-center"> 
          <span>Real-time order tracking and kitchen integration</span>
        </li>
      </ul>

      {/* Video Section */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav relative mb-8">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-300 dark:to-dark-400 rounded-lg p-12 text-center relative">
          <Play className="w-16 h-16 text-primary-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">See Scan & Order in Action</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Watch how our contactless system enhances dining
          </p>
          <button className="btn-primary inline-flex items-center">
            <Play className="w-4 h-4 mr-2" />
            Watch Demo
          </button>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Restaurant</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our scan and order system helps you provide a safer, more efficient dining experience. 
        With contactless ordering and automated processes, you can serve more customers while maintaining safety standards.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center"> 
          <span>Reduce physical contact and improve safety</span>
        </li>
        <li className="flex items-center"> 
          <span>Increase order accuracy and reduce wait times</span>
        </li>
        <li className="flex items-center"> 
          <span>Enhance customer experience with modern technology</span>
        </li>
        <li className="flex items-center"> 
          <span>Optimize staff efficiency and reduce manual work</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem="Scan & Order"
      backgroundImage={sectionConfig.backgroundImage}
      routeMappings={sectionConfig.routeMappings}
      mainContent={mainContent}
    />
  );
};

export default ScanOrderPage;