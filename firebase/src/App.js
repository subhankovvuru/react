import React from 'react'
import Navbar1 from './Component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './Component/Login/Login'
import Signup from './Component/Signup/Signup'

const App = () => {
  return (
    <div>
      <Navbar1/>
      <Routes>
        {/* <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/> */}
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/dashboard' element={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default App