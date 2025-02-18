import React from "react";
import { Link } from "react-router-dom";
import menumitra from '../assets/images/MenuMitra.png';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <section className="footer-top-area bg-white border border-top shadow-lg">
        <div className="container">
          {/* Links Sections */}
          <div className="row">
            <div className="col-12 col-md-3">
              <div className="footer-widget">
                <h3 className="text-primary mb-4">Utility</h3>
                <ul className="footer-links">
                  <li><Link to="/"><i className="fa-solid fa-chevron-right me-2"></i>Home</Link></li>
                  <li><Link to="/pricing"><i className="fa-solid fa-chevron-right me-2"></i>Pricing</Link></li>
                  <li><Link to="/career"><i className="fa-solid fa-chevron-right me-2"></i>Career</Link></li>
                  <li><Link to="/support"><i className="fa-solid fa-chevron-right me-2"></i>Support</Link></li>
                  <li><Link to="/about_us"><i className="fa-solid fa-chevron-right me-2"></i>About</Link></li>
                  <li><Link to="/reseller_program"><i className="fa-solid fa-chevron-right me-2"></i>Become Partner</Link></li>
                  <li><Link to="/devices"><i className="fa-solid fa-chevron-right me-2"></i>Devices</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="footer-widget">
                <h3 className="text-primary mb-4">Features</h3>
                <ul className="footer-links">
                  <li><Link to="/billing"><i className="fa-solid fa-chevron-right me-2"></i>Billing</Link></li>
                  <li><Link to="/inventory"><i className="fa-solid fa-chevron-right me-2"></i>Inventory</Link></li>
                  <li><Link to="/menu"><i className="fa-solid fa-chevron-right me-2"></i>Menu</Link></li>
                  <li><Link to="/onlineorder"><i className="fa-solid fa-chevron-right me-2"></i>Online Order</Link></li>
                  <li><Link to="/reports"><i className="fa-solid fa-chevron-right me-2"></i>Restaurant Reports</Link></li>
                  <li><Link to="/customermanagement"><i className="fa-solid fa-chevron-right me-2"></i>Customer Management</Link></li>
                  <li><Link to="/customerfeedback"><i className="fa-solid fa-chevron-right me-2"></i>Customer Feedback</Link></li>
                  <li><Link to="/scan"><i className="fa-solid fa-chevron-right me-2"></i>Scan & Order</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="footer-widget">
                <h3 className="text-primary mb-4">Customer</h3>
                <ul className="footer-links">
                  <li><Link to="/book_demo"><i className="fa-solid fa-chevron-right me-2"></i>Book A Demo</Link></li>
                  <li><Link to="/help_support"><i className="fa-solid fa-chevron-right me-2"></i>Help and support</Link></li>
                  <li><Link to="/order_tracking"><i className="fa-solid fa-chevron-right me-2"></i>Order Tracking</Link></li>
                  <li><a href="https://user.menumitra.com/user_app/Index" target="_blank" rel="noreferrer"><i className="fa-solid fa-chevron-right me-2"></i>UserApp</a></li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="footer-widget">
                <h3 className="text-primary mb-4">Outlet Type</h3>
                <ul className="footer-links">
                  <li><Link to="/newrestaurant"><i className="fa-solid fa-chevron-right me-2"></i>New Restaurant</Link></li>
                  <li><Link to="/finedine"><i className="fa-solid fa-chevron-right me-2"></i>Fine Dine</Link></li>
                  <li><Link to="/foodcourts"><i className="fa-solid fa-chevron-right me-2"></i>Food Courts</Link></li>
                  <li><Link to="/pizzeria"><i className="fa-solid fa-chevron-right me-2"></i>Pizzeria</Link></li>
                  <li><Link to="/cafe"><i className="fa-solid fa-chevron-right me-2"></i>Cafe</Link></li>
                  <li><Link to="/qsr"><i className="fa-solid fa-chevron-right me-2"></i>QSR</Link></li>
                  <li><Link to="/bakeries"><i className="fa-solid fa-chevron-right me-2"></i>Bakeries</Link></li>
                  <li><Link to="/icecream"><i className="fa-solid fa-chevron-right me-2"></i>Icecream & Desserts</Link></li>
                  <li><Link to="/cloudkitchens"><i className="fa-solid fa-chevron-right me-2"></i>Cloud Kitchens</Link></li>
                  <li><Link to="/largechain"><i className="fa-solid fa-chevron-right me-2"></i>Large Chain</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-4 mt-4 pt-4 border-top">
        <Link className="text-secondary" to="/terms_conditions">Terms and Conditions</Link>
        <Link className="text-secondary" to="/privacy_policy">Privacy Policy</Link>
        <Link className="text-secondary" to="/cookie_policy">Cookie Policy</Link>
        <Link className="text-secondary" to="/request_data_removal">Request Data Removal</Link>
      </div>

      {/* App Downloads Section */}
      <section className="bg-light py-4 border-top shadow-sm">
        <div className="container">
          <ul className="list-inline mb-0 text-center">
            <li className="list-inline-item mx-2 mb-3">
              <a className="btn btn-outline-primary px-3 py-2" href="https://user.menumitra.com" target="_blank" rel="noreferrer">
                📲 <strong>User App</strong>
              </a>
            </li>
            <li className="list-inline-item mx-2 mb-3">
              <a className="btn btn-outline-primary px-3 py-2" href="/downloads/OwnerProduction.apk" download>
                📲 <strong>Owner App</strong>
              </a>
            </li>
            <li className="list-inline-item mx-2 mb-3">
              <a className="btn btn-outline-primary px-3 py-2" href="/downloads/POS.zip" download>
                💻 <strong>POS Software</strong> (ZIP)
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Copyright Section */}
      <section className="py-3">
        <div className="container">
          <div className="text-center mb-3">
            <p className="mb-0">All trademarks and logos belong to their respective owners and are hereby acknowledged.</p>
          </div>
          <hr className="my-3" />
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 text-center text-lg-start mb-3 mb-lg-0">
              <p className="mb-0">Copyright © 2024</p>
            </div>
            <div className="col-12 col-lg-6 text-center text-lg-end">
              <p className="mb-0">
                <i className="fa-solid fa-bolt"></i> Powered by
                <Link to="https://www.shekruweb.com" target="_blank" rel="noopener noreferrer" className="text-primary ms-2">
                  Shekru Labs India Pvt. Ltd.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
