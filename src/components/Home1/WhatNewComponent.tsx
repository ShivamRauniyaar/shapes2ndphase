"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Product from "../Product/Product";

const WhatNewComponent = ({ RangeData }: { RangeData: any[] }) => {
  const [activeTab, setActiveTab] = useState<string>(
    RangeData?.[0]?.content?.title || "Cutlery Sets"
  );
  const [filteredProduct, setFilteredProduct] = useState<any[]>(
    RangeData?.[0]?.content?.range || []
  );

  const handleTabClick = (value: any) => {
    setActiveTab(value?.content?.title);
    setFilteredProduct(value?.content?.range);
  };

  return (
    <div>
      <div className="flex justify-center">
        {" "}
        <div className="menu-tab flex items-center gap-2 p-1 bg-surface rounded-2xl mt-6">
          {(RangeData ?? []).map((item: any, index) => (
            <div
              key={index}
              className={`tab-item relative text-secondary text-button-uppercase py-2 px-5 cursor-pointer duration-500 hover:text-black ${
                activeTab === item?.content?.title ? "active" : ""
              }`}
              onClick={() => handleTabClick(item)}
            >
              {activeTab === item?.content?.title && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-2xl bg-white"
                ></motion.div>
              )}
              <span className="relative text-button-uppercase z-[1]">
                {item?.content?.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="list-product hide-product-sold grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 sm:gap-[30px] gap-[20px] md:mt-10 mt-6">
        {filteredProduct?.slice(0, 8).map((prd, index) => (
          <Product
            data={prd}
            type="grid"
            key={index}
            style="style-1"
            isRedirect={false}
            isAddToCard={false}
          />
        ))}
      </div>
    </div>
  );
};

export default WhatNewComponent;
