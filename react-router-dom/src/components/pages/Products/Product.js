import React from 'react'
import { useParams } from 'react-router-dom'
import "./Products.css"

const Product = ({data}) => {
  console.log(useParams())
  const {id}=useParams();
  console.log(id)

  const itemFound=data.find((x)=>x.id === Number(id))

  console.log(data,"data from app")



  return (
    <div className='product'>
      <img src={itemFound.image} alt='' width={250}/>
      <p>{itemFound.name}</p>
      <p>{itemFound.rating}</p>
    </div>
  )

}

export default Product