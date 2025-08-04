"use client";
import React from "react";
import Map from "../Map/map";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import Image from "next/image";

const OurPresence = () => {
  return (
    <>
      <div className="bg-surface">
        {" "}
        <div className="container">
          <div className="content   overflow-hidden xl:-mx-5 rounded-3xl md:py-[60px] py-8">
            <div className="heading3 text-center">Our Presence</div>
          </div>
          <Map />
          <div className="brand-block md:py-[60px] py-[32px] relative">
            <div
              className="container absolute top-[100%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-200 p-5  border-[#949494] rounded-[12px] shadow-md"
              style={{
                border: "1px solid #949494",
                backgroundColor: "#ffffff",
              }}
            >
              <div className="list-brand grid grid-cols-4 gap-4">
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-semibold mb-3">25+</span>
                  {/* <div className="heading6">Heading</div> */}
                  <div className="">Countries and Growing</div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-semibold mb-3">100+</span>
                  {/* <div className="heading6">Heading</div> */}
                  <div className="">Cities and Growind</div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-semibold mb-3">400+</span>
                  {/* <div className="heading6">Heading</div> */}
                  <div className="">Passionate & qualified workforce</div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-semibold mb-3">100m+</span>
                  {/* <div className="heading6">Heading</div> */}
                  <div className="">products supplied worldwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurPresence;
