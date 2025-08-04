"use client";

import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderToysKid = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold: 100,
    draggable: true,
    useTransform: false,
  };

  return (
    <>
      <div className="slider-block toys-kid 2xl:h-[760px] xl:h-[680px] lg:h-[580px] md:h-[460px] sm:h-[400px] h-[400px] w-full mt-[30px]">
        <div className="container h-full">
          <div className="slider-main h-full w-full">
        
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderToysKid;
