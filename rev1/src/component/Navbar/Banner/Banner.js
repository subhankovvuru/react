import React from 'react'
import "./Banner.css"

const Banner = () => {
  return (
    <div className='Banner'>
        <div className='Banner-left'>
            <button>Explore</button>
            <button>Learn More</button>
        </div>
        <div>
            <img src='https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'alt='' width={350}/>
        </div>
    </div>
  )
}

export default Banner