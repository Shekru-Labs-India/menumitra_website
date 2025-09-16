import React from 'react';
import Header from '@/components/organisms/Header';
import FooterSection from '@/components/organisms/FooterSection';
import { Download, Smartphone, Monitor, Calendar } from 'lucide-react';
import SectionDivider from '@/components/atoms/SectionDivider';
const ProductsPage: React.FC = () => {
  const productsV13 = [
    {
      name: 'Owner App v1.3',
      image: 'images/mm/mm.png',
      description: 'Complete restaurant management for owners.',
      downloadUrl: 'https://menusmitra.xyz/website/owner_app.apk',
      platform: 'Android 6.0 and above'
    },
    {
      name: 'POS System v1.3',
      image: 'images/mm/mm.png',
      description: 'Powerful billing and order management system.',
      downloadUrl: 'https://menusmitra.xyz/website/menumitra_pos_system.exe',
      platform: 'Windows 7 and above'
    },
    {
      name: 'Captain App v1.3',
      image: 'images/mm/mm.png',
      description: 'Table and order management for captains.',
      downloadUrl: 'https://menusmitra.xyz/website/captain_app.apk',
      platform: 'Android 6.0 and above'
    },
    {
      name: 'Waiter App v1.3',
      image: 'images/mm/mm.png',
      description: 'Order taking and customer service app.',
      downloadUrl: 'https://menusmitra.xyz/website/waiter_app.apk',
      platform: 'Android 6.0 and above'
    },
    {
      name: 'Partner App v1.3',
      image: 'images/mm/mm.png',
      description: 'Delivery and partnership management.',
      downloadUrl: 'https://menusmitra.xyz/website/partner_app.apk',
      platform: 'Android 6.0 and above'
    }
  ];

  const productsV2 = [
    {
      name: 'Owner App v2',
      image: 'images/mm/mm.png',
      description: 'Next-generation restaurant management solution.',
      downloadUrl: 'https://menusmitra.xyz/website/owner_app_v2.apk',
      platform: 'Android 6.0 and above',
      releaseDate: 'Released: 28 July 2025'
    },
    {
      name: 'POS System v2',
      image: 'images/mm/mm.png',
      description: 'Advanced point-of-sale system with modern features.',
      downloadUrl: 'https://menusmitra.xyz/website/menumitra_pos_system_v2.exe',
      platform: 'Windows 7 and above',
      releaseDate: 'Released: 31 July 2025'
    }
  ];

  return (
    <>
      <Header />
      
      {/* Main Content */}
      <section className="pb-20 relative pt-[230px] ">
        <div className="container">
          <div className="text-center    mx-auto mb-25">
            <h2 className="mb-8">Complete Restaurant Management Suite</h2>  
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
            
            {productsV13.map((product, index) => (
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
                      className="btn btn-navbar btn-sm flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" color="white" />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <SectionDivider className="my-16" />

          <h3 className="mb-8 text-2xl font-semibold text-center">Version 2.0</h3>
          <div
            className=" grid grid-cols-2 max-sm:grid-cols-1 gap-8 relative z-10"
            data-aos="fade-up"
            data-aos-offset={200}
            data-aos-duration={1000}
            data-aos-delay={400}
            data-aos-once="true"
          >
            {productsV2.map((product, index) => (
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
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 flex items-center justify-center gap-2">
                    {product.platform.includes('Android') ? (
                      <Smartphone className="w-4 h-4" />
                    ) : (
                      <Monitor className="w-4 h-4" />
                    )}
                    {product.platform}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {product.releaseDate}
                  </p>
                  <div className="flex justify-center mt-4">
                    <a 
                      href={product.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-navbar btn-sm flex items-center gap-2"
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

      <SectionDivider />

      
      <FooterSection />
    </>
  );
};

export default ProductsPage;
