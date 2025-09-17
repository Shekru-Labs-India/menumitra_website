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
          'Captain App': '/addons/CaptainApp',
          'Customer App': '/addons/CustomerApp',
          'Customer Display System': '/addons/CustomerDisplaySystem',
          'Customised Solution': '/addons/CustomisedSolution',
          'Hotel Management': '/addons/HotelManagement',
          'Kitchen Display System': '/addons/KitchenDisplaySystem',
          'Money Management': '/addons/MoneyManagement',
          'Point of Sale': '/addons/PointOfSale',
          'Smart Mobile App': '/addons/SmartMobileApp',
          'Waiter App': '/addons/WaiterApp'
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
          'Restaurant': '/outlet-type/Restaurant',
          'Cafe': '/outlet-type/Cafe',
          'Fast Food': '/outlet-type/FastFood',
          'Fine Dining': '/outlet-type/FineDining',
          'Food Truck': '/outlet-type/FoodTruck',
          'Cloud Kitchen': '/outlet-type/CloudKitchen',
          'Bakery': '/outlet-type/Bakery',
          'Bar & Pub': '/outlet-type/BarPub',
          'Food Court': '/outlet-type/FoodCourt',
          'Catering': '/outlet-type/Catering'
        }
      }
    };

    return configs[sectionType] || configs.features;
  }, [sectionType]);
};
