import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { authentication } from '../Firebase/Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [signupdetails,setSignupdetails]=useState({
        name:"",
        email:"",
        password:"",
    })

    const navigate=useNavigate()

    const signupdetailschange=(a)=>{
        setSignupdetails({...signupdetails,[a.target.name]:a.target.value})
    }
    console.log(signupdetails)
    const { email, password } = signupdetails; 

    const signupsubmit=async()=>{
        try{
            await createUserWithEmailAndPassword(authentication,email,password)
            alert("done")
            navigate("/login")
        }catch(err){
            alert(err)
        }

    }

  return (
    <div>
        <Form style={{width:"30%"}}>
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>name</Form.Label>
              <Form.Control type="text" name="name" autoFocus onChange={signupdetailschange}/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name='email' autoFocus onChange={signupdetailschange}/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>password</Form.Label>
              <Form.Control type="text"  name='password' autoFocus onChange={signupdetailschange}/>
         </Form.Group>
         <Button onClick={signupsubmit}>Submit</Button>
    </Form>
    </div>
  )
}

export default Signup