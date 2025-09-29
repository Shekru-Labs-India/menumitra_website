'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SocialIcon from '@/components/atoms/SocialIcon';
import ContactHeader from './ContactHeader';
import { Phone, Mail } from 'lucide-react';
import { email, phone, getEmailLink, getPhoneLink, social } from '@/config/contact';

interface FooterSectionProps {
  className?: string;
}

const FooterSection: React.FC<FooterSectionProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const isActive = (path: string) => {
    // For exact matches (like home, about, products, contact)
    if (pathname === path) {
      return true;
    }
    
    // For features, addons, and outlet types, check if current path matches exactly
    if (path.startsWith('/features/') && pathname.startsWith('/features/')) {
      return pathname === path;
    }
    
    if (path.startsWith('/addons/') && pathname.startsWith('/addons/')) {
      return pathname === path;
    }
    
    if (path.startsWith('/outlet-type/') && pathname.startsWith('/outlet-type/')) {
      return pathname === path;
    }
    
    return false;
  };

  return (
    <section className={`bg-white overflow-hidden relative py-5 border-t border-dashed border-gray-100 ${className}`}>
      {/* Contact Header */}
      <ContactHeader />
      
      <div className="container">
        <div className="grid grid-cols-12 mb-20 max-lg:gap-y-10 max-lg:text-center gap-2">
          <div className="col-span-6 lg:col-span-3 max-lg:text-center">
            <h3 className="mb-8 font-bold text-lg text-left">Navigations</h3>
            <ul className="[&>*:not(:last-child)]:mb-3 text-left">
              <li>
                <Link 
                  href="/" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/about') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/products" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/products') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/contact') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-6 lg:col-span-3 max-lg:text-center">
            <h3 className="mb-8 font-bold text-lg text-left">Features</h3>
            <ul className="[&>*:not(:last-child)]:mb-3 text-left">
              <li>
                <Link 
                  href="/features/menu" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/features/menu') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link 
                  href="/features/billing" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/features/billing') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  Billing
                </Link>
              </li>
              <li>
                <Link 
                  href="/features/inventory" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/features/inventory') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  Inventory
                </Link>
              </li>
              <li>
                <Link 
                  href="/features/online-order" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/features/online-order') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  Online Order
                </Link>
              </li>
              <li>
                <Link 
                  href="/features/restaurant-reports" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/features/restaurant-reports') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  Restaurant Reports
                </Link>
              </li>
              <li>
                <Link 
                  href="/features/customer-management" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/features/customer-management') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  Customer Management
                </Link>
              </li>
              <li>
                <Link 
                  href="/features/customer-feedback" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/features/customer-feedback') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  Customer Feedback
                </Link>
              </li>
              <li>
                <Link 
                  href="/features/scan-order" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/features/scan-order') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  Scan & Order
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-6 lg:col-span-3 max-lg:text-center">
            <h3 className="mb-8 font-bold text-lg text-left">AddOns</h3>
            <ul className="[&>*:not(:last-child)]:mb-3 text-left">
              <li>
                <Link 
                  href="/addons/captain-app" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/addons/captain-app') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  Captain App
                </Link>
              </li>
              <li>
                <Link 
                  href="/addons/waiter-app" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/addons/waiter-app') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  Waiter App
                </Link>
              </li>
              <li>
                <Link 
                  href="/addons/point-of-sale" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/addons/point-of-sale') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  Point of Sale
                </Link>
              </li>
              <li>
                <Link 
                  href="/addons/kitchen-display-system" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/addons/kitchen-display-system') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  Kitchen Display
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-6 lg:col-span-2 max-lg:text-center">
            <h3 className="mb-8 font-bold text-lg text-left">Outlet Type</h3>
            <ul className="[&>*:not(:last-child)]:mb-3 text-left">
              <li>
                <Link 
                  href="/outlet-type/restaurant" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/outlet-type/restaurant') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  Restaurant
                </Link>
              </li>
              <li>
                <Link 
                  href="/outlet-type/fine-dine" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/outlet-type/fine-dine') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  Fine Dine
                </Link>
              </li>
              <li>
                <Link 
                  href="/outlet-type/food-courts" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/outlet-type/food-courts') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  Food Courts
                </Link>
              </li>
              <li>
                <Link 
                  href="/outlet-type/pizzeria" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/outlet-type/pizzeria') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  Pizzeria
                </Link>
              </li>
              <li>
                <Link 
                  href="/outlet-type/cafe" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/outlet-type/cafe') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  Cafe
                </Link>
              </li>
              <li>
                <Link 
                  href="/outlet-type/qsr" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/outlet-type/qsr') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  QSR
                </Link>
              </li>
              <li>
                <Link 
                  href="/outlet-type/bakeries" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/outlet-type/bakeries') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  Bakeries
                </Link>
              </li>
              <li>
                <Link 
                  href="/outlet-type/bar-pub" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/outlet-type/bar-pub') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  Bar & Pub
                </Link>
              </li>
              <li>
                <Link 
                  href="/outlet-type/cloud-kitchens" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/outlet-type/cloud-kitchens') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  Cloud Kitchens
                </Link>
              </li>
              <li>
                <Link 
                  href="/outlet-type/large-chain" 
                  className={`relative inline-block overflow-hidden text-base capitalize before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/outlet-type/large-chain') ? 'text-primary' : 'text-paragraph'
                  }`}
                >
                  Large Chain
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="seperator">
          <Image
            src="/images/footer-seperator.svg"
            alt="footer-seperator"
            width={1200}
            height={50}
            className=" w-full object-cover"
          />
          <Image
            src="/images/footer-seperator-dark.svg"
            alt="footer-seperator"
            width={1200}
            height={50}
            className="hidden w-full object-cover"
          />
        </div>

        <div className="py-10 max-lg:text-center">
          <div className="flex max-lg:flex-col lg:items-center">
            <p className="max-lg:mb-10">@ {currentYear} MenuMitra. All Rights Reserved</p>
            <ul className="lg:ml-auto flex items-center gap-15 max-lg:justify-center">
              <li>
                <a href="/privacy-and-policy" className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-and-conditions" className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/cookie-policy" className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="/request-data-removal" className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  Request Data Removal
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;