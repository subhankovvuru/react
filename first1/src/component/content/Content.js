import React from 'react'
import "./Content.css"

const Content = () => {
    return (
        <div className='content'>
            <div className='contentleft'>
                <img src='https://landy-web.netlify.app/img/svg/graphs.svg' width={500} height={450} alt='' />
            </div>
            <div className='contentright'>
           <div className='contentright1'>
                <h1>Light, fast & responsive</h1>
                <p>This template is ready to use, so you don't need to change anything at a component level, unless you want to customize the default styling.</p>
            </div>
            <div className='contentright2s'>
            <div className='contentright2'>
                <img src='https://landy-web.netlify.app/img/svg/notes.svg' width={100} height={50} alt=''/>
                <h1>Why Antd?</h1>
                <p>Ant Design is a React UI library that has a lot of easy-to-use components for building elegant UI.</p>
            </div>
            <div className='contentright3'>
                <img src='https://landy-web.netlify.app/img/svg/notes.svg ' width={100} height={50} alt=''/>
                <h1>Why styled-components?</h1>
                <p>Styled Components gives you total control over your components.</p>
            </div>
            </div>
           </div>


        </div>

    )
}

export default Content;