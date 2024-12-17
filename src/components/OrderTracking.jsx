import React, { useEffect, useState } from "react";
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import Form from "./Form";

const OrderTracking = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [orderStatus, setOrderStatus] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  // Function to handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    // Allow only digits and limit to 6 characters (or any length required for order number)
    if (/^\d*$/.test(value) && value.length <= 6) {
      setOrderNumber(value);
      // Enable the button if the order number is exactly 6 digits
      setIsButtonEnabled(value.length > 0);
    }
  };

  // Function to handle order tracking
  const handleTrackOrder = async () => {
    try {
      // Sending a POST request to get the order status
      const response = await axios.post(`https://men4u.xyz/website_api/get_order_status`, {
        order_number: orderNumber,
      });

      // Handle the response
      if (response.status === 200 && response.data.st === 1) {
        setOrderStatus(response.data.order_status);
      } else {
        setOrderStatus("Order not found or error occurred.");
      }
    } catch (error) {
      console.error('Error fetching order status:', error);
      setOrderStatus("Failed to fetch order status.");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <section id="pricing-plans" className="xl">
        <div className="container bg-light">
          <h2 className="text-center mb-50">Order Tracking</h2>
          <p className="text-center ">
            Please enter your order number to track its status. Once submitted, you will receive real-time updates on your order.
          </p>

          <div className="d-flex justify-content-center">
            <input
              type="text"
              className="form-control my-3 bg-white w-50"
              placeholder="Enter order number"
              value={orderNumber}
              onChange={handleInputChange}
            />
          </div>

          <div className="text-center">
            <button
              className="btn btn-primary"
              onClick={handleTrackOrder}
              disabled={!isButtonEnabled}
            >
              Track Order
            </button>
          </div>

          {/* Order Status */}
          {orderStatus && (
            <div className="mt-4 text-center">
              <h4 className="text-capitalize">Order Status: {orderStatus}</h4>
            </div>
          )}
        </div>
      </section>
      <Form />
      <Footer />
    </>
  );
};

export default OrderTracking;
