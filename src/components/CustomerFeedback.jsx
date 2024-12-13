import React from 'react'
import scan from "../assets/images/scan.jpg"
import Header from './Header'
import Footer from './Footer'

const CustomerFeedback = () => {
  return (
    
   <>
   <>

  <Header/>

  <div className="main-container p-0">
    <section id="why-us" className="xl bg-gradient-body">
      <div className="container">
        <div className="row v-center">
          <div className="col-lg-5">
            <img
              src={scan}
              alt=""
              className="rounded rellax"
              data-rellax-speed={2}
              data-rellax-percentage="0.5"
            />
          </div>
          {/* / column */}
          <div className="col-lg-7 tablet-lg-top-30">
            <h2 className="mb-30">Feedback Management</h2>
            <p className="mb-30">
              Personalize your feedback form. Incorporate their expectations.
              Reassure them that their opinions are being considered. Act upon
              them by giving them a memorable dining experience.
            </p>
            <a href="#x" className="btn btn-primary pill mr-5">
              <i className="fas fa-shopping-cart mr-5" />{" "}
              <span>Book a free demo</span>
            </a>
          </div>
          {/* / column */}
        </div>
        {/* / row */}
      </div>
      {/* / container */}
    </section>
    <section id="features" className="xl">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title mb-80">
            Discover what Feedback can do for your outlet
          </h2>
        </div>
        {/* / text-center */}
        <div className="container py-5">
        <div className="row text-center">
            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-book feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Android-supported feedback app</h5>
                <p style={{ color: '#666' }} className="feature-description">User-friendly feedback app for broad Android compatibility, smooth operation across all devices, and improved overall user experience.</p>
            </div>
            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-book-open feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Create feedback links and share by SMS</h5>
                <p style={{ color: '#666' }} className="feature-description">Create personalized feedback links for customers and send them quickly by SMS to increase engagement and acquire useful insights to enhance your services.</p>
            </div>
            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-book feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Feedback via QR codes</h5>
                <p style={{ color: '#666' }} className="feature-description">Implementing a dynamic feedback system by installing QR codes on all tables and counters. Customers can easily scan these QR codes to provide feedback.</p>
            </div>
            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-file-invoice feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Customisable questions</h5>
                <p style={{ color: '#666' }} className="feature-description">Craft and modify questions to your preferences for feedback. Personalize inquiries to generate smart responses.</p>
            </div>
            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-qrcode feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Customer data collection</h5>
                <p style={{ color: '#666' }} className="feature-description">Easily collect customer information like as birthdays and anniversaries via feedback forms and use this information to send personalized alerts.</p>
            </div>
            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-mobile-alt feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Gather and track feedback from third-party applications</h5>
                <p style={{ color: '#666' }} className="feature-description">Gather consumer feedback for online orders processed by a third party, guaranteeing a comprehensive approach to resolving any issues.</p>
            </div>
        </div>
    </div>
        {/* / row */}
      </div>
      {/* / container */}
    </section>
    {/* / features */}
    <div className="container">
      <div className="row v-center">
        <div className="col-lg-5">
          <img
            src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/1652030916333.jpeg"
            alt=""
            className="rounded rellax text-center"
            data-rellax-speed={2}
            data-rellax-percentage="0.5"
            style={{ width: 313, height: 313 }}
          />
        </div>
        {/* / column */}
        <div className="col-lg-7 tablet-lg-top-30">
          <p className="mb-30 mt-3">
            "I've been a Ciferon user for two years, and it has transformed how
            we manage all our Kamat Restaurants locations, automating operations
            from top to bottom. The comprehensive integrations and the dedicated
            support team have been game-changers. I highly recommend Ciferon to
            any restaurant looking to upgrade their operations."​
          </p>
          <h3 className="">Dr. Vikram Kamat </h3>
          <h3>Founder &amp; Chairman, VITS Kamat Group</h3>
        </div>
        {/* / column */}
      </div>
      {/* / row */}
    </div>
    {/* / container */}
    <div className="container relative mt-3">
      <div className="row v-center">
        <div className="col-lg-6 tablet-lg-top-45">
          <img
            src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/leads.png"
             className="rounded rellax text-center"
            style={{ width: 500, height: 520 }}
            alt=""
          />
        </div>
        {/* / column */}
        <div className="col-lg-6">
          <div className="promo-box p-50">
            <h4 className="text-center mb-50">
              Get a personalized free demo by our experts
            </h4>
            <form className="needs-validation" id="form-validation3" noValidate="novalidate">
  <div className="row">
    <div className="col-md-6">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="contact-name3"
          name="inputName3"
          placeholder="Full Name"
          required=""
        />
      </div>
      {/* / form-group */}
    </div>
    {/* / column */}
    
    <div className="col-md-6">
      <div className="form-group">
        <input
          type="number"
          className="form-control"
          id="contact-email3"
          name="inputEmail3"
          placeholder="Mobile Number"
          required=""
        />
      </div>
      {/* / form-group */}
    </div>
    {/* / column */}
    
    <div className="col-md-6">
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          id="contact-email3"
          name="inputEmail3"
          placeholder="Email"
          required=""
        />
      </div>
      {/* / form-group */}
    </div>
    {/* / column */}
    
    <div className="col-md-6">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="contact-email3"
          name="inputEmail3"
          placeholder="City"
          required=""
        />
      </div>
      {/* / form-group */}
    </div>
    {/* / column */}
    
    <div className="col-12">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="contact-subject3"
          name="inputSubject3"
          placeholder="Outlet Name"
        />
      </div>
      {/* / form-group */}
    </div>
    {/* / column */}
    
    {/* Outlet Type and Outlet Status in one row */}
    <div className="col-md-6">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="contact-outlet-type"
          name="inputOutletType"
          placeholder="Outlet Type"
          required=""
        />
      </div>
      {/* / form-group */}
    </div>
    {/* / column */}
    
    <div className="col-md-6">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="contact-outlet-status"
          name="inputOutletStatus"
          placeholder="Outlet Status"
          required=""
        />
      </div>
      {/* / form-group */}
    </div>
    {/* / column */}
    
    <button type="submit" className="btn btn-primary btn-submit">
      Submit
    </button>
  </div>
  {/* / row */}
</form>

            {/* / form-group */}
          </div>
          {/* / promo-box */}
        </div>
        {/* / column */}
      </div>
      {/* / row */}
    </div>
    {/* / container */}
    <section id="faq" className="xl">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title mb-80">Frequently Asked Questions</h2>
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
                    Is it possible to collect feedback without placing an order?
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
                    Absolutely! Your customers can provide feedback on your
                    staff service even if they haven’t placed an order.
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
                    How many methods are available for gathering feedback
                    through the Ciferon POS system?
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
                    Ciferon’s Feedback features let you gather feedback from
                    your customers through an Android app, an SMS link, and a
                    feedback QR code.
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
                    Is there a limit to how much feedback I can collect through
                    SMS?
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
                    You can take unlimited customer feedback!
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
                    Can I customise customer feedback questions?
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
                    You can personalize your messages and organize them based on
                    what works best for you and your customers.
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
                    Can I collect feedback using a QR code?
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
                    Absolutely! You can print a feedback form generated by the
                    POS system on your bill and collect QR-code feedback during
                    payment.
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
    </section>
    {/* / faq */}
  </div>
  {/* / main-container */}

  <Footer/>
</>

   </>

  )
}

export default CustomerFeedback