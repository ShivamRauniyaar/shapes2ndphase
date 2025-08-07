import React, { Fragment } from "react";

const TextWith4ImageCollage = () => {
  return (
    <Fragment>
      <h4 className="text-center text-[#0A0703] font-[500] font-family-manrope">
        From the country's most iconic hotels to elite boutique properties,
        Shapes partners with hospitality brands that seek elegance,
        craftsmanship, and design consistency
      </h4>

      <div className="mt-[124px]">
        <div className="grid grid-cols-4 gap-4">
          <div className="mt-[52px]">
            <h5>Ultra Luxury Hotels</h5>
            <p className="stats_description mt-[1rem]">
              We collaborate with ultra luxury hotels that epitomize
              sophistication, impeccable service and timeless design.
            </p>
            <div
              style={{
                backgroundImage: `url(/images/newimages/industries/imagecollage1.png)`,
                width: "100%",
                height: "343px",
                backgroundSize: "auto", // Changed to 'contain'
                backgroundPosition: "center", // Center the image
                backgroundRepeat: "no-repeat",
                marginTop: "40px",
              }}
            ></div>
          </div>
          <div>
            <h5>Fine Dining Restaurant in Hotels</h5>
            <p className="stats_description mt-[1rem]">
              Our partners include fine dining within hotels the blend culinary
              artistry with elevated ambiance.
            </p>
            <div
              style={{
                backgroundImage: `url(/images/newimages/industries/imagecollage2.png)`,
                width: "100%",
                height: "387px",
                backgroundSize: "auto", // Changed to 'contain'
                backgroundPosition: "center", // Center the image
                backgroundRepeat: "no-repeat",
                marginTop: "40px",
              }}
            ></div>
          </div>
          <div className="mt-[84px]">
            <h5>Boutique Propertied</h5>
            <p className="stats_description mt-[1rem]">
              We work with boutique properties that celebrate individuality
              through curated aesthetics and thoughtful craftsmanship.
            </p>
            <div
              style={{
                backgroundImage: `url(/images/newimages/industries/imagecollage3.png)`,
                width: "100%",
                height: "313px",
                backgroundSize: "auto", // Changed to 'contain'
                backgroundPosition: "center", // Center the image
                backgroundRepeat: "no-repeat",
                marginTop: "40px",
              }}
            ></div>
          </div>
          <div>
            <h5>Resorts and Heritage Stays</h5>
            <p className="stats_description mt-[1rem]">
              Our portfolio includes resorts and heritage stays that harmonize
              local culture and architectural elegance
            </p>
            <div
              style={{
                backgroundImage: `url(/images/newimages/industries/imagecollage4.png)`,
                width: "100%",
                height: "395px",
                backgroundSize: "auto", // Changed to 'contain'
                backgroundPosition: "center", // Center the image
                backgroundRepeat: "no-repeat",
                marginTop: "40px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TextWith4ImageCollage;
