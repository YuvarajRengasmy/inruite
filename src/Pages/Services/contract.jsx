import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import { GiPolarStar } from "react-icons/gi";

const offers = [
  "Help you get hired faster.",
  "Finding the right job for you.",
  "Train you for your interview.",
  "Assistance for preparing, documentation, and filing till the departure.",
  "We own a vast pool of recruiters hunting for manpower.",
  "Extended Reach for support after departure.",
  "Our specialists will guide you throughout the process.",
];

const contractDetails = [
  "InRecruit is one of the top Human Resource (HR) consultants, providing top-notch manpower services to help businesses maximize efficiency and accomplish specified workloads of organizations. Human resources management (HRM) is a management function concerned with hiring, motivating, and maintaining people in an organization. Our main focuses are on people in organizations.",
  "Contract staffing, as the name implies, involves hiring talent for temporary or fixed-term needs. A contract staffing outsourcing company provides the necessary employee numbers, ensures quality, accurately describes job requirements, manages paperwork, and oversees workforce payments. This solution aims to complete specific tasks or projects that are limited in terms of time or frequency.",
  "Contract to Hire is a short-term employment arrangement that allows both parties to evaluate a role before committing to full-time employment. Also known as “temp to hire,” these agreements typically outline the length of the contract period during which the contractor will work for the employer. At the end of this trial period, the employer can decide whether to hire the contractor as a full-time employee with benefits.",
  "Having identified a shortlist of qualified candidates who match the client's requirements, our executive search firm acts as an intermediary to contact these individuals and gauge their interest in joining a new employer. Our firm also conducts initial candidate screenings, negotiates remuneration and benefits, and prepares employment contracts.",
];

const Contract = () => {
  return (
    <div>
      <Header />
      <section style={{ marginTop: '100px' }}>
  <div className="container-fluid mb-4">
    <div className="row">
      <div className="card p-0 border-0 rounded-0 image-card" style={{ height: '10rem' }}>
        <img
          src="https://www.azentio.com/wp-content/uploads/2023/07/Aboutus_backgound-1.jpg"
          className="img-fluid h-100 card1"
          alt="About Us Background"
        />
        <div className="card-img-overlay align-self-center">
          <h2 className="card-title text-white text-uppercase px-3">About Us</h2>
        </div>
      </div>
    </div>
  </div>
</section>
      <section className="container ">
        <div className="row">
          <div className="col-12">
            <div className="about-header">
              <div className="d-flex flex-row gap-3">
                <div className="home-link">
                  <Link to="/" className="text-decoration-none border-end border-3 border-dark px-3 text-dark small-caps">Home</Link>
                </div>
                <div className="about-link">
                  <Link to="/Services" className="text-decoration-none border-end border-3 border-dark px-3 text-dark small-caps">Services</Link>
                </div>
                <div className="about-link">
                  <Link to="/Contract-Hiring" className="text-decoration-none px-3 text-dark small-caps">Contract Hiring</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="p-0" />

      <section className="container my-5">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <div className="process-image">
              <img src="https://www.tembusulaw.com/wp-content/uploads/unnamed-38.jpg" alt="Recruiting candidates" className="img-fluid w-100 h-100 mx-auto d-block" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="card rounded-0 card-body p-4 h-100" style={{backgroundColor:'#0f2239',color:'#fff'}}>
              <h5 className="card-title text-capitalize fw-bold text-center">Our Recruitment Objective</h5>
              <p className="card-text lh-base mt-3" style={{ textAlign: 'justify' }}>
              Recruitment and selection procedures have evolved in the last few years since the job market has increasingly become candidate-driven. Recruitment is no longer confined to the organization’s wants. With an eye on hiring the best possible candidates, providing a good candidate experience has become one of our foremost priorities.
              </p>
              <p className="card-text text-center fw-bold text-uppercase mt-3" style={{ textAlign: 'justify', fontSize: '11px' }}>
                Inrecurit Always Strives Hard To Find THE Right Person For The Right Job.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container my-5">
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <div className="card rounded-0 h-100">
              <div className="card-header rounded-0"  style={{backgroundColor:'#0f2239',color:'#fff'}}>
                <h5 className="fw-bold text-center">What do we offer?</h5>
              </div>
              <div className="card-body p-4">
                {offers.map((item, index) => (
                  <p className="card-text lh-base"  key={index}>
                    <span className='fw-bold'>{index + 1}. </span> {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="card rounded-0 h-100">
              <div className="card-header rounded-0"  style={{backgroundColor:'#0f2239',color:'#fff'}}>
                <h5 className="fw-bold text-center" >Contract Hiring</h5>
              </div>
              <div className="card-body">
                <div className="container">
                  {contractDetails.map((item, index) => (
                    <p className="lh-base" key={index}>
                      <span className='pe-2' style={{ color: '#fe5722' }}><GiPolarStar /></span> {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-5">
        <p className="lh-base text-center">If you are looking for a job, please reach out to us. We can help you realize your dream.</p>
        <div className="d-flex flex-row justify-content-between align-items-center px-3 py-4" style={{ backgroundColor: '#0f2239', color: '#fff' }}>
          <div>Reach out to know about any recent openings.</div>
          <Link to="/contact" className="btn btn-sm fw-semibold text-capitalize" style={{ backgroundColor: '#fe5722', color: '#fff' }}>Contact Us</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contract;
