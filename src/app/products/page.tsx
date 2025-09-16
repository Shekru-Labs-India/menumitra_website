import React from 'react';
import Header from '@/components/organisms/Header';
import FooterSection from '@/components/organisms/FooterSection';
import { Download, Smartphone, Monitor } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const products = [
    {
      name: 'Owner App v1.3',
      image: 'images/mm/mm.png',
      description: 'Complete restaurant management solution for owners. Manage inventory, staff, reports, and operations.',
      downloadUrl: 'https://menusmitra.xyz/website/owner_app.apk',
      platform: 'Android 6.0 and above'
    },
    {
      name: 'POS System v1.3',
      image: 'images/mm/mm.png',
      description: 'Powerful point-of-sale system for seamless billing, KOT management, and order processing.',
      downloadUrl: 'https://menusmitra.xyz/website/menumitra_pos_system.exe',
      platform: 'Windows 7 and above'
    },
    {
      name: 'Captain App v1.3',
      image: 'images/mm/mm.png',
      description: 'Streamlined app for captains to manage tables, orders, and coordinate with kitchen staff.',
      downloadUrl: 'https://menusmitra.xyz/website/captain_app.apk',
      platform: 'Android 6.0 and above'
    },
    {
      name: 'Waiter App v1.3',
      image: 'images/mm/mm.png',
      description: 'Efficient order taking and customer service app for waiters to enhance dining experience.',
      downloadUrl: 'https://menusmitra.xyz/website/waiter_app.apk',
      platform: 'Android 6.0 and above'
    },
    {
      name: 'Partner App v1.3',
      image: 'images/mm/mm.png',
      description: 'Partner management app for handling deliveries, partnerships, and business collaborations.',
      downloadUrl: 'https://menusmitra.xyz/website/partner_app.apk',
      platform: 'Android 6.0 and above'
    }
  ];

  return (
    <>
      <Header />
      
      {/* Main Content */}
      <section className="pb-150 relative pt-[230px] ">
        <div className="container">
          <div className="text-center max-w-[620px] mx-auto mb-25">
            <p className="section-tagline">MenuMitra Apps</p>
            <h2 className="mb-8">Complete Restaurant Management Suite</h2>
            <p>
              Download our comprehensive suite of restaurant management applications designed to streamline your operations and boost productivity.
            </p>
          </div>
          <h3 className="mb-8 text-2xl font-semibold text-center">Version 1.3</h3>
          <div
            className=" grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-8 relative z-10"
            data-aos="fade-up"
            data-aos-offset={200}
            data-aos-duration={1000}
            data-aos-delay={200}
            data-aos-once="true"
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10">
              <div className="max-1xl:w-[335px] max-1xl:h-[335px]  1xl:w-[442px] 1xl:h-[442px]  rounded-full bg-primary-200/20 blur-[145px]" />
              <div className="max-1xl:w-[335px] max-1xl:h-[335px]  1xl:w-[442px] 1xl:h-[442px]  rounded-full bg-primary-200/25 -ml-[170px] max-md:ml-0 blur-[145px]" />
              <div className="max-1xl:w-[335px] max-1xl:h-[335px]  1xl:w-[442px] 1xl:h-[442px]  rounded-full bg-primary-200/20 -ml-[170px] max-md:ml-0 blur-[145px]" />
            </div>
            
            {products.map((product, index) => (
              <div key={index} className="bg-white dark:bg-dark-200 shadow-box rounded-medium p-2.5">
                <div className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-10 h-full max-lg:p-5 text-center">
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <img
                      src={product.image}
                      alt={`${product.name} image`}
                      className="w-12 h-12 object-contain"
                    />
                    <h3 className="mb-0">{product.name}</h3>
                  </div>
                  <p className="mb-4">{product.description}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex items-center justify-center gap-2">
                    {product.platform.includes('Android') ? (
                      <Smartphone className="w-4 h-4" />
                    ) : (
                      <Monitor className="w-4 h-4" />
                    )}
                    {product.platform}
                  </p>
                  <div className="flex justify-center mt-4">
                    <a 
                      href={product.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-colors duration-300"
                    >
                      <Download className="w-4 h-4" color="white" />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <FooterSection />
    </>
  );
};

export default ProductsPage;
