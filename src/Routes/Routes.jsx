import React from 'react'
import { BrowserRouter, Routes,Route, Router } from 'react-router-dom'
import Home from '../Pages/Home'
import Header from '../Components/Header/Header'

export const Routes = () => {
  return (
    <div>
      <Header/>
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<Home/>}/>
      
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default Routes