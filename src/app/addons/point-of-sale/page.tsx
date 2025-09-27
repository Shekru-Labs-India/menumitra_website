"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import YouTubeVideo from '@/components/atoms/YouTubeVideo';
import { 
  CheckCircle, 
} from 'lucide-react';

const PointOfSalePage: React.FC = () => {
  const sectionConfig = useSectionConfig('addons');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Point of Sale System
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Streamline your restaurant's sales operations with our comprehensive point of sale system. 
        Process orders, handle payments, and manage transactions with ease and efficiency.
      </p>
      <p className="text-lg text-gray-600 mb-6">
        Our POS system provides intuitive order processing, multiple payment options, and real-time sales tracking 
        to help you manage your restaurant's daily operations effectively.
      </p>
      <p className="text-lg text-gray-600 mb-8">
        Whether you're running a small cafe or a large restaurant, our POS system adapts to your 
        business needs and provides the tools you need for successful sales management.
      </p>

      {/* Feature Image */}
      <div className="bg-white rounded-medium p-2.5 shadow-nav">
        <img
          src="/images/service-single1.png"
          alt="MenuMitra Point of Sale System - Complete POS Solution with all-in-one point of sale system for restaurants"
          className="w-[900px] h-auto object-cover rounded mx-auto block"
          loading="lazy"
        />
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">POS System Features</h3>
      <p className="text-lg text-gray-600 mb-6">
        Our point of sale system provides everything you need to manage sales operations efficiently. 
        From order processing to payment handling, we've designed every feature with restaurant operations in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center"> 
          <span>Intuitive order processing and menu management</span>
        </li>
        <li className="flex items-center"> 
          <span>Multiple payment options and secure processing</span>
        </li>
        <li className="flex items-center"> 
          <span>Real-time sales tracking and reporting</span>
        </li>
        <li className="flex items-center"> 
          <span>Inventory integration and automatic updates</span>
        </li>
      </ul>

      {/* Video Section */}
      <YouTubeVideo 
        videoId="j2e2stCcICo"
        title="See POS System in Action"
        description="Watch how our POS system simplifies transactions"
      />

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Restaurant</h3>
      <p className="text-lg text-gray-600 mb-6">
        Our point of sale system helps you increase sales efficiency, reduce errors, and improve customer service. 
        With streamlined operations and real-time insights, you can focus on growing your business.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center"> 
          <span>Increase sales efficiency and reduce wait times</span>
        </li>
        <li className="flex items-center"> 
          <span>Minimize order errors and improve accuracy</span>
        </li>
        <li className="flex items-center"> 
          <span>Enhance customer experience with faster service</span>
        </li>
        <li className="flex items-center"> 
          <span>Gain insights into sales patterns and performance</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem="Point of Sale"
      backgroundImage={sectionConfig.backgroundImage}
      routeMappings={sectionConfig.routeMappings}
      mainContent={mainContent}
    />
  );
};

export default PointOfSalePage;