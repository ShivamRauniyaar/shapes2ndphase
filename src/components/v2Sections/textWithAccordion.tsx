import React, { Fragment } from "react";
import Accordion from "./Common/Accordion";

const TextWithAccordion = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="flex justify-between gap-2">
          <div className="w-[50%] mt-[40px]">
            <h1>
              Crafted with Purpose, <br />
              Designed with Passion
            </h1>
            <p className="mt-[40px]">
              Every piece of our cutlery is intentionally crafted - not just
              manufactured - with a focus on balance, durability, and refined
              details.
            </p>
            <button className="primary_button mt-[40px]">Download Catalog</button>
          </div>
          <div className="w-[50%]">
            <Accordion />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TextWithAccordion;
