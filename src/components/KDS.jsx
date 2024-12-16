import React from 'react'
import Header from './Header'
import scan from "../assets/images/scan.jpg"
import Footer from './Footer'

const KDS = () => {
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
            <h2 className="mb-30">Kitchen Display System</h2>
            <p className="mb-30">
              Allow your chef to focus on flavour rather than chasing orders.
              Keep your kitchen running smoothly. Automate the entire
              ticket-keeping process with Ciferon's KDS. This will help you
              serve customers quickly.​
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
            Discover what KDS can do for your outlet
          </h2>
        </div>
        {/* / text-center */}
        <div className="container py-5">
        <div className="row text-center">
            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-book feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Display Orders directly on the kitchen screen</h5>
                <p style={{ color: '#666' }} className="feature-description">Ciferon's KDS allows you to display both online and dine-in orders immediately on your kitchen screen, avoiding confusion.</p>
            </div>
            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-book-open feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Eliminate paper KOT</h5>
                <p style={{ color: '#666' }} className="feature-description">It's time to digitize and remove the paper KOT procedure.</p>
            </div>
            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-book feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Works on Android and Windows</h5>
                <p style={{ color: '#666' }} className="feature-description">Ciferon's KDS works flawlessly on both Android and Windows, allowing you to use whichever platform best suits you and your brand.</p>
            </div>
            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-file-invoice feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Display individual KOT and aggregated item list</h5>
                <p style={{ color: '#666' }} className="feature-description">Your central kitchen will find the procedure easier with the ability to view all KOTs and aggregated item lists of the orders from different tables.</p>
            </div>
            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-qrcode feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Mark food ready from the kitchen display</h5>
                <p style={{ color: '#666' }} className="feature-description">No more shouting from the kitchen when the order is ready; instead, you can change the order status directly from the KDS.</p>
            </div>
            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-mobile-alt feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Increase kitchen productivity</h5>
                <p style={{ color: '#666' }} className="feature-description">Your kitchen productivity will undoubtedly rise when every minor and major detail is shown on a single kitchen display screen, allowing you to make quick decisions and run your kitchen effortlessly.</p>
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
            className="rounded rellax text-center "
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
                    What type of hardware will I need to use KDS?{" "}
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
                    Ciferon’s KDS seamlessly functions on any device running
                    Windows or Android.
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
                    Can I control my online menu directly from KDS?
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
                    Yes, You can mark item out of stock or in stock directly
                    from kitchen via KDS.
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
                    Can I use KDS on multiple devices?
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
                    Certainly! You have the option to assign distinct cooking
                    stations and utilize KDS to display running orders based on
                    each station.
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

export default KDS