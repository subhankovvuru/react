import React, { useState } from 'react'
import {Modal,Form,Button} from "react-bootstrap"
import { useNavigate } from 'react-router-dom'


const Signup = () => {
  const [show,setShow]=useState(true)
  const [signupdetails,setSignupdetails]=useState({name:"",email:"",password:'',confirmpassword:''})
  const [users,setUsers]=useState([])
  const navigate=useNavigate()
  const signupdetailschange=(a)=>{
    setSignupdetails({...signupdetails,[a.target.name]: a.target.value})
    
  }
  console.log(signupdetails)
  
  const handleSubmit=(e)=>{
    e.preventDefault()

    
    const Alluserdata=[...users,signupdetails]
    localStorage.setItem('SignUpUsers' ,JSON.stringify(Alluserdata))

    setUsers(Alluserdata);
    navigate("/login")

  }
  console.log(users)

  const hidedetails=()=>{
    setShow(false)
    navigate('/login')
  }
  return (
    <div>
       <Modal show={show} onHide={hidedetails}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" name='name' onChange={signupdetailschange} />
            </Form.Group><Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email"  name='email' onChange={signupdetailschange}/>
            </Form.Group><Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>password</Form.Label>
              <Form.Control type="password" name='password' onChange={signupdetailschange}/>
            </Form.Group><Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>conform password</Form.Label>
              <Form.Control type="confirm password" name='confirm password' onChange={signupdetailschange}/>
            </Form.Group>
          
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hidedetails}>close</Button>
          <Button variant="primary" onClick={handleSubmit} >Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Signup


