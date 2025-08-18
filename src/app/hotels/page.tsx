import React from "react";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { SHAPES_CMS_URL } from "../../../Constant";
import SliderTen from "@/components/Slider/SliderTen";
import HospitalityAndExcellence from "@/components/Sections/HospitalityAndExcellence";
import SectionImages from "@/components/Sections/SectionImages";
import LookBook from "@/components/Sections/LookBook";
import productData from "@/data/Product.json";
import VideoTutorial from "@/components/banner/VideoTutorial";
import ElevatingExperiences from "@/components/Sections/ELevatingExperiences";



const Hotels = async () => {

  return (
    <>
      <div id="header" className="relative w-full">
        <Breadcrumb heading={"Industries"} subHeading={"Hotels"} />
        <SliderTen />
        <HospitalityAndExcellence />
        <LookBook
          data={productData.map((item: any) => ({
            ...item,
            thumbImage: Array.isArray(item.thumbImage) ? item.thumbImage[0] : item.thumbImage,
          }))}
          start={8}
          limit={12}
        />
        <VideoTutorial />
        <ElevatingExperiences />
        <div className="register-block md:py-20 py-10">
          <div className="container">
            <div className="content-main flex gap-y-8 max-md:flex-col">
              <div className="left md:w-[70%] w-full lg:pr-[60px] md:pr-[40px] ">
                <div className="heading4">Drop Us A Line</div>
                <div className="">
                  Use the form below to get in touch with the sales team
                </div>

                <form className="md:mt-7 mt-4 grid grid-cols-2 gap-2">
                  <div className="email ">
                    <input
                      className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                      id="username"
                      type="text"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="email ">
                    <input
                      className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                      id="username"
                      type="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    {" "}
                    <textarea
                      className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                      id="username"
                      placeholder="Your Message"
                      required
                    />
                  </div>
                  <div className="block-button md:mt-7 mt-4">
                    <button className="button-main">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <SectionImages /> */}
      </div>
    </>
  );
};

export default Hotels;
