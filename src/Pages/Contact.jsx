import React from 'react'
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { Link } from 'react-router-dom';
export const Contact = () => {
  return (
    <>
      <div className=" ">
        <Header />
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
                  <Link to="/Contact" className="text-decoration-none " style={{ color: '#0f2239',fontVariant:'all-small-caps',fontSize:'18px' }}>Contact</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid" style={{ marginTop: '125px', background: '#eceff3' }}>
        <div className="container">
        <div className="row g-5" >
       
<div className="col-md-6" >
<h2 class='mb-5 fw-semibold text-center'>Get In Touch With Us</h2>
  <div class="row mb-3">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
    </div>
  </div>

  <div class="row mb-3">
    <div class="col">
      <input type="text" class="form-control" placeholder="Email Address" aria-label="Email Address" />
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Phone Number" aria-label="Phone Number" />
    </div>
  </div>

  <div class="col">
    <select class="form-select" aria-label="Default select example">
      <option selected>Select Services</option>
      <option value="became a partner">Became a Partner</option>
      <option value="permanent staffing">Permanent Staffing</option>
      <option value="overseas recruitment">Overseas Recruitment</option>
      <option value="executive search">Executive Search</option>
      <option value="contact hiring">Contact Hiring</option>
      <option value="payroll management">PayRoll Management</option>
      <option value="job fair">Job Fair</option>
      <option value="technical trade test">Technical Trade Test</option>
      <option value="ticketing & emigration">Ticketing & Emigration</option>
      <option value="campus recruitment">Campus Recruitment</option>
    </select>
  </div>
  <div class="mt-3">
    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Message" rows="5"></textarea>
  </div>
  <button type="button" class="btn  mt-3 p-2 w-25 float-end text-uppercase fw-semibod" style={{backgroundColor:'#fe5722',color:'#fff'}}>Submit</button>
</div>


<div className="col-md-6 " style={{ background: '#fff' }}>
  <h5 className='p-3'>Our Address</h5>
  <p className='p-3' style={{textAlign:'justify'}}>InRecruit HR Services Private Limited <br />
    Daaru Complex, No. 17/A2, 3rd Floor, Gandhi Road, <br />Alwarthirunagar, Chennai - 600087. India</p>

  <div className='p-3'>

    <div className='d-inline p-2'>
      <div class=" d-inline fw-bold">Phone:</div>
      <div class=" d-inline">+91-98403 11684</div>

    </div>

    <div className='p-2'>
      <div class=" d-inline fw-bold">E-Mail :</div>
      <div class=" d-inline"> cv@inrecruit.in</div>

    </div>

    {/* <div className='d-inline p-2'>
      <div class=" d-inline fw-bold">job-Enquiry:</div>
      <div class=" d-inline"></div>

    </div> */}
  </div>
  <div className="col mx-auto d-block">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.233692197643!2d80.1710977148219!3d13.040495216397233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266f1a5436ac9%3A0x1b49c88cf925c255!2sInRecruit%20HR%20Services%20Private%20Limited!5e0!3m2!1sen!2sin!4v1649867087869!5m2!1sen!2sin" 
       style={{width:"500px",height:"200px",border:"0"}} allowfullscreen="" loading="lazy"></iframe>
  </div>

 
</div>
</div>
        </div>
     
      
      </div>

      <div>
        <Footer />
      </div>



    </>
  )
}
export default Contact