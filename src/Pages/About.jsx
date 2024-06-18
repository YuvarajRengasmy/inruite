import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

export const About = () => {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <section className="" style={{ marginTop: '100px' }}>
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="about-header">
          <div className="d-flex flex-row gap-3">
            <div className="home-link">
              <Link to="/" className="text-decoration-none border-end border-3 border-dark px-3" style={{ color: '#0f2239', fontVariant: 'all-small-caps', fontSize: '18px' }}>
                Home
              </Link>
            </div>
            <div className="about-link">
              <Link to="/About" className="text-decoration-none" style={{ color: '#0f2239', fontVariant: 'all-small-caps', fontSize: '18px' }}>
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      <hr className='p-0' />

      <section className="my-5 py-4" >
  <div className="container">
    <div className="row g-4">
      <div className="col-lg-6 text-center">
        <img src="https://miro.medium.com/v2/resize:fit:1200/1*63eIo9rLYOXU7yjrkXyhsA.jpeg" alt="about image" className="img-fluid mx-auto d-block" />
      </div>
      <div className='col-lg-6'>
        <div className="card border-0 rounded-0 shadow h-100">
          <div className="card-header text-white card-header rounded-0 text-center p-3" style={{ backgroundColor: '#0f2239' }}>
            <h2 className='text-uppercase fw-normal'>About our consulting</h2>
          </div>
          <div className="card-body px-4 py-4">
            <p className='card-text lh-base' style={{ textAlign: 'justify' }}>
              InRecruit HR Services Private Limited is one of the top Human Resource (HR) consultants, providing specialist advice and services to help businesses maximize the efficiency of their HR operations and implement appropriate new policies and procedures in the best way possible.
            </p>
            <p className='card-text text-capitalize mt-5 fw-semibold text-center'>we always strive hard to find the right person for the right job</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

     <section className="my-5 py-4" style={{ backgroundColor: '#0f2239', color: '#fff' }}>
  <div className="container">
    <div className="row g-4">
      <div className="col-sm-12">
        <h4 className="lh-base p-1" style={{ textAlign: 'justify', fontVariant: 'all-small-caps', fontWeight: '400' }}>Our strategy practice helps management devise winning strategies and translate them into action</h4>
      </div>
      <div className="col-md-6">
        <p className="lh-base p-1" style={{ textAlign: 'justify' }}>Our primary domain, Talent management has emerged as an area of focus from a strategic HR standpoint. Human Resource Consulting Industry has emerged from management consulting and addresses human resource management tasks and decisions.</p>
        <p className="lh-base p-1" style={{ textAlign: 'justify' }}>Our primary goal is to assist you in scaling through these processes, such as assessment, documentation, and filing.</p>
        <p className="lh-base p-1" style={{ textAlign: 'justify' }}>We have professionals, who will guide you from the beginning to the end process(from getting an offer letter to getting a visa and accommodation).</p>
      </div>
      <div className="col-md-6">
        <p className="lh-base p-1" style={{ textAlign: 'justify' }}>By creating and developing a human resources model specific to the organizations that hire them, We work to ensure that the company is utilizing its personnel to achieve its stated goals, while also ensuring the workforce is operating at a high level of productivity and efficiency.</p>
        <p className="lh-base p-1" style={{ textAlign: 'justify' }}>We as HR Consultants work to fill two typical roles:</p>
        <div className="d-flex flex-column align-items-start justify-content-center p-1">
          <p>(1) Expert Resource Consultant</p>
          <p>(2) Process/People consultant</p>
        </div>
        <p className="lh-base p-1" style={{ textAlign: 'justify' }}>Get in touch with us today, we can help you to realise your dream..</p>
      </div>
    </div>
  </div>
</section>


<section className="my-5">
  <div className="container">
    <div className="row g-5">
      <div className="col-lg-6">
        <div className="card rounded-0 border-0 shadow h-50" >
          <div className="card-header rounded-0" style={{ backgroundColor: '#0f2239', color: '#fff' }}>
            <h4 className="fw-normal text-center">Our Mission</h4>
          </div>
          <div className="card-body">
            <p className="card-text" style={{ textAlign: 'justify' }}>Our mission is to build a platform where business establishments across the globe and job aspirants can connect and achieve mutually beneficial results. We want to be your bridge from your home country to your dream country.</p>
          </div>
        </div>

        <div className="card rounded-0 border-0 shadow mt-3 h-50" >
          <div className="card-header rounded-0" style={{ backgroundColor: '#0f2239', color: '#fff' }}>
            <h4 className="fw-normal text-center">Our Vision</h4>
          </div>
          <div className="card-body">
            <p className="card-text" style={{ textAlign: 'justify' }}>Our Vision is to become one of the leading human resources consulting firms operating globally by maintaining our uncompromising principles and create value for all our stakeholders. To be recognized as an impactful, innovative and efficient HR Consulting partner.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <img src="https://empitsolutions.com/wp-content/uploads/2023/12/rrr.webp" alt="consulting" className="img-fluid h-100" />
      </div>
    </div>
  </div>
</section>


      <div className="container my-5">
        <div className="row g-3">
          <div className="col-12">
            <h3 className="lh-base">Areas where we can add significant value to your organisation:</h3>
            <p className="lh-base">We have a global presence with a strategic network of own and associate offices in 25 locations across the world. We are planning to extend our services to over 20 offices by the year-end.</p>
          </div>
          <div className="col-lg-4">
            <div className="card card-body border-0 bg-success rounded-0 p-4 h-100" style={{  color: '#fff' }}>
              <div className="card-title text-center">HR Consulting</div>
              <p className="card-text" style={{ textAlign: 'justify' }}>HR consultants helps in creating, developing a human resources model specific to the organizations that hire them. We work to ensure that personnel is utilized to achieve its stated goals.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card card-body border-0 rounded-0 p-4 h-100" style={{ backgroundColor: '#fe5722', color: '#fff' }}>
              <div className="card-title text-center">Resource Consultant</div>
              <p className="card-text" style={{ textAlign: 'justify' }}>Expert Resource Consultant suggests solutions based on expertise, experience and assists in the implementation. This role is very typical in IT benchmarking and design consulting.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card card-body border-0 rounded-0 p-4 h-100" style={{ backgroundColor: '#0f2239', color: '#fff' }}>
              <div className="card-title text-center">People consultant</div>
              <p className="card-text" style={{ textAlign: 'justify' }}>Process/People consultant assists in searching for solutions with methods that facilitate and raise creativity of the client company so that they will be able to implement solutions themselves.</p>
            </div>
          </div>
        </div>
      </div>

      <section className="container-fluid bg-light my-5">
  <div className="container ">
    <h2 className="lh-base h2">We help boost corporate performance by supporting management with the tools they need to deliver.</h2>
    <article className="px-5">
      <p className="lh-base">Doubting the positive effects of our teamwork because you’ve been burned before? By working together with the clients, we learn that wins and losses affect everyone on the team. When teams work together, they can discuss and share a variety of perspectives of a situation.</p>
      <p className="lh-lg">It’s easy. Start by registering with us, which will give us the information we need to match you with a position that best fits your skills and background.</p>
      <p className="lh-lg">Alternatively, you can contact us by emailing your resume or calling our corporate office to speak with a placement counsellor.</p>
    </article>
    <p className="text-center fw-semibold">We look forward to hearing from you!</p>
    <div className="text-center ">
      <a href="#" className="btn text-uppercase border-0 rounded-0 px-4 py-3" style={{ backgroundColor: '#fe5722', color: '#fff' }}>Working together, we can help</a>
    </div>
  </div>
</section>


      <div className="container my-5">
        <div className="row g-4">
          <div className="col-lg-3">
            <h2 className="fw-medium fs-1" style={{ color: '#0f2239' }}>Core Values</h2>
            <hr className='w-50 border border-3 border-warning rounded' style={{ color: '#fe5722' }} />
            <p className="lh-base" style={{ textAlign: 'justify' }}>Core values - the fundamental beliefs of our organization. We are committed to following the organizational values</p>
          </div>
          <div className="col-lg-3">
            <div className="card card-body rounded-0 border-0 h-100 px-4 py-4" style={{ backgroundColor: '#0f2239', color: '#fff' }}>
              <div className="card-title">Integrity</div>
              <p className="card-text">Quality of being honest and having strong moral principles, reliably doing the right thing.</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card card-body rounded-0 border-0 h-100 px-4 py-4" style={{ backgroundColor: '#fe5722', color: '#fff' }}>
              <div className="card-title">Accountability</div>
              <p className="card-text">An obligation and willingness to accept responsibility.</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card card-body rounded-0 border-0 h-100 px-4 py-4 bg-success" style={{ color: '#fff' }}>
              <div className="card-title">Commitment</div>
              <p className="card-text">Quality of being dedicated to a cause.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-light my-5">
        <div className="row">
          <div className="col-12">
            <div className="container py-5">
              <div className="row gy-4">
                <div className="col-lg-6">
                  <div className="card h-100">
                    <div className="card-header p-3" style={{ backgroundColor: '#0f2239', color: '#fff' }}>
                      <h4 className="fw-normal  text-center">Our Goal</h4>
                    </div>
                    <div className="card-body p-4">
                      <p className="card-text fw-normal " style={{ textAlign: 'justify' }}>We always ensure that our recruit meets the expectations of our clients and the right candidate with the desired qualification and relevant work experience get on board.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="card h-100">
                    <div className="card-header p-3" style={{ backgroundColor: '#0f2239', color: '#fff' }}>
                      <h4 className="fw-normal  text-center text-capitalize">To accomplish our mission</h4>
                    </div>
                    <div className="card-body p-4">
                      <p className="card-text fw-normal " style={{ textAlign: 'justify' }}>We commit to deliver customized and cost-effective solutions to organizations across the globe that gives them an edge over their competitors.</p>
                      <p className="card-text fw-normal" style={{ textAlign: 'justify' }}>We commit to identifying the right talent after thoroughly understanding individual skills and goals thus helping them secure the right jobs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  )
}

export default About;
