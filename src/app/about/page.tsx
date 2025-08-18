import Inner from "@/components/PageTransition/inner";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";
import { SHAPES_CMS_URL } from "../../../Constant";
import BannerWithText from "@/components/banner/bannerWithText";
import OurPresence from "@/components/OurPresence/OurPresence";
import MileStone from "@/components/MileStone/MileStone";
import InfrastructureAndCorporate from "@/components/InfrastructureAndCorporate/InfrastructureAndCorporate";
import TamsSection from "@/components/TeamSection/TeamSection";
import ScrollAnimationComponent from "@/components/AnimatedComponents/SlowlyPopped";
import ParallaxImage from "@/components/AnimatedComponents/ParallaxImage";
import TextWith4ImageCollage from "@/components/v2Sections/TextWith4ImageCollage";
import TextWithAccordion from "@/components/v2Sections/textWithAccordion";
import HorizontalScroll from "@/components/AnimatedComponents/RightToLeftMarkupScroll";
import MultiLevelImageWithText from "@/components/v2Sections/MultiLevelImageWithText";
import WorldParallax from "@/components/v2Sections/ParallaxImageText";
import IndustrialCapabilitiesSection from "@/components/v2Sections/IndustrialCapabilitiesSection";
import EnquiryForm from "@/components/v2Sections/contactSection";
import FounderSection from "@/components/v2Sections/FounderSection";



const AccordionTextData = {
  header1: "Core Capabilities",
  description:
    "Fundamental strengths and skills that enable us to deliver exceptional products and services.",
  buttonName: "Download Catalog",
  AccordionData: [
    {
      id: 1,
      label: "Premium Cutlery and Stainless Steel",
      content:
        "Expertise in crafting high-quality cutlery using superior stainless steel, ensuring durability, elegance, and performance.",
    },
    {
      id: 2,
      label: "Custom Branding & Bespoke Collections",
      content:
        "Offering tailored design solutions and personalized branding to create unique collections that reflect your brand’s identity and style.",
    },
    {
      id: 3,
      label: "Marketing & Visibility Support for Trade Partners",
      content:
        "Providing comprehensive marketing assistance, promotional materials, and strategic collaborations to enhance your market reach and brand presence.",
    },
    {
      id: 4,
      label: "PAN India Sales Network",
      content:
        "Leveraging a robust distribution network across India to ensure timely delivery, wide availability, and dedicated support for our partners nationwide.",
    },
  ],
};

const About = async () => {

  return (
    <div>
      <Inner backgroundColor="#EA2127" />

      {/* First Scroll Section */}
      <ScrollAnimationComponent isContainer={false}>
        <div className="bg-[#fcfaf7]">
          <div
            className="container flex items-center"
            style={{
              height: "426px",
              marginTop: "7rem",
            }}
          >
            <div
              className="flex"
              style={{
                display: "flex",
                width: "100%",
              }}
            >
              <p
                className="text-black"
                style={{
                  width: "20%",
                }}
              >
                At our core
              </p>
              <div
                className="about_banner_heading"
                style={{
                  width: "80%",
                }}
              >
                Premium cutlery and stainless steel brand delivering unmatched
                quality driven by innovation and commitment
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimationComponent>

      <ParallaxImage image={"/images/newimages/about_visual_image.png"} />

      {/* Accordion Section */}
      <ScrollAnimationComponent>
        <TextWithAccordion Data={AccordionTextData} />
      </ScrollAnimationComponent>

      <HorizontalScroll />

      {/* Multi-Level Image Section */}
      <ScrollAnimationComponent>
        <MultiLevelImageWithText />
      </ScrollAnimationComponent>

      {/* Background Image Section */}
      <section
        className="min-h-screen"
        style={{
          backgroundImage: `url(/images/newimages/WorldGraph.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100%",
          width: "100%",
        }}
      ></section>

      {/* Industrial Capabilities */}
      <ScrollAnimationComponent>
        <IndustrialCapabilitiesSection />
      </ScrollAnimationComponent>

      {/* Video Intro Section */}
      <section className="min-h-screen relative">
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source
            src="/images/newimages/aboutintrovideo.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="container py-40 h-screen">
          <div className="grid grid-cols-2 grid-rows-2 h-full w-full">
            <div className="flex items-center justify-center bg-red-500 p-8">
              <h2 className="text-white">Our Commitment to Society</h2>
            </div>
            <div className="flex items-center justify-center text-white bg-blue-500 p-8">
              <div className="video_intro_section w-full h-full flex justify-center items-center p-8">
                <div>
                  <h4 className="video_intro_section_heading">
                    Lorem ipsum dolor sit amet consectetur.
                  </h4>
                  <p className="video_intro_section_description">
                    Lorem ipsum dolor sit amet consectetur. Lorem sit
                    suspendisse volutpat et sit sit senectus nec. Aucotr viverra
                    vitae magna senectus nibh aliquam. Pellentesque dolor eros
                    pellentesque curabitur sit at vel semper fames.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center text-white bg-green-500 p-8">
              <div className="video_intro_section w-full h-full flex justify-center items-center p-8">
                <div>
                  <h4 className="video_intro_section_heading">
                    Lorem ipsum dolor sit amet consectetur.
                  </h4>
                  <p className="video_intro_section_description">
                    Lorem ipsum dolor sit amet consectetur. Lorem sit
                    suspendisse volutpat et sit sit senectus nec. Aucotr viverra
                    vitae magna senectus nibh aliquam. Pellentesque dolor eros
                    pellentesque curabitur sit at vel semper fames.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center text-white bg-yellow-500 p-8">
              <div className="video_intro_section w-full h-full flex justify-center items-center p-8">
                <div>
                  <h4 className="video_intro_section_heading">
                    Lorem ipsum dolor sit amet consectetur.
                  </h4>
                  <p className="video_intro_section_description">
                    Lorem ipsum dolor sit amet consectetur. Lorem sit
                    suspendisse volutpat et sit sit senectus nec. Aucotr viverra
                    vitae magna senectus nibh aliquam. Pellentesque dolor eros
                    pellentesque curabitur sit at vel semper fames.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <ScrollAnimationComponent>
        <FounderSection />
      </ScrollAnimationComponent>

      {/* Enquiry Form */}
      <ScrollAnimationComponent>
        <EnquiryForm />
      </ScrollAnimationComponent>
    </div>
  );
};

export default About;
