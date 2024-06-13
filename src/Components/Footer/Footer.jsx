import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaMobile } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
export const Footer = () => {
  return (
    <div>
    <div className="container my-5">
      <div className="row g-3">
        <div className="col-12 col-sm-6 col-md-4">
          <div className="footer-logo">
            <a href="#"><img src="https://www.inrecruit.in/images/logo/fynd-career.png" alt="" className="img-fluid navbar-brand" /></a>
          </div>
          <div className="footer-content">
            <p className="" style={{ textAlign: 'justify' }}>Elevate your career with premier overseas job placements at Inrecruit HR Services Get Expert guidance for international job opportunities.Contact us now for tailored career solutions!</p>
          </div>
      
        </div>
        <div className="col-12 col-sm-6 col-md-4 mt-4">
          <div className="link-header">
            <h4 className="text-capitalize fw-semibold text-center"> Useful Links</h4>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-evenly mt-4">
              <div className="d-flex flex-column align-items-center justify-content-center" style={{ textAlign: 'justify' }}>
                <div className="footer-content">
                  <p className="text-capitalize fw-semibold">Home</p>
                  <p className="text-capitalize fw-semibold">about us </p>
                  <p className="text-capitalize fw-semibold">services</p>
                  <p className="text-capitalize fw-semibold">industries</p>
                  <p className="text-capitalize fw-semibold">process</p>
                </div>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center" style={{ textAlign: 'justify' }}>
                <div className="footer-content">
                  <p className="text-capitalize fw-semibold">overseas recruitment</p>
                  <p className="text-capitalize fw-semibold">ticket immigration </p>
                  <p className="text-capitalize fw-semibold">permanent hiring</p>
                  <p className="text-capitalize fw-semibold">contact hiring</p>
                  <p className="text-capitalize fw-semibold">job fair</p>
                </div>
              </div>
            </div>
         
        </div>
        <div className="col-12 col-sm-6 col-md-4 mt-4">
          <div className="link-header">
            <h4 className="text-capitalize text-center">Contact</h4>
            
          </div>
          <div className="contact-details">
            <div className="contact-address  ">
            <div className="d-flex flex-row align-items-center justify-content-start gap-2">
            <h4 className="" style={{color:'#fe5722'}}><FaHome /></h4>
            <div className="d-flex flex-column">
             
              <p style={{ fontSize: '0.900rem', textAlign: 'justify' }}>
              Daaru Complex,No.17/A2,    3rd Floor,Gandhi Road,     Alwarthirunagar,Chennai   600087,Tamilnadu,India
              </p>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center justify-content-start gap-2">
            <h4 className="" style={{color:'#fe5722'}}><IoIosMail /></h4>
            <div className="d-flex flex-column">
             
              <p style={{ fontSize: '0.900rem', textAlign: 'justify' }}>
              cv@inrecruit.in 
              </p>
            </div>
          </div>
          <div className="d-flex flex-row  align-items-center justify-content-start gap-2">
            <h4 className="" style={{color:'#fe5722'}}><FaMobile /></h4>
            <div className="d-flex flex-column">
             
              <p style={{ fontSize: '0.900rem', textAlign: 'justify' }}>
              +91-98403 11684            
              </p>
            </div>
          </div>
            </div>
          </div>

        </div>
        </div>
        <div className="row g-5">
          <div className="col-12 col-md-4 col-sm-6">
          <div className="footer-icon d-flex flex-row align-items-center justify-content-around">
            <div className="facebook-icon rounded-circle fw-bold px-2 pt-1 pb-2" style={{ backgroundColor: '#fe5722', color: 'white', fontSize: '18px' }}> <FaFacebookF /></div>
            <div className="linkedin-icon rounded-circle fw-bold px-2 pt-1 pb-2" style={{ backgroundColor: '#fe5722', color: 'white', fontSize: '18px' }}> <FaLinkedinIn /></div>
            <div className="instagram-icon rounded-circle fw-bold px-2 pt-1 pb-2" style={{ backgroundColor: '#fe5722', color: 'white', fontSize: '18px' }}> <FaInstagram /></div>
            <div className="youtube-icon rounded-circle fw-bold px-2 pt-1 pb-2" style={{ backgroundColor: '#fe5722', color: 'white', fontSize: '18px' }}> <FaYoutube /></div>
            <div className="twitter-icon rounded-circle fw-bold px-2 pt-1 pb-2" style={{ backgroundColor: '#fe5722', color: 'white', fontSize: '18px' }}><FaXTwitter /></div>
          </div>
          </div>
          <div className="col-12 col-md-8 col-sm-6">
          <div className="d-flex flex-row align-items-center justify-content-center gap-3">
            <h4 className="" style={{color:'#fe5722'}}><FaRegCopyright /></h4>
            <div className="d-flex flex-column ">
             
              <p style={{ fontSize: '0.900rem', textAlign: 'justify' }}>
              2024 Copyright: <span style={{color:'#fe5722'}}> InRecuruit</span>
              </p>
            </div>
          </div>
          </div>
          
     
      </div>
    </div>
  </div>
  
  )
}
export default Footer