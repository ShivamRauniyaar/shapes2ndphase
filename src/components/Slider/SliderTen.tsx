"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
//bannerhotel.jpg

const SliderTen = () => {
  return (
    <>
      <div className="slider-block style-one bg-[#F5EEE7] xl:h-[540px] lg:h-[540px] md:h-[380px] h-[360px] max-[420px]:h-[300px] w-full">
        <div className="slider-main h-full w-full">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={false}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="h-full relative"
            autoplay={{
              delay: 4000,
            }}
          >
            <SwiperSlide>
              {/* <div className="slider-item h-full w-full relative overflow-hidden">
                <div className="container lg:pl-[320px] w-full h-full flex items-center relative">
                  <div className="text-content basis-1/2">
                    <div className="text-sub-display">Elegant. Durable. Trusted. Timeless.</div>
                    <div className="heading1 md:mt-5 mt-2">
                     Hospitality and more..

                    </div>
                 
                  </div>
                  <div className="sub-img absolute xl:w-[33%] sm:w-[36%] w-[58%] xl:right-[40px] lg:right-0 md:right-6 -right-6 bottom-0 z-[-1]">
                    <Image
                      src={"/images/banner/hotels2.jpg"}
                      width={2000}
                      height={1936}
                      alt="bg10-1"
                      priority={true}
                      className="w-full"
                    />
                  </div>
                </div>
              </div> */}
              {/* <Image
                src={"/images/banner/bannerhotel.jpg"}
                alt="bg1-1"
                fill
                priority
                className="object-contain"
                sizes="100vw"
              /> */}
              <div
                style={{
                  backgroundImage: `url(${"/images/banner/bannerhotel.jpg"})`,
                  width: "100%",
                  height: "540px",
                  backgroundSize: "cover", // Changed to 'contain'
                  backgroundPosition: "center", // Center the image
                  borderRadius: "12px",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {" "}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  backgroundImage: `url(${"/images/banner/hospitality.jpg"})`,
                  width: "100%",
                  height: "540px",
                  backgroundSize: "cover", // Changed to 'contain'
                  backgroundPosition: "center", // Center the image
                  borderRadius: "12px",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {" "}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SliderTen;
