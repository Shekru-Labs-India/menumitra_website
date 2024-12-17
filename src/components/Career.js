import React, { useEffect } from "react";
import Header from './Header';
import Footer from './Footer';
import Form from "./Form";

const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Header />
      <section id="pricing-plans bg-light" className="xl">

<div className='container'>
      <div className="container text-center" style={{ marginTop: "50px", marginBottom: "50px" }}>
        <h1>Coming Soon</h1>
      </div>
      </div>
      </section>
      <Form/>
      <Footer />
    </>
  );
};

export default Career;
