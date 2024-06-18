import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

export const Services = () => {
  const services = [
    {
      img: "https://splendid-hr.com/wp-content/uploads/2023/10/Human-Resource-Services.jpg",
      title: "ManPower Recruitment",
      text: "Manpower is a staffing agency. Intermediary Between Organisation Recruiting Client And Individual Seeking Employement.",
      link: "/Overseas-Recruitment"
    },
    {
      img: "https://iscjobs.com/wp-content/uploads/2019/10/Executive-Recruiting-Services-International-Search-Consultants.jpg",
      title: "Executive Search",
      text: "Executive search is a specialized recruitment service that organizations pay to seek out and recruit highly qualified candidates.",
      link: "/Executive-Search"
    },
    {
      img: "https://www.4cornerresources.com/wp-content/uploads/2023/10/employment-contract-to-hire-agreement.jpg",
      title: "Contract Hiring",
      text: "Contract outsourcing staffing goes literally by the name. It is the process of hiring talent for temporary or fixated tenure requirements.",
      link: "/Contract-Hiring"
    },
    {
      img: "https://duws858oznvmq.cloudfront.net/Direct_hire_and_permanent_hire_6945df5904.webp",
      title: "Permanent Staffing",
      text: "Permanent staffing is the process of providing required candidates for long-term employment based on specified candidate factors.",
      link: "/Permanent-Staffing"
    },
    {
      img: "https://www.techfunnel.com/wp-content/uploads/2022/03/payroll_management.png",
      title: "Payroll Management",
      text: "The Payroll management refers to the process of administration of a company’s employee’s financial records and maintain dictated by the law.",
      link: "/Payroll-Management"
    },
    {
      img: "https://img.freepik.com/free-vector/job-vacancy-isometric-background-with-applicants-employers-looking-into-resume-sheet-vector-illustration_1284-81716.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718064000&semt=ais_user",
      title: "Job Fair",
      text: "A job expo or career fair or career expo, is an event in which employers, recruiters, and schools give information to potential employees.",
      link: "/Job-Fair"
    },
    {
      img: "https://d8it4huxumps7.cloudfront.net/bites/wp-content/banners/2020/7/5f02f3ca4efab_campus_recruitment_process_heres_everything_you_need_to_know.png",
      title: "Campus Recruitment",
      text: "Campus recruitment is a strategy for sourcing, engaging and hiring young talent for internship and entry-level positions.",
      link: "/Campus-Recuritment"
    },
    {
      img: "https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.jpg?s=612x612&w=0&k=20&c=HYlIJ1VFfmHPwGkM3DtVIFNLS5ejfMMzEQ81ko534ak=",
      title: "Technical Trade Test",
      text: "Trade Test is to test your knowledge, skills and competence in, especially Artisan occupations, involving practical demonstration.",
      link: "/Technical-Trade-Test"
    },
    {
      img: "https://ischoolprep.com/blog/wp-content/uploads/2022/12/image-12.png",
      title: "Ticketing and Immigration",
      text: "Assistance in the entire visa process from filling up applications, preparing financial statements to training candidates for mock interviews.",
      link: "/Ticketing"
    }
  ];

  return (
    <div>
      <div className="header">
        <Header />
      </div>
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
      <div className="container" >
        <div className="row">
          <div className="col">
            <h4>Services Offered</h4>
            <hr className='p-0' />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row g-4 pb-3">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="card rounded-0 border-0 shadow h-100">
                <img src={service.img} alt={service.title} className="img-fluid h-50" />
                <div className="card-body p-4">
                  <h4 className="fs-6 fw-semibold text-center">{service.title}</h4>
                  <p className="card-text" style={{ textAlign: 'justify' }}>{service.text}</p>
                  <div className="text-center">
                    <Link to={service.link} className="btn fw-semibold" style={{ backgroundColor: '#fe5722', color: '#fff' }}>READ MORE</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Services;
