import React, { useState } from 'react'

const UseEffect = () => {
    const [width,setWidth]=useState("100%")

  return (
    <div style={{width:width,backgroundColor:'orangered'}}>
        <button onClick={()=>setWidth("80","violet")}>80%</button>
        <button onClick={()=>setWidth("60","pink")}>60%</button>
        <button onClick={()=>setWidth("40","blue")}>40%</button>
        <button onClick={()=>setWidth("20","green")}>20%</button>
    </div>
  )
}

export default UseEffect