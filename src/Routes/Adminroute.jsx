import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Industries from '../Pages/Industries'

export const Adminroute = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/Civil' element={<Industries/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
export default Adminroute