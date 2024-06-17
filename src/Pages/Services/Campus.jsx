import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import { GiPolarStar } from "react-icons/gi";

const benefits = [
  "Saves time and energy",
  "Limited Competition",
  "Bare minimum efforts",
  "College and company rapport benefits",
  "Sense of security"
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
    title: "What is Campus Recruitment?",
    description: "Campus recruitment is a strategy for sourcing, engaging and hiring young talent for internship and entry-level positions."
  },
  {
    description: "Campus recruiting, also known as graduate recruitment, is the act of attracting and engaging with university students, with the hopes of eventually hiring them upon graduation. This is done in a variety of ways, including through employer branding, hosting specialized recruiting events, social media, and university partnerships."
  },
  {
    description: "College recruiting is typically a tactic for medium- to large-sized companies with high-volume recruiting needs, but can range from small efforts (like working with university career centres to source potential candidates) to large-scale operations (like visiting a wide array of colleges and attending recruiting events throughout the spring and fall semester)."
  },
  {
    description: "Campus recruitment often involves working with university career services centres and attending career fairs to meet in person with college students and recent graduates. Some industries participate in campus recruiting more than others; finance, technology, business consulting, manufacturing and engineering are a few of the most popular."
  },
  {
    title: "Who is involved with campus recruiting?",
    description: "Employers, college campus career placement staff, experts in a variety of related fields and college students all touch campus recruiting in one way or another."
  },
];

const Campus = () => {
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
                  <Link to="/Campus-Recuritment" className="text-decoration-none px-3 text-dark small-caps">Campus Recuritment</Link>
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
              <img src="https://d8it4huxumps7.cloudfront.net/bites/wp-content/banners/2020/7/5f02f3ca4efab_campus_recruitment_process_heres_everything_you_need_to_know.png" alt="Recruiting candidates" className="img-fluid w-100 h-100 mx-auto d-block" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="card rounded-0 card-body p-4 h-100" style={{backgroundColor:"#0f2239",color:'#fff'}}>
              <h5 className="card-title text-capitalize fw-bold text-center">Our Recruitment Objective</h5>
              <p className="card-text lh-base mt-3" style={{ textAlign: 'justify' }}>
                Recruitment and selection procedures have evolved in the last few years since the job market has increasingly become candidate-driven. Recruitment is no longer confined to the organization’s wants. With an eye on hiring the best possible candidates, providing a good candidate experience has become one of our foremost priorities.
              </p>
              <p className="card-text text-center fw-bold  mt-3" style={{ textAlign: 'justify', fontSize: '14px' }}>
                INRECRUIT ALWAYS STRIVES HARD TO FIND THE RIGHT PERSON FOR THE RIGHT JOB.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container my-5">
        <div className="row g-4">
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <div className="card rounded-0">
              <div className="card-header rounded-0"  style={{backgroundColor:"#0f2239",color:'#fff'}}>
                <h4 className="fw-bold text-center">Benefits Of Getting Job in Campus Recruitment</h4>
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
              <div className="card-header rounded-0"  style={{backgroundColor:"#0f2239",color:'#fff'}}>
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
              <div className="card-header rounded-0"  style={{backgroundColor:"#0f2239",color:'#fff'}}>
                <h4 className="fw-bold text-center">Campus Recruitment</h4>
              </div>
              <div className="card-body">
                <div className="container">
                  {processSteps.map((step, index) => (
                    <div key={index}>
                      {step.title && <h6 className='fw-semibold text-decoration-underline'>{step.title}</h6>}
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

export default Campus;
