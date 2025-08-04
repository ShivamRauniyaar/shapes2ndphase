"use client";
// components/RangeSlider.tsx
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./RangeSlider.module.css";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Type definitions
interface RangeItem {
  range: string;
  url: string;
  image480x600: {
    url: string;
  };
}

interface RangeSliderProps {
  data: {
    range?: RangeItem[];
  };
}

const RangeSlider: React.FC<RangeSliderProps> = ({ data }) => {
  const rangeArray = data?.range || [];
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rangeArray.length) return;

    const container = containerRef.current;
    const wrapper = wrapperRef.current;

    if (container && wrapper) {
      const containerWidth = container.offsetWidth;
      const wrapperWidth = wrapper.scrollWidth;
      const paddingRight = containerWidth * 0.3;

      wrapper.style.paddingRight = `${paddingRight}px`;
      const totalScroll = wrapperWidth + paddingRight - containerWidth;
      const startOffset = containerWidth * 0.7;

      gsap.set(wrapper, { x: startOffset });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${totalScroll + startOffset}`,
          scrub: true,
          pin: true,
        },
      });

      tl.to(wrapper, { x: -totalScroll, ease: "none" });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        wrapper.style.paddingRight = "";
      };
    }
  }, [rangeArray]);

  return (
    <>
      <div ref={containerRef}>
        <div className="img-carousel" ref={wrapperRef}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView="auto"
            loop={false}
            className={styles.swiper}
            id="img-carouselnew"
            allowTouchMove={false}
          >
            {rangeArray.map((item, index) => (
              <SwiperSlide key={index} className="w_fit_important">
                <div>
                  <Link href={item.url}>
                    <div
                      className="container_overlay_section"
                      style={{
                        backgroundImage: `url(/images/newimages/containerfram.svg`,
                        backgroundSize: "auto", // Changed to 'contain'
                        backgroundPosition: "center", // Center the image
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      {" "}
                      line no 32
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

  
    </>
  );
};

export default RangeSlider;
