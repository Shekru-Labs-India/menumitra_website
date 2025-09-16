import React from 'react';
import Header from '@/components/organisms/Header';
import FooterSection from '@/components/organisms/FooterSection';
import SectionDivider from '@/components/atoms/SectionDivider';
import { ShoppingCart, Smartphone, Clock, MapPin } from 'lucide-react';

const OnlineOrderPage: React.FC = () => {
  const features = [
    {
      icon: <ShoppingCart className="w-8 h-8 text-primary-600" />,
      title: 'Online Ordering',
      description: 'Accept orders directly from your website and mobile app with real-time order processing.'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary-600" />,
      title: 'Mobile App Integration',
      description: 'Seamlessly integrate with your mobile app for convenient customer ordering experience.'
    },
    {
      icon: <Clock className="w-8 h-8 text-primary-600" />,
      title: 'Order Scheduling',
      description: 'Allow customers to schedule orders for pickup or delivery at specific times.'
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary-600" />,
      title: 'Delivery Tracking',
      description: 'Track delivery orders in real-time and provide customers with order status updates.'
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pb-20 relative pt-[230px]">
        <div className="container">
          <div className="text-center mx-auto mb-25">
            <h1 className="mb-8">Online Order Management</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Streamline your online ordering process with our comprehensive order management system. 
              Accept orders, manage deliveries, and provide customers with seamless ordering experience.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pb-20 relative">
        <div className="container">
          <div className="text-center mx-auto mb-25">
            <h2 className="mb-8">Online Order Features</h2>
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

export default OnlineOrderPage;