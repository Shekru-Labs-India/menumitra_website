import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const SmartMobileApp = () => {
  return (
    <>
      <Helmet>
        <title>Smart Mobile App - MenuMitra</title>
        <meta name="description" content="Smart mobile application for restaurant management" />
      </Helmet>
      <Header />
      
      {/* Content will be added later */}
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Smart Mobile App</h1>
            <p>Content coming soon...</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SmartMobileApp;
