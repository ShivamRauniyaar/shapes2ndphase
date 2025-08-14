import React, { Fragment } from "react";
import StatsCircles from "./statsCircles";
import Accordion from "./Common/Accordion";

const AccordionData = [
  {
    id: 1,
    label: "Manufacturing Facility",
    content:
      "Our facility spans over 100,000 sq. ft. in Delhi NCR, equipped with modern infrastructure, dedicated production zones, and strict quality control areas to ensure seamless operations from start to finish.",
  },
  {
    id: 2,
    label: "Advanced Machinery",
    content:
      "We utilize the latest CNC machines, automated assembly lines, and precision testing equipment, enabling high-accuracy production and consistent quality across every batch.",
  },
  {
    id: 3,
    label: "Capacity & Efficiency",
    content:
      "With a robust annual production capacity and optimized workflows, our operations are designed for fast turnaround times while minimizing waste and maximizing resource utilization.",
  },
  {
    id: 4,
    label: "Tool Room & R&D",
    content:
      "Our in-house tool room and R&D center develop custom tooling, prototypes, and innovative solutions, ensuring continuous improvement and product innovation tailored to client needs.",
  },
];

interface industrialSectionProps {}

const IndustrialCapabilitiesSection: React.FC<industrialSectionProps> = () => {
  return (
    <Fragment>
      <div className="flex justify-between">
        <div className="w-[50%]">
          {" "}
          <h1>Industrial Capabilities</h1>
          <p className="mt-[40px]">
            Systems, facilities, technology, and expertise that enable us to
            efficiently produce high high-quality products at scales.
          </p>
        </div>
        <div className="w-[50%]">
          <StatsCircles />
        </div>
      </div>
      <div className="flex justify-between mt-[40px]">
        <div className="w-[50%]">First</div>
        <div className="w-[50%]">
          <Accordion data={AccordionData} />
        </div>
      </div>
    </Fragment>
  );
};

export default IndustrialCapabilitiesSection;
