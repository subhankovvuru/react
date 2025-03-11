// import React, { useState } from 'react'
// import Navbar1 from './Components/Navbar/Navbar'
// import { Route, Routes } from 'react-router-dom'
// import Receipes from './Components/Receipes/Receipes'
// import { Cart } from './Components/Cart/Cart'


// const App = () => {

//   return (
//     <div>
//       <Navbar1/>
//       <Routes>
//         <Route path='/receipes' element={<Receipes/>}/>
//         <Route path='/cart' element={<Cart/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App


import React from 'react'
import Navbar1 from './Forms/Navbar/Navbar'
import Login from './Forms/Login/Login'
import { Route, Routes } from 'react-router-dom'
import Signup from './Forms/Signup/Signup'

const App = () => {
  return (
    <div>
      <Navbar1/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default App