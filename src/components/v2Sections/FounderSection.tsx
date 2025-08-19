import React, { Fragment } from "react";
import StatsCircles from "./statsCircles";

const FounderSection = () => {
  return (
    <Fragment>
      <div className="flex justify-between">
        <div className="w-[50%]">
          {" "}
          <h1>Guiding Minds</h1>
        </div>
        <div className="w-[50%]">
          <StatsCircles
            statsData={[
              {
                number: "400+",
                text: (
                  <span>
                    passionate <br /> workforce
                  </span>
                ),
              },
              {
                number: "35+",
                text: (
                  <span>
                    years of <br /> manufacturing
                  </span>
                ),
              },
              {
                number: "100+",
                text: (
                  <span>
                    luxury hospitality <br /> brand's trust
                  </span>
                ),
              },
            ]}
          />
        </div>
      </div>

      <div className="flex justify-between gap-4 mt-8">
        <div className="w-[50%] flex justify-between gap-4">
          <div className="w-[50%]">
            <h4 className="video_intro_section_heading">Mr. Ashish Jain</h4>
            <p className="video_intro_section_description">
              Co-Founder & Director
            </p>
            <div
              style={{
                backgroundImage: `url(/images/newimages/AshishJainCofounder.png)`,
                backgroundSize: "cover", // or "contain" if you want the whole image visible
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "500px",
                width: "100%",
                marginTop: "2.5rem",
              }}
            ></div>
          </div>
          <div className="w-[50%]">
            <h4 className="video_intro_section_heading">Mr. Neha jain</h4>
            <p className="video_intro_section_description">Co-Founder & CEO</p>
            <div
              style={{
                backgroundImage: `url(/images/newimages/NehaJainCofounder.png)`,
                backgroundSize: "cover", // or "contain" if you want the whole image visible
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "500px",
                width: "100%",
                marginTop: "2.5rem",
              }}
            ></div>
          </div>
        </div>

        <div className="w-[50%] flex justify-center items-center">
          <div className="">
            <p>Vision</p>
            <h4 className="mt-[2.5rem]">
              Lorem ipsum dolor sit amet consectetur.Rhoncus sagittis nullam a
              elit id lacus acaliquet nibh. Arcu cum sem viverra fermentum.
            </h4>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(/images/newimages/wholeteam.png)`,
          width: "100%",
          height: "529px",
          backgroundSize: "auto",
          backgroundPosition: "center",
          marginTop: "5rem",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </Fragment>
  );
};

export default FounderSection;
