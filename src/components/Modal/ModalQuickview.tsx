"use client";

import React, { useState } from "react";
import Image from "next/image";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useModalQuickviewContext } from "@/context/ModalQuickviewContext";

const ModalQuickview = () => {
  const { selectedProduct, closeQuickview } = useModalQuickviewContext();

  return (
    <>
      <div className={`modal-quickview-block`} onClick={closeQuickview}>
        <div
          className={`modal-quickview-main py-6 ${
            selectedProduct !== null ? "open" : ""
          }`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="flex h-full max-md:flex-col-reverse gap-y-6">
            <div className="left lg:w-[388px] md:w-[300px] flex-shrink-0 px-6">
              <div className="list-img max-md:flex items-center gap-4">
                {(selectedProduct?.urlimages ?? selectedProduct?.images)?.map(
                  (item, index) => (
                    <div
                      className="bg-img w-full aspect-[3/4] max-md:w-[150px] max-md:flex-shrink-0 rounded-[20px] overflow-hidden md:mt-6"
                      key={index}
                    >
                      <Image
                        src={item?.filePath ?? item}
                        width={1500}
                        height={2000}
                        alt={`Product image ${index + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="right w-full px-4">
              <div className="heading pb-6 px-4 flex items-center justify-between relative">
                <div className="heading5">Quick View</div>
                <div
                  className="close-btn absolute right-0 top-0 w-6 h-6 rounded-full bg-surface flex items-center justify-center duration-300 cursor-pointer hover:bg-black hover:text-white"
                  onClick={closeQuickview}
                >
                  <Icon.X size={14} />
                </div>
              </div>
              <div className="product-infor px-4">
                <div className="flex justify-between">
                  <div>
                    <div className="caption2 text-secondary font-semibold uppercase">
                      {selectedProduct?.type}
                    </div>
                    <div className="heading4 mt-1">
                      {selectedProduct?.name ?? selectedProduct?.title}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 flex-wrap mt-5 pb-6 border-b border-line">
                  <div className="desc text-secondary mt-3">
                    {selectedProduct?.description && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: selectedProduct?.description,
                        }}
                      />
                    )}
                  </div>
                </div>
                <div className="list-action mt-6">
                  <div className="flex items-center flex-wrap lg:gap-20 gap-8 gap-y-4 mt-5"></div>
                  <div className="more-infor mt-6">
                    <div className="flex items-center gap-1 mt-3">
                      <div className="text-title">SKU:</div>
                      <div className="text-secondary">
                        {selectedProduct?.sku ?? selectedProduct?.productSku}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mt-3">
                      <div className="text-title">Categories:</div>
                      <div className="text-secondary">
                        {selectedProduct?.category}, {selectedProduct?.gender}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mt-3">
                      <div className="text-title">Tag:</div>
                      <div className="text-secondary">
                        {selectedProduct?.type}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalQuickview;
