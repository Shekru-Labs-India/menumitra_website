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
      
      <Form/>
      <Footer />
    </>
  );
};

export default BookDemo;
