import React from 'react'
import { Link } from 'react-router-dom'
import menumitra from "../assets/images/MenuMitra.png"
const Header = () => {
  return (
    
   <>
  
  <nav
  id="nav-scroll"
  className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top bg-white shadow-xl"
>
  <div className="container">
  <div className="navbar-brand text-black">
  <Link to="/">
    <img 
      src={menumitra} 
      alt="Menumitra-Logo" 
    className='navbar-brand img'
    />
    MenuMitra
  </Link>
</div>

    <button
      className="navbar-toggler collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbar-toggle-nav-center"
      aria-controls="navbar-toggle-nav-center"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="icon-bar top-bar" />
      <span className="icon-bar middle-bar" />
      <span className="icon-bar bottom-bar" />
    </button>
    {/* / navbar-toggler */}
    <div className="collapse navbar-collapse" id="navbar-toggle-nav-center">
      <ul className="navbar-nav ml-auto">

      <li className="nav-item">
          <Link className="nav-link active" to="/">
            Home
          </Link>
        </li>
        
      <li className="nav-item">
          <Link className="nav-link " to="/pricing">
        Pricing
          </Link>
        </li>

        {/* Features Dropdown */}
        <li className="nav-item dropdown">
          <Link
            className="nav-link  "
            to="#features"  // This makes it non-clickable by setting href to # or simply removing it
            id="featuresDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Features
          </Link>
          <ul className="dropdown-menu" aria-labelledby="featuresDropdown">
            <li>
              <Link className="dropdown-item" to="/billing">
                Billing
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/inventory">
                Inventory
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/menu">
                Menu
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/onlineorder">
                Online Order
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/reports">
              Restaurant Reports
              
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/customermanagement">
              Customer Management
              
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/customerfeedback">
                Customer Feedback
              </Link>
            </li>
          </ul>
        </li>
        {/* Add-Ons Dropdown */}
        <li className="nav-item dropdown">
          <a
            className="nav-link "
            href="#addons"  // Similar to Features, set href to # or remove it
            id="addonsDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Add-Ons
          </a>
          <ul className="dropdown-menu" aria-labelledby="addonsDropdown">
            <li>
              <Link className="dropdown-item" to="/captainapp">
                Captain App
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/kds">
                Kitchen Display System
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/scan">
                Scan &amp; Order
              </Link>
            </li>
          </ul>
        </li>
        {/* Outlet Format */}
        <li className="nav-item dropdown ">
          <a
            className="nav-link "
            href="#addons"  // Similar to Features, set href to # or remove it
            id="addonsDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
         Outlet Format
          </a>
        
          <ul className="dropdown-menu" aria-labelledby="addonsDropdown">
            <li>
              <Link className="dropdown-item" to="/newrestaurant">
              New Restaurant
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/finedine">
                Fine Dine 
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/foodcourts">
             Food Courts
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/pizzeria">
             Pizzeria
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/cafe">
             Cafe
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/qsr">
          QSR
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/bakeries">
             Bakeries
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/icecream">
              Icecream & Desserts
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/cloudkitchens">
            Cloud Kitchens
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/largechain">
           Large Chain
              </Link>
            </li>
          </ul>
        </li>
        
      </ul>
      
    </div>
  </div>
  {/* / container */}
</nav>


   </>

  )
}

export default Header