import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { Link } from 'react-router-dom';
import { GiPolarStar } from "react-icons/gi";
export const Process = () => {
  return (
    <div>
      <div className="header">
        <Header/>
      </div>
      <div className="container" style={{marginTop:'120px'}}>
        <div className="row">
          <div className="col-12">
            <div className="about-header">
              <div className="d-flex flex-row gap-3">
                <div className="home-link">
                  <Link to="/" className="text-decoration-none border-end border-3 border-dark px-3 " style={{ color: '#0f2239',fontVariant:'all-small-caps',fontSize:'18px' }}>Home</Link>
                </div>
                <div className="about-link">
                  <Link to="/Process" className="text-decoration-none " style={{ color: '#0f2239',fontVariant:'all-small-caps',fontSize:'18px' }}>Process</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className='p-0' />
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="process-image">
              <img src="https://nicetoeat.net/wp-content/uploads/2021/05/recruiting-candidates.png" alt="" className="img-fluid w-100 h-100 mx-auto d-block" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card rounded-0 card-body p-5 h-100 ">
              <h5 className="card-title text-capitalize fw-bold  text-center ">Our Recruitment Objective</h5>
              <p className="card-text lh-base mt-3" style={{textAlign:'justify'}}>Recruitment and selection procedures have evolved in the last few years since the job market has increasingly become candidate-driven. Recruitment is no longer confined to the organization’s wants. With an eye on hiring the best possible candidates, providing a good candidate experience has become one of our foremost priorities.</p>
           <p className="card-text text-center fw-bold mt-3"style={{textAlign:'justify',fontSize:'14px'}}>INRECRUIT ALWAYS STRIVES HARD TO FIND THE RIGHT PERSON FOR THE RIGHT JOB.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-sm-12">
            <div className="card card-body p-4">
            <h4 className="  fw-bold">DataBank</h4>
           <p className="lh-base" style={{textAlign:'justify'}}>We maintain a databank i.e database of profiles. Whenever someone approaches us for a job, we will add their details in the data bank</p>
         <p className="lh-base">Whenever someone approaches us for a job, we will add their details in the data bank.
         </p>
            </div>
          
          </div>

        </div>
    
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="card rounded-0 h-100 ">
              <div className="card-header rounded-0">
                <h4 className="fw-bold text-center">Detailed Hiring Process</h4>
              </div>
              <div className="card-body p-5">
                <p className="card-text lh-base" style={{textAlign:'justify'}}> <span className='fw-bold'>1. Consultation with the Client Company -</span> Our consultant will either visit or call the client company for a detailed discussion on the search criteria and current efforts to fill the role.</p>
                <p className="card-text lh-base" style={{textAlign:'justify'}}> <span className='fw-bold'>2. Screening of Candidates - </span> Based on the requirements, our consultant will prepare a list of candidates from our databank.</p>
                <p className="card-text lh-base" style={{textAlign:'justify'}}> <span className='fw-bold'>3. Candidate Interview -</span> Our Consultant will discuss with the candidates about the role considering experience, skillset, language proficiency, interest in the position available, and their “fit” with the client company.</p>
                <p className="card-text lh-base" style={{textAlign:'justify'}}> <span className='fw-bold'>4. Client Interview-</span> Our Consultant will pass the screened candidates to the client company and serve as a direct liaison in arranging for candidate interviews by the company.</p>
                <p className="card-text lh-base" style={{textAlign:'justify'}}> <span className='fw-bold'>5. Client Feedback - </span> Feedback on interviews, signing of contract and negotiation of terms and conditions</p>
                <p className="card-text lh-base" style={{textAlign:'justify'}}> <span className='fw-bold'>6. Hiring - </span> Once the client and the candidate agrees on the terms and conditions, the hiring decision is finalized and an employment contract is signed.</p>
                <p className="card-text lh-base text-center fw-bold mt-5" style={{textAlign:'justify'}}>GET IN TOUCH WITH US TODAY, WE CAN HELP YOU TO REALISE YOUR DREAM.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
          <div className="card rounded-0 h-100 ">
              <div className="card-header rounded-0">
                <h4 className="fw-bold text-center">Our Recruitment Process</h4>
              </div>
              <div className="card-body ">
              <p className="lh-base" style={{textAlign:'justify'}}>When we get a requirement from our clients, we will search the databank for candidates.</p>
        <div className="container">
          <p className="lh-base"><span className='pe-2' style={{color:'#fe5722'}}><GiPolarStar /></span> If a candidate matches the job description and eligibility criteria, we will shortlist the candidate and arrange for an interview.</p>
          <p className="lh-base"><span className='pe-2' style={{color:'#fe5722'}}><GiPolarStar /></span>  If a match is not found in the data bank for the given description, we make advertisements(online, offline, social media) for this job requirement.</p>
          <p className="lh-base"><span className='pe-2' style={{color:'#fe5722'}}><GiPolarStar /></span> After advertising, we will screen the applications received.</p>
          <p className="lh-base"><span className='pe-2' style={{color:'#fe5722'}}><GiPolarStar /></span>  If they satisfy the job description, an interview will be scheduled.</p>
          <p className="lh-base"><span className='pe-2' style={{color:'#fe5722'}}><GiPolarStar /></span> If they don't satisfy, their profile will add to the data bank. Next time, when we receive a requirement, we first search our databank to see if someone meets the criteria, we will contact and schedule an interview.</p>
          <p className="lh-base"><span className='pe-2' style={{color:'#fe5722'}}><GiPolarStar /></span> In the interview, Our experts will shortlist profiles. Shortlisted profiles will be shared with our clients.</p>
          <p className="lh-base"><span className='pe-2' style={{color:'#fe5722'}}><GiPolarStar /></span> The final interview will be scheduled by the client.</p>
          <p className="lh-base"><span className='pe-2' style={{color:'#fe5722'}}><GiPolarStar /></span> After the final interview, we help the selected candidates with the visa process and emigration formalities.</p>
        </div>
              </div>
            </div>
          </div>
         
      
  
       
        
        </div>
      </div>
      <div className="container">
            <div className="row">
            <div className="col-lg-6">
            <div className="card card-body p-4">
              <h5 className="card-title text-center">Aftercare Services</h5>
              <p className="card-text lh-base " style={{textAlign:'justify'}}>Our work does not end with the introduction of talent to client companies but continues into providing aftercare services. Our consultants maintain regular contact with both client and candidate to ensure that the two can maintain a good relationship that allows for a satisfying and successful work experience over a long period.</p>
              <p className="card-text lh-base " style={{textAlign:'justify'}}>We always ensure that our recruit meets the expectations of our clients and the right candidate with desired qualification and relevant work experience get on board.</p>
            </div>
        
          </div>
          <div className="col-lg-6">
            <div className="care-img">
              <img src="https://digitalworkforce.com/wp-content/uploads/2023/02/HEALTH-US.jpg" alt="care" className="img-fluid w-100 h-100 mx-auto d-block" />
            </div>
          </div>
            </div>
          </div>
          <div className="container mt-5 " style={{backgroundColor:'#0f2239',color:'#fff'}}>
            <div className="d-flex flex-row justify-content-between align-items-center px-3 py-4 ">
              <div className="">Reach out to know about any recent openings.</div>
              <a href="" className="btn btn-sm fw-semibold text-capitalize" style={{backgroundColor:'#fe5722',color:'#fff'}}>Contact Us</a>
            </div>
          </div>
     
     
          
       
     
      <div className="footer">
        <Footer/>
      </div>
    </div>
  )
}
export default Process