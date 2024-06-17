import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaTwitter, FaHome, FaMobile, FaRegCopyright } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

export const Footer = () => {
  return (
    <footer>
      <div className="container my-5 mx-auto d-block">
        <hr />
        <div className="row g-3 justify-content-center">
          {/* Company Logo and Description */}
          <div className="col-12 col-sm-6 col-md-3">
            <div className="footer-logo">
              <a href="#">
                <img src="https://www.inrecruit.in/images/logo/fynd-career.png" alt="Inrecruit HR Services Logo" className="img-fluid navbar-brand mx-auto d-block" style={{ maxWidth: '180px' }} />
              </a>
            </div>
            <div className="footer-content">
              <p style={{ textAlign: 'justify' }}>
                Elevate your career with premier overseas job placements at Inrecruit HR Services. Get expert guidance for international job opportunities. Contact us now for tailored career solutions!
              </p>
            </div>
            <div className="footer-icon d-flex flex-row align-items-center justify-content-around">
              {[
                { component: FaFacebookF, className: 'facebook-icon' },
                { component: FaLinkedinIn, className: 'linkedin-icon' },
                { component: FaInstagram, className: 'instagram-icon' },
                { component: FaYoutube, className: 'youtube-icon' },
                { component: FaTwitter, className: 'twitter-icon' },
              ].map(({ component: Icon, className }, index) => (
                <div key={index} className={`social-icon ${className} badge rounded-circle py-2`} style={{ backgroundColor: '#fe5722', color: 'white', fontSize: '18px' }}>
                  <Icon />
                </div>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-12 col-sm-6 col-md-4 mt-4">
            <div className="link-header">
              <h4 className="text-capitalize fw-bold text-center">Useful Links</h4>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-evenly mt-4">
              {[
                ['Home', 'About Us', 'Services', 'Industries', 'Process'],
                ['Overseas Recruitment', 'Ticket Immigration', 'Permanent Hiring', 'Contract Hiring', 'Job Fair'],
              ].map((links, colIndex) => (
                <div key={colIndex} className="d-flex flex-column align-items-center">
                  <div className="footer-content">
                    {links.map((link, linkIndex) => (
                      <p key={linkIndex} className="text-capitalize fw-normal">{link}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-12 col-sm-6 col-md-3 mt-4">
            <div className="link-header">
              <h4 className="text-capitalize text-center">Contact</h4>
            </div>
            <div className="contact-details">
              {[
                { icon: FaHome, text: 'Daaru Complex, No.17/A2, Gandhi Road, Alwarthirunagar, Chennai 600087, Tamilnadu, India' },
                { icon: IoIosMail, text: 'cv@inrecruit.in' },
                { icon: FaMobile, text: '+91-98403 11684' },
              ].map(({ icon: Icon, text }, index) => (
                <div key={index} className="d-flex flex-row align-items-center justify-content-start gap-2">
                  <Icon style={{ color: '#fe5722', fontSize: '1.5rem' }} />
                  <p className='fs-6' style={{ fontSize: '0.9rem', textAlign: 'justify' }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="container-fluid" style={{ backgroundColor: '#0f2239', color: 'white' }}>
        <div className="container">
          <div className="row g-3">
            <div className="col-12">
              <p className='text-center' style={{ fontSize: '0.9rem' }}>
                <FaRegCopyright /> 2024 Copyright: InRecruit
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
