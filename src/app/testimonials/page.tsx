import React, { Fragment } from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import Inner from "@/components/PageTransition/inner";
import { SHAPES_CMS_URL } from "../../../Constant";

async function getTestimonialsData() {
  try {
    const res = await fetch(`${SHAPES_CMS_URL}/testimonials`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data?.data?.[0] || null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

const Testimonial = async () => {
  const testimonialsData = await getTestimonialsData();

  return (
    <Fragment>
      <Inner backgroundColor="#EA2127" />

      <div className="breadcrumb-block style-img">
        <div className="breadcrumb-main bg-linear overflow-hidden">
          <div className="container lg:pt-[134px] pt-24 pb-10 relative">
            <div className="main-content w-full h-full flex flex-col items-center justify-center relative z-[1]">
              <div className="text-content">
                <div className="heading2 text-center">
                  {testimonialsData?.content?.heading}
                </div>
                <div className="link flex items-center justify-center gap-1 caption1 mt-3">
                  <Link href={"/"}>Homepage</Link>
                  <Icon.CaretRight size={14} className="text-secondary2" />
                  <div className="text-secondary2 capitalize">
                    {testimonialsData?.content?.heading}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 font-[sans-serif]">
        <div className="mt-12 max-w-5xl max-md:max-w-xl max-sm:max-w-sm mx-auto">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:gap-6 gap-4 max-md:justify-center text-center">
            {testimonialsData?.content?.testimonials?.map(
              (item: any, index: number) => (
                <div className="p-4 rounded-lg shadow-md border " key={index}>
                  <div className="flex flex-col items-center">
                    <img
                      key={index}
                      src={item?.images?.[0]?.filePath}
                      className="w-full aspect-square object-contain object-top rounded-lg"
                    />

                    <div className="mt-4">
                      <h6 className="text-gray-800 text-sm font-semibold">
                        {item?.title}
                      </h6>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="text-gray-800 text-sm leading-relaxed">
                      {item?.description && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item?.description,
                          }}
                          className="infrastructuredesing"
                        ></div>
                      )}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Testimonial;
