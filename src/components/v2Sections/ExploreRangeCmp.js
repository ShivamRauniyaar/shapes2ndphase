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
];

const ExploreRangeCmp = () => {
  return (
    <Fragment>
      <h4>Explore our Cutlery Range</h4>
      <div className="flex gap-2 mt-[24px]">
        <button className="secondary_button">Download Catalog</button>
        <button className="primary_button">Enquire Now</button>
      </div>
      <div className="flex w-[100vw] gap-2 overflow-auto mt-[40px]">
        {rangeData?.map((item, index) => (
          <div
            key={index}
            className="container_overlay_section group relative"
            style={{
              backgroundImage: `url(/images/newimages/containerfram.svg)`,
              backgroundSize: "auto",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Text at the bottom */}
            <div className="absolute bottom-0 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex justify-between bg-white p-2 items-center">
                <div className="blog_heading">{item.title}</div>
                <div className="secondary_button">Enquire Now</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default ExploreRangeCmp;
