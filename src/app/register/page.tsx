"use client";
import React, { useState } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { useRouter } from "next/navigation";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
  });
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"register" | "verify">("register");
  const router = useRouter()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.username) {
      alert("Please enter your email address");
      return;
    }

    try {
      const payload = { email: formData.username };

      const res = await fetch(
        `https://viewer.ecollat.in/api/public/auth/pusersignup


`,
        {
          method: "POST",
          cache: "no-store",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (res.ok) {
        alert("OTP sent to your email!");
        setStep("verify");
      } else {
        alert("Registration failed!");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred while registering.");
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!otp) {
      alert("Please enter the OTP.");
      return;
    }

    try {
      const payload = {
        email: formData.username,
        emailOtp: Number(otp),
      };

      const res = await fetch(
        `https://viewer.ecollat.in/api/public/auth/verify-otp`,
        {
          method: "POST",
          cache: "no-store",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const text = await res.json();
      if (text?.accessToken) {
        localStorage.setItem("shapesAccessToken", text?.accessToken);
        router.push('/my-account');
      }

      // const data = await res.json();

      if (res.ok) {
        alert("Verification successful! You can now log in.");
        // optionally redirect:
        // router.push("/login");
      } else {
        alert("Invalid OTP! Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred during verification.");
    }
  };

  return (
    <>
      <Breadcrumb heading="Create An Account" subHeading="Create An Account" />
      <div className="register-block md:py-20 py-10">
        <div className="container">
          <div className="content-main flex gap-y-8 max-md:flex-col">
            <div className="left md:w-1/2 w-full lg:pr-[60px] md:pr-[40px] md:border-r border-line">
              <div className="heading4">
                {step === "register" ? "Register" : "Verify OTP"}
              </div>

              {step === "register" ? (
                <form className="md:mt-7 mt-4" onSubmit={handleRegister}>
                  <div className="email ">
                    <input
                      className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                      id="username"
                      type="email"
                      placeholder="Username or email address *"
                      required
                      value={formData.username}
                      onChange={(e) =>
                        setFormData({ ...formData, username: e.target.value })
                      }
                    />
                  </div>
                  <div className="block-button md:mt-7 mt-4">
                    <button className="button-main">Register</button>
                  </div>
                </form>
              ) : (
                <form className="md:mt-7 mt-4" onSubmit={handleVerifyOtp}>
                  <div className="otp">
                    <input
                      className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                      id="otp"
                      type="text"
                      placeholder="Enter OTP *"
                      required
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </div>
                  <div className="block-button md:mt-7 mt-4">
                    <button className="button-main">Verify OTP</button>
                  </div>
                </form>
              )}
            </div>

            <div className="right md:w-1/2 w-full lg:pl-[60px] md:pl-[40px] flex items-center">
              <div className="text-content">
                <div className="heading4">Already have an account?</div>
                <div className="mt-2 text-secondary">
                  Welcome back. Sign in to access your personalized experience,
                  saved preferences, and more. We're thrilled to have you with
                  us again!
                </div>
                <div className="block-button md:mt-7 mt-4">
                  <Link href={"/login"} className="button-main">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
