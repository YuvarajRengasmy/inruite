import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import { GiPolarStar } from "react-icons/gi";

const benefits = [
  "Cost-efficient Education",
  "Job-focused Education",
  "Professional Guidance",
  "Professional Development and Training Opportunities",
  "Shorter Path to A Job",
  "Acknowledged by recruiters"
];

const offers = [
  "Help you to get hired faster.",
  "Finding the right job for you.",
  "Train you for your interview.",
  "Assistance for preparing, documentation and filing till the departure.",
  "We own a vast pool of recruiters hunting for manpower.",
  "Extended Reach for support after departure.",
  "Our specialists will guide you throughout the process."
];

const processSteps = [
  {
    title: "What is Technical Trade Test?",
    description: "The Trade Test is a test of your knowledge, skills and competence in, especially Artisan occupations. It involves theoretical and practical demonstration of knowledge and skill."
  },
  {
    description: "A trade test is a test used to assess the proficiency and skill level of an individual in any number of skilled trades. These tests may include written and/or skill demonstration sections. Skilled trades such as plumbing for carpentry require a unique set of knowledge and skills. This expertise separates skilled labour from the general labour force. A trade test is an assessment of an individual and whether or not this person has achieved certain levels of knowledge within the context of a specific trade."
  },
  {
    description: "We facilitate trade skills assessments helping the recruiting firm to judge the competence levels of the candidates for the selected trade. These tests are conducted for both skilled as well as semi-skilled candidates and are generally conducted for candidates before they go in for general assessment. Here, the level of trade skills assessment depends upon the requirement of the sector for which candidates are being assessed."
  },
];

const Technical = () => {
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
      {/* Navigation Section */}
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
                  <Link to="/Technical-Trade-Test" className="text-decoration-none px-3 text-dark small-caps">Technical Trade Test</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="p-0" />

      {/* Recruitment Objective Section */}
      <section className="container my-5">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <div className="process-image">
              <img src="https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.jpg?s=612x612&w=0&k=20&c=HYlIJ1VFfmHPwGkM3DtVIFNLS5ejfMMzEQ81ko534ak=" alt="Recruiting candidates" className="img-fluid w-100 h-100 mx-auto d-block" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="card rounded-0 card-body p-4 h-100" style={{ backgroundColor: '#0f2239', color: '#fff' }}>
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

      {/* Benefits Section */}
      <section className="container my-5">
        <div className="row g-4">
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <div className="card rounded-0">
              <div className="card-header rounded-0" style={{ backgroundColor: '#0f2239', color: '#fff' }}>
                <h5 className="fw-bold text-center">Benefits Of Technical Trade Test</h5>
              </div>
              <div className="card-body p-4">
                {benefits.map((item, index) => (
                  <p className="card-text lh-base"  key={index}>
                    <span className='fw-bold'>{index + 1}. </span> {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="card rounded-0 mt-3">
              <div className="card-header rounded-0" style={{ backgroundColor: '#0f2239', color: '#fff' }}>
                <h5 className="fw-bold text-center">What do we offer?</h5>
              </div>
              <div className="card-body p-4">
                {offers.map((item, index) => (
                  <p className="card-text lh-base" key={index}>
                    <span className='fw-bold'>{index + 1}. </span> {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Process Steps Section */}
          <div className="col-lg-8 col-md-12">
            <div className="card rounded-0 h-100 ">
              <div className="card-header rounded-0" style={{ backgroundColor: '#0f2239', color: '#fff' }}>
                <h5 className="fw-bold text-center">Technical Trade Test</h5>
              </div>
              <div className="card-body">
                <div className="container">
                  {processSteps.map((step, index) => (
                    <div key={index}>
                      <h6 className='fw-semibold text-decoration-underline'>{step.title}</h6>
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

      {/* Contact Us Section */}
      <section className="container mt-5">
        <p className="lh-base text-center">If you are looking for a job, please reach out to us, we can help you to realize your dream.</p>
        <div className="d-flex flex-row justify-content-between align-items-center px-3 py-4" style={{ backgroundColor: '#0f2239', color: '#fff' }}>
          <div>Reach out to know about any recent openings.</div>
          <Link to="/contact" className="btn btn-sm fw-semibold text-capitalize" style={{ backgroundColor: '#fe5722', color: '#fff' }}>Contact Us</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Technical;
