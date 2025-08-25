import React from "react";

const V2BreadCrumb = () => {
  return (
    <div className="flex justify-between">
      <div className="w-[50%]">
        <h2 className="">
          Creating memorable dining experiences worldwide
        </h2>
        <button className="primary_button mt-[2.5rem]">Learn More</button>
      </div>
      <div className="w-[50%]">
        <div
          style={{
            backgroundImage: `url(/images/newimages/videframe.svg)`,
            width: "100%",
            height: "100%",
            backgroundSize: "auto", // Changed to 'contain'
            backgroundPosition: "center", // Center the image
            borderRadius: "12px",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
};

export default V2BreadCrumb;
