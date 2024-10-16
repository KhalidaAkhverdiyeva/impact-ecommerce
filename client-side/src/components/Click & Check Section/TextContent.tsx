import React from "react";

const TextContent = () => {
  return (
    <div className="max-w-[1600px] mx-auto mb-[50px] lg:absolute lg:inset-0 flex flex-col items-center lg:items-start justify-center lg:justify-start lg:p-[48px] px-[20px] md:px-[32px] lg:text-left lg:z-10">
      <div className="max-w-[700px] w-full lg:w-[330px]">
        <h3 className="text-[32px] text-[#272727] lg:text-white md:text-[40px] lg:text-[48px] leading-[1] font-[800]">
          About the PC Portable Lamp
        </h3>
        <p className="pt-[15px] text-[#303030] text-[14px] md:text-[16px] lg:text-white font-[400] pb-[20px]">
          Constructed in robust plastic and featuring a matte scratch- and
          water-resistant finish, its battery-powered design gives the freedom
          and flexibility to move it anywhere.
        </p>
        <button className="text-white mt-[30px] bg-[#272727] font-[700] lg:text-[#272727] lg:bg-white w-[135px] py-[13px] px-[24px] flex gap-[5px] items-center">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default TextContent;
