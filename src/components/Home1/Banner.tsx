import React from "react";

export interface DirectorMessageType {
  id?: any;
  name: string;
  image: any;
  heading: string;
  alignment: boolean;
  discription: string;
}

interface BannerProps {
  Data: DirectorMessageType;
  Padding: string;
  Gap: string;
}

const Banner: React.FC<BannerProps> = ({
  Padding = "md:pt-20 pt-10",
  Gap = "gap-5",
  Data,
}) => {
  return (
    <div
      className={`banner-block style-one grid sm:grid-cols-1 md:grid-cols-2 ${Gap} ${Padding} `}
    >
      <div className="banner-item relative block overflow-hidden duration-500 h-[600px] md:h-[600px]">
        <div
          className="banner-content w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-in-out hover:scale-105"
          style={{
            backgroundImage: `url(${Data?.image?.[0]?.filePath})`,
          }}
        />
      </div>
      <div className="banner-item relative block overflow-hidden duration-500 h-[600px] md:h-[600px]">
        <div className="banner-content bg-[#FAF0E4] transition-all duration-300 ease-in-out hover:scale-105 p-6 md:p-8 h-full overflow-y-auto">
          <h2 className="heading2 text-[#EA2127] mb-4">{Data?.heading}</h2>
          <div className=" text-black">
            {Data?.discription && (
              <div
                dangerouslySetInnerHTML={{
                  __html: Data?.discription,
                }}
              ></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
