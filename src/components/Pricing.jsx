import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Pricing.css"; // Custom CSS file

const Pricing = () => {
  return (
    <>
      <Header />
      <div className="main-container  bg-light pt-6">
        {/* Pricing Section */}
        <section id="pricing-plans" className=" py-5">
          <div className="container-xxl">
            {/* Section Title */}
            <div className="row justify-content-start text-center mb-4">
              <h2 className="fw-bold">Pricing Plans</h2>
            </div>

            {/* Pricing Table */}
            <div className="row g-2 justify-content-start">
              {/* Features List */}
              <div className="col-lg-3 col-md-6 col-12">
                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="fw-bold">Key Features</h5>
                    <p className="text-muted small">Here are the key features that highlight our three plans:

</p>
                    <ul className="feature-list " style={{marginTop:"90px"}}>
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
                        <li
                          key={index}
                          className={`feature-item text-start ${
                            [8, 9, 10, 11].includes(index) ? "text-danger" : "text-success"
                          }`}
                        >
                          {index >= 8 ? "✖" : "✔"} {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Core Plan */}
              <PricingCard
                title="Core"
                price="₹10,000"
                features={[true, true, true, true, true, true, true, true, false, false, false, false, true, true]}
                buttonStyle="btn-outline-danger"
              />

              {/* Growth Plan */}
              <PricingCard
                title="Growth"
                price="₹20,000"
                isPopular={true}
                features={Array(14).fill(true)}
                buttonStyle="btn-danger"
              />

              {/* Scale Plan */}
              <PricingCard
                title="Scale"
                price="₹30,000"
                features={Array(14).fill(true)}
                buttonStyle="btn-outline-danger"
              />
            </div>

            {/* Show More Button */}
            <div className="text-center mt-4">
              <button className="btn btn-outline-danger px-4">Show More</button>
            </div>

            {/* Note */}
            <div className="text-muted text-center small mt-3">
              Note: The prices on the page might vary based on location. Please contact us for details!
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

// Reusable Pricing Card Component
const PricingCard = ({ title, price, features, isPopular, buttonStyle }) => (
    <div className="col-lg-3 col-md-6 col-12">
      <div className={`card shadow-sm ${isPopular ? "border-primary" : "border-0"}`}>
        <div className="  text-start p-3">
          <h5 className="fw-bold">{title}           {isPopular && <div className="badge rounded-pill bg-success  text-dark mb-2">POPULAR</div>}
          </h5>
          <h3 className="my-3">{price}</h3>
          <p className="text-muted small">per year/per outlet</p>
          <button className={`btn ${buttonStyle} mb-4 w-100 `}>Book A Demo</button>
  
          <ul className="feature-list text-center ">
            {features.map((feature, index) => (
              <li key={index} className={`feature-item ${feature ? "text-success" : "text-danger"}`}>
                {feature ? "✔" : "✖"}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
  

export default Pricing;
