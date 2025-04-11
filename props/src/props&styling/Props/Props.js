import React from 'react'
import "./Props.css"

const Props = (prop) => {
    console.log(prop)
  return (
    <div className='prop'>
        <p>{prop.n}</p><br/>
        <p><img src={prop.img} width={150}/></p><br/>

        <p>{prop.title}</p><br/>
        <p>{prop.pri}</p><br/>
       
        
    
    </div>
  )
}

export default Props