import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Pricing.css"; // Custom CSS file
import Form from "./Form";

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="main-container bg-light pt-6">
        {/* Pricing Section */}
        <section id="pricing-plans" className="py-5">
          <div className="container-xxl">
            {/* Section Title */}
            <div className="row justify-content-start text-center mb-4">
              <h2 className="fw-bold">Pricing Plans</h2>
              <p>Value-packed featured at
Wallet-friendly cost
No hidden costs & no additional charges. Just
transparent & affordable pricing.</p>
            </div>

            {/* Pricing Table */}
            <div className="table-responsive">
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th className="fw-bold">
                      Key Features
                      <div className="text-small" style={{ fontSize: "0.8rem" }}>
                        Here are the key features that highlight our three plans:
                      </div>
                    </th>
                    <th className="fw-bold">
                      Core
                      <div className="text-small" style={{ fontSize: "2rem" }}>
                        ₹10,000
                      </div>
                      <div className="text-small" style={{ fontSize: "0.8rem" }}>
                        per year /per outlet
                      </div>
                    </th>
                    <th className="fw-bold">
                      Growth
                      <div className="text-small" style={{ fontSize: "2rem" }}>
                        ₹20,000
                      </div>
                      <div className="text-small" style={{ fontSize: "0.8rem" }}>
                        per year /per outlet
                      </div>
                    </th>
                    <th className="fw-bold">
                      Scale
                      <div className="text-small" style={{ fontSize: "2rem" }}>
                        ₹30,000
                      </div>
                      <div className="text-small" style={{ fontSize: "0.8rem" }}>
                        per year /per outlet
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Cloud billing",
                    "Inventory module",
                    "80+ reports",
                    "200+ third-party integrations",
                    "Unlimited-user rights",
                    "Unlimited cash register",
                    "Central kitchen module",
                    "Multi-terminal billing",
                    "Scan & order app",
                    "Captain ordering app",
                    "Petpooja loyalty",
                    "Online order reconciliation",
                    "24x7 support",
                    "Free training",
                  ].map((feature, index) => (
                    <tr key={index}>
                      <td>{feature}</td>
                      <td>
                        {index < 8 ? (
                          <i className="fa-solid fa-check text-success"></i>
                        ) : (
                          <i className="fa-solid fa-xmark text-danger"></i>
                        )}
                      </td>
                      <td>
                        {index < 14 ? (
                          <i className="fa-solid fa-check text-success"></i>
                        ) : (
                          <i className="fa-solid fa-xmark  text-danger"></i>
                        )}
                      </td>
                      <td>
                        {index < 14 ? (
                          <i className="fa-solid fa-check text-success"></i>
                        ) : (
                          <i className="fa-solid fa-xmark  text-danger"></i>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Note */}
            <div className="container bg-white p-2 ">
            <div className="text-secondary text-center small " >
              Note: The prices on the page might vary based on location. Please contact us for details!
            </div>
            </div>
          </div>
        </section>
        <div className="container ">
  <h2 className="text-center fw-bold  "style={{marginBottom:"60px"}}>
        Simple and reliable POS for all your restaurant needs
      </h2>

      {/* Statistics Section */}
      <div className="row text-center mt-4">
        {/* Clients */}
        <div className="col-md-3 mb-4">
          <i className="fa-solid fa-users text-dark mb-2 fs-1"size="3x" />
     

          <h3 className="text-danger fw-bold mt-2">75000+</h3>
          <p className="">
            <strong>Clients</strong> across India, UAE, South Africa & Canada
          </p>
        </div>
        <div className="col-md-3 mb-4">
          <i  className="fa-solid fa-cart-shopping text-dark mb-2 fs-1" size="100"  />
          <h3 className="text-danger fw-bold mt-2">44%</h3>
          <p className="">
            <strong>Online order volume</strong> processed by MenuMitra
          </p>
        </div>

        {/* Bills Processed */}
        <div className="col-md-3 mb-4">
          <i className="fa-solid fa-receipt text-dark mb-2 fs-1"size="3x"  />
       
          <h3 className="text-danger fw-bold mt-2">60L+</h3>
          <p className="">
            <strong>Bills processed</strong> everyday hassle free with MenuMitra POS
          </p>
        </div>

        {/* Support */}
        <div className="col-md-3 mb-4">
          <i className="fa-solid fa-phone-volume text-dark mb-2 fs-1" size="3x" />
          <h3 className="text-danger fw-bold mt-2">24/7</h3>
          <p className="">
            <strong>On-call</strong> and on-site support
          </p>
        </div>
        </div>

        



{/* Testimonials Section */}
<section className="testimonials py-5">
  <div className="container">
  <h2 className="text-center mb-4 fw-bold  ">
  Trusted by some of the best restaurants      </h2>
    <div className="row">
      {/* First Testimonial */}
      <div className="col-md-6 mb-4">
        <div className="testimonial-card p-4 bg-white rounded shadow-sm">
         
          <p className="testimonial-text mb-4">
            "MenuMitra has been the POS solution for our 90+ outlets for over two years. 
            And these numbers are proof of how content we are with their services. 
            Especially for a large chain like us, Petpooja is the one-point data bridge 
            between all the outlets and the owner. Kudos to the team. Recommending 
            MenuMitra to everyone!"
          </p>
          <div className="testimonial-author d-flex align-items-center">
           
            <div>
              <h5 className="mb-0">Jolly Christian</h5>
              <p className="text-muted mb-0">General Manager</p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Testimonial */}
      <div className="col-md-6 mb-4">
        <div className="testimonial-card p-4 bg-white rounded shadow-sm">
         
          <p className="testimonial-text mb-4">
            "MenuMitra has helped me to manage inventory levels and food costs. I can 
            track sales and expenses in real time, which helps me make informed decisions 
            about purchasing and pricing. The system also provides detailed reports, 
            which has helped me reduce waste and optimize my inventory. Overall, I am 
            extremely satisfied with MenuMitra and highly recommend it to anyone looking 
            to streamline their operations and improve their bottom line."
          </p>
          <div className="testimonial-author d-flex align-items-center">
           
            <div>
              <h5 className="mb-0">Jaipratap Singh</h5>
              <p className="text-muted mb-0">Managing Director</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ... existing code ... */}
        </div>
      </div>
      <Form/>
      <Footer />
    </>
  );
};

export default Pricing;
