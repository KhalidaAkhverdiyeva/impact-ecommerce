import React from "react";

const AboutNumbersSection = () => {
  return (
    <div className="max-w-[1600px] mx-auto py-[20px]">
      <div className="px-[20px] md:px-[32px] lg:px-[48px] py-[48px]">
        <div className="flex flex-col justify-between md:flex-row gap-[30px]">
          <div className="text-center w-[100%]">
            <p className="text-[74px] md:text-[50px] lg:text-[80px] text-[#363D88] font-[700] leading-[1] pb-[10px]">
              12
            </p>
            <p className="text-[#272727] font-[700] lg:text-[40px]  text-[26px]">
              Talented Designers
            </p>
          </div>
          <div className="text-center w-[100%]">
            <p className="text-[74px] md:text-[50px] lg:text-[80px] text-[#363D88] font-[700] leading-[1] pb-[10px]">
              100%
            </p>
            <p className="text-[#272727] font-[700] lg:text-[40px] text-[26px]">
              Passionate Team.
            </p>
          </div>
          <div className="text-center w-[100%]">
            <p className="text-[74px] md:text-[50px] lg:text-[80px] text-[#363D88] font-[700] leading-[1] pb-[10px]">
              25
            </p>
            <p className="text-[#272727] font-[700] lg:text-[40px] text-[26px]">
              Official Stores.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutNumbersSection;
