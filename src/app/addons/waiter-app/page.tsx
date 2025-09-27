"use client";

import React from 'react';
import SectionLayout from '@/components/layouts/SectionLayout';
import { useSectionConfig } from '@/hooks/useSectionConfig';
import YouTubeVideo from '@/components/atoms/YouTubeVideo';
import { 
  CheckCircle, 
} from 'lucide-react';

const WaiterAppPage: React.FC = () => {
  const sectionConfig = useSectionConfig('addons');

  const mainContent = (
    <>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Waiter App
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Empower your waitstaff with our comprehensive waiter mobile application. 
        Streamline order taking, table management, and customer service with intuitive tools.
      </p>
      <p className="text-lg text-gray-600 mb-6">
        Our waiter app features real-time order processing, table status updates, and customer communication tools. 
        Improve service efficiency and enhance the overall dining experience.
      </p>
      <p className="text-lg text-gray-600 mb-8">
        Whether you're managing a small restaurant or a large dining establishment, our waiter app adapts to your 
        service model and helps your staff deliver exceptional customer service.
      </p>

      {/* Feature Image */}
      <div className="bg-white rounded-medium p-2.5 shadow-nav">
        <img
          src="/images/service-single1.png"
          alt="MenuMitra Waiter App - Service Excellence Tools with intuitive interface designed for restaurant waitstaff"
          className="w-[900px] h-auto object-cover rounded mx-auto block"
          loading="lazy"
        />
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Key Features</h3>
      <p className="text-lg text-gray-600 mb-6">
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
      <YouTubeVideo 
        videoId="j2e2stCcICo"
        title="See Waiter App in Action"
        description="Watch how our waiter app improves service efficiency"
      />

      <h3 className="text-2xl font-semibold mt-12 mb-6">Benefits for Your Waitstaff</h3>
      <p className="text-lg text-gray-600 mb-6">
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