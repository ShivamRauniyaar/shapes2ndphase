"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import type { ProductType } from "@/type/ProductType";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useCart } from "@/context/CartContext";
import { useModalCartContext } from "@/context/ModalCartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useCompare } from "@/context/CompareContext";
import { useModalQuickviewContext } from "@/context/ModalQuickviewContext";
import { useRouter } from "next/navigation";
import Rate from "../Other/Rate";

interface ProductProps {
  data: ProductType;
  type?: string;
  style?: string;
  isRedirect?: boolean;
  isAddToCard?: boolean;
  isBreadCrumb?: boolean;
}

const Product: React.FC<ProductProps> = ({
  data,
  type,
  style,
  isRedirect = true,
  isAddToCard = true,
  isBreadCrumb,
}) => {
  const [activeColor, setActiveColor] = useState<string>("");
  const [activeSize, setActiveSize] = useState<string>("");
  const [openQuickShop, setOpenQuickShop] = useState<boolean>(false);
  const { addToCart, updateCart, cartState } = useCart();
  const { openModalCart } = useModalCartContext();
  const { wishlistState } = useWishlist();
  const { compareState } = useCompare();
  const [isExpanded, setIsExpanded] = useState(false);
  const wordLimit = 100;
  const textDescription = data.description ?? data?.productDescription;

  const shouldTruncate = textDescription?.length > wordLimit;
  const displayedText = isExpanded
    ? textDescription
    : textDescription?.slice(0, wordLimit) + (shouldTruncate ? "..." : "");

  const { openQuickview } = useModalQuickviewContext();
  const router = useRouter();

  const handleActiveColor = (item: string) => {
    setActiveColor(item);
  };

  const handleActiveSize = (item: string) => {
    setActiveSize(item);
  };

  const handleAddToCart = () => {
    if (!cartState.cartArray.find((item) => item.id === data.id)) {
      addToCart({ ...data });
      updateCart(data.id, data.quantityPurchase, activeSize, activeColor);
    } else {
      updateCart(data.id, data.quantityPurchase, activeSize, activeColor);
    }
    openModalCart();
  };

  const handleAddToWishlist = () => {};

  const handleAddToCompare = () => {};

  const handleQuickviewOpen = () => {
    openQuickview(data);
  };

  const handleDetailProduct = (productId: any) => {
    if (isRedirect) {
      router.push(`/product/default?id=${productId}`);
    }
  };

  const percentSale = Math.floor(100 - (data.price / data.originPrice) * 100);
  const percentSold = Math.floor((data.sold / data.quantity) * 100);

  const firstThumbImage = data.thumbImage
    ? data.thumbImage
    : data?.images?.[0]?.src
    ? data?.images?.[0]?.src
    : "";

  const secondThumbImage = data.thumbImage
    ? data.thumbImage
    : data?.images?.[0]?.src
    ? data?.images?.[0]?.src
    : "";

  return (
    <>
      {type === "grid" ? (
        <div className={`product-item grid-type ${style}`}>
          <div
            onClick={() => handleDetailProduct(data.productsID)}
            className={`product-main  ${
              isRedirect ? "cursor-pointer" : "cursor-auto"
            }  block`}
          >
            <div className="product-thumb bg-white relative overflow-hidden rounded-2xl">
              {style === "style-1" ||
              style === "style-3" ||
              style === "style-4" ? (
                <div className="list-action-right absolute top-3 right-3 max-lg:hidden">
                  {style === "style-4" && (
                    <div
                      className={`add-cart-btn w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white duration-300 relative mb-2 ${
                        compareState.compareArray.some(
                          (item) => item.id === data.id
                        )
                          ? "active"
                          : ""
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart();
                      }}
                    >
                      <div className="tag-action bg-black text-white caption2 px-1.5 py-0.5 rounded-sm">
                        Add To Cart
                      </div>
                      <Icon.ShoppingBagOpen size={20} />
                    </div>
                  )}

                  {style === "style-3" || style === "style-4" ? (
                    <div
                      className={`quick-view-btn w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white duration-300 relative mt-2 ${
                        compareState.compareArray.some(
                          (item) => item.id === data.id
                        )
                          ? "active"
                          : ""
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleQuickviewOpen();
                      }}
                    >
                      <div className="tag-action bg-black text-white caption2 px-1.5 py-0.5 rounded-sm">
                        Quick View
                      </div>
                      <Icon.Eye size={20} />
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              ) : (
                <></>
              )}
              <div className="flex justify-center">
                {activeColor ? (
                  <>
                    <div
                      style={{
                        backgroundImage: `url(${firstThumbImage})`,
                        width: "100px",
                        height: "100px",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                      className="image-aligner"
                    ></div>
                  </>
                ) : (
                  <>
                    <>
                      <div
                        style={{
                          backgroundImage: `url(${secondThumbImage})`,
                          width: "300px",
                          height: "300px",
                          backgroundSize: "contain",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                        className="image-aligner"
                      ></div>
                    </>
                  </>
                )}
              </div>

              {style === "style-2" || style === "style-4" ? (
                <div className="list-size-block flex items-center justify-center gap-4 absolute bottom-0 left-0 w-full h-8">
                  {data.sizes.map((item, index) => (
                    <strong
                      key={index}
                      className="size-item text-xs font-bold uppercase"
                    >
                      {item}
                    </strong>
                  ))}
                </div>
              ) : (
                <></>
              )}
              {style === "style-1" || style === "style-3" ? (
                <div
                  className={`list-action ${
                    style === "style-1" ? "flex justify-center" : ""
                  } px-5 absolute w-full bottom-5 max-lg:hidden`}
                >
                  {style === "style-1" && (
                    <div className="flex gap-2">
                      <div
                        className="quick-view-btn w-full p-2 text-button-uppercase py-2 text-center rounded-full duration-300 bg-white hover:bg-black hover:text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleQuickviewOpen();
                        }}
                      >
                        Quick View
                      </div>
                      {isAddToCard && (
                        <div
                          className={`add-cart-btn w-9 h-9 flex items-center justify-center rounded-full bg-white duration-300 relative ${
                            compareState.compareArray.some(
                              (item) => item.id === data.id
                            )
                              ? "active"
                              : ""
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddToCart();
                          }}
                        >
                          <div className="tag-action bg-black text-white caption2 px-1.5 py-0.5 rounded-sm">
                            Add To Cart
                          </div>
                          <Icon.ShoppingBagOpen size={20} />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <></>
              )}
              {style === "style-2" || style === "style-5" ? (
                <>
                  <div
                    className={`list-action flex items-center justify-center gap-3 px-5 absolute w-full ${
                      style === "style-2" ? "bottom-12" : "bottom-5"
                    } max-lg:hidden`}
                  >
                    {style === "style-2" && (
                      <div
                        className={`add-cart-btn w-9 h-9 flex items-center justify-center rounded-full bg-white duration-300 relative ${
                          compareState.compareArray.some(
                            (item) => item.id === data.id
                          )
                            ? "active"
                            : ""
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToCart();
                        }}
                      >
                        <div className="tag-action bg-black text-white caption2 px-1.5 py-0.5 rounded-sm">
                          Add To Cart
                        </div>
                        <Icon.ShoppingBagOpen size={20} />
                      </div>
                    )}

                    <div
                      className={`quick-view-btn w-9 h-9 flex items-center justify-center rounded-full bg-white duration-300 relative ${
                        compareState.compareArray.some(
                          (item) => item.id === data.id
                        )
                          ? "active"
                          : ""
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleQuickviewOpen();
                      }}
                    >
                      <div className="tag-action bg-black text-white caption2 px-1.5 py-0.5 rounded-sm">
                        Quick View
                      </div>
                      <Icon.Eye size={20} />
                    </div>
                    {style === "style-5" && data.action !== "add to cart" && (
                      <div
                        className={`quick-shop-block absolute left-5 right-5 bg-white p-5 rounded-[20px] ${
                          openQuickShop ? "open" : ""
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <div className="list-size flex items-center justify-center flex-wrap gap-2">
                          {data.sizes.map((item, index) => (
                            <div
                              className={`size-item w-10 h-10 rounded-full flex items-center justify-center text-button bg-white border border-line ${
                                activeSize === item ? "active" : ""
                              }`}
                              key={index}
                              onClick={() => handleActiveSize(item)}
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                        <div
                          className="button-main w-full text-center rounded-full py-3 mt-4"
                          onClick={() => {
                            handleAddToCart();
                            setOpenQuickShop(false);
                          }}
                        >
                          Add To cart
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <></>
              )}
              <div className="list-action-icon flex items-center justify-center gap-2 absolute w-full bottom-3 z-[1] lg:hidden">
                <div
                  className="quick-view-btn w-9 h-9 flex items-center justify-center rounded-lg duration-300 bg-white hover:bg-black hover:text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleQuickviewOpen();
                  }}
                >
                  <Icon.Eye className="text-lg" />
                </div>
              </div>
            </div>
            <div className="product-infor mt-4 lg:mb-7">
              <div className="product-sold sm:pb-4 pb-2">
                <div className="progress bg-line h-1.5 w-full rounded-full overflow-hidden relative">
                  <div
                    className={`progress-sold bg-red absolute left-0 top-0 h-full`}
                    style={{ width: `${percentSold}%` }}
                  ></div>
                </div>
                <div className="flex items-center justify-between gap-3 gap-y-1 flex-wrap mt-2">
                  <div className="text-button-uppercase">
                    <span className="text-secondary2 max-sm:text-xs">
                      Sold:{" "}
                    </span>
                    <span className="max-sm:text-xs">{data.sold}</span>
                  </div>
                  <div className="text-button-uppercase">
                    <span className="text-secondary2 max-sm:text-xs">
                      Available:{" "}
                    </span>
                    <span className="max-sm:text-xs">
                      {(Number(data.quantity) || 0) - (Number(data.sold) || 0)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="product-name text-title duration-300">
                {data?.name ?? data?.productName ?? data?.title}
              </div>
              <span>
                <div
                  dangerouslySetInnerHTML={{
                    __html: displayedText,
                  }}
                />

                {shouldTruncate && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsExpanded(!isExpanded);
                    }}
                    // className="text-blue-500 ml-2"
                    style={{
                      color: "red",
                    }}
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                )}
              </span>

              {style === "style-5" && (
                <>
                  {data.action === "add to cart" ? (
                    <div
                      className="add-cart-btn w-full text-button-uppercase py-2.5 text-center mt-2 rounded-full duration-300 bg-white border border-black hover:bg-black hover:text-white max-lg:hidden"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart();
                      }}
                    >
                      Add To Cart
                    </div>
                  ) : (
                    <div
                      className="quick-shop-btn text-button-uppercase py-2.5 text-center mt-2 rounded-full duration-300 bg-white border border-black hover:bg-black hover:text-white max-lg:hidden"
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenQuickShop(!openQuickShop);
                      }}
                    >
                      Quick Shop
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        <>
          {type === "list" ? (
            <>
              <div className="product-item list-type">
                <div className="product-main cursor-pointer flex lg:items-center sm:justify-between gap-7 max-lg:gap-5">
                  <div
                    onClick={() => handleDetailProduct(data.id)}
                    className="product-thumb bg-white relative overflow-hidden rounded-2xl block max-sm:w-1/2"
                  >
                    {data.new && (
                      <div className="product-tag text-button-uppercase bg-green px-3 py-0.5 inline-block rounded-full absolute top-3 left-3 z-[1]">
                        New
                      </div>
                    )}
                    {data.sale && (
                      <div className="product-tag text-button-uppercase text-white bg-red px-3 py-0.5 inline-block rounded-full absolute top-3 left-3 z-[1]">
                        Sale
                      </div>
                    )}
                    <div className="product-img w-full aspect-[3/4] rounded-2xl overflow-hidden">
                      {/* {data.thumbImage.map((img, index) => (
                        <Image
                          key={index}
                          src={img || "/placeholder.svg"}
                          width={500}
                          height={500}
                          priority={true}
                          alt={data.name}
                          className="w-full h-full object-cover duration-700"
                        />
                      ))} */}
                    </div>
                    <div className="list-action px-5 absolute w-full bottom-5 max-lg:hidden">
                      <div
                        className={`quick-shop-block absolute left-5 right-5 bg-white p-5 rounded-[20px] ${
                          openQuickShop ? "open" : ""
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <div className="list-size flex items-center justify-center flex-wrap gap-2">
                          {data.sizes.map((item, index) => (
                            <div
                              className={`size-item ${
                                item !== "freesize" ? "w-10 h-10" : "h-10 px-4"
                              } flex items-center justify-center text-button bg-white rounded-full border border-line ${
                                activeSize === item ? "active" : ""
                              }`}
                              key={index}
                              onClick={() => handleActiveSize(item)}
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                        <div
                          className="button-main w-full text-center rounded-full py-3 mt-4"
                          onClick={() => {
                            handleAddToCart();
                            setOpenQuickShop(false);
                          }}
                        >
                          Add To cart
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:items-center gap-7 max-lg:gap-4 max-lg:flex-wrap max-lg:w-full max-sm:flex-col max-sm:w-1/2">
                    <div className="product-infor max-sm:w-full">
                      <div
                        onClick={() => handleDetailProduct(data.id)}
                        className="product-name heading6 inline-block duration-300"
                      >
                        {data.name}
                      </div>
                      <div className="product-price-block flex items-center gap-2 flex-wrap mt-2 duration-300 relative z-[1]">
                        <div className="product-price text-title">
                          ₹{data.price}.00
                        </div>
                        <div className="product-origin-price caption1 text-secondary2">
                          <del>₹{data.originPrice}.00</del>
                        </div>
                        {data.originPrice && (
                          <div className="product-sale caption1 font-medium bg-green px-3 py-0.5 inline-block rounded-full">
                            -{percentSale}%
                          </div>
                        )}
                      </div>
                      {data.variation.length > 0 &&
                      data.action === "add to cart" ? (
                        <div className="list-color max-md:hidden py-2 mt-5 mb-1 flex items-center gap-3 flex-wrap duration-300">
                          {data.variation.map((item, index) => (
                            <div
                              key={index}
                              className={`color-item w-8 h-8 rounded-full duration-300 relative`}
                              style={{ backgroundColor: `${item.colorCode}` }}
                            >
                              <div className="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">
                                {item.color}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <>
                          {data.variation.length > 0 &&
                          data.action === "quick shop" ? (
                            <>
                              <div className="list-color flex items-center gap-2 flex-wrap mt-5">
                                {data.variation.map((item, index) => (
                                  <div
                                    className={`color-item w-12 h-12 rounded-xl duration-300 relative ${
                                      activeColor === item.color ? "active" : ""
                                    }`}
                                    key={index}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleActiveColor(item.color);
                                    }}
                                  >
                                    <Image
                                      src={
                                        item.colorImage || "/placeholder.svg"
                                      }
                                      width={100}
                                      height={100}
                                      alt="color"
                                      priority={true}
                                      className="rounded-xl"
                                    />
                                    <div className="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">
                                      {item.color}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </>
                          ) : (
                            <></>
                          )}
                        </>
                      )}
                      <div className="text-secondary desc mt-5 max-sm:hidden">
                        {data.description}
                      </div>
                    </div>
                    <div className="action w-fit flex flex-col items-center justify-center">
                      <div
                        className="quick-shop-btn button-main whitespace-nowrap py-2 px-9 max-lg:px-5 rounded-full bg-white text-black border border-black hover:bg-black hover:text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenQuickShop(!openQuickShop);
                        }}
                      >
                        Quick Shop
                      </div>
                      <div className="list-action-right flex items-center justify-center gap-3 mt-4">
                        <div
                          className="quick-view-btn-list w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white duration-300 relative"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleQuickviewOpen();
                          }}
                        >
                          <div className="tag-action bg-black text-white caption2 px-1.5 py-0.5 rounded-sm">
                            Quick View
                          </div>
                          <Icon.Eye size={18} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      )}

      {type === "marketplace" ? (
        <div
          className="product-item style-marketplace p-4 border border-line rounded-2xl"
          onClick={() => handleDetailProduct(data.id)}
        >
          <div className="bg-img relative w-full">
            <Image
              className="w-full aspect-square"
              width={5000}
              height={5000}
              src={data.thumbImage[0] || "/placeholder.svg"}
              alt="img"
            />
            <div className="list-action flex flex-col gap-1 absolute top-0 right-0">
              <span
                className={`add-wishlist-btn w-8 h-8 bg-white flex items-center justify-center rounded-full box-shadow-sm duration-300 ${
                  wishlistState.wishlistArray.some(
                    (item) => item.id === data.id
                  )
                    ? "active"
                    : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToWishlist();
                }}
              >
                {wishlistState.wishlistArray.some(
                  (item) => item.id === data.id
                ) ? (
                  <>
                    <Icon.Heart
                      size={18}
                      weight="fill"
                      className="text-white"
                    />
                  </>
                ) : (
                  <>
                    <Icon.Heart size={18} />
                  </>
                )}
              </span>
              <span
                className={`compare-btn w-8 h-8 bg-white flex items-center justify-center rounded-full box-shadow-sm duration-300 ${
                  compareState.compareArray.some((item) => item.id === data.id)
                    ? "active"
                    : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCompare();
                }}
              >
                <Icon.Repeat size={18} className="compare-icon" />
                <Icon.CheckCircle size={20} className="checked-icon" />
              </span>
              <span
                className="quick-view-btn w-8 h-8 bg-white flex items-center justify-center rounded-full box-shadow-sm duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  handleQuickviewOpen();
                }}
              >
                <Icon.Eye />
              </span>
            </div>
          </div>
          <div className="product-infor mt-4">
            <span className="text-title">{data.name}</span>
            <div className="flex gap-0.5 mt-1">
              <Rate currentRate={data.rate} size={16} />
            </div>
            <span className="text-title inline-block mt-1">
              ${data.price}.00
            </span>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Product;
