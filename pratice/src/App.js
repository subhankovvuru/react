//Routing & StateUpLifting in React
// date-24-02-2025  


import React from 'react'
import Navbar1 from './components/Navbar/Navbar'
import Home from './components/pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import About from './components/pages/About/About'
import Products from './components/pages/Products/Products'
const App = () => {
  return (
    <div>
      <Navbar1/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/product" element={<Products/>}/>
      
      </Routes>
    </div>
  )
}

export default App