"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WorldParallax() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !bgRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      // Background layer parallax
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Foreground layer parallax
      gsap.to(contentRef.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[#f3eadc] text-black"
    >
      {/* Background Map */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url('/world-map.png')" }}
      />

      {/* Overlay Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center text-center px-6 py-20"
      >
        <h2 className="text-4xl font-bold mb-2">Serving around the world</h2>
        <p className="text-lg mb-8">
          with 240+ International and National Clients
        </p>

        {/* Logos */}
        <div className="flex flex-wrap justify-center gap-10 mb-20">
          <img src="/taj.png" alt="Taj" className="h-10" />
          <img src="/westin.png" alt="Westin" className="h-10" />
          <img src="/meridien.png" alt="Le Meridien" className="h-10" />
          <img src="/taj.png" alt="Taj" className="h-10" />
          <img src="/westin.png" alt="Westin" className="h-10" />
          <img src="/meridien.png" alt="Le Meridien" className="h-10" />
        </div>

        {/* Location Labels */}
        <div className="relative w-full max-w-5xl">
          <div className="absolute left-[15%] top-[50%] text-left">
            <strong className="text-xl">North America</strong>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          <div className="absolute left-[50%] top-[30%] text-left">
            <strong className="text-xl">Europe</strong>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          <div className="absolute right-[10%] top-[50%] text-left">
            <strong className="text-xl">India/Asia</strong>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
