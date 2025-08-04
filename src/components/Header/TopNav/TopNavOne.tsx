import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SHAPES_CMS_URL } from "../../../../Constant";

async function TopNavHeaderData() {
  const res = await fetch(`${SHAPES_CMS_URL}topinfoheader`, {
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

const TopNavOne = async () => {
  const exhibitionData = await TopNavHeaderData();

  return (
    <>
      <div className={`top-nav md:h-[44px] h-[30px] bg-black`}>
        <div className="container mx-auto h-full">
          <div className="top-nav-main flex justify-between max-md:justify-center h-full">
            <div className="right-content flex items-center gap-5 max-md:hidden">
              {exhibitionData?.content?.socialmedia?.map(
                (item: any, index: number) => (
                  <Link href={item.url} target="_blank" key={index}>
                    <Image
                      key={index}
                      src={item?.whiteicon?.[0]?.filePath}
                      width={20}
                      height={20}
                      priority
                      alt={""}
                    />
                  </Link>
                )
              )}
            </div>
            <div className="text-center text-button-uppercase text-white flex items-center gap-4">
              <div className="flex justify-center items-center gap-2 font-[500]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: "14px", height: "14px" }}
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.09 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .58 2.45 2 2 0 0 1-.45 2l-1.27 1.27a16 16 0 0 0 6.73 6.73l1.27-1.27a2 2 0 0 1 2-.45 12.05 12.05 0 0 0 2.45.58A2 2 0 0 1 22 16.92z"></path>
                </svg>{" "}
                <a href={`tel:+${exhibitionData?.content?.mobile}`}>
                  {exhibitionData?.content?.mobile}
                </a>
              </div>

              <div className="flex  justify-center items-center gap-2 normal-case font-[500]	">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: "14px", height: "14px" }}
                >
                  <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>{" "}
                <a href={`mailto:${exhibitionData?.content?.email}`}>
                  {" "}
                  {exhibitionData?.content?.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavOne;
