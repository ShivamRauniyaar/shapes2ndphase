import React, { Fragment } from "react";
import ScrollAnimationComponent from "@/components/AnimatedComponents/SlowlyPopped";
import TextWith4ImageCollage from "@/components/v2Sections/TextWith4ImageCollage";
import PartnerSection from "@/components/v2Sections/PartnerSection";
import ParallaxImage from "@/components/AnimatedComponents/ParallaxImage";
import StickyScrollText from "@/components/AnimatedComponents/StuckTextAnimation";
import ServicesSection from "@/components/v2Sections/ImageCorrusel";
import { title } from "process";
import TextWithAccordion from "@/components/v2Sections/textWithAccordion";
import ThinBgWithText from "@/components/v2Sections/ThinBgWithText";
import EnquiryForm from "@/components/v2Sections/contactSection";

const stickyScrollData = {
  header1: "Elevating Experiences",
  header2: "Across your Property",
  description:
    "Designed to bring consistency, elegance, and elevated presentation to every space withing your property.",
  isStats: false,
  rightPartData: [
    {
      id: 1,
      title: "Fine Dining",
      description:
        "Enhance the elegance of fine dining with meticulously crafted cutlery that complements refined cuisine and sophisticated settings.",
    },
    {
      id: 2,
      title: "Buffets and Brunches",
      description:
        "Bring style and consistency to buffets and brunches with versatile, durable cutlery designed for both presentation and performace.",
    },
    {
      id: 3,
      title: "In-Room Dining",
      description:
        "Deliver a seamless in-room dining experience with thoughtfully designed cutlery that reflects the comfort and class of your property.",
    },
    {
      id: 4,
      title: "Banquets and Events",
      description:
        "Make every event memorable with cutlery that balances function and flair, ideal for large-scale banquets and bespoke celebrations..",
    },
    {
      id: 5,
      title: "Lounges and Bars",
      description:
        "Elevate the casual luxury of lounges and abrs with sleek modern pieces crafted to complement cocktails, bites and ambiance alike.",
    },
  ],
};

const textWithAccordionData = {
  header1: "Where vision meets capability",
  description:
    "State-of-the-art infrastructure that transform bold design visons into high-quality, scalable, and precision-crafted reality.",
  AccordionData: [
    {
      id: 1,
      label: "Made with wide range of Steel and Finishes",
      content:
        "Crafted using premium steel grades and curated finishes to suit every aesthetic and performance need.",
    },
    {
      id: 2,
      label: "Various Coating and Plating Options",
      content: "This is the description of various coating and plating options",
    },
    {
      id: 3,
      label: "Tested for Durability",
      content: "This is the description of Tested for Durability",
    },
    {
      id: 4,
      label: "100% Dishwasher Safe",
      content: "This is the description of 100% Dishwasher Safe",
    },
  ],
};

const Industries = () => {
  return (
    <Fragment>
      <div
        className="relative"
        style={{
          backgroundImage: `url(/images/newimages/productbanner3.png)`,
          width: "100%",
          height: "800px",
          backgroundSize: "auto", // Changed to 'contain'
          backgroundPosition: "center", // Center the image
          borderRadius: "12px",
          backgroundRepeat: "no-repeat",
          marginTop: "5rem",
        }}
      >
        <div className="absolute z-[102] top-[40%] left-[10%]">
          <h2 className="text-white">Shapes for Hotels</h2>
          <p className="mt-[1.5rem] text-white">
            Elevating Hospitality, One Table at a Time
          </p>
          <div className="flex gap-4 mt-[1.5rem]">
            <button className="transparent_secondary_button">
              Download Catalog
            </button>
            <div className="primary_button">Enquire Now</div>
          </div>
        </div>
      </div>
      <ScrollAnimationComponent children={<TextWith4ImageCollage />} />
      <ScrollAnimationComponent children={<PartnerSection />} />
      <ParallaxImage image={"/images/newimages/Visual.png"} />
      <StickyScrollText Data={stickyScrollData} />
      <ScrollAnimationComponent
        children={
          <ServicesSection
            header1={"Comprehensive Table-top Solutions"}
            header2={""}
            description={
              "A tabletop collections that unifies form, function, and guest experience across every dining touchpoint"
            }
          />
        }
      />
      <ParallaxImage image={"/images/newimages/visual_2.png"} />
      <ScrollAnimationComponent
        children={<TextWithAccordion Data={textWithAccordionData} />}
      />
      <ThinBgWithText />
      <ScrollAnimationComponent children={<EnquiryForm />} />
    </Fragment>
  );
};

export default Industries;
