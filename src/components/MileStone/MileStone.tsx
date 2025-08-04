import Image from "next/image";
import React from "react";

const MileStone = () => {
  return (
    <>
      <div className="banner-block style-one  pt-40 pb-10">
        <div className="container grid sm:grid-cols-2 gap-5">
          <div className="banner-item relative block overflow-hidden rounded-2xl duration-500">
            <div className="banner-img">
              <Image
                src={"/images/banner/milestone.jpeg"}
                width={2000}
                height={1100}
                alt="banner2"
                className="duration-1000 w-full"
              />
            </div>
          
          </div>
          <div className=" p-8 font-sans">
            <div className="heading3 text-left mb-6">MileStone</div>

            <div className="mb-6">
              <h2 className="text-xl font-medium text-gray mb-2 text-gray-300">
                State-of-the-Art Manufacturing
              </h2>
              <h1 className="text-2xl font-bold mb-2 text-[#949494]">
                Established advanced in-house manufacturing units to ensure
                precision, quality, and scalability across our product range.
              </h1>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-medium text-gray mb-2 text-gray-300">
                National Brand Recognition
              </h2>
              <h1 className="text-2xl font-bold mb-2 text-[#949494]">
                Gained nationwide presence through strategic retail partnerships
                and customer trust, becoming a household name across India.
              </h1>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-medium text-gray mb-2 text-gray-300 ">
                Innovation in Design
              </h2>
              <h1 className="text-2xl font-bold mb-2  text-[#949494]">
                Launched multiple product lines with ergonomic, aesthetic, and
                functional upgrades—setting new trends in kitchen essentials.
              </h1>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-medium text-gray mb-2   text-gray-300">
                Expansion of Product Portfolio
              </h2>
              <h1 className="text-2xl font-bold mb-2 text-[#949494]">
                Grew from classic cookware to a diverse range including storage,
                serveware, and customized kitchen solutions.
              </h1>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-medium text-gray mb-2   text-gray-300">
                Customer Satisfaction Milestone
              </h2>
              <h1 className="text-2xl font-bold mb-2  text-[#949494]">
                Surpassed customer satisfaction benchmarks with consistent
                product quality and dedicated service.
              </h1>
            </div>
            <div className="">
              <h2 className="text-xl font-medium text-gray mb-2   text-gray-300">
                Export & Global Outreach
              </h2>
              <h1 className="text-2xl font-bold mb-2  text-[#949494]">
                Marked entry into international markets, sharing Indian
                craftsmanship with homes around the world.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MileStone;
