import React, { useEffect } from "react";
import Header from './Header';
import Footer from './Footer';
import Form from "./Form";
import { Link } from 'react-router-dom';

const Apps = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      
      <section className="py-5 py-xl-8">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-12 col-lg-5">
              <div className="video-container position-relative rounded-4 shadow-lg overflow-hidden mb-4 mb-lg-0">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/j2e2stCcICo?autoplay=1&mute=1&loop=1&playlist=j2e2stCcICo"
                    title="MenuMitra Intro Video | Restaurant POS made easy | Shekru Labs India Pvt. Ltd"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="position-absolute top-0 start-0 w-100 h-100 border-0"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-7">
              <h2 className="display-5 fw-bold mb-4">
                India's Best Contactless Restaurant Management Software
              </h2>
              <p className="lead text-secondary mb-4">
                Billing &amp; KOT, manage inventory &amp; central kitchen,
                handle online orders, menu management, tables, captain app,
                collect customer data, discount &amp; offers, accounts,
                reports and do lot more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 py-xl-8 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Our Restaurant Management Apps</h2>
            <p className="text-secondary fs-5">Complete ecosystem for your restaurant operations</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card bg-white border-0 rounded-4 p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="fa-solid fa-mobile-screen text-white px-2 py-1"></i>
                  </div>
                  <h3 className="h5 mb-0">Captain App</h3>
                </div>
                <div className="mb-3">
                  {/* <h4 className="h2 fw-bold mb-0">2,500+</h4> */}
                  <p className="text-secondary small mb-0">Active Installations</p>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                 
                  <Link to="/captainapp" className="btn btn-link text-primary p-0">Download Now</Link>
                </div>
              </div>
            </div>
            
            {/* <div className="col-md-6 col-lg-3">
              <div className="card bg-white border-0 rounded-4 p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="fa-solid fa-person text-primary"></i>
                  </div>
                  <h3 className="h5 mb-0">Waiter App</h3>
                </div>
                <div className="mb-3">
                  <h4 className="h2 fw-bold mb-0">12,849</h4>
                  <p className="text-secondary small mb-0">Active Users</p>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <span className="badge bg-success-subtle text-success px-3 py-2">+9.2%</span>
                  <Link to="/waiterapp" className="btn btn-link text-primary p-0">Learn More →</Link>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="card bg-white border-0 rounded-4 p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="fa-solid fa-desktop text-primary"></i>
                  </div>
                  <h3 className="h5 mb-0">Kitchen Display</h3>
                </div>
                <div className="mb-3">
                  <h4 className="h2 fw-bold mb-0">1,483</h4>
                  <p className="text-secondary small mb-0">Daily Orders</p>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <span className="badge bg-success-subtle text-success px-3 py-2">+11.9%</span>
                  <Link to="/kds" className="btn btn-link text-primary p-0">Learn More →</Link>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="card bg-white border-0 rounded-4 p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="fa-solid fa-tv text-primary"></i>
                  </div>
                  <h3 className="h5 mb-0">Customer Display</h3>
                </div>
                <div className="mb-3">
                  <h4 className="h2 fw-bold mb-0">84.5%</h4>
                  <p className="text-secondary small mb-0">Customer Satisfaction</p>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <span className="badge bg-success-subtle text-success px-3 py-2">+5.7%</span>
                  <Link to="/cds" className="btn btn-link text-primary p-0">Learn More →</Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <Form />
      <Footer />
    </>
  );
};

export default Apps; 