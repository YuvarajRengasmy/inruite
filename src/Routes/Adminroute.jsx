import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Industries from '../Pages/Industries'
import Civil from '../Pages/Industries/Civil'
import Engineering from '../Pages/Industries/Engineering'
import Distribution from '../Pages/Industries/Distribution'
import Education from '../Pages/Industries/Education'
import Energy from '../Pages/Industries/Energy'
import Fmcg from '../Pages/Industries/Fmcg'
import Healthcare from '../Pages/Industries/Healthcare'
import Hospitality from '../Pages/Industries/Hospitality'
import IT from '../Pages/Industries/IT'
import Manfacturing from '../Pages/Industries/Manfacturing'
import Marine from '../Pages/Industries/Marine'
import Oil from '../Pages/Industries/Oil'
import Travel from '../Pages/Industries/Travel'
import Accounting from '../Pages/Industries/Accounting'
import Agriculture from '../Pages/Industries/Agriculture'
import Automobile from '../Pages/Industries/Automobile'
import Services from '../Pages/Services'
import Contact from '../Pages/Contact'
import Process from '../Pages/Process'
import Clients from '../Pages/Clients'
import Blogs from '../Pages/Blogs'
import Careers from '../Pages/Careers'
import Executive from '../Pages/Services/Executive'

import Contract from '../Pages/Services/Contract'
import Campus from '../Pages/Services/Campus'
import Job from '../Pages/Services/Job'
import Overseas from '../Pages/Services/Overseas'
import Payroll from '../Pages/Services/Payroll'
import Permanent from '../Pages/Services/Permanent'
import Techincal from '../Pages/Services/Techincal'
import Ticket from '../Pages/Services/Ticket'
export const Adminroute = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/Industries' element={<Industries/>}/>
         <Route path='/Civil' element={<Civil/>}/>
         <Route path='/Engineering' element={<Engineering/>}/>
         <Route path='/Hospitality' element={<Hospitality/>}/>
         <Route path='/Energy-&-Resources' element={<Energy/>}/>
         <Route path='/Manfacturing' element={<Manfacturing/>}/>
         <Route path='/IT-&-Telecom' element={<IT/>}/>
         <Route path='/Oil-&-Gas' element={<Oil/>}/>
         <Route path='/Healthcare' element={<Healthcare/>}/>
          <Route path='/Travel-&-Tourism' element={<Travel/>}/>
          <Route path='/FMCG' element={<Fmcg/>}/>
          <Route path='/Marine-Shipping' element={<Marine/>}/>
          <Route path='/Education' element={<Education/>}/>
          <Route path='/Distribution-&-Logistics' element={<Distribution/>}/>
          <Route path='/Agriculture' element={<Agriculture/>}/>
          <Route path='/Automobile' element={<Automobile/>}/>
          <Route path='/Accounting-Operations' element={<Accounting/>}/>
          <Route path='/Services' element={<Services/>}/>
          <Route path='/Contact' element={<Contact />}/>
          <Route path='/Process' element={<Process />}/>
          <Route path='/Clients' element={<Clients/>}/>
          <Route path='/Careers' element={<Careers/>}/>
          <Route path='/Blogs' element={<Blogs/>}/>
          <Route path='/Executive-Search' element={<Executive/>}/>
          <Route path='/Overseas-Recruitment' element={<Overseas/>}/>
          <Route path='/Contract-Hiring' element={<Contract/>}/>
          <Route path='/Permanent-Staffing' element={<Permanent/>}/>
          <Route path='Payroll-Management' element={<Payroll/>}/>
          <Route path='/Job-Fair' element={<Job/>}/>
          <Route path='/Campus-Recruitment' element={<Campus/>}/>
          <Route path='/Technical-Trade-Test' element={<Techincal/>}/>
          <Route path='/Ticketing' element={<Ticket/>}/>


        </Routes>
        </BrowserRouter>
    </div>
  )
}
export default Adminroute