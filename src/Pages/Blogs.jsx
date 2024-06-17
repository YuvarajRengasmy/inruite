import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { Link } from 'react-router-dom';

export const Blogs = () => {
  return (
    <>
      <div>
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
                  <Link to="/Blogs" className="text-decoration-none" style={{ color: '#0f2239', fontVariant: 'all-small-caps', fontSize: '18px' }}>Blogs</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className='p-0' />

      {/* Blog Cards */}
      <div className="container my-5">
        <div className="row g-1">
          <div className="col-md-4">
            <div className="card card-body border-0 rounded-0 p-4 h-100 w-100">
              <img src='https://366e203a.rocketcdn.me/wp-content/uploads/2020/11/Queens-University-Belfast.jpg' className="d-block w-100 h-100 hover-card" alt="Guide for Landing a Job Abroad" style={{ height: '50vh' }} />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card card-body border-0 rounded-0 p-4 h-100 w-100">
              <h5 className="card-title text-start">Your Ultimate Guide for Landing a Job Abroad from India: Step-by-Step Process</h5>
              <p className="card-text" style={{ textAlign: 'justify' }}>OverseasJobs</p>
              <Link to="/Blog-details" className="btn btn-sm fw-bold text-capitalize" style={{ backgroundColor: '#fe5722', color: '#fff' }}>View Details</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-body border-0 rounded-0 p-4 h-100 w-100">
              <img src='https://366e203a.rocketcdn.me/wp-content/uploads/2020/11/Queens-University-Belfast.jpg' className="d-block w-100 h-100 hover-card" alt="Guide for Landing a Job Abroad" style={{ height: '50vh' }} />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card card-body border-0 rounded-0 p-4 h-100 w-100">
              <h5 className="card-title text-start">Your Ultimate Guide for Landing a Job Abroad from India: Step-by-Step Process</h5>
              <p className="card-text" style={{ textAlign: 'justify' }}>OverseasJobs</p>
              <Link to="/Blog-details" className="btn btn-sm fw-bold text-capitalize" style={{ backgroundColor: '#fe5722', color: '#fff' }}>View Details</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-body border-0 rounded-0 p-4 h-100 w-100">
              <img src='https://366e203a.rocketcdn.me/wp-content/uploads/2020/11/Queens-University-Belfast.jpg' className="d-block w-100 h-100 hover-card" alt="Guide for Landing a Job Abroad" style={{ height: '50vh' }} />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card card-body border-0 rounded-0 p-4 h-100 w-100">
              <h5 className="card-title text-start">Your Ultimate Guide for Landing a Job Abroad from India: Step-by-Step Process</h5>
              <p className="card-text" style={{ textAlign: 'justify' }}>OverseasJobs</p>
              <Link to="/Blog-details" className="btn btn-sm fw-bold text-capitalize" style={{ backgroundColor: '#fe5722', color: '#fff' }}>View Details</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-body border-0 rounded-0 p-4 h-100 w-100">
              <img src='https://366e203a.rocketcdn.me/wp-content/uploads/2020/11/Queens-University-Belfast.jpg' className="d-block w-100 h-100 hover-card" alt="Guide for Landing a Job Abroad" style={{ height: '50vh' }} />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card card-body border-0 rounded-0 p-4 h-100 w-100">
              <h5 className="card-title text-start">Your Ultimate Guide for Landing a Job Abroad from India: Step-by-Step Process</h5>
              <p className="card-text" style={{ textAlign: 'justify' }}>OverseasJobs</p>
              <Link to="/Blog-details" className="btn btn-sm fw-bold text-capitalize" style={{ backgroundColor: '#fe5722', color: '#fff' }}>View Details</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-body border-0 rounded-0 p-4 h-100 w-100">
              <img src='https://366e203a.rocketcdn.me/wp-content/uploads/2020/11/Queens-University-Belfast.jpg' className="d-block w-100 h-100 hover-card" alt="Guide for Landing a Job Abroad" style={{ height: '50vh' }} />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card card-body border-0 rounded-0 p-4 h-100 w-100">
              <h5 className="card-title text-start">Your Ultimate Guide for Landing a Job Abroad from India: Step-by-Step Process</h5>
              <p className="card-text" style={{ textAlign: 'justify' }}>OverseasJobs</p>
              <Link to="/Blog-details" className="btn btn-sm fw-bold text-capitalize" style={{ backgroundColor: '#fe5722', color: '#fff' }}>View Details</Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  )
}

export default Blogs;
