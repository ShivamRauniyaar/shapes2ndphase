"use client";
import { useState } from "react";

// components/EnquiryForm.tsx
export default function EnquiryForm() {
  const [phoneCode, setPhoneCode] = useState("+91"); // Default to US code

  return (
    <section className="flex flex-col md:flex-row gap-6">
      {/* Left: Form Section */}
      <div className="flex-1 flex flex-col justify-center md:w-1/2">
        <div className=" enquiry_section_heading mb-[40px]">Enquire Now</div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="form_label">
              * Full Name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="John Doe"
              required
              className="form_input w-full"
            />
          </div>

          {/* Company Name */}
          <div>
            <label htmlFor="companyName" className="form_label">
              Company Name
            </label>
            <input
              id="companyName"
              type="text"
              placeholder="Tak Hotels (optional)"
              className="form_input w-full"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="form_label">
              * Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="john.doe@company.com"
              required
              className="form_input w-full"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="form_label">
              Phone
            </label>
            <div className="flex gap-3">
              <select
                id="phoneCode"
                value={phoneCode}
                onChange={(e) => setPhoneCode(e.target.value)}
                className="w-20 form_input"
                style={{
                  padding: "2px 1.5rem", 
                }}
              >
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+91">+91</option>
                <option value="+61">+61</option>
                <option value="+81">+81</option>
                {/* Add more country codes as needed */}
              </select>
              <input
                id="phoneNumber"
                type="tel"
                placeholder="999 9999 999"
                className="flex-1 form_input"
                style={{
                  width: "60%",
                }}
              />
            </div>
          </div>

          {/* Query */}
          <div className="col-span-1 md:col-span-2">
            <div>
              <label htmlFor="query" className="form_label">
                Your Query
              </label>
            </div>
            <textarea
              id="query"
              placeholder="Describe your query here (optional)"
              className="form_input min-h-[100px] w-full"
            />
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="bg-black text-white py-3 px-6  mt-2 w-fit"
            >
              Send Enquiry
            </button>
          </div>
        </form>
      </div>

      {/* Right: Image Section */}
      <div
        className="flex-1 bg-cover bg-center md:w-1/2 rounded-md"
        style={{ backgroundImage: `url('/images/newimages/spoon1.svg')` }}
        role="img"
        aria-label="Decorative background"
      />
    </section>
  );
}
