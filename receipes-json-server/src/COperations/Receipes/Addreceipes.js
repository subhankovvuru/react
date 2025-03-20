import React, { useState } from 'react'
import {Form,Modal,Button} from "react-bootstrap"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const Addreceipes = () => {
    const [show,setShow]=useState(true);
    const [addreceipedetails,setAddreceipedetails]=useState({
        Name:"",
        image:"",
        ingredients:"",
        instructions:""

    })
 const naviagte=useNavigate()
const hideform=()=>{
    setShow(false)
    naviagte("/receipes")
}


const addreceipechange=(a)=>{
  setAddreceipedetails({...addreceipedetails,[a.target.name]:a.target.value})
}

const addreceipesubmit=(x)=>{
  x.preventDefault();
  axios.post("http://localhost:5000/recipes",addreceipedetails)
  console.log(addreceipedetails);
  
  alert("addreceipe is done")
  setShow(false)
  naviagte("/receipes")
}


  return (
    <div>
        <Modal  show={show} onHide={hideform}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>name</Form.Label>
              <Form.Control type="text"  autoFocus name='Name' onChange={addreceipechange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>image</Form.Label>
              <Form.Control type="text"    autoFocus name='image' onChange={addreceipechange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>ingredients</Form.Label>
              <Form.Control as="textarea" rows={3} name='ingredients' onChange={addreceipechange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>instructions</Form.Label>
              <Form.Control as="textarea" rows={3} name='instructions'  onChange={addreceipechange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hideform} >Close</Button>
          <Button variant="primary"  onClick={addreceipesubmit}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Addreceipes