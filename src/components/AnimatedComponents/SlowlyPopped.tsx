"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { ReactNode } from "react";

interface GeraxStyleAnimationsProps {
  children: ReactNode;
}

const GeraxStyleAnimations = ({ children }: GeraxStyleAnimationsProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const teamSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Team section animation
      gsap.fromTo(
        teamSectionRef.current,
        { opacity: 0, scale: 0.95, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: teamSectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  

  return (
    <div ref={containerRef} className="bg-gray-50 container">
      {/* Team Section */}
      <section className="py-20 px-6">
        <div ref={teamSectionRef} className="">
          {children}
        </div>
      </section>
    </div>
  );
};

export default GeraxStyleAnimations;
