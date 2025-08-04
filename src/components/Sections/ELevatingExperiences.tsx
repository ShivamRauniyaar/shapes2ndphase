import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

const ElevatingExperiences = () => {
  return (
    <Fragment>
      <div className="container">
        {" "}
        <div className="heading4 text-center mb-10 mt-20">
          Elevating experiences Across your property
        </div>
        <div className="list-banner grid lg:grid-cols-6 sm:grid-cols-3 ">
          <Link
            href={"/shop/breadcrumb-img"}
            className="banner-item relative block duration-500 col-span-2 "
          >
            <div className="banner-img w-full  overflow-hidden">
              <Image
                src={"/images/banner/FineDining1.jpg"}
                width={600}
                height={400}
                alt="bg-img"
                className="w-full duration-500"
              />
            </div>
            <div className="banner-content absolute left-[30px] bottom-[30px]">
              <div className="heading4 text-white">Fine Dining</div>
            </div>
          </Link>
          <Link
            href={"/shop/breadcrumb-img"}
            className="banner-item relative block duration-500 col-span-2"
          >
            <div className="banner-img w-full  overflow-hidden">
              <Image
                src={"/images/banner/Bufferandbrunches.jpg"}
                width={600}
                height={400}
                alt="bg-img"
                className="w-full duration-500"
              />
            </div>
            <div className="banner-content absolute left-[30px] bottom-[30px]">
              <div className="heading4 text-white">Buffets & Brunches</div>
            </div>
          </Link>
          <Link
            href={"/shop/breadcrumb-img"}
            className="banner-item relative block duration-500 max-lg:hidden col-span-2"
          >
            <div className="banner-img w-full  overflow-hidden">
              <Image
                src={"/images/banner/LaungesandBar.jpg"}
                width={600}
                height={400}
                alt="bg-img"
                className="w-full duration-500"
              />
            </div>
            <div className="banner-content absolute left-[30px] bottom-[30px]">
              <div className="heading4 text-white">Lounges and Bar</div>
            </div>
          </Link>
          <Link
            href={"/shop/breadcrumb-img"}
            className="banner-item relative block duration-500 max-lg:hidden col-span-3"
          >
            <div className="banner-img w-full  overflow-hidden">
              <Image
                src={"/images/banner/bounquetsanddining.jpg"}
                width={600}
                height={400}
                alt="bg-img"
                className="w-full duration-500"
              />
            </div>
            <div className="banner-content absolute left-[30px] bottom-[30px]">
              <div className="heading4 text-white">Banquets & Dining</div>
            </div>
          </Link>
          <Link
            href={"/shop/breadcrumb-img"}
            className="banner-item relative block duration-500 max-lg:hidden col-span-3"
          >
            <div className="banner-img w-full  overflow-hidden">
              <Image
                src={"/images/banner/inroomdining.jpg"}
                width={600}
                height={400}
                alt="bg-img"
                className="w-full duration-500"
              />
            </div>
            <div className="banner-content absolute left-[30px] bottom-[30px]">
              <div className="heading4 text-white">In-room Dining</div>
            </div>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default ElevatingExperiences;
