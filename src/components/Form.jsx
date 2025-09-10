import React, { useEffect, useState } from "react";
import './Form.css';
import { useLocation } from "react-router-dom";
import ReCAPTCHA from 'react-google-recaptcha';

// Constants
const ROUTES = {
  BOOK_DEMO: "/book_demo"
};

// Custom hook for page-specific logic
const usePageLayout = () => {
  const location = useLocation();
  
  return {
    showFAQ: location.pathname !== ROUTES.BOOK_DEMO,
    isBookDemoPage: location.pathname === ROUTES.BOOK_DEMO,
  };
};

// Separate components for better organization
const FAQ = () => (
      <div id="faq" className="mt-30">
        <div className="container">
          <div className="text-center">
        <h2 className="mb-50">Frequently Asked Questions</h2>
          </div>
          {/* / text-center */}
          <div className="row h-center">
            <div className="col-lg-6 tablet-lg-top-30">
              <div
                className="accordion minimal-accordion"
                id="minimal-accordionExample1"
              >
                {/* First 5 accordion items */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="minimal-headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#minimal-collapseOne"
                      aria-expanded="true"
                      aria-controls="minimal-collapseOne"
                    >
                      How much time it will take to setup my MenuMitra Account?
                      <span>
                        <i className="fas fa-chevron-down" />
                      </span>
                    </button>
                  </h2>
                  <div
                    id="minimal-collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="minimal-headingOne"
                    data-bs-parent="#minimal-accordionExample1"
                  >
                    <div className="accordion-body">
                      Getting started with MenuMitra is super quick! Our
                      onboarding team is speedy, and all it takes is about 60
                      minutes to set up your account. Just share the info we
                      need, and you'll be good to go on your MenuMitra adventure!
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="minimal-headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#minimal-collapseTwo"
                      aria-expanded="false"
                      aria-controls="minimal-collapseTwo"
                    >
                      Can I track my orders in real time?
                      <span>
                        <i className="fas fa-chevron-down" />
                      </span>
                    </button>
                  </h2>
                  <div
                    id="minimal-collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="minimal-headingTwo"
                    data-bs-parent="#minimal-accordionExample1"
                  >
                    <div className="accordion-body">
                      Absolutely! With MenuMitra, you can keep tabs on all your
                      orders in real-time, no matter where you are. Just make
                      sure your outlet has a good internet connection, and
                      you're all set!
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="minimal-headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#minimal-collapseThree"
                      aria-expanded="false"
                      aria-controls="minimal-collapseThree"
                    >
                      Does it required continues internet to punch the bills?
                      <span>
                        <i className="fas fa-chevron-down" />
                      </span>
                    </button>
                  </h2>
                  <div
                    id="minimal-collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="minimal-headingThree"
                    data-bs-parent="#minimal-accordionExample1"
                  >
                    <div className="accordion-body">
                      No worries! MenuMitra uses a cool hybrid technology that
                      works both online and offline. Even if you're not
                      connected to the internet, your orders are still recorded.
                      Once you get back online, all your unsynced orders will
                      automatically update, ensuring your data stays safe!
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="minimal-headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#minimal-collapseFour"
                      aria-expanded="false"
                      aria-controls="minimal-collapseFour"
                    >
                      Which printer is best suitable with MenuMitra POS?
                      <span>
                        <i className="fas fa-chevron-down" />
                      </span>
                    </button>
                  </h2>
                  <div
                    id="minimal-collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="minimal-headingFour"
                    data-bs-parent="#minimal-accordionExample1"
                  >
                    <div className="accordion-body">
                      MenuMitra is awesome because it's built without any hardware
                      hassles! It plays nice with all the printers out there in
                      the market, so you can use it seamlessly without any
                      compatibility issues. How cool is that?
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 tablet-lg-top-30">
              <div
                className="accordion minimal-accordion"
                id="minimal-accordionExample2"
              >
                {/* Second 5 accordion items */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="minimal-headingSix">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#minimal-collapseSix"
                      aria-expanded="false"
                      aria-controls="minimal-collapseSix"
                    >
                      What if I am switching from another POS?
                      <span>
                        <i className="fas fa-chevron-down" />
                      </span>
                    </button>
                  </h2>
                  <div
                    id="minimal-collapseSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="minimal-headingSix"
                    data-bs-parent="#minimal-accordionExample2"
                  >
                    <div className="accordion-body">
                      You're making one of the best decisions for your life!
                      Trust us, it's a straightforward process. Just share your
                      menu and the info you want to move forward with, and our
                      onboarding team will take care of everything for you.
                      Easy-peasy!
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="minimal-headingSeven">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#minimal-collapseSeven"
                      aria-expanded="false"
                      aria-controls="minimal-collapseSeven"
                    >
                      I have an android machine, can I use it for billing?
                      <span>
                        <i className="fas fa-chevron-down" />
                      </span>
                    </button>
                  </h2>
                  <div
                    id="minimal-collapseSeven"
                    className="accordion-collapse collapse"
                    aria-labelledby="minimal-headingSeven"
                    data-bs-parent="#minimal-accordionExample2"
                  >
                    <div className="accordion-body">
                      Absolutely! MenuMitra POS gets along with all operating
                      systems—Windows, iOS, and Android. It's like a
                      tech-friendly chameleon!
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="minimal-headingEight">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#minimal-collapseEight"
                      aria-expanded="false"
                      aria-controls="minimal-collapseEight"
                    >
                      Does MenuMitra team help me to upload my menu?
                      <span>
                        <i className="fas fa-chevron-down" />
                      </span>
                    </button>
                  </h2>
                  <div
                    id="minimal-collapseEight"
                    className="accordion-collapse collapse"
                    aria-labelledby="minimal-headingEight"
                    data-bs-parent="#minimal-accordionExample2"
                  >
                    <div className="accordion-body">
                      It's on us, and we'd love to help! Whether it's during
                      onboarding or anytime later, feel free to reach out to our
                      support team. They'll gladly assist you in updating your
                      menu whenever you need. We've got your back!
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="minimal-headingNine">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#minimal-collapseNine"
                      aria-expanded="false"
                      aria-controls="minimal-collapseNine"
                    >
                      What about the support?
                      <span>
                        <i className="fas fa-chevron-down" />
                      </span>
                    </button>
                  </h2>
                  <div
                    id="minimal-collapseNine"
                    className="accordion-collapse collapse"
                    aria-labelledby="minimal-headingNine"
                    data-bs-parent="#minimal-accordionExample2"
                  >
                    <div className="accordion-body">
                      Count on it! MenuMitra's support is like your 24/7
                      superhero, always there for you. Day or night, even on
                      holidays and during festivals, our support team is ready
                      to help you and your team. It's a promise we're proud to
                      keep!
                    </div>
                  </div>
                </div>
                {/* <div className="accordion-item">
                  <h2 className="accordion-header" id="minimal-headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#minimal-collapseFive"
                      aria-expanded="false"
                      aria-controls="minimal-collapseFive"
                    >
                      Is my data safe with MenuMitra POS?
                      <span>
                        <i className="fas fa-chevron-down" />
                      </span>
                    </button>
                  </h2>
                  <div
                    id="minimal-collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="minimal-headingFive"
                    data-bs-parent="#minimal-accordionExample1"
                  >
                    <div className="accordion-body">
                      Absolutely, and it's a firm commitment from us! We value
                      transparency and strong work ethics. Your entire data is
                      in good hands and kept safe and secure in the MenuMitra
                      clouds.
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* / container */}
      </div>
);

const BookingForm = ({ 
  className, 
  formData, 
  loading, 
  handleChange, 
  handleSubmit,
  recaptchaValue,
  handleRecaptchaChange,
  handleRecaptchaExpired,
  handleRecaptchaError,
  isFormValid
}) => (
  <section className={className}>
        <div className="row h-center">
          <div className="col-lg-6 tablet-lg-top-45 d-none d-sm-block">
            <img
              src={require("../assets/images/scheduale-form_md.jpg")}
              className="img-fluid w-75 h-auto"
              alt="Booking illustration"
            />
          </div>
          <div className="col-lg-6">
            <div className="promo-box">
              <h4 className="text-start mb-50">
                Get an Instant demo by our experts
              </h4>
              <form
                className="needs-validation"
                id="form-validation3"
                noValidate="novalidate"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="contact-name3"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="* Full Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="number"
                        className="form-control"
                        id="contact-email3"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="* Mobile Number"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="* Email Address"
                        required
                        autoComplete="email"
                      />
                    </div>
                  </div>
                
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="contact-email3"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="* City"
                        required
                      />
                    </div>
                  </div>
                
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="contact-subject3"
                        name="outletName"
                        value={formData.outletName}
                        onChange={handleChange}
                        placeholder="* Outlet Name"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <select
                        className="form-control"
                        id="contact-order-type"
                        name="orderType"
                        value={formData.orderType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">* Outlet Type</option>
                        <option value="bakery">Bakery</option>
                        <option value="cafe">Cafe</option>
                        <option value="cake_shop">Cake Shop</option>
                        <option value="canteen">Canteen</option>
                        <option value="hotel">Hotel</option>
                        <option value="mess">Mess</option>
                        <option value="outlet">Outlet</option>
                      </select>
                    </div>
                  </div>

                  {/* reCAPTCHA */}
                  <div className="col-md-12">
                    <div className="form-group">
                      <ReCAPTCHA
                        sitekey="6LfDN8QrAAAAACkV7GESHNgzTB5C6jKWNVMBACkR"
                        onChange={handleRecaptchaChange}
                        onExpired={handleRecaptchaExpired}
                        onError={handleRecaptchaError}
                      />
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-12 text-start">
                    <button
                      type="submit "
                      disabled={loading || !isFormValid()}
                      className={`btn ${isFormValid() ? "btn-primary" : "btn-light"} btn-submit px-2`}
                    >
                      <i className="fas fa-rocket me-2"></i> Submit
                    </button>

                    <p
                      className="mt-1 text-dark text-center"
                      style={{ fontSize: "14px" }}
                    >
                      We don't spam call.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
);

// Styles object
const styles = {
  bookDemoContainer: `
    .form-container {
      margin-top: var(--spacing-top, 0);
    }
    
    @media (max-width: 768px) {
      .form-container {
        --spacing-top: 80px;
      }
    }
    
    @media (min-width: 769px) {
      .form-container {
        --spacing-top: 100px;
      }
    }
  `
};

const Form = () => {
  const { showFAQ, isBookDemoPage } = usePageLayout();
  const [loading, setLoading] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    city: "",
    outletName: "",
    orderType: "",
    email: "",
  });

  // Form validation function
  const isFormValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return (
      formData.name.trim().length > 0 &&
      formData.mobile.trim().length === 10 &&
      formData.email.trim().length > 0 &&
      emailRegex.test(formData.email) &&
      formData.city.trim().length > 0 &&
      formData.outletName.trim().length > 0 &&
      formData.orderType.trim().length > 0
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === "mobile") {
      // Allow only 10 digits, starting from 6-9
      if (/^[6-9][0-9]{0,9}$/.test(value) || value === "") {
        setFormData({ ...formData, [name]: value });
      }
    } else if (name === "city") {
      // Allow only letters and spaces, max length 20
      if (/^[A-Za-z\s]{0,20}$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else if (name === "name") {
      // Allow only letters and spaces
      if (/^[A-Za-z\s]*$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else if (name === "email") {
      // Allow all input for email - validation will happen on submit
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // reCAPTCHA handlers
  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleRecaptchaExpired = () => {
    setRecaptchaValue(null);
  };

  const handleRecaptchaError = () => {
    setRecaptchaValue(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate email format before submission
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      setLoading(false);
      return;
    }

    // Request data
    const data = {
      name: formData.name,
      mobile: formData.mobile,
      outlet_name: formData.outletName,
      outlet_type: formData.orderType,
      city: formData.city,
      email: formData.email,
    };

    try {
      const response = await fetch("https://men4u.xyz/v2/website_api/create_booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Success - reset form
        setFormData({
          name: "",
          mobile: "",
          city: "",
          outletName: "",
          orderType: "",
          email: "",
        });
      } else {
        // Handle error response
        const errorData = await response.json();
        console.error("Error:", errorData);
      }
    } catch (error) {
      console.error("Request failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{styles.bookDemoContainer}</style>
      
      {showFAQ && <FAQ />}
      
      <BookingForm 
        className={`container form-container ${isBookDemoPage ? "has-top-margin" : ""}`}
        formData={formData}
        loading={loading}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        recaptchaValue={recaptchaValue}
        handleRecaptchaChange={handleRecaptchaChange}
        handleRecaptchaExpired={handleRecaptchaExpired}
        handleRecaptchaError={handleRecaptchaError}
        isFormValid={isFormValid}
      />
    </>
  );
}

export default Form