import React, { useState } from 'react'
import {Modal,Form,Button} from "react-bootstrap"
const Login = () => {
  const [view,setView]=useState(true)
  const [logindetails,setLogindetails]=useState({email:"",password:''})

  const loginchangedetails=(a)=>{
    setLogindetails({...logindetails,[a.target.name]:a.target.value})
  }
   

  const loginhandlesubmit=(a)=>{
    a.preventDefault()
   const Allusers = JSON.parse(localStorage.getItem("SignUpUsers"))
   console.log(Allusers)
   const userdata=logindetails
   const Loginfound=Allusers.find(x=>x.email === userdata.email && x.password === userdata.password)
   console.log(Loginfound)
   if(Loginfound){
    alert('succesfully login')

   }else{
    alert('data not found')
    
  }
 
  }

  const hidelogin=()=>{
    setView(false)
    
  }



  return (
    <div>
      <Modal show={view} onHide={hidelogin}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email"  name='email' onChange={loginchangedetails}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>password</Form.Label>
              <Form.Control type="password" name='password' onChange={loginchangedetails}/>
            </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hidelogin}>close</Button>
          <Button variant="primary" onClick={loginhandlesubmit}>Sumbit</Button>

        </Modal.Footer>
      </Modal>
    
    </div>
  )
}

export default Login