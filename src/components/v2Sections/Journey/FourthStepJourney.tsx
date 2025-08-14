import React, { Fragment } from "react";

const FourthStepJourney = () => {
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
        </div>

        <div
          className="position_absolute_top_center"
          style={{
            right: "-10%",
          }}
        >
          <h1
            style={{
              fontSize: "136px",
              left: "20%",
              paddingLeft: "2rem",
            }}
          >
            2025
          </h1>
          <div
            style={{
              width: "525px",
            }}
          >
            <h3>The Present</h3>
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
              width: "calc(60vw)",
              height: "1px",
              backgroundColor: "#BA9B53",
            }}
          ></div>
        </div>
      </div>
    </Fragment>
  );
};

export default FourthStepJourney;
