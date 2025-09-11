import React, { Suspense, useEffect } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

// Import Bootstrap CSS first
import 'bootstrap/dist/css/bootstrap.min.css';
// Then import custom styles
import './assets/css/style.css'

// Critical components (load immediately)
import Home from "./components/Home";
import WhatsAppFAB from "./components/WhatsAppFAB";

// Lazy load all other components
const CaptainApp = React.lazy(() => import("./components/CaptainApp"));
const KDS = React.lazy(() => import("./components/KDS"));
const ScanAndOrder = React.lazy(() => import("./components/ScanAndOrder"));
const Billing = React.lazy(() => import("./components/Billing"));
const Inventory = React.lazy(() => import("./components/Inventory"));
const Menu = React.lazy(() => import("./components/Menu"));
const CustomerFeedback = React.lazy(() => import("./components/CustomerFeedback"));
const Apps = React.lazy(() => import("./components/Apps"));
const OnlineOrder = React.lazy(() => import("./components/OnlineOrder"));
const RestaurantReports = React.lazy(() => import("./components/RestaurantReports"));
const CustomerManagement = React.lazy(() => import("./components/CustomerManagement"));
const Pricing = React.lazy(() => import("./components/Pricing"));
const PrivacyPolicy = React.lazy(() => import("./components/PrivacyPolicy"));
const CookiePolicy = React.lazy(() => import("./components/CookiePolicy"));
const TermsConditions = React.lazy(() => import("./components/TermsConditions"));
const DeleteUser = React.lazy(() => import("./components/DeleteUser"));
const WaiterApp = React.lazy(() => import("./components/WaiterApp"));
const NewRestaurant = React.lazy(() => import("./components/NewRestaurant"));
const FineDine = React.lazy(() => import("./components/FineDine"));
const FoodCourts = React.lazy(() => import("./components/FoodCourts"));
const Pizzeria = React.lazy(() => import("./components/Pizzeria"));
const Cafe = React.lazy(() => import("./components/Cafe"));
const QSR = React.lazy(() => import("./components/QSR"));
const Bakeries = React.lazy(() => import("./components/Bakeries"));
const LargeChain = React.lazy(() => import("./components/LargeChain"));
const CloudKitchens = React.lazy(() => import("./components/CloudKitchens"));
const IcecreamDesserts = React.lazy(() => import("./components/IcecreamDesserts"));
const BookDemo = React.lazy(() => import("./components/BookDemo"));
const CDS = React.lazy(() => import("./components/CDS"));
const Aboutus = React.lazy(() => import("./components/Aboutus"));
const Support = React.lazy(() => import("./components/Support"));
const StoreManagement = React.lazy(() => import("./components/StoreManagement"));
const RecipeManagement = React.lazy(() => import("./components/RecipeManagement"));
const SocialMediaManagement = React.lazy(() => import("./components/SocialMediaManagement"));
const UtilityManagement = React.lazy(() => import("./components/UtilityManagement"));
const StaffManagement = React.lazy(() => import("./components/StaffManagement"));
const ChainManagement = React.lazy(() => import("./components/ChainManagement"));
const PointOfSale = React.lazy(() => import("./components/PointOfSale"));
const SmartMobileApp = React.lazy(() => import("./components/SmartMobileApp"));
const MoneyManagement = React.lazy(() => import("./components/MoneyManagement"));
const CustomerApp = React.lazy(() => import("./components/CustomerApp"));
const CustomisedSolution = React.lazy(() => import("./components/CustomisedSolution"));
const HotelManagement = React.lazy(() => import("./components/HotelManagement"));

function App() {
  useEffect(() => {
    const currentUrl = window.location.href;
    const userAppPattern = /https:\/\/menumitra\.com\/user_app\/\d+\/1/;

    if (userAppPattern.test(currentUrl)) {
      window.location.href =
        "https://menumitra-testing.netlify.app/user_app/o890792/s168/t1";
    }

    // Register service worker for caching
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }
  }, []);

  return (
   <>
    <BrowserRouter basename="/">
      <Suspense fallback={
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          fontSize: '18px',
          color: '#666'
        }}>
          Loading...
        </div>
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/captainapp" element={<CaptainApp />} />
          <Route path="/kds" element={<KDS />} />
          <Route path="/cds" element={<CDS />} />
          <Route path="/products" element={<Apps />} />
          <Route path="/scan" element={<ScanAndOrder />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/customerfeedback" element={<CustomerFeedback />} />
          <Route path="/onlineorder" element={<OnlineOrder />} />
          <Route path="/reports" element={<RestaurantReports />} />
          <Route path="/customermanagement" element={<CustomerManagement />} />
          <Route path="/waiterapp" element={<WaiterApp />} />
          <Route path="/newrestaurant" element={<NewRestaurant />} />
          <Route path="/finedine" element={<FineDine />} />
          <Route path="/foodcourts" element={<FoodCourts />} />
          <Route path="/pizzeria" element={<Pizzeria />} />
          <Route path="/cafe" element={<Cafe />} />
          <Route path="/qsr" element={<QSR />} />
          <Route path="/bakeries" element={<Bakeries />} />
          <Route path="/cloudkitchens" element={<CloudKitchens />} />
          <Route path="/largechain" element={<LargeChain/>} />
          <Route path="/icecream" element={<IcecreamDesserts />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms_conditions" element={<TermsConditions />} />
          <Route path="/cookie_policy" element={<CookiePolicy />} />
          <Route path="/request_data_removal" element={<DeleteUser />} />
          <Route path="/book_demo" element={<BookDemo />} />
          <Route path="/about_us" element={<Aboutus />} />
          <Route path="/support" element={<Support />} />
          <Route path="/store-management" element={<StoreManagement />} />
          <Route path="/recipemanagement" element={<RecipeManagement />} />
          <Route path="/socialmediamanagement" element={<SocialMediaManagement />} />
          <Route path="/utilitymanagement" element={<UtilityManagement />} />
          <Route path="/staffmanagement" element={<StaffManagement />} />
          <Route path="/chainmanagement" element={<ChainManagement />} />
          <Route path="/pos" element={<PointOfSale />} />
          <Route path="/smartmobileapp" element={<SmartMobileApp />} />
          <Route path="/moneymanagement" element={<MoneyManagement />} />
          <Route path="/customerapp" element={<CustomerApp />} />
          <Route path="/customisedsolution" element={<CustomisedSolution />} />
          <Route path="/hotelmanagement" element={<HotelManagement />} />
          <Route path="/privacy_policy" element={<Navigate to="/privacy" replace />} />
        </Routes>
      </Suspense>
      <WhatsAppFAB />
    </BrowserRouter>
   </>
  );
}

export default App;
