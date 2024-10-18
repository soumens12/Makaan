import React from 'react';
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import carousel1 from './carousel-1.jpg';
import carousel2 from './carousel-2.jpg';

import './HeaderCarousel.css';

function HeaderCarousel() {
  return (
    <OwlCarousel
      className="owl-theme header-carousel"
      items={1}
      autoplay={true}
      smartSpeed={1500}
      dots={false}
      loop={true}
      nav={true}
      navText={[
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>'
      ]}
    >
      <div className="owl-carousel-item">
        <img className="img-fluid" src={carousel1} alt="carousel" />
      </div>
      <div className="owl-carousel-item">
        <img className="img-fluid" src={carousel2} alt="carousel" />
      </div>
    </OwlCarousel>
  )
}

export default HeaderCarousel