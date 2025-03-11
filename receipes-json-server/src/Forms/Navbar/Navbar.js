import React from 'react'
import {Navbar,Nav,Container,Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Navbar1 = () => {
  const navigate=useNavigate()
  return (
    <div>
       <Navbar bg="primary" data-bs-theme="dark">
        <Container style={{display:"flex",justifyContent:'space-between', alignItems:"center"}}>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav style={{gap:30}}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Button variant="warning" onClick={()=>navigate("/login")}>Login</Button>
            <Button variant="warning" onClick={()=>navigate("/signup")}>Signup</Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbar1