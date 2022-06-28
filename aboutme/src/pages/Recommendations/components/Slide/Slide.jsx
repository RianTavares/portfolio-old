/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import Slider from 'react-slick';
import SlideItem from '../SlideItem';

const Slide = (props) => {
  const { data } = props;
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
  };
  return (
    <>
      {data.length > 0
        && (
        <Slider {...settings}>
          {data.map((item) => (
            <SlideItem
              key={item.id}
              text={item.recommendation}
              name={item.name}
              position={item.position}
              img={item.profile_picture.url}
            />
          ))}
        </Slider>
        )}
    </>
  );
};

export default Slide;
