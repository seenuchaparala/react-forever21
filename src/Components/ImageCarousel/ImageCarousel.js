import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Image1 from './Images/Sunny.jpg'
import Image2 from './Images/Slideshow2.jpg'
import Image3 from './Images/AsiaHeritage.jpg'

const ImageCarousel = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} >
      <div>
        <img src={Image1} alt="Image1" />
      </div>
      <div>
        <img src={Image2} alt="Image2" />
      </div>
      <div>
        <img src={Image3} alt="Image3" />
      </div>
    </Carousel>
  )
}

export default ImageCarousel
