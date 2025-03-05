//Routing & StateUpLifting in React
// date-24-02-2025  


import React from 'react'
import Navbar1 from './components/Navbar/Navbar'
import Home from './components/pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import About from './components/pages/About/About'
import Products from './components/pages/Products/Products'
import { useEffect } from 'react'
import { useState } from 'react'
import ABC from "axios"
import Product from './components/pages/Products/Product'
// import { data  } from 'react-router-dom'
const App = () => {
  
  const [data,setdata]=useState([])
    useEffect(()=>{
        ABC.get('https://dummyjson.com/recipes')
        .then(res=>{console.log(res)
          setdata(res.data.recipes)
        }).catch(err=>console.log(err))

    },[])
    
  return (
    <div>
      <Navbar1/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/product" element={<Products data={data}/>}/>
        <Route path="/products/:id" element={<Product data={data}/>}/>
        
      
      </Routes>
    </div>
  )
}

export default App