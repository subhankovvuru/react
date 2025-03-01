import React, { useEffect, useState } from 'react'
import "./Products.css"
import ABC from "axios"

const Products = () => {
  const [data,setdata]=useState([])
    useEffect(()=>{
        ABC.get('https://dummyjson.com/recipes')
        .then(res=>{console.log(res)
          setdata(res.data.recipes)
        }).catch(err=>console.log(err))

    },[])
    console.log(data,"data from api")
  return (
    <div className='carts'>
      {
        data.map(x=>{
          return(
            <div className='cart'>
              <p>{x.id}</p>
              <img alt='' src={x.image} />
              <p>{x.title}</p>
              <p>{x.name}</p>
              <div>
                <button>ADDTOCART</button>
                <button>BUY NOW</button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Products