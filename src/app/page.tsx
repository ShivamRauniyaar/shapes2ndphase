import React from "react";
import SliderOne from "@/components/Slider/SliderOne";
import Inner from "@/components/PageTransition/inner";
import { SHAPES_CMS_URL } from "../../Constant";
import V2BreadCrumb from "@/components/v2Sections/BreadCrumb";
import ExploreRangeCmp from "@/components/v2Sections/ExploreRangeCmp";
import blogData from "@/data/Blog.json";
import BlogItem1 from "@/components/Blog/BlogItem1";
import ScrollAnimationComponent from "@/components/AnimatedComponents/SlowlyPopped";
import ParallaxImage from "@/components/AnimatedComponents/ParallaxImage";
import ServicesSection from "@/components/v2Sections/ImageCorrusel";
import PartnerSection from "@/components/v2Sections/PartnerSection";
import MultiLevelImageWithText from "@/components/v2Sections/MultiLevelImageWithText";
import EnquiryForm from "@/components/v2Sections/contactSection";
import StickyScrollText from "@/components/AnimatedComponents/StuckTextAnimation";




export default async function Home() {
  const HomeSectionData: { content?: { topbanner?: any } } = {
    content: {
      topbanner: undefined, // Replace 'undefined' with actual data if available
    },
  };

  return (
    <>
      <Inner backgroundColor="#EA2127" />

      {/* Hero Slider */}
      <div id="header" className="relative w-full">
        <SliderOne SliderData={HomeSectionData?.content?.topbanner} />
      </div>

      {/* Scroll animated sections */}
      <ScrollAnimationComponent>
        <V2BreadCrumb />
      </ScrollAnimationComponent>

      <ScrollAnimationComponent>
        <ExploreRangeCmp />
      </ScrollAnimationComponent>

      <ParallaxImage />

      <StickyScrollText />

      <ScrollAnimationComponent>
        <ServicesSection />
      </ScrollAnimationComponent>

      <ScrollAnimationComponent>
        <PartnerSection />
      </ScrollAnimationComponent>

      <ParallaxImage />

      <ScrollAnimationComponent>
        <MultiLevelImageWithText />
      </ScrollAnimationComponent>

      <ScrollAnimationComponent>
        <EnquiryForm />
      </ScrollAnimationComponent>

      {/* Blog Section */}
      <ScrollAnimationComponent>
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
      </ScrollAnimationComponent>
    </>
  );
}
