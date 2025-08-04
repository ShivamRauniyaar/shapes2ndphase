"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { ProductType } from "@/type/ProductType";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Scrollbar } from "swiper/modules";
import "swiper/css/bundle";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import SwiperCore from "swiper/core";
import { useCart } from "@/context/CartContext";
import { useModalCartContext } from "@/context/ModalCartContext";
import Image from "next/image";

SwiperCore.use([Navigation, Thumbs]);

interface Props {
  data: any;
  productId: string | number | null;
  parentProductData?: any;
}

const Default: React.FC<Props> = ({ data, productId, parentProductData }) => {
  const swiperRef: any = useRef();
  const [openPopupImg, setOpenPopupImg] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const [activeColor, setActiveColor] = useState<string>("");
  const [visibleProductData, setVisibleProductData] =
    useState<any>(parentProductData);
  const { addToCart, updateCart, cartState } = useCart();
  const { openModalCart } = useModalCartContext();

  const variationsData = useMemo(() => {
    try {
      return data?.VariantsData?.data?.[0]?.variantsTyepes
        ? JSON.parse(data?.VariantsData?.data?.[0]?.variantsTyepes)
        : [];
    } catch (error) {
      console.error("Failed to parse variantsTyepes:", error);
      return [];
    }
  }, [data?.VariantsData?.data?.[0]?.variantsTyepes]);

  const handleSwiper = (swiper: SwiperCore) => {
    setThumbsSwiper(swiper);
  };
  const handleAddToCart = (visibleProductData: ProductType) => {
    var ID = visibleProductData.isVariant
      ? visibleProductData.product_variants_id
      : visibleProductData.productsID;
    var FindProduct = cartState.cartArray.find(
      (item) => item.productsID === ID || item.product_variants_id === ID
    );
    if (!FindProduct) {
      addToCart({ ...visibleProductData });
      // updateCart(
      //   visibleProductData.id,
      //   visibleProductData.quantityPurchase,
      //   "activeSize",
      //   activeColor
      // );
    } else {
      updateCart(
        String(ID),
        FindProduct.quantity + 1,
        visibleProductData.productSku ?? "",
        "activeSize",
        activeColor
      );
    }
    openModalCart();
  };
  const handleActiveColor = (item: string) => {
    setActiveColor(item);
    const variantFilter = data?.VariantsData?.data?.filter(
      (variantItem: { variantType: any }) => {
        return String(variantItem?.variantType) === String(item);
      }
    );
    setVisibleProductData((prev: any) => ({
      ...prev,
      ...variantFilter?.[0],
      ...(variantFilter?.[0]?.productImages?.length > 0
        ? { productImages: variantFilter?.[0]?.productImages }
        : { productImages: prev.productImages }),
      productName: variantFilter?.[0]?.product_variant_name,
      productSku : variantFilter?.[0]?.product_variant_sku,
      price: variantFilter?.[0]?.product_variant_price,
      productDescription: variantFilter?.[0]?.product_variant_description,
      isVariant: true,
    }));
  };

  useEffect(() => {
    if (variationsData.length > 0 && !activeColor) {
      const defaultColor = variationsData[0]?.value?.[0]?.label;
      if (defaultColor) {
        handleActiveColor(defaultColor);
      }
    }
  }, [variationsData]);

  return (
    <>
      <div className="product-detail default">
        <div className="featured-product underwear md:py-20 py-10">
          <div className="container flex justify-between gap-y-6 flex-wrap">
            <div className="list-img md:w-1/2 md:pr-[45px] w-full">
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Thumbs]}
                className="mySwiper2 rounded-2xl overflow-hidden"
              >
                {visibleProductData?.productImages?.map(
                  (item: any, index: any) => (
                    <SwiperSlide
                      key={index}
                      onClick={() => {
                        swiperRef.current?.slideTo(index);
                        setOpenPopupImg(true);
                      }}
                    >
                      <div
                        style={{
                          backgroundImage: `url(${item?.thumb_image ?? item})`,
                          width: "600px",
                          height: "600px",
                          backgroundSize: "contain", // Optional: Adjust as needed
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                        className="image-aligner w-full aspect-[3/4] object-cover"
                      ></div>
                    </SwiperSlide>
                  )
                )}
              </Swiper>
              <Swiper
                onSwiper={(swiper) => {
                  handleSwiper(swiper);
                }}
                spaceBetween={0}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[Navigation, Thumbs]}
                className="mySwiper image-picker flex flex-row"
              >
                {visibleProductData?.productImages.map(
                  (item: any, index: any) => (
                    <SwiperSlide key={index} className="image-picker">
                      <div
                        style={{
                          backgroundImage: `url(${item})`,
                          width: "100px",
                          height: "100px",
                          backgroundSize: "contain", // Optional: Adjust as needed
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                        className="image-aligner w-full aspect-[3/4] object-cover rounded-xl"
                      ></div>
                    </SwiperSlide>
                  )
                )}
              </Swiper>
              <div className={`popup-img ${openPopupImg ? "open" : ""}`}>
                <span
                  className="close-popup-btn absolute top-4 right-4 z-[2] cursor-pointer"
                  onClick={() => {
                    setOpenPopupImg(false);
                  }}
                >
                  <Icon.X className="text-3xl text-white" />
                </span>
                <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
                  modules={[Navigation, Thumbs]}
                  navigation={true}
                  loop={false}
                  className="popupSwiper"
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                >
                  {visibleProductData?.productImages.map(
                    (item: any, index: any) => (
                      <SwiperSlide
                        key={index}
                        onClick={() => {
                          setOpenPopupImg(false);
                        }}
                        className="flex justify-center align-center-imp"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignContent: "center",
                          textAlign: "center",
                        }}
                      >
                        <div
                          style={{
                            backgroundImage: `url(${item})`,
                            width: "600px",
                            height: "600px",
                            backgroundSize: "contain", // Optional: Adjust as needed
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                          }}
                          className="image-aligner w-full aspect-[3/4] object-cover rounded-xl"
                        ></div>
                      </SwiperSlide>
                    )
                  )}
                </Swiper>
              </div>
            </div>
            <div className="product-infor md:w-1/2 w-full lg:pl-[15px] md:pl-2">
              <div className="flex justify-between">
                <div>
                  <div className="caption2 text-secondary font-semibold uppercase">
                    {/* {productMain.type} */}
                  </div>
                  <div className="heading4 mt-1">
                    {visibleProductData?.productName}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 flex-wrap mt-5 pb-6 border-b border-line">
                <div className="desc text-secondary mt-3">
                  {visibleProductData?.productDescription}
                </div>
              </div>

              <div className="choose-quantity flex items-center lg:justify-between gap-5 gap-y-3 mt-3">
                <div
                  onClick={() => handleAddToCart(visibleProductData)}
                  className="button-main w-full text-center bg-white text-black border border-black"
                >
                  Add To Cart
                </div>
              </div>

              {variationsData?.length > 0 &&
                variationsData?.map(
                  (
                    item: {
                      thumb_image: any;
                      label: string;
                      value: any;
                      name: {
                        label:
                          | string
                          | number
                          | bigint
                          | boolean
                          | React.ReactElement<
                              any,
                              string | React.JSXElementConstructor<any>
                            >
                          | Iterable<React.ReactNode>
                          | React.ReactPortal
                          | Promise<React.ReactNode>
                          | null
                          | undefined;
                      };
                    },
                    index: React.Key | null | undefined
                  ) => (
                    <div className="list-action mt-6" key={index}>
                      <div className="choose-color">
                        <div className="text-title">
                          {String(item?.name?.label)}:{" "}
                          <span className="text-title color">
                            {activeColor}
                          </span>
                        </div>
                        <div className="list-color flex items-center gap-2 flex-wrap mt-3">
                          {item?.value?.map(
                            (
                              _item: any,
                              index: React.Key | null | undefined
                            ) => (
                              <div
                                className={`color-item w-12 h-12 rounded-xl duration-300 relative ${
                                  activeColor === _item.label ? "active" : ""
                                }`}
                                key={index}
                                datatype={_item.label}
                                onClick={() => {
                                  handleActiveColor(_item.label);
                                }}
                              >
                                <Image
                                  src={_item.thumb_image ?? ""}
                                  width={100}
                                  height={100}
                                  alt="color"
                                  className="rounded-xl"
                                />
                                <div className="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">
                                  {_item.label}
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  )
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Default;
