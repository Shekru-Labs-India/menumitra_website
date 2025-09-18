"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import { 
  Users, 
  CheckCircle, 
  Play
} from 'lucide-react';

const CustomerAppPage: React.FC = () => {
  const sectionConfig = useSectionConfig('addons');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Customer App
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Enhance your customers' dining experience with our comprehensive customer mobile application. 
        Provide seamless ordering, loyalty programs, and personalized recommendations.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our customer app features intuitive navigation, secure payment processing, and real-time order tracking. 
        Build customer loyalty with rewards programs and personalized offers.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Whether you're a quick-service restaurant or fine dining establishment, our customer app adapts to your 
        business model and enhances the overall customer experience.
      </p>

      {/* Feature Image */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav mb-8">
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 text-center">
          <Users className="w-24 h-24 text-primary-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Customer-Centric Design</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Intuitive interface designed for exceptional user experience
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Key Features</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our customer app includes everything needed to provide a superior dining experience. 
        From easy ordering to loyalty rewards, we've designed every feature with customer satisfaction in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center"> 
          <span>Easy-to-use menu browsing and ordering</span>
        </li>
        <li className="flex items-center"> 
          <span>Secure payment processing and order tracking</span>
        </li>
        <li className="flex items-center"> 
          <span>Loyalty programs and reward management</span>
        </li>
        <li className="flex items-center"> 
          <span>Personalized recommendations and offers</span>
        </li>
      </ul>

      {/* Video Section */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav relative mb-8">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-300 dark:to-dark-400 rounded-lg p-12 text-center relative">
          <Play className="w-16 h-16 text-primary-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">See Customer App in Action</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Watch how our customer app enhances the dining experience
          </p>
          <button className="btn-primary inline-flex items-center">
            <Play className="w-4 h-4 mr-2" />
            Watch Demo
          </button>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Customers</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our customer app makes dining more convenient and enjoyable. With features like order customization, 
        real-time tracking, and loyalty rewards, customers will keep coming back for more.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center"> 
          <span>Faster ordering and reduced wait times</span>
        </li>
        <li className="flex items-center"> 
          <span>Personalized experience with order history</span>
        </li>
        <li className="flex items-center"> 
          <span>Exclusive rewards and special offers</span>
        </li>
        <li className="flex items-center"> 
          <span>Easy feedback and review system</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem="Customer App"
      backgroundImage={sectionConfig.backgroundImage}
      routeMappings={sectionConfig.routeMappings}
      mainContent={mainContent}
    />
  );
};

export default CustomerAppPage;