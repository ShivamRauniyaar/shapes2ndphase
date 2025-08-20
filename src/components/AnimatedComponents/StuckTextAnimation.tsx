// components/StickyScrollText.js
"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import StatsCircles from "../v2Sections/statsCircles";

const rightSectionData = [
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
];

const stats = [
  {
    number: "1000+",
    text: (
      <span>
        luxury hospitiality
        <br /> brand's trust{" "}
      </span>
    ),
  },
  {
    number: "25+",
    text: (
      <span>
        countries <br /> spanning
      </span>
    ),
  },
  {
    number: "100+",
    text: (
      <span>
        cities in india <br /> spanning
      </span>
    ),
  },
];

gsap.registerPlugin(ScrollTrigger);

interface StickyControlContent {
  Data?: {
    header1?: string;
    header2?: string;
    description?: string;
    isStats?: boolean;
    rightPartData?: Array<{
      id?: any;
      title?: string;
      description?: string;
    }>;
    statsData?: any;
  };
}

const predefinedData = {
  header1: "Elevating Experiences",
  header2: "Across your Property",
  description:
    "Designed to bring consistency, elegance, and elevated presentation to every space withing your property.",
  isStats: true,
  rightPartData: rightSectionData,
  statsData: stats,
};
const StickyScrollText: React.FC<StickyControlContent> = ({
  Data = predefinedData,
}) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top", // Ends when bottom of section hits top of viewport
        pin: textRef.current,
        pinSpacing: true, // Adds spacing to allow natural scroll after unpinning
        scrub: false,
        markers: false,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="container flex gap-2 mt-8">
      <div className="w-[50%]">
        {" "}
        <div ref={containerRef} className="relative h-[100vh] bg-gray-100">
          <div>
            <div ref={textRef} className="h-screen   justify-center">
              <h1>
                {Data.header1}
                <br />
                {Data.header2}
              </h1>
              <p className="mt-[40px]">{Data.description}</p>
            </div>
          </div>
          {Data?.isStats && (
            <div className="text-black absolute bottom-0">
              <StatsCircles statsData={Data?.statsData} />{" "}
            </div>
          )}
        </div>
      </div>

      <div className="w-[50%] grid gap-[5rem]">
        {Data?.rightPartData?.map((item, index) => (
          <div className="white_border pb-[80px]" key={index}>
            <h5>{item.title}</h5>
            <p className="mt-[1rem] text-[16px]">{item?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StickyScrollText;
