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
          'Billing': '/features/Billing',
          'Inventory': '/features/Inventory',
          'Menu': '/features/Menu',
          'Online Order': '/features/OnlineOrder',
          'Restaurant Reports': '/features/RestaurantReports',
          'Customer Management': '/features/CustomerManagement',
          'Customer Feedback': '/features/CustomerFeedback',
          'Scan & Order': '/features/ScanOrder',
          'Store Management': '/features/StoreManagement',
          'Recipe Management': '/features/RecipeManagement',
          'Social Media Management': '/features/SocialMediaManagement',
          'Utility Management': '/features/UtilityManagement',
          'Staff Management': '/features/StaffManagement',
          'Chain Management': '/features/ChainManagement'
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
