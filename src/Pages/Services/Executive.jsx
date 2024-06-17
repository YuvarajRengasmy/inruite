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

const recruitmentDetails = [
  "InRecruit is one of the top Human Resource (HR) consultants, providing top-notch manpower services to help businesses maximize efficiency and accomplish specified workloads of organizations. Human resources management (HRM) is a management function concerned with hiring, motivating, and maintaining people in an organization. Our main focuses are on people in organizations.",
  "Executive search (informally called headhunting) is a specialized recruitment service that organizations pay to seek out and recruit highly qualified candidates for senior-level and executive jobs across the public and private sectors, as well as non-profit organizations (e.g., President, Vice-president, CEO, and non-executive-directors.)",
  "Headhunters may also seek out and recruit other highly specialized and/or skilled positions in organizations for which there is strong competition in the job market for the top talent, such as senior data analysts or computer programmers. The method usually involves commissioning a third-party organization like us, typically an executive search firm, but possibly a standalone consultant or consulting firm, to research the availability of suitably qualified candidates working for competitors or related businesses or organizations.",
  "Having identified a shortlist of qualified candidates who match the client's requirements, we, the executive search firm may act as an intermediary to contact the individual(s) and see if they might be interested in moving to a new employer. Our executive search firm may also carry out initial screening of the candidate, negotiations on remuneration and benefits, and preparing the employment contract.",
  "We always ensure that our recruit meets the expectations of our clients and the right candidate with the desired qualification and relevant work experience get on board. It has never been easy to source qualified candidates, and fill open roles. We have experienced recruiters and a strong reputation within the industry’s we hire for.",
];

const Executive = () => {
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
                  <Link to="/Executive-Search" className="text-decoration-none px-3 text-dark small-caps">Executive Search</Link>
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
              <img src="https://www.talentis.global/wp-content/uploads/2019/09/shutterstock_1197201703-1024x678.jpg" alt="Recruiting candidates" className="img-fluid w-100 h-100 mx-auto d-block" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="card rounded-0 card-body p-4 h-100" style={{backgroundColor:'#0f2239',color:'#fff'}}>
              <h5 className="card-title text-capitalize fw-bold text-center">Our Recruitment Objective</h5>
              <p className="card-text lh-base mt-3" style={{ textAlign: 'justify' }}>
              Recruitment and selection procedures have evolved in the last few years since the job market has increasingly become candidate-driven. Recruitment is no longer confined to the organization’s wants. With an eye on hiring the best possible candidates, providing a good candidate experience has become one of our foremost priorities.
              </p>
              <p className="card-text text-center fw-bold mt-3" style={{ textAlign: 'justify', fontSize: '14px' }}>
                INRECRUIT ALWAYS STRIVES HARD TO FIND THE RIGHT PERSON FOR THE RIGHT JOB.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container my-5">
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <div className="card rounded-0 h-100">
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
                <h4 className="fw-bold text-center">Executive Search</h4>
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
        <div className="d-flex flex-row justify-content-between align-items-center px-3 py-4" style={{ backgroundColor: '#0f2239', color: '#fff' }}>
          <div>Reach out to know about any recent openings.</div>
          <Link to="/contact" className="btn btn-sm fw-semibold text-capitalize" style={{ backgroundColor: '#fe5722', color: '#fff' }}>Contact Us</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Executive;
