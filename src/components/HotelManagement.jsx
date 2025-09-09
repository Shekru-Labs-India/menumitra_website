import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const HotelManagement = () => {
  return (
    <>
      <Helmet>
        <title>Hotel Management - MenuMitra</title>
        <meta name="description" content="Comprehensive hotel management solutions" />
      </Helmet>
      <Header />
      
      {/* Content will be added later */}
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Hotel Management</h1>
            <p>Content coming soon...</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HotelManagement;
