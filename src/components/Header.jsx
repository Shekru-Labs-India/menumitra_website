import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    
   <>
  
  <nav
  id="nav-scroll"
  className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top bg-white"
>
  <div className="container">
    <a className="navbar-brand" href="index.html">
      <img
        src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/cropped-logo-color-1.png"
        alt=""
      />
    </a>
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

        {/* Features Dropdown */}
        <li className="nav-item dropdown">
          <a
            className="nav-link  "
            href="#features"  // This makes it non-clickable by setting href to # or simply removing it
            id="featuresDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Features
          </a>
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
        <li className="nav-item">
          <Link className="nav-link" to="/outlet">
            Outlet Format
          </Link>
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