import React from 'react';
import { Link } from 'react-router-dom';
import Travel from "../../assets/image/indu/fcmg.jpg";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Civil = () => {
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
      <div className="container ">
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
                  <Link to="/FMCG" className="text-decoration-none px-3 text-dark small-caps">FMCG</Link>
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
              <Link to="/IT-&-Telecom" className="list-group-item list-group-item-action ">IT & Telecom</Link>
              <Link to="/Oil-&-Gas" className="list-group-item list-group-item-action">Oil & Gas</Link>
              <Link to="/Healthcare" className="list-group-item list-group-item-action">Healthcare</Link>
              <Link to="/Travel-&-Tourism" className="list-group-item list-group-item-action ">Travel & Tourism</Link>
              <Link to="/FMCG" className="list-group-item list-group-item-action active">FMCG</Link>
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
              <img src={Travel} alt="Civil Engineering" className="img-fluid mx-auto d-block" />
            </div>
            <div className="row mt-5">
              <div className="content-head mb-2">
                <h4 className="fw-normal">Fast-moving consumer goods</h4>
              </div>
              <div className="col-lg-12">
                <div className="content-details">
                  <p>Fast-moving consumer goods (FMCG), also known as consumer packaged goods (CPG), are products that are sold quickly and at a relatively low cost. Examples include non-durable household goods such as packaged foods, beverages, toiletries, candies, cosmetics, over-the-counter drugs, dry goods, and other consumables.</p>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="content-details">
                  <p>Fast-moving consumer goods have a high inventory turnover and are contrasted with specialty items which have lower sales and higher carrying charges. Many retailers carry only FMCGs, particularly hypermarkets, big box stores and warehouse club stores. Small convenience stores also stock fast-moving goods; the limited shelf space is filled with higher turnover items..</p>
                </div>
              </div>
              <div className="content-head mb-2">
                <h4 className="fw-normal">What Are Fast-Moving Consumer Goods?</h4>
              </div>
              <div className="col-lg-12">
                <div className="content-details">
                  <p>Also referred to as consumer packaged goods, fast-moving consumer goods are items with high turnover rates, low prices, or short shelf lives. Accounting for over half of consumer spending, fast-moving consumer goods are characterized by low-profit margins and large sales quantities. FMCG products that dominate the market today are detergents, toiletries, tooth cleaning products, cosmetics, etc.</p>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="content-details">
                  <p>The fast-moving consumer goods (FMCG) sector is one of the largest employers in India. FMCG are goods used by us on day to day basis and are sold in mass – i.e. it forms a huge section of the retail market and is an industry that has emerged to be a much sought after one by job seekers.</p>
                </div>
              </div>
              <div className="content-head mb-2">
                <h4 className="fw-normal">Roles and Responsibilities</h4>
              </div>
              <div className="col-lg-12">
                <div className="content-details">
                  <p>Their goal is to improve the image and profile of the organisation and to increase its sales and market share. They are required to understand consumer trends and demographics, to plan and coordinate advertising and publicity campaigns, and to advise executives on advertising and marketing strategies..</p>
                </div>
              </div>
             

             
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row g-5">
          <h5>Benefits of Working in FCMG Industry:</h5>
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
            <div className="col-lg-6">
              <div className="content-head">
                <h4 className="fw-semibold text-uppercase text-center">Jobs in Travel & Tourism Industry</h4>
                <p className="lh-base">The decision to work in practice or industry has to be made based on what you want from your career. Ask yourself a series of questions and locate what is important to you; is it the salary or the importance of the work you produce? Is it variety, people, or your day-to-day work-life balance?</p>
                <p className="lh-base">Don’t forget that you can change your mind, although it should be noted that moving from practice into the industry is much easier than the other way around. If you want to try both, consider going into practice first</p>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Marketing Managers</li>
                    <li className="list-group-item">Finance Managers</li>
                    <li className="list-group-item">Supply and Distribution Chain Managers</li>
                    <li className="list-group-item">Curator</li>
                    <li className="list-group-item">Recreation worker</li>

                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Market Development</li>
                    <li className="list-group-item">Channel Sales Manager</li>
                    <li className="list-group-item">FMCG Sales</li>
                    <li className="list-group-item">General Trade Staff</li>
                    <li className="list-group-item">Trade Counselor</li>

                  </ul>

                </div>
               
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="mb-3 text-center">Jobs in FCMG Industry</h5>
              <div className="border">
                <ul className="nav nav-tabs nav-justified fs-9" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#tab-home" role="tab" aria-controls="tab-home" aria-selected="true">
                      FAQ1
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#tab-profile" role="tab" aria-controls="tab-profile" aria-selected="false">
                      FAQ2
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link" id="contact-tab" data-bs-toggle="tab" href="#tab-contact" role="tab" aria-controls="tab-contact" aria-selected="false">
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
       
      </div>
      <Footer />
    </div>
  );
};

export default Civil;
