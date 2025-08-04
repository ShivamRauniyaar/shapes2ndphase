import React from "react";
import WhatNewComponent from "./WhatNewComponent";
import { SHAPES_CMS_URL } from "../../../Constant";

async function fetchProductData() {
  try {
    const res = await fetch(
      `${SHAPES_CMS_URL}Rangess?sort=order:asc&sortType=number`,
      {
        headers: {
          "Content-Type": "application/json",
          Origin: "https://shapesproduct.netlify.app/",
        },
        next: { revalidate: 86400 },
      }
    );

    if (!res.ok) throw new Error("Failed to fetch product data");

    const data = await res.json();
    return data?.data || null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

const WhatNewOne = async ({}: {}) => {
  const productDataa = await fetchProductData();

  return (
    <>
      <div className="whate-new-block md:pt-[8rem] pt-10">
        <div className="container">
          <div className="heading flex flex-col ">
            <div className="heading6 text-center text-[#949494] text-[14px] font-weight-[600] uppercase\t">
              {" "}
              EXPLORE OUR RANGE{" "}
            </div>
            <div className="heading3 text-center">Our Products</div>

            <WhatNewComponent RangeData={productDataa} />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatNewOne;
