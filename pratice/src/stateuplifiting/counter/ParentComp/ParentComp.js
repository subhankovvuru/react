import React, { useState } from 'react'
import Child1 from '../Child1/Child1'
import Child22 from '../Child2/Child2'

const ParentComp = () => {
    const [count,setCount]=useState(0)
  return (
    <div style={{display:'flex',justifyContent:"center",flexDirection:"column",fontSize:50,alignItems:"center"}}>
        {count}
       <div style={{display:'flex', fontSize:50}}>
       <Child1 setCount={setCount}/>
       <Child22 setCount={setCount}/>
       </div>
    </div>
  )
}

export default ParentComp