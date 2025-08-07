"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { usePathname } from "next/navigation";
import useMenuMobile from "@/store/useMenuMobile";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useModalCartContext } from "@/context/ModalCartContext";
import { useCart } from "@/context/CartContext";
import { SHAPES_API_URL } from "../../../../Constant";
import { CommonSvg } from "@/Common/CommonSvg";

interface Props {
  props: string;
  menuDataHeader?: any;
}

const MenuOne: React.FC<Props> = ({ props, menuDataHeader }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [menuData, setMenuData] = useState<any | null>(null);
  const { openMenuMobile, handleMenuMobile } = useMenuMobile();
  const [openSubNavMobile, setOpenSubNavMobile] = useState<number | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<
    Record<string, boolean>
  >({});
  const handleOpenSubNavMobile = (index: number) => {
    setOpenSubNavMobile(openSubNavMobile === index ? null : index);
  };
  const { openModalCart } = useModalCartContext();
  const { cartState } = useCart();

  const [fixedHeader, setFixedHeader] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setFixedHeader(scrollPosition > 0 && scrollPosition < lastScrollPosition);
      setLastScrollPosition(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPosition]);

  const handleGenderClick = (
    gender: string,
    subCategory: string,
    categoryName: string
  ) => {
    router.push(
      `/shop/product_catalog?catalog=${gender}&subCategory=${subCategory}&categoryName=${categoryName}`
    );
  };

  const toggleViewAll = (categoryID: any) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryID]: !prev[categoryID],
    }));
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `${SHAPES_API_URL}getcategoryandsubcatgory`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setMenuData(response.data?.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const hardcodeDynamicData = [
    {
      id: "6bc74016-231d-44b2-9f2b-620677884998",
      content: [
        {
          info: {},
          Url: "/about",

          title: "About Us",
          Navigateselect: "URL",
          children: [],
        },

        {
          info: {},
          title: "Products",
          children: [
            {
              info: {},
              title: "NECKLACE TOOLS",
              category: {
                label: "NECKLACE TOOLS",
                value: 31,
              },
              children: [
                {
                  title: "NECKLACE TOOLS",
                  button: true,
                  rowInfo: {},
                  expanded: true,
                  selected: false,
                  tempdata: false,
                  Navigateselect: null,
                },
                {
                  title: "VEG SERVING SPOON",
                  button: true,
                  rowInfo: {},
                  expanded: true,
                  selected: false,
                  tempdata: false,
                  Navigateselect: null,
                },
                {
                  title: "CEREAL SCOOP",
                  button: true,
                  rowInfo: {},
                  expanded: true,
                  selected: false,
                  tempdata: false,
                  Navigateselect: null,
                },
                {
                  title: "RICE SERVER",
                  button: true,
                  rowInfo: {},
                  expanded: true,
                  selected: false,
                  tempdata: false,
                  Navigateselect: null,
                },
                {
                  title: "SKIMMER",
                  button: true,
                  rowInfo: {},
                  expanded: true,
                  selected: false,
                  tempdata: false,
                  Navigateselect: null,
                },
                {
                  title: "SOLID TURNER",
                  button: true,
                  rowInfo: {},
                  expanded: true,
                  selected: false,
                  tempdata: false,
                  Navigateselect: null,
                },
                {
                  title: "SLOTTED TURNER",
                  button: true,
                  rowInfo: {},
                  expanded: true,
                  selected: false,
                  tempdata: false,
                  Navigateselect: null,
                },
                {
                  title: "DOSA TURNER",
                  button: true,
                  rowInfo: {},
                  expanded: true,
                  selected: false,
                  tempdata: false,
                  Navigateselect: null,
                },
              ],
              Subcategory: [
                {
                  label: "NECKLACE TOOLS",
                  value: 12,
                },
                {
                  label: "VEG SERVING SPOON",
                  value: 13,
                },
                {
                  label: "CEREAL SCOOP",
                  value: 14,
                },
                {
                  label: "RICE SERVER",
                  value: 15,
                },
                {
                  label: "SKIMMER",
                  value: 16,
                },
                {
                  label: "SOLID TURNER",
                  value: 17,
                },
                {
                  label: "SLOTTED TURNER",
                  value: 18,
                },
                {
                  label: "DOSA TURNER",
                  value: 19,
                },
              ],
              Navigateselect: "Category",
            },
            {
              info: {},
              title: "STAILESS STEEL THALI AND DINNER SET",
              category: {
                label: "STAILESS STEEL THALI AND DINNER SET",
                value: 32,
              },
              children: [
                {
                  title: "STAINLESS STEEL THALI AND DINNER SET",
                  button: true,
                  rowInfo: {},
                  expanded: true,
                  selected: false,
                  tempdata: false,
                  Navigateselect: null,
                },
              ],
              Subcategory: [
                {
                  label: "STAINLESS STEEL THALI AND DINNER SET",
                  value: 22,
                },
              ],
              Navigateselect: "Category",
            },
            {
              info: {},
              title: "KOKO GADGETS",
              category: {
                label: "KOKO GADGETS",
                value: 30,
              },
              children: [
                {
                  title: "KOKO GADGETS",
                  button: true,
                  rowInfo: {},
                  expanded: true,
                  selected: false,
                  tempdata: false,
                  Navigateselect: null,
                },
              ],
              Subcategory: [
                {
                  label: "KOKO GADGETS",
                  value: 20,
                },
              ],
              Navigateselect: "Category",
            },
            {
              info: {},
              title: "UTILITY ITEMS AND SERVEWARE",
              category: {
                label: "UTILITY ITEMS AND SERVEWARE",
                value: 27,
              },
              children: [
                {
                  title: "UTILITY ITEMS AND SERVEWARE",
                  button: true,
                  rowInfo: {},
                  expanded: true,
                  selected: false,
                  tempdata: false,
                  Navigateselect: null,
                },
              ],
              Subcategory: [
                {
                  label: "UTILITY ITEMS AND SERVEWARE",
                  value: 21,
                },
              ],
              Navigateselect: "Category",
            },
            {
              info: {},
              title: "KITCHEN TOOLS",
              category: {
                label: "KITCHEN TOOLS",
                value: 23,
              },
              children: [
                {
                  title: "KITCHEN TOOLS",
                  button: true,
                  rowInfo: {},
                  expanded: true,
                  selected: false,
                  tempdata: false,
                  Navigateselect: null,
                },
                {
                  title: "SERVING TOOLS",
                  button: true,
                  rowInfo: {},
                  expanded: true,
                  selected: false,
                  tempdata: false,
                  Navigateselect: null,
                },
              ],
              Subcategory: [
                {
                  label: "KITCHEN TOOLS",
                  value: 8,
                },
                {
                  label: "SERVING TOOLS",
                  value: 10,
                },
              ],
              Navigateselect: "Category",
            },
            {
              info: {},
              title: "BARWARE",
              category: {
                label: "BARWARE",
                value: 25,
              },
              children: [
                {
                  title: "BARWARE",
                  button: true,
                  rowInfo: {},
                  expanded: true,
                  selected: false,
                  tempdata: false,
                  Navigateselect: null,
                },
              ],
              Subcategory: [
                {
                  label: "BARWARE",
                  value: 23,
                },
              ],
              Navigateselect: "Category",
            },
            {
              info: {},
              title: "COOKWARE",
              category: {
                label: "COOKWARE",
                value: 26,
              },
              children: [
                {
                  title: "TRI-PLAY COOKWARE",
                  button: true,
                  rowInfo: {},
                  expanded: true,
                  selected: false,
                  tempdata: false,
                  Navigateselect: null,
                },
              ],
              Subcategory: [
                {
                  label: "TRI-PLAY COOKWARE",
                  value: 11,
                },
              ],
              Navigateselect: "Category",
            },
            {
              info: {},
              title: "STAINLESS STEEL DUST BINS ",
              category: {
                label: "STAINLESS STEEL DUST BINS ",
                value: 28,
              },
              children: [
                {
                  title: "STAINLESS STEEL DUSTBINS",
                  button: true,
                  rowInfo: {},
                  expanded: true,
                  selected: false,
                  tempdata: false,
                  Navigateselect: null,
                },
              ],
              Subcategory: [
                {
                  label: "STAINLESS STEEL DUSTBINS",
                  value: 24,
                },
              ],
              Navigateselect: "Category",
            },
            {
              info: {},
              title: "GIFTING PRODUCTS",
              category: {
                label: "GIFTING PRODUCTS",
                value: 29,
              },
              children: [
                {
                  title: "GIFTING PRODUCTS",
                  button: true,
                  rowInfo: {},
                  expanded: true,
                  selected: false,
                  tempdata: false,
                  Navigateselect: null,
                },
              ],
              Subcategory: [
                {
                  label: "GIFTING PRODUCTS",
                  value: 25,
                },
              ],
              Navigateselect: "Category",
            },
            {
              info: {},
              title: "KITCHEN ESSENTIALS",
              category: {
                label: "KITCHEN ESSENTIALS",
                value: 33,
              },
              children: [
                {
                  title: "KITCHEN ESSENTIALS",
                  button: true,
                  rowInfo: {},
                  expanded: true,
                  selected: false,
                  tempdata: false,
                  Navigateselect: null,
                },
              ],
              Subcategory: [
                {
                  label: "KITCHEN ESSENTIALS",
                  value: 26,
                },
              ],
              Navigateselect: "Category",
            },
          ],
        },
        {
          info: {},
          title: "Industries ",
          children: [
            {
              Url: "/hotels",
              info: {},
              title: "Hotels",
              children: [],
              Navigateselect: "URL",
            },
            {
              Url: "/restaurants",
              info: {},
              title: "Restaurants",
              children: [],
              Navigateselect: "URL",
            },
            {
              Url: "/catering",
              info: {},
              title: "Catering",
              children: [],
              Navigateselect: "URL",
            },
            {
              Url: "/giftingsolutions",
              info: {},
              title: "Gifting Solutions",
              children: [],
              Navigateselect: "URL",
            },
            {
              Url: "/private-lable",
              info: {},
              title: "Private Label",
              children: [],
              Navigateselect: "URL",
            },
            {
              Url: "/shapes-worldwide",
              info: {},
              title: "Shapes WorldWide",
              children: [],
              Navigateselect: "URL",
            },
          ],
        },
        {
          info: {},
          title: "Blog/News",
          children: [
            {
              Url: "/blog",
              info: {},
              title: "Blog",
              children: [],
              Navigateselect: "URL",
            },
            {
              Url: "/news",
              info: {},
              title: "News",
              children: [],
              Navigateselect: "URL",
            },
          ],
        },
        {
          info: {},
          title: "Contact",
          children: [
            {
              Url: "/general-enquiry",
              info: {},
              title: "General Enquiry",
              children: [],
              Navigateselect: "URL",
            },
            {
              Url: "/news",
              info: {},
              title: "Dealer/Distributor Enquiry",
              children: [],
              Navigateselect: "URL",
            },
          ],
        },
        {
          info: {},
          Url: "/shop",

          title: "Shop",
          Navigateselect: "URL",
          children: [],
        },
      ],
    },
  ];

  const secongPhaseDyanmicHeaderData = [
    {
      id: 1,
      content: [
        {
          id: "ss1",
          info: {},
          Url: "/",
          title: "Home",
          Navigateselect: "URL",
          childred: [],
          blogs: [],
          isfullPopped: false,
        },
        {
          id: "ss2",
          info: {},
          Url: "/product",

          title: "Products",
          Navigateselect: "URL",
          children: [
            {
              id: "cp1",
              title: "Cutlery",
              children: {
                id: "cp1cut1",
                header:
                  "Lorem Ipsum data section contained like some one and things working fine",
                childred: [
                  {
                    id: "cp1cut1sub1",
                    label: "Tea Urns & Dispensers",
                  },
                  {
                    id: "cp1cut1sub2",
                    label: "Buffet Display",
                  },
                  {
                    id: "cp1cut1sub3",
                    label: "Induction Plates & Food Warmers",
                  },
                  {
                    id: "cp1cut1sub4",
                    label: "Salad & Snack Presentation",
                  },
                  {
                    id: "cp1cut1sub5",
                    label: "Baskets & Platters",
                  },
                ],
              },
              Url: "/product/cutlery",
            },
            {
              id: "cp2",
              title: "Chaffing Dishes",
              children: [],
              Url: "/product/chaffing_dishes",
            },
            {
              id: "cp3",
              title: "Buffetware",
              children: [],
              Url: "/product/buffetware",
            },
            {
              id: "cp4",
              title: "Serveware",
              children: [],
              Url: "/product/serveware",
            },
            {
              id: "cp5",
              title: "Barware",
              children: [],
              Url: "/product/barware",
            },
            {
              id: "cp6",
              title: "Kitchenware",
              children: [],
              Url: "/product/kitchenware",
            },
            {
              id: "cp7",
              title: "Tools & Gadgets",
              children: [],
              Url: "/product/Tools&Gadgets",
            },
            {
              id: "cp8",
              title: "Trolleys & Dustbin",
              children: [],
              Url: "/product/trolleys_dustbin",
            },
            {
              id: "cp9",
              title: "Gifting Options",
              children: [],
              Url: "/product/gifting_options",
            },
          ],
          blogs: [
            {
              id: 1,
              image: "",
              title:
                "Lorem Ipsum dolor sit amet consectetur Et aliquam aennean pellentesque",
            },
            {
              id: 1,
              image: "",
              title:
                "Lorem Ipsum dolor sit amet consectetur Et aliquam aennean pellentesque",
            },
          ],
          isfullPopped: true,
        },
        {
          id: "ss2",
          info: {},
          Url: "/industries",

          title: "Industries",
          Navigateselect: "URL",
          children: [
            {
              id: "ip2",
              title: "Hotels",
              children: [
                {
                  id: 1,
                  title: "something",
                },
              ],
            },
            {
              id: "cp3",
              title: "Restaurants",
              children: [],
            },
            {
              id: "cp4",
              title: "Catering",
              children: [],
            },
            {
              id: "cp5",
              title: "Gifting",
              children: [],
            },
          ],
          blogs: [
            {
              id: 1,
              image: "",
              title:
                "Lorem Ipsum dolor sit amet consectetur Et aliquam aennean pellentesque",
            },
            {
              id: 1,
              image: "",
              title:
                "Lorem Ipsum dolor sit amet consectetur Et aliquam aennean pellentesque",
            },
          ],
          isfullPopped: true,
        },
        {
          id: "ss4",
          info: {},
          Url: "/blog",
          title: "Blog",
          Navigateselect: "URL",
          childred: [],
          blogs: [],
          isfullPopped: false,
        },
        {
          id: "ss5",
          info: {},
          Url: "/shop",
          title: "Shop",
          Navigateselect: "URL",
          childred: [],
          blogs: [],
          isfullPopped: false,
        },
      ],
      subContent: [
        {
          id: "sunc1",
          info: {},
          Url: "/about",
          title: "About",
          Navigateselect: "URL",
          childred: [],
          blogs: [],
        },
        {
          id: "sunc1",
          info: {},
          Url: "/contact",
          title: "Contact",
          Navigateselect: "URL",
          childred: [],
          blogs: [],
        },
      ],
    },
  ];

  return (
    <>
      <div
        className={`header-menu style-one ${
          fixedHeader ? "fixed" : "absolute"
        } top-0 left-0 right-0 w-full md:h-[112px] h-[56px] ${props}`}
      >
        <div className="container mx-auto h-full">
          <div className="header-main flex justify-between h-full">
            <div
              className="menu-mobile-icon lg:hidden flex items-center"
              onClick={handleMenuMobile}
            >
              <i className="icon-category text-2xl"></i>
            </div>
            <div className=" flex justify-between w-[100%] items-center gap-16">
              <div className="flex items-center max-lg:absolute max-lg:left-1/2 max-lg:-translate-x-1/2">
                <div className="heading4 flex gap-8 items-center">
                  <Image
                    src={"/images/homepage/ShapesLogo.png"}
                    alt="some"
                    className="h-[50px]"
                    height={200}
                    width={150}
                  />
                  <div className="menu-main h-full max-lg:hidden">
                    <ul className="flex justify-between w-[100%] items-center gap-8 h-full">
                      {secongPhaseDyanmicHeaderData?.[0]?.content?.map(
                        (item: any, index: number) =>
                          item?.children?.length === 0 ? (
                            <li className="h-full relative" key={index}>
                              <Link
                                href={item?.Url}
                                className={`text-button-uppercase duration-300 h-full flex items-center justify-center ${
                                  pathname.includes(item?.Url) ? "active" : ""
                                }`}
                              >
                                {item?.title}
                              </Link>
                            </li>
                          ) : !item?.isfullPopped ? (
                            <li className="h-full relative" key={index}>
                              <Link
                                href={item?.Url}
                                className={`text-button-uppercase duration-300 h-full flex items-center justify-center gap-1 ${
                                  pathname === item?.Url ? "active" : ""
                                }`}
                              >
                                {item?.title}
                              </Link>
                            </li>
                          ) : (
                            <li className="h-full" key={index}>
                              <Link
                                href="#"
                                className={`text-button-uppercase duration-300 h-full flex items-center justify-center ${
                                  pathname.includes("/shop/") ? "active" : ""
                                }`}
                              >
                                {item?.title}
                              </Link>
                              <div className="mega-menu absolute top-[112px] left-0 bg-white w-screen">
                                <div className="container">
                                  <div className=" justify-between py-8">
                                    <div className="grid grid-cols-4">
                                      <div className="col-span-2 p-2">
                                        <div className="nav-link grid grid-flow-col p-2 grid-rows-4 gap-y-8 gap-[1rem]">
                                          {item?.children?.map(
                                            (_item: any, index: number) => (
                                              <div key={index}>
                                                <Link
                                                  href={item?.Url}
                                                  className="nav-item"
                                                  key={index}
                                                >
                                                  <div className="text-button-uppercase pb-2">
                                                    {_item?.title}
                                                  </div>
                                                </Link>
                                              </div>
                                            )
                                          )}
                                        </div>
                                      </div>
                                      <div className="col-span-2 vertical_layout_pipe p-2">
                                        <div className="grid grid-cols-2 gap-2">
                                          {item?.blogs?.map(
                                            (item: any, index: number) => (
                                              <div key={index}>
                                                <div>
                                                  {CommonSvg.frameSvgIcon}
                                                </div>
                                                <div className="caption1 text-secondary text-left mt-3">
                                                  {item?.title}
                                                </div>
                                                <div>Read -</div>
                                              </div>
                                            )
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="menu-main h-full flex justify-center max-lg:hidden">
                <div className="flex justify-between items-center w-full">
                  <ul className="flex justify-between w-[100%] items-center gap-8 h-full">
                    {secongPhaseDyanmicHeaderData?.[0]?.subContent?.map(
                      (item: any, index: number) =>
                        item?.children?.length === 0 ? (
                          <li className="h-full relative" key={index}>
                            <Link
                              href={item?.Url}
                              className={`text-button-uppercase duration-300 h-full flex items-center justify-center ${
                                pathname.includes(item?.Url) ? "active" : ""
                              }`}
                            >
                              {item?.title} a
                            </Link>
                          </li>
                        ) : item?.children?.[0]?.children?.length === 0 ? (
                          <li className="h-full relative" key={index}>
                            <Link
                              href={item?.Url}
                              className={`text-button-uppercase duration-300 h-full flex items-center justify-center gap-1 ${
                                pathname === item?.Url ? "active" : ""
                              }`}
                            >
                              {item?.title}
                            </Link>
                            <div className="sub-menu py-3 px-5 -left-10 w-max absolute grid grid-cols-1 gap-5 bg-white rounded-b-xl">
                              {/* <ul>
                                  {item?.children?.map(
                                    (item: any, index: number) => (
                                      <li key={index}>
                                        <Link
                                          href={item?.Url}
                                          className={`link text-secondary duration-300 ${
                                            pathname === item?.Url
                                              ? "active"
                                              : ""
                                          }`}
                                        >
                                          {item?.title}
                                        </Link>
                                      </li>
                                    )
                                  )}
                                </ul> */}
                            </div>
                          </li>
                        ) : (
                          <li className="h-full" key={index}>
                            <Link
                              href={item?.Url}
                              className={`text-button-uppercase duration-300 h-full flex items-center justify-center ${
                                pathname.includes("/shop/") ? "active" : ""
                              }`}
                            >
                              {item?.title}
                            </Link>
                            <div className="mega-menu absolute top-[112px] left-0 bg-white w-screen">
                              <div className="container">
                                <div className=" justify-between py-8">
                                  <div className="grid grid-cols-4">
                                    <div className="col-span-2 p-2">
                                      <div className="nav-link grid grid-flow-col grid-rows-4 gap-y-8 gap-[1rem]">
                                        {item?.children?.map(
                                          (_item: any, index: number) => (
                                            <div
                                              className="nav-item"
                                              key={index}
                                            >
                                              <div className="text-button-uppercase pb-2">
                                                {_item?.title}
                                              </div>
                                              {/* <ul>
                                              {(expandedCategories[index]
                                                ? _item?.Subcategory
                                                : (
                                                    _item?.Subcategory ?? []
                                                  ).slice(0, 4)
                                              ).map((_insideValue: any) => (
                                                <li key={_insideValue?.value}>
                                                  <div
                                                    onClick={() =>
                                                      handleGenderClick(
                                                        _item?.category?.value,
                                                        _insideValue?.value,

                                                        _item?.title
                                                      )
                                                    }
                                                    className="link text-secondary cursor-pointer"
                                                  >
                                                    {_insideValue?.label}
                                                  </div>
                                                </li>
                                              ))}
                                              {_item?.Subcategory?.length >
                                                4 && (
                                                <li>
                                                  <div
                                                    onClick={() =>
                                                      toggleViewAll(index)
                                                    }
                                                    className="link text-secondary cursor-pointer font-bold"
                                                  >
                                                    {expandedCategories[index]
                                                      ? "Show Less"
                                                      : "View All"}
                                                  </div>
                                                </li>
                                              )}
                                            </ul> */}
                                            </div>
                                          )
                                        )}
                                      </div>
                                    </div>
                                    <div className="col-span-2 vertical_layout_pipe p-2">
                                      second things
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="menu-mobile" className={`${openMenuMobile ? "open" : ""}`}>
        <div className="menu-container bg-white h-full">
          <div className="container h-full">
            <div className="menu-main h-full overflow-hidden">
              <div className="heading py-2 relative flex items-center justify-center">
                <div
                  className="close-menu-mobile-btn absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-surface flex items-center justify-center"
                  onClick={handleMenuMobile}
                >
                  <Icon.X size={14} />
                </div>
                <Link
                  href={"/"}
                  className="logo text-3xl font-semibold text-center"
                >
                  Shapes
                </Link>
              </div>
              <div className="form-search relative mt-2">
                <Icon.MagnifyingGlass
                  size={20}
                  className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer"
                />
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className=" h-12 rounded-lg border border-line text-sm w-full pl-10 pr-4"
                />
              </div>
              <div className="list-nav mt-6">
                <ul>
                  {hardcodeDynamicData?.[0]?.content?.map(
                    (item: any, index: number) => {
                      const keyBase = item?.title || `menu-item-${index}`;

                      return item?.children?.length === 0 ? (
                        <li
                          className={`${
                            openSubNavMobile === index ? "open" : ""
                          }`}
                          key={keyBase}
                        >
                          <Link
                            href={"/pages/exhibition"}
                            className="text-xl font-semibold flex items-center justify-between mt-5"
                          >
                            {item?.title}
                            <span className="text-right">
                              <Icon.CaretRight size={20} />
                            </span>
                          </Link>
                        </li>
                      ) : item?.children?.[0]?.children?.length === 0 ? (
                        <li
                          key={keyBase}
                          className={`${
                            openSubNavMobile === index ? "open" : ""
                          }`}
                          onClick={() => handleOpenSubNavMobile(index)}
                        >
                          <div className="text-xl mt-5 font-semibold flex items-center justify-between">
                            {item?.title}
                            <span className="text-right">
                              <Icon.CaretRight size={20} />
                            </span>
                          </div>
                          <div className="sub-nav-mobile">
                            <div
                              className="back-btn flex items-center gap-3"
                              onClick={() => handleOpenSubNavMobile(index)}
                            >
                              <Icon.CaretLeft />
                              Back
                            </div>
                            <div className="list-nav-item w-full grid grid-cols-2 pt-2 pb-6">
                              <ul>
                                {item?.children?.map(
                                  (child: any, childIndex: number) => (
                                    <li
                                      key={
                                        child?.Url ||
                                        child?.title ||
                                        `child-${childIndex}`
                                      }
                                    >
                                      <Link
                                        href={child?.Url}
                                        className={`link text-secondary duration-300 ${
                                          pathname === child?.Url
                                            ? "active"
                                            : ""
                                        }`}
                                      >
                                        {child?.title}
                                      </Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          </div>
                        </li>
                      ) : (
                        <li
                          key={keyBase}
                          className={`${
                            openSubNavMobile === index ? "open" : ""
                          }`}
                          onClick={() => handleOpenSubNavMobile(index)}
                        >
                          <Link
                            href={"/product"}
                            className="text-xl font-semibold flex items-center justify-between mt-5"
                          >
                            {item?.title}
                            <span className="text-right">
                              <Icon.CaretRight size={20} />
                            </span>
                          </Link>
                          <div className="sub-nav-mobile">
                            <div
                              className="back-btn flex items-center gap-3"
                              onClick={() => handleOpenSubNavMobile(4)}
                            >
                              <Icon.CaretLeft />
                              Back
                            </div>
                            <div className="list-nav-item w-full pt-3 pb-12">
                              <div className="nav-link grid grid-cols-2 gap-5 gap-y-6 justify-between gap-[1rem]">
                                {menuData?.map(
                                  (catItem: any, catIndex: number) => (
                                    <div
                                      className="nav-item"
                                      key={
                                        catItem?.productCategoryID ||
                                        catItem?.categoryName ||
                                        `cat-${catIndex}`
                                      }
                                    >
                                      <div className="text-button-uppercase pb-1">
                                        {catItem?.categoryName}
                                      </div>
                                      <ul>
                                        {(expandedCategories[
                                          catItem?.productCategoryID
                                        ]
                                          ? catItem?.subcategoryData
                                          : (
                                              catItem?.subcategoryData ?? []
                                            ).slice(0, 4)
                                        ).map((sub: any, subIndex: number) => (
                                          <li
                                            key={
                                              sub?.subcatgeoryID ||
                                              sub?.subcatgeoryName ||
                                              `sub-${subIndex}`
                                            }
                                          >
                                            <div
                                              onClick={() =>
                                                handleGenderClick(
                                                  catItem?.productCategoryID,
                                                  sub?.subcatgeoryID,
                                                  sub?.subcatgeoryName
                                                )
                                              }
                                              className="link text-secondary cursor-pointer"
                                            >
                                              {sub?.subcatgeoryName}
                                            </div>
                                          </li>
                                        ))}
                                        {catItem?.subcategoryData?.length >
                                          4 && (
                                          <li>
                                            <div
                                              onClick={() =>
                                                toggleViewAll(
                                                  catItem?.productCategoryID
                                                )
                                              }
                                              className="link text-secondary cursor-pointer font-bold"
                                            >
                                              {expandedCategories[
                                                catItem?.productCategoryID
                                              ]
                                                ? "Show Less"
                                                : "View All"}
                                            </div>
                                          </li>
                                        )}
                                      </ul>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuOne;
