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

gsap.registerPlugin(ScrollTrigger);

const StickyScrollText = () => {
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
    <div className="container flex gap-2">
      <div className="w-[50%]">
        {" "}
        <div ref={containerRef} className="relative h-[100vh] bg-gray-100">
          <div>
            <div ref={textRef} className="h-screen   justify-center">
              <h1>
                Designed to Shine <br />
                Crafter to Endure
              </h1>
              <p className="mt-[40px]">
                A perfect harmony of visual elegance and lasting <br />
                strength, our cutlery is made to stand out in <br />{" "}
                presentation and perform flawlessly over time.
              </p>
            </div>
          </div>
          <div className="text-black absolute bottom-0">
            <StatsCircles />{" "}
          </div>
        </div>
      </div>

      <div className="w-[50%] grid gap-[5rem]">
        {rightSectionData?.map((item, index) => (
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
