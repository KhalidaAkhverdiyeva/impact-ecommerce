import React from "react";

const AddToCartButtons = () => {
  return (
    <div className="flex gap-[20px]">
      <button className="py-[16px] px-[32px] bg-[#3C619E] text-white font-[700] w-[100%]">
        View Cart
      </button>
      <button className="bg-[#272727] font-[800] w-[100%] text-white px-[32px] py-[16px]">
        Buy it now
      </button>
    </div>
  );
};

export default AddToCartButtons;
