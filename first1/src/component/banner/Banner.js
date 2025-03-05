// import React from 'react'
// import "./Banner.css"

// const Banner = () => {
//     return (
//         <div className='banner'>
//             <div className='bannerleft'>
//                 <h1>Landing page template for developers & startups
//                 </h1>
//                 <p>Beautifully designed templates using React.js, ant design and styled-components! Save weeks of time and build your landing page in minutes.

//                     Explore
//                     Learn more
//                 </p>
//                 <button>Explore</button>
//                 <button>Learn more</button>
//             </div>
//             <div className='bannerright'>
//                 <img src='https://landy-web.netlify.app/img/svg/developer.svg' alt='' width={400} height={450}/>
//             </div>
//         </div>
//     )

// }

// export default Banner;




import React from 'react'
import "./Banner.css"

const Banner = () => {
  return (
    <div className='banner'>
        <div className='bannerleft'>
            <h1>Landing page template for developers & startups</h1>
            <p>Beautifully designed templates using React.js, ant design and styled-components! Save weeks of time and build your landing page in minutes.</p>
            <button>Explore</button>
            <button>Learn more</button>

        </div>
        <div className='bannerright'>
            <img src='https://landy-web.netlify.app/img/svg/developer.svg' width={500}   height={450}/>
        </div>
    </div>
  )
}

export default Banner