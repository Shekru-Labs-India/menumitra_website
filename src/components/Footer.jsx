import React from "react";
import { Link } from "react-router-dom";
import menumitra from '../assets/images/MenuMitra.png';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <section className="footer-top-area bg-white border border-top shadow-lg pt-50">
          <div className="container">
            {/* Top Section with Logo, Contact, and Social Media */}
            <div className="col-lg-12 col-sm-6 col-md-6 pb-50">
              <div className="single-widget">
                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3">
                  {/* Logo and Name */}
                  <div className="d-flex align-items-center">
                    <Link to="/">
                      <img
                        src={menumitra}
                        alt="MenuMitra-Logo"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </Link>
                    <Link className="ms-3" to="/">
                      <div className="fs-16 navbar-brand text-dark">
                        MenuMitra
                      </div>
                    </Link>
                  </div>

                  <div className="d-flex align-items-center">
                    <i className="fas fa-mobile-alt me-2" />
                    <span><a href="tel:+919317818283">+91 93178 18283</a></span>
                  </div>

                  <div className="d-flex align-items-center">
                    <i className="fa fa-envelope me-2" />
                    <span><a href="mailto:info@menumitra.com">info@menumitra.com</a></span>
                  </div>

                  {/* Social Icons */}
                  <ul className="social-icon d-flex align-items-center m-0 gap-2">
                  <li>
                      <Link to="https://www.google.com/search?q=MenuMitra" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-google fs-3 border rounded-circle p-2 mx-3" style={{ color: "#4285F4", borderColor: "#4285F4" }}></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.facebook.com/share/x5wymXr6w7W49vaQ/?mibextid=qi2Omg" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-facebook fs-3 border rounded-circle p-2 mx-3" style={{ color: "#1877F2", borderColor: "#1877F2" }}></i>
                      </Link>
                    </li>
                 
                    <li>
                      <Link to="https://www.youtube.com/@menumitra" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-youtube fs-3 border rounded-circle p-2 mx-3" style={{ color: "#FF0000", borderColor: "#FF0000" }}></i>
                      </Link>
                    </li>
                   
                    <li>
                      <Link to="https://www.instagram.com/menumitra/" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-instagram fs-3 border rounded-circle p-2 mx-3" style={{ color: "#E4405F", borderColor: "#E4405F" }}></i>
                      </Link>
                    </li>
                    
                  </ul>

                  {/* Book Demo Button */}
                  <Link className="btn btn-outline-dark btn-sm px-3 py-2" to="/book_demo">
                    Book a Demo
                  </Link>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div className="row">
              <div className="col-12 col-md-3">
                <div className="footer-widget">
                  <h3 className="text-primary mb-4">Utility</h3>
                  <ul className="footer-links">
                    <li><Link to="/"><i className="fa-solid fa-chevron-right me-2"></i>Home</Link></li>
                    {/* <li><Link to="/pricing"><i className="fa-solid fa-chevron-right me-2"></i>Pricing</Link></li> */}
                    <li><Link to="/career"><i className="fa-solid fa-chevron-right me-2"></i>Career</Link></li>
                    <li><Link to="/support"><i className="fa-solid fa-chevron-right me-2"></i>Support</Link></li>
                    <li><Link to="/about_us"><i className="fa-solid fa-chevron-right me-2"></i>About</Link></li>
                    <li><Link to="/reseller_program"><i className="fa-solid fa-chevron-right me-2"></i>Become Partner</Link></li>
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

          {/* Footer Links */}
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-4 mt-4 pt-4 border-top fs-16">
            <Link className="text-secondary" to="/terms_conditions">Terms and Conditions</Link>
            <Link className="text-secondary" to="/privacy_policy">Privacy Policy</Link>
            <Link className="text-secondary" to="/cookie_policy">Cookie Policy</Link>
            <Link className="text-secondary" to="/request_data_removal">Request Data Removal</Link>
          </div>
      </section>

      {/* App Downloads Section */}
      {/* <section className="bg-light py-4 border-top shadow-sm">
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
      </section> */}

      {/* Copyright Section */}
      <section className="py-3">
        <div className="container">
          <div className="text-center mb-3">
            <p className="mb-0 fs-16">All trademarks and logos belong to their respective owners and are hereby acknowledged.</p>
          </div>
          <hr className="my-3" />
          <div className="row justify-content-between align-items-center">
            <div className="col-12 text-center">
              <div className="d-flex align-items-center justify-content-center">
                <span className="fs-16">Copyright © 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
