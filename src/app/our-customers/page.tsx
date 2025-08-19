import React, { Fragment } from "react";

import Inner from "@/components/PageTransition/inner";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { SHAPES_CMS_URL } from "../../../Constant";

async function getOurCustomerData() {
  try {
    // Dummy data instead of API call
    const res = {
      ok: true,
      json: async () => ({
      data: [
        {
        content: {
          title: "Our Customers",
          customers: [
          {
            title: "Tech Companies",
            images: [
            { filePath: "/images/customer1.png" },
            { filePath: "/images/customer2.png" },
            ],
          },
          {
            title: "Retail Brands",
            images: [
            { filePath: "/images/customer3.png" },
            { filePath: "/images/customer4.png" },
            ],
          },
          ],
        },
        },
      ],
      }),
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

interface ClientSectionProps {
  title?: string;
  imageUrl: any[];
  key: number;
}

const ClientSection: React.FC<ClientSectionProps> = ({ title, imageUrl, key }) => (
  <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4" key={key}>
    {title && (
      <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
        {title}
      </h2>
    )}


    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {imageUrl?.map((item: any, index: number) => (
          <div
            className="w-full h-[200px] rounded-xl bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${item?.filePath})` }}
            key={index}
          ></div>
      ))}
    </div>
  </div>
);

const OurCustomers: React.FC = async () => {
  const customerData = await getOurCustomerData();

  return (
    <Fragment>
      <Inner backgroundColor="#EA2127" />
      <div className="breadcrumb-block style-img">
        <div className="breadcrumb-main bg-linear overflow-hidden">
          <div className="container lg:pt-[134px] pt-24 pb-10 relative">
            <div className="main-content w-full h-full flex flex-col items-center justify-center relative z-[1]">
              <div className="text-content">
                <h1 className="heading2 text-center">
                  {customerData?.content?.title}
                </h1>
                <div className="link flex items-center justify-center gap-1 caption1 mt-3">
                  <Link href="/">Homepage</Link>
                  <Icon.CaretRight size={14} className="text-secondary2" />
                  <span className="text-secondary2 capitalize">
                    {customerData?.content?.title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-white dark:bg-gray-900 mt-4">
        {customerData?.content?.customers?.map((item: any, index: number) => (
          <ClientSection title={item?.title} imageUrl={item?.images} key={index} />
        ))}
      </section>
    </Fragment>
  );
};

export default OurCustomers;
