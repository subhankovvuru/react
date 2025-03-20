import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table,Button } from "react-bootstrap"

const Cart = () => {
    const [data, setData] = useState([])
    const[delatecartitem,setDelatecartitem]=useState(false)
    const[loading,setLoading]=useState(false)
    useEffect(() => {
        axios.get("http://localhost:4000/cart").then(res => {
            console.log(res.data)
            setData(res.data)
            setLoading(true)

        }).catch(err => console.log(err))
    },[delatecartitem])
 

    const delatecart=async(abx)=>{
        try{
            await axios.delete(`http://localhost:4000/cart/${Number(abx.id)}`)
            alert("cart delated")
            console.log(abx)
            setDelatecartitem(abx)
        }catch(err){
            console.log(err);
            
        }
    }
    
    return (
        <div>
            {data.length > 0 ?<Table striped bordered hover>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>image</th>
                        <th>Status</th>
                     </tr>
                </thead>
                <tbody>
                    {data.map((x,index)=> {
                        return (
                            <tr>
                                <td>{index+1}</td>
                                <td><img src={x.image} alt='' width={100} /></td>
                                <td><Button onClick={()=>{delatecart(x)}}>dealte</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>:"data not found"}
        </div>
    )
}

export default Cart