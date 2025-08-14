import React, { Fragment } from "react";

const ThirdStepJourney = () => {
  return (
    <Fragment>
      <div
        style={{
          padding: "80px",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "61%",
            height: "80%",
            top: "10%",
            left: "19.5%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
          }}
        >
          {" "}
          <div
            style={{
              gridColumn: "1 / span 2",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                backgroundImage:
                  'url("/images/newimages/journeyfirststepframe1.svg")',
                backgroundSize: "cover",
                backgroundPosition: "center", // Show left side
                height: "296px",
                width: "464px",
              }}
            ></div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1
              style={{
                fontSize: "136px",
              }}
            >
              2005
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "80%",
              }}
            >
              {" "}
              <h3>The middle </h3>
              <span>
                Lorem ipsum dolor sit amet consectetur. Vitae duis dignissim
                tincidunt orci ac pellentesque. Aliquet in mollis ac aliquam
                dictum amet consectetur. Aliquam massa velit bibendum enim
                tristique.
              </span>
            </div>
          </div>
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

export default ThirdStepJourney;
