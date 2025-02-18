import React from "react";
import { Link, useLocation } from "react-router-dom";
import menumitra from "../assets/images/MenuMitra.png";
const Header = () => {
  const location = useLocation(); // Get the current location

  const isActive = (path) => location.pathname === path; // Helper function
  return (
    <>
      <nav
        id="nav-scroll"
        className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top py-2"
      >
        <div className="container position-relative">
          {/* Brand */}
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img src={menumitra} alt="Menumitra-Logo" className="me-2" width="35" height="35" />
            <span className="fs-5">MenuMitra</span>
          </Link>

          {/* Toggler */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-toggle-nav-center"
            aria-controls="navbar-toggle-nav-center"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Items */}
          <div className="collapse navbar-collapse justify-content-between" id="navbar-toggle-nav-center">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${isActive("/") ? "active text-primary" : ""}`} to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link ${isActive("/pricing") ? "active text-primary" : ""}`} to="/pricing">
                  Pricing
                </Link>
              </li>

              {/* Features Dropdown */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Features
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className={`dropdown-item ${isActive("/billing") ? "active" : ""}`} to="/billing">Billing</Link></li>
                  <li><Link className={`dropdown-item ${isActive("/inventory") ? "active" : ""}`} to="/inventory">Inventory</Link></li>
                  <li><Link className={`dropdown-item ${isActive("/menu") ? "active" : ""}`} to="/menu">Menu</Link></li>
                  <li><Link className={`dropdown-item ${isActive("/onlineorder") ? "active" : ""}`} to="/onlineorder">Online Order</Link></li>
                  <li><Link className={`dropdown-item ${isActive("/reports") ? "active" : ""}`} to="/reports">Restaurant Reports</Link></li>
                  <li><Link className={`dropdown-item ${isActive("/customermanagement") ? "active" : ""}`} to="/customermanagement">Customer Management</Link></li>
                  <li><Link className={`dropdown-item ${isActive("/customerfeedback") ? "active" : ""}`} to="/customerfeedback">Customer Feedback</Link></li>
                  <li><Link className={`dropdown-item ${isActive("/scan") ? "active" : ""}`} to="/scan">Scan & Order</Link></li>
                </ul>
              </li>

              {/* Add-Ons Dropdown */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Add-Ons
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className={`dropdown-item ${isActive("/captainapp") ? "active" : ""}`} to="/captainapp">Captain App</Link></li>
                  <li><Link className={`dropdown-item ${isActive("/waiterapp") ? "active" : ""}`} to="/waiterapp">Waiter App</Link></li>
                  <li><Link className={`dropdown-item ${isActive("/kds") ? "active" : ""}`} to="/kds">Kitchen Display System</Link></li>
                  <li><Link className={`dropdown-item ${isActive("/cds") ? "active" : ""}`} to="/cds">Customer Display System</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className={`nav-link ${isActive("/devices") ? "active text-primary" : ""}`} to="/devices">
                  Devices
                </Link>
              </li>

              {/* Outlet Type Dropdown */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Outlet Type
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className={`dropdown-item ${isActive("/newrestaurant") ? "active" : ""}`} to="/newrestaurant"><i className="fa-solid fa-utensils me-2"></i>Restaurant</Link></li>
                  <li><Link className={`dropdown-item ${isActive("/finedine") ? "active" : ""}`} to="/finedine"><i className="fa-solid fa-wine-glass me-2"></i>Fine Dine</Link></li>
                  <li><Link className={`dropdown-item ${isActive("/foodcourts") ? "active" : ""}`} to="/foodcourts"><i className="fa-solid fa-burger me-2"></i>Food Courts</Link></li>
                  <li><Link className={`dropdown-item ${isActive("/pizzeria") ? "active" : ""}`} to="/pizzeria"><i className="fa-solid fa-pizza-slice me-2"></i>Pizzeria</Link></li>
                  <li><Link className={`dropdown-item ${isActive("/cafe") ? "active" : ""}`} to="/cafe"><i className="fa-solid fa-coffee me-2"></i>Cafe</Link></li>
                  <li><Link className={`dropdown-item ${isActive("/qsr") ? "active" : ""}`} to="/qsr"><i className="fa-solid fa-store me-2"></i>QSR</Link></li>
                  <li><Link className={`dropdown-item ${isActive("/bakeries") ? "active" : ""}`} to="/bakeries"><i className="fa-solid fa-bread-slice me-2"></i>Bakeries</Link></li>
                  <li><Link className={`dropdown-item ${isActive("/icecream") ? "active" : ""}`} to="/icecream"><i className="fa-solid fa-ice-cream me-2"></i>Icecream & Desserts</Link></li>
                  <li><Link className={`dropdown-item ${isActive("/cloudkitchens") ? "active" : ""}`} to="/cloudkitchens"><i className="fa-solid fa-cloud me-2"></i>Cloud Kitchens</Link></li>
                  <li><Link className={`dropdown-item ${isActive("/largechain") ? "active" : ""}`} to="/largechain"><i className="fa-solid fa-building me-2"></i>Large Chain</Link></li>
                </ul>
              </li>
            </ul>

            {/* Book Demo Button */}
            <div className="d-flex align-items-center">
              <Link className="btn btn-outline-primary px-4 py-2" to="/book_demo">
                Book A Demo
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
