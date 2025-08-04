"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const topShutterRef = useRef<HTMLDivElement>(null);
  const bottomShutterRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial state
    gsap.set(topShutterRef.current, { yPercent: -100 });
    gsap.set(bottomShutterRef.current, { yPercent: -100 });
    gsap.set(contentRef.current, { opacity: 0 });

    // Animate the top shutter fully down
    tl.to(topShutterRef.current, {
      yPercent: 0,
      duration: 0.5,
      ease: "power2.inOut",
    });

    // Animate the bottom shutter immediately after the top reaches the bottom
    // tl.to(bottomShutterRef.current, {
    //   yPercent: 0,
    //   duration: 0.5,
    //   ease: "power2.inOut",
    // });

    // Animate the top shutter fully up
    tl.to(topShutterRef.current, {
      yPercent: -100,
      duration: 0.3,
      ease: "power2.inOut",
      delay: 0.3,
    });

    // Animate the bottom shutter fully up
    // tl.to(bottomShutterRef.current, {
    //   yPercent: -100,
    //   duration: 0.5,
    //   ease: "power2.inOut",
    // });

    // Fade in content
    tl.to(contentRef.current, { opacity: 1, duration: 0.2 });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={topShutterRef}
        className="fixed top-0 left-0 w-full h-full bg-[#EA2127] z-50 flex items-center justify-center pointer-events-none"
      >
        <img
          src="/images/homepage/ShapesLogo.png"
          alt="Logo"
          // className="w-32 h-32" // Adjust size as needed
        />
      </div>

      <div
        ref={bottomShutterRef}
        className="fixed top-0 left-0 w-full h-full bg-[#EA2127] z-40 flex items-center justify-center pointer-events-none"
      >
        <img
          src="/images/homepage/ShapesLogo.png"
          alt="Logo"
          // className="w-32 h-32" // Adjust size as needed
        />
      </div>

      <div ref={contentRef} className="relative">
        {children}
      </div>
    </div>
  );
};

export default PageTransition;
