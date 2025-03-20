import React, { useEffect, useState } from 'react'
import axios from "axios"
import {Card,Button,Modal,Form} from "react-bootstrap"

const Receipes = () => {
    
    const [data, setData] = useState([])
    const[show,setShow]=useState(true )
       const [editreceipe,setEditreceipe]=useState({
            name:"",
            image:"",
            rating:"",
            ingredients:'',
            instructions:''
        })
    
    const [delerecpie,setDelerecpie]=useState(null)
    useEffect(() => {
        axios.get('http://localhost:4000/recipes').then(res => {
            console.log(res.data)
            setData(res.data)
        }).catch(err => { console.log(err) })
    }, [delerecpie])


    const handleAAddToCart=(item)=>{
        alert('addtocart is done')
        axios.post("http://localhost:4000/cart",item)


    }
    const delateReceipe=async(abc)=>{
        try{
            await axios.delete(`http://localhost:4000/recipes/${abc.id}`)
            alert("receipes delete is done")
            setDelerecpie(abc)

        }catch(err){
            console.log(err)
        }
    }

    const hidedetails=()=>{
        setShow(false)
    }
    const editreceipedetails=(e)=>{
        setEditreceipe({...editreceipe,[e.target.name]:e.target.value})

    }

    const editnewreceipe=(e)=>{
        e.preventDefault();
        // console.log(addreceipe)
        // axios.put('http://localhost:4000/recipes',)
        // alert('successfullu addes new receipe')
        setShow(false)
    }

    return (
        <div>
         <div style={{display:'flex',justifyContent:"space-around",flexWrap:"wrap",alignItems:"center", padding:10,gap:10,backgroundColor:"lightsalmon"}}>
            {data.map(x=>{
                return(
                <Card style={{ width: '18rem',boxShadow:"5px 5px 5px grey", padding:10,backgroundColor:'lightcyan' }}>
                <Card.Img variant="top" src={x.image} />
                <Card.Body>
                    <Card.Title>{x.name}</Card.Title>
                    <Card.Text>{x.rating}</Card.Text>
                    <Button variant="primary" onClick={()=>handleAAddToCart(x)}>AddToCart</Button>
                    <Button variant="primary" onClick={()=>delateReceipe(x)}>delate</Button>
                    <Button variant="primary" >Edit</Button>
                    

                </Card.Body>
                </Card>
                )
            })}
        </div>

        <Modal show={show} onHide={hidedetails}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={editnewreceipe}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Receipe name</Form.Label>
              <Form.Control type="text" name='name'autoFocus onChange={editreceipedetails}/>
              </Form.Group> <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>receipe image</Form.Label>
              <Form.Control type="text"  name='image'autoFocus onChange={editreceipedetails}/>
              </Form.Group> 
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>receipe rating</Form.Label>
              <Form.Control type="text" name='rating' autoFocus onChange={editreceipedetails}/>
              </Form.Group> 
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>ingredients</Form.Label>
              <Form.Control as="textarea" name='ingredients' rows={4} onChange={editreceipedetails}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>instructions</Form.Label>
              <Form.Control as="textarea" name='instructions' rows={4} onChange={editreceipedetails} />
            </Form.Group>
            <Button type='submit'>Addreceipe</Button>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hidedetails}>Close</Button>
          
        </Modal.Footer>
      </Modal>   
        </div>
    )
}

export default Receipes