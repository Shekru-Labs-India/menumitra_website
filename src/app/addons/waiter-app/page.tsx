"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import { 
  Users, 
  CheckCircle, 
  Play
} from 'lucide-react';

const WaiterAppPage: React.FC = () => {
  const sectionConfig = useSectionConfig('addons');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Waiter App
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Empower your waitstaff with our comprehensive waiter mobile application. 
        Streamline order taking, table management, and customer service with intuitive tools.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our waiter app features real-time order processing, table status updates, and customer communication tools. 
        Improve service efficiency and enhance the overall dining experience.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Whether you're managing a small restaurant or a large dining establishment, our waiter app adapts to your 
        service model and helps your staff deliver exceptional customer service.
      </p>

      {/* Feature Image */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav mb-8">
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 text-center">
          <Users className="w-24 h-24 text-primary-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Service Excellence Tools</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Intuitive interface designed for restaurant waitstaff
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Key Features</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our waiter app includes everything needed to enhance service efficiency and customer satisfaction. 
        From order management to table coordination, we've designed every feature with waitstaff needs in mind.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center"> 
          <span>Quick order taking and menu browsing</span>
        </li>
        <li className="flex items-center"> 
          <span>Real-time table status and order tracking</span>
        </li>
        <li className="flex items-center"> 
          <span>Customer communication and special requests</span>
        </li>
        <li className="flex items-center"> 
          <span>Payment processing and bill management</span>
        </li>
      </ul>

      {/* Video Section */}
      <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav relative mb-8">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-300 dark:to-dark-400 rounded-lg p-12 text-center relative">
          <Play className="w-16 h-16 text-primary-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">See Waiter App in Action</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Watch how our app enhances service efficiency
          </p>
          <button className="btn-primary inline-flex items-center">
            <Play className="w-4 h-4 mr-2" />
            Watch Demo
          </button>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Waitstaff</h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Our waiter app makes service more efficient and enjoyable for your staff. With intuitive tools and real-time updates, 
        waiters can focus on providing excellent customer service while the app handles the operational complexity.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center"> 
          <span>Reduce order errors and improve accuracy</span>
        </li>
        <li className="flex items-center"> 
          <span>Increase table turnover and service efficiency</span>
        </li>
        <li className="flex items-center"> 
          <span>Enhance customer satisfaction with faster service</span>
        </li>
        <li className="flex items-center"> 
          <span>Streamline payment processing and bill management</span>
        </li>
      </ul>
    </>
  );

  return (
    <SectionLayout
      sidebarTitle={sectionConfig.sidebarTitle}
      sidebarItems={sectionConfig.sidebarItems}
      defaultActiveItem="Waiter App"
      backgroundImage={sectionConfig.backgroundImage}
      routeMappings={sectionConfig.routeMappings}
      mainContent={mainContent}
    />
  );
};

export default WaiterAppPage;