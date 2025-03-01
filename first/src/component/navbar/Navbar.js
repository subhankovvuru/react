// import React from 'react'
// import "./Navbar.css"

// const Navbar = () => {
//   return (
//     <div className='navbar'>
//         <div className='navbarleft'>
//             <h1>Landy</h1>
//         </div>
//         <div className='navbarcenter'>
//             <p>Home</p>
//             <p>Mission</p>
//             <p>Product</p>
//             <p>Contact</p>
//         </div>
//         <div className='navbarright'>
//             <button>Login</button>
//             <button>Signup</button>
//         </div>
//     </div>
//   )
// }

// export default Navbar




import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbarleft'>
        <h1>Landy</h1>
      </div>
      <div className='navbarright'>
        <a href='#'>About</a>
        <a href='#'>Mission</a>
        <a href='#'>Product</a>
        <a href='#'>Contact</a>
      </div>

    </div>
    
  )
}

export default Navbar;