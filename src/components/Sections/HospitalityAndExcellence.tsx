import React from "react";
import SectionImages from "./SectionImages";

const HospitalityAndExcellence = () => {
  return (
    <div>
      <div className="bg-white">
        {" "}
        <div className="container">
          <div className="content   overflow-hidden xl:-mx-5 rounded-3xl md:py-[60px] py-8">
            <div className="heading3 text-center">
              Tailored for Luxury, Trusted by Icons
            </div>
            <div className="list-testi w-full section-swiper-navigation style-center style-small-border mt-5">
              <div className="testi-item flex flex-col items-center justify-center xl:px-[120px] md:px-[60px] px-8">
                <div className="desc heading4 fs22 font-medium text-center    font-weight-[600]">
                  From the country's most iconic hotels to elite boutiques
                  properties, Shapes partners with hospitality brancds that seek
                  elagance , craftsmanship, and design consistency
                </div>
              </div>
            </div>
          </div>
          <SectionImages />
        </div>
      </div>
    </div>
  );
};

export default HospitalityAndExcellence;
