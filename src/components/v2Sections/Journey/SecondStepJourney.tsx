import React, { Fragment } from "react";

const SecondStepJourney = () => {
  return (
    <Fragment>
      <div
        style={{
          padding: "80px",
        }}
      >
        <div className="flex justify-between">
          <h1
            style={{
              fontSize: "136px",
              left: "20%",
              paddingLeft: "2rem",
              marginTop: "25%",
            }}
          >
            1999
          </h1>
          <div
            style={{
              marginRight: "15%",
            }}
          >
            <div
              style={{
                backgroundImage:
                  'url("/images/newimages/journeyfirststepframe1.svg")',
                backgroundSize: "cover",
                backgroundPosition: "center", // Show left side
                height: "351px",
                width: "328px",
              }}
            ></div>
          </div>
        </div>

        <div className="flex justify-between">
          <div
            style={{
              left: "20%",
              paddingLeft: "2rem",
              marginTop: "25%",
              width: "35%",
            }}
          >
            <h3>The middle 1</h3>
            <span>
              Lorem ipsum dolor sit amet consectetur. Vitae duis dignissim
              tincidunt orci ac pellentesque. Aliquet in mollis ac aliquam
              dictum amet consectetur. Aliquam massa velit bibendum enim
              tristique.
            </span>
          </div>
        </div>

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
          className="absolute"
          style={{
            position: "absolute",
            right: "-10%",
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
              clipPath: "inset(0 50% 0 0)",
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
              width: "calc(100vw)",
              height: "1px",
              backgroundColor: "#BA9B53",
              zIndex: 1000,
            }}
          ></div>
        </div>
      </div>
    </Fragment>
  );
};

export default SecondStepJourney;
