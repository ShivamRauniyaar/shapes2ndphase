"use client";
import { CommonSvg } from "@/Common/CommonSvg";
import React, { Fragment, useState } from "react";

// Define the type for a single accordion item
type AccordionItem = {
  id: number;
  label: string;
  content: string;
};

// Define the props type
interface AccordionProps {
  data?: AccordionItem[];
}

// Default accordion data (used when no props are passed)
const defaultAccordionData: AccordionItem[] = [
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
];

// Accordion component
const Accordion: React.FC<AccordionProps> = ({
  data = defaultAccordionData,
}) => {
  const [visibleIdx, setVisibleIdx] = useState<number | null>(0);
  return (
    <Fragment>
      <div className="container">
        <ul>
          {data.map((item, index) => {
            const isOpen = visibleIdx === index;
            return (
              <li key={item.id} className="accordiong_container_design">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setVisibleIdx(isOpen ? null : index)}
                >
                  <h5>{item.label}</h5>
                  <div
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    {isOpen
                      ? CommonSvg.closeAccordionSvg
                      : CommonSvg.openAccordionSvg}
                  </div>
                </div>

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen
                      ? "max-h-[500px] opacity-100 pt-6"
                      : "max-h-0 opacity-0 pt-0"
                  }`}
                >
                  <p className="stats_description">{item.content}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default Accordion;
