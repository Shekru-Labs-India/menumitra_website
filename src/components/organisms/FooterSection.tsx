'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SocialIcon from '@/components/atoms/SocialIcon';
import { Phone, Mail } from 'lucide-react';
import { email, phone, getEmailLink, getPhoneLink, social } from '@/config/contact';

interface FooterSectionProps {
  className?: string;
}

const FooterSection: React.FC<FooterSectionProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <section className={`bg-white overflow-hidden relative pt-20 border-t border-dashed border-gray-100 ${className}`}>
      <div className="container">
        <div className="grid grid-cols-12 mb-20 max-lg:gap-y-10 max-lg:text-center">
          <div className="col-span-12 lg:col-span-4 ">
            <div className="flex items-center gap-4 mb-5 max-lg:justify-center">
              <Image
                src="/images/mm/mm.png"
                alt="MenuMitra logo"
                width={60}
                height={60}
                className="w-auto h-auto"
              />
              <span className="text-2xl font-bold text-gray-900">MenuMitra</span>
            </div>
            <p className="max-w-[350px] max-lg:mx-auto">
              AI-powered digital menu platform for restaurants with QR code menus and smart order management.
            </p>
          </div>
          <div className="col-span-6 lg:col-span-2 max-lg:text-center">
            <h3 className="mb-8 font-medium text-lg text-left">Navigations</h3>
            <ul className="[&>*:not(:last-child)]:mb-3 text-left">
              <li>
                <Link 
                  href="/" 
                  className={`relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/') ? 'active' : ''
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className={`relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/about') ? 'active' : ''
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/products" 
                  className={`relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/products') ? 'active' : ''
                  }`}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className={`relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/contact') ? 'active' : ''
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-6 lg:col-span-2 max-lg:text-center">
            <h3 className="mb-8 font-medium text-lg text-left">Features</h3>
            <ul className="[&>*:not(:last-child)]:mb-3 text-left">
              <li>
                <Link 
                  href="/features/menu" 
                  className={`relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/features/menu') ? 'active' : ''
                  }`}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link 
                  href="/features/billing" 
                  className={`relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/features/billing') ? 'active' : ''
                  }`}
                >
                  Billing
                </Link>
              </li>
              <li>
                <Link 
                  href="/features/inventory" 
                  className={`relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/features/inventory') ? 'active' : ''
                  }`}
                >
                  Inventory
                </Link>
              </li>
              <li>
                <Link 
                  href="/features/online-order" 
                  className={`relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/features/online-order') ? 'active' : ''
                  }`}
                >
                  Online Order
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-6 lg:col-span-2 max-lg:text-center">
            <h3 className="mb-8 font-medium text-lg text-left">AddOns</h3>
            <ul className="[&>*:not(:last-child)]:mb-3 text-left">
              <li>
                <Link 
                  href="/addons/captain-app" 
                  className={`relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/addons/captain-app') ? 'active' : ''
                  }`}
                >
                  Captain App
                </Link>
              </li>
              <li>
                <Link 
                  href="/addons/waiter-app" 
                  className={`relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/addons/waiter-app') ? 'active' : ''
                  }`}
                >
                  Waiter App
                </Link>
              </li>
              <li>
                <Link 
                  href="/addons/point-of-sale" 
                  className={`relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/addons/point-of-sale') ? 'active' : ''
                  }`}
                >
                  Point of Sale
                </Link>
              </li>
              <li>
                <Link 
                  href="/addons/kitchen-display-system" 
                  className={`relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/addons/kitchen-display-system') ? 'active' : ''
                  }`}
                >
                  Kitchen Display
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-6 lg:col-span-2 max-lg:text-center">
            <h3 className="mb-8 font-medium text-lg text-left">Contact Us</h3>
            <p className="mb-3">
              <a href={getEmailLink()} className="relative inline-block overflow-hidden text-base text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {email}
              </a>
            </p>

            <p className="mb-3">
              <a href={getPhoneLink()} className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {phone}
              </a>
            </p>
            <ul className="flex items-center max-lg:justify-center social-link gap-4">
              <SocialIcon platform="google" href="https://www.google.com/search?q=MenuMitra" target="_blank" />
              <SocialIcon platform="facebook" href="https://www.facebook.com/share/x5wymXr6w7W49vaQ/?mibextid=qi2Omg" target="_blank" />
              <SocialIcon platform="youtube" href={`https://www.youtube.com/${social.youtube}`} target="_blank" />
              <SocialIcon platform="instagram" href={`https://www.instagram.com/${social.instagram}/`} target="_blank" />
            </ul>
          </div>
        </div>

        <div className="seperator">
          <Image
            src="/images/footer-seperator.svg"
            alt="footer-seperator"
            width={1200}
            height={50}
            className="dark:hidden w-full object-cover"
          />
          <Image
            src="/images/footer-seperator-dark.svg"
            alt="footer-seperator"
            width={1200}
            height={50}
            className="hidden dark:block w-full object-cover"
          />
        </div>

        <div className="py-10 max-lg:text-center">
          <div className="flex max-lg:flex-col lg:items-center">
            <p className="max-lg:mb-10">@ {currentYear} MenuMitra. All Rights Reserved</p>
            <ul className="lg:ml-auto flex items-center gap-15 max-lg:justify-center">
              <li>
                <a href="/privacy-and-policy" className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-and-conditions" className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/cookie-policy" className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="/request-data-removal" className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
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
