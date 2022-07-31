import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import Image1 from './Images/Sunny.jpg'
import Image2 from './Images/Slideshow2.jpg'
import Image3 from './Images/AsiaHeritage.jpg'

const ImageCarousel = () => {
  const Images = [Image1, Image2, Image3]
  return (
    <Carousel autoPlay={true} infiniteLoop={true}>
      {Images.map((image, i) => {
        return (
          <div key={i}>
            <img src={image} alt={` carasouel ${i}`} />
          </div>
        )
      })}
    </Carousel>
  )
}

export default ImageCarousel
