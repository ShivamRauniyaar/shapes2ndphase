"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ParallaxContent = {
  image?: string;
};

const ParallaxImage: React.FC<ParallaxContent> = ({ image }) => {
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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const imageSrc = image ?? "/images/newimages/golden-cutlery-plate-dark.jpg";

  return (
    <div ref={containerRef} className="relative h-[100vh] overflow-hidden">
      <img
        ref={bgRef}
        src={imageSrc}
        alt="background"
        className="absolute w-full h-full object-cover"
      />
    </div>
  );
};

export default ParallaxImage;
