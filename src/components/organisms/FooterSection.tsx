'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SocialIcon from '@/components/atoms/SocialIcon';
import { Phone, Mail } from 'lucide-react';

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
    <section className={`bg-white dark:bg-dark-300 overflow-hidden relative pt-20 ${className}`}>
      <div className="container">
        <div className="grid grid-cols-12 mb-20 max-lg:gap-y-10 max-lg:text-center">
          <div className="col-span-12 lg:col-span-6">
            <div className="flex items-center gap-4 mb-10">
              <Image
                src="/images/mm/mm.png"
                alt="MenuMitra logo"
                width={60}
                height={60}
                className="w-auto h-auto"
              />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">MenuMitra</span>
            </div>
            <p className="max-w-[350px] max-lg:mx-auto">
              MenuMitra is the leading AI-powered digital menu platform helping restaurants boost sales, streamline operations, and enhance customer experience with QR code menus and smart order management.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-2 max-lg:text-center">
            <h3 className="mb-8 font-medium text-lg">Explore</h3>
            <ul className="[&>*:not(:last-child)]:mb-3">
              <li>
                <Link 
                  href="/about" 
                  className={`relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/about') ? 'active' : ''
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className={`relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 ${
                    isActive('/services') ? 'active' : ''
                  }`}
                >
                  Services
                </Link>
              </li>
              <li>
                <a href="/career" className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  Career
                </a>
              </li>
              <li>
                <a href="/payment" className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  Payment
                </a>
              </li>
              <li>
                <a href="/price" className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/faq" className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  Faq's
                </a>
              </li>
              <li>
                <a href="/testimonial" className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-2 max-lg:text-center">
            <h3 className="mb-8 font-medium text-lg">Resources</h3>
            <ul className="[&>*:not(:last-child)]:mb-3">
              <li>
                <a href="/banking" className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  Banking
                </a>
              </li>
              <li>
                <a href="/team" className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  Team
                </a>
              </li>
              <li>
                <a href="/integration" className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  Integration
                </a>
              </li>
              <li>
                <a href="/blog" className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  Blog
                </a>
              </li>
              <li>
                <a href="/login" className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  Log In
                </a>
              </li>
              <li>
                <a href="/signup" className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="/404" className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  404
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-2 max-lg:text-center">
            <h3 className="mb-8 font-medium text-lg">Contact Us</h3>
            <p className="mb-3">Need Support?</p>
            <p className="mb-3">
              <a href="mailto:info@menumitra.com" className="relative inline-block overflow-hidden text-base text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                info@MenuMitra.com
              </a>
            </p>

            <p className="mb-3">
              <a href="tel:+919317818283" className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +91 93178 18283
              </a>
            </p>
            <ul className="flex items-center max-lg:justify-center social-link gap-4">
              <SocialIcon platform="google" href="https://www.google.com/search?q=MenuMitra" target="_blank" />
              <SocialIcon platform="facebook" href="https://www.facebook.com/share/x5wymXr6w7W49vaQ/?mibextid=qi2Omg" target="_blank" />
              <SocialIcon platform="youtube" href="https://www.youtube.com/@menumitra" target="_blank" />
              <SocialIcon platform="instagram" href="https://www.instagram.com/menumitra/" target="_blank" />
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
                <a href="/privacy-and-policy" className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/cookie-policy" className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="/request-data-removal" className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
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
