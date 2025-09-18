"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import { 
  Share2, 
  CheckCircle, 
  Play
} from 'lucide-react';

const SocialMediaManagementPage: React.FC = () => {
  const sectionConfig = useSectionConfig('features');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Social Media Management
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Build your restaurant's online presence with our comprehensive social media management system. 
        Create, schedule, and manage content across multiple platforms to engage with your customers.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our social media platform helps you showcase your food, promote special offers, and build a community 
        of loyal customers through engaging content and strategic marketing campaigns.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Whether you're managing a single location or multiple outlets, our system helps you maintain 
        consistent branding and effective social media presence across all platforms.
      </p>

      {/* Feature Image */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav mb-8">
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 text-center">
          <Share2 className="w-24 h-24 text-primary-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Multi-Platform Management</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Unified platform for all your social media channels
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Social Media Features</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our social media management system provides everything you need to build a strong online presence. 
        From content creation to analytics, we've designed every feature with restaurant marketing in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center"> 
          <span>Multi-platform content scheduling and publishing</span>
        </li>
        <li className="flex items-center"> 
          <span>Engagement tracking and customer interaction management</span>
        </li>
        <li className="flex items-center"> 
          <span>Campaign management and promotional content creation</span>
        </li>
        <li className="flex items-center"> 
          <span>Analytics and performance monitoring across platforms</span>
        </li>
      </ul>

      {/* Video Section */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav relative mb-8">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-300 dark:to-dark-400 rounded-lg p-12 text-center relative">
          <Play className="w-16 h-16 text-primary-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">See Social Media Management in Action</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Watch how our system builds your online presence
          </p>
          <button className="btn-primary inline-flex items-center">
            <Play className="w-4 h-4 mr-2" />
            Watch Demo
          </button>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Restaurant</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our social media management system helps you build brand awareness, engage with customers, and drive sales. 
        With automated scheduling and comprehensive analytics, you can focus on creating great content.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center"> 
          <span>Increase brand visibility and customer engagement</span>
        </li>
        <li className="flex items-center"> 
          <span>Drive traffic to your restaurant and online ordering</span>
        </li>
        <li className="flex items-center"> 
          <span>Build a community of loyal customers and followers</span>
        </li>
        <li className="flex items-center"> 
          <span>Track performance and optimize marketing strategies</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem="Social Media Management"
      backgroundImage={sectionConfig.backgroundImage}
      routeMappings={sectionConfig.routeMappings}
      mainContent={mainContent}
    />
  );
};

export default SocialMediaManagementPage;