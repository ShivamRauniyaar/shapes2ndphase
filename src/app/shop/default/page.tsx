"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import ShopBreadCrumbImg from "@/components/Shop/ShopBreadCrumbImg";
import productData from "@/data/Product.json";

export default function Default() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  return (
    <>
      <div id="header" className="relative w-full">
      </div>
      {/* <ShopBreadCrumbImg
        data={productData}
        productPerPage={12}
        dataType={type}
      /> */}
    </>
  );
}
