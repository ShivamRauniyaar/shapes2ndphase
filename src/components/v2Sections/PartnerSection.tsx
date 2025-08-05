import React, { Fragment } from "react";

const partnerSectionData = [
  {
    id: 1,
    title: "Taj",
    image: "/images/newimages/partners/Tajhotels.svg",
  },
  {
    id: 2,
    title: "Westin",
    image: "/images/newimages/partners/meridien.svg",
  },
  {
    id: 3,
    title: "Meridin",
    image: "/images/newimages/partners/Westin.svg",
  },
  {
    id: 4,
    title: "Meridin",
    image: "/images/newimages/partners/Tajhotels.svg",
  },
  {
    id: 5,
    title: "Meridin",
    image: "/images/newimages/partners/meridien.svg",
  },
  {
    id: 6,
    title: "Meridin",
    image: "/images/newimages/partners/Westin.svg",
  },
  {
    id: 7,
    title: "Holiday Inn",
    image: "/images/newimages/partners/Tajhotels.svg",
  },
  {
    id: 1,
    title: "Taj",
    image: "/images/newimages/partners/meridien.svg",
  },
  {
    id: 2,
    title: "Westin",
    image: "/images/newimages/partners/Westin.svg",
  },
  {
    id: 3,
    title: "Meridin",
    image: "/images/newimages/partners/Tajhotels.svg",
  },
  {
    id: 4,
    title: "Meridin",
    image: "/images/newimages/partners/meridien.svg",
  },
  {
    id: 5,
    title: "Meridin",
    image: "/images/newimages/partners/Westin.svg",
  },
  {
    id: 6,
    title: "Meridin",
    image: "/images/newimages/partners/Tajhotels.svg",
  },
  {
    id: 7,
    title: "Holiday Inn",
    image: "/images/newimages/partners/Westin.svg",
  },
];

const PartnerSection = () => {
  return (
    <Fragment>
      <h6 className="text-center mb-4">Proud Partners in Hospitality</h6>
      <div className="grid grid-cols-7 gap-2">
        {partnerSectionData?.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${item?.image})`,
              width: "100%",
              height: "107px",
              backgroundSize: "auto", // Changed to 'contain'
              backgroundPosition: "center", // Center the image
              borderRadius: "12px",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        ))}
      </div>
    </Fragment>
  );
};

export default PartnerSection;
