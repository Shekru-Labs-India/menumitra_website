import React from 'react';
import Header from '@/components/organisms/Header';
import FooterSection from '@/components/organisms/FooterSection';

const ProductsPage: React.FC = () => {
  return (
    <>
      <Header />
      
      {/* Main Content */}
      <main className="pt-32">
        <div className="container">
          <div className="text-center py-20">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
              Our Products
            </h1>
            <p className="text-xl text-paragraph dark:text-gray-300 max-w-3xl mx-auto">
              Discover MenuMitra's comprehensive suite of restaurant management solutions designed to streamline your operations and boost your business.
            </p>
          </div>
          
          {/* Placeholder content - will be expanded later */}
          <div className="py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-dark-200 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  POS System
                </h3>
                <p className="text-paragraph dark:text-gray-300">
                  Complete point-of-sale solution for seamless billing and order management.
                </p>
              </div>
              
              <div className="bg-white dark:bg-dark-200 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Mobile Apps
                </h3>
                <p className="text-paragraph dark:text-gray-300">
                  Owner, Captain, Waiter, and Partner apps for comprehensive restaurant management.
                </p>
              </div>
              
              <div className="bg-white dark:bg-dark-200 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Web Dashboard
                </h3>
                <p className="text-paragraph dark:text-gray-300">
                  Advanced web-based management tools for analytics and administration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <FooterSection />
    </>
  );
};

export default ProductsPage;
