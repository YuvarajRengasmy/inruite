import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosArrowDown } from "react-icons/io";

export const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg shadow bg-white fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://www.inrecruit.in/images/logo/fynd-career.png"
              alt="InRecruit Logo"
              className='img-fluid'
              style={{ maxWidth: '200px' }}
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0" style={{ fontSize: '16px', color: "#fe5722" }}>
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/About">About</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link "
                  href="/Industries"
                  id="navbarDropdownIndustries"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Industries <IoIosArrowDown className='d-none d-lg-inline-block' />
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownIndustries">
                  <li><a className="dropdown-item" href="/Civil">Civil & Construction</a></li>
                  <li><a className="dropdown-item" href="/Engineering">Engineering</a></li>
                  <li><a className="dropdown-item" href="/Hospitality">Hospitality</a></li>
                  <li><a className="dropdown-item" href="/Energy-&-Resources">Energy & Resources</a></li>
                  <li><a className="dropdown-item" href="/Manfacturing">Manufacturing</a></li>
                  <li><a className="dropdown-item" href="/IT-&-Telecom">IT & Telecom</a></li>
                  <li><a className="dropdown-item" href="/Oil-&-Gas">Oil & Gas</a></li>
                  <li><a className="dropdown-item" href="/Healthcare">Healthcare</a></li>
                  <li><a className="dropdown-item" href="/Travel-&-Tourism">Travel & Tourism</a></li>
                  <li><a className="dropdown-item" href="/FMCG">FMCG</a></li>
                  <li><a className="dropdown-item" href="/Marine-Shipping">Marine/Shipping</a></li>
                  <li><a className="dropdown-item" href="/Education">Education</a></li>
                  <li><a className="dropdown-item" href="/Distribution-&-Logistics">Distribution & Logistics</a></li>
                  <li><a className="dropdown-item" href="/Agriculture">Agriculture</a></li>
                  <li><a className="dropdown-item" href="/Automobile">Automobile</a></li>
                  <li><a className="dropdown-item" href="/Accounting-Operations">Accounting</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link "
                  href="/Services"
                  id="navbarDropdownServices"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services <IoIosArrowDown className='d-none d-lg-inline-block' />
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownServices">
                  <li><a className="dropdown-item" href="/Overseas-Recruitment">Overseas Recruitment</a></li>
                  <li><a className="dropdown-item" href="/Executive-Search">Executive Search</a></li>
                  <li><a className="dropdown-item" href="/Contract-Hiring">Contract Hiring</a></li>
                  <li><a className="dropdown-item" href="/Permanent-Staffing">Permanent Staffing</a></li>
                  <li><a className="dropdown-item" href="/Payroll-Management">Payroll Management</a></li>
                  <li><a className="dropdown-item" href="/Job-Fair">Job Fair</a></li>
                  <li><a className="dropdown-item" href="/Campus-Recuritment">Campus Recruitment</a></li>
                  <li><a className="dropdown-item" href="/Technical-Trade-Test">Technical Trade Test</a></li>
                  <li><a className="dropdown-item" href="/Ticketing">Ticketing</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Process">Process</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Clients">Clients</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Careers">Careers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Blogs">Blogs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
