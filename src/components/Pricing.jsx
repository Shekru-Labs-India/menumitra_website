import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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

        {/* Pricing Section */}
        <section id="pricing-plans" className="xl">
          <div className="container-xxl">
            {/* Section Title */}
            <div className="row justify-content-start text-center mb-4">
              <h2 className="fw-bold mb-4">Pricing Plans</h2>
              <h4>Value-packed featured at
Wallet-friendly cost
</h4>
<p>
No hidden costs & no additional charges. Just
transparent & affordable pricing.</p>
            </div>

           {/* Pricing Table */}
<div className="table-responsive">
  <table className="table table-bordered text-center">
    <thead>
      <tr>
        <th className="fw-bold text-start  pt-0">
        <span className="fs-3">  Key Features </span>
          <div className="text-small text-secondary" style={{ fontSize: "0.8rem" }}>
            Here are the key features 
          </div>
          <div className="text-small text-secondary" style={{ fontSize: "0.8rem" }}>
            that highlight our three plans:
          </div>
        </th>
        <th className="fw-bold">
        <div className="text-success fs-3 " >
          Basic
          </div>
         <div className="fs-5"> ₹5,000</div>
         
          <div className="text-small text-secondary" style={{ fontSize: "0.8rem" }}>
            per year /per outlet
          </div>
          <Link to="/book_demo">
          <button className="btn btn-outline-dark mt-2">Book a Demo</button>
          </Link>       </th>
        <th className="fw-bold">
        <div className="text-danger fs-3" >
          Pro
          </div>
          <div className="fs-5"> ₹10,000</div>
          
          <div className="text-small text-secondary" style={{ fontSize: "0.8rem" }}>
            per year /per outlet
          </div>
          <Link to="/book_demo">
          <button className="btn btn-outline-dark mt-2">Book a Demo</button>
          </Link>
        </th>
        <th className="fw-bold">
        <div className="text-info fs-3" >
          Max
          </div>
          <div className="fs-5"> ₹15,000</div>
         
          <div className="text-small text-secondary" style={{ fontSize: "0.8rem" }}>
            per year /per outlet
          </div>
          {/* Book a Demo Button */}
          <Link to="/book_demo">
          <button className="btn btn-outline-dark mt-2">Book a Demo</button>
          </Link>
        </th>
      </tr>
    </thead>
    <tbody>
  {[
    { feature: "User App", icons: ["check", "xmark", "check"], icon: "fa-user" },
    { feature: "Waiter Login", icons: ["xmark", "xmark", "check"], icon: "fa-sign-in-alt" },
    { feature: "Captain Login", icons: ["check", "xmark", "check"], icon: "fa-user-tie" },
    { feature: "KDS", icons: ["xmark", "xmark", "check"], icon: "fa-tv" },
    { feature: "Owner App", icons: ["check", "check", "check"], icon: "fa-home" },
    { feature: "POS System", icons: ["check", "check", "check"], icon: "fa-cash-register" },
    { feature: "CDS", icons: ["xmark", "xmark", "check"], icon: "fa-cogs" },
    { feature: "MM loyalty Coupons", icons: ["xmark", "check", "check"], icon: "fa-gift" },
    { feature: "Website & Social Media", icons: ["xmark", "check", "check"], icon: "fa-globe" },
    { feature: "Online Order Management", icons: ["xmark", "xmark", "check"], icon: "fa-shopping-cart" },
    { feature: "Feedback Management", icons: ["xmark", "xmark", "check"], icon: "fa-comments" },
   
    { feature: "Support Chat", icons: ["check", "check", "xmark"], icon: "fa-comments" },
    { feature: "24x7 Support", icons: ["xmark", "xmark", "check"], icon: "fa-headset" },
    { feature: "Free Training", icons: ["check", "check", "xmark"], icon: "fa-chalkboard-teacher" },
    { feature: "AI Analysis", icons: ["xmark", "xmark", "check"], icon: "fa-brain" },
    { feature: "Addons", icons: ["", "", ""], icon: "fa-puzzle-piece",bgLight: true },

    { feature: "KDS (TV/Tab)", icons: ["", "", ""], icon: "fa-tablet-alt", noBorder: true },
    { feature: "CDS (TV/Tab)", icons: ["", "", ""], icon: "fa-tv", noBorder: true },
    { feature: "Waiter Attendance", icons: ["", "", ""], icon: "fa-clock", noBorder: true },
    { feature: "Billing Machine", icons: ["", "", ""], icon: "fa-print", noBorder: true },
  ].map((item, index) => (
    <tr
    key={index}
    style={item.bgLight ? { backgroundColor: "#E8E8E880" } : {}}
    className={`${item.noBorder ? "border-0" : ""}`}
  >
    <td className={`text-start ${item.noBorder ? "border-0" : ""}`}>
      <i className={`fa-solid ${item.icon} me-4`}></i>
      {item.feature}
    </td>
    <td className={item.noBorder ? "border-0" : ""}>
      <i className={`fa-solid fa-${item.icons[0]}`}></i>
    </td>
    <td className={item.noBorder ? "border-0" : ""}>
      <i className={`fa-solid fa-${item.icons[1]}`}></i>
    </td>
    <td className={item.noBorder ? "border-0" : ""}>
      <i className={`fa-solid fa-${item.icons[2]}`}></i>
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

      <div className="container">
  <div className="row text-center mt-4 ">
    {/* Clients */}
    <div className="col-12 col-sm-6 col-md-3 mb-4">
      <div className="card card-equal-height">
        <i className="fa-solid fa-users text-dark mb-2 fs-1 mt-4" size="3x" />
        <h3 className="text-danger fw-bold mt-2">75000+</h3>
        <p>
          <strong className="text-danger">Clients</strong> across India, UAE, South Africa & Canada
        </p>
      </div>
    </div>

    {/* Online Order Volume */}
    <div className="col-12 col-sm-6 col-md-3 mb-4">
      <div className="card card-equal-height">
        <i className="fa-solid fa-cart-shopping text-dark mb-2 fs-1 mt-4" size="100" />
        <h3 className="text-danger fw-bold mt-2">44%</h3>
        <p>
          <strong className="text-danger">Online order volume</strong> processed by MenuMitra
        </p>
      </div>
    </div>

    {/* Bills Processed */}
    <div className="col-12 col-sm-6 col-md-3 mb-4">
      <div className="card card-equal-height">
        <i className="fa-solid fa-receipt text-dark mb-2 fs-1 mt-4" size="3x" />
        <h3 className="text-danger fw-bold mt-2">60L+</h3>
        <p>
          <strong className="text-danger">Bills processed</strong> everyday hassle free with MenuMitra POS
        </p>
      </div>
    </div>

    {/* Support */}
    <div className="col-12 col-sm-6 col-md-3 mb-4">
      <div className="card card-equal-height">
        <i className="fa-solid fa-phone-volume text-dark mb-2 fs-1 mt-4" size="3x" />
        <h3 className="text-danger fw-bold mt-2">24/7</h3>
        <p>
          <strong className="text-danger">On-call</strong> and on-site support
        </p>
      </div>
    </div>
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
     
      <Form/>
      <Footer />
    </>
  );
};

export default Pricing;
