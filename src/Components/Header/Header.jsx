import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


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
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0" style={{ fontSize: '16px', fontWeight: 'bold', color: '#0f2239' }}>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/" activeClassName="active">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About" activeClassName="active">About</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link " to="/Industries" id="navbarDropdown" role="button"  aria-expanded="false">
                  Industries
                </NavLink>
                <ul className="dropdown-menu" >
                  <li><NavLink className="dropdown-item" to="/Civil" activeClassName="active">Civil & Construction</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/Engineering" activeClassName="active">Engineering</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/Hospitality" activeClassName="active">Hospitality</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/Energy-&-Resources" activeClassName="active">Energy & Resources</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/Manfacturing" activeClassName="active">Manufacturing</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/IT-&-Telecom" activeClassName="active">IT & Telecom</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/Oil-&-Gas" activeClassName="active">Oil & Gas</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/Healthcare" activeClassName="active">Healthcare</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/Travel-&-Tourism" activeClassName="active">Travel & Tourism</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/FMCG" activeClassName="active">FMCG</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/Marine-Shipping" activeClassName="active">Marine/Shipping</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/Education" activeClassName="active">Education</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/Distribution-&-Logistics" activeClassName="active">Distribution & Logistics</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/Agriculture" activeClassName="active">Agriculture</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/Automobile" activeClassName="active">Automobile</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/Accounting-Operations" activeClassName="active">Accounting</NavLink></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link " to="/Services" id="navbarDropdown" role="button"  aria-expanded="false">
                  Services
                </NavLink>
                <ul className="dropdown-menu" >
                  <li><NavLink className="dropdown-item" to="/Overseas-Recruitment" activeClassName="active">Overseas Recruitment</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/Executive-Search" activeClassName="active">Executive Search</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/Contract-Hiring" activeClassName="active">Contract Hiring</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/Permanent-Staffing" activeClassName="active">Permanent Staffing</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/Payroll-Management" activeClassName="active">Payroll Management</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/Job-Fair" activeClassName="active">Job Fair</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/Campus-Recuritment" activeClassName="active">Campus Recruitment</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/Technical-Trade-Test" activeClassName="active">Technical Trade Test</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/Ticketing" activeClassName="active">Ticketing & Emigration</NavLink></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Process" activeClassName="active">Process</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Clients" activeClassName="active">Clients</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Careers" activeClassName="active">Careers</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Blogs" activeClassName="active">Blogs</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact" activeClassName="active">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
