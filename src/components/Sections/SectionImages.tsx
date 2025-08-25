"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/bundle";
const SectionImages = () => {
  return (
    <div>
      <div className="banner-block ">
        <div className="container">
          <div className="list-banner grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-[30px] gap-[20px]">
            <Link
              href={"/shop/breadcrumb-img"}
              className="banner-item relative block duration-500"
            >
              <div className="banner-img w-full rounded-2xl overflow-hidden">
                <Image
                  src={"/images/banner/luxuryimage.jpg"}
                  width={600}
                  height={400}
                  alt="bg-img"
                  className="w-full duration-500"
                />
              </div>
              <div className="banner-content absolute left-[30px] bottom-[30px]">
                <div className="heading4 text-white">Luxury Hotels</div>
              </div>
            </Link>
            <Link
              href={"/shop/breadcrumb-img"}
              className="banner-item relative block duration-500"
            >
              <div className="banner-img w-full rounded-2xl overflow-hidden">
                <Image
                  src={"/images/banner/boutiquehotels.jpg"}
                  width={600}
                  height={400}
                  alt="bg-img"
                  className="w-full duration-500"
                />
              </div>
              <div className="banner-content absolute left-[30px] bottom-[30px]">
                <div className="heading4 text-white">Boutique Hotels</div>
              </div>
            </Link>
            <Link
              href={"/shop/breadcrumb-img"}
              className="banner-item relative block duration-500 max-lg:hidden"
            >
              <div className="banner-img w-full rounded-2xl overflow-hidden">
                <Image
                  src={"/images/banner/businesshotels.jpg"}
                  width={600}
                  height={400}
                  alt="bg-img"
                  className="w-full duration-500"
                />
              </div>
              <div className="banner-content absolute left-[30px] bottom-[30px]">
                <div className="heading4 text-white">Business Hotels</div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="banner-block md:py-[60px] py-[32px] ">
        <div>
          <div className="partner_section_heading mb-6">
            Proud Partners in hospitality excellence
          </div>

          <div className="list-brand mb-20">
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
                  ...Many More
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionImages;
