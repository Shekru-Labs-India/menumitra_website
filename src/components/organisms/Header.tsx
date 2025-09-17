'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { 
  CreditCard, 
  Package, 
  Menu as MenuIcon, 
  ShoppingCart, 
  BarChart3, 
  Users, 
  Star, 
  QrCode, 
  Store, 
  FileText, 
  Share2, 
  Settings, 
  UserCheck, 
  Link as LinkIcon,
  Smartphone,
  Monitor,
  CreditCard as CashRegister,
  Coins,
  Users as TwoPerson,
  Cog,
  Building,
  Store as Storefront,
  Utensils,
  Pizza,
  Coffee,
  Hamburger,
  CircleDot as Bread,
  Cloud
} from 'lucide-react';

// Type definitions for navigation
interface NavItem {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

interface NavDropdown {
  label: string;
  items: NavItem[];
}

type NavigationItem = 
  | { type: 'link'; href: string; label: string }
  | { type: 'dropdown'; label: string; items: NavItem[] };

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const isFeaturesActive = () => {
    return pathname.startsWith('/features/');
  };

  const isAddOnsActive = () => {
    return pathname.startsWith('/addons/');
  };

  const isOutletTypeActive = () => {
    return pathname.startsWith('/outlet-type/');
  };

  const toggleMobileMenu = () => {
    console.log('toggleMobileMenu called, current state:', isMobileMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen);
    console.log('toggleMobileMenu setting state to:', !isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    console.log('closeMobileMenu called, current state:', isMobileMenuOpen);
    setIsMobileMenuOpen(false);
    console.log('closeMobileMenu setting state to: false');
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

  // Close mobile menu when clicking outside or pressing escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.querySelector('.mobile-menu');
      const mobileMenuButton = document.querySelector('.mobile-menu-button');
      
      if (isMobileMenuOpen && 
          mobileMenu && 
          !mobileMenu.contains(event.target as Node) && 
          !mobileMenuButton?.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);


  // Single navigation configuration - easy to edit and maintain
  const navigationConfig: { main: NavigationItem[] } = {
    main: [
      { type: 'link', href: '/', label: 'Home' },
      { type: 'link', href: '/about', label: 'About' },
      { type: 'link', href: '/products', label: 'Products' },
      { 
        type: 'dropdown',
        label: 'Features', 
        items: [
          { href: '/features/Billing', label: 'Billing', icon: <CreditCard className="w-4 h-4" /> },
          { href: '/features/Inventory', label: 'Inventory', icon: <Package className="w-4 h-4" /> },
          { href: '/features/Menu', label: 'Menu', icon: <MenuIcon className="w-4 h-4" /> },
          { href: '/features/OnlineOrder', label: 'Online Order', icon: <ShoppingCart className="w-4 h-4" /> },
          { href: '/features/RestaurantReports', label: 'Restaurant Reports', icon: <BarChart3 className="w-4 h-4" /> },
          { href: '/features/CustomerManagement', label: 'Customer Management', icon: <Users className="w-4 h-4" /> },
          { href: '/features/CustomerFeedback', label: 'Customer Feedback', icon: <Star className="w-4 h-4" /> },
          { href: '/features/ScanOrder', label: 'Scan & Order', icon: <QrCode className="w-4 h-4" /> },
          { href: '/features/StoreManagement', label: 'Store Management', icon: <Store className="w-4 h-4" /> },
          { href: '/features/RecipeManagement', label: 'Recipe Management', icon: <FileText className="w-4 h-4" /> },
          { href: '/features/SocialMediaManagement', label: 'Social Media Management', icon: <Share2 className="w-4 h-4" /> },
          { href: '/features/UtilityManagement', label: 'Utility Management', icon: <Settings className="w-4 h-4" /> },
          { href: '/features/StaffManagement', label: 'Staff Management', icon: <UserCheck className="w-4 h-4" /> },
          { href: '/features/ChainManagement', label: 'Chain Management', icon: <LinkIcon className="w-4 h-4" /> },
        ]
      },
      { 
        type: 'dropdown',
        label: 'AddOns', 
        items: [
          { href: '/addons/captain-app', label: 'Captain App', icon: <Smartphone className="w-4 h-4" /> },
          { href: '/addons/waiter-app', label: 'Waiter App', icon: <Users className="w-4 h-4" /> },
          { href: '/addons/kitchen-display-system', label: 'Kitchen Display System', icon: <Monitor className="w-4 h-4" /> },
          { href: '/addons/customer-display-system', label: 'Customer Display System', icon: <Monitor className="w-4 h-4" /> },
          { href: '/addons/point-of-sale', label: 'Point of Sale', icon: <CashRegister className="w-4 h-4" /> },
          { href: '/addons/smart-mobile-app', label: 'Smart Mobile App', icon: <Smartphone className="w-4 h-4" /> },
          { href: '/addons/money-management', label: 'Money Management', icon: <Coins className="w-4 h-4" /> },
          { href: '/addons/customer-app', label: 'Customer App', icon: <TwoPerson className="w-4 h-4" /> },
          { href: '/addons/customised-solution', label: 'Customised Solution', icon: <Cog className="w-4 h-4" /> },
          { href: '/addons/hotel-management', label: 'Hotel Management', icon: <Building className="w-4 h-4" /> },
        ]
      },
      { 
        type: 'dropdown',
        label: 'Outlet Type', 
        items: [
          { href: '/outlet-type/restaurant', label: 'Restaurant', icon: <Storefront className="w-4 h-4" /> },
          { href: '/outlet-type/fine-dine', label: 'Fine Dine', icon: <Utensils className="w-4 h-4" /> },
          { href: '/outlet-type/food-courts', label: 'Food Courts', icon: <Storefront className="w-4 h-4" /> },
          { href: '/outlet-type/pizzeria', label: 'Pizzeria', icon: <Pizza className="w-4 h-4" /> },
          { href: '/outlet-type/cafe', label: 'Cafe', icon: <Coffee className="w-4 h-4" /> },
          { href: '/outlet-type/qsr', label: 'QSR', icon: <Hamburger className="w-4 h-4" /> },
          { href: '/outlet-type/bakeries', label: 'Bakeries', icon: <Bread className="w-4 h-4" /> },
          { href: '/outlet-type/cloud-kitchens', label: 'Cloud Kitchens', icon: <Cloud className="w-4 h-4" /> },
          { href: '/outlet-type/large-chain', label: 'Large Chain', icon: <Building className="w-4 h-4" /> },
        ]
      },
    ]
  };


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
          {navigationConfig.main.map((item, index) => (
            <li key={index} className={item.type === 'dropdown' ? 'relative group' : 'group'}>
              {item.type === 'link' ? (
            <Link 
                  href={item.href} 
              className={`font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColour dark:hover:bg-dark-200 dark:hover:border-borderColour/10 duration-500 hover:duration-500 transition-colors ${
                    isActive(item.href) ? 'active' : ''
              }`}
            >
                  {item.label}
            </Link>
              ) : (
                <>
                  <button className={`font-Inter flex items-center text-base font-medium leading-8 py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large duration-500 hover:duration-500 transition-colors group text-nowrap ${
                    (item.label === 'Features' && isFeaturesActive()) || 
                    (item.label === 'AddOns' && isAddOnsActive()) || 
                    (item.label === 'Outlet Type' && isOutletTypeActive())
                      ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 border-primary-700 dark:border-primary-300' 
                      : 'text-paragraph dark:text-white border-transparent hover:bg-white hover:border-borderColour dark:hover:bg-dark-200 dark:hover:border-borderColour/10'
                  }`}>
                    {item.label}
                    <FontAwesomeIcon 
                      icon={faAngleDown} 
                      className={`ml-1 group-hover:rotate-180 duration-500 mt-1 ${
                        (item.label === 'Features' && isFeaturesActive()) || 
                        (item.label === 'AddOns' && isAddOnsActive()) || 
                        (item.label === 'Outlet Type' && isOutletTypeActive())
                          ? 'text-primary-600 dark:text-primary-400'
                          : 'text-paragraph dark:text-white'
                      }`} 
                    />
                  </button>
                  <ul className="absolute min-w-[280px] left-0 top-12 p-5 opacity-0 scale-y-0 origin-top duration-500 group-hover:scale-y-100 bg-white dark:bg-dark-200 group-hover:opacity-100 rounded-md shadow-lg [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-dashed [&>*:not(:last-child)]:border-borderColour dark:[&>*:not(:last-child)]:border-borderColour-dark [&>*:not(:first-child)]:mt-2.5 z-10">
                    {item.items.map((subItem, subIndex) => (
                        <li key={subIndex} className="relative overflow-hidden text-base capitalize text-paragraph pb-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                          <Link href={subItem.href} className={`flex items-center gap-3 ${isActive(subItem.href) ? 'text-primary-600 dark:text-primary-400 font-medium' : ''}`}>
                            {subItem.icon && <span className={`${isActive(subItem.href) ? 'text-primary-600 dark:text-primary-400' : 'text-gray-600 dark:text-gray-400'}`}>{subItem.icon}</span>}
                            {subItem.label}
                          </Link>
                        </li>
                ))}
              </ul>
                </>
              )}
                </li>
              ))}
        </ul>

        {/* Right Side Actions */}
        <ul className="flex items-center max-lg:ml-auto [&>*:not(:last-child)]:me-2.5 align-middle" >

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
        <div 
          className={`z-[100] mobile-menu max-lg:overflow-y-auto ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              toggleMobileMenu();
            }
          }}
          ref={(el) => {
            if (el) {
              console.log('Mobile menu div classes:', el.className);
            }
          }}
        >
          <button 
            className="outline-none navbar-toggle-close w-10 h-10 rounded-full bg-primary-200 dark:bg-primary fixed right-6 top-5 cursor-pointer"
            onClick={(e) => {
              console.log('Close button clicked!');
              e.stopPropagation();
              e.preventDefault();
              closeMobileMenu();
            }}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          
          <ul className="nav-list flex flex-col gap-5 w-full max-w-[500px] landscape:h-full relative">
            {navigationConfig.main.map((item, index) => (
              <li key={index} className={item.type === 'dropdown' ? 'relative group faq-item' : ''}>
                {item.type === 'link' ? (
              <Link 
                    href={item.href} 
                className={`font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColour dark:hover:bg-dark-200 dark:hover:border-borderColour/10 duration-500 hover:duration-500 transition-colors ${
                      isActive(item.href) ? 'active' : ''
                }`}
                onClick={toggleMobileMenu}
              >
                    {item.label}
              </Link>
                ) : (
                  <>
                    <button 
                      className={`faq-header font-Inter flex items-center text-base font-medium leading-8 py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large duration-500 hover:duration-500 transition-colors group ${
                        (item.label === 'Features' && isFeaturesActive()) || 
                        (item.label === 'AddOns' && isAddOnsActive()) || 
                        (item.label === 'Outlet Type' && isOutletTypeActive())
                          ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 border-primary-700 dark:border-primary-300' 
                          : 'text-paragraph dark:text-white border-transparent hover:bg-white hover:border-borderColour dark:hover:bg-dark-200 dark:hover:border-borderColour/10'
                      }`}
                      onClick={() => toggleDropdown(item.label.toLowerCase())}
                    >
                      {item.label}
                      <FontAwesomeIcon 
                        icon={faAngleDown} 
                        className={`ml-auto duration-500 mt-1 ${activeDropdown === item.label.toLowerCase() ? 'rotate-180' : ''} ${
                          (item.label === 'Features' && isFeaturesActive()) || 
                          (item.label === 'AddOns' && isAddOnsActive()) || 
                          (item.label === 'Outlet Type' && isOutletTypeActive())
                            ? 'text-primary-600 dark:text-primary-400'
                            : 'text-paragraph dark:text-white'
                        }`} 
                      />
                    </button>
                    <ul className={`faq-body ${activeDropdown === item.label.toLowerCase() ? 'open' : 'close'} bg-white dark:bg-dark-200 rounded-lg shadow-lg p-4 mt-2`}>
                      {item.items.map((subItem, subIndex) => (
                        <li key={subIndex} className="relative overflow-hidden text-base capitalize text-paragraph pb-2.5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                          <Link href={subItem.href} className={`flex items-center gap-3 ${isActive(subItem.href) ? 'text-primary-600 dark:text-primary-400 font-medium' : ''}`} onClick={toggleMobileMenu}>
                            {subItem.icon && <span className={`${isActive(subItem.href) ? 'text-primary-600 dark:text-primary-400' : 'text-gray-600 dark:text-gray-400'}`}>{subItem.icon}</span>}
                            {subItem.label}
                          </Link>
                        </li>
                  ))}
                </ul>
                  </>
                )}
                  </li>
                ))}

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
