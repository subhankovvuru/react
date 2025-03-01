import React from 'react'
import "./Container.css"
const Container = () => {
  return (
    <div className='container'>
        <div className='containerleft'>
            <h1>Ready made sections</h1>
            <p>Landy comes with a set of ready to use sections to help you easily create a landing page for your own brand, with all the content your startup desires. In order to replace any dummy elements (text, image, etc..) all you need to do is go to content folder and input your real content.</p>
        </div>
        <div className='containerright'>
            <img src='https://landy-web.netlify.app/img/svg/product-launch.svg' alt='' width={400} height={400}/>
        </div>
    </div>
  )
}

export default Container