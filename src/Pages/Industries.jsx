import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

export const Industries = () => {
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
            <h4 className="">Industries We Serve</h4>
            <hr className="p-0" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-4 pb-3">
          {industries.map((industry, index) => (
            <div key={index} className="col-md-6 col-sm-6 col-lg-3">
              <div className="card rounded-0 border-0 shadow h-100">
                <img src={industry.imgSrc} alt={industry.title} className="img-fluid h-50" />
                <div className="card-body p-3">
                  <h4 className="fs-6 fw-semibold text-center">{industry.title}</h4>
                  <p className="card-text" style={{ textAlign: 'justify' }}>{industry.description}</p>
                  <div className="text-center">
                    <Link to={industry.link} className="btn fw-semibold" style={{ backgroundColor: '#fe5722', color: '#fff' }}>READ MORE</Link>
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
  )
}

const industries = [
  {
    imgSrc: "https://miro.medium.com/v2/resize:fit:1400/1*eQikTA3vFEnGMiFP6P3I4A.jpeg",
    title: "Civil & Construction",
    description: "Civil & Construction Industry is one of the most dynamic and rapidly advancing sectors.",
    link: "/Civil"
  },
  {
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMMZdMzhmjyxgrHRfwYpk9XOhontqm9us7aQ&s",
    title: "Engineering",
    description: "Engineers work in a variety of fields to analyze, develop, evaluate large-scale, complex systems.",
    link: "/Engineering"
  },
  {
    imgSrc: "https://www.ucf.edu/wp-content/blogs.dir/19/files/2019/12/Hospitality-Professional-At-Work-web.jpg",
    title: "Hospitality",
    description: "Hospitality industry is concerned with services related to leisure and customer satisfaction.",
    link: "/Hospitality"
  },
  {
    imgSrc: "https://www.cummins.com/sites/default/files/styles/newsroom_hero_image/public/images/newsroom_article/windfarm.jpg?itok=0C9pCGSr",
    title: "Energy & Resource",
    description: "Energy industry is the totality of all of the industries in the production and sale of energy.",
    link: "/Energy-&-Resources"
  },
  {
    imgSrc: "https://www.advancedtech.com/wp-content/uploads/2023/03/Augmented-reality-in-manufacturing_1jpg.jpg",
    title: "Manufacturing",
    description: "Making of products from raw materials with the help of manual labour or machinery.",
    link: "/Manfacturing"
  },
  {
    imgSrc: "https://etimg.etb2bimg.com/photo/94055835.cms",
    title: "IT & Telecom",
    description: "ICT is a blanket term encompassing all the technologies and services.",
    link: "/IT-&-Telecom"
  },
  {
    imgSrc: "https://www.deepwater.com/images/Rig_Types/Harsh.jpg",
    title: "Oil & Gas",
    description: "Oil and gas sector needs flexibility and knowledge more than before.",
    link: "/Oil-&-Gas"
  },
  {
    imgSrc: "https://imageio.forbes.com/specials-images/imageserve/651bbeb1c78cc403f92a6abd/The-10-Biggest-Trends-Revolutionizing-Healthcare-In-2024/0x0.jpg?crop=2500,1405,x0,y0,safe&height=399&width=711&fit=bounds",
    title: "Healthcare",
    description: "Healthcare Industry is comprised of clinical services and drugs.",
    link: "/Healthcare"
  },
  {
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_spzwDpu9TUoS8d9ugx-iEWa_mgb0ik2Lmg&s",
    title: "FMCG",
    description: "FMCG are products that are sold quickly and at a relatively low cost.",
    link: "/FMCG"
  },
  {
    imgSrc: "https://static-bestcolleges.tosshub.com/2024/News/kV29KfjpXuHCrTFpNQZHAlscd2MwtvBpFIPRLE8r.webp",
    title: "Automobile",
    description: "Automobile industry, the business of producing and selling self-powered vehicles.",
    link: "/Automobile"
  },
  {
    imgSrc: "https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/12/01/Pictures/_c34102da-9849-11e5-b4f4-1b7a09ed2cea.jpg",
    title: "Education",
    description: "Provides education across a broad spectrum of subjects at diverse levels.",
    link: "/Education"
  },
  {
    imgSrc: "https://lvivity.com/wp-content/uploads/2020/04/iot-in-agriculture.jpg",
    title: "Agriculture",
    description: "Agribusiness - any company that operates within the agriculture industry.",
    link: "/Agriculture"
  },
  {
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG_fRfvCAUkUH8Fs54Ew-bo0oeYu-yYnnvGw&s",
    title: "Distribution/Logistics",
    description: "Logistics comprises the planning tasks, control and all processes concerning the flow of goods.",
    link: "/Distribution-&-Logistics"
  },
  {
    imgSrc: "https://blog.greencarrier.com/wp-content/uploads/2017/01/shutterstock_538316056.jpg",
    title: "Marine/Shipping",
    description: "Maritime Industry is waterborne commerce, it's about moving people and goods over water.",
    link: "/Marine-Shipping"
  },
  {
    imgSrc: "https://i0.wp.com/preludesys.com/wp-content/uploads/2023/12/finance-accounting-transformation-real-estate.jpg?fit=1024%2C512&ssl=1",
    title: "Accounting/Operations",
    description: "Operational accounting is concerned with the financial aspects of running a company.",
    link: "/Accounting-Operations"
  },
  {
    imgSrc: "https://ecredu.com/newimages/Travel-And-Tourism-Sector.jpg",
    title: "Travel & Tourism",
    description: "Travel and Tourism industry is one of the biggest and fastest-growing industries in the world.",
    link: "/Travel-&-Tourism"
  }
];

export default Industries;
