import Image from "next/image";
import Link from "next/link";
import React from "react";

const BannerWithText = () => {
  return (
    <>
      <div className="banner-block style-one  pt-10 pb-10">
        <div className="container grid sm:grid-cols-2 gap-5">
          <div className=" p-8 font-sans">
            <div className="mb-16">

              <h2 className="text-xl font-medium text-gray mb-2 text-[#949494]">Vision</h2>
              <h1 className="text-2xl font-bold mb-2 text-gray-300">
                To be the leading provider of premium stainless steel
                kitchenware, transforming everyday dining into delightful
                experiences through innovation, quality, and timeless design.
              </h1>
            </div>

            <div>
              <h2 className="text-xl font-medium mb-2 text-[#949494]">Mission</h2>
              <h1 className="text-2xl font-bold mb-2 text-gray-300">
                To deliver high-quality, durable, and stylish kitchenware that
                meets the evolving needs of modern kitchens.
              </h1>
            </div>
          </div>
          <div
            className="banner-item relative block overflow-hidden rounded-2xl duration-500"
          >
            <div className="banner-img">
              <Image
                src={"/images/banner/vision-mission.jpg"}
                width={2000}
                height={1300}
                alt="banner2"
                className="duration-1000 w-full"
              />
            </div>
       
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerWithText;
