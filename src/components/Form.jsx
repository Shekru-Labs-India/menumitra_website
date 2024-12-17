import React, { useEffect, useState } from "react";

const Form = () => {

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    city: "",
    outletName: "",
    orderType: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Request data
    const data = {
      name: formData.name,
      mobile: formData.mobile,
      outlet_name: formData.outletName,
      outlet_type: formData.orderType,
      city: formData.city,  // Add city to the request data
    };

    try {
      const response = await fetch("https://men4u.xyz/website_api/create_booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setFormData({
            name: "",
            mobile: "",
            city: "",
            outletName: "",
            orderType: "",
          });
      } else {
        // Handle error response
        console.error("Error:", result);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    
   <>
   {/* / container */}
   <div id="faq" className="mt-30">
      <div className="container">
        <div className="text-center">
          <h2 className=" mb-50">Frequently Asked Questions</h2>
        </div>
        {/* / text-center */}
        <div className="row v-center">
          <div className="col-lg-8 tablet-lg-top-30">
            <div
              className="accordion minimal-accordion"
              id="minimal-accordionExample"
            >
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
                    How much time it will take to setup my Ciferon Account?
                    <span>
                      <i className="fas fa-chevron-down" />
                    </span>
                  </button>
                </h2>
                {/* / accordion-header */}
                <div
                  id="minimal-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="minimal-headingOne"
                  data-bs-parent="#minimal-accordionExample"
                >
                  <div className="accordion-body">
                    Getting started with Ciferon is super quick! Our onboarding
                    team is speedy, and all it takes is about 60 minutes to set
                    up your account. Just share the info we need, and you’ll be
                    good to go on your Ciferon adventure!
                  </div>
                  {/* / accordion-body */}
                </div>
                {/* / collapse */}
              </div>
              {/* / accordion-item */}
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
                {/* / accordion-header */}
                <div
                  id="minimal-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="minimal-headingTwo"
                  data-bs-parent="#minimal-accordionExample"
                >
                  <div className="accordion-body">
                    Absolutely! With Ciferon, you can keep tabs on all your
                    orders in real-time, no matter where you are. Just make sure
                    your outlet has a good internet connection, and you’re all
                    set!
                  </div>
                  {/* / accordion-body */}
                </div>
                {/* / collapse */}
              </div>
              {/* / accordion-item */}
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
                {/* / accordion-header */}
                <div
                  id="minimal-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="minimal-headingThree"
                  data-bs-parent="#minimal-accordionExample"
                >
                  <div className="accordion-body">
                    No worries! Ciferon uses a cool hybrid technology that works
                    both online and offline. Even if you’re not connected to the
                    internet, your orders are still recorded. Once you get back
                    online, all your unsynced orders will automatically update,
                    ensuring your data stays safe!
                  </div>
                  {/* / accordion-body */}
                </div>
                {/* / collapse */}
              </div>
              {/* / accordion-item */}
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
                    Which printer is best suitable with Ciferon POS?
                    <span>
                      <i className="fas fa-chevron-down" />
                    </span>
                  </button>
                </h2>
                {/* / accordion-header */}
                <div
                  id="minimal-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="minimal-headingThree"
                  data-bs-parent="#minimal-accordionExample"
                >
                  <div className="accordion-body">
                    Ciferon is awesome because it’s built without any hardware
                    hassles! It plays nice with all the printers out there in
                    the market, so you can use it seamlessly without any
                    compatibility issues. How cool is that?
                  </div>
                  {/* / accordion-body */}
                </div>
                {/* / collapse */}
              </div>
              {/* / accordion-item */}
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
                    Is my data safe with Ciferon POS?
                    <span>
                      <i className="fas fa-chevron-down" />
                    </span>
                  </button>
                </h2>
                {/* / accordion-header */}
                <div
                  id="minimal-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="minimal-headingThree"
                  data-bs-parent="#minimal-accordionExample"
                >
                  <div className="accordion-body">
                    Absolutely, and it’s a firm commitment from us! We value
                    transparency and strong work ethics. Your entire data is in
                    good hands and kept safe and secure in the Ciferon clouds.
                  </div>
                  {/* / accordion-body */}
                </div>
                {/* / collapse */}
              </div>
              {/* / accordion-item */}
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
                    What if I am switching from another POS?
                    <span>
                      <i className="fas fa-chevron-down" />
                    </span>
                  </button>
                </h2>
                {/* / accordion-header */}
                <div
                  id="minimal-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="minimal-headingThree"
                  data-bs-parent="#minimal-accordionExample"
                >
                  <div className="accordion-body">
                    You’re making one of the best decisions for your life! Trust
                    us, it’s a straightforward process. Just share your menu and
                    the info you want to move forward with, and our onboarding
                    team will take care of everything for you. Easy-peasy!
                  </div>
                  {/* / accordion-body */}
                </div>
                {/* / collapse */}
              </div>
              {/* / accordion-item */}
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
                    I have an android machine, can I use it for billing?
                    <span>
                      <i className="fas fa-chevron-down" />
                    </span>
                  </button>
                </h2>
                {/* / accordion-header */}
                <div
                  id="minimal-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="minimal-headingThree"
                  data-bs-parent="#minimal-accordionExample"
                >
                  <div className="accordion-body">
                    Absolutely! Ciferon POS gets along with all operating
                    systems—Windows, iOS, and Android. It’s like a tech-friendly
                    chameleon!
                  </div>
                  {/* / accordion-body */}
                </div>
                {/* / collapse */}
              </div>
              {/* / accordion-item */}
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
                    Does Ciferon team help me to upload my menu?
                    <span>
                      <i className="fas fa-chevron-down" />
                    </span>
                  </button>
                </h2>
                {/* / accordion-header */}
                <div
                  id="minimal-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="minimal-headingThree"
                  data-bs-parent="#minimal-accordionExample"
                >
                  <div className="accordion-body">
                    It’s on us, and we’d love to help! Whether it’s during
                    onboarding or anytime later, feel free to reach out to our
                    support team. They’ll gladly assist you in updating your
                    menu whenever you need. We’ve got your back!
                  </div>
                  {/* / accordion-body */}
                </div>
                {/* / collapse */}
              </div>
              {/* / accordion-item */}
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
                    What about the support?
                    <span>
                      <i className="fas fa-chevron-down" />
                    </span>
                  </button>
                </h2>
                {/* / accordion-header */}
                <div
                  id="minimal-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="minimal-headingThree"
                  data-bs-parent="#minimal-accordionExample"
                >
                  <div className="accordion-body">
                    Count on it! Ciferon’s support is like your 24/7 superhero,
                    always there for you. Day or night, even on holidays and
                    during festivals, our support team is ready to help you and
                    your team. It’s a promise we’re proud to keep!
                  </div>
                  {/* / accordion-body */}
                </div>
                {/* / collapse */}
              </div>
              {/* / accordion-item */}
            </div>
            {/* / accordion */}
          </div>
          {/* / column */}
        </div>
        {/* / row */}
      </div>
      {/* / container */}
    </div>
    <section className="container " >
        <div className="row v-center">
          <div className="col-lg-6 tablet-lg-top-45 d-none d-sm-block">
            <img
              src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/leads.png"
              className="img-fluid w-75 h-auto"
              alt=""
            />
          </div>
          <div className="col-lg-6">
            <div className="promo-box p-50">
              <h4 className="text-start mb-50">Get an Instant demo by our experts</h4>
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
                 <div className="col-md-6"></div>

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
                        <option value="Restaurant">Restaurant</option>
                        <option value="fine_dine">Fine Dine</option>
                        <option value="food_courts">Food Courts</option>
                        <option value="pizzeria">Pizzeria</option>
                        <option value="cafe">Cafe</option>
                        <option value="qsr">QSR</option>
                        <option value="bakeries">Bakeries</option>
                        <option value="icecream">Icecream & Desserts</option>
                        <option value="cloud_kitchens">Cloud Kitchens</option>
                        <option value="large_chain">Large Chain</option>
                      </select>
                    </div>
                  </div>
              
                  <div className="col-12">
                  <button type="submit "disabled= {loading} className="btn btn-primary btn-submit">
  <i className="fas fa-rocket me-2"></i> Submit
</button>

  <p className="mt-1 text-primary text-center" style={{ fontSize: '14px' }}>
    We don’t spam  call.
  </p>
</div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* / container */}
   </>

  )
}

export default Form