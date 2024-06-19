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
    title: "What is Payroll Management?",
    description: "The payroll management process, in a nutshell, refers to the process of administration of a company’s employee’s financial records. This would include details of the employee’s salaries, incentives, bonuses, deductions, and net pay. An employer must maintain and keep these records as dictated by the law."
  },
  {
    title: "Payroll Job Skills and Qualifications:",
    description: "Managing Processes, People Management, Data Entry Management, Reporting Skills, Compensation and Wage Structure, Benefits Administration, Worker Compensation, Employment Law, Developing Standards, Financial Skills, Accounting."
  },
  {
    title: "Payroll Job Responsibilities",
    description: "Maintains payroll information by designing systems; directing the collection, calculation, and entering of data."
  },
  {
    description: "Updates payroll records by reviewing and approving changes in exemptions, insurance coverage, savings deductions, and job titles, and department/ division transfers."
  },
  {
    description: "Determines payroll liabilities by approving the calculation of employee federal and state income and social security taxes, and employer’s social security, unemployment, and workers compensation payments."
  },
  {
    description: "Completes operational requirements by scheduling and assigning employees; following up on work results."
  },
  {
    description: "Pays employees by directing the production and issuance of paychecks or electronic transfers to bank accounts."
  }
];

const Payroll = () => {
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
                  <Link to="/Payroll-Management" className="text-decoration-none px-3 text-dark small-caps">Payroll Management</Link>
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
              <img src="https://media.istockphoto.com/id/1134455791/photo/payroll-concept.jpg?s=612x612&w=0&k=20&c=CKJsCRMeTG5Hh08bRpxX9qMVrIW7FnUWTYm_YjYlPGI=" alt="Recruiting candidates" className="img-fluid w-100 h-100 mx-auto d-block" />
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
              <div className="card-header rounded-0"  style={{backgroundColor:"#0f2239",color:'#fff'}}>
                <h5 className="fw-bold text-center">Benefits Of Payroll Job</h5>
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
              <div className="card-header rounded-0"  style={{backgroundColor:"#0f2239",color:'#fff'}}>
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
            <div className="card rounded-0 h-100 ">
              <div className="card-header rounded-0"  style={{backgroundColor:"#0f2239",color:'#fff'}}>
                <h5 className="fw-bold text-center">Payroll Management</h5>
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

export default Payroll;
