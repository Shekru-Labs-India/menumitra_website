import React, { useState } from "react";
import { AutoComplete } from 'primereact/autocomplete'; // Import PrimeReact AutoComplete
import Footer from "./Footer";
import Header from "./Header";
import Form from "./Form";
// FAQ data
const faqs = [
  { question: "How do I use the MenuMitra system?", answer: "Simply log in, add items to the cart, and checkout." },
  { question: "What features does Menu Mitra offer?", answer: "POS, Inventory management, CRM, Order management, and more." },
  { question: "Can I customize the menu?", answer: "Yes, Menu Mitra allows full customization of your restaurant's menu." },
  { question: "Is Menu Mitra mobile-friendly?", answer: "Yes, it works seamlessly on both mobile and tablet devices." },
  { question: "Does Menu Mitra support multi-location?", answer: "Yes, you can manage multiple locations using a single account." },
  { question: "What payment methods are supported?", answer: "Menu Mitra supports various payment gateways including credit/debit cards and UPI." },
  { question: "Can I track my inventory?", answer: "Yes, you can track inventory in real-time through the system." },
  { question: "How do I generate invoices?", answer: "Invoices are generated automatically when an order is completed." },
  { question: "Is there a trial version available?", answer: "Yes, Menu Mitra offers a 14-day free trial for new users." },
];

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFAQ, setSelectedFAQ] = useState(null);

  // Handle autocomplete suggestions
  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    return faqs.filter(faq =>
      faq.question.toLowerCase().includes(inputValue)
    );
  };

  const onSelect = (e) => {
    setSelectedFAQ(e.value);
    setSearchTerm(e.value.question);
  };

  return (
    <div>
  <Header/>
  <section id="pricing-plans" className="xl">
      {/* Search FAQ */}
      <div className="mb-50 text-center d-flex flex-column align-items-center">
  <label className="form-label fs-3">Hello, how can we help?</label>
  
  <div className="position-relative w-50">
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search FAQ..."
      className="form-control search-input rounded ps-5 bg-white"
    />
    <i className="fas fa-search position-absolute" style={{ left: '15px', top: '50%', transform: 'translateY(-50%)' }}></i>
  </div>
</div>





      {/* Display selected FAQ */}
      {selectedFAQ && (
        <div className="mb-4">
          <h3>{selectedFAQ.question}</h3>
          <p>{selectedFAQ.answer}</p>
        </div>
      )}

      {/* Display all FAQs in cards */}
      <div className="container">
        <div className="row">
          {faqs.map((faq, index) => (
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{faq.question}</h5>
                  <p className="card-text">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
<Form/>
      <Footer />
    </div>
  );
};

export default FAQ;
