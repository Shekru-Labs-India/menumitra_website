import React from 'react'
import { Link ,useLocation} from 'react-router-dom'
import menumitra from "../assets/images/MenuMitra.png"
const Header = () => {
  const location = useLocation(); // Get the current location

  const isActive = (path) => location.pathname === path; // Helper function
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
          <Link                   className={`nav-link ${isActive('/') ? 'active text-primary' : ''}`}
 to="/">
            Home
          </Link>
        </li>
        
      <li className="nav-item">
          <Link                   className={`nav-link ${isActive('/pricing') ? 'active text-primary' : ''}`}
 to="/pricing">
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
            Features <i class="fa-solid fa-caret-down"></i>
          </Link>
          <ul className="dropdown-menu" aria-labelledby="featuresDropdown">
            <li>
              <Link className={`dropdown-item ${
                        isActive('/billing') ? 'active text-primary' : ''
                      }`} to="/billing">
                Billing
              </Link>
            </li>
            <li>
              <Link className={`dropdown-item ${
                        isActive('/inventory') ? 'active text-primary' : ''
                      }`} to="/inventory">
                Inventory
              </Link>
            </li>
            <li>
              <Link className={`dropdown-item ${
                        isActive('/menu') ? 'active text-primary' : ''
                      }`} to="/menu">
                Menu
              </Link>
            </li>
            <li>
              <Link className={`dropdown-item ${
                        isActive('/onlineorder') ? 'active text-primary' : ''
                      }`}to="/onlineorder">
                Online Order
              </Link>
            </li>
            <li>
              <Link className={`dropdown-item ${
                        isActive('/reports') ? 'active text-primary' : ''
                      }`} to="/reports">
              Restaurant Reports
              
              </Link>
            </li>
            <li>
              <Link className={`dropdown-item ${
                        isActive('/customermanaagement') ? 'active text-primary' : ''
                      }`} to="/customermanagement">
              Customer Management
              
              </Link>
            </li>
            <li>
              <Link className={`dropdown-item ${
                        isActive('/customerfeedback') ? 'active text-primary' : ''
                      }`} to="/customerfeedback">
                Customer Feedback
              </Link>
            </li>
            <li>
              <Link className={`dropdown-item ${
                        isActive('/scan') ? 'active text-primary' : ''
                      }`} to="/scan">
                Scan &amp; Order
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
            Add-Ons <i class="fa-solid fa-caret-down"></i>
          </a>
          <ul className="dropdown-menu" aria-labelledby="addonsDropdown">
            <li>
              <Link className={`dropdown-item ${
                        isActive('/captainapp') ? 'active text-primary' : ''
                      }`} to="/captainapp">
                Captain App
              </Link>
            </li>
            <li>
              <Link className={`dropdown-item ${
                        isActive('/waiterapp') ? 'active text-primary' : ''
                      }`} to="/waiterapp">
                Waiter App
              </Link>
            </li>
           
            <li>
              <Link className={`dropdown-item ${
                        isActive('/kds') ? 'active text-primary' : ''
                      }`} to="/kds">
                Kitchen Display System
              </Link>
            </li>
            <li>
              <Link className={`dropdown-item ${
                        isActive('/cds') ? 'active text-primary' : ''
                      }`} to="/cds">
                Customer Display System
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
         Outlet Type <i class="fa-solid fa-caret-down"></i>
          </a>
        
          <ul className="dropdown-menu" aria-labelledby="addonsDropdown">
  <li>
    <Link
      className={`dropdown-item ${
        isActive('/newrestaurant') ? 'active text-primary' : ''
      }`}
      to="/newrestaurant"
    >
      <i className="fa-solid fa-utensils me-2"></i>Restaurant
    </Link>
  </li>
  <li>
    <Link
      className={`dropdown-item ${
        isActive('/finedine') ? 'active text-primary' : ''
      }`}
      to="/finedine"
    >
      <i className="fa-solid fa-wine-glass me-2"></i>Fine Dine
    </Link>
  </li>
  <li>
    <Link
      className={`dropdown-item ${
        isActive('/foodcourts') ? 'active text-primary' : ''
      }`}
      to="/foodcourts"
    >
      <i className="fa-solid fa-burger me-2"></i>Food Courts
    </Link>
  </li>
  <li>
    <Link
      className={`dropdown-item ${
        isActive('/pizzeria') ? 'active text-primary' : ''
      }`}
      to="/pizzeria"
    >
      <i className="fa-solid fa-pizza-slice me-2"></i>Pizzeria
    </Link>
  </li>
  <li>
    <Link
      className={`dropdown-item ${
        isActive('/cafe') ? 'active text-primary' : ''
      }`}
      to="/cafe"
    >
      <i className="fa-solid fa-coffee me-2"></i>Cafe
    </Link>
  </li>
  <li>
    <Link
      className={`dropdown-item ${
        isActive('/qsr') ? 'active text-primary' : ''
      }`}
      to="/qsr"
    >
      <i className="fa-solid fa-store me-2"></i>QSR
    </Link>
  </li>
  <li>
    <Link
      className={`dropdown-item ${
        isActive('/bakeries') ? 'active text-primary' : ''
      }`}
      to="/bakeries"
    >
      <i className="fa-solid fa-bread-slice me-2"></i>Bakeries
    </Link>
  </li>
  <li>
    <Link
      className={`dropdown-item ${
        isActive('/icecream') ? 'active text-primary' : ''
      }`}
      to="/icecream"
    >
      <i className="fa-solid fa-ice-cream me-2"></i>Icecream & Desserts
    </Link>
  </li>
  <li>
    <Link
      className={`dropdown-item ${
        isActive('/cloudkitchens') ? 'active text-primary' : ''
      }`}
      to="/cloudkitchens"
    >
      <i className="fa-solid fa-cloud me-2"></i>Cloud Kitchens
    </Link>
  </li>
  <li>
    <Link
      className={`dropdown-item ${
        isActive('/largechain') ? 'active text-primary' : ''
      }`}
      to="/largechain"
    >
      <i className="fa-solid fa-building me-2"></i>Large Chain
    </Link>
  </li>
</ul>

        </li>
        
      </ul>
      <Link   className="btn btn-outline-dark btn-sm p-2 text-center disabled-link"
  to="/book_demo">
    Book A Demo
  </Link>
      
    </div>
  </div>
  {/* / container */}
</nav>


   </>

  )
}

export default Header