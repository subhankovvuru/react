import React from 'react'
import "./Cards.css"

const Cards = (info) => {
  return (
    <>
    <div className='card'>
    <img src={info.img} alt='' width="30%"/>
     <p>{info.id}</p>
     <p>{info.title}</p>
     <p>${info.price}</p>
     <p>{info.btn1}</p>
     <p>{info.btn2}</p>
    </div>
    </>
  )
}

export default Cards