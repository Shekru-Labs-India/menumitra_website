'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import GraphBackground from '@/components/atoms/GraphBackground';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCashRegister, 
  faShoppingCart, 
  faQrcode, 
  faChartBar, 
  faBoxes 
} from '@fortawesome/free-solid-svg-icons';

const ClientSection: React.FC = () => {
  useEffect(() => {
    // Marquee animation setup - duplicate elements for infinite scroll
    const marqueeContent = document.querySelector('.marquee-content');
    if (marqueeContent) {
      const elementsDisplayed = getComputedStyle(document.documentElement).getPropertyValue('--marquee-elements-displayed');
      const marqueeElements = marqueeContent.children.length;
      
      // Set CSS variable for number of elements
      document.documentElement.style.setProperty('--marquee-elements', marqueeElements.toString());
      
      // Duplicate elements for seamless loop
      for (let i = 0; i < parseInt(elementsDisplayed); i++) {
        marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
      }
    }
  }, []);

  return (
    <section id="client-section" className="client pt-[140px] pb-[145px] max-lg:py-20 relative">
      {/* Graph Background */}
      <GraphBackground 
        className="top-10" 
        opacity={0.15}
      />
      
      <div className="container overflow-hidden max-lg:!px-0 relative z-10">
        <div className="text-center max-w-[550px] px-[10px] mx-auto max-lg:px-2.5">
          <h2 className="mb-10">Our Happy Clients - Trusted Restaurant Partners</h2>
          <p className="text-light mb-15">Join 500+ successful restaurants across India who have transformed their digital presence with MenuMitra's innovative restaurant management solutions</p>
        </div>
        <div className="relative after:absolute before:absolute after:w-[120px] after:h-[40px] after:bg-gradient-to-r after:from-white after:from-[37.5%] after:top-1/2 after:-translate-y-1/2 after:-left-0.5 after:z-10 before:w-[120px] before:h-[40px] before:bg-gradient-to-l before:from-white before:from-[37.5%] before:-right-0.5 before:top-1/2 before:-translate-y-1/2 before:z-10 dark:after:from-dark-gradient dark:before:from-dark-gradient">
          <div className="absolute left-0 top-0 w-full max-lg:hidden">
            <Image 
              src="/images/clients/client-border.svg" 
              alt="border" 
              width={1200} 
              height={40} 
              className="inline-block dark:hidden"
            />
            <Image 
              src="/images/clients/client-border-dark.svg" 
              alt="border" 
              width={1200} 
              height={40} 
              className="hidden dark:inline-block"
            />
          </div>
          <div className="marquee marquee-items">
            <div className="marquee-content flex items-center justify-between py-8" id="clients">
              {/* MenuMitra Outlet Images */}
              <div className="marquee-content-list">
                <Image 
                  src="/images/clients/hotel_ganesh_shakaahari.webp" 
                  alt="Hotel Ganesh Shakaahari - MenuMitra Restaurant Partner" 
                  width={120} 
                  height={40} 
                  className="inline-block dark:hidden"
                />
                <Image 
                  src="/images/clients/hotel_ganesh_shakaahari.webp" 
                  alt="Hotel Ganesh Shakaahari - MenuMitra Restaurant Partner" 
                  width={120} 
                  height={40} 
                  className="hidden dark:inline-block"
                />
              </div>
              <div className="marquee-content-list">
                <Image 
                  src="/images/clients/hotel_audumbar.webp" 
                  alt="Hotel Audumbar - MenuMitra Restaurant Partner" 
                  width={120} 
                  height={40} 
                  className="inline-block dark:hidden"
                />
                <Image 
                  src="/images/clients/hotel_audumbar.webp" 
                  alt="Hotel Audumbar - MenuMitra Restaurant Partner" 
                  width={120} 
                  height={40} 
                  className="hidden dark:inline-block"
                />
              </div>
              <div className="marquee-content-list">
                <Image 
                  src="/images/clients/hotel_rasika.webp" 
                  alt="Hotel Rasika - MenuMitra Restaurant Partner" 
                  width={120} 
                  height={40} 
                  className="inline-block dark:hidden"
                />
                <Image 
                  src="/images/clients/hotel_rasika.webp" 
                  alt="Hotel Rasika - MenuMitra Restaurant Partner" 
                  width={120} 
                  height={40} 
                  className="hidden dark:inline-block"
                />
              </div>
              <div className="marquee-content-list">
                <Image 
                  src="/images/clients/hotel_nandini_pure_veg.webp" 
                  alt="Hotel Nandini Pure Veg - MenuMitra Restaurant Partner" 
                  width={120} 
                  height={40} 
                  className="inline-block dark:hidden"
                />
                <Image 
                  src="/images/clients/hotel_nandini_pure_veg.webp" 
                  alt="Hotel Nandini Pure Veg - MenuMitra Restaurant Partner" 
                  width={120} 
                  height={40} 
                  className="hidden dark:inline-block"
                />
              </div>
              <div className="marquee-content-list">
                <Image 
                  src="/images/clients/house_of_schezwam.webp" 
                  alt="House of Schezwam - MenuMitra Restaurant Partner" 
                  width={120} 
                  height={40} 
                  className="inline-block dark:hidden"
                />
                <Image 
                  src="/images/clients/house_of_schezwam.webp" 
                  alt="House of Schezwam - MenuMitra Restaurant Partner" 
                  width={120} 
                  height={40} 
                  className="hidden dark:inline-block"
                />
              </div>
              <div className="marquee-content-list">
                <Image 
                  src="/images/clients/sudamas_misal_house.webp" 
                  alt="Sudamas Misal House - MenuMitra Restaurant Partner" 
                  width={120} 
                  height={40} 
                  className="inline-block dark:hidden"
                />
                <Image 
                  src="/images/clients/sudamas_misal_house.webp" 
                  alt="Sudamas Misal House - MenuMitra Restaurant Partner" 
                  width={120} 
                  height={40} 
                  className="hidden dark:inline-block"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* SEO-friendly additional content */}
        <div className="mt-10 text-center max-w-[800px] mx-auto px-4">
          <p className="text-base leading-relaxed text-light mb-6">
            <div className="font-bold text-2xl">MenuMitra Restaurant Management Software</div>  <br /> Trusted by leading restaurants, cafes, and food establishments across India. 
            Our comprehensive digital solutions help restaurants streamline operations, increase revenue, and enhance customer experience.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-base md:text-lg text-light">
            <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg">
              <FontAwesomeIcon icon={faCashRegister} className="text-primary text-lg" />
              <span className="font-medium">Restaurant POS System</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg">
              <FontAwesomeIcon icon={faShoppingCart} className="text-primary text-lg" />
              <span className="font-medium">Online Order Management</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg">
              <FontAwesomeIcon icon={faQrcode} className="text-primary text-lg" />
              <span className="font-medium">Digital Menu Solutions</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg">
              <FontAwesomeIcon icon={faChartBar} className="text-primary text-lg" />
              <span className="font-medium">Customer Analytics</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg">
              <FontAwesomeIcon icon={faBoxes} className="text-primary text-lg" />
              <span className="font-medium">Inventory Management</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
