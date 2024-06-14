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
      
      <div className="container" style={{ marginTop: '120px' }}>
        <div className="row">
          <div className="col-12">
            <div className="about-header">
              <div className="d-flex flex-row gap-3">
                <div className="home-link">
                  <Link to="/" className="text-decoration-none border-end border-3 border-dark px-3" style={{ color: '#0f2239', fontVariant: 'all-small-caps', fontSize: '18px' }}>Home</Link>
                </div>
                <div className="about-link">
                  <Link to="/Careers" className="text-decoration-none" style={{ color: '#0f2239', fontVariant: 'all-small-caps', fontSize: '18px' }}>Careers</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <hr className="p-0" />
      
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="process-image align-items-center">
              <img src="https://img.freepik.com/premium-photo/human-resources-people-networking-concept_31965-1980.jpg" alt="Human Resources and Networking Concept" className="img-fluid w-100 h-100 mx-auto d-block" />
            </div>
          </div>
          <div className="col-lg-6">
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
      
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Careers;
