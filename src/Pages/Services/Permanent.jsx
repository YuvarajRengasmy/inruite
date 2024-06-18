import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import { GiPolarStar } from "react-icons/gi";

const benefits = [
  "Health and Other Insurance Coverage",
  "Retirement Benefits and Pension Plans",
  "Paid and Unpaid Time Off",
  "Professional Development and Training Opportunities",
  "Regular and Predictable Schedule",
  "Sense of security"
];

const offers = [
  "Help you get hired faster.",
  "Finding the right job for you.",
  "Train you for your interview.",
  "Assistance for preparing, documentation, and filing till the departure.",
  "We own a vast pool of recruiters hunting for manpower.",
  "Extended Reach for support after departure.",
  "Our specialists will guide you throughout the process."
];

const processSteps = [
  {
    title: "Consultation with the client company",
    description: "Our consultant will either visit or call the client company for a detailed discussion on the search criteria and current efforts to fill the role. If not already in place, Terms and Conditions will be confirmed at this point."
  },
  {
    title: "Screening and preparation of a candidate list",
    description: "Based on the requirements, our consultant will prepare a list of candidates from our database."
  },
  {
    title: "Candidate interview",
    description: "Our Consultant will pass the screened candidates to the client company and serve as a direct liaison in arranging for candidate interviews by the company."
  },
  {
    title: "Feedback on interviews, signing of contract, and negotiation of terms and conditions",
    description: "Throughout the interview process, our consultant will provide feedback to both the client company and the candidates."
  },
  {
    title: "Hiring",
    description: "Once the client and the candidate agree on the terms and conditions, the hiring decision is finalized, and an employment contract is signed."
  },
  {
    title: "Aftercare services",
    description: "Our work does not end with the introduction of talent to client companies but continues into providing aftercare services. Our consultants maintain regular contact with both client and candidate to ensure that the two can maintain a good relationship that allows for a satisfying and successful work experience over a long period."
  }
];

const Permanent = () => {
  return (
    <div>
      <Header />
      
      <section className="container mt-5 pt-5">
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
                  <Link to="/Permanent-Staffing" className="text-decoration-none px-3 text-dark small-caps">Permanent Staffing</Link>
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
              <img src="https://mnrsolutions.in/wp-content/uploads/2023/12/Permanent-Staffing-1.webp" alt="Recruiting candidates" className="img-fluid w-100 h-100 mx-auto d-block" />
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
        <div className="row g-4">
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <div className="card rounded-0">
              <div className="card-header rounded-0" style={{backgroundColor:'#0f2239',color:'#fff'}}>
                <h4 className="fw-bold text-center">Benefits Of Permanent Staffing</h4>
              </div>
              <div className="card-body p-4">
                {benefits.map((item, index) => (
                  <p className="card-text lh-base" style={{ textAlign: 'justify' }} key={index}>
                    <span className='fw-bold'>{index + 1}. </span> {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="card rounded-0 mt-3">
              <div className="card-header rounded-0" style={{backgroundColor:'#0f2239',color:'#fff'}}>
                <h4 className="fw-bold text-center">What do we offer?</h4>
              </div>
              <div className="card-body p-4">
                {offers.map((item, index) => (
                  <p className="card-text lh-base" style={{ textAlign: 'justify' }} key={index}>
                    <span className='fw-bold'>{index + 1}. </span> {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-md-12">
            <div className="card rounded-0 h-100">
              <div className="card-header rounded-0" style={{backgroundColor:'#0f2239',color:'#fff'}}>
                <h4 className="fw-bold text-center">Our Permanent Recruitment Process</h4>
              </div>
              <div className="card-body">
                <div className="container">
                  {processSteps.map((step, index) => (
                    <div key={index} className="mb-4">
                      <h6 className='fw-semibold'>{step.title}</h6>
                      <p className="lh-base">
                        <span className='pe-2' style={{ color: '#fe5722' }}><GiPolarStar /></span>{step.description}
                      </p>
                    </div>
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
}

export default Permanent;
