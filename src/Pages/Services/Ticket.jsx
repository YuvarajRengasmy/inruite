import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import { GiPolarStar } from "react-icons/gi";

const benefits = [
  "Selecting flight",
  "Booking tickets on discounts",
  "Payment Processing",
  "Getting Boarding pass",
  "Advice on necessary documents to be taken to the airport on departure",
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
    title: "Emigration Work Visa:",
    description: "Getting a successful work visa is not an easy task. We offer free visa guidance to all the candidates. We will assist in the entire visa process from filling up applications, preparing financial statements to training candidates for mock interviews."
  },
  {
    description: "Every country has a different process and procedure for visa filing. We assist students with adequate information based on country to country. Applying for a visa can be a stressful prospect. With an endless train of paperwork and documentation, it can quickly become overwhelming. We have the knowledge, experience, and robust processes to help you navigate complex visa procedures and file your visa application with greater confidence."
  },
  {
    description: "Though you can apply for a visa to most countries online, this will take some time for you to understand the process, get the required documents, and fill the application form. You must ensure that you meet the eligibility requirements and requirements specific to the country you wish to move to."
  },
  {
    description: "This is when the assistance of a visa counsellor or adviser would be invaluable in assisting you in understanding the many visas available as well as the specific criteria for your visa. A visa consultant will assist you in completing the application procedure and obtaining your visa."
  },
  {
    title: "Ticketing:",
    description: "Purchasing flight tickets and confirming your flight booking is the key aspect of your work abroad planning. Travelling for work, you cannot make an itinerary until you have first and foremost booked your flights. Procuring an air ticket is a mandatory first step once your travel plans are confirmed. It feels as though half the job is done the moment you secure confirmed flight ticket booking in your hand."
  },
  {
    description: "When you're in a rush to book your tickets, the entire process of looking for air connectivity between two locations, checking the flight schedule, and settling on the one that's most convenient to you might feel like a lot of effort."
  },
  {
    description: "We make the process of booking and obtaining cheap flight tickets as simple as possible by providing a user-friendly interface that also includes some unique benefits. We provide you with plenty of reasons to book your local or international flight with us."
  },
];

const Ticket = () => {
  return (
    <div>
      <Header />

      {/* Home, Services, Ticketing Navigation */}
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
                  <Link to="/Ticketing" className="text-decoration-none px-3 text-dark small-caps">Ticket and Emigration</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Objective Section */}
      <section className="container my-5">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <div className="process-image">
              <img src="https://c0.wallpaperflare.com/preview/156/485/80/visa-approved-journey-template.jpg" alt="Recruiting candidates" className="img-fluid w-100 h-100 mx-auto d-block" />
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

      {/* How We Assist You in Booking Flights Section */}
      <section className="container my-5">
        <div className="row g-4">
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <div className="card rounded-0">
              <div className="card-header rounded-0" style={{backgroundColor:"#0f2239",color:'#fff'}}>
                <h4 className="fw-bold text-center">How Do We Assist You in Booking Flights</h4>
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
              <div className="card-header rounded-0 h-100" style={{backgroundColor:"#0f2239",color:'#fff'}}>
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
            <div className="card rounded-0 h-100 ">
              <div className="card-header rounded-0" style={{backgroundColor:"#0f2239",color:'#fff'}}>
                <h4 className="fw-bold text-center">Ticketing And Emigration</h4>
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

export default Ticket;
