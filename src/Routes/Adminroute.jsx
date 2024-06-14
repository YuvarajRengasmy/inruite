import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Industries from '../Pages/Industries'
import Contact from '../Pages/Contact'
import Blogs from '../Pages/Blogs'


export const Adminroute = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/Industries' element={<Industries/>}/>
         <Route path='/contact' element={<Contact />}/>
         <Route path='/blogs' element={<Blogs />}/>
    
        </Routes>
        </BrowserRouter>
    </div>
  )
}
export default Adminroute