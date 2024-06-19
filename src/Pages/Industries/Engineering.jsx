import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

export const Engineering = () => {
  return (
    <div className="Civil">
    <Header />
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
    <div className="container">
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
                            <Link to="/Engineering" className="text-decoration-none px-3 text-dark small-caps">Engineering</Link>
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
                    <Link to="/Engineering" className="list-group-item list-group-item-action active">Engineering</Link>
                    <Link to="/Hospitality" className="list-group-item list-group-item-action">Hospitality</Link>
                    <Link to="/Energy-&-Resources" className="list-group-item list-group-item-action">Energy & Resource</Link>
                    <Link to="/Manfacturing" className="list-group-item list-group-item-action">Manufacturing</Link>
                    <Link to="/IT-&-Telecom" className="list-group-item list-group-item-action">IT & Telecom</Link>
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
                            <button className="btn text-uppercase text-white fw-semibold" type="submit" style={{ backgroundColor: '#fe5722' }}>Submit form</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-lg-9">
                <div className="content-image mx-auto d-block">
                    <img src="https://www.ust.com/content/dam/ust/images/people/two-engineers-in-a-lab.jpg" alt="Civil Engineering" className="img-fluid mx-auto d-block" />
                </div>
                <div className="row mt-5">
                    <div className="content-head mb-2">
                        <h4 className="fw-normal ">Engineering</h4>
                    </div>
                    <div className="col-lg-6">
                        <div className="content-details">
                            <p>Engineers work in a variety of fields to analyze, develop and evaluate large-scale, complex systems. Engineering deals with improving and maintaining current systems or creating brand new projects. Engineers will design and draft blueprints, visit systems in the field and manage projects.</p>
                        </div>
                        <div className="content-details">
                            <p>The engineering sector affects each one of us – it’s the reason why the light comes on when we flip up the electrical switch and what keeps the cost of our favorite products so low. The engineering sector, though sizeable and diverse, is also very competitive and demands a high level of studies.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="content-details">
                            <p>Engineers work to create applications that meet societal and consumer needs. Many engineers develop new products. These engineers supervise production in factories, determine the causes of a component’s failure, and test manufactured products to maintain quality.</p>
                        </div>
                        <div className="content-details">
                            <p>Engineers design, evaluate, develop, test, modify, install, inspect and maintain a wide variety of products and systems. In addition to their involvement in design and development, many engineers work in testing, production, or maintenance..</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="content-head ">
                        <h4 >Most Common Disciplines</h4>
                        <div className="col-12">
                            <div className="content-details my-3">
                                <p>Mechanical Engineering: Mechanical engineers use this knowledge to design machines that can cope with the forces they are placed under and to develop systems such as pumps, fans, turbines and power plants.</p>
                                <p>Civil Engineering: Civil engineers understand how to design, construct and maintain the man-made parts of our environment. These include buildings, bridges, roads, railways, dams, tunnels and airports.</p>
                                <p>Electrical Engineering: Electrical engineers are involved in generating electricity from renewable resources, working in a traditional power station, helping to electrify a railway line or providing a building with heating and power, among other job options.</p>
                                <p>Electronic Engineering: Electronic engineers understand how electronic components can be used in electrical circuits to affect their behaviour. Sophisticated circuits are useful in areas such as communication, navigation, medical technology and manufacturing technology.</p>
                                <p>Chemical Engineering: . Chemical engineers understand both how chemicals react to form new substances and how the facilities work that performs these reactions on an industrial scale.</p>
                            </div>
                        </div>
                    </div>
                </div>
             
            </div>
        </div>
    </div>
    <div className="container my-5">
        <div className="row gy-5">
        <div className="col-12">
                        <div className="content-head">
                            <h4>Engineering Job Roles</h4>
                            <p>Within each engineering discipline, there are various job roles to choose from. In practice, some jobs will involve doing more than one of these, and some graduate schemes or apprenticeships may give you the chance to try out different options to see what suits you.</p>
                        </div>
                    </div>
                    <div className="content-card row gy-2">
                        <div className="col-lg-4">
                            <div className="card border-0 rounded-0 shadow p-4 border-start border-warning border-5 h-100">
                                <h5 className="card-title text-center fw-semibold">Design engineering </h5>
                                <p className="card-text">Carrying out original research into areas that haven’t been investigated before.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card border-0 rounded-0 shadow p-4 border-start border-success border-5 h-100">
                                <h5 className="card-title text-center fw-semibold">Construction</h5>
                                <p className="card-text">Working on an engineering project, creating a detailed, practical design to work.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card border-0 rounded-0 shadow p-4 border-start border-danger border-5 h-100">
                                <h5 className="card-title text-center fw-semibold">Process engineering</h5>
                                <p className="card-text">Analysing manufacturing processes and finding ways to make them safer and more efficient.</p>
                            </div>
                        </div>
                    </div>
            <div className="col-lg-6">
                <div className="content-head">
                    <h4 className="fw-semibold text-uppercase text-center ">Jobs in Engineering Industry</h4>
                    <p className="lh-base"> The decision to work in practice or industry has to be made based on what you want from your career. Ask yourself a series of questions and locate what is important to you; is it the salary or the importance of the work you produce? Is it variety, people, or your day-to-day work-life balance?</p>
                    <p className="lh-base"> Don’t forget that you can change your mind, although it should be noted that moving from practice into the industry is much easier than the other way around. If you want to try both, consider going into practice first.</p>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Software Engineer</li>
                            <li className="list-group-item">Network Engineer</li>
                            <li className="list-group-item">Quality Engineer</li>
                            <li className="list-group-item">Civil Engineer</li>
                            <li className="list-group-item">Design Engineer</li>
                            <li className="list-group-item">Technical Sales Engineer</li>
                            <li className="list-group-item">Biomedical Engineer</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Chemical (Process) Engineer</li>
                            <li className="list-group-item">Petroleum Engineer</li>
                            <li className="list-group-item">Electronics Engineer</li>
                            <li className="list-group-item">Electrical Engineer</li>
                            <li className="list-group-item">Materials Engineer</li>
                            <li className="list-group-item">PMechanical Engineer</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 ">
                <h5 className="mb-3 text-center">Typical Questions Asked To Us.</h5>
                <div className="border">
                    <ul className="nav nav-tabs nav-justified fs-9 " id="myTab" role="tablist">
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
                                <p className="lh-base">InRecruit has an established client base and strong relationships with companies to assist you in your job search. We succeed as we pay close attention to your professional objectives and match you with a position that matches your history, talents, and personal preferences, guiding you to the right career path.</p>
                                <p className="lh-base">Candidates also benefit from our strong track record of successful placements as InRecruit has an extremely low recruiter turnover and one of the highest retention rates in the industry. This allows us to form long-term connections with businesses, allowing us to introduce you to them.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                        <p>If you are looking for a job, please reach out to us, we can help you to realize your dream.</p>
                            <div className="d-flex flex-row align-items-center justify-content-between w-100  p-4"  style={{ backgroundColor: '#0f2239', color: '#fff' }}>
                                <h6 className="fw-bold">Reach out to know about any recent openings.</h6>
                                <a href="/Contact" className="btn btn-sm rounded-3 px-2 py-1" style={{ backgroundColor: '#fe5722', color: '#fff' }}>Contact us</a>
                            </div>
                        </div>
            </div>
        </div>
    </div>
    <Footer />
</div>
  )
}
export default Engineering