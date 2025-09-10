import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";

const BookDemo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Form />
      <Footer />
    </>
  );
};

export default BookDemo;
