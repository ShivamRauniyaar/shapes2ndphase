"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/bundle";
import { useRouter } from "next/navigation";
import axios from "axios";
// import Fade from 'react-reveal'
import { SHAPES_API_URL } from "../../../Constant";

const Collection = () => {
  const router = useRouter();
  const [categoryData, setCategoryData] = useState([]);


  const categoryImage = [
    "https://img.freepik.com/free-photo/top-view-set-silver-cutlery-wooden-wall_140725-12960.jpg?t=st=1735199264~exp=1735202864~hmac=6210db85f55584ab8f6daf3a4f2fdb5980dcf13e93fae35a3e4bc25fbcb1690c&w=740",
    "https://img.freepik.com/free-photo/teflon-pan-wood-table_1388-204.jpg?t=st=1740660841~exp=1740664441~hmac=488900d3a661fe2c30ca78bbee792ed94ac4f3b428be4f4ace50a8b60dfe3c3a&w=740",
    "https://img.freepik.com/free-photo/silver-aesthetic-wallpaper-with-utensils_23-2149871744.jpg?t=st=1740660901~exp=1740664501~hmac=e777efc2cd7e88e3e5a5c84e889120442c6eff65725dd2add7e9d07ad07e9637&w=740",
    "https://img.freepik.com/free-photo/flat-lay-assortment-supplies-one-color_23-2149669150.jpg?t=st=1740660950~exp=1740664550~hmac=eb6a77a99efb886946098409f64d4d0c872252a656af6e4ac5f8f0fc8227b515&w=740",
    "https://img.freepik.com/free-photo/close-up-futuristic-soft-drink_23-2151281935.jpg?t=st=1740661001~exp=1740664601~hmac=67574c117fd4e8b15d00d95549e8f8f18510d22a8409bdc79ebdd50dc401ca40&w=740",
    "https://img.freepik.com/free-photo/close-up-metallic-tea-set_23-2151113105.jpg?t=st=1740661055~exp=1740664655~hmac=f7e08b3585f611f1a307cde5b498e92d8db068544bc43d1e9e4e3f3206b7e1a8&w=740",
    "https://img.freepik.com/free-photo/person-making-cocktails-with-alcohol-orange_23-2149384478.jpg?t=st=1740661154~exp=1740664754~hmac=d010cf371f6139c7045ddd8d107e1c37f56e09ea6a472095a929be08d65a96fa&w=740",
    "https://img.freepik.com/free-photo/food-waste-concept_23-2148688593.jpg?t=st=1740661288~exp=1740664888~hmac=81dbc1e90c5f56621090a5e0b706fe35556f37b67b39f85ea687bb61179eeaa2&w=740",
    "https://img.freepik.com/free-photo/scissors-spool-two-gift-boxes-green-background_23-2147924470.jpg?t=st=1740661647~exp=1740665247~hmac=3039af9f90870eee9d5412dd42ef250f46d38cce7f2c076f89c04d62377a40de&w=740",
    "https://img.freepik.com/free-photo/front-close-view-various-cutting-boards-wooden-spoons-small-oil-bottle-colorful-surface_140725-94200.jpg?t=st=1740661696~exp=1740665296~hmac=2e9ef1259929524258a8c010ae2ccfda5ac5428d392733e0dcd7eb1263cb9055&w=740",
  ];

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `${SHAPES_API_URL}getproductscatgeory`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setCategoryData(response?.data?.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <>
      <div className="collection-block md:pt-20 pt-10 bg-surface">
        <div className="container">
          <div className="heading3 text-center">OUR CATALOGUE</div>
        </div>
        <div className="list-collection section-swiper-navigation md:mt-10 mt-6 sm:px-5 px-4">
          <Swiper
            spaceBetween={12}
            slidesPerView={2}
            navigation
            loop={false}
            modules={[Navigation, Autoplay]}
            breakpoints={{
              576: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            className="h-full"
          >
            {categoryData?.map((item: any, index: any) => (
              <SwiperSlide key={index}>
                <div
                  className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() => {
                    router.push(
                      `/catalogueproducts?catalogueid=${item?.productCategoryID}&categoryName=${item?.categoryName}`
                    );
                  }}
                  key={index}
                >
                  <div className="bg-img">
                    <Image
                      src={item?.categoryImage ?? categoryImage[index]}
                      width={1000}
                      height={600}
                      alt="swimwear"
                    />
                  </div>
                  <div
                    className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500"
                    onClick={() => {
                      router.push(
                        `/catalogueproducts?catalogueid=${item?.productCategoryID}&categoryName=${item?.categoryName}`
                      );
                    }}
                  >
                    {item?.categoryName}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Collection;
