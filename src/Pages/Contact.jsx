import React from 'react'
import Header from '../Components/Header/Header';

export const Contact = () => {
  return (
    <>
      <div className=" ">
        <Header />
      </div>


<div className="container-fluid" style={{marginTop:'125px'}}>
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
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
</div>

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