import React, { Fragment } from "react";
import StatsCircles from "./statsCircles";
import Image from "next/image";

const MultiLevelImageWithText = () => {
  const content = [
    {
      title: "Crafted from the World’s Finest Raw Materials",
      description:
        "Only the highest grade stainless steel and premium alloys are used for their strength, shine, and purity.",
      image: "/images/newimages/spoon1.svg",
      offset: "mt-0", // no offset
    },
    {
      title: "Extensive Collection for Every Culinary Style",
      description:
        "From classic to contemporary, our wide array of cutlery designs caters to diverse dining aesthetics",
      image: "/images/newimages/spoon2.jpg",
      offset: "mt-10", // lower than first
    },
    {
      title: "Custom Branding & Bespoke Collections",
      description:
        "Personalization options for hospitality clients who want their dining identity embedded in every experience.",
      image: "/images/newimages/spoon3.jpg",
      offset: "mt-20", // lower than second
    },
  ];

  return (
    <Fragment>
      <div className="flex justify-between items-center container">
        <div className="text-black w-[50%]">
          <h3>
            Leading beyond the
            <br />
            ordinary
          </h3>
        </div>
        <div className="text-black w-[50%]">
          <StatsCircles />
        </div>
      </div>
      <section className=" py-16 px-4 pt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {content.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-start ${item.offset}`}
            >
              <h4 className="text-lg font-semibold mb-2 text-black">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <div className="w-full h-auto">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default MultiLevelImageWithText;
