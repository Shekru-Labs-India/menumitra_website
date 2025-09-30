"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import YouTubeVideo from '@/components/atoms/YouTubeVideo';
import { 
  CheckCircle, 
} from 'lucide-react';

const RecipeManagementPage: React.FC = () => {
  const sectionConfig = useSectionConfig('features');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Recipe Management
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Standardize your kitchen operations with our comprehensive recipe management system. 
        Create, store, and share recipes with detailed instructions, ingredients, and nutritional information.
      </p>
      <p className="text-lg text-gray-600 mb-6">
        Our recipe management platform helps you maintain consistency across all locations, 
        calculate accurate food costs, and ensure quality control in your kitchen operations.
      </p>
      <p className="text-lg text-gray-600 mb-8">
        Whether you're managing a single kitchen or multiple locations, our system ensures 
        every dish is prepared consistently according to your standards.
      </p>

      {/* Feature Image */}
      <div className="bg-white rounded-medium p-2.5 shadow-nav">
        <img
          src="/images/recipe-management.png"
          alt="MenuMitra Recipe Management - Digital Recipe Library with centralized repository for all your restaurant recipes"
          className="w-[900px] h-auto object-cover rounded mx-auto block"
          loading="lazy"
        />
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Recipe Management Features</h3>
      <p className="text-lg text-gray-600 mb-6">
        Our recipe management system provides everything you need to standardize your kitchen operations. 
        From ingredient tracking to cost calculation, we've designed every feature with kitchen efficiency in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center"> 
          <span>Digital recipe creation and storage</span>
        </li>
        <li className="flex items-center"> 
          <span>Ingredient tracking and cost calculation</span>
        </li>
        <li className="flex items-center"> 
          <span>Nutritional information and allergen management</span>
        </li>
        <li className="flex items-center"> 
          <span>Version control and recipe updates</span>
        </li>
      </ul>

      {/* Video Section */}
      <YouTubeVideo 
        videoId="j2e2stCcICo"
        title="See Recipe Management in Action"
        description="Watch how our recipe system standardizes food preparation"
      />

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Kitchen</h3>
      <p className="text-lg text-gray-600 mb-6">
        Our recipe management system helps you maintain consistency, reduce waste, and improve efficiency in your kitchen. 
        With standardized recipes and accurate cost tracking, you can optimize your food operations.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center"> 
          <span>Ensure consistent food quality across all locations</span>
        </li>
        <li className="flex items-center"> 
          <span>Reduce food waste with accurate portion control</span>
        </li>
        <li className="flex items-center"> 
          <span>Improve staff training with detailed instructions</span>
        </li>
        <li className="flex items-center"> 
          <span>Optimize food costs with precise ingredient tracking</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem="Recipe Management"
      backgroundImage={sectionConfig.backgroundImage}
      routeMappings={sectionConfig.routeMappings}
      mainContent={mainContent}
    />
  );
};

export default RecipeManagementPage;