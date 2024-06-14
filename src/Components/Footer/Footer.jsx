import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaTwitter, FaHome, FaMobile, FaRegCopyright } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

export const Footer = () => {
  return (
    <footer>
      <div className="container my-5">
        <div className="row g-3">
          <div className="col-12 col-sm-6 col-md-4">
            <div className="footer-logo">
              <a href="#"><img src="https://www.inrecruit.in/images/logo/fynd-career.png" alt="Inrecruit HR Services Logo" className="img-fluid navbar-brand" /></a>
            </div>
            <div className="footer-content">
              <p style={{ textAlign: 'justify' }}>
                Elevate your career with premier overseas job placements at Inrecruit HR Services. Get expert guidance for international job opportunities. Contact us now for tailored career solutions!
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 mt-4">
            <div className="link-header">
              <h4 className="text-capitalize fw-semibold text-center">Useful Links</h4>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-evenly mt-4">
              <div className="d-flex flex-column align-items-center">
                <div className="footer-content">
                  <p className="text-capitalize fw-semibold">Home</p>
                  <p className="text-capitalize fw-semibold">About Us</p>
                  <p className="text-capitalize fw-semibold">Services</p>
                  <p className="text-capitalize fw-semibold">Industries</p>
                  <p className="text-capitalize fw-semibold">Process</p>
                </div>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div className="footer-content">
                  <p className="text-capitalize fw-semibold">Overseas Recruitment</p>
                  <p className="text-capitalize fw-semibold">Ticket Immigration</p>
                  <p className="text-capitalize fw-semibold">Permanent Hiring</p>
                  <p className="text-capitalize fw-semibold">Contact Hiring</p>
                  <p className="text-capitalize fw-semibold">Job Fair</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 mt-4">
            <div className="link-header">
              <h4 className="text-capitalize text-center">Contact</h4>
            </div>
            <div className="contact-details">
              <div className="contact-address">
                <div className="d-flex flex-row align-items-center justify-content-center gap-2">
                  <h4 style={{ color: '#fe5722' }}><FaHome /></h4>
                  <div className="d-flex flex-column">
                    <p style={{ fontSize: '0.9rem', textAlign: 'justify' }}>
                      Daaru Complex, No.17/A2, 3rd Floor, Gandhi Road, Alwarthirunagar, Chennai 600087, Tamilnadu, India
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-start gap-2">
                  <h4 style={{ color: '#fe5722' }}><IoIosMail /></h4>
                  <div className="d-flex flex-column">
                    <p style={{ fontSize: '0.9rem', textAlign: 'justify' }}>
                      cv@inrecruit.in
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-start gap-2">
                  <h4 style={{ color: '#fe5722' }}><FaMobile /></h4>
                  <div className="d-flex flex-column">
                    <p style={{ fontSize: '0.9rem', textAlign: 'justify' }}>
                      +91-98403 11684
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-fluid p-4" style={{ backgroundColor: '#0f2239', color: 'white' }}>
        <div className="container">
          <div className="row g-3">
            <div className="col-12 col-md-4 col-sm-6">
              <div className="footer-icon d-flex flex-row align-items-center justify-content-around">
                <div className="social-icon facebook-icon rounded-circle fw-bold px-3 pt-2 pb-3" style={{ backgroundColor: '#fe5722', color: 'white', fontSize: '18px' }}>
                  <FaFacebookF />
                </div>
                <div className="social-icon linkedin-icon rounded-circle fw-bold px-3 pt-2 pb-3" style={{ backgroundColor: '#fe5722', color: 'white', fontSize: '18px' }}>
                  <FaLinkedinIn />
                </div>
                <div className="social-icon instagram-icon rounded-circle fw-bold px-3 pt-2 pb-3" style={{ backgroundColor: '#fe5722', color: 'white', fontSize: '18px' }}>
                  <FaInstagram />
                </div>
                <div className="social-icon youtube-icon rounded-circle fw-bold px-3 pt-2 pb-3" style={{ backgroundColor: '#fe5722', color: 'white', fontSize: '18px' }}>
                  <FaYoutube />
                </div>
                <div className="social-icon twitter-icon rounded-circle fw-bold px-3 pt-2 pb-3" style={{ backgroundColor: '#fe5722', color: 'white', fontSize: '18px' }}>
                  <FaTwitter />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-8 col-sm-6">
              <div className="d-flex flex-row align-items-center justify-content-center gap-3">
                <h4><FaRegCopyright /></h4>
                <p style={{ fontSize: '0.9rem', textAlign: 'justify' }}>
                  2024 Copyright: <span>InRecruit</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
