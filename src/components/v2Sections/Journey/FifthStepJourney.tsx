import React, { Fragment } from "react";

const FifthStepJourney = () => {
  return (
    <Fragment>
      <div
        style={{
          padding: "80px",
        }}
      >
        <h2 className="font_galesion">Our Journey</h2>
        <div
          className="absolute"
          style={{
            position: "absolute",
            left: "-10%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            height: "80%",
            width: "20%",
            border: "1px solid transparent",
            zIndex: "9999",
          }}
        >
          <div
            style={{
              backgroundImage:
                'url("/images/newimages/golden-cutlery-plate-dark.jpg")',
              backgroundSize: "contain",
              backgroundPosition: "left", // Show left side
              overflow: "hidden",
              clipPath: "inset(0 0 0 50%)",
              height: "100%",
              width: "200%",
            }}
          ></div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "0%",
            transform: "translate(-50%, -50%)",
            width: "0",
            height: "0",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "100%",
              width: "calc(100vw )",
              height: "1px",
              backgroundColor: "#BA9B53",
            }}
          ></div>
        </div>
      </div>
    </Fragment>
  );
};

export default FifthStepJourney;
