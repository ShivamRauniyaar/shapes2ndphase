import Image from "next/image";
import React, { Fragment } from "react";
import { DirectorMessageType } from "../Home1/Banner";
import BlogItem from "../Blog/BlogItem";

interface TeamSectionProps {
  Data: {
    content?: {
      body?: DirectorMessageType[];
    };
  };
}

const TamsSection: React.FC<TeamSectionProps> = ({ Data }) => {
  return (
    <Fragment>
      {" "}
      <div className="banner-block style-one  pt-10 pb-10 ">
        <div className="heading3 text-center mb-2">Meet The Team</div>

        <div className="container grid  gap-5">
          <div className="blog list md:py-20 py-10">
            <div className="container">
              <div className="flex justify-between max-xl:flex-col gap-y-12">
                <div className="list-blog flex flex-col xl:gap-10 gap-8">
                  {Data?.content?.body?.map(
                    (item: DirectorMessageType, index: number) => {
                      return (
                        <BlogItem
                          key={item.id}
                          data={item}
                          type="style-list"
                          ExtraClass={
                            (index + 1) % 2 === 0 ? "flex-row-reverse" : ""
                          }
                        />
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <Image
              src="/images/banner/teams.webp"
              width={2000}
              height={1500}
              alt="blog-img"
              className="w-full h-full object-cover duration-500"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TamsSection;
