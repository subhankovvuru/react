// import React from 'react'
// import "./App.css"

// const App = () => {
//   return (
//     <div className='Navbar'>
//       <div className='Navaberleft'>
//         <h1>Landy</h1>
//       </div>
//       <div className='Navbarcenter'>
//         <p>About</p>
//         <p>Mission</p>
//         <p>Product</p>
//         <p>Contact</p>
//       </div>
//       <div className='Navbarright'>
//         <button>Login</button>
//         <button>Signup</button>
//       </div>
//     </div>
  
//   )
// }

// export default App



// creating a small webpage using react js 

import React from 'react'
import Navbar from './component/navbar/Navbar'
import Banner from './component/banner/Banner'
import Middle from "./component/middle/Middle"
import Content from "./component/content/Content"
import Container from './component/container/Container'
import Matter from './component/matter/Matter'
import Form from './component/form/Form'
import Footter from './component/footter/Footter'

const App = () => {
  return (
    <div>
    <Navbar/>
    <Banner/> 
    <Middle/>
    <Content/>
    <Container/>
    <Matter/>
    <Form/>
    <Footter/>
    </div>
  )
}

export default App





