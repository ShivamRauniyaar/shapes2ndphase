"use client";
import { API_URL } from "@/Constant";
import Axios from "@/Functions/Axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

type TabContent = {
  activeTab: string;
  setFirst: any;
  setLast: any;
  setEmail: any;
};

const SettingContent: React.FC<TabContent> = ({
  activeTab,
  setLast,
  setFirst,
  setEmail,
}) => {
  const [firstName, setFirstName] = useState("Tony");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await Axios.get(`${API_URL}/api/public/carts/getprofile`);
        const { firstName, lastName, avatar, userEmail } = res.data.data;
        setFirstName(firstName);
        setLastName(lastName);
        setFirst(firstName ?? "Tony");
        setLast(lastName ?? "R");
        setEmail(userEmail);
      } catch (error) {
        console.error("Failed to fetch profile data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await Axios.post(
        `${API_URL}/api/public/carts/addorupdateprofile`,
        {
          firstName: firstName,
          lastName: lastName,
        }
      );

      setFirst(firstName);
      setLast(lastName);
      toast.success("Profile updated successfully");
    } catch (error) {
      console.error("Update failed:", error);
      alert("Update failed");
    }
  };

  if (loading) return <div className="p-6">Loading...</div>;
  return (
    <div className={activeTab === "setting" ? "block" : "hidden"}>
      <div className="text-content w-full p-7 border border-line rounded-xl">
        <form onSubmit={handleSubmit}>
          <div className="heading5 pb-4">Information</div>
       
          <div className="grid sm:grid-cols-2 gap-4 gap-y-5 mt-5">
            <div className="first-name">
              <label htmlFor="firstName" className="caption1 capitalize">
                First Name <span className="text-red">*</span>
                <span className="text-red">*</span>
              </label>
              <input
                className="border-line mt-2 px-4 py-3 w-full rounded-lg"
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                required
              />
            </div>
            <div className="last-name">
              <label htmlFor="lastName" className="caption1 capitalize">
                Last Name <span className="text-red">*</span>
              </label>
              <input
                className="border-line mt-2 px-4 py-3 w-full rounded-lg"
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
                required
              />
            </div>
            {/* More settings fields would go here */}
          </div>
          <div className="block-button lg:mt-10 mt-6">
            <button type="submit" className="button-main">
              Save Change
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingContent;
