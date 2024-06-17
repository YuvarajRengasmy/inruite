import React from 'react';
import { Link } from 'react-router-dom';
import Travel from "../../assets/image/indu/travel.jpg"
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Civil = () => {
  return (
    <div className="Civil">
      <Header />
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12">
            <div className="about-header">
              <div className="d-flex flex-row gap-3">
                <div className="home-link">
                  <Link to="/" className="text-decoration-none border-end border-3 border-dark px-3 text-dark small-caps">Home</Link>
                </div>
                <div className="about-link">
                  <Link to="/Industries" className="text-decoration-none border-end border-3 border-dark px-3 text-dark small-caps">Industries</Link>
                </div>
                <div className="about-link">
                  <Link to="/Civil" className="text-decoration-none px-3 text-dark small-caps">Civil</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="p-0" />
      <div className="container my-5">
        <div className="row g-5">
          <div className="col-lg-3 d-none d-lg-block">
            <div className="list-group bg-dark text-white small-caps">
              <Link to="/Civil" className="list-group-item list-group-item-action ">Civil & Construction</Link>
              <Link to="/Engineering" className="list-group-item list-group-item-action">Engineering</Link>
              <Link to="/Hospitality" className="list-group-item list-group-item-action">Hospitality</Link>
              <Link to="/Energy-&-Resources" className="list-group-item list-group-item-action ">Energy & Resource</Link>
              <Link to="/Manfacturing" className="list-group-item list-group-item-action">Manufacturing</Link>
              <Link to="/IT-&-Telecom" className="list-group-item list-group-item-action active">IT & Telecom</Link>
              <Link to="/Oil-&-Gas" className="list-group-item list-group-item-action">Oil & Gas</Link>
              <Link to="/Healthcare" className="list-group-item list-group-item-action">Healthcare</Link>
              <Link to="/Travel-&-Tourism" className="list-group-item list-group-item-action">Travel & Tourism</Link>
              <Link to="/FMCG" className="list-group-item list-group-item-action">FMCG</Link>
              <Link to="/Marine-Shipping" className="list-group-item list-group-item-action">Marine/Shipping</Link>
              <Link to="/Education" className="list-group-item list-group-item-action">Education</Link>
              <Link to="/Distribution-&-Logistics" className="list-group-item list-group-item-action">Distribution/Logistics</Link>
              <Link to="/Agriculture" className="list-group-item list-group-item-action">Agriculture</Link>
              <Link to="/Automobile" className="list-group-item list-group-item-action">Automobile</Link>
              <Link to="/Accounting-Operations" className="list-group-item list-group-item-action">Accounting/Operations</Link>

            </div>
            <div className="form-submit bg-light my-5">
              <form action="" className="p-4">
                <h6 className="text-center text-uppercase mb-3 fw-bold">Get In Touch</h6>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Email Address" />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Phone Number" />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" placeholder="Message" rows="4"></textarea>
                </div>
                <div className="mb-3 text-center">
                  <button className="btn text-uppercase text-white fw-semibold" type="submit" style={{ backgroundColor: 'fe5722' }}>Submit form</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="content-image mx-auto d-block">
              <img src={Travel} alt="Civil Engineering" className="img-fluid mx-auto d-block" />
            </div>
            <div className="row mt-5">
              <div className="content-head mb-2">
                <h4 className="fw-normal">Healthcare</h4>
              </div>
              <div className="col-lg-12">
                <div className="content-details">
                  <p>The Healthcare Industry is comprised of companies that offer clinical services, manufacture drugs and medical equipment, and provide healthcare-related support services like medical insurance. Its also referred to as the medical industry. These companies play a key role in the diagnosis, treatment, nursing, and management of illness, disease, and injury.</p>
                </div>
                <div className="content-details">
                  <p>The Healthcare Industry is one of the largest and is expected to continue growing well into the future guided by several drivers. Key among them will be; technological innovation, integration of medicine and healthcare, smart healthcare data management, and a patient-centred restructuring..</p>
                </div>
                <div className="content-details">
                  <p>This growth will be inevitable if and when technology is being embraced in every sector of the healthcare industry. This will call for massive investments in terms of cognitive computing, electronic patient records, interoperability, big data, etc. A digitized healthcare system will provide for better diagnostics, improve the quality of care, and also reduce operational costs..</p>
                </div>
                <div className="content-details">
                  <p>Technological innovation can, for instance, stimulate operational efficiency by helping connect and coordinate operations of all healthcare providers in their different areas of expertise. Integration of medicine and health care will also provide a holistic approach to healthcare through the creation of a collaborative framework that will promote the integration of skills and competencies across pharmaceuticals, medical equipment manufacturers, and healthcare providers.</p>
                </div>

              </div>
              <div className="content-head mb-2">
                <h4 className="fw-normal">Key Segments of the health care industry?</h4>
              </div>
              <h6>Healthcare Providers </h6>
              <div className="col-lg-12">
                <div className="content-details">
                  <p>1. Hospitals and other medical centres: They conduct diagnosis and treatment of diseases, teaching, research, and training. Hospitals are equipped with medical equipment and facilities of all kinds including operating theatres where medical professionals conduct major surgical procedures...</p>
                </div>
                <div className="content-details">
                  <p>2. Nursing homes and rehabilitative centres: They offer both short- and long-term care services. Short-term care may include rehabilitative care after undergoing surgery, illness or injury. This may include physical therapy, occupational therapy or speech-language therapy. Long-term care is offered to the sick, elderly and disabled..</p>
                </div>
                <div className="content-details">
                  <p>3. Ambulatory service providers: These are physicians and other health professionals who provide outpatient medical services or non-hospital-based care. For outpatient-based care, a patient visiting a hospital or an outpatient clinic gets diagnosed, treated, and released on the same day...</p>
                </div>
                <div className="content-details">
                  <h5>Healthcare Financiers </h5>
                  <p>These are government agencies and private companies that provide health insurance policies and fund healthcare services. They are tasked with pooling medical funds collected through employer contributions or individual insurance policies and oversee payment for services rendered. Healthcare financiers outline how people access health care, the kind of healthcare to be covered, and the allocation of healthcare services.</p>
                </div>
                <div className="content-details">
                  <h5>Life Sciences</h5>
                  <p>This segment includes; pharmaceutical firms which make drugs and other chemical products needed for the provision of health care; manufacturers who make high-tech medical equipment; and biotechnology firms that conduct research and development to create new drugs, equipment, and treatment methods. Others who also fall in this segment are all those who provide other miscellaneous scientific services for the diagnosis, treatment, and monitoring of patients....</p>
                </div>
              </div>

              <div className="row mt-4 g-2">
                <div className="col-12">
                  <div className="content-head">
                    <h3>Healthcare Value Chain</h3>
                    <p>1. Administrative(back office)</p>
                    <p>2. Information management</p>
                    <p>3. Clinical services</p>
                    <p>4. Allied health</p>
                    <p>5. Support services</p>

                  </div>
                </div>
                <h5>Benefits of Working in HealthCare Industry:</h5>
                <div className="content-card row gy-2">
                  <div className="col-lg-4">
                    <div className="card border-0 rounded-0 shadow p-4 border-start border-warning border-5 h-100">
                      <h5 className="card-title text-center fw-semibold">Opportunities for career advancement</h5>

                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card border-0 rounded-0 shadow p-4 border-start border-success border-5 h-100">
                      <h5 className="card-title text-center fw-semibold">Competitive salary and benefits</h5>

                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card border-0 rounded-0 shadow p-4 border-start border-danger border-5 h-100">
                      <h5 className="card-title text-center fw-semibold">On-the-job training opportunities</h5>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-5">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="content-head">
                <h4 className="fw-semibold text-uppercase text-center">Jobs in Healthcare Industry</h4>
                <p className="lh-base">The decision to work in practice or industry has to be made based on what you want from your career. Ask yourself a series of questions and locate what is important to you; is it the salary or the importance of the work you produce? Is it variety, people, or your day-to-day work-life balance?</p>
                <p className="lh-base">Don’t forget that you can change your mind, although it should be noted that moving from practice into the industry is much easier than the other way around. If you want to try both, consider going into practice first..</p>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Physician Assistants</li>
                    <li className="list-group-item">Nurses</li>
                    <li className="list-group-item">Dentists</li>
                    <li className="list-group-item">Technologists and technicians</li>
                    <li className="list-group-item">Doctor</li>

                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Physical Therapy Assistant</li>
                    <li className="list-group-item">Occupational Therapist Aide</li>
                    <li className="list-group-item">Nursing Assistant</li>
                    <li className="list-group-item">Medical Transcriptionist</li>
                    <li className="list-group-item">Therapists and rehabilitation specialists</li>

                  </ul>

                </div>
                <p>If you are looking for a job, please reach out to us, we can help you to realise your dream.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="mb-3 text-center">Typical Questions Asked To Us.</h5>
              <div className="border">
                <ul className="nav nav-tabs nav-justified fs-9" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="home-tab" data-bs-toggle="tab" href="tab-home" role="tab" aria-controls="tab-home" aria-selected="true">
                      FAQ1
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="tab-profile" role="tab" aria-controls="tab-profile" aria-selected="false">
                      FAQ2
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link" id="contact-tab" data-bs-toggle="tab" href="tab-contact" role="tab" aria-controls="tab-contact" aria-selected="false">
                      FAQ3
                    </a>
                  </li>
                </ul>
                <div className="tab-content mt-3 h-100" id="myTabContent">
                  <div className="tab-pane fade show active p-4" id="tab-home" role="tabpanel" aria-labelledby="home-tab">
                    <div className="head">
                      <h5 className="bold">What types of employment can InRecruit find for me?</h5>
                    </div>
                    <div className="content">
                      <p className="lh-base">Whether you're seeking a permanent job, contract work, or a contract-to-hire opportunity, InRecruit has access to a network of hiring managers that are looking for highly skilled individuals who are ready to advance in their careers.</p>
                      <p className="lh-base">In fields as diverse as financial services, legal, pharmaceuticals, entertainment, telecommunications, new media, television, and publishing, we work with Fortune 100 companies as well as inventive high-tech startups.</p>
                    </div>
                  </div>
                  <div className="tab-pane fade p-4" id="tab-profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div className="head">
                      <h5 className="bold">How does InRecruit find positions that fit my background?</h5>
                    </div>
                    <div className="content">
                      <p className="lh-base">Every engagement is overseen by a placement counsellor with experience in your field. InRecruit currently works with applicants from a variety of industries, including accounting and finance, legal and compliance, information technology, and corporate support.</p>
                    </div>
                  </div>
                  <div className="tab-pane fade p-4" id="tab-contact" role="tabpanel" aria-labelledby="contact-tab">
                    <div className="head">
                      <h5 className="bold">Why should I choose InRecruit over other staffing agencies?</h5>
                    </div>
                    <div className="content">
                      <p className="lh-base">InRecruit has an established client base and strong relationships with companies to assist you in your job search. We succeed as we pay close attention to your professional objectives and match you with a position that matches your history, talents, and personal preferences, guiding you to the right career path..</p>
                      <p className="lh-base">Candidates also benefit from our strong track record of successful placements as InRecruit has an extremely low recruiter turnover and one of the highest retention rates in the industry. This allows us to form long-term connections with businesses, allowing us to introduce you to them..</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3 p-4" style={{ backgroundColor: '#0f2239', color: '#fff' }}>
                <div className="d-flex flex-row align-items-center justify-content-between w-100">
                  <h6 className="fw-bold">Reach out to know about any recent openings.</h6>
                  <a href="/Contact" className="btn btn-sm rounded-3 px-2 py-1" style={{ backgroundColor: '#fe5722', color: '#fff' }}>Contact us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Civil;
