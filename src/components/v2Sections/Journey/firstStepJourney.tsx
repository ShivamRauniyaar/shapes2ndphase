import React, { Fragment } from "react";

const FirstStepJourney = () => {
  return (
    <Fragment>
      <div
        style={{
          padding: "80px 0px",
        }}
      >
        <h2 className="font_galesion">Our Journey</h2>
        <h1
          style={{
            fontSize: "136px",
            left: "20%",
            paddingLeft: "2rem",
          }}
          className="position_absolute_top_center"
        >
          1990
        </h1>
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "35%",
            marginTop: "5rem",
            marginRight: "20%",
          }}
        >
          <div
            style={{
              width: "525px",
            }}
          >
            <h3>The Beginning</h3>
            <span
              style={{
                marginTop: "2rem",
              }}
            >
              Lore ipsumm dolor sit amet conseectetur. Vitae duis disgnissim
              tincidunt orci ac pelletesque. Aliquet in mollis ac aliquam dictum
              amet consectetur. Aliquam massa velit biendum enim tristique.
            </span>
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
          style={{
            position: "absolute",
            top: "50%",
            left: "30%",
            transform: "translate(-50%, -50%)",
            width: "0",
            height: "0",
            border: "1px solid transparent",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "100%",
              width: "calc(100vw - 25%)",
              height: "1px",
              backgroundColor: "#BA9B53",
            }}
          ></div>
        </div>

        <div
          style={{
            backgroundImage:
              'url("/images/newimages/journeyfirststepframe1.svg")',
            backgroundSize: "cover",
            backgroundPosition: "center", // Show left side
            height: "294px",
            width: "525px",
            position: "absolute",
            bottom: "10%",
            left: "35%",
          }}
        ></div>
      </div>
    </Fragment>
  );
};

export default FirstStepJourney;
