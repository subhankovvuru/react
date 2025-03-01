import React from 'react'
import { Carousel } from 'react-bootstrap'

const Curousal = () => {
  return (
    <div>
        <Carousel>
        <Carousel.Item>
            <img src='https://ps.w.org/woo-product-carousel-slider-and-grid-ultimate/assets/banner-1544x500.jpg?rev=2812931' alt=''/>
        </Carousel.Item> 
        <Carousel.Item>
            <img src='https://www.kadencewp.com/help-center/wp-content/uploads/sites/14/2023/04/Product-Carousel-Block-1024x550.jpg' alt='' className='w-100'/>
        </Carousel.Item> 
        <Carousel.Item>
            <img src='https://www.algolia.com/doc/assets/images/guides/solutions/static-product-carousels-a8ab4643.jpg' alt=''className='w-100'/>
        </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default Curousal