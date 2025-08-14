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
async function getDirectorMessage() {
  const res = await fetch(`${SHAPES_CMS_URL}directormessage`, {
    headers: {
      "Content-Type": "application/json",
      Origin: "https://shapesproduct.netlify.app/",
    },
    next: { revalidate: 86400 }, // Ensures data is refreshed every 24 hours (ISR-like behavior)
  });

  if (!res.ok) {
    throw new Error("Failed to fetch exhibition data");
  }

  const data = await res.json();
  return data?.data?.[0] || null;
}

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
  const directorMessage1 = await getDirectorMessage();

  return (
    <div>
      <Inner backgroundColor="#EA2127" />

      <ScrollAnimationComponent
        children={
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
        }
        isContainer={false}
      />

      <ParallaxImage image={"/images/newimages/about_visual_image.png"} />
      <ScrollAnimationComponent
        children={<TextWithAccordion Data={AccordionTextData} />}
      />

      <HorizontalScroll />
      <ScrollAnimationComponent children={<MultiLevelImageWithText />} />

      <section
        className="min-h-screen"
        style={{
          backgroundImage: `url(/images/newimages/WorldGraph.png)`,
          backgroundSize: "cover", // or "contain" if you want the whole image visible
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100%",
          width: "100%",
        }}
      ></section>

      <ScrollAnimationComponent children={<IndustrialCapabilitiesSection />} />
    </div>
  );
};

export default About;
