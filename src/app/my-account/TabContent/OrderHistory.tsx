"use client";
import { API_URL } from "@/Constant";
import Axios from "@/Functions/Axios";
import { ProductType } from "@/type/ProductType";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";

type TabContent = {
  activeTab: string;
  setOpenDetail: (order: OrderObject) => void;
};
export interface CartItem extends ProductType {
  productPrice: string;
  range?: ReactNode;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}
export type OrderObject = {
  addressID: string;
  cartItem: CartItem[];
  orderID: number;
  payMethod: string;
  paymentStatus: string;
  placedON: string;
};

const OrderHistory: React.FC<TabContent> = ({ activeTab, setOpenDetail }) => {
  const [activeOrders, setActiveOrders] = useState<string>("all");
  const [loading, setLoading] = useState<boolean>(true);
  const [allOrders, setAllOrders] = useState<OrderObject[]>([]);
  const [visibleOrders, setVisibleOrders] = useState<OrderObject[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = {
          data: {
            data: [],
          },
        };

        var data = res.data.data.map((item: any) => {
          var cartItem = JSON.parse(item.cartItem);
          return {
            ...item,
            cartItem,
          };
        });
        setAllOrders(data || []);
        setVisibleOrders(data || []);
      } catch (error) {
        console.error("Failed to fetch order data", error);
        toast.error("Unable to fetch order data.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleActiveOrders = (status: string) => {
    setActiveOrders(status);
    if (status === "all") {
      setVisibleOrders(allOrders);
    } else {
      const filtered = allOrders.filter(
        (order) => order.paymentStatus === status
      );
      setVisibleOrders(filtered);
    }
  };

  const orderTabs = [
    "all",
    "Processed",
    "paid",
    "delivery",
    "completed",
    "canceled",
  ];

  return (
    <div className={activeTab === "orders" ? "block" : "hidden"}>
      <div className="text-content overflow-hidden w-full p-7 border border-line rounded-xl">
        <h6 className="heading6">Your Orders</h6>
        <div className="w-full overflow-x-auto">
          <div className="menu-tab grid grid-cols-6 max-lg:w-[600px] border-b border-line mt-3">
            {orderTabs.map((item, index) => (
              <button
                key={index}
                className={`item relative px-3 py-2.5 text-secondary text-center duration-300 hover:text-black border-b-2 ${
                  activeOrders === item
                    ? "active border-black"
                    : "border-transparent"
                }`}
                onClick={() => handleActiveOrders(item)}
              >
                <span className="relative text-button z-[1] capitalize">
                  {item}
                </span>
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="mt-5 text-center">Loading...</div>
        ) : visibleOrders.length === 0 ? (
          <div className="mt-5 text-center text-secondary">
            No orders found.
          </div>
        ) : (
          <div className="list_order">
            {visibleOrders.map((order: OrderObject) => (
              <div
                key={order.orderID}
                className="order_item mt-5 border border-line rounded-lg box-shadow-xs"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 p-5 border-b border-line">
                  <div className="flex items-center gap-2">
                    <strong className="text-title">Order Number:</strong>
                    <strong className="order_number text-button uppercase">
                      {order.orderID}
                    </strong>
                  </div>
                  <div className="flex items-center gap-2">
                    <strong className="text-title">Order status:</strong>
                    <span className="tag px-4 py-1.5 rounded-full bg-opacity-10 bg-purple text-purple caption1 font-semibold capitalize">
                      {order.paymentStatus}
                    </span>
                  </div>
                </div>

                <div className="list_prd px-5">
                  {/* You would ideally map cart items here, assuming cartItem is parsed JSON */}

                  {order.cartItem.map((item: CartItem, index: number) => {
                    return (
                      <div
                        className="prd_item flex flex-wrap items-center justify-between gap-3 py-5 border-b border-line"
                        key={index}
                      >
                        <Link
                          href={`/product/default?id=${item.productsID}`}
                          className="flex items-center gap-5"
                        >
                          <div className="bg-img flex-shrink-0 md:w-[100px] w-20 aspect-square rounded-lg overflow-hidden">
                            <Image
                              src={
                                item.thumbImage ??
                                "/images/product/1000x1000.png"
                              }
                              width={1000}
                              height={1000}
                              alt={"Product image"}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="prd_name text-title">
                              {item.productName}
                            </div>
                            <div className="caption1 text-secondary mt-2">
                              <span className="prd_size uppercase">
                                {item.productSku}
                              </span>
                            </div>
                          </div>
                        </Link>
                        <div className="text-title">
                          <span className="prd_quantity">{item.quantity}</span>
                          <span> X </span>
                          <span className="prd_price">₹{item.price}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-wrap gap-4 p-5">
                  <button
                    className="button-main"
                    onClick={() => setOpenDetail(order)}
                  >
                    Order Details
                  </button>
                  <button className="button-main bg-surface border border-line hover:bg-black text-black hover:text-white">
                    Cancel Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderHistory;
