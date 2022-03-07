import React from 'react';
import Slider from "react-slick";

const Slide = (props) => {
  const { children } = props;
  const settings = {
    className: 'slide-recommendation',
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    arrows: false,
    centerMode: false,
    pauseOnHover: true,
  }
    return (
      <Slider {...settings}>
        {children}
      </Slider>
    );
}

export default Slide;