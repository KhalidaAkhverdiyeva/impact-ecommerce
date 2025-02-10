import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="w-full">
      <div className="relative mb-6 animate-pulse">
        <div className="absolute top-[10px] left-[10px] z-[40] text-[12px] flex flex-col">
          <span className="bg-gray-300 w-[40px] py-[2px] text-white font-[700] text-center mb-[10px]"></span>
          <span className="bg-gray-300 w-[65px] py-[2px] font-[700] text-center mb-[10px]"></span>
        </div>

        <div className="relative">
          <div className="bg-gray-300 w-full h-[440px] "></div>
          <div className="absolute w-full h-[300px] inset-0 bg-gray-300 "></div>

          <div className="absolute bottom-[0] opacity-0 right-[15px] flex justify-center">
            <div className="bg-gray-300 text-white text-center py-[10px] px-[10px] text-[18px] w-[130px] cursor-pointer font-[800]"></div>
          </div>
        </div>

        <div className="py-[30px]">
          <div className="flex justify-between">
            <span className="bg-gray-300 w-[70px] h-[11px] rounded"></span>
            <span className="flex items-center gap-[4px]">
              <span className="bg-gray-300 w-[30px] h-[14px] rounded"></span>
              <span className="bg-gray-300 w-[18px] h-[18px] rounded"></span>
            </span>
          </div>
          <div className="bg-gray-300 w-full h-[15px] mt-[5px] rounded"></div>
          <div className="bg-gray-300 w-[50px] h-[11px] mt-[5px] rounded"></div>

          <div className="flex gap-2 mt-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="w-[15px] h-[9px] cursor-pointer border border-gray-300 bg-gray-300"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCardSkeletons = () => {
  return (
    <div className="flex gap-[20px] w-[80%]">
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
    </div>
  );
};

export default ProductCardSkeletons;
