import React from 'react'
import Header from '../Components/Header/Header';
import './Home.css'
import { IoBarChartSharp } from "react-icons/io5";
import Footer from '../Components/Footer/Footer'
import Video1 from "../assets/video/video1.mp4"
import Video2 from "../assets/video/video2.mp4"
import Video3 from "../assets/video/video3.mp4"
import Video4 from "../assets/video/video4.mp4"

export const Home = () => {
  return (
    <>
      <div >
        <div className=" ">
          <Header />

        </div>
      
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active " aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"  aria-label="Slide 2 "></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"  aria-label="Slide 3 "></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active" style={{height:'95vh'}}>
      <div className="embed-responsive embed-responsive-16by9">
            <video className="d-block" style={{pointerEvents:"none"}} autoPlay muted loop controls>
              <source src={Video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        <div className="carousel-caption position-absolute">
          <h5 className="text-capitalize  text-center">digital transformation</h5>
          <p className="text-capitalize text-center">Reinventing Companies by delivering excellence</p>
          <a href="#" className="btn text-uppercase fw-semibold"  style={{backgroundColor:"#fe5722", color:"white"}}>view our services</a>
        </div>
      </div>
      <div className="carousel-item" style={{height:'95vh'}}>
      <div className="embed-responsive embed-responsive-16by9">
            <video className="d-block" style={{pointerEvents:"none",maxHeight:"50%",maxWidth:"100%"}} autoPlay muted loop controls>
              <source src={Video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        <div className="carousel-caption">
          <h5 className="text-capitalize">digital transformation</h5>
          <p className="text-capitalize text-center">Reinventing Companies by delivering excellence</p>
          <a href="#" className="btn text-uppercase fw-semibold" style={{backgroundColor:"#fe5722", color:"white"}}>view our services</a>
        </div>
      </div>
      <div className="carousel-item" style={{height:'95vh'}}>
      <div className="embed-responsive embed-responsive-16by9">
            <video className="d-block" style={{pointerEvents:"none",maxHeight:"50%",maxWidth:"100%"}} autoPlay muted loop controls>
              <source src={Video3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        <div className="carousel-caption">
          <h5 className="text-capitalize">digital transformation</h5>
          <p className="text-capitalize text-center">Reinventing Companies by delivering excellence</p>
          <a href="#" className="btn text-uppercase fw-semibold"  style={{backgroundColor:"#fe5722", color:"white"}}>view our services</a>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon " aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon " aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  <div className="container my-5">
        <div className="row g-4 mb-4">
          <div className="col-md-4">
            <h6 className="text-uppercase fw-bold" style={{color:'#0f2239'}}>INRECRUIT HR SERVICES PRIVATE LIMITED</h6>
            <h4 className='fw-normal' style={{textAlign:'justify',fontSize:'18px'}}>Whether you have immediate or pressing goals or long-term dreams, we will work with you to fulfill them.</h4>
          </div>
          <div className="col-md-8 align-self-center">
            <p>Bring to the table win-win survival strategies to ensure proactive domination. Our goal is to build a platform where business establishments across the globe and job aspirants can connect and achieve mutually beneficial results.</p>
          </div>
        </div>

        <div class="container my-5">
  <div class="row justify-content-center  g-3">
    <div class="col-lg-3">
      <div class="card border-0 rounded-0 shadow-lg hover-card text-center" style={{width:'15rem',height:'20rem'}}>
        <img src="https://www.ismartrecruit.com/upload/blog/main_image/social-media-recruitment.webp"  class="card-img-top img-fluid  rounded-0  h-50" alt="Recruiting"/>
        <div class="card-body">
          <h5 class="card-title text-center fw-bold">Recruiting</h5>
          <p class="card-text" style={{textAlign:'justify',fontSize:'14px'}}>Intermediary Between Organisation Recruiting Client And Individual Seeking Employment.</p>
        </div>
      </div>
    </div>
    
    <div class="col-lg-3 ">
      <div class="card border-0  rounded-0  shadow-lg h-100 hover-card" style={{width:'15rem',height:'20rem'}}>
        <img src="https://consultport.com/wp-content/uploads/2023/06/4-Underused-Tools-to-Streamline-Project-Management.png" class="card-img-top img-fluid  rounded-0  h-50" alt="Consulting"/>
        <div class="card-body">
          <h5 class="card-title  text-center fw-bold">Consulting</h5>
          <p class="card-text " style={{textAlign:'justify',fontSize:'14px'}}>Engaged In Business Of Giving Expert Advice To People Working In A Professional Or Technical Field.</p>
        </div>
      </div>
    </div>
    
    <div class="col-lg-3 ">
      <div class="card border-0  rounded-0  shadow-lg  hover-card" style={{width:'15rem',height:'20rem'}}>
        <img src="https://media.publit.io/file/w_1920,h_1080,c_fit,q_80/chrmpWebsite/featured-2.png" class="card-img-top img-fluid  rounded-0   h-50" alt="Training"/>
        <div class="card-body">
          <h5 class="card-title text-center fw-bold">Training</h5>
          <p class="card-text " style={{textAlign:'justify',fontSize:'14px'}}>Duties and responsibilities include developing instructional materials, organizing learning activities.</p>
        </div>
      </div>
    </div>
    
    <div class="col-lg-3  ">
      <div class="card border-0  rounded-0  shadow-lg hover-card" style={{width:'15rem',height:'20rem'}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7qOst_mq3nCogpvneWJmvjdVh4_Fzte6o2A&s" class="card-img-top img-fluid  rounded-0   h-50" alt="Outsourcing"/>
        <div class="card-body">
          <h5 class="card-title text-center fw-bold">Outsourcing</h5>
          <p class="card-text "style={{textAlign:'justify',fontSize:'14px'}}>Contract to provide a certain number of people to perform certain tasks for another company.</p>
        </div>
      </div>
    </div>
    
  
  </div>
</div>


  <div class="row g-3 py-3">
    <div class="col-sm-12">
      <p class="text-center fw-bold">We Always Strive Hard To Find The Right Person For The Right Job.</p>
    </div>
  </div>
</div>



<div class="container my-5">
  <div class="row">
    <div class="col-md-6 mb-4 mb-md-0">
      <div class="position-relative h-100">
        <img src="https://imageio.forbes.com/specials-images/imageserve/64a499c7ed583f23248aa486/Black-male-professional-presenting-at-business-meeting/960x0.jpg?height=474&width=711&fit=bounds" alt="image" class="img-fluid mx-auto d-block h-100 hover-card1" />
        <div class="position-absolute bottom-0 start-50 translate-middle-x w-100 p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.5)", color:" white"}}>
          <h2 class="text-center">About Us</h2>
          <p class="px-3">
            WE ALWAYS STRIVE HARD TO FIND THE RIGHT PERSON FOR THE RIGHT JOB.
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4 class="fw-bold">Mission of our company to give best service to customers.</h4>
      <p class="lh-lg" style={{textAlign: "justify"}}>
        We are one of the top Human Resource (HR) consultants, providing specialist advice and services to help
        businesses maximize the efficiency of their HR operations and implement appropriate new policies and procedures
        in the best way possible.
      </p>
      <p class="lh-lg" style={{textAlign: "justify"}}>
        Our primary domain, Talent management has emerged as an area of focus from a strategic HR standpoint. Our
        primary goal is to assist you in scaling through these processes, such as assessment, documentation, and filing.
        We have professionals who will guide you from the beginning to the end process (from getting an offer letter to
        getting a visa and accommodation).
      </p>
      <a href="#" class="btn  text-uppercase fw-bold" style={{backgroundColor: "#fe5722",color:'#fff'}}>
        Find out more
      </a>
    </div>
  </div>
</div>


<div className="container my-5">
      <div className="row g-5">
        <div className="col-md-4">
          <h4 className="h1 text-center  fw-semibold">Our Core Values</h4>
          <hr />
          <h5 className=" fw-semibold lh-base" style={{  fontSize: "1.28rem",wordSpacing:'30px' }}>
            <div className="d-flex flex-column gap-2 ">
            <span className='badge bg-success'> Accountability </span> 
            <span className='badge bg-success'>  Perseverance</span>
            <span className='badge bg-success'>Integrity</span>
            <span className='badge bg-success'>Discipline</span>
            <span className='badge bg-success'>Commitment</span>  
            <span className='badge bg-success'>Diligence</span>  
            </div>
            
           
          </h5>
        </div>
        <div className="col-md-8 align-self-center">
          <p className="lh-sm fw-light  " style={{ fontSize: "1rem", fontWeight: 300, textAlign: "justify" }}>
            InRecruit HR Services Private Limited ensures that our recruits meet the expectations of our clients, ensuring that the right candidates with the desired qualifications and relevant work experience come on board.
          </p>
          <div className="row row-cols-1 row-cols-sm-3 g-3">
            <div className="col">
              <div className="card card-body border-0 rounded-0 " style={{backgroundColor:'#fe5722',color:'#fff'}}>
              <h4 className="text-center h1" style={{ fontSize: "2rem", fontWeight: 600 }}>20+</h4>
              <p className="text-center" style={{ fontSize: "1rem", fontWeight: 400 }}>Countries Served</p>
              </div>
             
            </div>
            <div className="col">
            <div className="card card-body border-0 rounded-0"style={{backgroundColor:'#0f2239',color:'#fff'}}>
            <h4 className="text-center h1" style={{ fontSize: "2rem", fontWeight: 600 }}>200+</h4>
            <p className="text-center" style={{ fontSize: "1rem", fontWeight: 400 }}>Clients Served</p>
              </div>
             
            </div>
            <div className="col">
            <div className="card card-body bg-primary border-0 rounded-0"style={{color:'#fff'}}>
            <h4 className="text-center h1" style={{ fontSize: "2rem", fontWeight: 600 }}>1000+</h4>
            <p className="text-center" style={{ fontSize: "1rem", fontWeight: 400 }}>Our Success Stories</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container my-5">
  <div class="row">
    <div class="col-md-4 ">
      <div class="card h-100 rounded-0">
        <div class="card-body p-4">
          <h4 class="fw-bold h2">Our Practice Area</h4>
          <hr class="w-100 border border-2 rounded-3 border-primary"/>
          <p class="lh-base" style={{textAalign:" justify", fontSize:" 1rem", fontWeight:" 400"}}>
            Talent management has emerged as an area of focus from a strategic HR standpoint.
          </p>
          <p class="lh-base" style={{textAalign:" justify", fontSize:" 1rem", fontWeight:" 400"}}>
            The Human Resource Consulting Industry has emerged from management consulting and addresses human resource management tasks and decisions.
          </p>
          <div class="text-center mt-3">
            <a href="#" class="btn  text-uppercase fw-semibold" style={{backgroundColor: "#fe5722",color:'#fff'}}>
              View All Services
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-8 ">
      <div class="row">
        <div class="col-md-6 col-sm-12 my-3">
          <div class="card h-100">
            <div class="card-body p-4">
              <h5 class="fw-bold" style={{fontSize: '1rem'}}>Overseas Recruitment</h5>
              <p style={{fontSize:"0.878rem" ,textAlign:" justify"}}>
                Overseas is a staffing agency. Our primary business is providing a bridge between qualified workers and the businesses that require its services.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 my-3">
          <div class="card h-100">
            <div class="card-body p-4">
              <h5 class="fw-bold" style={{fontSize: '1rem'}}>Contract Hiring</h5>
              <p style={{fontSize:"0.878rem" ,textAlign:" justify"}}>
                Employee placed in a short-term position for a set period, with the possibility of being hired full-time when the contract ends.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 my-3">
          <div class="card h-100">
            <div class="card-body p-4">
              <h5 class="fw-bold" style={{fontSize: '1rem'}}>Permanent Staffing</h5>
              <p style={{fontSize:"0.878rem" ,textAlign:" justify"}}>
                Process of providing required candidates for long-term employment based on specified candidate factors.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 my-3">
          <div class="card h-100">
            <div class="card-body p-4">
              <h5 class="fw-bold" style={{fontSize: '1rem'}}>Executive Search</h5>
              <p style={{fontSize:"0.878rem" ,textAlign:" justify"}}>
                Specialized recruitment service to recruit qualified candidates for senior-level and executive jobs across the public and private sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="container-fluid my-5 " style={{backgroundColor:'#0f2239',color:'#fff'}}>
    <div className="row">
      <div className="col">
        <div className="container py-4">
          <h4 className="text-capitalize h2 fw-bold ">Industries That We Serve</h4>
          <p className="fs-5">We serve the clients of the following industries by providing quality professional services designed to support their mission and business needs.</p>
          <div className="row g-3">
            

            
            <div className="col-lg-2 col-sm-4">
              <div className="card   " style={{maxHeight:'8rem'}}>
              <img width="50" height="50" src="https://img.icons8.com/color/48/manufacturing.png" alt="manufacturing" className='mx-auto d-block'/>
                <div className="card-body">
                  <div className="text-capitalize  text-center text-dark"  style={{fontSize:'13px',fontWeight:'bold'}}>Manufacturing</div>
                </div>
              </div>
            </div>
            <div className="col-lg-2  col-sm-4">
              <div className="card " style={{maxHeight:'8rem'}}>
              <img width="50" height="50" src="https://img.icons8.com/arcade/64/engineer.png" alt="engineer"  className='mx-auto d-block' />
                <div className="card-body">
                  <div className="text-capitalize  text-center text-dark"  style={{fontSize:'13px',fontWeight:'bold'}}>Engineering</div>
                </div>
              </div>
            </div>
            <div className="col-lg-2  col-sm-4">
              <div className="card " style={{maxHeight:'8rem'}}>
              <img width="50" height="50" src="https://img.icons8.com/emoji/48/satellite-antenna.png" alt="satellite-antenna"  className='mx-auto d-block'/>
                <div className="card-body ">
                  <div className="text-capitalize  text-center text-dark"  style={{fontSize:'13px',fontWeight:'bold'}}>IT & Telecom</div>
                </div>
              </div>
            </div>
            <div className="col-lg-2  col-sm-4">
              <div className="card " style={{maxHeight:'8rem'}}>
              <img width="50" height="50" src="https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/66/external-Energy-Resources-smooth-conceptual-smashingstocks-flat-smashing-stocks.png"  className='mx-auto d-block' alt="external-Energy-Resources-smooth-conceptual-smashingstocks-flat-smashing-stocks"/>
                <div className="card-body ">
                  <div className="text-capitalize  text-center text-dark" style={{fontSize:'13px',fontWeight:'bold'}}>Energy & Resources</div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4">
              <div className="card " style={{maxHeight:'8rem'}}>
              <img width="48" height="48" src="https://img.icons8.com/pulsar-gradient/48/trave-diary.png" alt="trave-diary"  className='mx-auto d-block'/>
                <div className="card-body">
                <div className="text-capitalize  text-center text-dark" style={{fontSize:'13px',fontWeight:'bold'}}>Travel & Tourism</div>
                 
                </div>
              </div>
            </div>
            <div className="col-lg-2  col-sm-4">
              <div className="card " style={{maxHeight:'8rem'}}>
              <img width="50" height="50" src="https://img.icons8.com/clouds/100/accounting.png" alt="accounting" className='mx-auto d-block'/>
                <div className="card-body">
                <div className="text-capitalize  text-center text-dark" style={{fontSize:'13px',fontWeight:'bold'}}>Accounting </div>
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="text-center pb-4">
        <a href="/Industries" className="btn fw-semibold  text-uppercase " style={{backgroundColor: "#fff",color:'#0f2239'}}>View All Industries</a>
      </div>
    </div>
  </div>
  <div className="container my-5">
    <div className="row g-3">
      <div className="col-md-6">
        <div className="card rounded-0 border-0  hover-card  h-100" >
        
        <div className="image-card">
          <img src="https://hrshelf.com/wp-content/uploads/2022/04/Internal-Recruitment.jpg" alt="" className="img-fluid card1 h-100 p-0" />
        </div>
        <div className="card-img-overlay align-self-center">
        <h5 className=" text-capitalize fw-bold h3 text-center text-white" >How can we build your business?</h5>
        <p className="lh-base text-white " style={{textAlign:'justify'}}>
        We provide expert opinions, analysis, and strategies to organizations to prevent problems and improve performance.
        </p>
        <div className="text-center">
        <a href="/Contact" className="btn text-white text-uppercase rounded-5 px-3 py-2" style={{backgroundColor:'#fe5722'}}>let's work together</a>
        </div>
      
          </div> 
        </div>
      </div>
      <div className="col-md-6">
        <div className="card rounded-0 border-0 hover-card h-100" >
        <div className="image-card">
          <img src="https://samelane.com/wp-content/uploads/2023/05/what-is-refresher-training.jpg" alt="" className="img-fluid card1 h-100 p-0" />
        </div>
         
        
        <div className="card-img-overlay align-self-center">
        <h5 className=" text-capitalize fw-bold h3  text-white text-center">Our people are our
        greatest assests</h5>
        <p className="lh-base  text-white" style={{textAlign:'justify'}}>
        We work with you to transform your organization, driving bold ideas and pragmatic solutions
        </p>
        <div className="text-center">
        <a href="/Careers" className="btn text-dark text-uppercase rounded-5 px-3 py-2" style={{backgroundColor:'#fff'}}>come work with us</a>
        </div>
      
          </div> 
        </div>
      </div>
    </div>
  </div>

    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h2 className="">Explore Blog</h2>
          <hr />
        </div>
      </div>
    </div>
        
      <div className="container bg-light my-5  p-4">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="">Our Clients</h2>
            <p className="">You're in good hands with our clients. Meet our happy clients.</p>
            

          </div>
          <div className="col-lg-2 col-sm-4 ">
              <div className="card   " style={{maxHeight:'8rem'}}>
              <img width="50" height="50" src="https://img.icons8.com/color/48/manufacturing.png" alt="manufacturing" className='mx-auto d-block'/>
               
              </div>
            </div>
            <div className="col-lg-2  col-sm-4">
              <div className="card " style={{maxHeight:'8rem'}}>
              <img width="50" height="50" src="https://img.icons8.com/arcade/64/engineer.png" alt="engineer"  className='mx-auto d-block' />
               
              </div>
            </div>
            <div className="col-lg-2  col-sm-4">
              <div className="card " style={{maxHeight:'8rem'}}>
              <img width="50" height="50" src="https://img.icons8.com/emoji/48/satellite-antenna.png" alt="satellite-antenna"  className='mx-auto d-block'/>
           
              </div>
            </div>
            <div className="col-lg-2  col-sm-4">
              <div className="card " style={{maxHeight:'8rem'}}>
              <img width="50" height="50" src="https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/66/external-Energy-Resources-smooth-conceptual-smashingstocks-flat-smashing-stocks.png"  className='mx-auto d-block' alt="external-Energy-Resources-smooth-conceptual-smashingstocks-flat-smashing-stocks"/>
              
              </div>
            </div>
            <div className="col-lg-2 col-sm-4">
              <div className="card " style={{maxHeight:'8rem'}}>
              <img width="48" height="48" src="https://img.icons8.com/pulsar-gradient/48/trave-diary.png" alt="trave-diary"  className='mx-auto d-block'/>
           
              </div>
            </div>
            <div className="col-lg-2  col-sm-4">
              <div className="card " style={{maxHeight:'8rem'}}>
              <img width="50" height="50" src="https://img.icons8.com/clouds/100/accounting.png" alt="accounting" className='mx-auto d-block'/>
             
              </div>
            </div>
          
          
                    
        </div>
      </div>
      
     
        <Footer/>
     
   
  
   
  </div>


      

    </>
  )
}
export default Home