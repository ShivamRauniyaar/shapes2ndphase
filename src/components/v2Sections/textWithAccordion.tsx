import React, { Fragment } from "react";
import Accordion, { AccordionItem } from "./Common/Accordion";
import StatsCircles from "./statsCircles";
interface TextAccordionData {
  Data?: {
    header1?: string;
    header2?: string;
    description?: string;
    buttonName?: string;
    AccordionData?: AccordionItem[];
    isStats?: boolean;
  };
}

const AccordionTextData = {
  header1: "Crafted with Purpose",
  header2: "Desinged with Passion",
  description:
    "Every piece of our cutlery is intentionally crafted - not just manufactured - with a focus on balance, durability, and refined details.",
  buttonName: "Download Catalog",
  isStats: true,
  AccordionData: [
    {
      id: 1,
      label: "Made with wide range of Steel and Finishes",
      content:
        "Crafted using premium steel grades and curated finishes to suit every aesthetic and performance need.",
    },
    {
      id: 2,
      label: "Various Coating and Plating Options",
      content: "This is the description of various coating and plating options",
    },
    {
      id: 3,
      label: "Tested for Durability",
      content: "This is the description of Tested for Durability",
    },
    {
      id: 4,
      label: "100% Dishwasher Safe",
      content: "This is the description of 100% Dishwasher Safe",
    },
  ],
};
const TextWithAccordion: React.FC<TextAccordionData> = ({
  Data = AccordionTextData,
}) => {
  return (
    <Fragment>
      <div className="container">
        <div className="flex justify-between gap-2 min-h-[60vh]">
          <div className="w-[50%] mt-[40px] relative">
            <h1>
              {Data?.header1}
              {Data?.header2 && (
                <>
                  <br />
                  {Data.header2}
                </>
              )}
            </h1>

            <p className="mt-[40px]">{Data?.description}</p>
            {Data?.buttonName && (
              <button className="primary_button mt-[40px]">
                {Data?.buttonName}
              </button>
            )}

            {Data?.isStats && (
              <div className="absolute bottom-[0rem] ">
                <StatsCircles />
              </div>
            )}
          </div>
          <div className="w-[50%]">
            <Accordion data={Data?.AccordionData} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TextWithAccordion;
