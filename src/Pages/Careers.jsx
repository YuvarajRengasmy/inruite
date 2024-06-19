
import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { Link } from 'react-router-dom';

export const Careers = () => {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
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

      <div className="container " >
        <div className="row">
          <div className="col-12">
            <div className="about-header">
              <div className="d-flex flex-row gap-3">
                <div className="home-link">
                  <Link to="/" className="text-decoration-none border-end border-3 border-dark px-3 text-dark" style={{ fontVariant: 'all-small-caps', fontSize: '18px' }}>Home</Link>
                </div>
                <div className="about-link">
                  <Link to="/Careers" className="text-decoration-none text-dark" style={{ fontVariant: 'all-small-caps', fontSize: '18px' }}>Careers</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="p-0" />

      <div className="container my-5">
        <div className="row gy-4">
        <div className="col-lg-6 col-md-12">
            <div className="card rounded-0 card-body p-4 h-100" style={{backgroundColor:'#0f2239',color:'#fff'}}>
              <h5 className="card-title text-capitalize fw-bold text-center">A Career That Fits Your Calling</h5>
              <p className="card-text lh-base mt-3" style={{ textAlign: 'justify' }}>
                Achieve seamless integration in resource-intensive partnerships through leading niche markets. Cultivate personalized customer service with innovative concepts. Dynamically enhance resource distribution for cutting-edge customer support. Objectively innovate empowered manufactured products on parallel platforms. Holistically dominate scalable testing procedures for dependable supply chains.
              </p>
              <p className="card-text text-center fw-bold mt-3" style={{ textAlign: 'justify', fontSize: '14px' }}>WORKING WITH US</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
          <div className="image-card">
          <img src="https://www.shutterstock.com/image-photo/happy-mid-aged-business-woman-600nw-2353012835.jpg" alt="" className="img-fluid card1 h-100 p-0  w-100  mx-auto d-block" />
        </div>
           
          </div>
      
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <div className="card card-body p-4">
              <h4 className="fw-bold text-center">Learn about our interview process</h4>
              <p className="lh-base text-center" style={{ textAlign: 'justify' }}>
                We are excited to get to know you and help you get to know us through our interview process.
              </p>
              <div className="d-inline mx-auto d-block text-center">
                <a href="/Process" className="btn px-3 py-2 text-semibold text-uppercase rounded-5" style={{ backgroundColor: '#fe5722', color: '#fff' }}>what we are looking for</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <div className="card card-body p-4">
              <h4 className="fw-bold text-center">Explore Exciting Opportunities Abroad!</h4>
              <p className="lh-base" style={{ textAlign: 'justify' }}>
                Embark on a journey to new horizons with our international career opportunities. At InRecruit, we believe in the power of diverse perspectives and global experiences to drive innovation and growth. We help you discover exciting roles in vibrant locations around the world. Whether you're seeking adventure, professional development, or a chance to make a meaningful impact on a global scale, we invite you to explore various open positions abroad. Your next career chapter awaits!
              </p>
              <div className="d-inline mx-auto d-block text-center">
                <button type="button" className="btn fw-semibold text-uppercase px-3 py-2 rounded-5" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ backgroundColor: '#fe5722', color: '#fff' }}>
                  apply now
                </button>
              </div>

              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">Enquiry Form</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div class="row mb-3">
                          <div class="col">
                            <label className="form-label fw-bold" htmlFor="basic-form-name">Name</label>
                            <input className="form-control" id="basic-form-name" type="text" placeholder="Name" />
                          </div>
                          <div class="col">
                            <label className="form-label fw-bold" htmlFor="basic-form-email">Email address</label>
                            <input className="form-control" id="basic-form-email" type="email" placeholder="Email Address" />
                          </div>
                        </div>
                        <div class="row mb-3">
                          <div class="col">
                          <label className="form-label fw-bold" htmlFor="basic-form-number">Phone Number</label>
                          <input className="form-control" id="basic-form-number" type="text" placeholder="Phone Number" />
                          </div>
                          <div class="col">
                            <label className="form-label fw-bold" htmlFor="basic-form-Location">Current Location</label>
                            <input className="form-control" id="basic-form-Location" type="email" placeholder="Current Location" />
                          </div>
                        </div>
                       
                      
                        <div className="mb-3">
                          <label className="form-label fw-bold">Upload Image</label>
                          <input className="form-control" type="file" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label fw-bold" htmlFor="basic-form-textarea">Message</label>
                          <textarea className="form-control" id="basic-form-textarea" rows="4" placeholder="Message"></textarea>
                        </div>
                     
                    
                        </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" className="btn" style={{ backgroundColor: '#fe5722', color: '#fff' }}>Submit</button>
                    </div>
                    
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="container my-5  d-none d-lg-block">
        <div className="row">
          <div className="col-12">
            <div className="card card-body p-4">
            <table className="table table-responsive table-borderless ">
  <thead  className='table-light '>
  <tr>
                  <th>S.No</th>
                  <th>Job Title</th>
                  <th >Country</th>
                  <th>Salary</th>
                  <th className=''>Experience</th>
                  <th className=''>Job Details</th>
                  <th>Apply</th>
                </tr>
  </thead>
  <tbody>
  <tr>
              <th>01</th>
                  <td>AI</td>
                  <td>New York</td>
                  <td>$30,000</td>
                  <td  className=''>+5 Years</td>
                  <td  className=''>nnnnnnn</td>
                  <td>    <button type="button" className="btn btn-sm fw-semibold text-uppercase px-2 py-1 rounded-5" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ backgroundColor: '#fe5722', color: '#fff' }}>
                  apply now
                </button></td>
              </tr>
              <tr>
              <th>02</th>
                  <td>AI</td>
                  <td>New York</td>
                  <td>$30,000</td>
                  <td  className=''>+5 Years</td>
                  <td  className=''>nnnnnnn</td>
                  <td>    <button type="button" className="btn btn-sm fw-semibold text-uppercase px-2 py-1 rounded-5" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ backgroundColor: '#fe5722', color: '#fff' }}>
                  apply now
                </button></td>
              </tr>
              <tr>
              <th>03</th>
                  <td>AI</td>
                  <td>New York</td>
                  <td>$30,000</td>
                  <td  className=''>+5 Years</td>
                  <td  className=''>nnnnnnn</td>
                  <td >    <button type="button" className="btn btn-sm fw-semibold text-uppercase px-2 py-1 rounded-5" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ backgroundColor: '#fe5722', color: '#fff' }}>
                  apply now
                </button></td>
              </tr>
  </tbody>
</table>
              <table className="table table-responsive table-hover">
          
              
          
              </table>
            
            
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5  d-lg-none">
        <div className="row">
          <div className="col-12">
            <div className="card card-body p-4">
            <table className="table table-responsive table-borderless ">
  <thead  className='table-light '>
  <tr>
                  <th>S.No</th>
                  <th>Job Title</th>
                  <th >Country</th>
                  <th>Salary</th>
                
                  <th>Apply</th>
                </tr>
  </thead>
  <tbody>
  <tr>
              <th>01</th>
                  <td>React</td>
                  <td>New York</td>
                  <td>$30,000</td>
                 
                  <td>    <button type="button" className="btn btn-sm fw-semibold text-uppercase px-2 py-1 rounded-5" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ backgroundColor: '#fe5722', color: '#fff' }}>
                  apply now
                </button></td>
              </tr>
              <tr>
              <th>02</th>
                  <td>AI</td>
                  <td>New York</td>
                  <td>$30,000</td>
                
                  <td>    <button type="button" className="btn btn-sm fw-semibold text-uppercase px-2 py-1 rounded-5" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ backgroundColor: '#fe5722', color: '#fff' }}>
                  apply now
                </button></td>
              </tr>
              <tr>
              <th>03</th>
                  <td>AI</td>
                  <td>New York</td>
                  <td>$30,000</td>
                 
                  <td >    <button type="button" className="btn btn-sm fw-semibold text-uppercase px-2 py-1 rounded-5" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ backgroundColor: '#fe5722', color: '#fff' }}>
                  apply now
                </button></td>
              </tr>
  </tbody>
</table>
              <table className="table table-responsive table-hover">
          
              
          
              </table>
            
            
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Careers;


