import Home from "./components/Home";

import { HashRouter,Routes,Route } from 'react-router-dom';

import './assets/css/bootstrap.min.css'
import './assets/css/style.css'
import './assets/css/aos.css'
import './assets/css/animate.min.css'
import './assets/css/swiper-bundle.min.css'
import './assets/css/fontawesome-all.min.css'
import './assets/css/glightbox.min.css'


import Header from "./components/Header";
import CaptainApp from "./components/CaptainApp";
import KDS from "./components/KDS";
import ScanAndOrder from "./components/ScanAndOrder";
import Billing from "./components/Billing";
import Inventory from "./components/Inventory";
import Menu from "./components/Menu";
import CustomerFeedback from "./components/CustomerFeedback";
import OutletFormat from "./components/OutletFormat";
import OnlineOrder from "./components/OnlineOrder";
import RestaurantReports from "./components/RestaurantReports";
import CustomerManagement from "./components/CustomerManagement";

function App() {
  return (
   
   <>
   {/* <Header/> */}
   {/* <Home/> */}
   {/* <CaptainApp/> */}
   {/* <KDS/> */}
   {/* <ScanAndOrder/> */}
   {/* <Billing/> */}
   {/* <Inventory/> */}
    {/* <Menu/> */}
    {/* <CustomerFeedback/> */}

    <HashRouter>

    <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/captainapp" element={<CaptainApp />} />
    <Route path="/kds" element={<KDS />} />
    <Route path="/scan" element={<ScanAndOrder />} />
    <Route path="/billing" element={<Billing />} />
    <Route path="/inventory" element={<Inventory />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/customerfeedback" element={<CustomerFeedback />} />
    <Route path="/outlet" element={<OutletFormat />} />
    <Route path="/onlineorder" element={<OnlineOrder />} />
    <Route path="/reports" element={<RestaurantReports />} />
    <Route path="/customermanagement" element={<CustomerManagement />} />

     
    </Routes>

    </HashRouter>
    

   </>
     
  );
}

export default App;
