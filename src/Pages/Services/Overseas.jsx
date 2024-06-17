import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import { GiPolarStar } from "react-icons/gi";

const offers = [
  "Help you get hired faster.",
  "Finding the right job for you.",
  "Train you for your interview.",
  "Assistance for preparing, documentation and filing till the departure.",
  "We own a vast pool of recruiters hunting for manpower.",
  "Extended support after departure.",
  "Our specialists will guide you throughout the process."
];

const recruitmentDetails = [
  "InRecruit is one of the top Human Resource (HR) consultants, providing top-notch manpower services to help businesses maximize efficiency and accomplish specified workloads. Human resources management (HRM) is a management function concerned with hiring, motivating, and maintaining people in an organization. Our main focuses are on people in organizations.",
  "Manpower is a staffing agency, often referred to as a 'temp service'. Our primary goal is to provide a bridge between qualified workers and businesses that require their services. By creating and developing a human resources model specific to the organizations that hire them, we ensure that the company utilizes its personnel to achieve its goals while maintaining high productivity and efficiency in the workforce.",
  "Our primary goal is to assist you in scaling through processes such as assessment, documentation, and filing. We have professionals who will guide you from getting an offer letter to obtaining a visa and accommodation. We collaborate with multinational companies and small to medium-sized businesses globally.",
  "We ensure that our recruits meet the expectations of our clients. Finding qualified candidates and filling open roles is challenging. We have experienced recruiters and a strong reputation within the industries we hire for."
];

const Overseas = () => {
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
                  <Link to="/Overseas-Recruitment" className="text-decoration-none px-3 text-dark small-caps">Overseas Recruitment</Link>
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
              <img src="https://thumbs.dreamstime.com/b/job-search-human-resources-recruitment-career-business-internet-technology-concept-job-search-human-resources-recruitment-career-101330689.jpg" alt="Recruiting candidates" className="img-fluid w-100 h-100 mx-auto d-block" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="card rounded-0  h-100"  style={{backgroundColor:'#0f2239',color:'#fff'}}>
              <div className="card-header px-3">
                <h5 className="text-capitalize fw-bold text-center">Our Recruitment Objective</h5>
              </div>
              <div className="card-body px-4">
                <p className="card-text lh-base mt-3" style={{ textAlign: 'justify' }}>
                Recruitment and selection procedures have evolved in the last few years since the job market has increasingly become candidate-driven. Recruitment is no longer confined to the organization’s wants. With an eye on hiring the best possible candidates, providing a good candidate experience has become one of our foremost priorities.
                </p>
                <p className="card-text text-center fw-bold mt-3" style={{ textAlign: 'justify', fontSize: '14px' }}>
                  INRECRUIT ALWAYS STRIVES TO FIND THE RIGHT PERSON FOR THE RIGHT JOB.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container my-5">
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0" >
            <div className="card rounded-0 h-100">
              <div className="card-header  rounded-0"  style={{backgroundColor:'#0f2239',color:'#fff'}}>
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
              <div className="card-header rounded-0"  style={{backgroundColor:'#0f2239',color:'#fff'}}>
                <h4 className="fw-bold text-center">International Manpower Recruitment</h4>
              </div>
              <div className="card-body">
                <div className="container">
                  {recruitmentDetails.map((item, index) => (
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
        <div className="d-flex flex-row justify-content-between align-items-center px-3 py-4 bg-dark text-light">
          <div>Reach out to know about any recent openings.</div>
          <Link to="/contact" className="btn btn-sm fw-semibold text-capitalize" style={{ backgroundColor: '#fe5722', color: '#fff' }}>Contact Us</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Overseas;
