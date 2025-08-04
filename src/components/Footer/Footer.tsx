import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SHAPES_CMS_URL } from "../../../Constant";

async function getFooterData() {
  try {
    const res = await fetch(`${SHAPES_CMS_URL}Footer`, {
      headers: {
        "Content-Type": "application/json",
        Origin: "https://shapesproduct.netlify.app/",
      },
      next: { revalidate: 86400 },
    });

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
const Footer = async () => {
  const footerDataValue = await getFooterData();

  return (
    <div id="footer" className="footer bg-surface">
      <div className="container py-[60px] flex justify-between flex-wrap gap-y-8">
        <div className="company-infor basis-[35%] max-lg:basis-full pr-7">
          <Link href={"/"} className="logo">
            <Image
              src="/images/homepage/ShapesLogo.png"
              alt="Company Logo"
              className="h-[50px]"
              height={200}
              width={150}
            />
          </Link>
          <div className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-2 mt-3">
            {footerDataValue?.content?.address?.map(
              (item: any, index: number) => (
                <React.Fragment key={index}>
                  <p className="text-button font-semibold max-w-[150px]">
                    {item.text}
                  </p>
                  {/* <p>{item.content}</p> */}
                  <div className=" text-sm text-gray-800 leading-relaxed">
                    {item?.content && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item?.content,
                        }}
                        className="infrastructuredesing"
                      ></div>
                    )}
                  </div>
                </React.Fragment>
              )
            )}
          </div>
        </div>

        <div className="right-content flex flex-wrap gap-y-8 basis-[65%] max-lg:basis-full">
          <div className="list-nav flex justify-between basis-full max-md:basis-full gap-4">
            {footerDataValue?.content?.navigation?.map(
              (category: any, index: number) => (
                <div key={index} className="item flex flex-col basis-1/3">
                  <div className="text-button-uppercase pb-3">
                    {category?.heading}
                  </div>
                  {category?.submenu?.map((_submenudata: any, idx: number) => (
                    <Link
                      key={idx}
                      className="caption1 has-line-before duration-300 w-fit pt-2"
                      href={_submenudata.url}
                    >
                      {_submenudata?.title}
                    </Link>
                  ))}
                  {index ===
                    footerDataValue?.content?.navigation?.length - 1 && (
                    <>
                      <div className="list-social flex items-center gap-6 mt-4">
                        {footerDataValue?.content?.socialmedia.map(
                          (social: any, index: number) => (
                            <Link key={index} href={social.url} target="_blank">
                              <Image
                                src={social?.icons?.[0]?.filePath}
                                alt="Company Logo"
                                className="h-[50px]"
                                height={24}
                                width={24}
                              />
                            </Link>
                          )
                        )}
                      </div>
                      <div
                        className="flex gap-2 text-center bg-[#753CB7] items-center mt-4  bg-blue-500 rounded-md p-2 min-w-[182px]"
                        style={{
                          minWidth: "182px",
                        }}
                      >
                        <div className="text-white text-[14px]">
                          Powered By:{" "}
                        </div>

                        <Image
                          src={"/images/homepage/Group.png"}
                          width={80}
                          height={80}
                          alt="1"
                          className="mb-[5px]"
                        />
                      </div>
                    </>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
