"use client";
import { useEffect, useRef } from "react";
import { ReactNode } from "react";

interface GeraxStyleAnimationsProps {
  children: ReactNode;
}

const GeraxStyleAnimations = ({ children }: GeraxStyleAnimationsProps) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("animate-visible");
        } else {
          element.classList.remove("animate-visible");
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div className="bg-gray-50 container">
      <section className="py-20 px-6">
        <div
          ref={sectionRef}
          className="animate-initial transition-all duration-1000 ease-out"
        >
          {children}
        </div>
      </section>
    </div>
  );
};

export default GeraxStyleAnimations;
