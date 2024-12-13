import React from 'react'
import scan from "../assets/images/scan.jpg"
import Header from './Header'
import Footer from './Footer'


const CaptainApp = () => {
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
            <h2 className="mb-30">
              Captain Ordering App to take punch instantly
            </h2>
            <p className="mb-30">
              Introducing the Captain Ordering App by Ciferon—an Android
              application empowering your staff to seamlessly take customer
              orders, process payments directly at the table, and provide
              intelligent food recommendations.​
            </p>
            <a href="#x" className="btn btn-primary pill mr-5">
              <i className="fas fa-shopping-cart mr-5" /> <span>Book a Free Demo</span>
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
            Discover what Captain app can do for your outlet
          </h2>
        </div>
        {/* / text-center */}
        <div className="container py-5">
        <div className="row text-center">
            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-book feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Works with multiple devices</h5>
                <p style={{ color: '#666' }} className="feature-description">Multiple devices synchronize effortlessly with each other & POS, increasing operational efficiency and allowing for real-time updates and optimized processes.</p>
            </div>
            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-book-open feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">AI based menu recommendation</h5>
                <p style={{ color: '#666' }} className="feature-description">AI-powered recommendations help improve upselling techniques by providing tailored options based on consumer preferences.</p>
            </div>
            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-book feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Works without internet</h5>
                <p style={{ color: '#666' }} className="feature-description">The Captain app's offline feature offers seamless functionality without online connectivity, allowing users to complete tasks and access features even without the internet.</p>
            </div>
            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-file-invoice feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Easy UPI payments</h5>
                <p style={{ color: '#666' }} className="feature-description">The Captain app enables smooth transactions with quick and efficient UPI and wallet payment choices, resulting in a speedy and user-friendly experience.</p>
            </div>
            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-qrcode feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Contactless payments</h5>
                <p style={{ color: '#666' }} className="feature-description">The Captain app enables smooth QR-based transactions under INR 2000, providing consumers with a convenient and quick payment method.</p>
            </div>
            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-mobile-alt feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Works on android</h5>
                <p style={{ color: '#666' }} className="feature-description">User-friendly Android app provides broad compatibility, seamless operation across all platforms, and a better overall user experience.</p>
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
                    On how many devices does Ciferon's captain app support?{" "}
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
                    You have the flexibility to operate the captain app on
                    various Android-based tablets and mobile phones!
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
                    It Ciferon Captain App also available on iOS?{" "}
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
                    Yes, Ciferon Captain App is compatible with both iOS and
                    Android.
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
                    Does it work in offline mode as well?{" "}
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
                    Yes, you can use it as online or offline as per your
                    requirement
                  </div>
                  {/* / accordion-body */}
                </div>
                {/* / collapse */}
              </div>
              {/* / accordion-item */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="minimal-headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#minimal-collapseFour"
                    aria-expanded="false"
                    aria-controls="minimal-collapseFour"
                  >
                    Can I restrict the discounts, settlements, and other thing
                    from captains?{" "}
                    <span>
                      <i className="fas fa-chevron-down" />
                    </span>
                  </button>
                </h2>
                {/* / accordion-header */}
                <div
                  id="minimal-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="minimal-headingFour"
                  data-bs-parent="#minimal-accordionExample"
                >
                  <div className="accordion-body">
                    It’s fully customisable, as you can restrict the things as
                    per your operations from settings.
                  </div>
                  {/* / accordion-body */}
                </div>
                {/* / collapse */}
              </div>
              {/* / accordion-item */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="minimal-headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#minimal-collapseFour"
                    aria-expanded="false"
                    aria-controls="minimal-collapseFour"
                  >
                    Can I see the customer complete information on captain app?{" "}
                    <span>
                      <i className="fas fa-chevron-down" />
                    </span>
                  </button>
                </h2>
                {/* / accordion-header */}
                <div
                  id="minimal-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="minimal-headingFour"
                  data-bs-parent="#minimal-accordionExample"
                >
                  <div className="accordion-body">
                    Once your enter the customer number, you’ll able to see the
                    complete customer information, such their food behaviours,
                    last visit, average spendings and more
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

export default CaptainApp