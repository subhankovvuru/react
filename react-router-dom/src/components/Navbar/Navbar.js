import React from 'react'
import {Navbar,Nav,Container,Button,Badge} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoCartOutline } from "react-icons/io5";
import "./Navbar.css"


const Navbar1 = () => {
  return (
    <div>
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" >SubhanMart</Navbar.Brand>
          <Nav className='navlinks'>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/product">Product</Nav.Link>
            <Button variant="warning">Login</Button>
            <Button variant="warning">Signup</Button>
            <button><IoCartOutline style={{color:"white",fontSize:30} }>
            <Badge bg="secondary" style={{color:"white"}}>9</Badge></IoCartOutline></button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbar1