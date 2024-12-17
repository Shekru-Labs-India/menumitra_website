import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";

const BookDemo = () => {
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

  return (
    <>
      <Header />
      <div className="container">
      <section id="pricing-plans" className="xl">

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
                    {/* <label htmlFor="contact-city3"><span className="text-danger">*</span>Name </label> */}

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
      </div>
      <Form/>
      <Footer />
    </>
  );
};

export default BookDemo;
