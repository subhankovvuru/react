import React from 'react'

const Cart = ({cart}) => {
  return (
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center", gap:20,flexWrap:'wrap', width:"200"}}>
        {cart.map(x=>{
            return(
                <div style={{border:"2px solid black"}}>
                    <p>{x.id}</p>
                    <img src={x.image} alt='' width={250}/>
                    <p>{x.price}</p>

                    
                </div>
            )
        })}
    </div>
  )
}

export default Cart