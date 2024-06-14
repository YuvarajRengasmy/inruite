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
import Careers from '../Pages/Careers'
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

        </Routes>
        </BrowserRouter>
    </div>
  )
}
export default Adminroute