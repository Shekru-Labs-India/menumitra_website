import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
const Inventory = () => {
  return (
    
  <>
    <Helmet>
        {/* Meta Tags for SEO */}
        <meta name="keywords" content="Restaurant POS, Menu Mitra, Restaurant Management, Online Ordering, CRM, Inventory Management" />
        <meta name="description" content="Menu Mitra - Simplifying restaurant management with smart POS features. Manage orders, inventory, CRM, and reports all in one place." />

        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta http-equiv="pragma" content="no-cache" />
        <meta http-equiv="expires" content="never" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        <meta name="author" content="Menu Mitra" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="web" />
        <meta name="rating" content="general" />
        <meta name="robots" content="index, follow" />
        <meta name="apple-mobile-web-app-capable" content="YES" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="identifier-url" content="https://menumitra.com" />
        <meta name="geo.placename" content="India" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

        <link rel="canonical" href="https://menumitra.com" />
        <link rel="shortlink" href="https://menumitra.com" />

        {/* Open Graph Meta Tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Menu Mitra | Restaurant POS and Management" />
        <meta property="og:description" content="Menu Mitra offers smart restaurant POS features to manage orders, inventory, and customer relations, empowering restaurant owners." />
        <meta property="og:url" content="https://menumitra.com" />
        <meta property="og:site_name" content="Menu Mitra" />
        <meta property="article:publisher" content="https://www.facebook.com/menumitra" />
        <meta property="article:updated_time" content="2024-12-13" />
        <meta property="og:image" itemprop="image" content="https://menumitra.com/assets/menu_mitra_image.jpg" />
        <meta property="og:image:url" content="https://menumitra.com/assets/menu_mitra_image.jpg" />
        <meta property="og:image:secure" content="https://menumitra.com/assets/menu_mitra_image.jpg" />
        <meta property="og:image:secure_url" content="https://menumitra.com/assets/menu_mitra_image.jpg" />
        <meta property="og:image:alt" content="Menu Mitra Image" />
        <meta property="og:image:width" content="720" />
        <meta property="og:image:height" content="602" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Menu Mitra | Restaurant POS and Management" />
        <meta name="twitter:description" content="Menu Mitra offers restaurant management solutions with POS, CRM, inventory, and order management. Learn more about our services." />
        <meta name="twitter:image" content="https://menumitra.com/assets/menu_mitra_image.jpg" />
      </Helmet>
  <>
  <Header/>


  <div className="main-container p-0">
    <section id="why-us" className="xl bg-gradient-body">
      <div className="container">
        <div className="row v-center">
          <div className="col-lg-5">
            <img
              src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/post5.png"
              alt=""
              className="rounded rellax"
              data-rellax-speed={2}
              data-rellax-percentage="0.5"
            />
          </div>
          {/* / column */}
          <div className="col-lg-7 tablet-lg-top-30">
            <h2 className="mb-30">
              Most user-friendly Inventory Management Software
            </h2>
            <p className="mb-30">
              Easily keep track of your inventory with item-by-item auto-deduct,
              fast low-stock warnings, daily closing reports, and restocking raw
              materials as needed.​
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
    <div className="container py-5">
      <h2 className="text-center">
        Discover what Ciferon can do for your inventory
      </h2>
      <div className="row justify-content-center">
        {/* Card 1 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card p-4 " style={{ backgroundColor: "#ecf7ec" }}>
            <img
              src="	https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Raw-Material-Management-2.png"
              alt="Card Image"
              className="card-img-top"
            />
            <div className="card-body">
              <h6 className="card-title">Raw Material Management</h6>
              <p className="card-text">
                Create material list, assign vendors to them, check the
                real-time stock status, get the alerts of low stock and repots
              </p>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card p-4 " style={{ backgroundColor: "#ecf7ec" }}>
            <img
              src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Multi-Stage-Recipe-Management-1.png"
              alt="Card Image"
              className="card-img-top"
            />
            <div className="card-body">
              <h6 className="card-title">Multi-Stage Recipe Management</h6>
              <p className="card-text">
                something partially cooked? no worries, prepare recipes for that
                then add those recipe to the menu item, it will automatically
                handle the entire inventory​
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        {/* Card 1 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card p-4 " style={{ backgroundColor: "#ecf7ec" }}>
            <img
              src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Central-Kitchen-Module-1.png"
              alt="Card Image"
              className="card-img-top"
            />
            <div className="card-body">
              <h6 className="card-title">Central Kitchen Module</h6>
              <p className="card-text">
                Centralise recipes, items controls, vendors lists, accounting
                &amp; balances, purchase order, indent, material transfer, good
                receipt notes (GRN) and do lot more
              </p>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card" style={{ backgroundColor: "#ecf7ec" }}>
            <img
              src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Purchase-Order-1.png"
              alt="Card Image"
              className="card-img-top"
            />
            <div className="card-body">
              <h6 className="card-title">Purchase Order</h6>
              <p className="card-text">
                you can create the purchase orders, send to the vendors or
                central kitchen, track &amp; control their status, convert to
                invoice and process​
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        {/* Card 1 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card" style={{ backgroundColor: "#ecf7ec" }}>
            <img
              src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Minimum-Stock-Alerts-1.png"
              alt="Card Image"
              className="card-img-top"
            />
            <div className="card-body">
              <h6 className="card-title">Minimum Stock Alerts</h6>
              <p className="card-text">
                Running out of stock? we can save you from this, set the minimum
                level of each material, so whenever it hits the level, assigned
                person or owner will get a instant alert
              </p>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card " style={{ backgroundColor: "#ecf7ec" }}>
            <img
              src="	https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Live-Food-Costing-Reports.png"
              alt="Card Image"
              className="card-img-top"
            />
            <div className="card-body">
              <h6 className="card-title">Live Food Costing Reports</h6>
              <p className="card-text">
                The potato cost is not fixed, it changes every week! so that
                your recipe cost will affect. Ciferon gives you a clear
                knowledge about the food cost, so you can increase your profits​
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section id="features" className="xl">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title mb-80">
            Ciferon is more than just a inventory software
          </h2>
        </div>
        {/* / text-center */}
        <div className="container py-5">
        <div className="row text-center">
            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-book feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Online Orders</h5>
                <p style={{ color: '#666' }} className="feature-description">Receive online orders, handle your digital menu, indicate when food is ready, process payments, and track revenue—all in one place without switching between multiple screens.</p>
            </div>

            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-book feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Billing & Kot</h5>
                <p style={{ color: '#666' }} className="feature-description">Ciferon's restaurant POS makes it easy to take orders, create bills, and generate KOT. You can accept payments, split bills, merge tables, and apply discounts and coupons effortlessly.</p>
            </div>

            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-book-open feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Menu Management</h5>
                <p style={{ color: '#666' }} className="feature-description">Personalize your restaurant menu to make it better for customers. Add exciting extras, special offers, unique menus, and dynamic pricing options.</p>
            </div>
            
            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-file-invoice feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Reports & Analytics</h5>
                <p style={{ color: '#666' }} className="feature-description">Receive instant reports on your owner’s app & WhatsApp for day-end sales, inventory, staff activities, and other vital business insights.</p>
            </div>
            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-qrcode feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Customer Engagement</h5>
                <p style={{ color: '#666' }} className="feature-description">Ciferon's CRM enables you to monitor, handle, and reward loyal customers, ensuring that your brand forms a unique connection with each customer.</p>
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
                    Can I use inventory management in offline mode?
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
                    No worries! Since it’s a cloud-based inventory software, it
                    runs online, allowing you to handle your inventory wherever
                    and whenever you want. Total flexibility!
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
                    Can Ciferon Support team help us to upload the recipes and
                    other data?
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
                    Absolutely! Once you’ve got your SOPs and inventory sheets
                    sorted (we’ll provide the format), all you have to do is
                    share them with our support team. They’ll take care of the
                    rest for you! Easy peasy!
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
                    Can I use inventory management from my phone?
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
                    Not right now, but you can keep an eye on all your inventory
                    reports using the merchant app!
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
                    Is Ciferon inventory is fully automated?
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
                  <div className="accordion-body">Yes!</div>
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
                    Can I manage my alcohol inventory in Ciferon?
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
                    Absolutely! Just upload the inventory masters, and you’re
                    ready to roll. Cheers to that! 🎉
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
                    Is central kitchen module available with Ciferon?
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
                    Certainly! It’s included in the Pro and Advance plans. Check
                    out the pricing details here.
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

export default Inventory