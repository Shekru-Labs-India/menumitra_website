import React from 'react'

const Form = () => {
  return (
    
   <>
   {/* / container */}
   <div className="container relative mt-5">
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
   </>

  )
}

export default Form