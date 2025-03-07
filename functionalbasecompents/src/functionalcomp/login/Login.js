import React, { useState } from 'react'

const Login = () => {
  const [login,setLogin]=useState(false);
  const [Signup,setSignup]=useState(false)

  const logins=()=>{
    setLogin(!login)
  }
  const Sign_up=()=>{
    setSignup(!Signup)
  }
  return (
    <div style={{backgroundColor:"yellowgreen"}}>
    
    <button onClick={logins}>Login</button>
      {login && <form>
        <input type='text' placeholder='name here'/>
        <input type='text' placeholder='email here'/>
      </form>}
      <button onClick={Sign_up}>SignUp</button>
      {Signup && <form>
        <input type='text' placeholder='name here'/>
        <input type='email' placeholder='email here'/>
        <input type='password' placeholder='password here'/>
        <input type='password' placeholder='conformpswd here'/>
      </form>}
   
    </div>
  )
}

export default Login