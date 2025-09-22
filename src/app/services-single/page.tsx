'use client';

import React, { useEffect } from 'react';
import FooterSection from '@/components/organisms/FooterSection';
import { QrCode, Smartphone, Monitor, CheckCircle, ArrowRight, Star, Users, Clock, Shield, Zap } from 'lucide-react';
import SectionDivider from '@/components/atoms/SectionDivider';
import { useAOS } from '@/hooks/useAOS';

const ServicesSinglePage: React.FC = () => {
  const { refreshAOS } = useAOS();

  useEffect(() => {
    refreshAOS();
  }, [refreshAOS]);

  const features = [
    {
      icon: <QrCode className="w-6 h-6" />,
      title: "QR Code Generation",
      description: "Automatically generate unique QR codes for each table, enabling instant menu access."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Optimized",
      description: "Fully responsive design that works perfectly on all mobile devices and screen sizes."
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Real-time Updates",
      description: "Update menu items, prices, and availability instantly across all digital menus."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Contactless Ordering",
      description: "Customers can browse, select, and order directly from their mobile devices."
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-primary-600" />,
      title: "Enhanced Customer Experience",
      description: "Provide a modern, contactless dining experience that customers love."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary-600" />,
      title: "Faster Service",
      description: "Reduce wait times and improve order accuracy with direct customer ordering."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary-600" />,
      title: "Hygiene & Safety",
      description: "Eliminate physical menu contact and reduce touchpoints for better hygiene."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary-600" />,
      title: "Easy Management",
      description: "Update menus instantly without printing costs or distribution hassles."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-dark-100">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 to-white dark:from-dark-200 dark:to-dark-100">
        <div className="container">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-6" data-aos="fade-right">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                  <QrCode className="w-4 h-4 mr-2" />
                  Digital Menu Solution
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                QR Code Digital Menus
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Transform your restaurant with contactless QR code menus that enhance customer experience, 
                reduce wait times, and boost sales through seamless digital ordering.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/book-demo" className="btn btn-primary btn-lg">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a href="/contact" className="btn btn-outline btn-lg">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6" data-aos="fade-left">
              <div className="relative">
                <div className="bg-white dark:bg-dark-200 rounded-2xl shadow-2xl p-8">
                  <div className="text-center mb-6">
                    <QrCode className="w-24 h-24 mx-auto text-primary-600 mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Scan to View Menu
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Customers simply scan the QR code to access your digital menu
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4">
                      <div className="text-2xl font-bold text-primary-600">99%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Customer Satisfaction</div>
                    </div>
                    <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4">
                      <div className="text-2xl font-bold text-primary-600">40%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Faster Service</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to create, manage, and optimize your digital menu experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="bg-primary-100 dark:bg-primary-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-200">
        <div className="container">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose QR Code Menus?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover the benefits that make QR code menus the future of restaurant dining
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-dark-100 rounded-xl p-8 shadow-lg" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Restaurant?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of restaurants already using QR code menus to enhance their customer experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/book-demo" className="btn btn-white btn-lg">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a href="/contact" className="btn btn-outline-white btn-lg">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ServicesSinglePage;
