import React from 'react';
import Header from '@/components/organisms/Header';
import FooterSection from '@/components/organisms/FooterSection';
import SectionDivider from '@/components/atoms/SectionDivider';
import { Package, Menu as MenuIcon, ShoppingCart, BarChart3, Users, MessageSquare, QrCode, Store, ChefHat, Share2, Settings, UserCheck, Link } from 'lucide-react';

const FEATURE_NAME_PAGE: React.FC = () => {
  const features = [
    {
      icon: <Package className="w-8 h-8 text-primary-600" />,
      title: 'Feature 1',
      description: 'Description for the first feature of this module.'
    },
    {
      icon: <Package className="w-8 h-8 text-primary-600" />,
      title: 'Feature 2',
      description: 'Description for the second feature of this module.'
    },
    {
      icon: <Package className="w-8 h-8 text-primary-600" />,
      title: 'Feature 3',
      description: 'Description for the third feature of this module.'
    },
    {
      icon: <Package className="w-8 h-8 text-primary-600" />,
      title: 'Feature 4',
      description: 'Description for the fourth feature of this module.'
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pb-20 relative pt-[230px]">
        <div className="container">
          <div className="text-center mx-auto mb-25">
            <h1 className="mb-8">FEATURE_NAME</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Manage your FEATURE_NAME operations efficiently with our comprehensive management system.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pb-20 relative">
        <div className="container">
          <div className="text-center mx-auto mb-25">
            <h2 className="mb-8">FEATURE_NAME Features</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-dark-200 shadow-box rounded-medium p-8 text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />
      
      <FooterSection />
    </>
  );
};

export default FEATURE_NAME_PAGE;
