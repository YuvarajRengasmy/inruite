import React from 'react'
import Header from '../Components/Header/Header';
import { Link } from 'react-router-dom';


export const Blogs = () => {
  return (
    <>
      <div>
        <Header />
      </div>

      <div className="container-fluid" style={{ marginTop: '120px' }}>
        <div className="row">
          <div className="col-12">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPDJKa2bZtTe0MQdpO3yRbuuF1hM1JcNUbIw&s" className="d-block w-100 position-relative" alt="IMAGE1" style={{ height: '50vh' }} />

            <div className="about-header">
              <div className="d-flex flex-row gap-3">
                <div className="home-link">
                  <Link to="/#" className=" link-underline-dark  mx-3 " style={{ color: '#0f2239', fontVariant: 'all-small-caps', fontSize: '18px' }}>InRecruit HR Services Private Limited</Link>
                </div>
                <div className="about-link">
                  <Link to="/#" className=" link-underline-dark" style={{ color: '#0f2239', fontVariant: 'all-small-caps', fontSize: '18px' }}>About Us</Link>
                </div>
              </div>
            </div>
          </div>
          <span class="border-bottom mt-3"></span>
        </div>
      </div>


      {/* // Cards */}


      <div className="container my-5">
        <div className="row g-3">
  
          <div className="col-md-3">
            <div className="card card-body border-0 rounded-0 p-4 h-100" >
            <img src='https://366e203a.rocketcdn.me/wp-content/uploads/2020/11/Queens-University-Belfast.jpg' className="d-block w-100 position-relative" alt="IMAGE1" style={{ height: '50vh' }} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card card-body border-0 rounded-0 p-4 h-100" >
              <div className="card-title text-center">Your Ultimate guide forland</div>
              <p className="card-text" style={{ textAlign: 'justify' }}>OverseasJobs</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card card-body border-0 rounded-0 p-4 h-100" style={{ backgroundColor: '#0f2239', color: '#fff' }}>
              <div className="card-title text-center">People consultant</div>
              <p className="card-text" style={{ textAlign: 'justify' }}>Process/People consultant assists in searching for solutions with methods that facilitate and raise creativity of the client company so that they will be able to implement solutions themselves.</p>
            </div>
          </div>
        </div>
      </div>

   
 </>
  )
}
export default Blogs