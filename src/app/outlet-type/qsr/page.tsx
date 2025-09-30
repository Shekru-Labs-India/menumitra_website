"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import YouTubeVideo from '@/components/atoms/YouTubeVideo';
import { 
  CheckCircle, 
} from 'lucide-react';

const QSRPage: React.FC = () => {
  const sectionConfig = useSectionConfig('outlet-types');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Quick Service Restaurant Management
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Optimize your quick service restaurant operations with our high-speed management system. 
        Serve customers faster, reduce wait times, and maximize efficiency in your fast-paced environment.
      </p>
      <p className="text-lg text-gray-600 mb-6">
        Our QSR management platform provides rapid order processing, streamlined kitchen operations, and efficient customer flow 
        to help you serve more customers in less time while maintaining quality and accuracy.
      </p>
      <p className="text-lg text-gray-600 mb-8">
        Whether you're running a burger joint, pizza place, or sandwich shop, our system adapts to your 
        fast-paced operations and helps you deliver quick, quality service.
      </p>

      {/* Feature Image */}
      <div className="bg-white rounded-medium p-2.5 shadow-nav">
        <img
          src="/images/qsr-management.png"
          alt="MenuMitra Quick Service Restaurant Management - High-Speed Operations optimized for fast-paced quick service environments"
          className="w-[900px] h-auto object-cover rounded mx-auto block"
          loading="lazy"
        />
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">QSR Management Features</h3>
      <p className="text-lg text-gray-600 mb-6">
        Our QSR management system provides everything you need to operate a fast, efficient quick service restaurant. 
        From rapid order processing to streamlined operations, we've designed every feature with speed and efficiency in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center"> 
          <span>Rapid order processing and payment handling</span>
        </li>
        <li className="flex items-center"> 
          <span>Streamlined kitchen workflow and preparation</span>
        </li>
        <li className="flex items-center"> 
          <span>Drive-through and counter service optimization</span>
        </li>
        <li className="flex items-center"> 
          <span>Real-time performance monitoring and analytics</span>
        </li>
      </ul>

      {/* Video Section */}
      <YouTubeVideo 
        videoId="j2e2stCcICo"
        title="See QSR Management in Action"
        description="Watch how our system streamlines QSR operations"
      />

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your QSR</h3>
      <p className="text-lg text-gray-600 mb-6">
        Our QSR management system helps you serve customers faster, reduce wait times, and increase throughput. 
        With optimized operations and real-time monitoring, you can maximize efficiency and profitability.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center"> 
          <span>Reduce customer wait times and improve satisfaction</span>
        </li>
        <li className="flex items-center"> 
          <span>Increase order throughput and revenue potential</span>
        </li>
        <li className="flex items-center"> 
          <span>Minimize order errors and improve accuracy</span>
        </li>
        <li className="flex items-center"> 
          <span>Optimize staff efficiency and reduce labor costs</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem="Fast Food"
      backgroundImage={sectionConfig.backgroundImage}
      routeMappings={sectionConfig.routeMappings}
      mainContent={mainContent}
    />
  );
};

export default QSRPage;