import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white ">
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/About">About</a>
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
                  <li><a className="dropdown-item" href="#">Home</a></li>
                  <li><a className="dropdown-item" href="#">About</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
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
                  <li><a className="dropdown-item" href="#">Home</a></li>
                  <li><a className="dropdown-item" href="#">About</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
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
