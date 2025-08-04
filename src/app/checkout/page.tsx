"use client";
import React, { useEffect, useState } from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useCart } from "@/context/CartContext";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { AddressContent } from "../my-account/TabContent";
import Axios from "@/Functions/Axios";
import { API_URL } from "@/Constant";
import { toast } from "react-toastify";

// Spinner loader component
const Spinner = ({ className = "" }: { className?: string }) => (
  <svg
    className={`animate-spin h-5 w-5 text-white ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
    ></path>
  </svg>
);

const Checkout = () => {
  const searchParams = useSearchParams();
  const discount = Number(searchParams.get("discount") || 0);
  const ship = Number(searchParams.get("ship") || 0);

  const { cartId, cartState } = useCart();
  const [totalCart, setTotalCart] = useState<number>(0);
  const [activePayment, setActivePayment] = useState<string>("credit-card");
  const [activeAddress, setactiveAddress] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handlePayment = async () => {
    if (!activeAddress) {
      toast.error("Please select a shipping address.");
      return;
    }

    try {
      setIsLoading(true);
      const response = await Axios.post(`${API_URL}/api/public/user/createorder`, {
        cartID: cartId,
        addressID: activeAddress,
        cartItem: JSON.stringify(cartState.cartArray),
      });
      if (response.data?.success) {

        const link = response.data.data;
        window.open(link, '_blank');

        toast.success("Order created successfully!");
        // Redirect if needed
        // router.push(`/payment/${response.data.orderID}`);
      } else {
        toast.error(response.data?.message || "Something went wrong. Please try again.");
      }
    } catch (error: any) {
      console.error("Payment Error:", error);
      toast.error(error?.response?.data?.message || "Failed to create order. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const total = cartState.cartArray.reduce(
      (acc, item) =>
        acc + Number(item.productPrice || 0) * Number(item.quantity || 1),
      0
    );
    setTotalCart(total);
  }, [cartState.cartArray]);

  return (
    <>
      <div className="breadcrumb-block style-img">
        <div className="breadcrumb-main bg-linear overflow-hidden">
          <div className="container lg:pt-[134px] pt-24 pb-10 relative">
            <div className="main-content w-full h-full flex flex-col items-center justify-center relative z-[1]">
              <div className="text-content">
                <div className="heading2 text-center">Checkout</div>
                <div className="link flex items-center justify-center gap-1 caption1 mt-3">
                  <Link href="/">Homepage</Link>
                  <Icon.CaretRight size={14} className="text-secondary2" />
                  <div className="text-secondary2 capitalize">Checkout</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cart-block md:py-20 py-10">
        <div className="container">
          <div className="content-main flex flex-col-reverse lg:flex-row justify-between gap-10">
            <div className="left w-full lg:w-1/2">
             

              <div className="information mt-5">
                <div className="heading5">Information</div>
                <div className="form-checkout mt-5">
                  <AddressContent
                    activeTab="address"
                    setactiveAddressid={setactiveAddress}
                    activeAddressid={activeAddress}
                  />
                             
                  <div
                    className="block-button md:mt-10 mt-6 relative"
                    onClick={!isLoading ? handlePayment : undefined}
                  >
                    <button
                      className="button-main w-full flex items-center justify-center"
                      disabled={isLoading}
                    >
                      {isLoading && <Spinner className="mr-2" />}
                      Proceed To Payment
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="right w-full lg:w-5/12">
              <div className="checkout-block">
                <div className="heading5 pb-3">Your Order</div>
                <div className="list-product-checkout">
                  {cartState.cartArray.length < 1 ? (
                    <p className="text-button pt-3">No product in cart</p>
                  ) : (
                    cartState.cartArray.map((product, index) => (
                      <div
                        key={product.id || index}
                        className="item flex items-center justify-between w-full pb-5 border-b border-line gap-6 mt-5"
                      >
                        <div className="bg-img w-[100px] aspect-square flex-shrink-0 rounded-lg overflow-hidden">
                          <Image
                            src={
                              product.thumbImage ??
                              product.productImages?.[0] ??
                              "/placeholder.jpg"
                            }
                            width={500}
                            height={500}
                            alt="img"
                            className="w-full h-full"
                          />
                        </div>
                        <div className="flex items-center justify-between w-full">
                          <div>
                            <div className="name text-title">{product.productName}</div>
                            <div className="caption1 text-secondary mt-2">
                              <span className="color capitalize">
                                {product.selectedColor || product.variation?.[0]?.color}
                              </span>
                            </div>
                          </div>
                          <div className="text-title">
                            <span className="quantity">{product.quantity ?? 1}</span>
                            <span className="px-1">x</span>
                            <span>₹{product.productPrice}.00</span>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <div className="discount-block py-5 flex justify-between border-b border-line">
                  <div className="text-title">Discounts</div>
                  <div className="text-title">-₹{discount}.00</div>
                </div>
                <div className="ship-block py-5 flex justify-between border-b border-line">
                  <div className="text-title">Shipping</div>
                  <div className="text-title">
                    {ship === 0 ? "Free" : `₹${ship}.00`}
                  </div>
                </div>
                <div className="total-cart-block pt-5 flex justify-between">
                  <div className="heading5">Total</div>
                  <div className="heading5 total-cart">
                    ₹{totalCart - discount + ship}.00
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

export default Checkout;
