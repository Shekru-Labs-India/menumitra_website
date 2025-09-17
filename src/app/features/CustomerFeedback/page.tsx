"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import { 
  Star, 
  CheckCircle, 
  Play
} from 'lucide-react';

const CustomerFeedbackPage: React.FC = () => {
  const sectionConfig = useSectionConfig('features');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Customer Feedback Management
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Collect, analyze, and act on customer feedback with our comprehensive feedback management system. 
        Improve your restaurant's service quality and customer satisfaction through data-driven insights.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our feedback platform enables you to gather reviews, ratings, and suggestions from multiple channels, 
        analyze trends, and implement improvements to enhance the overall customer experience.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Whether you're collecting feedback through digital receipts, social media, or review platforms, 
        our system centralizes all feedback for easy analysis and action.
      </p>

      {/* Feature Image */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav mb-8">
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 text-center">
          <Star className="w-24 h-24 text-primary-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Feedback Analytics Dashboard</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Comprehensive insights into customer satisfaction
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Feedback Management Features</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our customer feedback system provides everything you need to understand and improve customer satisfaction. 
        From review collection to sentiment analysis, we've designed every feature with restaurant improvement in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Multi-channel feedback collection and aggregation</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Sentiment analysis and trend identification</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Automated response and follow-up systems</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Performance tracking and improvement metrics</span>
        </li>
      </ul>

      {/* Video Section */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav relative mb-8">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-300 dark:to-dark-400 rounded-lg p-12 text-center relative">
          <Play className="w-16 h-16 text-primary-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">See Feedback Management in Action</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Watch how our system improves customer satisfaction
          </p>
          <button className="btn-primary inline-flex items-center">
            <Play className="w-4 h-4 mr-2" />
            Watch Demo
          </button>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Restaurant</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our customer feedback system helps you identify areas for improvement, track satisfaction trends, and build a better restaurant. 
        With actionable insights and automated processes, you can continuously enhance the customer experience.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Improve service quality based on customer insights</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Increase customer satisfaction and retention rates</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Build positive online reputation and reviews</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
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