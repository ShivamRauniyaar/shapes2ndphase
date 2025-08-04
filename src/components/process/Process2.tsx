"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import Image from "next/image";

const ProcessCmp2 = () => {
  return (
    <div className="bg-surface">
      {" "}
      <div className="container">
        <div className="content   overflow-hidden xl:-mx-5 rounded-3xl md:py-[60px] py-8">
          <div className="heading3 text-center">Who we are</div>
          <div className="list-testi w-full section-swiper-navigation style-center style-small-border mt-5">
            <div className="testi-item flex flex-col items-center justify-center xl:px-[120px] md:px-[60px] px-8">
              <div className="desc heading4 font-medium text-center  fs22  font-weight-[600]">
                Among the top 3 brands for premium SS cutlery in India, with 35+
                Years of Manufacturing Excellence in Tabletop Aesthetics,
                Kitchenware and Flatware, our products elevate your dining
                experiences.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container bg-surface ">
        <div className={`benefit-block md:pt-10 pt-10  `}>
          <div className="list-benefit grid items-start lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px]">
            <div className="benefit-item flex flex-col items-center justify-center">
              <i className="icon-phone-call lg:text-7xl text-5xl"></i>
              <div className="heading6 text-center mt-5">
                Artistry Meets Functionality
              </div>
              <div className="caption1 text-secondary text-center mt-3">
                We&apos;re here to help you with any questions or concerns you
                have, 24/7.
              </div>
            </div>
            <div className="benefit-item flex flex-col items-center justify-center">
              <i className="icon-return lg:text-7xl text-5xl"></i>
              <div className="heading6 text-center mt-5">
                Finishes That Speak Sophistication
              </div>
              <div className="caption1 text-secondary text-center mt-3">
                If you&apos;re not satisfied with your purchase, simply return
                it within 14 days for a refund.
              </div>
            </div>
            <div className="benefit-item flex flex-col items-center justify-center">
              <i className="icon-guarantee lg:text-7xl text-5xl"></i>
              <div className="heading6 text-center mt-5">
                Durability That Preserves Elegance
              </div>
              <div className="caption1 text-secondary text-center mt-3">
                {" "}
                We stand behind our products and services and guarantee your
                satisfaction.
              </div>
            </div>
            <div className="benefit-item flex flex-col items-center justify-center">
              <i className="icon-delivery-truck lg:text-7xl text-5xl"></i>
              <div className="heading6 text-center mt-5">
                Shipping worldwide
              </div>
              <div className="caption1 text-secondary text-center mt-3">
                We ship our products worldwide, making them accessible to
                customers everywhere.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex justify-center mt-8 items-center container   ">
        <div className="button-main">Know More</div>
      </div>
      <div className="brand-block md:py-[60px] py-[32px] relative">
        <div
          className="container absolute top-[100%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-200 p-5  border-[#949494] rounded-[12px] shadow-md"
          style={{
            border: "1px solid #949494",
            backgroundColor: "#ffffff",
          }}
        >
          <div className="heading6 text-left mb-5">Our Partners</div>

          <div className="list-brand">
            <Swiper
              spaceBetween={12}
              slidesPerView={2}
              loop={true}
              modules={[Autoplay]}
              autoplay={{
                delay: 4000,
              }}
              breakpoints={{
                500: {
                  slidesPerView: 3,
                  spaceBetween: 16,
                },
                680: {
                  slidesPerView: 4,
                  spaceBetween: 16,
                },
                992: {
                  slidesPerView: 5,
                  spaceBetween: 16,
                },
                1200: {
                  slidesPerView: 6,
                  spaceBetween: 16,
                },
              }}
            >
              <SwiperSlide>
                <div
                  className="brand-item relative flex items-center justify-left h-[36px]"
                  style={{
                    justifyContent: "left",
                  }}
                >
                  <Image
                    src={"/images/banner/bikanerwalahotel.png"}
                    width={300}
                    height={300}
                    alt="1"
                    className="h-full w-auto duration-500 relative object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-item relative flex items-center justify-center h-[36px]">
                  <Image
                    src={"/images/banner/radisson_hotels.svg"}
                    width={300}
                    height={300}
                    alt="1"
                    className="h-full w-auto duration-500 relative object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-item relative flex items-center justify-center h-[36px]">
                  <Image
                    src={"/images/banner/oberoihotel.svg"}
                    width={300}
                    height={300}
                    alt="1"
                    className="h-full w-auto duration-500 relative object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-item relative flex items-center justify-center h-[36px]">
                  <Image
                    src={"/images/banner/westinhotel.svg"}
                    width={300}
                    height={300}
                    alt="1"
                    className="h-full w-auto duration-500 relative object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-item relative flex items-center justify-center h-[36px]">
                  <Image
                    src={"/images/banner/sarovarhotels.png"}
                    width={300}
                    height={300}
                    alt="1"
                    className="h-full w-auto duration-500 relative object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-item relative flex items-center justify-center h-[36px]">
                  {/* <Image
                    src={"/images/brand/6.png"}
                    width={300}
                    height={300}
                    alt="1"
                    className="h-full w-auto duration-500 relative object-cover"
                  /> */}
                  ...Many More
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      {/* <div className="testimonial-block md:py-20 py-10 bg-surface">
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
            {data.map((prd, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-item style-one h-full">
                  <div className="testimonial-main bg-white hover:bg-[#FF0000] hover:text-white p-8 rounded-2xl h-full">
                    <h3>Advantage: {index + 1}</h3>
                    <div className="heading6 title mt-4 pb-12 text-[20px]">
                      {prd?.desc}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div> */}
    </div>
  );
};

export default ProcessCmp2;
