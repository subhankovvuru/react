import React, { useEffect, useState } from 'react';
import xyz from "axios"

const UseEffect = () => {
    const [width, setWidth] = useState("100%");
    const [bgcolor, setBgcolor] = useState("");
    const [color,setColor]=useState('')
    const [data,setData]=useState([])
    useEffect(()=>{
      xyz.get('https://dummyjson.com/recipes')
      .then(res=>{console.log(res)
        setData(res.data.recipes)
        
      })
      .catch(err=>console.log(err))

    },[])
    useEffect(()=>{
      let bgcolor="#"
      let color='#'
      
      let x="abcdefg0123456789"
      let y="abcdefg0123456789"

      for(let i=1;i<=6;i++){
        let value1=Math.floor(Math.random() * x.length)
        let value2=Math.floor(Math.random() * y.length)
        // console.log(value1)
        // console.log(value2)

        bgcolor +=x[value1]
        setBgcolor(bgcolor)
        color+=y[value2]
        setColor(color)
        
        
      }

    },[width])


    return (
        <div >
            <div style={{ width: width, backgroundColor: bgcolor,color:color,}}>
            <button onClick={() => setWidth("100%")}>100%</button>
            <button onClick={() => setWidth("80%")}>80%</button>
            <button onClick={() => setWidth("60%")}>60%</button>
            <button onClick={() => setWidth("40%")}>40%</button>
            <button onClick={() => setWidth("30%")}>30%</button>
            <div style={{display:"flex",flexWrap:'wrap',justifyContent:'center',alignItems:"center",gap:20,margin:20}}>
          {data.map(x=>{
              return(
              <div style={{display:"flex",flexDirection:'column', border:"2px solid black",padding:10,backgroundColor:"olivedrab"}}>
                  {x.id}
                  <img src={x.image} alt='' width={300}/>
              
                 <button style={{color:"white",backgroundColor:"orangered"}}>INGREDIENTS</button>
                 <button style={{color:"white",backgroundColor:"orangered"}}>instructions</button>
               
                </div>
              )
            })}
          </div>
            </div>
          
        </div>
    );
};

export default UseEffect;


// UseEffect(mounting,updating)