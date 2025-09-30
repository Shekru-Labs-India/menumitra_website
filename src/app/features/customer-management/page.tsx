"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import YouTubeVideo from '@/components/atoms/YouTubeVideo';
import { 
  CheckCircle, 
} from 'lucide-react';

const CustomerManagementPage: React.FC = () => {
  const sectionConfig = useSectionConfig('features');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Customer Management
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Build lasting relationships with your customers using our comprehensive customer management system. 
        Track preferences, manage loyalty programs, and provide personalized experiences.
      </p>
      <p className="text-lg text-gray-600 mb-6">
        Our customer management platform helps you understand your customers better, track their preferences, 
        and create targeted marketing campaigns to increase retention and drive repeat business.
      </p>
      <p className="text-lg text-gray-600 mb-8">
        Whether you're managing a small cafe or a large restaurant chain, our system scales with your business 
        and helps you deliver exceptional customer experiences.
      </p>

      {/* Feature Image */}
      <div className="bg-white rounded-medium p-2.5 shadow-nav">
        <img
          src="/images/customer-management.png"
          alt="MenuMitra Customer Management - Customer Relationship Hub with centralized platform for all customer interactions"
          className="w-[900px] h-auto object-cover rounded mx-auto block"
          loading="lazy"
        />
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Customer Management Features</h3>
      <p className="text-lg text-gray-600 mb-6">
        Our customer management system provides everything you need to build strong customer relationships. 
        From preference tracking to loyalty programs, we've designed every feature with customer satisfaction in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center"> 
          <span>Customer profile and preference management</span>
        </li>
        <li className="flex items-center"> 
          <span>Loyalty programs and reward tracking</span>
        </li>
        <li className="flex items-center"> 
          <span>Order history and behavior analytics</span>
        </li>
        <li className="flex items-center"> 
          <span>Targeted marketing and promotional campaigns</span>
        </li>
      </ul>

      {/* Video Section */}
      <YouTubeVideo 
        videoId="j2e2stCcICo"
        title="See Customer Management in Action"
        description="Watch how our system enhances customer relationships"
      />

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Restaurant</h3>
      <p className="text-lg text-gray-600 mb-6">
        Our customer management system helps you increase customer retention, boost loyalty, and drive repeat business. 
        With detailed customer insights and automated marketing tools, you can create personalized experiences.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center"> 
          <span>Increase customer retention and lifetime value</span>
        </li>
        <li className="flex items-center"> 
          <span>Personalize experiences based on preferences</span>
        </li>
        <li className="flex items-center"> 
          <span>Automate marketing campaigns and promotions</span>
        </li>
        <li className="flex items-center"> 
          <span>Track customer satisfaction and feedback</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem="Customer Management"
      backgroundImage={sectionConfig.backgroundImage}
      routeMappings={sectionConfig.routeMappings}
      mainContent={mainContent}
    />
  );
};

export default CustomerManagementPage;