import React from 'react';
import Header from '@/components/organisms/Header';
import FooterSection from '@/components/organisms/FooterSection';
import SectionDivider from '@/components/atoms/SectionDivider';
import { Package, TrendingDown, AlertTriangle, RotateCcw } from 'lucide-react';

const InventoryPage: React.FC = () => {
  const features = [
    {
      icon: <Package className="w-8 h-8 text-primary-600" />,
      title: 'Stock Management',
      description: 'Track inventory levels, set reorder points, and manage stock across multiple locations.'
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-primary-600" />,
      title: 'Low Stock Alerts',
      description: 'Get automatic notifications when inventory levels drop below predefined thresholds.'
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-primary-600" />,
      title: 'Expiry Tracking',
      description: 'Monitor product expiration dates and receive alerts for items nearing expiry.'
    },
    {
      icon: <RotateCcw className="w-8 h-8 text-primary-600" />,
      title: 'Auto Reorder',
      description: 'Automatically generate purchase orders based on consumption patterns and stock levels.'
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pb-20 relative pt-[230px]">
        <div className="container">
          <div className="text-center mx-auto mb-25">
            <h1 className="mb-8">Inventory Management</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Optimize your restaurant's inventory with real-time tracking, automated alerts, and intelligent reordering. 
              Reduce waste, prevent stockouts, and maintain optimal inventory levels.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pb-20 relative">
        <div className="container">
          <div className="text-center mx-auto mb-25">
            <h2 className="mb-8">Inventory Features</h2>
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

export default InventoryPage;