"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  HouseLine,
  Package,
  Tag,
  GearSix,
  SignOut,
  CaretRight,
  HourglassMedium,
  ReceiptX,
} from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { removeToken } from "@/Functions/Auth";
import { AddressContent, OrderHistory, SettingContent } from "./TabContent";
import { CartItem, OrderObject } from "./TabContent/OrderHistory";
const MyAccount = () => {
  const [activeTab, setActiveTab] = React.useState("dashboard");
  const [First, setFirst] = useState<string>("Tony");
  const [Last, setLast] = useState<string>("");
  const [Email, setEmail] = useState<string>("");

  const [openDetail, setOpenDetail] = React.useState<boolean>(false);
  const [openProductDetail, setopenProductDetail] =
    React.useState<OrderObject | null>(null);

  const handleModal = (order: OrderObject) => {
    setOpenDetail(true);
    setopenProductDetail(order);
  };

  const router = useRouter();

  const handleActiveTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="breadcrumb-block style-img">
        <div className="breadcrumb-main bg-linear overflow-hidden">
          <div className="container lg:pt-[134px] pt-24 pb-10 relative">
            <div className="main-content w-full h-full flex flex-col items-center justify-center relative z-[1]">
              <div className="text-content">
                <div className="heading2 text-center">Dashboard</div>
                <div className="link flex items-center justify-center gap-1 caption1 mt-3">
                  <Link href={"/"}>Homepage</Link>
                  <CaretRight size={14} className="text-secondary2" />
                  <div className="text-secondary2 capitalize">Dashboard</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-block md:py-20 py-10">
        <div className="container">
          <div className="content-main flex gap-y-8 max-md:flex-col w-full">
            <div className="left md:w-1/3 w-full xl:pr-[3.125rem] lg:pr-[28px] md:pr-[16px]">
              <div className="user-infor bg-surface lg:px-7 px-4 lg:py-10 py-5 md:rounded-[20px] rounded-xl">
                <div className="heading flex flex-col items-center justify-center">
                  <div className="avatar">
                 
                    <div className="md:w-[140px] w-[120px] md:h-[140px] h-[120px] rounded-full border-2 border-gray-300 shadow-md flex justify-center items-center bg-white hover:shadow-lg transition-all duration-300">
                      <span className="text-2xl font-semibold text-gray-700">
                        {First?.slice(0, 1)}
                        {Last?.slice(0, 1)}
                      </span>
                    </div>
                  </div>
                  <div className="name heading6 mt-4 text-center">
                    {First} {Last}
                  </div>
                  <div className="mail heading6 font-normal normal-case text-secondary text-center mt-1">
                    {Email}
                  </div>
                </div>
                <div className="menu-tab w-full max-w-none lg:mt-10 mt-6">
                  <div className="flex flex-col w-full gap-1.5">
                    <button
                      className={`flex items-center justify-start gap-3 w-full px-5 py-4 rounded-lg cursor-pointer duration-300 hover:bg-white ${
                        activeTab === "dashboard" ? "bg-white" : ""
                      }`}
                      onClick={() => handleActiveTab("dashboard")}
                    >
                      <HouseLine size={20} />
                      <strong className="heading6">Dashboard</strong>
                    </button>
                    <button
                      className={`flex items-center justify-start gap-3 w-full px-5 py-4 rounded-lg cursor-pointer duration-300 hover:bg-white ${
                        activeTab === "orders" ? "bg-white" : ""
                      }`}
                      onClick={() => handleActiveTab("orders")}
                    >
                      <Package size={20} />
                      <strong className="heading6">History Orders</strong>
                    </button>
                    <button
                      className={`flex items-center justify-start gap-3 w-full px-5 py-4 rounded-lg cursor-pointer duration-300 hover:bg-white ${
                        activeTab === "address" ? "bg-white" : ""
                      }`}
                      onClick={() => handleActiveTab("address")}
                    >
                      <Tag size={20} />
                      <strong className="heading6">My Address</strong>
                    </button>
                    <button
                      className={`flex items-center justify-start gap-3 w-full px-5 py-4 rounded-lg cursor-pointer duration-300 hover:bg-white ${
                        activeTab === "setting" ? "bg-white" : ""
                      }`}
                      onClick={() => handleActiveTab("setting")}
                    >
                      <GearSix size={20} />
                      <strong className="heading6">Setting</strong>
                    </button>
                    <div
                      // href={"/login"}
                      onClick={() => {
                        removeToken();
                        router.push("/login");
                      }}
                      className="flex items-center gap-3 w-full px-5 py-4 rounded-lg cursor-pointer duration-300 hover:bg-white mt-1.5"
                    >
                      <SignOut size={20} />
                      <strong className="heading6">Logout</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right md:w-2/3 w-full pl-2.5">
              {/* Dashboard Tab Content */}
              <div className={activeTab === "dashboard" ? "block" : "hidden"}>
                <div className="overview grid sm:grid-cols-3 gap-5">
                  <div className="item flex items-center justify-between p-5 border border-line rounded-lg box-shadow-xs">
                    <div className="counter">
                      <span className="text-secondary">Awaiting Pickup</span>
                      <h5 className="heading5 mt-1">4</h5>
                    </div>
                    <HourglassMedium className="text-4xl" />
                  </div>
                  <div className="item flex items-center justify-between p-5 border border-line rounded-lg box-shadow-xs">
                    <div className="counter">
                      <span className="text-secondary">Cancelled Orders</span>
                      <h5 className="heading5 mt-1">12</h5>
                    </div>
                    <ReceiptX className="text-4xl" />
                  </div>
                  <div className="item flex items-center justify-between p-5 border border-line rounded-lg box-shadow-xs">
                    <div className="counter">
                      <span className="text-secondary">
                        Total Number of Orders
                      </span>
                      <h5 className="heading5 mt-1">200</h5>
                    </div>
                    <Package className="text-4xl" />
                  </div>
                </div>
                <div className="recent_order pt-5 px-5 pb-2 mt-7 border border-line rounded-xl">
                  <h6 className="heading6">Recent Orders</h6>
                  <div className="list overflow-x-auto w-full mt-5">
                    <table className="w-full max-[1400px]:w-[700px] max-md:w-[700px]">
                      <thead className="border-b border-line">
                        <tr>
                          <th
                            scope="col"
                            className="pb-3 text-left text-sm font-bold uppercase text-secondary whitespace-nowrap"
                          >
                            Order
                          </th>
                          <th
                            scope="col"
                            className="pb-3 text-left text-sm font-bold uppercase text-secondary whitespace-nowrap"
                          >
                            Products
                          </th>
                          <th
                            scope="col"
                            className="pb-3 text-left text-sm font-bold uppercase text-secondary whitespace-nowrap"
                          >
                            Pricing
                          </th>
                          <th
                            scope="col"
                            className="pb-3 text-right text-sm font-bold uppercase text-secondary whitespace-nowrap"
                          >
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="item duration-300 border-b border-line">
                          <th scope="row" className="py-3 text-left">
                            <strong className="text-title">54312452</strong>
                          </th>
                          <td className="py-3">
                            <Link
                              href={"/product/default"}
                              className="product flex items-center gap-3"
                            >
                              <Image
                                src={"/images/product/1000x1000.png"}
                                width={400}
                                height={400}
                                alt="Contrasting sweatshirt"
                                className="flex-shrink-0 w-12 h-12 rounded"
                              />
                              <div className="info flex flex-col">
                                <strong className="product_name text-button">
                                  Contrasting sweatshirt
                                </strong>
                                <span className="product_tag caption1 text-secondary">
                                  Women, Clothing
                                </span>
                              </div>
                            </Link>
                          </td>
                          <td className="py-3 price">₹45.00</td>
                          <td className="py-3 text-right">
                            <span className="tag px-4 py-1.5 rounded-full bg-opacity-10 bg-yellow text-yellow caption1 font-semibold">
                              Pending
                            </span>
                          </td>
                        </tr>
                        <tr className="item duration-300 border-b border-line">
                          <th scope="row" className="py-3 text-left">
                            <strong className="text-title">54312452</strong>
                          </th>
                          <td className="py-3">
                            <Link
                              href={"/product/default"}
                              className="product flex items-center gap-3"
                            >
                              <Image
                                src={"/images/product/1000x1000.png"}
                                width={400}
                                height={400}
                                alt="Faux-leather trousers"
                                className="flex-shrink-0 w-12 h-12 rounded"
                              />
                              <div className="info flex flex-col">
                                <strong className="product_name text-button">
                                  Faux-leather trousers
                                </strong>
                                <span className="product_tag caption1 text-secondary">
                                  Women, Clothing
                                </span>
                              </div>
                            </Link>
                          </td>
                          <td className="py-3 price">₹45.00</td>
                          <td className="py-3 text-right">
                            <span className="tag px-4 py-1.5 rounded-full bg-opacity-10 bg-purple text-purple caption1 font-semibold">
                              Delivery
                            </span>
                          </td>
                        </tr>
                        <tr className="item duration-300 border-b border-line">
                          <th scope="row" className="py-3 text-left">
                            <strong className="text-title">54312452</strong>
                          </th>
                          <td className="py-3">
                            <Link
                              href={"/product/default"}
                              className="product flex items-center gap-3"
                            >
                              <Image
                                src={"/images/product/1000x1000.png"}
                                width={400}
                                height={400}
                                alt="V-neck knitted top"
                                className="flex-shrink-0 w-12 h-12 rounded"
                              />
                              <div className="info flex flex-col">
                                <strong className="product_name text-button">
                                  V-neck knitted top
                                </strong>
                                <span className="product_tag caption1 text-secondary">
                                  Women, Clothing
                                </span>
                              </div>
                            </Link>
                          </td>
                          <td className="py-3 price">₹45.00</td>
                          <td className="py-3 text-right">
                            <span className="tag px-4 py-1.5 rounded-full bg-opacity-10 bg-success text-success caption1 font-semibold">
                              Completed
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Orders Tab Content */}
              <OrderHistory activeTab={activeTab} setOpenDetail={handleModal} />

              <AddressContent activeTab={activeTab} />

              {/* Setting Tab Content */}
              <SettingContent
                activeTab={activeTab}
                setLast={setLast}
                setFirst={setFirst}
                setEmail={setEmail}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Order detail modal */}
      <div
        className={`modal-order-detail-block flex items-center justify-center ${
          openDetail ? "fixed inset-0 bg-black/50 z-50" : "hidden"
        }`}
        style={{ zIndex: "105" }}
        onClick={() => setOpenDetail(false)}
      >
        <div
          className={`modal-order-detail-main w-[95%] max-w-6xl bg-white rounded-2xl shadow-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 ${
            openDetail ? "open" : ""
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Left Side - Order Info */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-gray-800">Order Details</h2>

            <div className="text-sm text-gray-600 space-y-1">
              <p>
                <span className="font-medium text-gray-800">Order placed:</span>{" "}
                {openProductDetail?.placedON}
              </p>
              <p>
                <span className="font-medium text-gray-800">Order number:</span>{" "}
                {openProductDetail?.orderID}
              </p>
            </div>

            <div className="pt-4 border-t">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Ship to
              </h3>
              <p className="text-sm text-gray-700 leading-5">
                Anubhav
                <br />
                A-209, gali no-3
                <br />
                Rama garden, Karawal Nagar
                <br />
                Delhi, Delhi 110094
                <br />
                India
              </p>
            </div>

            <div className="pt-4 border-t">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Payment Method
              </h3>
              <p className="text-sm text-gray-700">
                {" "}
                {openProductDetail?.payMethod}
              </p>
            </div>

            <div className="pt-4 border-t">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Order Summary
              </h3>
              <div className="text-sm text-gray-700 space-y-1">
                <p>
                  Item(s) Subtotal: ₹
                  {(
                    openProductDetail?.cartItem?.reduce(
                      (sum: number, item: CartItem) => sum + Number(item.price),
                      0
                    ) ?? 0
                  )?.toFixed(2)}
                </p>
                <p>Shipping: ₹40.00</p>
                <p className="font-bold text-gray-900">
                  Grand Total: ₹
                  {(
                    (openProductDetail?.cartItem?.reduce(
                      (sum: number, item: CartItem) => sum + Number(item.price),
                      0
                    ) ?? 0) + 40
                  )?.toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Products List */}
          <div className="flex flex-col gap-6 overflow-y-auto max-h-[80vh] pr-2">
            {openProductDetail?.cartItem.map((product: CartItem) => (
              <div
                key={product.id}
                className="flex flex-col md:flex-row items-center gap-4 bg-gray-50 p-4 rounded-xl hover:shadow-md transition-shadow duration-300 cursor-pointer"
              >
                <img
                  src={product.thumbImage}
                  alt={product.productName}
                  className="w-24 h-24 object-contain rounded-lg bg-white"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.productName}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-lg font-bold text-green-600">
                      ₹{Number(product?.price)?.toFixed(2)}
                    </span>
                    <Link href={`/product/default?id=${product.productsID}`}>
                      <button
                        className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
                        style={{ color: "black" }}
                      >
                        View Product
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
