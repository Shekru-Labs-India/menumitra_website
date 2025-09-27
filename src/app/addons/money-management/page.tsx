"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import YouTubeVideo from '@/components/atoms/YouTubeVideo';
import { 
  CheckCircle, 
} from 'lucide-react';

const MoneyManagementPage: React.FC = () => {
  const sectionConfig = useSectionConfig('addons');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Money Management
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Streamline your restaurant's financial operations with our comprehensive money management system. 
        Track cash flow, manage expenses, and optimize your financial performance with real-time insights.
      </p>
      <p className="text-lg text-gray-600 mb-6">
        Our money management platform provides cash handling, expense tracking, and financial reporting 
        to help you maintain accurate records and make informed business decisions.
      </p>
      <p className="text-lg text-gray-600 mb-8">
        Whether you're managing a single location or multiple outlets, our system helps you maintain 
        financial control and optimize your restaurant's profitability.
      </p>

      {/* Feature Image */}
      <div className="bg-white rounded-medium p-2.5 shadow-nav">
        <img
          src="/images/service-single1.png"
          alt="MenuMitra Money Management - Financial Control Center with comprehensive money management for restaurant operations"
          className="w-[900px] h-auto object-cover rounded mx-auto block"
          loading="lazy"
        />
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Money Management Features</h3>
      <p className="text-lg text-gray-600 mb-6">
        Our money management system provides everything you need to control your restaurant's finances. 
        From cash handling to expense tracking, we've designed every feature with financial accuracy in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center"> 
          <span>Cash flow tracking and management</span>
        </li>
        <li className="flex items-center"> 
          <span>Expense categorization and budget monitoring</span>
        </li>
        <li className="flex items-center"> 
          <span>Financial reporting and analytics</span>
        </li>
        <li className="flex items-center"> 
          <span>Multi-location financial consolidation</span>
        </li>
      </ul>

      {/* Video Section */}
      <YouTubeVideo 
        videoId="j2e2stCcICo"
        title="See Money Management in Action"
        description="Watch how our money management system handles finances"
      />

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Restaurant</h3>
      <p className="text-lg text-gray-600 mb-6">
        Our money management system helps you maintain financial control, reduce costs, and improve profitability. 
        With accurate tracking and detailed reporting, you can make informed decisions to grow your business.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center"> 
          <span>Improve cash flow management and reduce waste</span>
        </li>
        <li className="flex items-center"> 
          <span>Track expenses and identify cost-saving opportunities</span>
        </li>
        <li className="flex items-center"> 
          <span>Generate accurate financial reports for stakeholders</span>
        </li>
        <li className="flex items-center"> 
          <span>Optimize profitability with data-driven insights</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem="Money Management"
      backgroundImage={sectionConfig.backgroundImage}
      routeMappings={sectionConfig.routeMappings}
      mainContent={mainContent}
    />
  );
};

export default MoneyManagementPage;