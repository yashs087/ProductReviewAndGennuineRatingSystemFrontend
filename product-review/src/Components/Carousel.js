import React from 'react' 
import {Carousel} from 'react-bootstrap'
import './carousel.css'
import carousel1 from '../images/review-banner7.jpg'
import carousel2 from '../images/review-banner5.jpg'
import carousel3 from '../images/review-banner6.jpg'
class CarouselSelect extends React.Component{

    render() {
        return(
            <div>
                <Carousel fade className="caroHeight">
                  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carousel1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carousel2}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carousel3}
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
            </div>
        )
    }

}

export default CarouselSelect;