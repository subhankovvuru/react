import React, { useState } from 'react'
import { Card, Button } from "react-bootstrap"
import axios from "axios"

const Receipes = () => {
    const [add, setAdd] = useState([])
    const [data, setData] = useState([])

    const AddCartItems = (item) => {
        axios.post("http://localhost:4000/cart", item)
        alert("done")
    }


    const deleteitem = async (del) => {
        try {
            await axios.delete(`http://localhost:5000/recipes/${Number(del.id)}`)
            alert("done")
        } catch (err) {
            console.log(err);
        }
    }

    axios.get("http://localhost:4000/recipes")
        .then(res => {
            console.log(res)
            setData(res.data)
        }).catch(err => console.log(err))

    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: 'center', gap: 20 }}>
            {data.map(x => {
                return (
                    <div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={x.image} />
                            <Card.Body>
                                <Card.Title>{x.name}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary" onClick={() => { AddCartItems(x) }}>ADDTOCART</Button>
                                <Button variant="primary" onClick={() => { deleteitem(x) }}>delete</Button>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })}
        </div>
    )
}

export default Receipes