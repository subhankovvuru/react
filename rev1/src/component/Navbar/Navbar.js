import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='Navbar-left'>
            <h1>SubhanMart</h1>
        </div>
        <div className='Navbar-center'>
            <a href=''>Home</a>
            <a href=''>Products</a>
            <a href=''>About</a>
            <a href=''>Contact</a>
        </div>
        <div className='Navbar-right'>
            <button>Login</button>
            <button>Signup</button>
        </div>
    </div>
  )
}

export default Navbar