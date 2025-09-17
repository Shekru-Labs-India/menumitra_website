import { useMemo } from 'react';

export interface SectionConfig {
  sidebarTitle: string;
  sidebarItems: string[];
  defaultActiveItem: string;
  backgroundImage: string;
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
        backgroundImage: 'bg-service-bg'
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
        backgroundImage: 'bg-service-bg'
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
        backgroundImage: 'bg-service-bg'
      }
    };

    return configs[sectionType] || configs.features;
  }, [sectionType]);
};
