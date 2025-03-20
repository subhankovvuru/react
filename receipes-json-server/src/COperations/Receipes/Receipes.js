import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Card, Button, Modal, Form } from "react-bootstrap"

const Receipes = () => {
  const [data, setData] = useState([])
  const [deletereceipe, setDeletereceipe] = useState(false)
  const [show, setShow] = useState(false);
  const [editrecipes, setEditrecipes] = useState({})

  const hideform = () => {
    setShow(false)

  }


  const editreceipechange=(a)=>{
    setEditrecipes({...editrecipes,[a.target.name]:a.target.value})
  }
  

  const Editrecipes=(item)=>{
    setShow(true)
    setEditrecipes(item)
  }


  const editsubmit=()=>{
    axios.put(`http://localhost:5000/recipes/${editrecipes.id}`,editrecipes)
    setShow(false)
  }
  useEffect(() => {
    axios.get("http://localhost:5000/recipes").then(res => {
      console.log(res.data)
      setData(res.data)
    }).catch(err => { console.log(err) })
  }, [deletereceipe])

  const addcartdetails = (item) => {
    axios.post("http://localhost:5000/cart", item)
    alert("addtocart is done")

  }
  const deletereceipes = (abc) => {
    axios.delete(`http://localhost:5000/recipes/${abc.id}`)
    alert("receipes deleted")
    setDeletereceipe(abc)
  }
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", alignItems: "center", gap: 20 }}>
        {data.map(x => {
          return (
            <div style={{ boxShadow: "10px 10px 10px grey", backgroundColor: "lightcyan" }}>
              <Card style={{ width: '18rem', backgroundColor: "lightcyan" }}>
                <Card.Img variant="top" src={x.image} />
                <Card.Body>
                  <Card.Title>{x.name}</Card.Title>
                  <Card.Text>{x.rating}</Card.Text>
                  <Button variant="primary" onClick={() => addcartdetails(x)}>AddToCart</Button>
                  <Button variant="primary" onClick={() => deletereceipes(x)}>delete</Button>
                  <Button variant="primary" onClick={()=>Editrecipes(x)}>Edit</Button>
                  
                </Card.Body>
              </Card>
            </div>
          )
        })}
      </div>


      <Modal show={show} onHide={hideform}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>name</Form.Label>
              <Form.Control type="text" value={editrecipes.name} autoFocus name='name' onChange={editreceipechange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>image</Form.Label>
              <Form.Control type="text" value={editrecipes.image} autoFocus name='image' onChange={editreceipechange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>ingredients</Form.Label>
              <Form.Control as="textarea" rows={3} name='ingredients' value={editrecipes.ingredients}  onChange={editreceipechange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>instructions</Form.Label>
              <Form.Control as="textarea" rows={3} name='instructions'  value={editrecipes.instructions} onChange={editreceipechange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hideform} >Close</Button>
          <Button variant="primary" onClick={editsubmit}>Submit</Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Receipes