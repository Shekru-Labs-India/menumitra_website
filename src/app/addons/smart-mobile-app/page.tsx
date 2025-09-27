"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import YouTubeVideo from '@/components/atoms/YouTubeVideo';
import { 
  CheckCircle, 
} from 'lucide-react';

const SmartMobileAppPage: React.FC = () => {
  const sectionConfig = useSectionConfig('addons');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Smart Mobile App
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Empower your restaurant operations with our comprehensive smart mobile application. 
        Manage your business on-the-go with powerful tools and real-time insights.
      </p>
      <p className="text-lg text-gray-600 mb-6">
        Our smart mobile app provides restaurant owners and managers with complete control over operations, 
        from inventory management to staff scheduling, all accessible from their mobile device.
      </p>
      <p className="text-lg text-gray-600 mb-8">
        Whether you're managing a single location or multiple outlets, our mobile app gives you the flexibility 
        to run your restaurant business from anywhere, anytime.
      </p>

      {/* Feature Image */}
      <div className="bg-white rounded-medium p-2.5 shadow-nav">
        <img
          src="/images/service-single1.png"
          alt="MenuMitra Smart Mobile App - Mobile Business Management with complete restaurant management in your pocket"
          className="w-[900px] h-auto object-cover rounded mx-auto block"
          loading="lazy"
        />
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Smart Mobile App Features</h3>
      <p className="text-lg text-gray-600 mb-6">
        Our smart mobile app provides everything you need to manage your restaurant business remotely. 
        From real-time monitoring to operational control, we've designed every feature with mobile convenience in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center"> 
          <span>Real-time sales monitoring and analytics</span>
        </li>
        <li className="flex items-center"> 
          <span>Inventory management and stock alerts</span>
        </li>
        <li className="flex items-center"> 
          <span>Staff scheduling and performance tracking</span>
        </li>
        <li className="flex items-center"> 
          <span>Customer feedback and review management</span>
        </li>
      </ul>

      {/* Video Section */}
      <YouTubeVideo 
        videoId="j2e2stCcICo"
        title="See Smart Mobile App in Action"
        description="Watch how our mobile app empowers your team"
      />

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Business</h3>
      <p className="text-lg text-gray-600 mb-6">
        Our smart mobile app helps you stay connected to your restaurant business 24/7. With real-time insights and 
        remote control capabilities, you can manage your operations effectively from anywhere.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center"> 
          <span>Stay connected to your business 24/7</span>
        </li>
        <li className="flex items-center"> 
          <span>Make informed decisions with real-time data</span>
        </li>
        <li className="flex items-center"> 
          <span>Respond quickly to operational issues</span>
        </li>
        <li className="flex items-center"> 
          <span>Optimize operations with mobile insights</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem="Smart Mobile App"
      backgroundImage={sectionConfig.backgroundImage}
      routeMappings={sectionConfig.routeMappings}
      mainContent={mainContent}
    />
  );
};

export default SmartMobileAppPage;