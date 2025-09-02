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
      <section id="pricing-plans" className="xl pb-100">
        <div className="container-xxl">
          {/* Section Title */}
          <div className="row justify-content-start text-center mb-4">
            <h2 className="fw-bold mb-4">Pricing Plans</h2>
            <h4>Value-packed featured at Wallet-friendly cost</h4>
            <p>
              No hidden costs & no additional charges. Just transparent &
              affordable pricing.
            </p>
          </div>

          {/* Pricing Table */}
          <div className="table-responsive">
            <table className="table table-bordered text-center">
              <thead>
                <tr>
                  <th className="fw-bold text-start  pt-0">
                    <span className="fs-3">Key Features </span>
                    <div
                      className="text-small text-secondary"
                      style={{ fontSize: "0.8rem" }}
                    >
                      Here are the key features
                    </div>
                    <div
                      className="text-small text-secondary"
                      style={{ fontSize: "0.8rem" }}
                    >
                      that highlight our four plans:
                    </div>
                  </th>
                  <th className="fw-bold">
                    <div className="text-secondary fs-3 ">Silver</div>
                    <div className="fs-5"> ₹3,999K</div>
                    <div
                      className="text-small text-secondary"
                      style={{ fontSize: "0.8rem" }}
                    >
                      per year /per outlet
                    </div>
                    <Link to="/book_demo">
                      <button className="btn btn-outline-dark mt-2">
                        Book a Demo
                      </button>
                    </Link>{" "}
                  </th>
                  <th className="fw-bold">
                    <div className="text-warning fs-3">Golden</div>
                    <div className="fs-5"> ₹6,999K</div>
                    <div
                      className="text-small text-secondary"
                      style={{ fontSize: "0.8rem" }}
                    >
                      per year /per outlet
                    </div>
                    <Link to="/book_demo">
                      <button className="btn btn-outline-dark mt-2">
                        Book a Demo
                      </button>
                    </Link>
                  </th>
                  <th className="fw-bold">
                    <div className="text-info fs-3">Platinum</div>
                    <div className="fs-5"> ₹12,999K</div>
                    <div
                      className="text-small text-secondary"
                      style={{ fontSize: "0.8rem" }}
                    >
                      per year /per outlet
                    </div>
                    <Link to="/book_demo">
                      <button className="btn btn-outline-dark mt-2">
                        Book a Demo
                      </button>
                    </Link>
                  </th>
                  <th className="fw-bold">
                    <div className="text-primary fs-3">Diamond</div>
                    <div className="fs-5"> ₹22,999K</div>
                    <div
                      className="text-small text-secondary"
                      style={{ fontSize: "0.8rem" }}
                    >
                      per year /per outlet
                    </div>
                    <Link to="/book_demo">
                      <button className="btn btn-outline-dark mt-2">
                        Book a Demo
                      </button>
                    </Link>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Cloud billing", icons: ["circle-check", "circle-check", "circle-check", "circle-check"], icon: "fa-cloud" },
                  { feature: "Reports", icons: ["circle-check", "circle-check", "circle-check", "circle-check"], icon: "fa-file-invoice" },
                  { feature: "User app (unlimited)", icons: ["circle-check", "circle-check", "circle-check", "circle-check"], icon: "fa-mobile-alt" },
                  { feature: "Owner app", icons: ["circle-check", "circle-check", "circle-check", "circle-check"], icon: "fa-user-tie", note: ["", "(With Mini Printer) (Optional)", "", ""] },
                  { feature: "Call support", icons: ["circle-check", "circle-check", "circle-check", "circle-check"], icon: "fa-phone" },
                  { feature: "Table reservation", icons: ["circle-check", "circle-check", "circle-check", "circle-check"], icon: "fa-calendar-check" },
                  { feature: "KOT", icons: ["circle-check", "circle-check", "circle-check", "circle-check"], icon: "fa-receipt" },
                  { feature: "Table switch", icons: ["circle-check", "circle-check", "circle-check", "circle-check"], icon: "fa-random" },
                  { feature: "2 layer security", icons: ["circle-check", "circle-check", "circle-check", "circle-check"], icon: "fa-lock" },
                  { feature: "Order tracking", icons: ["circle-check", "circle-check", "circle-check", "circle-check"], icon: "fa-route" },
                  { feature: "Account activity log", icons: ["circle-check", "circle-check", "circle-check", "circle-check"], icon: "fa-list-alt" },
                  { feature: "Inventory module", icons: ["xmark", "circle-check", "circle-check", "circle-check"], icon: "fa-boxes" },
                  { feature: "POS", icons: ["xmark", "circle-check", "circle-check", "circle-check"], icon: "fa-cash-register", note: ["", "(Optional)", "", ""] },
                  { feature: "Third party integration", icons: ["xmark", "xmark", "circle-check", "circle-check"], icon: "fa-plug" },
                  { feature: "Waiter", icons: ["xmark", "xmark", "circle-check", "circle-check"], icon: "fa-user-friends", note: ["", "", "(5)", "(Unlimited)"] },
                  { feature: "Captain", icons: ["xmark", "xmark", "circle-check", "circle-check"], icon: "fa-user-tie", note: ["", "", "(1)", "(Unlimited)"] },
                  { feature: "KDS/CDS", icons: ["xmark", "xmark", "circle-check", "circle-check"], icon: "fa-tv" },
                  { feature: "Owner dashboard", icons: ["xmark", "xmark", "circle-check", "circle-check"], icon: "fa-tachometer-alt", note: ["", "", "(Without AI)", "(With AI)"] },
                  { feature: "Personal training", icons: ["xmark", "xmark", "circle-check", "circle-check"], icon: "fa-chalkboard-teacher" },
                  { feature: "Visit support", icons: ["xmark", "xmark", "xmark", "circle-check"], icon: "fa-user-check" },
                  { feature: "Website", icons: ["xmark", "xmark", "xmark", "circle-check"], icon: "fa-globe" },
                  { feature: "AI menu generation", icons: ["xmark", "xmark", "xmark", "circle-check"], icon: "fa-robot" },
                ].map((item, index) => (
                  <tr key={index}>
                    <td className="text-start">
                      <i className={`fa-solid ${item.icon} me-4`}></i>
                      {item.feature}
                    </td>
                    {item.icons.map((icon, i) => (
                      <td key={i}>
                        <i className={`fa-solid fa-${icon} ${icon === "circle-check" ? "text-success" : "text-secondary"}`}></i>
                        {item.note && item.note[i] && (
                          <span className="ms-1 text-secondary" style={{ fontSize: "0.8rem" }}>{item.note[i]}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Note */}
          <div className="container bg-white p-2 ">
            <div className="text-secondary text-center small ">
              Note: The prices on the page might vary based on location. Please
              contact us for details!
            </div>
          </div>
        </div>
      </section>

{/* here we need to add partner program 
we will show our partner program here , show an table ui
two rows in the table , first row is to show how much outlets partner if he onboards outlets , second row is to show how much he will get in commission
*/}

      {/* Partner Program Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <h2 className="fw-bold">MenuMitra Partner Program</h2>
                <p className="text-dark">Join our partner program and earn attractive commissions</p>
              </div>
              
              <div className="card shadow-sm">
                <div className="card-body p-4">
                  <div className="table-responsive">
                                         <table className="table table-hover table-bordered text-center">
                       <thead className="table-primary">
                         <tr>
                           <th scope="col" className="fw-bold fs-3">Outlets</th>
                           <th scope="col" className="fw-bold fs-3">Commission</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr>
                           <td className="fw-bold fs-3">8</td>
                           <td className="fw-bold fs-3 text-success">₹20,000/-</td>
                         </tr>
                         <tr>
                           <td className="fw-bold fs-3">16</td>
                           <td className="fw-bold fs-3 text-success">₹42,000/-</td>
                         </tr>
                       </tbody>
                     </table>
                  </div>
                  
                  <div className="text-center mt-4">
                    <p className="text-dark mb-3">Ready to become a partner?</p>
                    <button className="btn btn-primary btn-lg px-4">
                      Join Partner Program
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="container mt-80">
        <h2 className="text-center fw-bold  " style={{ marginBottom: "60px" }}>
          Simple and reliable POS for all your restaurant needs
        </h2>

        <div className="container">
          <div className="row text-center mt-4 ">
            {/* Clients */}
            <div className="col-12 col-sm-6 col-md-3 mb-4">
              <div className="card card-equal-height">
                <i
                  className="fa-solid fa-users text-dark mb-2 fs-1 mt-4"
                  size="3x"
                />
                <h3 className="text-danger fw-bold mt-2">50+</h3>
                <p>
                  <strong className="text-danger">Clients</strong> across Pune and Mumbai
                </p>
              </div>
            </div>

            {/* Online Order Volume */}
            <div className="col-12 col-sm-6 col-md-3 mb-4">
              <div className="card card-equal-height">
                <i
                  className="fa-solid fa-cart-shopping text-dark mb-2 fs-1 mt-4"
                  size="100"
                />
                <h3 className="text-danger fw-bold mt-2">44%</h3>
                <p>
                  <strong className="text-danger">Online order volume</strong>{" "}
                  processed by MenuMitra
                </p>
              </div>
            </div>

            {/* Bills Processed */}
            <div className="col-12 col-sm-6 col-md-3 mb-4">
              <div className="card card-equal-height">
                <i
                  className="fa-solid fa-receipt text-dark mb-2 fs-1 mt-4"
                  size="3x"
                />
                <h3 className="text-danger fw-bold mt-2">60L+</h3>
                <p>
                  <strong className="text-danger">Bills processed</strong>{" "}
                  everyday hassle free with MenuMitra POS
                </p>
              </div>
            </div>

            {/* Support */}
            <div className="col-12 col-sm-6 col-md-3 mb-4">
              <div className="card card-equal-height">
                <i
                  className="fa-solid fa-phone-volume text-dark mb-2 fs-1 mt-4"
                  size="3x"
                />
                <h3 className="text-danger fw-bold mt-2">24/7</h3>
                <p>
                  <strong className="text-danger">On-call</strong> and on-site
                  support
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <section className="testimonials ">
          <div className="container ">
            <h2 className="text-center mb-4 fw-bold mb-50  ">
              Trusted by some of the best restaurants{" "}
            </h2>
            <div className="row">
              {/* First Testimonial */}
              <div className="col-md-6 mb-4">
                <div className="testimonial-card p-4 bg-white rounded shadow-sm">
                  <p className="testimonial-text mb-4">
                    "MenuMitra has been the POS solution for our 90+ outlets for
                    over two years. And these numbers are proof of how content
                    we are with their services. Especially for a large chain
                    like us, MenuMitra is the one-point data bridge between all
                    the outlets and the owner. Kudos to the team. Recommending
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
                    "MenuMitra has helped me to manage inventory levels and food
                    costs. I can track sales and expenses in real time, which
                    helps me make informed decisions about purchasing and
                    pricing. The system also provides detailed reports, which
                    has helped me reduce waste and optimize my inventory.
                    Overall, I am extremely satisfied with MenuMitra and highly
                    recommend it to anyone looking to streamline their
                    operations and improve their bottom line."
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

      <Form />
      <Footer />
    </>
  );
};

export default Pricing;
