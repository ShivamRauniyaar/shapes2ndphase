import Image from "next/image";
import React, { Fragment } from "react";

const InfrastructureAndCorporate = () => {
  return (
    <Fragment>
      {" "}
      <div className="banner-block style-one  pt-10 pb-10 ">
        <div className="container grid sm:grid-cols-2 gap-5">
          <div className="blog-item style-one  cursor-pointer">
            <div className="blog-main  block">
              <div className="blog-thumb rounded-[20px] overflow-hidden">
                <Image
                  src={"/images/banner/machinery.jpg"}
                  width={2000}
                  height={1500}
                  alt="blog-img"
                  className="w-full duration-500"
                />
              </div>
              <div className="blog-infor mt-7">
                <div className="blog-tag bg-green py-1 px-2.5 rounded-full text-button-uppercase inline-block">
                  Infrastructure
                </div>
                <div className="heading6 blog-title mt-3 duration-300">
                  Great quality requires great infrastructure
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <div className="blog-author caption1 text-secondary">
                    <p>
                      At Shapes Products Pvt. Ltd. our state-of-the-art
                      infrastructure ensures we deliver top-quality stainless
                      steel cutlery and kitchenware that enhances dining
                      experiences and brand reputation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-item style-one  cursor-pointer">
            <div className="blog-main  block">
              <div className="blog-thumb rounded-[20px] overflow-hidden">
                <Image
                  src={"/images/banner/socialevents.jpg"}
                  width={2000}
                  height={1500}
                  alt="blog-img"
                  className="w-full duration-500"
                />
              </div>
              <div className="blog-infor mt-7">
                <div className="blog-tag bg-green py-1 px-2.5 rounded-full text-button-uppercase inline-block">
                  Corporate
                </div>
                <div className="heading6 blog-title mt-3 duration-300">
                  Empowering Local Communities
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <div className="blog-author caption1 text-secondary">
                    We invest in skill development, local employment, and fair
                    opportunities to uplift the communities we operate in.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default InfrastructureAndCorporate;
