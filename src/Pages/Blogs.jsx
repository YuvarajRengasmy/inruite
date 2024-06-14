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


      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
          <div class="card" style={{width: '18rem'}}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMq2ndMHqF6tbdcH0OQwud8DsI0Z385EvbfjKK-Ob-ng&s' class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>

        </div>
      </div>
    </div >

   
 </>
  )
}
export default Blogs