import Home from "./components/Home";

import { HashRouter,Routes,Route, BrowserRouter } from 'react-router-dom';

// import './assets/css/bootstrap.min.css'
import './assets/css/style.css'

// import './assets/css/animate.min.css'



// import "bootstrap/dist/css/bootstrap.min.css";


import Header from "./components/Header";
import CaptainApp from "./components/CaptainApp";
import KDS from "./components/KDS";
import ScanAndOrder from "./components/ScanAndOrder";
import Billing from "./components/Billing";
import Inventory from "./components/Inventory";
import Menu from "./components/Menu";
import CustomerFeedback from "./components/CustomerFeedback";

import OnlineOrder from "./components/OnlineOrder";
import RestaurantReports from "./components/RestaurantReports";
import CustomerManagement from "./components/CustomerManagement";
import Pricing from "./components/Pricing";
import PrivacyPolicy from "./components/PrivacyPolicy"
import CookiePolicy from "./components/CookiePolicy"
import TermsConditions from "./components/TermsConditions"
import DeleteUser from "./components/DeleteUser"
import WaiterApp from "./components/WaiterApp"
import NewRestaurant from "./components/NewRestaurant"
import FineDine from "./components/FineDine"
import FoodCourts from "./components/FoodCourts"
import Pizzeria from "./components/Pizzeria"
import Cafe from "./components/Cafe"
import QSR from "./components/QSR"
import Bakeries from "./components/Bakeries"
import LargeChain from "./components/LargeChain"

import CloudKitchens from "./components/CloudKitchens"
import IcecreamDesserts from "./components/IcecreamDesserts"
import ResellerProgram from "./components/ResellerProgram";
import BookDemo from "./components/BookDemo";
import CDS from "./components/CDS";
import OrderTracking from "./components/OrderTracking";
import FAQ from "./components/FAQ";
import Aboutus from "./components/Aboutus";
import Support from "./components/Support";
import Career from "./components/Career";
function App() {
  return (
   
   <>
  

    <BrowserRouter>

    <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/captainapp" element={<CaptainApp />} />
    <Route path="/kds" element={<KDS />} />
    <Route path="/cds" element={<CDS />} />

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
    <Route path="/privacy_policy" element={<PrivacyPolicy />} />
    <Route path="/terms_conditions" element={<TermsConditions />} />
    <Route path="/cookie_policy" element={<CookiePolicy />} />
    <Route path="/reseller_program" element={<ResellerProgram />} />

    <Route path="/request_data_removal" element={<DeleteUser />} />
    <Route path="/book_demo" element={<BookDemo />} />
    <Route path="/order_tracking" element={<OrderTracking />} />
    <Route path="/help_support" element={<FAQ />} />
    <Route path="/about_us" element={<Aboutus />} />
    <Route path="/support" element={<Support />} />
    <Route path="/career" element={<Career />} />
    </Routes>

    </BrowserRouter>
    

   </>
     
  );
}

export default App;
