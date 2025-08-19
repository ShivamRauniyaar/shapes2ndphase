"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react";
import Axios from "@/Functions/Axios";
import { API_URL } from "@/Constant";
import { isAuth, saveToken, secondsInADay } from "@/Functions/Auth";
import { toast } from "react-toastify";
import { useCart } from "@/context/CartContext";
import { access } from "fs";
// import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"email" | "otp">("email");
  // const router = useRouter()
  const { migrateLocalCartToDB } = useCart();

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = { email: email };
      const res = { status: 300 };
      if (res?.status === 200) {
        setStep("otp");
      } else {
        console.error("Failed to submit email");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = { email: email, emailOtp: otp };
      const res = {
        status: 200,
        data: {
          accessToken: "",
          expiryDuration: "",
        },
      };
      if (res.status === 200) {
        const expiryInDays = res.data.expiryDuration;
        saveToken(res.data.accessToken, expiryInDays);
        window.location.href = "/my-account";

        migrateLocalCartToDB();
      }
    } catch (err: any) {
      console.error(err);
      toast.error(err.response.data.message);
    }
  };

  interface ResendPayload {
    email: string;
  }

  const handleResend = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const payload: ResendPayload = { email: email };
      const res = { data: { message: "" } };
      toast.success(res.data.message);
    } catch (err: any) {
      console.error(err);
      toast.error(err.response.data.message);
    }
  };

  return (
    <>
      <div className="breadcrumb-block style-img">
        <div className="breadcrumb-main bg-linear overflow-hidden">
          <div className="container lg:pt-[134px] pt-24 pb-10 relative">
            <div className="main-content w-full h-full flex flex-col items-center justify-center relative z-[1]">
              <div className="text-content">
                <div className="heading2 text-center">Login</div>
                <div className="link flex items-center justify-center gap-1 caption1 mt-3">
                  <Link href="/">Homepage</Link>
                  <Icon.CaretRight size={14} className="text-secondary2" />
                  <div className="text-secondary2 capitalize">Login</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="login-block md:py-20 py-10">
        <div className="container">
          <div className="content-main flex gap-y-8 max-md:flex-col">
            <div className="left md:w-1/2 w-full border-line">
              <div className="heading4">
                {" "}
                {step === "email" ? "Login / Register" : "Verify OTP"}
              </div>

              {step === "email" ? (
                <form className="md:mt-7 mt-4" onSubmit={handleEmailSubmit}>
                  <div className="email">
                    <input
                      className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                      type="email"
                      placeholder="Enter your email address *"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="block-button md:mt-7 mt-4">
                    <button type="submit" className="button-main">
                      Send OTP
                    </button>
                  </div>
                </form>
              ) : (
                <form className="md:mt-7 mt-4" onSubmit={handleOtpSubmit}>
                  <div className="otp">
                    <input
                      className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                      type="text"
                      placeholder="Enter OTP *"
                      required
                      maxLength={6}
                      value={otp}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (/^\d{0,6}$/.test(value)) {
                          setOtp(value);
                        }
                      }}
                    />
                  </div>

                  <div
                    className="block-button md:mt-7 mt-4"
                    style={{ display: "flex", gap: "1rem" }}
                  >
                    <button type="submit" className="button-main">
                      Verify OTP
                    </button>
                    <button onClick={handleResend}>Resend</button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
