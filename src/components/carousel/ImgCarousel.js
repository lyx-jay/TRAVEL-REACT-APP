import React from 'react';
import './ImgCarouselStyles.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import BoraBora from '../../assets/borabora.jpg';
import BoraBora2 from '../../assets/borabora2.jpg';
import Keywest from '../../assets/keywest.jpg';

function ImgCarousel() {
  return (
    <div className="container" name="carousel">
      <Carousel className='carousel' showArrows={true} autoPlay={true} infiniteLoop={true}>
        <div>
          <img src={BoraBora} />
          {/* <p className="legend">BoraBora</p> */}
        </div>
        <div>
          <img src={BoraBora2} />
          {/* <p className="legend">BoraBora2</p> */}
        </div>
        <div>
          <img src={Keywest} />
          {/* <p className="legend">Keywest</p> */}
        </div>
      </Carousel>
    </div>

  )
}

export default ImgCarousel