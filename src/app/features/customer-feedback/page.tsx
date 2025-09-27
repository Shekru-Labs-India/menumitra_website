"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import YouTubeVideo from '@/components/atoms/YouTubeVideo';
import { 
  CheckCircle
} from 'lucide-react';

const CustomerFeedbackPage: React.FC = () => {
  const sectionConfig = useSectionConfig('features');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Customer Feedback Management
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Collect, analyze, and act on customer feedback with our comprehensive feedback management system. 
        Improve your restaurant's service quality and customer satisfaction through data-driven insights.
      </p>
      <p className="text-lg text-gray-600 mb-6">
        Our feedback platform enables you to gather reviews, ratings, and suggestions from multiple channels, 
        analyze trends, and implement improvements to enhance the overall customer experience.
      </p>
      <p className="text-lg text-gray-600 mb-8">
        Whether you're collecting feedback through digital receipts, social media, or review platforms, 
        our system centralizes all feedback for easy analysis and action.
      </p>

      {/* Feature Image */}
      <div className="bg-white rounded-medium p-2.5 shadow-nav">
        <img
          src="/images/service-single1.png"
          alt="MenuMitra Customer Feedback Management - Feedback Analytics Dashboard with comprehensive insights into customer satisfaction"
          className="w-[900px] h-auto object-cover rounded mx-auto block"
          loading="lazy"
        />
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Feedback Management Features</h3>
      <p className="text-lg text-gray-600 mb-6">
        Our customer feedback system provides everything you need to understand and improve customer satisfaction. 
        From review collection to sentiment analysis, we've designed every feature with restaurant improvement in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center"> 
          <span>Multi-channel feedback collection and aggregation</span>
        </li>
        <li className="flex items-center"> 
          <span>Sentiment analysis and trend identification</span>
        </li>
        <li className="flex items-center"> 
          <span>Automated response and follow-up systems</span>
        </li>
        <li className="flex items-center"> 
          <span>Performance tracking and improvement metrics</span>
        </li>
      </ul>

      {/* Video Section */}
      <YouTubeVideo 
        videoId="j2e2stCcICo"
        title="See Feedback Management in Action"
        description="Watch how our feedback system improves customer satisfaction"
      />

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Restaurant</h3>
      <p className="text-lg text-gray-600 mb-6">
        Our customer feedback system helps you identify areas for improvement, track satisfaction trends, and build a better restaurant. 
        With actionable insights and automated processes, you can continuously enhance the customer experience.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center"> 
          <span>Improve service quality based on customer insights</span>
        </li>
        <li className="flex items-center"> 
          <span>Increase customer satisfaction and retention rates</span>
        </li>
        <li className="flex items-center"> 
          <span>Build positive online reputation and reviews</span>
        </li>
        <li className="flex items-center"> 
          <span>Make data-driven decisions for business improvements</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem="Customer Feedback"
      backgroundImage={sectionConfig.backgroundImage}
      routeMappings={sectionConfig.routeMappings}
      mainContent={mainContent}
    />
  );
};

export default CustomerFeedbackPage;