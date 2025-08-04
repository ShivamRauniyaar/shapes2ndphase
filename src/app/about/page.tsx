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

const About = async () => {
  const directorMessage1 = await getDirectorMessage();

  return (
    <div>
      <Inner backgroundColor="#EA2127" />
      <div className="breadcrumb-block style-img">
        <div className="breadcrumb-main bg-linear overflow-hidden">
          <div className="container lg:pt-[134px] pt-24 pb-10 relative">
            <div className="main-content w-full h-full flex flex-col items-center justify-center relative z-[1]">
              <div className="text-content">
                <div className="heading2 text-center">About</div>
                <div className="link flex items-center justify-center gap-1 caption1 mt-3">
                  <Link href={"/"}>Homepage</Link>
                  <Icon.CaretRight size={14} className="text-secondary2" />
                  <div className="text-secondary2 capitalize">About</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        {" "}
        <div className="container">
          <div className="content   overflow-hidden xl:-mx-5 rounded-3xl md:py-[60px] py-8">
            <div className="list-testi w-full section-swiper-navigation style-center style-small-border mt-5">
              <div className="testi-item flex flex-col items-center justify-center xl:px-[120px] md:px-[60px] px-8">
                <div className="desc heading4 font-medium text-center  text-[#949494]  font-weight-[600]">
                  Shapes started out as the brainchild of Neha and Ashish Jain,
                  from the family of Ankur Exports.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BannerWithText />
      <OurPresence />
      <MileStone />
      <InfrastructureAndCorporate />

     
      <TamsSection Data={directorMessage1} />
    </div>
  );
};

export default About;
