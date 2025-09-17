"use client";

import React, { useState } from 'react';
import Header from '@/components/organisms/Header';
import FooterSection from '@/components/organisms/FooterSection';
import SectionDivider from '@/components/atoms/SectionDivider';
import { 
  CreditCard, 
  Receipt, 
  DollarSign, 
  TrendingUp, 
  Shield, 
  Clock, 
  BarChart3, 
  Smartphone, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Users,
  Globe,
  Lock,
  ChevronRight,
  Play
} from 'lucide-react';

const BillingPage: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Smart Invoice Generation');

  const billingCategories = [
    'Smart Invoice Generation',
    'Payment Processing',
    'Financial Analytics',
    'Automated Workflows',
    'Multi-location Support',
    'API Integration'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small restaurants and cafes starting their digital journey.',
      monthlyPrice: '₹2,999',
      yearlyPrice: '₹29,999',
      features: [
        'Up to 100 invoices/month',
        'Basic payment processing',
        'Email support',
        'Standard templates',
        'Basic analytics',
        'Mobile app access'
      ]
    },
    {
      name: 'Professional',
      description: 'Ideal for growing restaurant chains with multiple locations.',
      monthlyPrice: '₹5,999',
      yearlyPrice: '₹59,999',
      features: [
        'Unlimited invoices',
        'Advanced payment processing',
        'Priority support',
        'Custom branding',
        'Advanced analytics',
        'API access',
        'Multi-location support',
        'Automated workflows'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For large restaurant groups and franchises with complex needs.',
      monthlyPrice: 'Custom',
      yearlyPrice: 'Custom',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom integrations',
        'White-label solution',
        'Advanced security',
        '24/7 phone support',
        'Custom reporting',
        'Training & onboarding'
      ]
    }
  ];

  const stats = [
    { 
      number: '85%', 
      label: 'Trusted by companies',
      description: 'of restaurants trust our billing system'
    },
    { 
      number: '10M+', 
      label: 'Transactions processed',
      description: 'successful payments handled monthly'
    }
  ];

  return (
    <>
      <Header />
      
      {/* Main Content Section - Following services-single.html structure */}
      <section className="pt-[200px] pb-150 max-md:pt-25 relative max-md:overflow-hidden max-md:pb-20">
        <div className="absolute left-0 right-0 -top-8 bg-service-bg bg-no-repeat bg-cover bg-center opacity-70 w-full h-full sm:hidden"></div>
        <div className="container relative z-10">
          <div className="absolute left-1/2 top-52 -translate-x-1/2 flex max-md:flex-col -z-10 max-md:hidden">
            <div className="lg:w-[330px] lg:h-[330px] xl:w-[442px] xl:h-[442px] blur-[145px] rounded-full bg-primary-200/20"></div>
            <div className="lg:w-[330px] lg:h-[330px] xl:w-[442px] xl:h-[442px] blur-[145px] rounded-full bg-primary-200/25 lg:-ml-[170px]"></div>
            <div className="lg:w-[330px] lg:h-[330px] xl:w-[442px] xl:h-[442px] blur-[145px] rounded-full bg-primary-200/20 lg:-ml-[170px]"></div>
          </div>

          <div className="grid grid-cols-12 gap-y-15 md:gap-8 lg:gap-16 auto-rows-max">
            {/* Sidebar Categories */}
            <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav max-md:hidden md:col-span-6 lg:col-span-4 self-start md:sticky md:top-20 max-md:static">
              <div className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark pt-9 px-10 pb-7">
                <h3 className="mb-3">Billing Features</h3>
                <ul className="[&>*:not(:last-child)]:border-dashed [&>*:not(:last-child)]:border-gray-100 dark:[&>*:not(:last-child)]:border-borderColour-dark [&>*:not(:last-child)]:border-b">
                  {billingCategories.map((category, index) => (
                    <li key={index} className={`group ${activeCategory === category ? 'tabActive' : ''}`}>
                      <button
                        onClick={() => setActiveCategory(category)}
                        className="flex items-center justify-between py-5 font-medium relative before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 w-full text-left"
                      >
                        {category}
                        <ChevronRight className={`w-4 h-4 ${activeCategory === category ? 'block' : 'hidden'}`} />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Main Content */}
            <div className="relative max-md:col-span-full md:col-span-6 lg:col-span-8">
              <div className="relative singlePage max-md:mt-20">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Smart Billing Management
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Transform your restaurant's billing operations with our comprehensive, AI-powered billing management system. 
                  From invoice generation to payment processing, we handle every aspect of your financial operations.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Our advanced billing platform integrates seamlessly with your existing restaurant management systems, 
                  providing real-time insights, automated workflows, and secure payment processing. Reduce manual work by 80% 
                  and get paid faster with our intelligent billing solutions.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Whether you're a small cafe or a large restaurant chain, our scalable billing system grows with your business, 
                  ensuring you always have the tools you need to manage your finances effectively.
                </p>

                {/* Feature Image */}
                <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav mb-8">
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 text-center">
                    <CreditCard className="w-24 h-24 text-primary-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Comprehensive Billing Dashboard</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Manage all your billing operations from one centralized platform
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mt-12 mb-6">What to Expect</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Our billing management system provides everything you need to streamline your restaurant's financial operations. 
                  From automated invoice generation to real-time payment tracking, we've designed every feature with restaurant owners in mind.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Experience seamless integration with your existing POS systems, comprehensive reporting capabilities, and 
                  enterprise-grade security that protects your business and customer data.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>AI-powered invoice generation and processing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Multi-payment gateway integration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Real-time financial analytics and reporting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Automated payment reminders and reconciliation</span>
                  </li>
                </ul>

                {/* Video Section */}
                <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav relative mb-8">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-300 dark:to-dark-400 rounded-lg p-12 text-center relative">
                    <Play className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Watch Our Billing System in Action</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      See how MenuMitra's billing management transforms restaurant operations
                    </p>
                    <button className="btn-primary inline-flex items-center">
                      <Play className="w-4 h-4 mr-2" />
                      Watch Demo
                    </button>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mt-12 mb-6">Key Benefits & Features</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Our billing management system is designed specifically for the restaurant industry, understanding the unique 
                  challenges and requirements of food service businesses. From handling complex tax calculations to managing 
                  multiple payment methods, we've got you covered.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  With our advanced analytics and reporting tools, you'll gain insights into your business performance like never before. 
                  Track revenue trends, identify payment patterns, and make data-driven decisions to grow your restaurant.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Scalable architecture that grows with your business</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Enterprise-grade security and compliance</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>24/7 customer support and training</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Mobile app for on-the-go management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative pb-25 max-md:overflow-hidden">
        <div className="container relative max-md:text-center">
          <div className="absolute left-1/2 -bottom-[442px] -translate-x-1/2 flex max-md:flex-col -z-10 max-md:hidden">
            <div className="max-md:hidden max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/20 blur-[145px]"></div>
            <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/25 -ml-[170px] max-md:ml-0 blur-[145px]"></div>
            <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/20 -ml-[170px] max-md:ml-0 blur-[145px]"></div>
          </div>
          <div className="absolute left-1/2 -bottom-[350px] p-[350px] -translate-x-1/2 bg-contain w-full h-full bg-hero-gradient bg-no-repeat bg-center opacity-70 md:hidden -z-10"></div>
          <div>
            <div>
              <p className="text-primary-600 font-medium mb-2">Start Today</p>
            </div>
            <div className="grid grid-cols-12 grid-y-10 items-start">
              <div className="max-md:col-span-full md:col-span-6 lg:col-span-7">
                <h2 className="mb-5 max-lg:text-[32px] text-[48px] font-semibold">
                  Start your free trial now!
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Transform your restaurant's billing operations with our comprehensive billing management system.
                </p>
              </div>
              <div className="max-md:col-span-full md:col-span-6 lg:col-span-5 max-md:mt-5">
                <form>
                  <div className="grid grid-cols-12 items-center max-lg:gap-y-5 lg:gap-x-6">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="bg-transparent placeholder:text-light dark:placeholder:text-[#A1A49D] text-[#A1A49D] text-light focus:outline-none leading-[1.5] border rounded-[60px] bg-white dark:bg-dark-200 dark:border-[#31332F] border-borderColour max-lg:col-span-full lg:col-span-8 h-full ps-5 max-lg:py-3.5 focus:border-primary dark:focus:border-primary duration-300 transition-all outline-none"
                    />
                    <button className="btn max-lg:col-span-full lg:col-span-4">Get Started</button>
                  </div>
                </form>
                <ul className="flex max-md:flex-col max-lg:gap-y-2.5 items-center max-lg:justify-between lg:gap-5 mt-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    <p className="text-sm">No Credit Card Required</p>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    <p className="text-sm">Free For 14 Day Trial</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>      
      <FooterSection />
    </>
  );
};

export default BillingPage;
