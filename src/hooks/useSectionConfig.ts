import { useMemo } from 'react';

export interface SectionConfig {
  sidebarTitle: string;
  sidebarItems: string[];
  defaultActiveItem: string;
  backgroundImage: string;
  routeMappings: Record<string, string>;
}

export const useSectionConfig = (sectionType: 'features' | 'addons' | 'outlet-types') => {
  return useMemo(() => {
    const configs: Record<string, SectionConfig> = {
      features: {
        sidebarTitle: 'Features',
        sidebarItems: [
          'Billing',
          'Inventory',
          'Menu',
          'Online Order',
          'Restaurant Reports',
          'Customer Management',
          'Customer Feedback',
          'Scan & Order',
          'Store Management',
          'Recipe Management',
          'Social Media Management',
          'Utility Management',
          'Staff Management',
          'Chain Management'
        ],
        defaultActiveItem: 'Billing',
        backgroundImage: 'bg-service-bg',
        routeMappings: {
          'Billing': '/features/billing',
          'Inventory': '/features/inventory',
          'Menu': '/features/menu',
          'Online Order': '/features/online-order',
          'Restaurant Reports': '/features/restaurant-reports',
          'Customer Management': '/features/customer-management',
          'Customer Feedback': '/features/customer-feedback',
          'Scan & Order': '/features/scan-order',
          'Store Management': '/features/store-management',
          'Recipe Management': '/features/recipe-management',
          'Social Media Management': '/features/social-media-management',
          'Utility Management': '/features/utility-management',
          'Staff Management': '/features/staff-management',
          'Chain Management': '/features/chain-management'
        }
      },
      addons: {
        sidebarTitle: 'AddOns',
        sidebarItems: [
          'Captain App',
          'Customer App',
          'Customer Display System',
          'Customised Solution',
          'Hotel Management',
          'Kitchen Display System',
          'Money Management',
          'Point of Sale',
          'Smart Mobile App',
          'Waiter App'
        ],
        defaultActiveItem: 'Captain App',
        backgroundImage: 'bg-service-bg',
        routeMappings: {
          'Captain App': '/addons/captain-app',
          'Customer App': '/addons/customer-app',
          'Customer Display System': '/addons/customer-display-system',
          'Customised Solution': '/addons/customised-solution',
          'Hotel Management': '/addons/hotel-management',
          'Kitchen Display System': '/addons/kitchen-display-system',
          'Money Management': '/addons/money-management',
          'Point of Sale': '/addons/point-of-sale',
          'Smart Mobile App': '/addons/smart-mobile-app',
          'Waiter App': '/addons/waiter-app'
        }
      },
      'outlet-types': {
        sidebarTitle: 'Outlet Types',
        sidebarItems: [
          'Restaurant',
          'Cafe',
          'Fast Food',
          'Fine Dining',
          'Food Truck',
          'Cloud Kitchen',
          'Bakery',
          'Bar & Pub',
          'Food Court',
          'Catering'
        ],
        defaultActiveItem: 'Restaurant',
        backgroundImage: 'bg-service-bg',
        routeMappings: {
          'Restaurant': '/outlet-type/restaurant',
          'Cafe': '/outlet-type/cafe',
          'Fast Food': '/outlet-type/qsr',
          'Fine Dining': '/outlet-type/fine-dine',
          'Food Truck': '/outlet-type/food-truck',
          'Cloud Kitchen': '/outlet-type/cloud-kitchens',
          'Bakery': '/outlet-type/bakeries',
          'Bar & Pub': '/outlet-type/bar-pub',
          'Food Court': '/outlet-type/food-courts',
          'Catering': '/outlet-type/catering'
        }
      }
    };

    return configs[sectionType] || configs.features;
  }, [sectionType]);
};
