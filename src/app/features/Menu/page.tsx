import React from 'react';
import Header from '@/components/organisms/Header';
import FooterSection from '@/components/organisms/FooterSection';
import SectionDivider from '@/components/atoms/SectionDivider';
import { Menu as MenuIcon, Edit3, Image, Clock } from 'lucide-react';

const MenuPage: React.FC = () => {
  const features = [
    {
      icon: <MenuIcon className="w-8 h-8 text-primary-600" />,
      title: 'Digital Menu Builder',
      description: 'Create and customize digital menus with drag-and-drop interface and real-time updates.'
    },
    {
      icon: <Edit3 className="w-8 h-8 text-primary-600" />,
      title: 'Menu Editing',
      description: 'Easily add, edit, or remove items with pricing, descriptions, and nutritional information.'
    },
    {
      icon: <Image className="w-8 h-8 text-primary-600" />,
      title: 'Menu Images',
      description: 'Upload and manage high-quality images for menu items to enhance customer appeal.'
    },
    {
      icon: <Clock className="w-8 h-8 text-primary-600" />,
      title: 'Availability Control',
      description: 'Set item availability by time, day, or season with automatic menu updates.'
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pb-20 relative pt-[230px]">
        <div className="container">
          <div className="text-center mx-auto mb-25">
            <h1 className="mb-8">Menu Management</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Create, manage, and optimize your restaurant menu with our comprehensive menu management system. 
              Update prices, add seasonal items, and control availability across all channels.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pb-20 relative">
        <div className="container">
          <div className="text-center mx-auto mb-25">
            <h2 className="mb-8">Menu Features</h2>
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

export default MenuPage;