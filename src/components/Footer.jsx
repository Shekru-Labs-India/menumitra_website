import React, { useState } from "react";
import { Link } from "react-router-dom";


import menumitra from '../assets/images/MenuMitra.png'


const Footer = () => {

  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [addOnsOpen, setAddOnsOpen] = useState(false);


  return (
    <>
      <>
        <section
          className="footer-top-area  border border-top shadow-lg  pt-100 "
         
        >
          <div className="container">
            <div className="row">
              {/* MenuMitra Section */}
              <div className="col-lg-4 col-sm-6 col-md-6 mb-3">
              <div className="single-widget">
  <div className="d-flex align-items-center">
    <Link to="/">
      <img src={menumitra} alt="Rimu-Logo" style={{ width: "60px", height: "60px" }} />
    </Link>
    <Link className="ms-3" to="/website">
      <div className="fs-2 navbar-brand text-dark">MenuMitra</div>
    </Link>
  </div>
  <p className="mt-3">
    Your menus are available digitally and on your own website, letting you reduce costs and keeping your menu up-to-date in an easy and inexpensive way.
  </p>

  <ul className="address ps-0">
    <li>
      <i className="fa-solid fa-location-dot me-2" />
      <span>
        Muktangan English School & Jr College, office No. 6, 2 Floor manogat, Parvati, Pune, Maharashtra 411009
      </span>
    </li>
    <li className="mt-3">
      <i className="fa fa-envelope me-2" />
      <span>info@menumitra.com</span>
    </li>
   
  </ul>
  <ul className="social-icon d-flex justify-content-left mb-3 ">
    <li>
      <Link to="https://www.facebook.com/share/x5wymXr6w7W49vaQ/?mibextid=qi2Omg" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-facebook-f"></i>
      </Link>
    </li>
    <li>
      <Link to="https://www.linkedin.com/company/102429337/admin/dashboard/" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-linkedin-in ms-3"></i>
      </Link>
    </li>
    <li>
      <Link to="https://www.youtube.com/@menumitra" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-youtube ms-3"></i>
      </Link>
    </li>
    <li>
      <Link to="https://t.me/MenuMitra" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-telegram ms-3"></i>
      </Link>
    </li>
    <li>
      <Link to="https://www.instagram.com/menumitra/" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-instagram ms-3"></i>
      </Link>
    </li>
  </ul>
</div>

              </div>

              {/* Links and Customer Section - Display Side by Side in Mobile */}
              <div className="col-lg-4 col-sm-12 d-flex  flex-wrap">
                {/* Links Section */}
                <div className="col-6 mb-3">
      <div className="single-widget">
        <h3 className="ms-3 text-info" style={{ fontSize: "19px" }}>Features</h3>
        <ul className="links">
          <li className="mb-2">
            <Link className="text-dark" to="/billing">Billing</Link>
          </li>
          <li className="mb-2">
            <Link className="text-dark" to="/inventory">Inventory</Link>
          </li>
          <li className="mb-2">
            <Link className="text-dark"to="/menu">Menu</Link>
          </li>
          <li className="mb-2">
            <Link className="text-dark" to="/onlineorder">Online Orde</Link>
          </li>
          <li className="mb-2">
            <Link className="text-dark" to="/reports">Restaurant Reports</Link>
          </li>
          <li className="mb-2">
            <Link className="text-dark" to="/customermanagement">Customer Management</Link>
          </li>
          <li className="mb-2"><Link className="text-dark" to="/customerfeedback">Customer Feedback</Link></li>

        
        
          <li className="mb-2">
            <Link className="text-dark" to="/outlet">Outlet Format</Link>
          </li>
        </ul>
      </div>
    </div>


                {/* Customer Section */}
                <div className="col-6 mb-3">
                  <div className="single-widget">
                    <h3 className="ms-3 text-info" style={{ fontSize: "19px" }}>Customer</h3>
                    <ul className="links">
                      <li className="mb-2">
                        <a className="text-dark" href="index.html#">Get a demo</a>
                      </li>
                      <li className="mb-2">
                        <a className="text-dark" href="index.html#">Enquiry</a>
                      </li>
                      <li className="mb-2">
                        <a className="text-dark" href="index.html#">Help and support</a>
                      </li>
                      <li className="mb-2">
                        <a className="text-dark" href="index.html#">Order Tracking</a>
                      </li>
                      <li className="mb-2">
                        <a className="text-dark" href="contact.html">Get a Call</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Legal Section */}
              <div className="col-lg-4 col-sm-12 d-flex  flex-wrap">
              <div className="col-6 mb-3">
                <div className="single-widget single-widget-4">
                  <h3 className="ms-3 text-info" style={{ fontSize: "19px" }}>Outlet</h3>
                  <ul className="links">
                    <li className="mb-2">
                      <Link className="text-dark" to="/terms_conditions">New Restaurant</Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/privacy_policy">Fine Dine</Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/cookie_policy">Food Courts</Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/request_data_removal">
                       Pizzeria
                      </Link>
                    </li>
                   
                    <li className="mb-2">
                      <Link className="text-dark" to="/request_data_removal">
                       Cafe
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/cookie_policy">QSR</Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/request_data_removal">
                       Bakeries
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/cookie_policy">Icecream & Desserts</Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/cookie_policy">Cloud Kitchens</Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/request_data_removal">
                       Large Chain
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 mb-3">
                  <div className="single-widget">
                    <h3 className="ms-3 text-info" style={{ fontSize: "19px" }}>Add-Ons</h3>
                    <ul className="links">
                    <li className="mb-2"><Link className="text-dark " to="/captainapp">Captain App</Link></li>
                <li className="mb-2"><Link className="text-dark " to="/kds">Kitchen Display System</Link></li>
                <li className="mb-2"><Link className="text-dark" to="/scan">Scan & Order</Link></li>
                    
          </ul>
                  </div>
                </div>
                </div>
            </div>
            <div className="d-flex justify-content-center gap-5">
  <div >
    <Link className="text-secondary" to="/terms_conditions">Terms and Conditions</Link>
  </div>
  <div >
    <Link className="text-secondary" to="/privacy_policy">Privacy Policy</Link>
  </div>
  <div>
    <Link className="text-secondary" to="/cookie_policy">Cookie Policy</Link>
  </div>
  <div >
    <Link className="text-secondary" to="/request_data_removal">
      Request Data Removal
    </Link>
  </div>
</div>

          </div>
          
        </section>

        {/* End Footer Top Area */}
        {/* Start Footer Bottom Area */}

        <div className="container pb-0 mb-2 mt-2">
          <div className="row ">
            <div className="col-12 text-center">
              <p className="mb-0">
                All trademarks and logos belong to their respective owners and
                are hereby acknowledged.
              </p>
            </div>
          </div>
          
        </div>
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
          <span className="fw-bold ms-2">
            <Link
              to="https://www.shekruweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark"
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
