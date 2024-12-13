import React, { useState } from "react";
import { Link } from "react-router-dom";


import menu from '../assets/images/MenuMitra.png'


const Footer = () => {

  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [addOnsOpen, setAddOnsOpen] = useState(false);


  return (
    <>
      <>
        <section
          className="footer-top-area  border border-top shadow-lg  pt-100 "
          style={{
            backgroundImage:
              'url("https://menumitra.com/static/media/footerbg.943960c886c384c11506.png")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }}
        >
          <div className="container">
            <div className="row">
              {/* MenuMitra Section */}
              <div className="col-lg-4 col-sm-6 col-md-6 mb-3">
                <div className="single-widget">
                  <Link to="/website">
                    <img src={menu} alt="Rimu-Logo"  style={{ width: "60px", height: "60px" }}  />
                  </Link>
                  <Link className="ms-3" to="/website">
                    <div className="fs-2 fw-semibold text-dark">MenuMitra</div>
                  </Link>
                  <p>
                    Your menus are available digitally and on your own website,
                    letting you reduce costs and keeping your menu up-to-date in
                    an easy and inexpensive way.
                  </p>

                  <ul className="address">
                    <li>
                      <i className="fa-solid fa-location-dot me-2" />
                      <span>
                        Muktangan English School & Jr College, office No. 6, 2
                        Floor manogat, Parvati, Pune, Maharashtra 411009
                      </span>
                    </li>
                    <li>
                      <i className="fa fa-envelope me-2" />
                      <span >info@menumitra.com</span>
                    </li>
                    <li>
                      <i className="fa fa-phone me-2" />
                      <span >+91 9172530151</span>
                    </li>
                  </ul>
                  <ul className="social-icon d-flex justify-content-left">
                    <li>
                      <Link
                        to="https://www.facebook.com/share/x5wymXr6w7W49vaQ/?mibextid=qi2Omg"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.linkedin.com/company/102429337/admin/dashboard/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-linkedin-in ms-3"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.youtube.com/@menumitra"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-youtube ms-3"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://t.me/MenuMitra"
                        target="_blank"
                        rel="noreferrer"

                      >
                        <i className="fa-brands fa-telegram ms-3"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.instagram.com/menumitra/"
                        target="_blank"
                        rel="noreferrer"
                      >
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
        <h3 className="ms-3 text-success" style={{ fontSize: "19px" }}>Link</h3>
        <ul className="links">
          <li className="mb-2">
            <Link className="text-dark" to="/">Home</Link>
          </li>
          <li
            onMouseEnter={() => setFeaturesOpen(true)}
            onMouseLeave={() => setFeaturesOpen(false)}
            style={{ position: "relative", cursor: "pointer" }} className="mb-2"
          >
            <Link className="text-dark" to="">Features</Link>
            {featuresOpen && (
              <ul
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  background: "white",
                  listStyle: "none",
                  padding: "10px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  zIndex: 1,
                }}
              >
                <li><Link className="text-dark"  to="/billing">Billing</Link></li>
                <li><Link className="text-dark" to="/inventory">Inventory</Link></li>
                <li><Link className="text-dark" to="/menu">Menu</Link></li>
                <li><Link className="text-dark" to="/onlineorder">Online Order</Link></li>
                <li><Link className="text-dark" to="/reports">Restaurant Reports</Link></li>
                <li><Link className="text-dark" to="/customermanagement">Customer Management</Link></li>
                <li><Link className="text-dark" to="/customerfeedback">Customer Feedback</Link></li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={() => setAddOnsOpen(true)}
            onMouseLeave={() => setAddOnsOpen(false)}
            style={{ position: "relative", cursor: "pointer" }} className="mb-2"
          >
            <Link className="text-dark" to="">Add-Ons</Link>
            {addOnsOpen && (
              <ul
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  background: "white",
                  listStyle: "none",
                  padding: "10px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  zIndex: 1,
                }}
              >
                <li><Link className="text-dark" to="/captainapp">Captain App</Link></li>
                <li><Link className="text-dark" to="/kds">Kitchen Display System</Link></li>
                <li><Link className="text-dark" to="/scan">Scan & Order</Link></li>
              </ul>
            )}
          </li>
          <li className="mb-2">
            <Link className="text-dark" to="/outlet">Outlet Format</Link>
          </li>
        </ul>
      </div>
    </div>

                {/* Customer Section */}
                <div className="col-6 mb-3">
                  <div className="single-widget">
                    <h3 className="ms-3 text-success" style={{ fontSize: "19px" }}>Customer</h3>
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
              <div className="col-lg-4 col-sm-6 col-md-6 mb-3">
                <div className="single-widget single-widget-4">
                  <h3 className="ms-3 text-success" style={{ fontSize: "19px" }}>Legal</h3>
                  <ul className="links">
                    <li className="mb-2">
                      <Link className="text-dark" to="/terms_conditions">Terms and Conditions</Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/privacy_policy">Privacy Policy</Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/cookie_policy">Cookie Policy</Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/request_data_removal">
                        Request Data Removal
                      </Link>
                    </li>
                  </ul>
                </div>
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
        <footer className="footer-bottom-area" style={{ backgroundColor: "#3a8d00" }}>
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
