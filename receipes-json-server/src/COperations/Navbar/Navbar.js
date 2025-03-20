import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Container, Button} from "react-bootstrap"
import { useNavigate } from 'react-router-dom';

const Navbar1 = () => {
  const navigate=useNavigate()
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="/receipes">Receipes</Nav.Link>
            <Button onClick={()=>navigate('/cart')}>Cart</Button>
            <Button onClick={()=>navigate('/addreceipes')}>Addreceipe</Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbar1