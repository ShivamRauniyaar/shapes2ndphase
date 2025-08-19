import React, { Fragment } from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import Inner from "@/components/PageTransition/inner";
import { SHAPES_CMS_URL } from "../../../Constant";

interface Award {
  id: number;
  header: string;
  description?: string;
  img: string;
}

interface AwardData {
  content?: {
    heading?: string;
    awards?: {
      images?: { src: string; filePath: string }[];
      title?: string;
      description?: string;
    }[];
  };
}

// Async data fetching for the App Router

const AwardSection = async () => {
  // Replace this with your actual data fetching logic
  const awardData: AwardData = {
    content: {
      heading: "Awards",
      awards: [
        {
          images: [{ src: "image1.jpg", filePath: "/images/image1.jpg" }],
          title: "Best Design",
          description: "<p>This award is for best design.</p>",
        },
      ],
    },
  };

  return (
    <Fragment>
      <Inner backgroundColor="#EA2127" />
      <div className="breadcrumb-block style-img">
        <div className="breadcrumb-main bg-linear overflow-hidden">
          <div className="container lg:pt-[134px] pt-24 pb-10 relative">
            <div className="main-content w-full h-full flex flex-col items-center justify-center relative z-[1]">
              <div className="text-content">
                <div className="heading2 text-center">
                  {awardData?.content?.heading}
                </div>
                <div className="link flex items-center justify-center gap-1 caption1 mt-3">
                  <Link href="/">Homepage</Link>
                  <Icon.CaretRight size={14} className="text-secondary2" />
                  <div className="text-secondary2 capitalize">
                    {awardData?.content?.heading}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto max-w-screen-xl">
        {awardData?.content?.awards?.map((item, index) => (
          <div
            className="grid md:grid-cols-2 items-center gap-12 font-[sans-serif] max-w-5xl max-md:max-w-md mx-auto p-4"
            key={index}
          >
            <div className="bg-gray-50">
              <img
                src={item?.images?.[0]?.filePath || ""}
                className="w-full aspect-[7/7] object-contain"
                alt={item?.title || "Award Image"}
              />
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                {item?.title}
              </h3>
              <p className="mt-4 text-sm text-gray-800 leading-relaxed">
                {item?.description && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item?.description,
                    }}
                    className="infrastructuredesing"
                  ></div>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default AwardSection;
