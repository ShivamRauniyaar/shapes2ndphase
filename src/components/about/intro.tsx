"use server";
import Link from "next/link";
import React from "react";

const IntroComp: React.FC<{ IntroData: any }> = ({ IntroData }) => {
  return (
    <div>
      <div className="whate-new-block  md:pt-20 pt-10">
        <div className="container">
          <div className="  block md:grid grid-cols-5 gap-2">
            <div className="col-span-2 p-4">
              <div
                style={{
                  backgroundImage: `url(https://www.shapesproducts.in/wp-content/uploads/2023/11/34-Pcs-Gold-Satin-Cutlery-Set.jpeg)`,
                  width: "100%",
                  height: "500px",
                  backgroundSize: "cover", // Optional: Adjust as needed
                  backgroundPosition: "center",
                  borderRadius: "12px",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>

            {IntroData?.map((introvalue: any, index: number) => (
              <div
                className={`col-span-3 p-4 flex flex-col justify-between  ${
                  !introvalue?.alignment && "flex-row-reverse"
                } h-full`}
                key={index}
              >
                <div className="blog-infor">
                  <div className="heading6 blog-title mt-3 duration-300">
                    {introvalue?.heading}
                  </div>

                  {introvalue?.discription && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: introvalue?.discription,
                      }}
                      className="body1 text-secondary mt-4"
                    ></div>
                  )}
                </div>
                <div className="button-block">
                  <Link href={introvalue?.name}>
                    <div className="button-main mt-4 text-center bg-white text-black border border-black w-fit">
                      Discover More
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroComp;
