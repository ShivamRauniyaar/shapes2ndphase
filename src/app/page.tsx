import React from "react";
import SliderOne from "@/components/Slider/SliderOne";
import Inner from "@/components/PageTransition/inner";
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
      topbanner: [
        {
          id: 1,
          filePath: "/images/newimages/containerfram.svg",
        },
        {
          id: 2,
          filePath: "/images/newimages/containerfram.svg",
        },
        {
          id: 3,
          filePath: "/images/newimages/containerfram.svg",
        },
        {
          id: 4,
          filePath: "/images/newimages/containerfram.svg",
        },
      ], // Replace 'undefined' with actual data if available
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

      <StickyScrollText
        Data={{
          header1: "Designed to Shine",
          header2: "Crafted to Endure",
          description:
            "A perfect harmony of visual elegance and lasting strength, our cutlery is made to stand out in presentation and perform flawlessly over time.",
          isStats: true,
          rightPartData: [
            {
              id: 1,
              title: "Signature Designs for Signature Experience",
              description:
                "A curated collection that complements modern and heritage dining environments with a premium, timeless look",
            },
            {
              id: 2,
              title: "Finishes That Speak Sophistication",
              description:
                "Choose from mirror, brushed, or satin finishes-each crafted to enhace the tactile and visual appeal of your table setting",
            },
            {
              id: 3,
              title: "Durability That Preserves Elegance",
              description:
                "Corrosion-proof, and dishwasher-safe-perfect for high-frequency, luxury hospitality use.",
            },
            {
              id: 4,
              title: "Custom Branding & Bespoke Collection",
              description:
                "Personalization options for hospitality clients who want their dining identity emebedded in every experience",
            },
          ],
          statsData: [
            {
              number: "2m+",
              text: (
                <span>
                  cutlery delivered
                  <br /> annually{" "}
                </span>
              ),
            },
            {
              number: "35+",
              text: (
                <span>
                  years of
                  <br /> manufacturing{" "}
                </span>
              ),
            },
            {
              number: "100m+",
              text: (
                <span>
                  cutlery supplied
                  <br /> till date{" "}
                </span>
              ),
            },
          ],
        }}
      />

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
