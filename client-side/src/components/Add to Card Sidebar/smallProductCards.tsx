import React from "react";

const SmallProductCards = () => {
  return (
    <div className="flex items-center gap-[20px]">
      <div className="w-[95px] h-[125px] ">
        <img
          src="https://impact-theme-home.myshopify.com/cdn/shop/products/508042_Bottoms_Up_Vase_S_soft_pink_17bfc2f1-1283-4392-befd-8ce3defa478f.jpg?v=1655980208&width=192"
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-[5px] w-[68%]">
        <p className="font-[700]">Buttoms Up Vase</p>
        <p className="text-[#272727a5]">$110.00</p>
        <p className="text-[#272727a5]">Soft Pink</p>
      </div>
      <div>
        <div className="flex justify-center items-center text-[#5c5a5aa5] border-solid border-[1px] border-[#2727274f] w-[48px] h-[38px]">
          2
        </div>
        <p className="text-[#545353a5] hover:text-[#272727] transition-all  ease-in-out underline mt-[5px] text-[14px] cursor-pointer">
          Remove
        </p>
      </div>
    </div>
  );
};

export default SmallProductCards;
