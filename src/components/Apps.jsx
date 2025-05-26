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
      
      <section id="about" className="xl">
            <div className="container">
              <div className="row align-items-end">
                <div className="col-lg-5 tablet-lg-top-30">
                  
                  <div className="video-container mb-4 mb-lg-0">
                    <div className="ratio ratio-16x9">
                      <iframe
                        src="https://www.youtube.com/embed/j2e2stCcICo?autoplay=1&mute=1&loop=1&playlist=j2e2stCcICo"
                        title="MenuMitra Intro Video | Restaurant POS made easy | Shekru Labs India Pvt. Ltd"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="rounded-3 shadow-lg"
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 ">
                

                  <h4 className="mb-30">
                    India's Best Contactless Restaurant Management Software
                  </h4>
                  <p className="mb-4">
                    Billing &amp; KOT, manage inventory &amp; central kitchen,
                    handle online orders, menu management, tables, captain app,
                    collect customer data, discount &amp; offers, accounts,
                    reports and do lot more.
                  </p>
                </div>
              </div>
            </div>
          </section>

      <section className="bg-light py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2>Our Restaurant Management Apps</h2>
              <p className="lead">Complete ecosystem for your restaurant operations</p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <i className="fa-solid fa-mobile-screen fa-3x text-primary mb-3"></i>
                  <h5 className="card-title">Captain App</h5>
                  <p className="card-text">Empower your captains with digital order management and table service tools.</p>
                  <Link to="/captainapp" className="btn btn-outline-primary mt-3">Learn More</Link>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <i className="fa-solid fa-person fa-3x text-primary mb-3"></i>
                  <h5 className="card-title">Waiter App</h5>
                  <p className="card-text">Streamline order taking and service delivery with our waiter-focused app.</p>
                  <Link to="/waiterapp" className="btn btn-outline-primary mt-3">Learn More</Link>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <i className="fa-solid fa-desktop fa-3x text-primary mb-3"></i>
                  <h5 className="card-title">Kitchen Display</h5>
                  <p className="card-text">Optimize kitchen operations with real-time order management system.</p>
                  <Link to="/kds" className="btn btn-outline-primary mt-3">Learn More</Link>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <i className="fa-solid fa-tv fa-3x text-primary mb-3"></i>
                  <h5 className="card-title">Customer Display</h5>
                  <p className="card-text">Enhance customer experience with digital menu and order status displays.</p>
                  <Link to="/cds" className="btn btn-outline-primary mt-3">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Form />
      <Footer />
    </>
  );
};

export default Apps; 