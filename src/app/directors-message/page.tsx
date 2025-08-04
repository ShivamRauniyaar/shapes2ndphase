import BlogItem, { DirectorMessageType } from "@/components/Blog/BlogItem";
import Inner from "@/components/PageTransition/inner";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";
import { SHAPES_CMS_URL } from "../../../Constant";

async function getDirectorMessage() {
  const res = await fetch(`${SHAPES_CMS_URL}directormessage`, {
    headers: {
      "Content-Type": "application/json",
      Origin: "https://shapesproduct.netlify.app/",
    },
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch exhibition data");
  }

  const data = await res.json();
  return data?.data?.[0] || null;
}

const DirectorMessage = async () => {
  const directorMessage1 = await getDirectorMessage();

  return (
    <div>
      <Inner backgroundColor="#EA2127" />
      <div className="breadcrumb-block style-img">
        <div className="breadcrumb-main bg-linear overflow-hidden">
          <div className="container lg:pt-[134px] pt-24 pb-10 relative">
            <div className="main-content w-full h-full flex flex-col items-center justify-center relative z-[1]">
              <div className="text-content">
                <div className="heading2 text-center">Director Message</div>
                <div className="link flex items-center justify-center gap-1 caption1 mt-3">
                  <Link href={"/"}>Homepage</Link>
                  <Icon.CaretRight size={14} className="text-secondary2" />
                  <div className="text-secondary2 capitalize">
                    director message
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog list md:py-20 py-10">
        <div className="container">
          <div className="flex justify-between max-xl:flex-col gap-y-12">
            <div className="list-blog flex flex-col xl:gap-10 gap-8">
              {directorMessage1?.content?.body?.map(
                (item: DirectorMessageType) => (
                  <BlogItem key={item.id} data={item} type="style-list" />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorMessage;