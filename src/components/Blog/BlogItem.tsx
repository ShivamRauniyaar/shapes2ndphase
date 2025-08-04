import React from "react";

export interface DirectorMessageType {
  id?: any;
  name: string;
  image: any;
  heading: string;
  alignment: boolean;
  discription: string;
}

interface BlogProps {
  data: DirectorMessageType;
  type: string;
  key?: any;
  ExtraClass?: any;
}

const BlogItem: React.FC<BlogProps> = ({ data, type, key, ExtraClass }) => {
  return (
    <>
      {type === "style-one" ? (
        <></>
      ) : (
        <>
          {type === "style-list" ? (
            <div
              className="blog-item style-list h-full cursor-pointer"
              key={key}
            >
              <div className={`blog-main h-full flex max-md:flex-col  md:gap-9 gap-6  ${ExtraClass}`}>
                <div
                  className="blog-thumb md:w-1/2 w-full rounded-[20px] overflow-hidden flex-shrink-0"
                  style={{
                    backgroundImage: `url(${data.image?.[0]?.filePath})`,
                    width: "500px",
                    height: "500px",
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className="blog-infor">
                  <div className="heading6  mt-3 duration-300">
                    {data.heading}
                  </div>
                  <div className="blog-tag bg-green py-1 px-2.5 rounded-full text-button-uppercase inline-block mt-2">
                    {data.name}
                  </div>

                  <div className="body1 text-secondary mt-4">
                    {data?.discription && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data?.discription,
                        }}
                      ></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
};

export default BlogItem;
