"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import YouTubeVideo from '@/components/atoms/YouTubeVideo';
import { 
  CheckCircle
} from 'lucide-react';

const ScanOrderPage: React.FC = () => {
  const sectionConfig = useSectionConfig('features');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Scan & Order System
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Revolutionize your dining experience with our contactless scan and order system. 
        Customers can browse menus, place orders, and pay seamlessly using QR codes.
      </p>
      <p className="text-lg text-gray-600 mb-6">
        Our scan and order platform provides a safe, convenient way for customers to order food without physical contact. 
        Reduce wait times, improve order accuracy, and enhance the overall dining experience.
      </p>
      <p className="text-lg text-gray-600 mb-8">
        Whether you're running a quick-service restaurant or fine dining establishment, our system adapts to your 
        business model and provides a modern, efficient ordering experience.
      </p>

      {/* Feature Image */}
      <div className="bg-white rounded-medium p-2.5 shadow-nav">
        <img
          src="/images/scan-order-management.png"
          alt="MenuMitra Scan & Order System - Contactless Ordering with safe and convenient QR code-based ordering system"
          className="w-[900px] h-auto object-cover rounded mx-auto block"
          loading="lazy"
        />
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Scan & Order Features</h3>
      <p className="text-lg text-gray-600 mb-6">
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
      <YouTubeVideo 
        videoId="j2e2stCcICo"
        title="See Scan & Order in Action"
        description="Watch how our scan system simplifies ordering"
      />

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Restaurant</h3>
      <p className="text-lg text-gray-600 mb-6">
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