import React, { Fragment } from "react";

const ThinBgWithText = () => {
  return (
    <Fragment>
      <div
        className="relative"
        style={{
          backgroundImage: `url(/images/newimages/product_catalog/Thinbg.png)`,
          width: "100%",
          height: "400px",
          backgroundSize: "auto", // Changed to 'contain'
          backgroundPosition: "center", // Center the image
          backgroundRepeat: "no-repeat",
          marginTop: "5rem",
        }}
      >
        <div className="absolute z-[101] top-[50%] left-[10%] translate-x-[10%] translate-y-[-50%]">
          <h1 className="text-white">Shapes Barware</h1>
          <button className="transparent_secondary_button mt-[1.5rem]">Learn More</button>
        </div>
      </div>
    </Fragment>
  );
};

export default ThinBgWithText;
