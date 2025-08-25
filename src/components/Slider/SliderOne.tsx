"use client";

import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/effect-fade";

const SliderOne: React.FC<{ SliderData: any }> = ({ SliderData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef<any>(null);
  const autoplayDelay = 4000; // 4 seconds

  // Progress bar animation
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0; // Reset when slide changes
        }
        return prev + 100 / (autoplayDelay / 50); // Update every 50ms
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [currentSlide]);

  const handleSlideChange = (swiper: any) => {
    setCurrentSlide(swiper.realIndex);
    setProgress(0); // Reset progress when slide changes
  };

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
      setProgress(0);
    }
  };

  const nextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const prevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <>
      <div></div>
      <div className="slider-block style-one h-[90vh] w-full mt-[2rem] relative">
        <div className="slider-main h-full w-full">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={false}
            modules={[Autoplay]}
            className="h-full relative"
            autoplay={{
              delay: autoplayDelay,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={handleSlideChange}
          >
            {SliderData?.map((item: any, index: number) => (
              <SwiperSlide key={index}>
                <div
                  style={{
                    backgroundImage: `url(${item?.filePath})`,
                    width: "100%",
                    height: "100%",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {/* Optional: Add content overlay here */}
                  {item?.title && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h2 className="text-4xl font-bold mb-4">
                          {item.title}
                        </h2>
                        {/* Progress bar below title */}
                        <div className="w-64 h-0.5 bg-white/30 mx-auto mb-4 relative overflow-hidden">
                          <div
                            className="absolute top-0 left-0 h-full bg-white transition-all duration-75 ease-linear"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                        {item?.description && (
                          <p className="text-lg opacity-90">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Pagination at Bottom Right */}
        <div className="absolute bottom-40 right-[16rem] z-10">
          <div className="flex justify-between mb-4">
            <div>
              <div className="parent_banner_heading">
                Lorem ipsum banner title
              </div>{" "}
              <div className="parent_banner_heading">
                {currentSlide + 1}/{SliderData?.length || 0}
              </div>
            </div>
            <div className="flex ">
              {" "}
              <button
                onClick={prevSlide}
                className="p-2  hover:bg-white/20 transition-colors duration-200 text-[#0a0703] parent_banner_text_border"
                aria-label="Previous slide"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15,18 9,12 15,6"></polyline>
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="p-2  hover:bg-white/20 transition-colors duration-200 text-[#0a0703]"
                aria-label="Next slide"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
              </button>
            </div>
          </div>
          <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#0a0703] rounded-full transition-all duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderOne;
