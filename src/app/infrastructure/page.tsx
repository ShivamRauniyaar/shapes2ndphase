import React, { Fragment } from "react";
import Image from "next/image";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import Inner from "@/components/PageTransition/inner";
import { SHAPES_CMS_URL } from "../../../Constant";

async function infraStructureData() {
  try {
    const res = await fetch(
      `${SHAPES_CMS_URL}ourinfrastructure`,
      {
        headers: {
          "Content-Type": "application/json",
          Origin: "https://shapesproduct.netlify.app/",
        },
        next: { revalidate: 86400 }, // ISR-like behavior with 24-hour refresh
      }
    );

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

const Infrastructure = async () => {
  const InfraData = await infraStructureData();


  return (
    <Fragment>
      <Inner backgroundColor="#EA2127" />

      <div className="breadcrumb-block style-img">
        <div className="breadcrumb-main bg-linear overflow-hidden">
          <div className="container lg:pt-[134px] pt-24 pb-10 relative">
            <div className="main-content w-full h-full flex flex-col items-center justify-center relative z-[1]">
              <div className="text-content">
                <div className="heading2 text-center">
                  {InfraData?.content?.heading}
                </div>
                <div className="link flex items-center justify-center gap-1 caption1 mt-3">
                  <Link href={"/"}>Homepage</Link>
                  <Icon.CaretRight size={14} className="text-secondary2" />
                  <div className="text-secondary2 capitalize">
                    {InfraData?.content?.heading}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {InfraData?.content?.infra?.map((item: any, index: number) => (
        <section
          className={`choose-us-block py-14 md:py-20 bg-gray-50 ${
            item?.leftalign && "flex-row-reverse"
          }`}
          key={index}
        >
          <div className="container mx-auto flex flex-col lg:flex-row gap-10">
            <div className="content lg:w-5/12 px-6 lg:px-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                {item?.title}
              </h2>

              {item?.description && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: item?.description,
                  }}
                  className="infrastructuredesing"
                ></div>
              )}

              <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-6">
                {item?.details?.map((_item: any, index: number) => (
                  <div
                    className="bg-white shadow-md p-4 rounded-lg text-center"
                    key={index}
                  >
                    <h3 className="text-2xl font-bold text-gray-800">
                      {_item?.value}
                    </h3>
                    <p className="text-gray-600">{_item?.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-img lg:w-7/12 grid gap-4 px-6">
              {item?.images?.map((item: any, index: number) => (
                <Image
                  key={index}
                  src={item?.filePath}
                  width={1200}
                  height={800}
                  alt={`Infrastructure Image ${index + 1}`}
                  priority
                  className="rounded-lg shadow-md w-full object-cover"
                />
              ))}
            </div>
          </div>
        </section>
      ))}
    </Fragment>
  );
};

export default Infrastructure;