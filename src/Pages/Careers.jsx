
import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { Link } from 'react-router-dom';

export const Careers = () => {
  return (
    <div>
      <div className="header">
        <Header />
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="about-header">
              <div className="d-flex flex-row gap-3">
                <div className="home-link">
                  <Link to="/" className="text-decoration-none border-end border-3 border-dark px-3 text-dark" style={{ fontVariant: 'all-small-caps', fontSize: '18px' }}>Home</Link>
                </div>
                <div className="about-link">
                  <Link to="/Careers" className="text-decoration-none text-dark" style={{ fontVariant: 'all-small-caps', fontSize: '18px' }}>Careers</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="p-0" />

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <div className="process-image align-items-center">
              <img src="https://img.freepik.com/premium-photo/human-resources-people-networking-concept_31965-1980.jpg" alt="Human Resources and Networking Concept" className="img-fluid w-100 h-100 mx-auto d-block" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="card rounded-0 card-body p-5 h-100">
              <h5 className="card-title text-capitalize fw-bold text-center">A Career That Fits Your Calling</h5>
              <p className="card-text lh-base mt-3" style={{ textAlign: 'justify' }}>
                Achieve seamless integration in resource-intensive partnerships through leading niche markets. Cultivate personalized customer service with innovative concepts. Dynamically enhance resource distribution for cutting-edge customer support. Objectively innovate empowered manufactured products on parallel platforms. Holistically dominate scalable testing procedures for dependable supply chains.
              </p>
              <p className="card-text text-center fw-bold mt-3" style={{ textAlign: 'justify', fontSize: '14px' }}>WORKING WITH US</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <div className="card card-body p-4">
              <h4 className="fw-bold text-center">Learn about our interview process</h4>
              <p className="lh-base text-center" style={{ textAlign: 'justify' }}>
                We are excited to get to know you and help you get to know us through our interview process.
              </p>
              <div className="d-inline mx-auto d-block text-center">
                <a href="/Process" className="btn px-3 py-2 text-semibold text-uppercase rounded-5" style={{ backgroundColor: '#fe5722', color: '#fff' }}>what we are looking for</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <div className="card card-body p-4">
              <h4 className="fw-bold text-center">Explore Exciting Opportunities Abroad!</h4>
              <p className="lh-base" style={{ textAlign: 'justify' }}>
                Embark on a journey to new horizons with our international career opportunities. At InRecruit, we believe in the power of diverse perspectives and global experiences to drive innovation and growth. We help you discover exciting roles in vibrant locations around the world. Whether you're seeking adventure, professional development, or a chance to make a meaningful impact on a global scale, we invite you to explore various open positions abroad. Your next career chapter awaits!
              </p>
              <div className="d-inline mx-auto d-block text-center">
                <button type="button" className="btn fw-semibold text-uppercase px-3 py-2 rounded-5" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ backgroundColor: '#fe5722', color: '#fff' }}>
                  apply now
                </button>
              </div>

              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">Enquiry Form</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="mb-3">
                          <label className="form-label" htmlFor="basic-form-name">Name</label>
                          <input className="form-control" id="basic-form-name" type="text" placeholder="Name" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label" htmlFor="basic-form-email">Email address</label>
                          <input className="form-control" id="basic-form-email" type="email" placeholder="Email Address" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label" htmlFor="basic-form-number">Phone Number</label>
                          <input className="form-control" id="basic-form-number" type="text" placeholder="Phone Number" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Upload Image</label>
                          <input className="form-control" type="file" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label" htmlFor="basic-form-textarea">Description</label>
                          <textarea className="form-control" id="basic-form-textarea" rows="4" placeholder="Description"></textarea>
                        </div>
                        <div className="mb-3 form-check">
                          <input className="form-check-input" id="basic-form-checkbox" type="checkbox" />
                          <label className="form-check-label" htmlFor="basic-form-checkbox">Remember me</label>
                        </div>
                        <button className="btn" type="submit" style={{ backgroundColor: '#fe5722', color: '#fff' }}>Submit</button>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" className="btn" style={{ backgroundColor: '#fe5722', color: '#fff' }}>Save changes</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <div className="card card-body p-4">
              <div className="d-flex flex-row align-items-center justify-content-between">
                <div className="job-title">Job title</div>
                <div className="country">Country</div>
                <div className="salary d-none d-lg-inline">Salary</div>
                <div className="experience  d-none d-lg-inline">Experience</div>
                <div className="job-details  d-none d-lg-inline">Job Details</div>
                <button type="button" className="btn fw-semibold text-uppercase px-3 py-2 rounded-5" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ backgroundColor: '#fe5722', color: '#fff' }}>
                  apply now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Careers;


