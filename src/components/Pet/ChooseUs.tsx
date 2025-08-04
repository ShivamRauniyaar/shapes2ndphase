import React from "react";
import Image from "next/image";

export interface ChooseUsDataType {
  id?: any;
  title: string;
  images: any;
  leftalign: boolean;
  description: string;
  heading: string;
}

interface ChooseUsProps {
  key: number;
  Data: ChooseUsDataType;
}

const ChooseUs: React.FC<ChooseUsProps> = ({ key = 1, Data }) => {
  return (
    <>
      <div className="choose-us-block md:pt-20 pt-14" key={key}>
        <div
          className={`container flex max-lg:flex-col max-lg:gap-y-8  justify-between ${
            !Data?.leftalign && "flex-row-reverse"
          }`}
        >
          <div className="bg-img lg:w-7/12 lg:pr-[45px] md:w-1/2 w-5/6 grid gap-4">
            {Data?.images?.map((item: any, index: number) => (
              <>
                <Image
                  src={item?.filePath}
                  width={1200}
                  height={1200}
                  alt="bg-img"
                  priority={true}
                  className="w-full"
                />
              </>
            ))}
          </div>
          <div
            className={`content  ${
              Data?.leftalign
                ? "lg:w-5/12 lg:pl-[45px]"
                : "lg:w-5/12 lg:pr-[45px]"
            }`}
          >
            <div className="heading3">{Data?.title}</div>
            <div className="elementor-widget-container teamsectiondescriptiondesign">
              {Data?.description && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: Data?.description,
                  }}
                ></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
