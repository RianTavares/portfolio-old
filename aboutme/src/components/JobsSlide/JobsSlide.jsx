import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import JobCard from "./components/JobCard";
import Arrows from "./components/Arrows";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const JobsSlider = () => {
  const settings = {
    className: 'slide',
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 1,
    arrows: true,
    nextArrow: <Arrows type="next" />,
    prevArrow: <Arrows type="prev" />,
    centerMode: false,
    centerPadding: '50px',
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 0,
                arrows: false,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 0,
                arrows: false,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0,
                centerMode: true,
                centerPadding: '30px',
                arrows: false,
            },
        },
    ],
}
    return (
      <div>
        <Slider {...settings}>
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />

        </Slider>
      </div>
    );
}

export default JobsSlider;