"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/bundle";

const ProcessCmp: React.FC<{ ProcessData: any }> = ({ProcessData}) => {
 

  return (
    <div>
      {" "}
      <div className="testimonial-block md:py-20 py-10 bg-surface">
        <div className="container">
          <div className="heading6 text-center text-[#949494] text-[14px] font-weight-[600] uppercase	">
            {" "}
            Shapes ADVANTAGE
          </div>
          <div className="heading3 text-center">Our Process</div>
        </div>
        <div className="list-testimonial pagination-mt40 md:mt-10 mt-6 p-2">
          <Swiper
            spaceBetween={12}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={false}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              680: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            {ProcessData.map((prd: any, index: number) => (
              <SwiperSlide key={index}>
                <div className="testimonial-item style-one h-full">
                  <div className="testimonial-main bg-white hover:bg-[#FF0000] hover:text-white p-8 rounded-2xl h-full">
                    <h3>Advantage: {index + 1}</h3>
                    <div className="heading6 title mt-4 pb-12 text-[20px]">
                      {prd?.description}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProcessCmp;
