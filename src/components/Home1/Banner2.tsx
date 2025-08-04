import React from "react";

const Banner = ({ Padding = "md:pt-20 pt-10", Gap = "gap-5" }) => {
  return (
    <div
      className={`banner-block style-one grid sm:grid-cols-1 md:grid-cols-2 ${Gap} ${Padding} `}
    >
      <div className="banner-item relative block overflow-hidden duration-500 h-[600px] md:h-[600px]">
        <div
          className="banner-content w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-in-out hover:scale-105"
          style={{
            backgroundImage: `url(/images/about/about.jpg)`,
          }}
        />
      </div>
      <div className="banner-item relative block overflow-hidden duration-500 h-[600px] md:h-[600px]">
        <div className="banner-content bg-[#FAF0E4] transition-all duration-300 ease-in-out hover:scale-105 p-6 md:p-8 h-full overflow-y-auto">
          <h2 className="heading2 text-[#EA2127] mb-4">Our Story</h2>
          <div className="text-button text-black">
            <p className="body1 text-secondary mb-4">
              Shapes started out as the brainchild of Neha and Ashish Jain, from
              the family of Ankur Exports. The company had been in the exports
              of stainless steel utensils for decades and had created a name for
              itself in the international markets. The young duo of Neha and
              Ashish wanted to bring the same impeccable quality and experience
              to the Indian market. And thus, the idea of Shapes as a brand was
              conceptualized in 2007.
            </p>
            <p className="body1 text-secondary">
              The brand is built on the premise that our products mean nothing
              if they do not play a role in our customer's lives. So we went and
              explored what makes our customers happy. And it came as no
              surprise that it's the smallest things that give us the biggest
              joys. A family meal, happy faces around a well laid out dining
              table, simple tools that make cooking easy and enjoyable, and the
              list goes on…
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
