"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import { 
  CreditCard, 
  CheckCircle, 
  Play
} from 'lucide-react';

const BillingPage: React.FC = () => {
  const sectionConfig = useSectionConfig('features');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Smart Billing Management
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Streamline your restaurant's billing operations with MenuMitra's intelligent billing management system. 
        From table orders to final payments, handle everything seamlessly with automated invoice generation, 
        split billing, and integrated payment processing.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our smart billing platform connects directly with your POS system, kitchen display, and customer management tools. 
        Process payments faster, reduce billing errors, and provide customers with detailed, professional invoices. 
        Perfect for restaurants, cafes, food trucks, and catering businesses.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Whether you're managing a quick-service restaurant or a fine dining establishment, MenuMitra's billing system 
        adapts to your workflow, supports multiple payment methods, and ensures accurate financial tracking for better business insights.
      </p>

      {/* Feature Image */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav mb-8">
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 text-center">
          <CreditCard className="w-24 h-24 text-primary-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Restaurant Billing Dashboard</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Complete billing control from order to payment with real-time table management
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">What to Expect</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        MenuMitra's billing system is built specifically for restaurants, handling everything from table orders to final payments. 
        Our system automatically calculates taxes, applies discounts, manages split bills, and processes payments through multiple gateways.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Experience seamless integration with your kitchen display system, POS terminals, and customer database. 
        Generate professional invoices, track payment methods, and maintain detailed financial records for better business management.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Automated table billing and order management</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Split billing for groups and shared orders</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Multiple payment methods (cash, card, digital wallets)</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Real-time sales tracking and daily reports</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Tax calculation and discount management</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Professional invoice generation and printing</span>
        </li>
      </ul>

      {/* Video Section */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav relative mb-8">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-300 dark:to-dark-400 rounded-lg p-12 text-center relative">
          <Play className="w-16 h-16 text-primary-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">See MenuMitra Billing in Action</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Watch how our smart billing system streamlines restaurant operations
          </p>
          <button className="btn-primary inline-flex items-center">
            <Play className="w-4 h-4 mr-2" />
            Watch Demo
          </button>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Why Choose MenuMitra Billing?</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        MenuMitra's billing system is designed by restaurant professionals who understand the daily challenges of food service operations. 
        From handling rush hour orders to managing complex group bills, our system adapts to your restaurant's unique needs.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our comprehensive reporting tools give you insights into your restaurant's performance, helping you track popular items, 
        peak hours, payment preferences, and revenue trends. Make data-driven decisions to optimize your menu and operations.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Works with any restaurant size - from food trucks to fine dining</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>PCI-compliant payment processing for secure transactions</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>24/7 technical support from restaurant industry experts</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Mobile app for managers to monitor billing on-the-go</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Easy integration with existing restaurant management systems</span>
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
          <span>Comprehensive training and onboarding support</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem={sectionConfig.defaultActiveItem}
      backgroundImage={sectionConfig.backgroundImage}
      routeMappings={sectionConfig.routeMappings}
      mainContent={mainContent}
    >
    </SectionLayout>
  );
};

export default BillingPage;
