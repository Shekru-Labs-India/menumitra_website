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
          className="footer-top-area  bg-white border border-top shadow-lg  pt-100 "
         
        >
          <div className="container">
          <div className="col-lg-12 col-sm-6 col-md-6 mb-5">
  <div className="single-widget pb-4">
    <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between">
      
      {/* Logo and Name */}
      <div className="d-flex flex-row flex-sm-row align-items-center justify-content-center mb-3 mb-sm-0">
        <Link to="/">
          <img src={menumitra} alt="Rimu-Logo" style={{ width: "50px", height: "50px" }} />
        </Link>
        <Link className="ms-3" to="/website">
          <div className="fs-3 navbar-brand text-dark">MenuMitra</div>
        </Link>
      </div>
      
      <div className="d-flex align-items-center justify-content-center mb-3 mb-sm-0">
  <i className="fas fa-mobile-alt me-2" />
  <span>09172530151</span>
</div>


      <div className="d-flex align-items-center justify-content-center mb-3 mb-sm-0">
        <i className="fa fa-envelope me-2" />
        <span>info@menumitra.com</span>
      </div>

      {/* Social Icons */}
      <ul className="social-icon d-flex justify-content-center ms-3 mb-3 mb-sm-0">
        <li>
          <Link to="https://www.facebook.com/share/x5wymXr6w7W49vaQ/?mibextid=qi2Omg" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-facebook-f fs-3"></i>
          </Link>
        </li>
        <li>
          <Link to="https://www.linkedin.com/company/102429337/admin/dashboard/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin-in ms-3 fs-3"></i>
          </Link>
        </li>
        <li>
          <Link to="https://www.youtube.com/@menumitra" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-youtube ms-3 fs-3"></i>
          </Link>
        </li>
        <li>
          <Link to="https://t.me/MenuMitra" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-telegram ms-3 fs-3"></i>
          </Link>
        </li>
        <li>
          <Link to="https://www.instagram.com/menumitra/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram ms-3 fs-3"></i>
          </Link>
        </li>
      </ul>

      {/* Book a Demo Button */}
      <Link className="btn btn-outline-dark ms-3 btn-sm p-2" to="/book_demo">
        Book a Demo
      </Link>
    </div>
  </div>
</div>





            <div className="row ">
         <div className="col-1"></div>   

   {/* Links and Customer Section - Display Side by Side in Mobile */}
   <div className="col-lg-4 col-sm-12 d-flex  flex-wrap">
                {/* Links Section */}
                <div className="col-6 mb-3">
      <div className="single-widget">
        <h3 className="ms-3 text-info" style={{ fontSize: "19px" }}>Utility</h3>
        <ul className="links">
          <li className="mb-2">
            <Link className="text-dark" to="/"> <i className="fa-solid fa-check text-info me-1"></i>Home</Link>
          </li>
          <li className="mb-2">
            <Link className="text-dark" to="/pricing"> <i className="fa-solid fa-check text-info me-1"></i>Pricing</Link>
          </li>
          <li className="mb-2">
            <Link className="text-dark"to="/menu"> <i className="fa-solid fa-check text-info me-1"></i>Career</Link>
          </li>
          <li className="mb-2">
            <Link className="text-dark" to="/onlineorder"> <i className="fa-solid fa-check text-info me-1"></i>Support</Link>
          </li>
          <li className="mb-2">
            <Link className="text-dark" to="/reports"> <i className="fa-solid fa-check text-info me-1"></i>About</Link>
          </li>
          <li className="mb-2">
            <Link className="text-dark" to="/reseller_program"> <i className="fa-solid fa-check text-info me-1"></i>Become Partner</Link>
          </li>
          <li className="mb-2">
  <Link className="btn btn-outline-dark btn-sm p-2  text-center" to="/book_demo">
    Book A Demo
  </Link>
</li>

        
        
         
        </ul>
      </div>
    </div>
    <div className="col-6 mb-3">
      <div className="single-widget">
        <h3 className="ms-3 text-info" style={{ fontSize: "19px" }}>Features</h3>
        <ul className="links">
          <li className="mb-2">
            <Link className="text-dark" to="/billing"> <i className="fa-solid fa-check text-info me-1"></i>Billing</Link>
          </li>
          <li className="mb-2">
            <Link className="text-dark" to="/inventory"> <i className="fa-solid fa-check text-info me-1"></i>Inventory</Link>
          </li>
          <li className="mb-2">
            <Link className="text-dark"to="/menu"> <i className="fa-solid fa-check text-info me-1"></i>Menu</Link>
          </li>
          <li className="mb-2">
            <Link className="text-dark" to="/onlineorder"> <i className="fa-solid fa-check text-info me-1"></i>Online Orde</Link>
          </li>
          <li className="mb-2">
            <Link className="text-dark" to="/reports"> <i className="fa-solid fa-check text-info me-1"></i>Restaurant Reports</Link>
          </li>
          <li className="mb-2">
            <Link className="text-dark" to="/customermanagement"> <i className="fa-solid fa-check text-info me-1"></i>Customer Management</Link>
          </li>
          <li className="mb-2"><Link className="text-dark" to="/customerfeedback"> <i className="fa-solid fa-check text-info me-1"></i>Customer Feedback</Link></li>
          <li className="mb-2"><Link className="text-dark" to="/scan"> <i className="fa-solid fa-check text-info me-1"></i>Scan &amp; Order</Link></li>

          <li className="mb-2"><Link className="text-dark" to="/scan"> <i className="fa-solid fa-check text-info me-1"></i>Scan & Order</Link></li>

         
        </ul>
      </div>
    </div>


              </div>
              {/* Links and Customer Section - Display Side by Side in Mobile */}
              <div className="col-lg-4 col-sm-12 d-flex  flex-wrap">
                {/* Links Section */}
       


                {/* Customer Section */}
                <div className="col-6 mb-3">
                  <div className="single-widget">
                    <h3 className="ms-3 text-info" style={{ fontSize: "19px" }}>Customer</h3>
                    <ul className="links">
                      <li className="mb-2">
                        <Link className="text-dark" to="/book_demo"> <i className="fa-solid fa-check text-info me-1"></i> Book A Demo</Link>
                      </li>
                     
                      <li className="mb-2">
                        <a className="text-dark" href="index.html#"> <i className="fa-solid fa-check text-info me-1"></i>Help and support</a>
                      </li>
                      <li className="mb-2">
                        <Link className="text-dark" to="/order_tracking">  <i className="fa-solid fa-check text-info me-1"></i>Order Tracking</Link>
                      </li>
                      
                      <li className="mb-2">
                        <a className="text-dark" href="https://user.menumitra.com/user_app/Index" target="_blank">  <i className="fa-solid fa-check text-info me-1"></i>UserApp</a>
                      </li>
                      
                    </ul>
                  </div>
                </div>
                <div className="col-6 mb-3">
                <div className="single-widget single-widget-4">
                  <h3 className="ms-3 text-info" style={{ fontSize: "19px" }}>Outlet Type</h3>
                  <ul className="links">
                    <li className="mb-2">
                      <Link className="text-dark" to="/newrestaurant"> <i className="fa-solid fa-check text-info me-1"></i>New Restaurant</Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/finedine"> <i className="fa-solid fa-check text-info me-1"></i>Fine Dine</Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/foodcourts"> <i className="fa-solid fa-check text-info me-1"></i>Food Courts</Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/pizzeria">
                      <i className="fa-solid fa-check text-info me-1"></i>Pizzeria
                      </Link>
                    </li>
                   
                    <li className="mb-2">
                      <Link className="text-dark" to="/cafe">
                      <i className="fa-solid fa-check text-info me-1"></i>Cafe
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/qsr"> <i className="fa-solid fa-check text-info me-1"></i>QSR</Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/bakeries">
                      <i className="fa-solid fa-check text-info me-1"></i> Bakeries
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/icecream"> <i className="fa-solid fa-check text-info me-1"></i>Icecream & Desserts</Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/cloudkitchens"> <i className="fa-solid fa-check text-info me-1"></i>Cloud Kitchens</Link>
                    </li>
                    <li className="mb-2">
                      <Link className="text-dark" to="/largechain">
                      <i className="fa-solid fa-check text-info me-1"></i>Large Chain
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              </div>

              {/* Legal Section */}
              <div className="col-lg-3 col-sm-12 d-flex  flex-wrap">
            
              <div className="col-6 mb-3">
                  <div className="single-widget">
                    <h3 className="ms-3 text-info" style={{ fontSize: "19px" }}>Add-Ons</h3>
                    <ul className="links">
                    <li className="mb-2"><Link className="text-dark " to="/captainapp"> <i className="fa-solid fa-check text-info me-1"></i>Captain App</Link></li>
                    <li className="mb-2"><Link className="text-dark " to="/waiterapp"> <i className="fa-solid fa-check text-info me-1"></i>Waiter App</Link></li>
                <li className="mb-2"><Link className="text-dark " to="/kds"> <i className="fa-solid fa-check text-info me-1"></i>Kitchen Display System (KDS)</Link></li>
           
                <li className="mb-2"><Link className="text-dark " to="/cds"> <i className="fa-solid fa-check text-info me-1"></i>Customer Display System (CDS)</Link></li>
                    
          </ul>
                  </div>
                </div>
                </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
  <div>
    <Link className="text-secondary" to="/terms_conditions">Terms and Conditions</Link>
  </div>
  <div>
    <Link className="text-secondary" to="/privacy_policy">Privacy Policy</Link>
  </div>
  <div>
    <Link className="text-secondary" to="/cookie_policy">Cookie Policy</Link>
  </div>
  <div>
    <Link className="text-secondary" to="/request_data_removal">
      Request Data Removal
    </Link>
  </div>
</div>



          </div>
          
        </section>

        {/* End Footer Top Area */}
        {/* Start Footer Bottom Area */}

        <div className="container bg-white pb-0 mb-2 mt-2">
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
          <span className="ms-2">
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
