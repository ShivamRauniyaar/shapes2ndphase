"use client";
import React, { useEffect, useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import Axios from "@/Functions/Axios";
import { API_URL } from "@/Constant";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { toast } from "react-toastify";
import { useDeleteModal } from "@/context/DeleteModalContext";

type TabContent = {
  activeTab: string;
  activeAddressid?: string;
  setactiveAddressid?: any;
};
type ShippingAddressType = {
  addressID: string;
  fullName: string;
  phoneNumber: string;
  firstLine: string;
  secondLine?: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  isPrimary?: boolean;
};
const AddressContent: React.FC<TabContent> = ({
  activeTab,
  setactiveAddressid,
  activeAddressid,
}) => {
  const [activeAddress, setActiveAddress] = React.useState<string | null>(
    "shipping"
  );
  const [formdata, setFormData] = React.useState<any>({
    billing: {
      fullName: "",
      firstLine: "",
      secondLine: "",
      country: 101,
      city: "",
      state: "",
      pincode: "",
      phoneNumber: "",
    },
    shipping: {
      fullName: "",
      firstLine: "",
      secondLine: "",
      country: 101,
      city: "",
      state: "",
      pincode: "",
      phoneNumber: "",
      isPrimary: true,
      isbillingaddress: true,
    },
  });
  const [States, setStates] = useState<
    { stateID: number; stateName: string }[]
  >([]);

  const [ShippingAddress, setShippingAddress] = useState<ShippingAddressType[]>(
    []
  );

  const fetchStates = async () => {
    try {
      setStates([]);
    } catch (err: any) {
      console.error(err);
      toast.error(err.response.data.message);
    }
  };
  const fetchShippingAddress = async () => {
    try {
      setShippingAddress([]);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchStates();
    fetchShippingAddress();
  }, []);

  const handleActiveAddress = (order: string) => {
    setActiveAddress((prevOrder) => (prevOrder === order ? null : order));
  };

  //   ========================== Handle Add / Edit Address ===========================================

  const [isShiipingForm, setisShiipingForm] = useState<Boolean>(false);
  const [ShippingId, setShippingId] = useState<string | null>(null);
  const { openDeleteModal } = useDeleteModal(); // Get openDeleteModal from context

  const handleAdd = () => {
    setShippingId(null);
    setisShiipingForm(true);
    setFormData({
      ...formdata,
      shipping: {
        fullName: "",
        firstLine: "",
        secondLine: "",
        country: 101,
        city: "",
        state: "",
        pincode: "",
        phoneNumber: "",
        isPrimary: true,
        isbillingaddress: true,
      },
    });
  };

  const handleBack = () => {
    setShippingId(null);
    setisShiipingForm(false);
  };

  const handleDelete = async (id: string) => {
    try {
      setShippingAddress(() => {
        return ShippingAddress.filter((item) => item.addressID !== id);
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleSetPrimary = async (id: string) => {
    try {
      setShippingAddress(() => {
        return ShippingAddress.map((item) => ({
          ...item,
          isPrimary: item.addressID === id,
        }));
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleOpenDeleteModal = (addressID: string) => {
    openDeleteModal(() => handleDelete(addressID), "shipping address");
  };
  const handleEdit = (id: string, data: any) => {
    setShippingId(id);
    setisShiipingForm(true);
    setFormData({
      ...formdata,
      shipping: {
        ...data,
      },
    });
  };

  const handleSubmitShippingAddress = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Ensure payload includes necessary data
      const payload = {
        ...(ShippingId && { addressID: ShippingId }),
        ...formdata?.shipping, // Spread the shipping data last to avoid overwriting other properties
        country: "India",
        isbillingaddress: formdata?.shipping?.isbillingaddress ?? false, // Ensure a default value
      };

      // Construct URL based on whether ShippingId exists or not
      const url = ShippingId
        ? `${API_URL}/api/public/address/updateaddress`
        : `${API_URL}/api/public/address/savetheaddress`;

      // Make the API call
      const res = {
        data: {
          data: "",
        },
      };

      // Success feedback
      toast.success("Shipping Address Added Successfully");

      if (setactiveAddressid) {
        setactiveAddressid(res.data.data);
      }

      // Clear form states
      setisShiipingForm(false);
      setShippingId(null);
      fetchShippingAddress();
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while saving the shipping address.");
    }
  };

  return (
    <div className={activeTab === "address" ? "block" : "hidden"}>
      <div className="text-content w-full p-7 border border-line rounded-xl">
        <div>
          <button
            type="button"
            className="flex items-center justify-between w-full pb-1.5 border-b border-line"
            onClick={() => handleActiveAddress("shipping")}
          >
            <strong className="heading6">Shipping address</strong>
            <CaretDown
              className={`text-2xl ic_down duration-300 ${
                activeAddress === "shipping" ? "rotate-180" : ""
              }`}
            />
          </button>
          {isShiipingForm ? (
            <form onSubmit={handleSubmitShippingAddress}>
              <div
                className={activeAddress === "shipping" ? "block" : "hidden"}
              >
                <div className="grid sm:grid-cols-2 gap-4 gap-y-5 mt-5">
                  <div>
                    <label
                      htmlFor="shippingFullName"
                      className="caption1 capitalize"
                    >
                      Full Name <span className="text-red">*</span>
                    </label>
                    <input
                      className="border-line mt-2 px-4 py-3 w-full rounded-lg"
                      id="shippingFullName"
                      type="text"
                      value={formdata?.shipping.fullName}
                      onChange={(e) =>
                        setFormData({
                          ...formdata,
                          shipping: {
                            ...formdata.shipping,
                            fullName: e.target.value,
                          },
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="shippingFirstLine"
                      className="caption1 capitalize"
                    >
                      Address Line 1 <span className="text-red">*</span>
                    </label>
                    <input
                      className="border-line mt-2 px-4 py-3 w-full rounded-lg"
                      id="shippingFirstLine"
                      type="text"
                      value={formdata?.shipping.firstLine}
                      onChange={(e) =>
                        setFormData({
                          ...formdata,
                          shipping: {
                            ...formdata.shipping,
                            firstLine: e.target.value,
                          },
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="shippingSecondLine"
                      className="caption1 capitalize"
                    >
                      Address Line 2
                    </label>
                    <input
                      className="border-line mt-2 px-4 py-3 w-full rounded-lg"
                      id="shippingSecondLine"
                      type="text"
                      value={formdata?.shipping.secondLine}
                      onChange={(e) =>
                        setFormData({
                          ...formdata,
                          shipping: {
                            ...formdata.shipping,
                            secondLine: e.target.value,
                          },
                        })
                      }
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="shippingCountry"
                      className="caption1 capitalize"
                    >
                      Country <span className="text-red">*</span>
                    </label>

                    <div className="col-span-full select-block">
                      <select
                        className="border border-line px-4 py-3 w-full rounded-lg border-line mt-2 px-4 py-3 w-full rounded-lg"
                        id="region"
                        name="region"
                        defaultValue={"default"}
                        value={formdata.shipping.country}
                        onChange={(e) => {
                          setFormData({
                            ...formdata,
                            shipping: {
                              ...formdata.shipping,
                              country: e.target.value,
                            },
                          });
                        }}
                        disabled
                      >
                        <option value="default" disabled>
                          Choose Country/Region
                        </option>
                        <option value="101">India</option>
                        <option value="France">France</option>
                        <option value="Singapore">Singapore</option>
                      </select>
                      <Icon.CaretDown className="arrow-down" />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="shippingState"
                      className="caption1 capitalize"
                    >
                      State <span className="text-red">*</span>
                    </label>

                    <div className="col-span-full select-block">
                      <select
                        className="border border-line px-4 py-3 w-full rounded-lg border-line mt-2 px-4 py-3 w-full rounded-lg"
                        id="region"
                        name="region"
                        defaultValue={""}
                        value={formdata.shipping.state}
                        onChange={(e) => {
                          setFormData({
                            ...formdata,
                            shipping: {
                              ...formdata.shipping,
                              state: e.target.value,
                            },
                          });
                        }}
                      >
                        <option value="" disabled>
                          Choose States
                        </option>
                        {States?.map(
                          (
                            item: {
                              stateID: number;
                              stateName: string;
                            },
                            index: number
                          ) => {
                            return (
                              <option key={item.stateID} value={item.stateName}>
                                {item.stateName}
                              </option>
                            );
                          }
                        )}
                      </select>
                      <Icon.CaretDown className="arrow-down" />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="shippingCity"
                      className="caption1 capitalize"
                    >
                      City <span className="text-red">*</span>
                    </label>
                    <input
                      className="border-line mt-2 px-4 py-3 w-full rounded-lg"
                      id="shippingCity"
                      type="text"
                      value={formdata?.shipping.city}
                      onChange={(e) =>
                        setFormData({
                          ...formdata,
                          shipping: {
                            ...formdata.shipping,
                            city: e.target.value,
                          },
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="shippingPincode"
                      className="caption1 capitalize"
                    >
                      Pincode <span className="text-red">*</span>
                    </label>
                    <input
                      className="border-line mt-2 px-4 py-3 w-full rounded-lg"
                      id="shippingPincode"
                      type="text"
                      value={formdata?.shipping.pincode}
                      onChange={(e) =>
                        setFormData({
                          ...formdata,
                          shipping: {
                            ...formdata.shipping,
                            pincode: e.target.value,
                          },
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="shippingPhoneNumber"
                      className="caption1 capitalize"
                    >
                      Phone Number <span className="text-red">*</span>
                    </label>
                    <input
                      className="border-line mt-2 px-4 py-3 w-full rounded-lg"
                      id="shippingPhoneNumber"
                      type="text"
                      value={formdata?.shipping.phoneNumber}
                      onChange={(e) =>
                        setFormData({
                          ...formdata,
                          shipping: {
                            ...formdata.shipping,
                            phoneNumber: e.target.value,
                          },
                        })
                      }
                      required
                    />
                  </div>
                </div>
                <div className=" mt-6 mb-6 flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="button-main bg-white border border-black text-black text-center w-max"
                  >
                    Back
                  </button>
                  <button className="button-main w-max">
                    Save Shipping Address
                  </button>
                  <div className="flex items-center w-fit gap-2">
                    {" "}
                    <input
                      className="border-line px-4 py-3 w-full rounded-lg w-fit w-min"
                      id="shippingPhoneNumber"
                      type="checkbox"
                      checked={formdata?.shipping.isbillingaddress}
                      onChange={(e) =>
                        setFormData({
                          ...formdata,
                          shipping: {
                            ...formdata.shipping,
                            isbillingaddress: e.target.checked,
                          },
                        })
                      }
                    />
                    <label
                      htmlFor="isbillingaddress"
                      className="caption1 capitalize cursor-pointer"
                    >
                      Same Billing Address
                    </label>
                  </div>
                </div>
              </div>
            </form>
          ) : (
            <div
              className={`${
                activeAddress === "shipping" ? "block" : "hidden"
              } address_tile`}
            >
              <div
                className="relative rounded-lg p-4 shadow-sm hover:shadow-md transition-all bg-white mb-4 border border-gray-300 border-dotted flex justify-center items-center cursor-pointer"
                onClick={() => handleAdd()} // Add your handler here if necessary
              >
                <span className="text-2xl font-bold">+</span>
              </div>

              {ShippingAddress?.map((item: any, index: number) => (
                <div
                  key={index}
                  className={`relative rounded-lg p-4 shadow-sm hover:shadow-md transition-all bg-white mb-4 border ${
                    item.isPrimary ? "border-blue-500" : "border-gray-300"
                  }`}
                >
                  {/* Delete Icon - Top Right */}
                  {!setactiveAddressid && (
                    <button
                      onClick={() => handleOpenDeleteModal(item.addressID)}
                      className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition"
                      title="Delete"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M9 3V4H4V6H5V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V6H20V4H15V3H9ZM7 6H17V20H7V6ZM9 8V18H11V8H9ZM13 8V18H15V8H13Z" />
                      </svg>
                    </button>
                  )}

                  {/* Address Info */}
                  <div className="text-sm text-gray-700 space-y-3 pb-4">
                    <div className="flex justify-between items-start flex-wrap gap-3">
                      <h3 className="text-base font-semibold">
                        {item.fullName}
                      </h3>
                      {setactiveAddressid && (
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="primaryAddress"
                            checked={activeAddressid === item.addressID}
                            onChange={() => setactiveAddressid(item.addressID)}
                            className="accent-blue-600 w-4 h-4"
                          />
                          <label className="text-xs text-gray-700">
                            Primary
                          </label>
                        </div>
                      )}
                    </div>

                    <p className="text-gray-600">📞 {item.phoneNumber}</p>
                    <p>
                      {item.firstLine}
                      {item.secondLine && `, ${item.secondLine}`}
                    </p>
                    <p>
                      {item.city}, {item.state}, {item.pincode}
                    </p>
                    <p>{item.country}</p>
                  </div>

                  {/* Action Buttons - Bottom */}
                  <div className="flex flex-wrap justify-end items-center gap-4 border-t pt-3 text-xs font-medium text-gray-600">
                    {!item.isPrimary && (
                      <>
                        <button
                          onClick={() => handleSetPrimary(item.addressID)}
                          className="text-blue-600 hover:underline"
                        >
                          Set as Primary
                        </button>

                        <div className="h-4 border-l hidden sm:block" />
                      </>
                    )}

                    <button
                      onClick={() => handleEdit(item.addressID, item)}
                      className="hover:text-black hover:underline"
                    >
                      Edit
                    </button>

                    <div className="h-4 border-l hidden sm:block" />

                    <button
                      onClick={() => handleOpenDeleteModal(item.addressID)}
                      className="text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddressContent;
