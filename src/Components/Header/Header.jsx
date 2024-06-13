import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand " href="#">
            <img
              src="https://www.inrecruit.in/images/logo/fynd-career.png"
              alt="InRecurit Logo"
              className='img-fluid ' // Use Bootstrap's img-fluid class to make the image responsive
              style={{ maxWidth: '200px' }} // maxWidth ensures the image does not exceed this size
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  justify-content-end mx-5 " id="navbarNav" >
            <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/About">About us</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Industries
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Civil & Construction</a></li>
                  <li><a className="dropdown-item" href="#">Engineering</a></li>
                  <li><a className="dropdown-item" href="#">Hospitality</a></li>
                  <li><a className="dropdown-item" href="#">Energy & Resources</a></li>
                  <li><a className="dropdown-item" href="#">Manufacturing</a></li>
                  <li><a className="dropdown-item" href="#">IT & Telecom</a></li>
                  <li><a className="dropdown-item" href="#">Oil & Gas</a></li>
                  <li><a className="dropdown-item" href="#">HealthCare</a></li>
                  <li><a className="dropdown-item" href="#">Travel & Tourism</a></li>
                  <li><a className="dropdown-item" href="#">FCMG</a></li>
                  <li><a className="dropdown-item" href="#">Marine / Shipping</a></li>
                  <li><a className="dropdown-item" href="#">Education</a></li>
                  <li><a className="dropdown-item" href="#">Distribution & Logistics</a></li>
                  <li><a className="dropdown-item" href="#">Agriculture</a></li>
                  <li><a className="dropdown-item" href="#">Automobile</a></li>
                  <li><a className="dropdown-item" href="#">Accounting & Operations</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Overseas Recruitment</a></li>
                  <li><a className="dropdown-item" href="#">Executive Search</a></li>
                  <li><a className="dropdown-item" href="#">Contract Hiring</a></li>
                  <li><a className="dropdown-item" href="#">Permanent Staffing</a></li>
                  <li><a className="dropdown-item" href="#">PayRoll Management</a></li>
                  <li><a className="dropdown-item" href="#">Job Fair</a></li>
                  <li><a className="dropdown-item" href="#">Campus Recruitment</a></li>
                  <li><a className="dropdown-item" href="#">Technical Trade Test</a></li>
                  <li><a className="dropdown-item" href="#">Ticketing and Emigration</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Process</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Clients</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Careers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Blogs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
