import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlinePlusSm } from "react-icons/hi";

export const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow bg-white fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://www.inrecruit.in/images/logo/fynd-career.png"
              alt="InRecruit Logo"
              className='img-fluid' // Use Bootstrap's img-fluid class to make the image responsive
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0" style={{ fontSize: '16px', color: "#fe5722",}}>
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
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Industries <span className='d-none d-lg-inline-block'><IoIosArrowDown /></span> 
                  {/* <span className='d-md d-lg-none'><HiOutlinePlusSm /></span> */}
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/Civil">Civil & Construction</a></li>
                  <li><a className="dropdown-item" href="/Engineering">Engineering</a></li>
                  <li><a className="dropdown-item" href="/Hospitality">Hospitality</a></li>
                  <li><a className="dropdown-item" href="/Energy-&-Resources">Energy & Resources</a></li>
                  <li><a className="dropdown-item" href="Manfacturing">Manufacturing</a></li>
                  <li><a className="dropdown-item" href="IT-&-Telecom">IT & Telecom</a></li>
                  <li><a className="dropdown-item" href="Oil-&-Gas">Oil & Gas</a></li>
                  <li><a className="dropdown-item" href="/Healthcare">Healthcare</a></li>
                  <li><a className="dropdown-item" href="/Travel-&-Tourism">Travel & Tourism</a></li>
                  <li><a className="dropdown-item" href="/FMCG">FMCG</a></li>
                  <li><a className="dropdown-item" href="/Marine-Shipping">Marine/Shipping</a></li>
                  <li><a className="dropdown-item" href="/Education">Education</a></li>
                  <li><a className="dropdown-item" href="/Distribution-&-Logistics">Distribution & Logistics</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link "
                  href="/Services"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services <span className='d-none d-lg-inline-block'><IoIosArrowDown /></span> 
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/Services">Overseas Recruitment</a></li>
                  <li><a className="dropdown-item" href="#">Executive Search</a></li>
                  <li><a className="dropdown-item" href="#">Contract Hiring</a></li>
                  <li><a className="dropdown-item" href="#">Permanent Staffing</a></li>
                  <li><a className="dropdown-item" href="#">Payroll Management</a></li>
                  <li><a className="dropdown-item" href="#">Job Fair</a></li>
                  <li><a className="dropdown-item" href="#">Campus Recruitment</a></li>
                  <li><a className="dropdown-item" href="#">Technical Trade Test</a></li>
                  <li><a className="dropdown-item" href="#">Ticketing</a></li>
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
                <a className="nav-link" href="/blogs">Blogs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
