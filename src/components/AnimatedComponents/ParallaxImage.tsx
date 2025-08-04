"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ParallaxImage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.to(bgRef.current, { y: -100 }, 0);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[100vh] overflow-hidden">
      <img
        ref={bgRef}
        src="/images/newimages/golden-cutlery-plate-dark.jpg"
        alt="background"
        className="absolute w-full h-full object-cover"
      />
    </div>
  );
}
