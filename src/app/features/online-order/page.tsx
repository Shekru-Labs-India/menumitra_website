"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import YouTubeVideo from '@/components/atoms/YouTubeVideo';
import { 
  CheckCircle, 
} from 'lucide-react';

const OnlineOrderPage: React.FC = () => {
  const sectionConfig = useSectionConfig('features');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Online Order Management
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Streamline your online ordering process with our comprehensive order management system. 
        Handle delivery, pickup, and dine-in orders seamlessly from a single platform.
      </p>
      <p className="text-lg text-gray-600 mb-6">
        Our online ordering platform integrates with your existing systems, providing real-time order tracking, 
        automated notifications, and comprehensive analytics to optimize your operations.
      </p>
      <p className="text-lg text-gray-600 mb-8">
        Whether you're managing a single location or multiple outlets, our scalable system ensures 
        consistent order processing and exceptional customer service.
      </p>

      {/* Feature Image */}
      <div className="bg-white rounded-medium p-2.5 shadow-nav">
        <img
          src="/images/online-order-management.png"
          alt="MenuMitra Online Order Management - Seamless Order Processing with handle all order types from one unified platform"
          className="w-[900px] h-auto object-cover rounded mx-auto block"
          loading="lazy"
        />
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Key Features</h3>
      <p className="text-lg text-gray-600 mb-6">
        Our online order management system provides everything you need to process orders efficiently. 
        From order intake to fulfillment, we've designed every feature with restaurant operations in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center"> 
          <span>Multi-channel order management (delivery, pickup, dine-in)</span>
        </li>
        <li className="flex items-center"> 
          <span>Real-time order tracking and status updates</span>
        </li>
        <li className="flex items-center"> 
          <span>Automated customer notifications and confirmations</span>
        </li>
        <li className="flex items-center"> 
          <span>Integration with delivery partners and payment gateways</span>
        </li>
      </ul>

      {/* Video Section */}
      <YouTubeVideo 
        videoId="j2e2stCcICo"
        title="See Online Ordering in Action"
        description="Watch how our online ordering system increases sales"
      />

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Restaurant</h3>
      <p className="text-lg text-gray-600 mb-6">
        Our online order management system helps you increase sales, reduce errors, and improve customer satisfaction. 
        With automated processes and real-time insights, you can focus on delivering great food.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center"> 
          <span>Increase order accuracy and reduce errors</span>
        </li>
        <li className="flex items-center"> 
          <span>Improve customer satisfaction with real-time updates</span>
        </li>
        <li className="flex items-center"> 
          <span>Optimize delivery routes and reduce costs</span>
        </li>
        <li className="flex items-center"> 
          <span>Gain insights into order patterns and preferences</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem="Online Order"
      backgroundImage={sectionConfig.backgroundImage}
      routeMappings={sectionConfig.routeMappings}
      mainContent={mainContent}
    />
  );
};

export default OnlineOrderPage;