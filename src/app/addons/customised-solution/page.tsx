"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import YouTubeVideo from '@/components/atoms/YouTubeVideo';
import { 
  CheckCircle
} from 'lucide-react';

const CustomisedSolutionPage: React.FC = () => {
  const sectionConfig = useSectionConfig('addons');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Customised Solution
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Get a tailored restaurant management solution designed specifically for your unique business needs. 
        Our customised solutions adapt to your operations, workflows, and specific requirements.
      </p>
      <p className="text-lg text-gray-600 mb-6">
        Our customised solution platform provides flexible configuration, personalized workflows, and specialized features 
        to help you achieve your specific business goals and operational requirements.
      </p>
      <p className="text-lg text-gray-600 mb-8">
        Whether you have unique operational needs or specific industry requirements, our team works with you 
        to create a solution that perfectly fits your restaurant business.
      </p>

      {/* Feature Image */}
      <div className="bg-white rounded-medium p-2.5 shadow-nav">
        <img
          src="/images/customised-solution.png"
          alt="MenuMitra Customised Solution - Tailored Solutions with custom-built solutions for your unique business needs"
          className="w-[900px] h-auto object-cover rounded mx-auto block"
          loading="lazy"
        />
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Customised Solution Features</h3>
      <p className="text-lg text-gray-600 mb-6">
        Our customised solution provides everything you need to address your specific business requirements. 
        From workflow customization to specialized integrations, we've designed every feature with flexibility in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center"> 
          <span>Flexible workflow configuration and customization</span>
        </li>
        <li className="flex items-center"> 
          <span>Specialized integrations and third-party connections</span>
        </li>
        <li className="flex items-center"> 
          <span>Custom reporting and analytics dashboards</span>
        </li>
        <li className="flex items-center"> 
          <span>Dedicated support and ongoing customization</span>
        </li>
      </ul>

      {/* Video Section */}
      <YouTubeVideo 
        videoId="j2e2stCcICo"
        title="See Customised Solution in Action"
        description="Watch how our tailored solutions meet your specific needs"
      />

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Business</h3>
      <p className="text-lg text-gray-600 mb-6">
        Our customised solution helps you achieve your specific business goals with tailored functionality. 
        With personalized workflows and specialized features, you can optimize your operations for maximum efficiency.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center"> 
          <span>Address unique operational requirements and challenges</span>
        </li>
        <li className="flex items-center"> 
          <span>Integrate with existing systems and workflows</span>
        </li>
        <li className="flex items-center"> 
          <span>Scale and adapt as your business grows</span>
        </li>
        <li className="flex items-center"> 
          <span>Get dedicated support for your specific needs</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem="Customised Solution"
      backgroundImage={sectionConfig.backgroundImage}
      routeMappings={sectionConfig.routeMappings}
      mainContent={mainContent}
    />
  );
};

export default CustomisedSolutionPage;