import React from 'react'
import { Link } from 'react-router-dom'


export const About = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-tertiary shadow p-3 mb-5 bg-body-tertiary rounded">
        <Link className="navbar-brand" to="/"> <img
          src="https://www.inrecruit.in/images/logo/fynd-career.png"
          alt="InRecurit Logo"
          className='img-fluid '
          style={{ maxWidth: '200px' }}
        /></Link>


        <div className="collapse navbar-collapse  justify-content-end mx-5 " id="navbarNav" >
          <ul className="navbar-nav mx-2 "    >
            <li className="nav-item">
              <Link className="nav-link mx-1 fw-bold" style={{ color: "#0f2239" }} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-1 fw-bold" style={{ color: "#0f2239" }} to="/about">About us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-1 fw-bold" to="/industries" style={{ color: "#0f2239" }}>Indusries</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-1 fw-bold" to="/services" style={{ color: "#0f2239" }}>Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-1 fw-bold" to="/process" style={{ color: "#0f2239" }}>Process</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-1 fw-bold" to="/client" style={{ color: "#0f2239" }}>Clients</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-1 fw-bold" to="/carrers" style={{ color: "#0f2239" }}>Carrers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-1 fw-bold" to="/blogs" style={{ color: "#0f2239" }}>Blogs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-1 fw-bold" to="/contact" style={{ color: "#0f2239" }}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className='container-fluid'>
        <div class="row">
          <div class="col-md-12">
          <img src="https://media.istockphoto.com/id/1434341455/photo/diversity-business-team-and-fist-bump-in-office-with-support-team-building-and-employee.jpg?s=1024x1024&w=is&k=20&c=gpIIJicSJh2x3BV5j29VYDW3frv1hTR7akntMT47yRQ=" className="img-fluid w-100"
          style={{height: '500px' }} alt="..." />
          </div>

        </div>
      </div>
    </>
  )
}
export default About