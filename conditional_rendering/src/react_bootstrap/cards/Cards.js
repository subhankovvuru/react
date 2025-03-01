import React from 'react'
import "./Cards.css"



export const Cards = (info) => {
  return (
    <div className='card'>
        
       <img src={info.image} alt='' width={230}/>
       <p>{info.title}</p>
       <p>{info.price}</p>
       <div className='button'>
         <button>ADDTOCART</button>
         <button>BUY NOW</button>
     </div>
    </div>
  )
}
