import React, { useState } from "react";
import { Link } from "react-router-dom";


import menumitra from '../assets/images/MenuMitra.png'


const Footer = () => {

  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [addOnsOpen, setAddOnsOpen] = useState(false);


  return (
    <>
      <>
        <section className="footer-top-area  bg-white border border-top shadow-lg pt-50">
          <div className="container">
            <div className="col-lg-12 col-sm-6 col-md-6 pb-50">
              <div className="single-widget">
                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3">
                  {/* Logo and Name */}
                  <div className="d-flex align-items-center">
                    <Link to="/">
                      <img
                        src={menumitra}
                        alt="Rimu-Logo"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </Link>
                    <Link className="ms-3" to="/website">
                      <div className="fs-3 navbar-brand text-dark">
                        MenuMitra
                      </div>
                    </Link>
                  </div>

                  <div className="d-flex align-items-center">
                    <i className="fas fa-mobile-alt me-2" />
                    <span>09172530151</span>
                  </div>

                  <div className="d-flex align-items-center">
                    <i className="fa fa-envelope me-2" />
                    <span>info@menumitra.com</span>
                  </div>

                  {/* Social Icons */}
                  <ul className="social-icon d-flex align-items-center m-0 gap-2">
                    <li>
                      <Link
                        to="https://www.facebook.com/share/x5wymXr6w7W49vaQ/?mibextid=qi2Omg"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i
                          className="fa-brands fa-facebook fs-3 border rounded-circle p-2 mx-3"
                          style={{ color: "#1877F2", borderColor: "#1877F2" }}
                        ></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.linkedin.com/company/102429337/admin/dashboard/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i
                          className="fa-brands fa-linkedin ms-3 fs-3 border rounded-circle p-2 mx-3"
                          style={{ color: "#0A66C2", borderColor: "#0A66C2" }}
                        ></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.youtube.com/@menumitra"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i
                          className="fa-brands fa-youtube ms-3 fs-3 border rounded-circle p-2 mx-3"
                          style={{ color: "#FF0000", borderColor: "#FF0000" }}
                        ></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://t.me/MenuMitra"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i
                          className="fa-brands fa-telegram ms-3 fs-3 border rounded-circle p-2 mx-3"
                          style={{ color: "#26A5E4", borderColor: "#26A5E4" }}
                        ></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.instagram.com/menumitra/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i
                          className="fa-brands fa-instagram ms-3 fs-3 border rounded-circle p-2 mx-3"
                          style={{ color: "#E4405F", borderColor: "#E4405F" }}
                        ></i>
                      </Link>
                    </li>
                  </ul>

                  {/* Book a Demo Button */}
                  <Link
                    className="btn btn-outline-dark btn-sm px-3 py-2"
                    to="/book_demo"
                  >
                    Book a Demo
                  </Link>
                </div>
              </div>
            </div>

            <div className="row justify-content-between">
              {/* Links and Customer Section */}
              <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div className="single-widget h-100">
                  <h3 className="mb-4 text-info" style={{ fontSize: "19px" }}>
                    Utility
                  </h3>
                  <ul className="links ps-0">
                    <li className="mb-2">
                      <Link className="text-dark" to="/">
                        {" "}
                        <i className="fa-solid fa-angle-right text-info me-2"></i>
                        Home
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/pricing">
                        {" "}
                        <i className="fa-solid fa-angle-right text-info me-2"></i>
                        Pricing
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/career">
                        {" "}
                        <i className="fa-solid fa-angle-right text-info me-2"></i>
                        Career
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/support">
                        {" "}
                        <i className="fa-solid fa-angle-right text-info me-2"></i>
                        Support
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/about_us">
                        {" "}
                        <i className="fa-solid fa-angle-right text-info me-2"></i>
                        About
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/reseller_program">
                        {" "}
                        <i className="fa-solid fa-angle-right text-info me-2"></i>
                        Become Partner
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/devices">
                        {" "}
                        <i className="fa-solid fa-angle-right text-info me-2"></i>
                        Devices
                      </Link>
                    </li>
                    {/* <li className="mb-2">
                      <Link
                        className="btn btn-outline-dark btn-sm p-2  text-center"
                        to="/book_demo"
                      >
                        Book A Demo
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div className="single-widget h-100">
                  <h3 className="mb-4 text-info" style={{ fontSize: "19px" }}>
                    Features
                  </h3>
                  <ul className="links ps-0">
                    <li className="mb-2">
                      <Link className="text-dark" to="/billing">
                        {" "}
                        <i className="fa-solid fa-angle-right text-info me-2"></i>
                        Billing
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/inventory">
                        {" "}
                        <i className="fa-solid fa-angle-right text-info me-2"></i>
                        Inventory
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/menu">
                        {" "}
                        <i className="fa-solid fa-angle-right text-info me-2"></i>
                        Menu
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/onlineorder">
                        {" "}
                        <i className="fa-solid fa-angle-right text-info me-2"></i>
                        Online Orde
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/reports">
                        {" "}
                        <i className="fa-solid fa-angle-right text-info me-2"></i>
                        Restaurant Reports
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/customermanagement">
                        {" "}
                        <i className="fa-solid fa-angle-right text-info me-2"></i>
                        Customer Management
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/customerfeedback">
                        {" "}
                        <i className="fa-solid fa-angle-right text-info me-2"></i>
                        Customer Feedback
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/scan">
                        {" "}
                        <i className="fa-solid fa-angle-right text-info me-2"></i>
                        Scan &amp; Order
                      </Link>
                    </li>

                    <li className="mb-2">
                      <Link className="text-dark" to="/scan">
                        {" "}
                        <i className="fa-solid fa-angle-right text-info me-2"></i>
                        Scan & Order
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div className="single-widget h-100">
                  <h3 className="mb-4 text-info" style={{ fontSize: "19px" }}>
                    Customer
                  </h3>
                  <ul className="links ps-0">
                    <li className="mb-2">
                      <Link className="text-dark" to="/book_demo">
                        {" "}
                        <i className="fa-solid fa-angle-right text-info me-2"></i>{" "}
                        Book A Demo
                      </Link>
                    </li>

                    <li className="mb-2">
                      <Link className="text-dark" to="/help_support">
                        {" "}
                        <i className="fa-solid fa-angle-right text-info me-2"></i>
                        Help and support
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/order_tracking">
                        {" "}
                        <i className="fa-solid fa-angle-right text-info me-2"></i>
                        Order Tracking
                      </Link>
                    </li>

                    <li className="mb-2">
                      <a
                        className="text-dark"
                        href="https://user.menumitra.com/user_app/Index"
                        target="_blank"
                      >
                        {" "}
                        <i className="fa-solid fa-angle-right text-info me-2"></i>
                        UserApp
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div className="single-widget h-100">
                  <h3 className="mb-4 text-info" style={{ fontSize: "19px" }}>
                    Outlet Type
                  </h3>
                  <ul className="links ps-0">
                    <li className="mb-2">
                      <Link className="text-dark" to="/newrestaurant">
                        {" "}
                        <i className="fa-solid fa-angle-right text-info me-2"></i>
                        New Restaurant
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/finedine">
                        {" "}
                        <i className="fa-solid fa-angle-right text-info me-2"></i>
                        Fine Dine
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/foodcourts">
                        {" "}
                        <i className="fa-solid fa-angle-right text-info me-2"></i>
                        Food Courts
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/pizzeria">
                        <i className="fa-solid fa-angle-right text-info me-2"></i>
                        Pizzeria
                      </Link>
                    </li>

                    <li className="mb-2">
                      <Link className="text-dark" to="/cafe">
                        <i className="fa-solid fa-angle-right text-info me-2"></i>
                        Cafe
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/qsr">
                        {" "}
                        <i className="fa-solid fa-angle-right text-info me-2"></i>
                        QSR
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/bakeries">
                        <i className="fa-solid fa-angle-right text-info me-2"></i>{" "}
                        Bakeries
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/icecream">
                        {" "}
                        <i className="fa-solid fa-angle-right text-info me-2"></i>
                        Icecream & Desserts
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/cloudkitchens">
                        {" "}
                        <i className="fa-solid fa-angle-right text-info me-2"></i>
                        Cloud Kitchens
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/largechain">
                        <i className="fa-solid fa-angle-right text-info me-2"></i>
                        Large Chain
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-4 mt-200 pt-100">
            <div>
              <Link className="text-secondary" to="/terms_conditions">
                Terms and Conditions
              </Link>
            </div>
            <div>
              <Link className="text-secondary" to="/privacy_policy">
                Privacy Policy
              </Link>
            </div>
            <div>
              <Link className="text-secondary" to="/cookie_policy">
                Cookie Policy
              </Link>
            </div>
            <div>
              <Link className="text-secondary" to="/request_data_removal">
                Request Data Removal
              </Link>
            </div>
          </div>
        </section>

        {/* End Footer Top Area */}
        {/* Start Footer Bottom Area */}



        <footer className="footer-bottom-area bg-light py-4 border-top shadow-sm">
  <div className="container text-center">
    <ul className="list-inline mb-0">
      <li className="list-inline-item mx-2 mb-2 mb-md-0">
        <a className="btn btn-outline-primary px-3 py-2" 
           href="https://user.menumitra.com" 
           target="_blank"
           rel="noopener noreferrer">
          📲  <strong>User App</strong>
        </a>
      </li>
      <li className="list-inline-item mx-2 mb-2 mb-md-0">
        <a className="btn btn-outline-primary px-3 py-2" 
           href="https://menumitra.com/downloads/CaptainProduction.apk"
           download="MenuMitra-Captain.apk"
           onClick={(e) => {
             fetch(e.currentTarget.href)
               .then(response => {
                 if (!response.ok) {
                   e.preventDefault();
                   alert('Download link is currently unavailable. Please try again later.');
                 }
               })
               .catch(() => {
                 e.preventDefault();
                 alert('Download link is currently unavailable. Please try again later.');
               });
           }}>
          📲  <strong>Captain App</strong>
        </a>
      </li>
      <li className="list-inline-item mx-2 mb-2 mb-md-0">
        <a className="btn btn-outline-primary px-3 py-2" 
           href="https://menumitra.com/downloads/OwnerProduction.apk"
           download="MenuMitra-Owner.apk"
           onClick={(e) => {
             fetch(e.currentTarget.href)
               .then(response => {
                 if (!response.ok) {
                   e.preventDefault();
                   alert('Download link is currently unavailable. Please try again later.');
                 }
               })
               .catch(() => {
                 e.preventDefault();
                 alert('Download link is currently unavailable. Please try again later.');
               });
           }}>
          📲  <strong>Owner App</strong>
        </a>
      </li>
      <li className="list-inline-item mx-2 mb-2 mb-md-0">
        <a className="btn btn-outline-primary px-3 py-2" 
           href="https://menumitra.com/downloads/WaiterProduction.apk"
           download="MenuMitra-Waiter.apk"
           onClick={(e) => {
             fetch(e.currentTarget.href)
               .then(response => {
                 if (!response.ok) {
                   e.preventDefault();
                   alert('Download link is currently unavailable. Please try again later.');
                 }
               })
               .catch(() => {
                 e.preventDefault();
                 alert('Download link is currently unavailable. Please try again later.');
               });
           }}>
          📲  <strong>Waiter App</strong>
        </a>
      </li>
      <li className="list-inline-item mx-2 mb-2 mb-md-0">
        <a className="btn btn-outline-primary px-3 py-2" 
           href="https://menumitra.com/downloads/MenuMitra-POS.zip"
           download="MenuMitra-POS.zip"
           onClick={(e) => {
             fetch(e.currentTarget.href)
               .then(response => {
                 if (!response.ok) {
                   e.preventDefault();
                   alert('Download link is currently unavailable. Please try again later.');
                 }
               })
               .catch(() => {
                 e.preventDefault();
                 alert('Download link is currently unavailable. Please try again later.');
               });
           }}>
          💻  <strong>POS Software</strong> (ZIP)
        </a>
      </li>
    </ul>
  </div>
</footer>



        <footer className="footer-bottom-area">
          <div className="container  pb-0 ">
            <div className="row ">
              <div className="col-12 text-center">
                <p className="mb-0">
                  All trademarks and logos belong to their respective owners and
                  are hereby acknowledged.
                </p>
              </div>
            </div>
          </div>
        </footer>
        <hr className="p-0 m-0"></hr>
        <footer className="footer-bottom-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 text-center text-lg-start">
                <p className="mb-0">Copyright © 2024</p>
              </div>
              <div className="col-lg-6 col-md-6 text-center text-lg-end">
                <p className="conditions mb-0">
                  <i className="fa-solid fa-bolt"></i> Powered by
                  <span className="ms-2">
                    <Link
                      to="https://www.shekruweb.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      Shekru Labs India Pvt. Ltd.
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </footer>

        {/* End Footer Bottom Area */}
      </>
    </>
  );
};

export default Footer;
