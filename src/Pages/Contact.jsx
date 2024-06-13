import React from 'react'
import Header from '../Components/Header/Header';

export const Contact = () => {
  return (
    <>
      <div className=" ">
        <Header />
      </div>

      <div className='container-fluid bg-light ' style={{ marginTop: '125px' }}>
        <div className="row">
          <div className="col-md-12">
          <form className='py-5 px-3' >
          <div class="row mb-3">
            <div class="col-md-3">
              <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
            </div>
            <div class="col-md-3">
              <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-3">
              <input type="text" class="form-control" placeholder="Email Address" aria-label="Email Address" />
            </div>
            <div class="col-md-3">
              <input type="text" class="form-control" placeholder="Phone Number" aria-label="Phone Number" />
            </div>

          </div>

          <div class="row mb-3">
            <div className="col-md-6">
              <select class="form-select col-md-6" aria-label="Default select example">
                <option selected>Select Services</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </form>
          </div>
        </div>
        
      
      </div>
    </>
  )
}
export default Contact