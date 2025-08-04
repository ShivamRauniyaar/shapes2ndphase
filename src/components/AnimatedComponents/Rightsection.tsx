// app/page.tsx or pages/index.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bottomRef.current) return;

    gsap.to(bottomRef.current, {
      y: -100, // how much the bottom section should move up
      ease: "none",
      scrollTrigger: {
        trigger: bottomRef.current,
        start: "top bottom",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <main className="container flex h-[200vh] w-full">
      {/* LEFT SECTION */}
      <div className="w-1/2 bg-gray-900 text-white p-8 relative overflow-hidden">
        {/* Top Block - STICKY */}
        <div className="sticky top-8 text-2xl font-bold text-black">
          Top Section (Stays Fixed)
        </div>

        {/* Spacer to give room for scroll */}
        <div className="h-[80vh]" />

        {/* Bottom Block - MOVES UP */}
        <div ref={bottomRef} className="text-2xl font-bold text-black">
          Bottom Section (Moves Up)
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-1/2 bg-white p-8 overflow-y-auto">
        <div className="space-y-12">
          {Array.from({ length: 30 }).map((_, i) => (
            <p key={i}>Right Scroll Content #{i + 1}</p>
          ))}
        </div>
      </div>
    </main>
  );
}
