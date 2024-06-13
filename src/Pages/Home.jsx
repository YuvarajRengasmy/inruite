import React from 'react'
import Header from '../Components/Header/Header';
import './Home.css'
import { IoBarChartSharp } from "react-icons/io5";
export const Home = () => {
  return (
    <>
      <div >
        <nav class="navbar navbar-top navbar-expand-lg">
          <Header />
        </nav>

        <div className="container mb-5">
          <div className="row g-3 mb-4">
            <div className="col-md-4">
              <h6 className="text-uppercase fw-bold" style={{ fontSize: '1rem' }}>INRECRUIT HR SERVICES PRIVATE LIMITED</h6>
              <h4 className="text-capitalize" style={{ textAlign: 'justify', fontSize: '1.5rem', fontWeight: '500' }}>
                Whether you have immediate or pressing goals or long-term dreams, we will work with you to fulfill them.
              </h4>
            </div>
            <div className="col-md-8 align-self-center">
              <p className="text-capitalize lh-base" style={{ textAlign: 'justify', fontSize: '1rem', fontWeight: '400' }}>
                Bring to the table win-win survival strategies to ensure proactive domination. Our goal is to build a platform where business establishments across the globe and job aspirants can connect and achieve mutually beneficial results.
              </p>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-md-3 col-sm-6 p-2">
              <div className="card rounded-0 border-0 h-100 hover-card">
                <img
                  src="https://www.ismartrecruit.com/upload/blog/main_image/social-media-recruitment.webp"
                  alt="image"
                  className="img-fluid h-100"
                />
                <div className="card-body">
                  <h5 className="card-title text-dark text-center" style={{ fontSize: '1.25rem', fontWeight: '600' }}>Recruiting</h5>
                  <p className="card-text text-dark" style={{ textAlign: 'justify', fontSize: '1rem', fontWeight: '400' }}>
                    Intermediary Between Organisation Recruiting Client And Individual Seeking Employment.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 p-2">
              <div className="card rounded-0 border-0 h-100 hover-card">
                <img
                  src="https://vcconsultingservices.com/wp-content/uploads/2021/02/Consulting-Services.png"
                  alt="image"
                  className="img-fluid h-100"
                />
                <div className="card-body">
                  <h5 className="card-title text-dark text-center" style={{ fontSize: '1.25rem', fontWeight: '600' }}>Consulting</h5>
                  <p className="card-text text-dark" style={{ textAlign: 'justify', fontSize: '1rem', fontWeight: '400' }}>
                    Engaged In Business Of Giving Expert Advice To People Working In A Professional Or Technical Field.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 p-2">
              <div className="card rounded-0 border-0 h-100 hover-card">
                <img
                  src="https://f.hubspotusercontent30.net/hubfs/3277184/employee%20training%20and%20development.png"
                  alt="image"
                  className="img-fluid h-100"
                />
                <div className="card-body">
                  <h5 className="card-title text-dark text-center" style={{ fontSize: '1.25rem', fontWeight: '600' }}>Training</h5>
                  <p className="card-text text-dark" style={{ textAlign: 'justify', fontSize: '1rem', fontWeight: '400' }}>
                    Duties and responsibilities include developing instructional materials, organizing learning activities.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 p-2">
              <div className="card rounded-0 border-0 h-100 hover-card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7qOst_mq3nCogpvneWJmvjdVh4_Fzte6o2A&s"
                  alt="image"
                  className="img-fluid h-100"
                />
                <div className="card-body">
                  <h5 className="card-title text-dark text-center" style={{ fontSize: '1.25rem', fontWeight: '600' }}>Outsourcing</h5>
                  <p className="card-text text-dark" style={{ textAlign: 'justify', fontSize: '1rem', fontWeight: '400' }}>
                    Contract to provide a certain number of people to perform certain tasks for another company.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-3 py-3">
            <div className="col-sm-12">
              <p className="text-center fw-semibold" style={{ fontSize: '1.25rem' }}>We Always Strive Hard To Find The Right Person For The Right Job.</p>
            </div>
          </div>
        </div>


        <div className="container my-5">
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="position-relative h-100">
                <img
                  src="https://imageio.forbes.com/specials-images/imageserve/64a499c7ed583f23248aa486/Black-male-professional-presenting-at-business-meeting/960x0.jpg?height=474&width=711&fit=bounds"
                  alt="image"
                  className="img-fluid mx-auto d-block h-100 hover-card1"
                />
                <div
                  className="position-absolute bottom-0 start-50 translate-middle-x w-100 p-3"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}
                >
                  <h2 className="text-center">About Us</h2>
                  <p className="px-3">
                    WE ALWAYS STRIVE HARD TO FIND THE RIGHT PERSON FOR THE RIGHT JOB.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h4 className="fw-semibold">Mission of our company to give best service to customers.</h4>
              <p className="lh-lg" style={{ textAlign: 'justify' }}>
                We are one of the top Human Resource (HR) consultants, providing specialist advice and services to help
                businesses maximize the efficiency of their HR operations and implement appropriate new policies and procedures
                in the best way possible.
              </p>
              <p className="lh-lg" style={{ textAlign: 'justify' }}>
                Our primary domain, Talent management has emerged as an area of focus from a strategic HR standpoint. Our
                primary goal is to assist you in scaling through these processes, such as assessment, documentation, and filing.
                We have professionals who will guide you from the beginning to the end process (from getting an offer letter to
                getting a visa and accommodation).
              </p>
              <a href="#" className="btn text-uppercase fw-semibold text-white" style={{ backgroundColor: '#fe5722' }}>
                Find out more
              </a>
            </div>
          </div>
        </div>

        <div className="container my-5">
  <div className="row g-5">
    <div className="col-md-4">
      <h4 className="h1 text-center fw-bold">Our Core Values</h4>
      <hr />
      <h5 className="h3 fw-semibold lh-base" style={{ textAlign: 'justify', fontSize: '1.25rem' }}>
        Integrity  |    Perseverance
        Accountability  |   Discipline
        Commitment  |  Diligence
      </h5>
    </div>
    <div className="col-md-8">
      <p className="lh-sm fw-light h3" style={{ fontSize: '1.25rem', fontWeight: '300', textAlign: 'justify' }}>
        InRecruit HR Services Private Limited ensures that our recruit meets the expectations of our clients and the right candidate with the desired qualification and relevant work experience get on board.
      </p>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h4 className="text-center h1" style={{ fontSize: '2rem', fontWeight: '600' }}>20+</h4>
            <p className="text-center" style={{ fontSize: '1rem', fontWeight: '400' }}>Countries Served</p>
          </div>
          <div className="col-sm-4">
            <h4 className="text-center h1" style={{ fontSize: '2rem', fontWeight: '600' }}>200+</h4>
            <p className="text-center" style={{ fontSize: '1rem', fontWeight: '400' }}>Clients Served</p>
          </div>
          <div className="col-sm-4">
            <h4 className="text-center h1" style={{ fontSize: '2rem', fontWeight: '600' }}>1000+</h4>
            <p className="text-center" style={{ fontSize: '1rem', fontWeight: '400' }}>Our Success Stories</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="container my-5">
  <div className="row">
    <div className="col-md-4">
      <h4 className="fw-semibold h2">Our Practice Area</h4>
      <hr className="w-25 border border-2 rounded-3 border-primary" />
      <p className="lh-base" style={{ textAlign: 'justify', fontSize: '1rem', fontWeight: '400' }}>
        Talent management has emerged as an area of focus from a strategic HR standpoint.
      </p>
      <p className="lh-base" style={{ textAlign: 'justify', fontSize: '1rem', fontWeight: '400' }}>
        Human Resource Consulting Industry has emerged from management consulting and addresses human resource management tasks and decisions.
      </p>
      <div className="float-start">
        <a href="" className="btn text-white text-uppercase p-3 rounded-0 fw-semibold" style={{ backgroundColor: '#fe5722' }}>
          view all services
        </a>
      </div>
    </div>
    <div className="col-md-8">
      <div className="row">
        <div className="col-md-6 col-sm-12 mb-3">
          <div className="d-flex flex-row justify-content-start gap-2">
            <h4 className="text-primary"><IoBarChartSharp /></h4>
            <div className="d-flex flex-column">
              <p className="fw-bold" style={{ fontSize: '1rem', margin: 0 }}>Overseas Recruitment</p>
              <p style={{ fontSize: '0.875rem', textAlign: 'justify' }}>
                Overseas is a staffing agency. Our primary business is providing a bridge between qualified workers and the businesses that require its services.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mb-3">
          <div className="d-flex flex-row justify-content-start gap-2">
            <h4 className="text-primary"><IoBarChartSharp /></h4>
            <div className="d-flex flex-column">
              <p className="fw-bold" style={{ fontSize: '1rem', margin: 0 }}>Contract Hiring</p>
              <p style={{ fontSize: '0.875rem', textAlign: 'justify' }}>
              Employee placed in a short-term position for a set period, with the possibility of being hired full-time when the contract ends.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mb-3">
          <div className="d-flex flex-row justify-content-start gap-2">
            <h4 className="text-primary"><IoBarChartSharp /></h4>
            <div className="d-flex flex-column">
              <p className="fw-bold" style={{ fontSize: '1rem', margin: 0 }}>Permanent Staffing</p>
              <p style={{ fontSize: '0.875rem', textAlign: 'justify' }}>
              Process of providing required candidates for long-term employment based on specified candidate factors.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mb-3">
          <div className="d-flex flex-row justify-content-start gap-2">
            <h4 className="text-primary"><IoBarChartSharp /></h4>
            <div className="d-flex flex-column">
              <p className="fw-bold" style={{ fontSize: '1rem', margin: 0 }}>Executive Search</p>
              <p style={{ fontSize: '0.875rem', textAlign: 'justify' }}>
              Specialized recruitment service to recruit qualified candidates for senior-level and executive jobs across the public and private sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        <div className="container-fluid my-5 bg-secondary">
          <div className="row">
            

          </div>

        </div>


      </div>

    </>
  )
}
export default Home