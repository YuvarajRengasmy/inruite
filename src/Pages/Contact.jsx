import React from 'react'
import Header from '../Components/Header/Header';

export const Contact = () => {
  return (
    <>
      <div className=" ">
        <Header />
      </div>

    
      <div className="container-fluid" style={{ marginTop: '125px' }}>
      <h2 class='mb-5'>Get In Touch With Us</h2>
        <div className="row">
          <div className="col-md-6">
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
              <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Message"rows="3"></textarea>
            </div>
            <button type="button" class="btn btn-primary mt-3 p-1 w-25">Submit</button>
          </div>


          <div className="col-md-6">
            jgjdsjdsj
          </div>
        </div>
      </div>



    </>
  )
}
export default Contact