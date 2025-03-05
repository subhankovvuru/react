import React from 'react'
import "./Fotter.css"


const Footter = () => {
  return (
    <div>
        <div className='footter'>
        <div className='footters1'>
        <div className='footter1'>
            <h1>Contact</h1>
            <p>Tell us everythingp</p>
            <p>Do you have any question? Feel free to reach out.</p>

        </div>
        <div className='footter2'>
            <h3>Policy</h3>
            <p>Applicstion Security</p>
            <p>Software principals</p>
        </div>
        <div className='footter3'>
            <p>Support Center</p>
            <p>Customer Support</p>

        </div>
        </div>
        <div className='footters'>
        <div className='footters1'>
            <h1>Address</h1>
            <p>Rancho Santa Margarita</p>
            <p>2131 Elk Street</p>
            <p>California</p>
        </div>
        <div className='footters2'>
            <h3>Company</h3>
            <p>About</p>
            <p>Blog</p>
            <p>Press</p>
            <p>Careers & Culture</p>
        </div>
        <div className='footters3'>
             <h1>Language</h1>
             <img src='https://landy-web.netlify.app/img/svg/united-states.svg'alt='' width={30}
             height={30}/>
             <img src='https://landy-web.netlify.app/img/svg/spain.svg' alt='' width={30}height={30}/>
        </div>
        </div>
        
        </div>
    </div>
  )
}

export default Footter