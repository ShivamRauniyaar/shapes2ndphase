"use client";
import React, { useState } from "react";
import Image from "next/image";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const VideoTutorial = () => {
  const [activeVideo, setActiveVideo] = useState<string>("1");
  const [openVideo, setOpenVideo] = useState<boolean>(false);

  const handleActiveVideo = (item: string) => {
    setActiveVideo(item);
  };

  return (
    <>
      <div className="video-tutorial-block  bg-white relative max-sm:flex max-sm:flex-col-reverse">
        <div className="container">
          <div className="sm:pb-20 pb-10 pt-10">
            <div className="heading6 unde">Why Us</div>
            <div className="heading4  underline">Get The Shapes Advantage</div>
          </div>
          <div className="list-category w-fit lg:pb-[70px] sm:pb-20 pb-10">
            <div
              onClick={() => handleActiveVideo("1")}
              className={`item flex items-center gap-3 cursor-pointer ${
                activeVideo === "1" ? "active" : ""
              }`}
            >
              <Icon.CaretDoubleRight size={24} />
              <div className="heading4 fs22 inline-block">
                Signature Designs for Signature Experiences
              </div>
            </div>
            <div
              onClick={() => handleActiveVideo("2")}
              className={`item flex items-center gap-3 cursor-pointer sm:mt-7 mt-4 ${
                activeVideo === "2" ? "active" : ""
              }`}
            >
              <Icon.CaretDoubleRight size={24} />
              <div className="heading4  fs22 inline-block">
                Custom Branding & Bespoke Collections
              </div>
            </div>
            <div
              onClick={() => handleActiveVideo("3")}
              className={`item flex items-center gap-3 cursor-pointer sm:mt-7 mt-4 ${
                activeVideo === "3" ? "active" : ""
              }`}
            >
              <Icon.CaretDoubleRight size={24} />
              <div className="heading4 fs22 inline-block">
                Sustainable Yet Sophisticated
              </div>
            </div>
            <div
              onClick={() => handleActiveVideo("4")}
              className={`item flex items-center gap-3 cursor-pointer sm:mt-7 mt-4 ${
                activeVideo === "4" ? "active" : ""
              }`}
            >
              <Icon.CaretDoubleRight size={24} />
              <div className="heading4 fs22 inline-block">
                Crafter from the World's Finest Raw materials
              </div>
            </div>
            <div
              onClick={() => handleActiveVideo("5")}
              className={`item flex items-center gap-3 cursor-pointer sm:mt-7 mt-4 ${
                activeVideo === "5" ? "active" : ""
              }`}
            >
              <Icon.CaretDoubleRight size={24} />
              <div className="heading4 fs22 inline-block">
                Corporate Gift Sets
              </div>
            </div>
          </div>

          <div className="flex justify-start items-center bg-gray-50 pb-20">
            <div className="grid grid-cols-2 gap-x-[6rem] gap-y-12">
              {/* Top Left */}
              <div className="flex flex-col items-center">
                <span className="text-4xl font-semibold mb-3">2m+</span>
                {/* <div className="heading6">Heading</div> */}
                <div className="">Premium Cutlery Delivered Anually</div>
              </div>

              {/* Top Right */}
              <div className="flex flex-col items-center">
                <span className="text-4xl font-semibold mb-3">100m+</span>
                {/* <div className="heading6">Heading</div> */}
                <div className="">Premiuim cutlery supplied to-date</div>
              </div>

              {/* Bottom Left */}
              <div className="flex flex-col items-center">
                <span className="text-4xl font-semibold mb-3">400+</span>
                {/* <div className="heading6">Heading</div> */}
                <div className="">Hospitality and trade partners</div>
              </div>

              {/* Bottom Right */}
              <div className="flex flex-col items-center">
                <span className="text-4xl font-semibold mb-3">25+</span>
                {/* <div className="heading6">Heading</div> */}
                <div className="">Countries and growing</div>
              </div>
            </div>
          </div>
        </div>
        <div className="list-video sm:absolute max-sm:relative top-0 right-0 bottom-0 w-1/2 max-sm:w-full">
          <div
            className={`bg-video w-full h-full ${
              activeVideo === "1" ? "active" : ""
            }`}
            data-item="1"
          >
            <div className="bg-img w-full h-full relative">
              <Image
                src={"/images/banner/premiumsections.jpg"}
                width={3000}
                height={3000}
                alt="bg-img"
                className="w-full h-full object-cover"
              />

              <div className="absolute fs22 inset-0 m-[40px] bg-white opacity-[50%] flex items-center justify-center text-[30px] font-600">
                <div className=" fs30 font-600 break-words w-[500px]">
                  {" "}
                  Distinctive creations tailored to leave a lasting impression.
                </div>
              </div>
            </div>
          </div>
          <div
            className={`bg-video w-full h-full ${
              activeVideo === "2" ? "active" : ""
            }`}
            data-item="2"
          >
            <div className="bg-img w-full h-full relative">
              <Image
                src={"/images/banner/premiumsections.jpg"}
                width={3000}
                height={3000}
                alt="bg-img"
                className="w-full h-full object-cover"
              />
              <div className="absolute fs22 inset-0 m-[40px] bg-white opacity-[50%] flex items-center justify-center text-[30px] font-600">
                <div className=" fs30 font-600 break-words w-[500px]">
                  {" "}
                  Tailor-made products designed to reflect your brand's unique
                  identity.
                </div>
              </div>
            </div>
          </div>
          <div
            className={`bg-video w-full h-full ${
              activeVideo === "3" ? "active" : ""
            }`}
            data-item="3"
          >
            <div className="bg-img w-full h-full relative">
              <Image
                src={"/images/banner/cookware.jpg"}
                width={3000}
                height={3000}
                alt="bg-img"
                className="w-full h-full object-cover"
              />

              <div className="absolute fs22 inset-0 m-[40px] bg-white opacity-[50%] flex items-center justify-center text-[30px] font-600">
                <div className="fs30 font-600 break-words w-[500px]">
                  {" "}
                  Eco-conscious elegance that doesn’t compromise on style.
                </div>
              </div>
            </div>
          </div>
          <div
            className={`bg-video w-full h-full ${
              activeVideo === "4" ? "active" : ""
            }`}
            data-item="4"
          >
            <div className="bg-img w-full h-full relative">
              <Image
                src={"/images/banner/premiumsections.jpg"}
                width={3000}
                height={3000}
                alt="bg-img"
                className="w-full h-full object-cover"
              />

              <div className="absolute fs22 inset-0 m-[40px] bg-white opacity-[50%] flex items-center justify-center text-[30px] font-600">
                <div className="fs30 font-600 break-words w-[500px]">
                  {" "}
                  Exceptional quality sourced from the best the world has to
                  offer.
                </div>
              </div>
            </div>
          </div>
          <div
            className={`bg-video w-full h-full ${
              activeVideo === "5" ? "active" : ""
            }`}
            data-item="5"
          >
            <div className="bg-img w-full h-full relative">
              <Image
                src={"/images/banner/cookware.jpg"}
                width={3000}
                height={3000}
                alt="bg-img"
                className="w-full h-full object-cover"
              />

              <div className="absolute fs22 fs inset-0 m-[40px] bg-white opacity-[50%] flex items-center justify-center text-[30px] font-600">
                <div className="fs30 font-600 break-words w-[500px]">
                  {" "}
                  Thoughtfully curated gifts that elevate corporate
                  relationships.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`modal-video-block`}
          onClick={() => setOpenVideo(false)}
        >
          <div
            className={`modal-video-main ${openVideo ? "open" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <iframe
              src="/images/banner/video.mp4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoTutorial;
