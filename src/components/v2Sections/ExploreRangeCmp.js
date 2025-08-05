import React, { Fragment } from "react";

const rangeData = [
  {
    id: 1,
    title: "Product name",
  },
  {
    id: 2,
    title: "Product Name",
  },
  {
    id: 3,
    title: "Product Name",
  },
  {
    id: 4,
    title: "Product Name",
  },
  {
    id: 5,
    title: "Product Name",
  },
  {
    id: 6,
    title: "Product Name",
  },
  {
    id: 7,
    title: "Product Name",
  },
  {
    id: 8,
    title: "Product Name",
  },
  {
    id: 9,
    title: "Product Name",
  },
  {
    id: 10,
    title: "Product Name",
  },
];

//containerfram.svg

const ExploreRangeCmp = () => {
  return (
    <Fragment>
      <h4>Explore our Cutlery Range</h4>
      <div className="flex gap-2 mt-[24px]">
        <button className="secondary_button">Download Catalog</button>
        <button className="primary_button">Enquire Now</button>
      </div>
      <div className="flex w-[100vw] gap-2 overflow-auto mt-[24px]">
        {rangeData?.map((item, index) => (
          <div
            key={index}
            className="container_overlay_section"
            style={{
              backgroundImage: `url(/images/newimages/containerfram.svg)`,
              backgroundSize: "auto", // Changed to 'contain'
              backgroundPosition: "center", // Center the image
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        ))}
      </div>
    </Fragment>
  );
};

export default ExploreRangeCmp;
