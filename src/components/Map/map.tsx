"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Map = () => {
  const router = useRouter();

  const handleDetailProduct = (productId: string) => {
    // redirect to shop with category selected
    router.push(`/product/default?id=${productId}`);
  };

  return (
    <>
      <div className="popular-product  ">
        <div className="list-product grid ">
          <div className="item relative overflow-hidden">
            <Image
              src={"/images/newworldmap.png"}
              width={1000}
              height={1000}
              alt="product"
              priority={true}
              className="w-full"
            />
            <div className="dots absolute top-[32%] left-[18%] cursor-pointer">
              <div className="top-dot w-8 h-8 rounded-full bg-outline flex items-center justify-center">
                <span className="bg-white w-3 h-3 rounded-full duration-300"></span>
              </div>
              <div
                className="product-infor bg-white rounded-2xl p-4"
                // onClick={() => handleDetailProduct("21")}
              >
                <div className="text-title name pb-2">
                  Companies we worked with
                </div>
                <div className="flex  gap-4">
                  <Image
                    src={"/images/banner/metaltex.png"}
                    width={70}
                    height={50}
                    alt="product"
                    priority={true}
                    className="w-full"
                  />
                  <div className="font-medium dark:text-white">
                    <div>MetalTex</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dots bottom-dot absolute bottom-[50%] left-[67%] cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-outline flex items-center justify-center">
                <span className="bg-white w-3 h-3 rounded-full duration-300"></span>
              </div>
              <div
                className="product-infor bg-white rounded-2xl p-4"
                // onClick={() => handleDetailProduct("21")}
              >
                <div className="text-title name pb-2">
                  Companies we worked with
                </div>
                <div className="flex  gap-4">
                  <Image
                    src={"/images/banner/radissonbluelogo.png"}
                    width={70}
                    height={70}
                    alt="product"
                    priority={true}
                    className="w-full"
                  />
                  <div className="font-medium dark:text-white">
                    <div>Radisson Blu</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
