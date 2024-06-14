import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { Link } from 'react-router-dom';

export const Clients = () => {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="container" style={{ marginTop: '120px' }}>
        <div className="row">
          <div className="col-12">
            <div className="about-header">
              <div className="d-flex flex-column flex-sm-row gap-3">
                <div className="home-link">
                  <Link to="/" className="text-decoration-none border-end border-3 border-dark px-3" style={{ color: '#0f2239', fontVariant: 'all-small-caps', fontSize: '18px' }}>Home</Link>
                </div>
                <div className="about-link">
                  <Link to="/Client" className="text-decoration-none" style={{ color: '#0f2239', fontVariant: 'all-small-caps', fontSize: '18px' }}>Client</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="card rounded-0 card-body p-5 h-100">
              <h5 className="card-title text-capitalize fw-bold text-center">Our Clients</h5>
              <p className="card-text lh-base mt-3" style={{ textAlign: 'justify' }}>
                A true partnership is a two-way street — ideas and information flow openly and regularly, based on a foundation of mutual trust and respect for one another’s expertise — and our clients embrace this philosophy. Synergistic and goal-oriented relationships are the best and most effective, and a long-term relationship adds the value of extensive industry and company knowledge and relationships.
              </p>
              <p className="card-text lh-base mt-3" style={{ textAlign: 'justify' }}>
                Our client list speaks for itself. Since our earliest days, we’ve represented everything from start-ups to Fortune 500 companies with that same partnership approach and dedication at the core of every engagement. Every day, we’ve been devoting our hearts and minds to our clients, achieving great successes and building lasting relationships.
              </p>
              <p className="card-text text-center fw-bold mt-3" style={{ textAlign: 'justify', fontSize: '14px' }}>YOU'RE IN GOOD HANDS WITH OUR CLIENTS.</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="client-image">
              <img src="https://images.inc.com/uploaded_files/image/1920x1080/getty_512155019_117354.jpg" alt="" className="img-fluid w-100 h-100 mx-auto d-block" />
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <div className="d-flex flex-wrap justify-content-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFL7sbNBCPzO2_tTU_HeNlpE3ernbduQzKaQ&s" alt="imgfluid" className="img-fluid m-2" style={{ width: '150px', height: 'auto' }} />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFL7sbNBCPzO2_tTU_HeNlpE3ernbduQzKaQ&s" alt="imgfluid" className="img-fluid m-2" style={{ width: '150px', height: 'auto' }} />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFL7sbNBCPzO2_tTU_HeNlpE3ernbduQzKaQ&s" alt="imgfluid" className="img-fluid m-2" style={{ width: '150px', height: 'auto' }} />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFL7sbNBCPzO2_tTU_HeNlpE3ernbduQzKaQ&s" alt="imgfluid" className="img-fluid m-2" style={{ width: '150px', height: 'auto' }} />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFL7sbNBCPzO2_tTU_HeNlpE3ernbduQzKaQ&s" alt="imgfluid" className="img-fluid m-2" style={{ width: '150px', height: 'auto' }} />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFL7sbNBCPzO2_tTU_HeNlpE3ernbduQzKaQ&s" alt="imgfluid" className="img-fluid m-2" style={{ width: '150px', height: 'auto' }} />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFL7sbNBCPzO2_tTU_HeNlpE3ernbduQzKaQ&s" alt="imgfluid" className="img-fluid m-2" style={{ width: '150px', height: 'auto' }} />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFL7sbNBCPzO2_tTU_HeNlpE3ernbduQzKaQ&s" alt="imgfluid" className="img-fluid m-2" style={{ width: '150px', height: 'auto' }} />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFL7sbNBCPzO2_tTU_HeNlpE3ernbduQzKaQ&s" alt="imgfluid" className="img-fluid m-2" style={{ width: '150px', height: 'auto' }} />
            </div>
          </div>
        </div>
        <div className="container mt-5" style={{ backgroundColor: '#0f2239', color: '#fff' }}>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center px-4 py-4">
            <div>Reach out to know about any recent openings.</div>
            <a href="" className="btn btn-sm fw-semibold text-capitalize mt-2 mt-md-0" style={{ backgroundColor: '#fe5722', color: '#fff' }}>Contact Us</a>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Clients;
