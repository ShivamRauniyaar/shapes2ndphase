import React from "react";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { SHAPES_CMS_URL } from "../../../Constant";

async function getExhibitionData() {
  const res = await fetch(`${SHAPES_CMS_URL}exhibition`, {
    headers: {
      "Content-Type": "application/json",
      Origin: "https://shapesproduct.netlify.app/",
    },
    next: { revalidate: 86400 }, // Server-side generation with revalidation
  });

  if (!res.ok) {
    throw new Error("Failed to fetch exhibition data");
  }

  const data = await res.json();
  return data?.data?.[0] || null;
}

const StoreList = async () => {
  const exhibitionData = await getExhibitionData();

  return (
    <>
      <div id="header" className="relative w-full">
        <Breadcrumb
          heading={exhibitionData?.content?.topiH1 || "Exhibition"}
          subHeading={exhibitionData?.content?.topiH1 || "Exhibition"}
        />
      </div>
      <div className="store-list md:py-20 py-10">
        <div className="container">
          {exhibitionData?.content?.exhibitions?.map(
            (item: any, index: number) => {
              const isEven = index % 2 === 0;

              if (isEven) {
                return (
                  <div
                    className={`item bg-surface overflow-hidden rounded-[20px] ${
                      index > 0 && "md:mt-20 mt-10"
                    } `}
                    key={index}
                  >
                    <div className="flex items-center lg:justify-end relative max-lg:flex-col">
                      <div
                        style={{
                          backgroundImage: `url(${item?.image?.[0]?.filePath})`,
                          width: "50%",
                          height: "440px",
                          backgroundSize: "auto", // Changed to 'contain'
                          backgroundPosition: "center", // Center the image
                          borderRadius: "12px",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>
                      <div className="text-content lg:w-1/2 lg:pr-20 lg:py-14 sm:py-10 py-6 max-lg:px-6">
                        <div className="heading3">{item?.heading}</div>
                        <div className="list-featrue lg:mt-10 mt-6">
                          <div className="item flex lg:gap-10 gap-6">
                            <div className="w-full">
                              {item?.discription && (
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: item?.discription,
                                  }}
                                ></div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div
                    className="item bg-surface overflow-hidden rounded-[20px] md:mt-20 mt-10"
                    key={index}
                  >
                    <div className="flex items-center justify-start relative max-lg:flex-col-reverse">
                      <div className="text-content lg:w-1/2 w-full lg:pl-20 lg:py-14 sm:py-10 py-6 max-lg:px-6">
                        <div className="heading3">{item?.heading}</div>
                        <div className="list-featrue lg:mt-10 mt-6">
                          <div className="item flex lg:gap-10 gap-6">
                            <div className="w-full">
                              {item?.discription && (
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: item?.discription,
                                  }}
                                ></div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          backgroundImage: `url(${item?.image?.[0]?.src})`,
                          width: "50%",
                          height: "440px",
                          backgroundSize: "auto", // Changed to 'contain'
                          backgroundPosition: "center", // Center the image
                          borderRadius: "12px",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>
                    </div>
                  </div>
                );
              }
            }
          )}
        </div>
      </div>
    </>
  );
};

export default StoreList;
