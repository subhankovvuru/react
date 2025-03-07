//using functional base components in write a small examle

//Ex:--
import React, { useState } from 'react'

const Count = () => {
    const [width,setWidth]=useState("100%")
    const [bgcolor,setBgcolor]=useState("green")
    const[count,setCount]=useState(0)

    const bgcolors=(x,y)=>{
      setWidth(x)
      setBgcolor(y)
    }
const inc=()=>{
  setCount(count+1)
}
const dec=()=>{
  setCount(count-1)
}
  return (
    <div style={{width:width,backgroundColor:bgcolor}}>
      <button onClick={()=>bgcolors('80%','violet')}>80%</button>
      <button onClick={()=>bgcolors("60%",'yellow')}>60%</button>
      <button onClick={()=>bgcolors("50%","#EC7FA9")}>50%</button>
      <button onClick={()=>bgcolors("30%",'#80CBC4')}>30%</button>
      <div>
      <button onClick={inc}>+</button>
      {count}
      <button onClick={dec} disabled={count === 0}>-</button>
      </div>
  
    </div>
  )
}

export default Count