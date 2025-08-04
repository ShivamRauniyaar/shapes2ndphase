import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Banner from "@/components/Home1/Banner";
import Inner from "@/components/PageTransition/inner";
import { SHAPES_CMS_URL } from "../../../Constant";

async function getDirectorMessage() {
  try {
    const res = await fetch(`${SHAPES_CMS_URL}OurStory`, {
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

export default async function OurStory() {
  const ourStoryData = await getDirectorMessage();

  return (
    <main>
      <Inner backgroundColor="#EA2127" />
      <div className="breadcrumb-block style-img">
        <div className="breadcrumb-main bg-linear overflow-hidden">
          <div className="container lg:pt-[134px] pt-24 pb-10 relative">
            <div className="main-content w-full h-full flex flex-col items-center justify-center relative z-[1]">
              <div className="text-content">
                <h1 className="heading2 text-center">
                  {ourStoryData?.content?.heading}
                </h1>
                <div className="link flex items-center justify-center gap-1 caption1 mt-3">
                  <Link href="/">Homepage</Link>
                  <Icon.CaretRight size={14} className="text-secondary2" />
                  <span className="text-secondary2 capitalize">
                    {ourStoryData?.content?.heading}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {ourStoryData ? (
        <section className="container mx-auto p-4">
          <h2 className="text-2xl font-bold">{ourStoryData.title}</h2>
          <p className="mt-2">{ourStoryData.description}</p>
        </section>
      ) : (
        <p className="text-center text-red-500">Failed to load data.</p>
      )}

      {ourStoryData?.content?.story && (
        <Banner Padding={""} Gap={""} Data={ourStoryData?.content?.story?.[0]} />
      )}
    </main>
  );
}
