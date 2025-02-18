import React from "react";
import { Link } from "react-router-dom";
import menumitra from '../assets/images/MenuMitra.png';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <section className="footer-top-area bg-white border border-top shadow-lg">
        <div className="container">
          {/* Top Section with Logo, Contact, Social Icons */}
          <div className="footer-info-wrapper mb-4">
            {/* Logo and Name */}
            <div className="d-flex align-items-center">
              <Link to="/">
                <img
                  src={menumitra}
                  alt="MenuMitra-Logo"
                  style={{ width: "50px", height: "50px" }}
                />
              </Link>
              <Link className="ms-3" to="/website">
                <span className="fs-3 navbar-brand text-dark">MenuMitra</span>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="d-flex align-items-center">
              <i className="fas fa-mobile-alt me-2" />
              <span>09172530151</span>
            </div>

            <div className="d-flex align-items-center">
              <i className="fa fa-envelope me-2" />
              <span>info@menumitra.com</span>
            </div>

            {/* Social Icons */}
            <ul className="social-icon">
              <li>
                <Link to="https://www.facebook.com/share/x5wymXr6w7W49vaQ/?mibextid=qi2Omg" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-facebook fs-3 border rounded-circle p-2" style={{ color: "#1877F2", borderColor: "#1877F2" }}></i>
                </Link>
              </li>
              <li>
                <Link to="https://www.linkedin.com/company/102429337/admin/dashboard/" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-linkedin fs-3 border rounded-circle p-2" style={{ color: "#0A66C2", borderColor: "#0A66C2" }}></i>
                </Link>
              </li>
              <li>
                <Link to="https://www.youtube.com/@menumitra" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-youtube fs-3 border rounded-circle p-2" style={{ color: "#FF0000", borderColor: "#FF0000" }}></i>
                </Link>
              </li>
              <li>
                <Link to="https://t.me/MenuMitra" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-telegram fs-3 border rounded-circle p-2" style={{ color: "#26A5E4", borderColor: "#26A5E4" }}></i>
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/menumitra/" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-instagram fs-3 border rounded-circle p-2" style={{ color: "#E4405F", borderColor: "#E4405F" }}></i>
                </Link>
              </li>
            </ul>

            {/* Book a Demo Button */}
            <Link className="btn btn-outline-dark btn-sm px-3 py-2" to="/book_demo">
              Book a Demo
            </Link>
          </div>

          {/* Links Sections */}
          <div className="row">
            {/* Utility Section */}
            <div className="col-12 col-sm-6 col-lg-3 mb-4">
              <div className="single-widget text-sm-start">
                <h3 className="text-info mb-3">Utility</h3>
                <ul className="links">
                  <li><Link className="text-dark d-block py-2" to="/"><i className="fa-solid fa-angle-right text-info me-2"></i>Home</Link></li>
                  <li><Link className="text-dark d-block py-2" to="/pricing"><i className="fa-solid fa-angle-right text-info me-2"></i>Pricing</Link></li>
                  <li><Link className="text-dark d-block py-2" to="/career"><i className="fa-solid fa-angle-right text-info me-2"></i>Career</Link></li>
                  <li><Link className="text-dark d-block py-2" to="/support"><i className="fa-solid fa-angle-right text-info me-2"></i>Support</Link></li>
                  <li><Link className="text-dark d-block py-2" to="/about_us"><i className="fa-solid fa-angle-right text-info me-2"></i>About</Link></li>
                  <li><Link className="text-dark d-block py-2" to="/reseller_program"><i className="fa-solid fa-angle-right text-info me-2"></i>Become Partner</Link></li>
                  <li><Link className="text-dark d-block py-2" to="/devices"><i className="fa-solid fa-angle-right text-info me-2"></i>Devices</Link></li>
                </ul>
              </div>
            </div>

            {/* Features Section */}
            <div className="col-12 col-sm-6 col-lg-3 mb-4">
              <div className="single-widget text-sm-start">
                <h3 className="text-info mb-3">Features</h3>
                <ul className="links">
                  <li><Link className="text-dark d-block py-2" to="/billing"><i className="fa-solid fa-angle-right text-info me-2"></i>Billing</Link></li>
                  <li><Link className="text-dark d-block py-2" to="/inventory"><i className="fa-solid fa-angle-right text-info me-2"></i>Inventory</Link></li>
                  <li><Link className="text-dark d-block py-2" to="/menu"><i className="fa-solid fa-angle-right text-info me-2"></i>Menu</Link></li>
                  <li><Link className="text-dark d-block py-2" to="/onlineorder"><i className="fa-solid fa-angle-right text-info me-2"></i>Online Order</Link></li>
                  <li><Link className="text-dark d-block py-2" to="/reports"><i className="fa-solid fa-angle-right text-info me-2"></i>Restaurant Reports</Link></li>
                  <li><Link className="text-dark d-block py-2" to="/customermanagement"><i className="fa-solid fa-angle-right text-info me-2"></i>Customer Management</Link></li>
                  <li><Link className="text-dark d-block py-2" to="/customerfeedback"><i className="fa-solid fa-angle-right text-info me-2"></i>Customer Feedback</Link></li>
                  <li><Link className="text-dark d-block py-2" to="/scan"><i className="fa-solid fa-angle-right text-info me-2"></i>Scan & Order</Link></li>
                </ul>
              </div>
            </div>

            {/* Customer Section */}
            <div className="col-12 col-sm-6 col-lg-3 mb-4">
              <div className="single-widget text-sm-start">
                <h3 className="text-info mb-3">Customer</h3>
                <ul className="links">
                  <li><Link className="text-dark d-block py-2" to="/book_demo"><i className="fa-solid fa-angle-right text-info me-2"></i>Book A Demo</Link></li>
                  <li><Link className="text-dark d-block py-2" to="/help_support"><i className="fa-solid fa-angle-right text-info me-2"></i>Help and support</Link></li>
                  <li><Link className="text-dark d-block py-2" to="/order_tracking"><i className="fa-solid fa-angle-right text-info me-2"></i>Order Tracking</Link></li>
                  <li><a className="text-dark d-block py-2" href="https://user.menumitra.com/user_app/Index" target="_blank" rel="noreferrer"><i className="fa-solid fa-angle-right text-info me-2"></i>UserApp</a></li>
                </ul>
              </div>
            </div>

            {/* Outlet Type Section */}
            <div className="col-12 col-sm-6 col-lg-3 mb-4">
              <div className="single-widget text-sm-start">
                <h3 className="text-info mb-3">Outlet Type</h3>
                <ul className="links">
                  <li><Link className="text-dark d-block py-2" to="/newrestaurant"><i className="fa-solid fa-angle-right text-info me-2"></i>New Restaurant</Link></li>
                  <li><Link className="text-dark d-block py-2" to="/finedine"><i className="fa-solid fa-angle-right text-info me-2"></i>Fine Dine</Link></li>
                  <li><Link className="text-dark d-block py-2" to="/foodcourts"><i className="fa-solid fa-angle-right text-info me-2"></i>Food Courts</Link></li>
                  <li><Link className="text-dark d-block py-2" to="/pizzeria"><i className="fa-solid fa-angle-right text-info me-2"></i>Pizzeria</Link></li>
                  <li><Link className="text-dark d-block py-2" to="/cafe"><i className="fa-solid fa-angle-right text-info me-2"></i>Cafe</Link></li>
                  <li><Link className="text-dark d-block py-2" to="/qsr"><i className="fa-solid fa-angle-right text-info me-2"></i>QSR</Link></li>
                  <li><Link className="text-dark d-block py-2" to="/bakeries"><i className="fa-solid fa-angle-right text-info me-2"></i>Bakeries</Link></li>
                  <li><Link className="text-dark d-block py-2" to="/icecream"><i className="fa-solid fa-angle-right text-info me-2"></i>Icecream & Desserts</Link></li>
                  <li><Link className="text-dark d-block py-2" to="/cloudkitchens"><i className="fa-solid fa-angle-right text-info me-2"></i>Cloud Kitchens</Link></li>
                  <li><Link className="text-dark d-block py-2" to="/largechain"><i className="fa-solid fa-angle-right text-info me-2"></i>Large Chain</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-4 mt-4 pt-4 border-top">
            <Link className="text-secondary" to="/terms_conditions">Terms and Conditions</Link>
            <Link className="text-secondary" to="/privacy_policy">Privacy Policy</Link>
            <Link className="text-secondary" to="/cookie_policy">Cookie Policy</Link>
            <Link className="text-secondary" to="/request_data_removal">Request Data Removal</Link>
          </div>
        </div>
      </section>

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
