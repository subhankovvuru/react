import React from 'react'
import "./Matter.css"

const Matter = () => {
  return (
    <div className='matter'>
        <div className='matterleft'>
            <img src='https://landy-web.netlify.app/img/svg/waving.svg' alt='' width={400} height={400}/>
        </div>
        <div className='matterright'>
            <h1>That's about it!</h1>
            <p>If you are familiar with React, or SPA frameworks in general, there shouldn't be any confusing parts about this template. if not, you can always reach out to me and I'll try me best to answer your questions.</p>
        </div>
    </div>
  )
}

export default Matter
