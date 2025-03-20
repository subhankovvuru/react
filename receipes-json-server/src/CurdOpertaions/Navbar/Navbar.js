import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Container, Button,Badge} from "react-bootstrap"
import { FaOpencart } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react';
import axios  from 'axios';

const Navbar1 = () => {
  const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:4000/cart").then(res => {
            console.log(res.data)
            setData(res.data)

        }).catch(err => console.log(err))
    },[])
    const navigate=useNavigate()
  return (
    <div>
         <Navbar bg="warning" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">CurdOpertaions</Navbar.Brand>
          <Nav style={{display:"flex",gap:30}}>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/receipes">Receipes</Nav.Link>
            <Button onClick={()=>navigate('/addreceipe')}>Addreceipe</Button>
            <Button onClick={()=>navigate('/cart')}>
            <FaOpencart style={{ height: `${30}px`,}} size={20}/>
            <Badge bg="secondary">{data.length}</Badge>
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbar1