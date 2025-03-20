import React from 'react'
import {Navbar,Nav,Container, Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
const Navbar1 = () => {
    const naviagte=useNavigate()
  return (
    <div>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Button>
            <Button variant="warning" onClick={()=>naviagte('/login')}>Login</Button>
            <Button variant="warning" onClick={()=>naviagte("/signup")}>Signup</Button>
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbar1