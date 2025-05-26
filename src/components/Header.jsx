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
          <div className="collapse navbar-collapse" id="navbar-toggle-nav-center">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
              <li className="nav-item mx-lg-2">
                <Link className={`nav-link ${isActive("/") ? "active text-primary" : ""}`} to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item mx-lg-2">
                <Link className={`nav-link ${isActive("/pricing") ? "active text-primary" : ""}`} to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item mx-lg-2">
                <Link className={`nav-link ${isActive("/apps") ? "active text-primary" : ""}`} to="/apps">
                  Apps
                </Link>
              </li>

              {/* Features Dropdown */}
              <li className="nav-item dropdown mx-lg-2">
                <Link
                  className="nav-link d-flex align-items-center gap-1"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Features <i className="bi bi-chevron-down fs-7 dropdown-toggle-icon"></i>
                </Link>
                <ul className="dropdown-menu shadow-sm border-0">
                  <li><Link className={`dropdown-item ${isActive("/billing") ? "active" : ""}`} to="/billing">
                    <i className="fa-solid fa-receipt me-2"></i>Billing</Link></li>
                  <li><Link className={`dropdown-item ${isActive("/inventory") ? "active" : ""}`} to="/inventory">
                    <i className="fa-solid fa-box me-2"></i>Inventory</Link></li>
                  <li><Link className={`dropdown-item ${isActive("/menu") ? "active" : ""}`} to="/menu">
                    <i className="fa-solid fa-book-open me-2"></i>Menu</Link></li>
                  <li><Link className={`dropdown-item ${isActive("/onlineorder") ? "active" : ""}`} to="/onlineorder">
                    <i className="fa-solid fa-cart-shopping me-2"></i>Online Order</Link></li>
                  <li><Link className={`dropdown-item ${isActive("/reports") ? "active" : ""}`} to="/reports">
                    <i className="fa-solid fa-chart-line me-2"></i>Restaurant Reports</Link></li>
                  <li><Link className={`dropdown-item ${isActive("/customermanagement") ? "active" : ""}`} to="/customermanagement">
                    <i className="fa-solid fa-users me-2"></i>Customer Management</Link></li>
                  <li><Link className={`dropdown-item ${isActive("/customerfeedback") ? "active" : ""}`} to="/customerfeedback">
                    <i className="fa-solid fa-star me-2"></i>Customer Feedback</Link></li>
                  <li><Link className={`dropdown-item ${isActive("/scan") ? "active" : ""}`} to="/scan">
                    <i className="fa-solid fa-qrcode me-2"></i>Scan & Order</Link></li>
                </ul>
              </li>

              {/* Add-Ons Dropdown */}
              <li className="nav-item dropdown mx-lg-2">
                <Link
                  className="nav-link d-flex align-items-center gap-1"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  AddOns <i className="bi bi-chevron-down fs-7 dropdown-toggle-icon"></i>
                </Link>
                <ul className="dropdown-menu shadow-sm border-0">
                  <li><Link className={`dropdown-item ${isActive("/captainapp") ? "active" : ""}`} to="/captainapp">
                    <i className="fa-solid fa-mobile-screen me-2"></i>Captain App</Link></li>
                  <li><Link className={`dropdown-item ${isActive("/waiterapp") ? "active" : ""}`} to="/waiterapp">
                    <i className="fa-solid fa-person me-2"></i>Waiter App</Link></li>
                  <li><Link className={`dropdown-item ${isActive("/kds") ? "active" : ""}`} to="/kds">
                    <i className="fa-solid fa-desktop me-2"></i>Kitchen Display System</Link></li>
                  <li><Link className={`dropdown-item ${isActive("/cds") ? "active" : ""}`} to="/cds">
                    <i className="fa-solid fa-tv me-2"></i>Customer Display System</Link></li>
                </ul>
              </li>

              

              {/* Outlet Type Dropdown */}
              <li className="nav-item dropdown mx-lg-2">
                <Link
                  className="nav-link d-flex align-items-center gap-1"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Outlet Type <i className="bi bi-chevron-down fs-7 dropdown-toggle-icon"></i>
                </Link>
                <ul className="dropdown-menu shadow-sm border-0">
                  <li><Link className={`dropdown-item ${isActive("/newrestaurant") ? "active" : ""}`} to="/newrestaurant">
                    <i className="fa-solid fa-store me-2"></i>Restaurant</Link></li>
                  <li><Link className={`dropdown-item ${isActive("/finedine") ? "active" : ""}`} to="/finedine">
                    <i className="fa-solid fa-utensils me-2"></i>Fine Dine</Link></li>
                  <li><Link className={`dropdown-item ${isActive("/foodcourts") ? "active" : ""}`} to="/foodcourts">
                    <i className="fa-solid fa-store me-2"></i>Food Courts</Link></li>
                  <li><Link className={`dropdown-item ${isActive("/pizzeria") ? "active" : ""}`} to="/pizzeria">
                    <i className="fa-solid fa-pizza-slice me-2"></i>Pizzeria</Link></li>
                  <li><Link className={`dropdown-item ${isActive("/cafe") ? "active" : ""}`} to="/cafe">
                    <i className="fa-solid fa-mug-hot me-2"></i>Cafe</Link></li>
                  <li><Link className={`dropdown-item ${isActive("/qsr") ? "active" : ""}`} to="/qsr">
                    <i className="fa-solid fa-burger me-2"></i>QSR</Link></li>
                  <li><Link className={`dropdown-item ${isActive("/bakeries") ? "active" : ""}`} to="/bakeries">
                    <i className="fa-solid fa-bread-slice me-2"></i>Bakeries</Link></li>
                  <li><Link className={`dropdown-item ${isActive("/cloudkitchens") ? "active" : ""}`} to="/cloudkitchens">
                    <i className="fa-solid fa-cloud me-2"></i>Cloud Kitchens</Link></li>
                  <li><Link className={`dropdown-item ${isActive("/largechain") ? "active" : ""}`} to="/largechain">
                    <i className="fa-solid fa-building me-2"></i>Large Chain</Link></li>
                </ul>
              </li>
              <li className="nav-item mx-lg-2">
                <Link className={`nav-link ${isActive("/devices") ? "active text-primary" : ""}`} to="/devices">
                  Devices
                </Link>
              </li>
            </ul>

            {/* Book Demo Button */}
            <div className="d-flex align-items-center ms-lg-3">
              <Link className="btn btn-outline-primary px-4 py-2" to="/book_demo">
                Book A Demo
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <style>
        {`
          .navbar .dropdown-menu {
            margin-top: 0.5rem;
            border-radius: 0.5rem;
            min-width: 220px;
          }

          .navbar .dropdown-item {
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
          }

          .navbar .dropdown-item:hover {
            background-color: #f8f9fa;
          }

          .navbar .dropdown-item.active {
            background-color: #e9ecef;
            color: var(--bs-primary);
          }

          .fs-7 {
            font-size: 0.875rem;
          }

          .dropdown-toggle-icon {
            transition: transform 0.2s ease;
          }

          .show .dropdown-toggle-icon {
            transform: rotate(180deg);
          }

          @media (max-width: 991.98px) {
            .navbar-collapse {
              max-height: calc(100vh - 72px);
              overflow-y: auto;
            }
            
            .navbar-collapse::-webkit-scrollbar {
              width: 4px;
            }
            
            .navbar-collapse::-webkit-scrollbar-thumb {
              background-color: rgba(0,0,0,.2);
              border-radius: 4px;
            }
            
            .navbar-collapse::-webkit-scrollbar-track {
              background: transparent;
            }

            .navbar .dropdown-menu {
              border: none;
              box-shadow: none;
              margin-top: 0;
              padding-left: 1.5rem;
            }

            .navbar .dropdown-item {
              padding: 0.5rem 0;
            }

            .nav-link::after {
              display: none !important;
            }
          }
        `}
      </style>
    </>
  );
};

export default Header;


// re push for dropdown in header desktop