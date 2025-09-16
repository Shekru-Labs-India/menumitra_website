import React from 'react';
import Header from '@/components/organisms/Header';
import FooterSection from '@/components/organisms/FooterSection';
import SectionDivider from '@/components/atoms/SectionDivider';
import { CreditCard, Receipt, DollarSign, TrendingUp } from 'lucide-react';

const BillingPage: React.FC = () => {
  const features = [
    {
      icon: <CreditCard className="w-8 h-8 text-primary-600" />,
      title: 'Automated Billing',
      description: 'Streamline your billing process with automated invoice generation and payment tracking.'
    },
    {
      icon: <Receipt className="w-8 h-8 text-primary-600" />,
      title: 'Invoice Management',
      description: 'Create, send, and track invoices with professional templates and automated reminders.'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary-600" />,
      title: 'Payment Processing',
      description: 'Accept multiple payment methods with secure processing and real-time transaction updates.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary-600" />,
      title: 'Financial Analytics',
      description: 'Track revenue, analyze payment trends, and generate comprehensive financial reports.'
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pb-20 relative pt-[230px]">
        <div className="container">
          <div className="text-center mx-auto mb-25">
            <h1 className="mb-8">Billing Management</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Streamline your restaurant's billing operations with our comprehensive billing management system. 
              From invoice generation to payment processing, manage all your financial transactions efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pb-20 relative">
        <div className="container">
          <div className="text-center mx-auto mb-25">
            <h2 className="mb-8">Billing Features</h2>
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

export default BillingPage;
