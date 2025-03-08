import React from 'react'

import "./Products.css"

import {useNavigate} from "react-router-dom"

const Products = ({data}) => {
  
    const navigate=useNavigate()
    // console.log(navigate())
  return (

    <div className='carts'>
      {
        data.map(x=>{
    
          return(
            <div className='cart' onClick={()=>navigate(`/products/${x.id}`)}>
              <p>{x.id}</p>
              <img alt='' src={x.image} />
              <p>{x.title}</p>
              <p>{x.name}</p>
              <div>
                <button>INGERIDENTS</button>
                <button>INSTRUCTIONS</button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Products