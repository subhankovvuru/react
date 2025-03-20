import React ,{useState}from 'react'
import { Button, Form } from 'react-bootstrap'
import { authentication } from '../Firebase/Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


const Login = () => {
         const [logindetails,setLogindetails]=useState({
             email:"",
             password:"",
         })

     const navigate=useNavigate()
     

       const logindetailschange=(a)=>{
             setLogindetails({...logindetails,[a.target.name]:a.target.value})
         }
         console.log(logindetails)
         const { email, password } = logindetails; 
     
         const loginsubmit=async()=>{
             try{
                 await signInWithEmailAndPassword(authentication,email,password)
                 alert("done")
                 navigate("/dashboard")
             }catch(err){
                 alert(err)
             }
     
         }
     
  return (
    <div>
    <Form style={{width:"30%"}}>
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name='email' autoFocus onChange={logindetailschange} />
         </Form.Group>
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>password</Form.Label>
              <Form.Control type="text"  name='password' autoFocus onChange={logindetailschange}/>
         </Form.Group>
         <Button onClick={loginsubmit}>Submit</Button>
      
    </Form>
        
    </div>
  )
}

export default Login