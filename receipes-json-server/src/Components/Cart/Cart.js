import React , {useState}from 'react'
import axios from "axios"
import { Table, Card ,Button} from "react-bootstrap"

export const Cart = () => {
    const [data, setData] = useState([])


    axios.get("http://localhost:4000/cart")
        .then(res => {
            console.log(res)
            setData(res.data)
        }).catch(err => console.log(err))

        const deleteitem = async (del) => {
            try {
                await axios.delete(`http://localhost:4000//${Number(del.id)}`)
                alert("done")
            } catch (err) {
                console.log(err);
            }
        }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>s.no</th>
                        <th>name</th>
                        <th>image</th>
                        <th>button</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((x,index) => {
                        return (
                            <tr>
                                <td>{index+1}</td>
                                <td>{x.name}</td>
                                <td><img src={x.image} width={"100px"}/></td>
                                <td><button onClick={()=>{deleteitem(x)}}>remove</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

        </div>
    )
}
