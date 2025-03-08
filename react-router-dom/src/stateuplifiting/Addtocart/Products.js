import React from 'react'

const Products = ({data,addtocart}) => {
  return (
    <div style={{display:"flex",flexWrap:'wrap',justifyContent:"center",alignItems:"center",border:"2px solid black"
      ,gap:30,padding:30
    }}>
        {data.map(x=>{
            return(
                <div style={{display:"flex",justifyContent:"center",flexDirection:"column",border:"2px solid black"}}>
                <p>{x.id}</p>
                <img src={x.image} alt='' width={250} height={300}/>
                <p>{x.price}</p>
                <button onClick={()=>addtocart(x)}>addtocart</button>
                </div>
            )
        })}
    </div>
  )
}

export default Products