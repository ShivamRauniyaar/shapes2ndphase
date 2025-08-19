import Link from "next/link";
import React from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { Fragment } from "react";
import Inner from "@/components/PageTransition/inner";
import ChooseUs from "@/components/Pet/ChooseUs";
import { SHAPES_CMS_URL } from "../../../Constant";

async function getOurTeamsData() {
  try {
    const res = { 
      ok: true, 
      json: async () => ({ 
        data: [{
          content: {
            heading: "Our Team",
            teams: []
          }
        }] 
      })
    };

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

const Teams = async () => {
  const ourTeamsData = await getOurTeamsData();

  return (
    <Fragment>
      <Inner backgroundColor="#EA2127" />

      <div className="breadcrumb-block style-img">
        <div className="breadcrumb-main bg-linear overflow-hidden">
          <div className="container lg:pt-[134px] pt-24 pb-10 relative">
            <div className="main-content w-full h-full flex flex-col items-center justify-center relative z-[1]">
              <div className="text-content">
                <div className="heading2 text-center">
                  {ourTeamsData?.content?.heading}
                </div>
                <div className="link flex items-center justify-center gap-1 caption1 mt-3">
                  <Link href={"/"}>Homepage</Link>
                  <Icon.CaretRight size={14} className="text-secondary2" />
                  <div className="text-secondary2 capitalize">
                    {ourTeamsData?.content?.heading}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {ourTeamsData?.content?.teams?.map((_item: any, index: number) => (
        <ChooseUs key={index} Data={_item} />
      ))}
    </Fragment>
  );
};

export default Teams;
