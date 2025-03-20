import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Table } from 'react-bootstrap'
const Cart = () => {

  const [data, setData] = useState([])
  const [deletecart,setDeletecart]=useState(false)


  useEffect(() => {
    axios.get("http://localhost:5000/cart")
      .then(res => {
        console.log(res.data)
        setData(res.data)
      }).catch(err => { console.log(err) })
  }, [deletecart])

  const deleteCart = async (item) => {
    try {
      await axios.delete(`http://localhost:5000/cart/${item.id}`);
      alert('Delete is done');
      setDeletecart(item)
      
     
    } catch (err) {
      alert("Error deleting item: " + err.message);
    }
  };

  return (
    <div>
      {data.length > 0 ? <Table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>image</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((x,index) => {
            return (

              <tr>
                <td>{index+1}</td>
                <td><img src={x.image} width={100} /></td>
                <td><button onClick={() => { deleteCart(x) }}>delete</button></td>
              </tr>


            )
          })}
        </tbody>
      </Table> : "no data found"}
    </div>
  )
}

export default Cart