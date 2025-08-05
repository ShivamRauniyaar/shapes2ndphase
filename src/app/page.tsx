import React from "react";
import SliderOne from "@/components/Slider/SliderOne";
import WhatNewOne from "@/components/Home1/WhatNewOne";
import Inner from "@/components/PageTransition/inner";
import { SHAPES_CMS_URL } from "../../Constant";
import V2BreadCrumb from "@/components/v2Sections/BreadCrumb";
import ExploreRangeCmp from "@/components/v2Sections/ExploreRangeCmp";
import VideoTutorial from "@/components/banner/VideoTutorial";
import ProcessCmp2 from "@/components/process/Process2";
import blogData from "@/data/Blog.json";
import BlogItem1 from "@/components/Blog/BlogItem1";
import Link from "next/link";
import ScrollAnimationComponent from "@/components/AnimatedComponents/SlowlyPopped";
import RangeSlider from "@/components/AnimatedComponents/RangeSlider";
import ParallaxImage from "@/components/AnimatedComponents/ParallaxImage";
import RightSectionHoveredSection from "@/components/AnimatedComponents/Rightsection";
import ServicesSection from "@/components/v2Sections/ImageCorrusel";
import PartnerSection from "@/components/v2Sections/PartnerSection";
import MultiLevelImageWithText from "@/components/v2Sections/MultiLevelImageWithText";
import EnquiryForm from "@/components/v2Sections/contactSection";

async function HomeSectionDataApi() {
  const res = await fetch(`${SHAPES_CMS_URL}Homepage`, {
    headers: {
      "Content-Type": "application/json",
      Origin: "https://shapesproduct.netlify.app/",
    },
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch exhibition data");
  }

  const data = await res.json();
  return data?.data?.[0] || null;
}

async function clientSpeakData() {
  const res = await fetch(`${SHAPES_CMS_URL}Clientspeaks`, {
    headers: {
      "Content-Type": "application/json",
      Origin: "https://shapesproduct.netlify.app/",
    },
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch exhibition data");
  }

  const data = await res.json();
  return data?.data?.[0] || null;
}

export default async function Home() {
  const HomeSectionData = await HomeSectionDataApi();

  return (
    <>
      <Inner backgroundColor="#EA2127" />
      <div id="header" className="relative w-full">
        <SliderOne SliderData={HomeSectionData?.content?.topbanner} />
      </div>
      <ScrollAnimationComponent children={V2BreadCrumb()} />
      <ScrollAnimationComponent children={ExploreRangeCmp()} />
      <ParallaxImage />
      <RightSectionHoveredSection />
      <ScrollAnimationComponent children={<ServicesSection />} />
      <ScrollAnimationComponent children={<PartnerSection />} />
      <ParallaxImage />
      <ScrollAnimationComponent children={<MultiLevelImageWithText />} />
      <ScrollAnimationComponent children={<EnquiryForm />} />
      <ScrollAnimationComponent
        children={
          <div className="blog grid md:py-20 py-10">
            <div className="container">
              <h3 className="text-center mb-[2rem]">Blogs</h3>
              <div className="list-blog grid lg:grid-cols-3 sm:grid-cols-2 md:gap-[42px] gap-8">
                {blogData?.slice(0, 3)?.map((item) => (
                  <BlogItem1 key={item.id} data={item} type="style-one" />
                ))}
              </div>
            </div>
          </div>
        }
      />
    </>
  );
}
