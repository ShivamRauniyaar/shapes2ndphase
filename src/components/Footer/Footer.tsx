import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SHAPES_CMS_URL } from "../../../Constant";

const Footer = async () => {
  const footerDataValue = {
    id: "a2ea4062-8fbd-4f5d-864e-6a088aabac38",
    content: {
      title: "Footer",
      address: [
        {
          text: "Corporate Address",
          content:
            "A-96/11, Wazirpur Industrial Area, New Delhi - 110052, India",
        },
        {
          text: "Factory Address",
          content:
            "Plot No. 17C, HSIIDC, Phase V Sector-53, Kundli - 131028 Sonipat, Haryana, India",
        },
        {
          text: "Mail",
          content:
            ' <a href="mailto:info@shapesproducts.in">info@shapesproducts.in</a>',
        },
        {
          text: "Phone",
          content: ' <a href="tel:+919896111273">+91 9896111273</a>',
        },
      ],
      navigation: [
        {
          heading: "Quick Links",
          submenu: [
            {
              url: "/",
              title: "Home",
            },
            {
              url: "/our-story",
              title: "Our Story",
            },
            {
              url: "/our-team",
              title: "Our Team",
            },
          ],
        },
        {
          heading: "Important Links",
          submenu: [
            {
              url: "/pages/refund-return-policy",
              title: "Refund and Return Policy",
            },
            {
              url: "/pages/refund-return-policy",
              title: "Privacy and Policy",
            },
            {
              url: "/pages/terms-condition",
              title: "Terms and Condition",
            },
          ],
        },
        {
          heading: "Get in Touch",
          submenu: [
            {
              url: "/contact-us",
              title: "Contact Us",
            },
          ],
        },
        {
          heading: "Newletter",
          submenu: [
            {
              url: "#",
              title: "A SPOONFUL OF HAPPINESS",
            },
          ],
        },
      ],
      socialmedia: [
        {
          id: "95b4a517-8f94-46d7-a181-4658c882847a",
          url: "https://www.youtube.com/@ShapesProducts",
          icons: [
            {
              src: "https://assets.cms.ecollat.com/cmsassets/null/92fecef5-9e67-448e-b436-6c91fc3af9fc/Z3OnyY6dIxHP/og_1741341476_icons8-youtube-logo.svg",
              caption: null,
              filePath:
                "https://assets.cms.ecollat.com/cmsassets/null/92fecef5-9e67-448e-b436-6c91fc3af9fc/Z3OnyY6dIxHP/og_1741341476_icons8-youtube-logo.svg",
              fileSize: "585 bytes",
              dimension: null,
              mediaType: "image",
              mediaFileId: "Z3OnyY6dIxHP",
              alternateName: null,
              thumbnailPath:
                "https://assets.cms.ecollat.com/cmsassets/null/92fecef5-9e67-448e-b436-6c91fc3af9fc/Z3OnyY6dIxHP/og_1741341476_icons8-youtube-logo.svg",
              fileOriginalName: "icons8-youtube-logo.svg",
              alternateFilePath: null,
              alternateThumbnail: null,
            },
          ],
          title: "Youtube",
          whiteicon: [
            {
              src: "https://assets.cms.ecollat.com/cmsassets/null/92fecef5-9e67-448e-b436-6c91fc3af9fc/kkxGUrhCx-Z4/og_1741427071_icons8-youtube.svg",
              caption: null,
              filePath:
                "https://assets.cms.ecollat.com/cmsassets/null/92fecef5-9e67-448e-b436-6c91fc3af9fc/kkxGUrhCx-Z4/og_1741427071_icons8-youtube.svg",
              fileSize: "1.65 KB",
              dimension: null,
              mediaType: "image",
              mediaFileId: "kkxGUrhCx-Z4",
              alternateName: null,
              thumbnailPath:
                "https://assets.cms.ecollat.com/cmsassets/null/92fecef5-9e67-448e-b436-6c91fc3af9fc/kkxGUrhCx-Z4/og_1741427071_icons8-youtube.svg",
              fileOriginalName: "icons8-youtube.svg",
              alternateFilePath: null,
              alternateThumbnail: null,
            },
          ],
        },
        {
          id: "664bd14d-aff1-4ae9-a246-98ff961187b4",
          url: "https://twitter.com/productsshape",
          icons: [
            {
              src: "https://assets.cms.ecollat.com/cmsassets/null/92fecef5-9e67-448e-b436-6c91fc3af9fc/1OLNYD5wr6Nd/og_1741341472_icons8-twitter-bird.svg",
              caption: null,
              filePath:
                "https://assets.cms.ecollat.com/cmsassets/null/92fecef5-9e67-448e-b436-6c91fc3af9fc/1OLNYD5wr6Nd/og_1741341472_icons8-twitter-bird.svg",
              fileSize: "1.15 KB",
              dimension: null,
              mediaType: "image",
              mediaFileId: "1OLNYD5wr6Nd",
              alternateName: null,
              thumbnailPath:
                "https://assets.cms.ecollat.com/cmsassets/null/92fecef5-9e67-448e-b436-6c91fc3af9fc/1OLNYD5wr6Nd/og_1741341472_icons8-twitter-bird.svg",
              fileOriginalName: "icons8-twitter-bird.svg",
              alternateFilePath: null,
              alternateThumbnail: null,
            },
          ],
          title: "Twitter",
          whiteicon: [
            {
              src: "https://assets.cms.ecollat.com/cmsassets/null/92fecef5-9e67-448e-b436-6c91fc3af9fc/vQH-AAKGHSC-/og_1741427102_icons8-twitter-bird1.svg",
              caption: null,
              filePath:
                "https://assets.cms.ecollat.com/cmsassets/null/92fecef5-9e67-448e-b436-6c91fc3af9fc/vQH-AAKGHSC-/og_1741427102_icons8-twitter-bird1.svg",
              fileSize: "1.60 KB",
              dimension: null,
              mediaType: "image",
              mediaFileId: "vQH-AAKGHSC-",
              alternateName: null,
              thumbnailPath:
                "https://assets.cms.ecollat.com/cmsassets/null/92fecef5-9e67-448e-b436-6c91fc3af9fc/vQH-AAKGHSC-/og_1741427102_icons8-twitter-bird1.svg",
              fileOriginalName: "icons8-twitter-bird (1).svg",
              alternateFilePath: null,
              alternateThumbnail: null,
            },
          ],
        },
        {
          id: "7a1cd668-f14d-49af-9ee2-730d031c6e74",
          url: "https://www.instagram.com/shapesproducts/",
          icons: [
            {
              src: "https://assets.cms.ecollat.com/cmsassets/null/92fecef5-9e67-448e-b436-6c91fc3af9fc/pEpBWujcnjdR/og_1741341465_icons8-instagram.svg",
              caption: null,
              filePath:
                "https://assets.cms.ecollat.com/cmsassets/null/92fecef5-9e67-448e-b436-6c91fc3af9fc/pEpBWujcnjdR/og_1741341465_icons8-instagram.svg",
              fileSize: "705 bytes",
              dimension: null,
              mediaType: "image",
              mediaFileId: "pEpBWujcnjdR",
              alternateName: null,
              thumbnailPath:
                "https://assets.cms.ecollat.com/cmsassets/null/92fecef5-9e67-448e-b436-6c91fc3af9fc/pEpBWujcnjdR/og_1741341465_icons8-instagram.svg",
              fileOriginalName: "icons8-instagram.svg",
              alternateFilePath: null,
              alternateThumbnail: null,
            },
          ],
          title: "instagram",
          whiteicon: [
            {
              src: "https://assets.cms.ecollat.com/cmsassets/null/92fecef5-9e67-448e-b436-6c91fc3af9fc/-TRgaPFVEaga/og_1741427114_icons8-instagram1.svg",
              caption: null,
              filePath:
                "https://assets.cms.ecollat.com/cmsassets/null/92fecef5-9e67-448e-b436-6c91fc3af9fc/-TRgaPFVEaga/og_1741427114_icons8-instagram1.svg",
              fileSize: "915 bytes",
              dimension: null,
              mediaType: "image",
              mediaFileId: "-TRgaPFVEaga",
              alternateName: null,
              thumbnailPath:
                "https://assets.cms.ecollat.com/cmsassets/null/92fecef5-9e67-448e-b436-6c91fc3af9fc/-TRgaPFVEaga/og_1741427114_icons8-instagram1.svg",
              fileOriginalName: "icons8-instagram (1).svg",
              alternateFilePath: null,
              alternateThumbnail: null,
            },
          ],
        },
        {
          id: "d51c2231-1393-48d8-a5af-bcdd64b29e81",
          url: "https://www.facebook.com/shapesproducts",
          icons: [
            {
              src: "https://assets.cms.ecollat.com/cmsassets/null/92fecef5-9e67-448e-b436-6c91fc3af9fc/rhrvTAj-XKUb/og_1741341469_icons8-facebook-f.svg",
              caption: null,
              filePath:
                "https://assets.cms.ecollat.com/cmsassets/null/92fecef5-9e67-448e-b436-6c91fc3af9fc/rhrvTAj-XKUb/og_1741341469_icons8-facebook-f.svg",
              fileSize: "499 bytes",
              dimension: null,
              mediaType: "image",
              mediaFileId: "rhrvTAj-XKUb",
              alternateName: null,
              thumbnailPath:
                "https://assets.cms.ecollat.com/cmsassets/null/92fecef5-9e67-448e-b436-6c91fc3af9fc/rhrvTAj-XKUb/og_1741341469_icons8-facebook-f.svg",
              fileOriginalName: "icons8-facebook-f.svg",
              alternateFilePath: null,
              alternateThumbnail: null,
            },
          ],
          title: "facebook",
          whiteicon: [
            {
              src: "https://assets.cms.ecollat.com/cmsassets/null/92fecef5-9e67-448e-b436-6c91fc3af9fc/zcJ5lQQPZyQZ/og_1741427126_icons8-facebook-f1.svg",
              caption: null,
              filePath:
                "https://assets.cms.ecollat.com/cmsassets/null/92fecef5-9e67-448e-b436-6c91fc3af9fc/zcJ5lQQPZyQZ/og_1741427126_icons8-facebook-f1.svg",
              fileSize: "700 bytes",
              dimension: null,
              mediaType: "image",
              mediaFileId: "zcJ5lQQPZyQZ",
              alternateName: null,
              thumbnailPath:
                "https://assets.cms.ecollat.com/cmsassets/null/92fecef5-9e67-448e-b436-6c91fc3af9fc/zcJ5lQQPZyQZ/og_1741427126_icons8-facebook-f1.svg",
              fileOriginalName: "icons8-facebook-f (1).svg",
              alternateFilePath: null,
              alternateThumbnail: null,
            },
          ],
        },
      ],
    },
  };

  const footerDataValue2nd = [
    [
      {
        id: 1,
        title: "Home",
      },
      {
        id: 2,
        title: "Blog",
      },
      {
        id: 3,
        title: "Shop",
      },
    ],
    [
      {
        id: 1,
        title: "Cutlery",
      },
      { id: 2, title: "Chaffing Dishes" },
      {
        id: 3,
        title: "Buffetware",
      },
      {
        id: 4,
        title: "Serveware",
      },
    ],
    [
      {
        id: 1,
        title: "Barware",
      },
      {
        id: 2,
        title: "Kitchenware",
      },
      { id: 3, title: "Tools & Gadgets" },
      { id: 4, title: "Trolleys & Dustbin" },
      {
        id: 5,
        title: "Gifting Options",
      },
    ],
    [
      {
        id: 1,
        title: "Hotels",
      },
      { id: 2, title: "Restaurants" },
      {
        id: 3,
        title: "Catering",
      },
      {
        id: 4,
        title: "Gifting",
      },
    ],
    [
      {
        id: 1,
        title: "About",
      },
      {
        id: 2,
        title: "Contact",
      },
    ],
  ];

  return (
    <div id="footer" className="footer bg-surface">
      <div
        className="container flex pt-[60px] pb-[40px]"
        style={{
          borderBottom: "1px solid #ba9b53",
        }}
      >
        <div className="w-[40%]">
          <Link href={"/"} className="logo">
            <Image
              src="/images/homepage/ShapesLogo.png"
              alt="Company Logo"
              className="h-[133px]"
              height={200}
              width={328}
            />
          </Link>
          <div className="grid gap-2">
            <p className="text-button font-semibold">info@shapesproducts.in</p>
            <p className="text-button font-semibold">+91 9896111273</p>
          </div>
        </div>
        <div className="w-[60%] grid grid-cols-5 gap-[12px]">
          {footerDataValue2nd?.map((_item, _idx) => (
            <div className="grid gap-[12px]  h-fit" key={_idx}>
              {_item?.map((item, index) => (
                <div key={index} className="header_design pb-2 hover_aligner cursor-pointer">
                  {item?.title}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="container  pb-[101px] pt-[40px]">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <div className="bottom_circle"></div>
            <div className="bottom_circle"></div>
            <div className="bottom_circle"></div>
          </div>
          <div className="form_label">Copyright 2025</div>
          <div className="flex items-center gap-2 form_label">
            Powered by{" "}
            <Image
              src={"/images/newimages/poweredbyimg.png"}
              width={80}
              height={80}
              alt="1"
              className="mb-[5px]"
            />
          </div>
        </div>
      </div>
      {false && (
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
                    {category?.submenu?.map(
                      (_submenudata: any, idx: number) => (
                        <Link
                          key={idx}
                          className="caption1 has-line-before duration-300 w-fit pt-2"
                          href={_submenudata.url}
                        >
                          {_submenudata?.title}
                        </Link>
                      )
                    )}
                    {index ===
                      footerDataValue?.content?.navigation?.length - 1 && (
                      <>
                        <div className="list-social flex items-center gap-6 mt-4">
                          {footerDataValue?.content?.socialmedia.map(
                            (social: any, index: number) => (
                              <Link
                                key={index}
                                href={social.url}
                                target="_blank"
                              >
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
      )}
    </div>
  );
};

export default Footer;
