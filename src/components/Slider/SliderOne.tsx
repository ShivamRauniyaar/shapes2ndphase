"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/effect-fade";

const SliderOne: React.FC<{ SliderData: any }> = ({ SliderData }) => {
  return (
    <>
      <div></div>
      <div className="slider-block style-one  xl:h-[800px] lg:h-[800px] md:h-[580px] sm:h-[500px] h-[350px] max-[420px]:h-[320px] w-full">
        <div className="slider-main h-full w-full">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={false}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            className="h-full relative"
            autoplay={{
              delay: 4000,
            }}
          >
            {SliderData?.map((item: any, index: number) => (
              <SwiperSlide key={index}>
                <Image
                  src={item?.filePath}
                
                  alt="bg1-1"
                  fill
                  priority
                  className="object-contain"
                  sizes="100vw"
                />
              </SwiperSlide>
            ))}
            
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SliderOne;
