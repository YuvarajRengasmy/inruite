import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosArrowDown } from "react-icons/io";
export const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg bg-light fixed-top ">
        <div className="container-fluid ">
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto  mb-2 mb-lg-0" style={{fontSize:'16px',color:"#fe5722",fontVariant:'all-small-caps'}}>
              <li className="nav-item">
                <a className="nav-link"  href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/About">About</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Industries <IoIosArrowDown />
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Civil & Construction</a></li>
                  <li><a className="dropdown-item" href="#">Engineering</a></li>
                  <li><a className="dropdown-item" href="#">Hospitality</a></li>
                  <li><a className="dropdown-item" href="#">Energy & Resources</a></li>
                  <li><a className="dropdown-item" href="#">Manfacturing</a></li>
                  <li><a className="dropdown-item" href="#">IT & Telecom</a></li>
                  <li><a className="dropdown-item" href="#">Oil & Gas</a></li>
                  <li><a className="dropdown-item" href="#">HealthCare</a></li>
                  <li><a className="dropdown-item" href="#">Travel & Tourism</a></li>
                  <li><a className="dropdown-item" href="#">FCMG</a></li>
                  <li><a className="dropdown-item" href="#">Marine/Shipping</a></li>
                  <li><a className="dropdown-item" href="#">Education</a></li>
                  <li><a className="dropdown-item" href="#">Distribution & Logistics</a></li>
                
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services <IoIosArrowDown />
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">overseas recuritment</a></li>
                  <li><a className="dropdown-item" href="#">executive search</a></li>
                  <li><a className="dropdown-item" href="#">contact hiring</a></li>
                  <li><a className="dropdown-item" href="#">overseas recuritment</a></li>
                  <li><a className="dropdown-item" href="#">executive search</a></li>
                  <li><a className="dropdown-item" href="#">contact hiring</a></li>
                  <li><a className="dropdown-item" href="#">overseas recuritment</a></li>
                  <li><a className="dropdown-item" href="#">executive search</a></li>
                  <li><a className="dropdown-item" href="#">contact hiring</a></li>
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
                <a className="nav-link" aria-current="page" href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
