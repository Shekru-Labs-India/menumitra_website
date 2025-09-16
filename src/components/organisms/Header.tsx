'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      setIsScrolled(scrollY >= 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const homeMenuItems = [
    { href: '/', label: 'Home 1' },
    { href: '/payment', label: 'Home 2' },
    { href: '/banking', label: 'Home 3' },
    { href: '/analytics', label: 'Home 4' },
    { href: '/hosting', label: 'Home 5' },
    { href: '/chatbot', label: 'Home 6' },
    { href: '/crypto', label: 'Home 7' },
    { href: '/ai', label: 'Home 8' },
  ];

  const servicesMenuItems = [
    { href: '/services', label: 'Services' },
    { href: '/services-single', label: 'Service Single' },
  ];

  const pagesMenuItems = [
    { href: '/team', label: 'Team' },
    { href: '/team-single', label: 'Team Details' },
    { href: '/testimonial', label: 'Testimonial' },
    { href: '/price', label: 'Price' },
    { href: '/career', label: 'Career' },
    { href: '/career-single', label: 'Career Single' },
    { href: '/faq', label: 'FAQ' },
    { href: '/integration', label: 'Integration' },
    { href: '/login', label: 'Log In' },
    { href: '/signup', label: 'Sign Up' },
    { href: '/404', label: '404' },
  ];

  const newsMenuItems = [
    { href: '/blog', label: 'Blog Grid' },
    { href: '/blog-list', label: 'Blog List' },
    { href: '/categories', label: 'Blog Categories' },
    { href: '/tags', label: 'Blog Tags' },
    { href: '/blog-details', label: 'Blog Details' },
  ];

  return (
    <header 
      className={`fixed left-0 pt-8 z-[1000000000] duration-500 transition-all w-full ${
        isScrolled 
          ? 'bg-white/60 dark:bg-dark-200/60 backdrop-blur-3xl nav-sticky' 
          : 'bg-transparent'
      }`}
      id="mainnavigationBar"
    >
      <nav className="container flex items-center relative">
        {/* Logo */}
        <div className="nav-logo xl:min-w-[266px]">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/images/mm/mm.png" 
              alt="MenuMitra logo" 
              width={40} 
              height={40} 
              className="w-auto h-auto"
            />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">MenuMitra</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-list hidden lg:flex mx-auto bg-white dark:bg-dark-200 p-2.5 shadow-nav rounded-large [&>*:not(:last-child)]:me-1">
          {/* Home Dropdown */}
          <li className="relative group">
            <button 
              className="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColour dark:hover:bg-dark-200 dark:hover:border-borderColour/10 duration-500 hover:duration-500 transition-colors active group"
            >
              Home
              <FontAwesomeIcon 
                icon={faAngleDown} 
                className="text-paragraph dark:text-white ml-1 group-hover:rotate-180 duration-500 mt-1" 
              />
            </button>
            <ul className="absolute min-w-[250px] left-0 top-12 p-5 opacity-0 scale-y-0 origin-top duration-500 group-hover:scale-y-100 bg-white dark:bg-dark-200 group-hover:opacity-100 rounded-md [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-dashed [&>*:not(:last-child)]:border-borderColour dark:[&>*:not(:last-child)]:border-borderColour-dark [&>*:not(:first-child)]:mt-2.5 z-10">
              {homeMenuItems.map((item, index) => (
                <li key={index} className="relative overflow-hidden text-base capitalize text-paragraph pb-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  <Link href={item.href} className="flex">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* About */}
          <li className="group">
            <Link 
              href="/about" 
              className="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColour dark:hover:bg-dark-200 dark:hover:border-borderColour/10 duration-500 hover:duration-500 transition-colors"
            >
              About
            </Link>
          </li>

          {/* Products */}
          <li className="group">
            <Link 
              href="/products" 
              className="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColour dark:hover:bg-dark-200 dark:hover:border-borderColour/10 duration-500 hover:duration-500 transition-colors"
            >
              Products
            </Link>
          </li>

          {/* Services Dropdown */}
          <li className="relative group">
            <button className="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColour dark:hover:bg-dark-200 dark:hover:border-borderColour/10 duration-500 hover:duration-500 transition-colors group">
              Services
              <FontAwesomeIcon 
                icon={faAngleDown} 
                className="text-paragraph dark:text-white ml-1 group-hover:rotate-180 duration-500 mt-1" 
              />
            </button>
            <ul className="absolute min-w-[250px] left-0 top-12 p-5 opacity-0 scale-y-0 origin-top duration-500 group-hover:scale-y-100 bg-white dark:bg-dark-200 group-hover:opacity-100 rounded-md [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-dashed [&>*:not(:last-child)]:border-borderColour dark:[&>*:not(:last-child)]:border-borderColour-dark [&>*:not(:first-child)]:mt-2.5 z-10">
              {servicesMenuItems.map((item, index) => (
                <li key={index} className="relative overflow-hidden text-base capitalize text-paragraph pb-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  <Link href={item.href} className="flex">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Pages Dropdown */}
          <li className="group">
            <button className="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColour dark:hover:bg-dark-200 dark:hover:border-borderColour/10 duration-500 hover:duration-500 transition-colors group">
              Pages
              <FontAwesomeIcon 
                icon={faAngleDown} 
                className="text-paragraph dark:text-white ml-1 group-hover:rotate-180 duration-500 mt-1" 
              />
            </button>
            <div className="absolute grid gap-15 text-gray-900 dark:text-white md:grid-cols-12 w-full left-0 top-[58px] p-2.5 opacity-0 scale-y-0 origin-top duration-500 group-hover:scale-y-100 bg-white dark:bg-dark-200 group-hover:opacity-100 rounded-medium shadow-lg z-10 items-center">
              <ul className="col-span-8 columns-3 gap-10 px-15">
                {pagesMenuItems.map((item, index) => (
                  <li key={index} className="relative overflow-hidden text-base capitalize text-paragraph py-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                    <Link href={item.href} className="flex">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="col-span-4">
                <Image 
                  src="/images/navbar.png" 
                  alt="navbar" 
                  width={200} 
                  height={120} 
                  className="w-full dark:hidden rounded-2xl"
                />
                <Image 
                  src="/images/navbar-dark.png" 
                  alt="navbar" 
                  width={200} 
                  height={120} 
                  className="w-full hidden dark:block rounded-2xl"
                />
              </div>
            </div>
          </li>

          {/* News Dropdown */}
          <li className="relative group">
            <button className="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColour dark:hover:bg-dark-200 dark:hover:border-borderColour/10 duration-500 hover:duration-500 transition-colors group">
              News
              <FontAwesomeIcon 
                icon={faAngleDown} 
                className="text-paragraph dark:text-white ml-1 group-hover:rotate-180 duration-500 mt-1" 
              />
            </button>
            <ul className="absolute min-w-[250px] left-0 top-12 p-5 opacity-0 scale-y-0 origin-top duration-500 group-hover:scale-y-100 bg-white dark:bg-dark-200 group-hover:opacity-100 rounded-md [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-dashed [&>*:not(:last-child)]:border-borderColour dark:[&>*:not(:last-child)]:border-borderColour-dark [&>*:not(:first-child)]:mt-2.5 z-10">
              {newsMenuItems.map((item, index) => (
                <li key={index} className="relative overflow-hidden text-base capitalize text-paragraph pb-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  <Link href={item.href} className="flex">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Contact */}
          <li>
            <Link 
              href="/contact" 
              className="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColour dark:hover:bg-dark-200 dark:hover:border-borderColour/10 duration-500 hover:duration-500 transition-colors"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Right Side Actions */}
        <ul className="flex items-center max-lg:ml-auto [&>*:not(:last-child)]:me-2.5">
          {/* Search Button */}
          <li>
            <button className="bg-white dark:bg-dark-200 p-2.5 rounded-full" id="open-btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  fillRule="evenodd" 
                  clipRule="evenodd" 
                  d="M9.11278 0C14.1369 0 18.2245 4.08758 18.2245 9.11278C18.2245 11.2861 17.4592 13.5472 16.1845 14.8512L20 18.6667L18.6667 20L14.8512 16.1856C13.5667 17.4603 11.2861 18.2245 9.11278 18.2245C4.08758 18.2245 0 14.1369 0 9.11278C0 4.08758 4.08758 0 9.11278 0ZM9.11278 16.3395C13.0974 16.3395 16.3395 13.0974 16.3395 9.11278C16.3395 5.12818 13.0974 1.88608 9.11278 1.88608C5.12709 1.88608 1.88499 5.12818 1.88499 9.11278C1.88499 13.0974 5.12709 16.3395 9.11278 16.3395Z" 
                  fill="" 
                  className="fill-paragraph dark:fill-white"
                />
              </svg>
            </button>
          </li>

          {/* Request Demo Button - Desktop */}
          <li className="max-lg:hidden">
            <Link href="/book-demo" className="btn btn-navbar btn-sm">
              Book a Demo
            </Link>
          </li>

          {/* Mobile Menu Toggle */}
          <li className="max-lg:inline-block lg:hidden">
            <button 
              className="outline-none mobile-menu-button w-10 h-10 rounded-full bg-white dark:bg-dark-200 relative"
              onClick={toggleMobileMenu}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="22" 
                height="14" 
                viewBox="0 0 22 14" 
                fill="none" 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <path 
                  d="M0 1C0 0.447715 0.447715 0 1 0H21C21.5523 0 22 0.447715 22 1C22 1.55228 21.5523 2 21 2H1C0.447716 2 0 1.55228 0 1Z" 
                  fill="" 
                  className="fill-paragraph dark:fill-white"
                />
                <path 
                  d="M8 7C8 6.44772 8.44772 6 9 6H21C21.5523 6 22 6.44772 22 7C22 7.55228 21.5523 8 21 8H9C8.44772 8 8 7.55228 8 7Z" 
                  fill="" 
                  className="fill-paragraph dark:fill-white"
                />
                <path 
                  d="M4 13C4 12.4477 4.44772 12 5 12H21C21.5523 12 22 12.4477 22 13C22 13.5523 21.5523 14 21 14H5C4.44772 14 4 13.5523 4 13Z" 
                  fill="" 
                  className="fill-paragraph dark:fill-white"
                />
              </svg>
            </button>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className={`mobile-menu max-lg:overflow-y-auto ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <button 
            className="outline-none navbar-toggle-close w-10 h-10 rounded-full bg-white dark:bg-dark-200 absolute right-6 top-5"
            onClick={toggleMobileMenu}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          
          <ul className="nav-list flex flex-col gap-5 w-full max-w-[500px] landscape:h-full relative">
            {/* Mobile Home Menu */}
            <li className="relative group faq-item">
              <button 
                className="faq-header font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColour dark:hover:bg-dark-200 dark:hover:border-borderColour/10 duration-500 hover:duration-500 transition-colors group active"
                onClick={() => toggleDropdown('home')}
              >
                Home
                <FontAwesomeIcon 
                  icon={faAngleDown} 
                  className={`text-paragraph dark:text-white ml-auto duration-500 mt-1 ${activeDropdown === 'home' ? 'rotate-180' : ''}`} 
                />
              </button>
              <ul className={`faq-body ${activeDropdown === 'home' ? 'open' : 'close'}`}>
                {homeMenuItems.map((item, index) => (
                  <li key={index} className="relative overflow-hidden text-base capitalize text-paragraph pb-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                    <Link href={item.href} className="flex" onClick={toggleMobileMenu}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Mobile About */}
            <li>
              <Link 
                href="/about" 
                className="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColour dark:hover:bg-dark-200 dark:hover:border-borderColour/10 duration-500 hover:duration-500 transition-colors"
                onClick={toggleMobileMenu}
              >
                About
              </Link>
            </li>

            {/* Mobile Products */}
            <li>
              <Link 
                href="/products" 
                className="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColour dark:hover:bg-dark-200 dark:hover:border-borderColour/10 duration-500 hover:duration-500 transition-colors"
                onClick={toggleMobileMenu}
              >
                Products
              </Link>
            </li>

            {/* Mobile Services Menu */}
            <li className="relative group faq-item">
              <button 
                className="faq-header font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColour dark:hover:bg-dark-200 dark:hover:border-borderColour/10 duration-500 hover:duration-500 transition-colors group"
                onClick={() => toggleDropdown('services')}
              >
                Services
                <FontAwesomeIcon 
                  icon={faAngleDown} 
                  className={`text-paragraph dark:text-white ml-auto duration-500 mt-1 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} 
                />
              </button>
              <ul className={`faq-body ${activeDropdown === 'services' ? 'open' : 'close'}`}>
                {servicesMenuItems.map((item, index) => (
                  <li key={index} className="relative overflow-hidden text-base capitalize text-paragraph pb-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                    <Link href={item.href} className="flex" onClick={toggleMobileMenu}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Mobile Pages Menu */}
            <li className="relative group faq-item">
              <button 
                className="faq-header font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColour dark:hover:bg-dark-200 dark:hover:border-borderColour/10 duration-500 hover:duration-500 transition-colors group"
                onClick={() => toggleDropdown('pages')}
              >
                Pages
                <FontAwesomeIcon 
                  icon={faAngleDown} 
                  className={`text-paragraph dark:text-white ml-auto duration-500 mt-1 ${activeDropdown === 'pages' ? 'rotate-180' : ''}`} 
                />
              </button>
              <div className={`faq-body ${activeDropdown === 'pages' ? 'open' : 'close'}`}>
                <ul className="columns-2 gap-10 mb-15">
                  {pagesMenuItems.map((item, index) => (
                    <li key={index} className="relative overflow-hidden text-base capitalize text-paragraph py-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                      <Link href={item.href} className="flex" onClick={toggleMobileMenu}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="max-w-full">
                  <Image 
                    src="/images/navbar.png" 
                    alt="navbar" 
                    width={200} 
                    height={120} 
                    className="w-full dark:hidden rounded-2xl"
                  />
                  <Image 
                    src="/images/navbar-dark.png" 
                    alt="navbar" 
                    width={200} 
                    height={120} 
                    className="w-full hidden dark:block rounded-2xl"
                  />
                </div>
              </div>
            </li>

            {/* Mobile News Menu */}
            <li className="relative group faq-item">
              <button 
                className="faq-header font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColour dark:hover:bg-dark-200 dark:hover:border-borderColour/10 duration-500 hover:duration-500 transition-colors group"
                onClick={() => toggleDropdown('news')}
              >
                News
                <FontAwesomeIcon 
                  icon={faAngleDown} 
                  className={`text-paragraph dark:text-white ml-auto duration-500 mt-1 ${activeDropdown === 'news' ? 'rotate-180' : ''}`} 
                />
              </button>
              <ul className={`faq-body ${activeDropdown === 'news' ? 'open' : 'close'}`}>
                {newsMenuItems.map((item, index) => (
                  <li key={index} className="relative overflow-hidden text-base capitalize text-paragraph pb-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                    <Link href={item.href} className="flex" onClick={toggleMobileMenu}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Mobile Contact */}
            <li>
              <Link 
                href="/contact" 
                className="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColour dark:hover:bg-dark-200 dark:hover:border-borderColour/10 duration-500 hover:duration-500 transition-colors"
                onClick={toggleMobileMenu}
              >
                Contact Us
              </Link>
            </li>

            {/* Mobile Book Demo */}
            <li>
              <Link 
                href="/book-demo" 
                className="btn btn-navbar btn-sm"
                onClick={toggleMobileMenu}
              >
                Book a Demo
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
