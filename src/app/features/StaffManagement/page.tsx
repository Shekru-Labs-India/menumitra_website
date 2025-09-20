"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import YouTubeVideo from '@/components/atoms/YouTubeVideo';
import { 
  CheckCircle, 
} from 'lucide-react';

const StaffManagementPage: React.FC = () => {
  const sectionConfig = useSectionConfig('features');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Staff Management
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Streamline your restaurant's workforce management with our comprehensive staff management system. 
        Handle scheduling, payroll, performance tracking, and employee development in one centralized platform.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our staff management platform helps you optimize labor costs, improve employee satisfaction, and maintain 
        consistent service quality across all shifts and locations.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Whether you're managing a small team or a large workforce, our system scales with your business 
        and provides the tools you need for effective staff management.
      </p>

      {/* Feature Image */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav">
        <img
          src="/images/service-single1.png"
          alt="MenuMitra Staff Management - Workforce Optimization with comprehensive platform for all staff management needs"
          className="w-[900px] h-auto object-cover rounded mx-auto block"
          loading="lazy"
        />
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Staff Management Features</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our staff management system provides everything you need to manage your restaurant workforce effectively. 
        From scheduling to performance tracking, we've designed every feature with restaurant operations in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center"> 
          <span>Automated scheduling and shift management</span>
        </li>
        <li className="flex items-center"> 
          <span>Time tracking and attendance monitoring</span>
        </li>
        <li className="flex items-center"> 
          <span>Performance evaluation and feedback systems</span>
        </li>
        <li className="flex items-center"> 
          <span>Payroll integration and labor cost optimization</span>
        </li>
      </ul>

      {/* Video Section */}
      <YouTubeVideo 
        videoId="j2e2stCcICo"
        title="See Staff Management in Action"
        description="Watch how our staff system improves team efficiency"
      />

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Restaurant</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our staff management system helps you reduce labor costs, improve employee satisfaction, and maintain consistent service quality. 
        With automated scheduling and performance tracking, you can optimize your workforce effectively.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center"> 
          <span>Optimize labor costs and reduce overtime expenses</span>
        </li>
        <li className="flex items-center"> 
          <span>Improve employee satisfaction and retention rates</span>
        </li>
        <li className="flex items-center"> 
          <span>Maintain consistent service quality across all shifts</span>
        </li>
        <li className="flex items-center"> 
          <span>Streamline payroll and compliance management</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem="Staff Management"
      backgroundImage={sectionConfig.backgroundImage}
      routeMappings={sectionConfig.routeMappings}
      mainContent={mainContent}
    />
  );
};

export default StaffManagementPage;