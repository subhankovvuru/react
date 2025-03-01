import React from 'react'
import {Navbar,Nav,Container,Button,Badge} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css"
import { TiShoppingCart } from "react-icons/ti";
const Navbar1 = () => {
  return (
    <div>
        
      <Navbar bg="dark" data-bs-theme="dark" expand="md" className='navbar'>
        <Container>
          <Navbar.Brand href="#home">SubhanProduts</Navbar.Brand>
          <Navbar.Toggle></Navbar.Toggle>
          <Navbar.Collapse className='collapse'>
          <Nav className="ms-auto" id='nav'>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Button variant="warning">Login</Button>
            <Button variant="warning">SignUp</Button>
            <button>
            <TiShoppingCart  size={40} />
            <Badge bg="secondary" style={{top:-20}}>9</Badge>
            </button>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbar1