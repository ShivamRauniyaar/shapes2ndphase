'use client';

import React, { FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

const formFields = {
  formId: "sDDDyI1BEWmN",
  formName: "Contact Us Form",
  fields: [
    {
      name: "fullname60012313",
      FieldType: "Name",
      type: "text",
      properties: {
        label: "Full Name",
        placeholder: "Name",
        required: false,
        disabled: false,
      },
    },
    {
      name: "ContactNumber43137137",
      FieldType: "ContactNumber",
      type: "number",
      properties: {
        label: "Mobile",
        placeholder: "Mobile #",
        required: true,
        disabled: false,
      },
    },
    {
      name: "Email10669166",
      FieldType: "Email",
      type: "email",
      properties: {
        label: "Email",
        placeholder: "Your Email Address",
        required: true,
        disabled: false,
      },
    },
    {
      name: "MultiLine38378833",
      FieldType: "MultiLine",
      type: "textarea",
      properties: {
        label: "Message",
        placeholder: "Your Message ",
        required: true,
        disabled: false,
      },
    },
  ],
};

const ContactUs = ({ dynamicContactData }: { dynamicContactData: any }) => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData: Record<string, string> = {};
    formFields.fields.forEach((field) => {
      const inputElement = event.currentTarget[field.name] as
        | HTMLInputElement
        | HTMLTextAreaElement;
      formData[field.name] = inputElement.value;
    });

    try {
      const res = await fetch(
        `https://forms.ecollat.com/form/Neha/ContactUsForm/formpublic/${formFields.formId}/jsonRecords/submit`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error("Form submission failed");
      await res.json();
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error submitting form");
    }
  };

  return (
    <>
      <div className="relative w-full">
        <Breadcrumb
          heading={dynamicContactData?.content?.title || "Contact Us"}
          subHeading={dynamicContactData?.content?.title || "Get in Touch"}
        />
      </div>

      <div className="register-block md:py-20 py-10">
        <div className="container">
          <div className="content-main flex gap-y-8 max-md:flex-col">
            <div className="left md:w-1/2 w-full lg:pr-[60px] md:pr-[40px] md:border-r border-line">
              <div className="heading4">Get In Touch</div>
              <form className="md:mt-7 mt-4" onSubmit={handleSubmit}>
                {formFields.fields.map((field, index) => (
                  <div key={index} className="mt-5">
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.name}
                        placeholder={field.properties.placeholder}
                        required={field.properties.required}
                        className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                      />
                    ) : (
                      <input
                        id={field.name}
                        type={field.type}
                        placeholder={field.properties.placeholder}
                        required={field.properties.required}
                        className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                      />
                    )}
                  </div>
                ))}
                <div className="block-button md:mt-7 mt-4">
                  <button type="submit" className="button-main">
                    Submit
                  </button>
                </div>
              </form>
            </div>

            <div className="right md:w-1/2 w-full lg:pl-[60px] md:pl-[40px] contactSectionDesign">
              {dynamicContactData?.content?.description && (
                <div
                  className="text-content"
                  dangerouslySetInnerHTML={{
                    __html: dynamicContactData.content.description,
                  }}
                />
              )}

              {dynamicContactData?.content?.socialmedia?.length > 0 && (
                <div className="list-social flex items-center gap-6 mt-2 w-full">
                  {dynamicContactData.content.socialmedia.map(
                    (item: any, index: number) => (
                      <Link key={index} href={item.url} target="_blank">
                        <Image
                          src={item?.icons?.[0]?.thumbnailPath}
                          alt=""
                          width={24}
                          height={24}
                          priority
                        />
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
