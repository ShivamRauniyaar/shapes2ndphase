"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FirstStepJourney from "../v2Sections/Journey/firstStepJourney";
import SecondStepJourney from "../v2Sections/Journey/SecondStepJourney";
import ThirdStepJourney from "../v2Sections/Journey/ThirdStepJourney";
import FourthStepJourney from "../v2Sections/Journey/FourthStepJourney";
import FifthStepJourney from "../v2Sections/Journey/FifthStepJourney";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".panel");
    const totalScrollWidth = (sections.length - 1) * window.innerWidth;

    gsap.to(sections, {
      x: () => -totalScrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1, // keeps it tied to scroll position
        end: () => `+=${totalScrollWidth}`,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const sectionsData = [
    {
      color: "#E5DFD3",
      title: "Section 1",
      btn: "Click Me",
      sectionContent: <FirstStepJourney />,
    },
    {
      color: "#EBEFF6",
      title: "Section 2",
      btn: "Learn More",
      sectionContent: <SecondStepJourney />,
    },
    {
      color: "#F5F1EB",
      title: "Section 3",
      btn: "Start",
      sectionContent: <ThirdStepJourney />,
    },
    {
      color: "#FCFAF7",
      title: "Section 4",
      btn: "Get Started",
      sectionContent: <FourthStepJourney />,
    },
    
  ];

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {sectionsData.map((sec, i) => (
        <section
          key={i}
          className="panel"
          style={{
            flex: "0 0 100%",
            height: "100vh",
            background: sec.color,
            display: "flex",
            position: "relative",
          }}
        >
          <div className="container">{sec?.sectionContent}</div>
        </section>
      ))}
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "1px solid #EB2226",
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "50%",
          left: "30%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            border: "1px solid #EB2226",
            backgroundColor: "#ffffff",
          }}
        />
      </div>
    </div>
  );
}
