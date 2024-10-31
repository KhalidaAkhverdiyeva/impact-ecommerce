import React from "react";

const ProductDetailSkeleton = () => {
  return (
    <div className="max-w-[1600px] mx-auto lg:px-[48px] lg:pt-[50px]">
      <div className="flex flex-col lg:flex-row gap-[90px]">
        {/* Left Side - Image Section */}
        <div className="flex-[60%] overflow-hidden">
          <div className="hidden lg:grid grid-cols-2 gap-[25px]">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse bg-gray-300 rounded-lg w-full h-[500px]"
              ></div>
            ))}
          </div>
          <div className="lg:hidden">
            <div className="animate-pulse bg-gray-300 rounded-lg w-full h-[500px]"></div>
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="flex-[40%] sticky top-[110px] h-[110vh] px-[20px] md:px-[32px] lg:px-[0px]">
          <div className="animate-pulse bg-gray-300 rounded w-[100px] h-[20px] mb-4"></div>
          <div className="animate-pulse bg-gray-300 rounded w-full h-[40px] mb-4"></div>
          <div className="flex justify-between text-[#272727] pb-[15px] border-b-[#e4e4e4] border-b-solid border-b-[1px]">
            <div className="animate-pulse bg-gray-300 rounded w-[50px] h-[20px]"></div>
            <div className="flex items-center gap-[5px]">
              <div className="animate-pulse bg-gray-300 rounded w-[30px] h-[20px]"></div>
            </div>
          </div>
          <div className="py-[15px]">
            <div className="animate-pulse bg-gray-300 rounded w-[80px] h-[20px] mb-2"></div>
            <div className="flex gap-2 mt-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse bg-gray-300 rounded w-[40px] h-[16px]"
                ></div>
              ))}
            </div>
          </div>
          <div className="animate-pulse bg-gray-300 rounded w-full h-[40px] mb-4"></div>
          <div className="animate-pulse bg-gray-300 rounded w-full h-[40px] mb-4"></div>
          <div className="flex flex-col md:flex-row gap-[10px] py-[15px]">
            <div className="animate-pulse bg-gray-300 rounded w-full h-[40px]"></div>
            <div className="animate-pulse bg-gray-300 rounded w-full h-[40px]"></div>
          </div>
          <div className="mt-[30px]">
            <div className="animate-pulse bg-gray-300 rounded w-full h-[40px] mb-4"></div>
            <div className="animate-pulse bg-gray-300 rounded w-full h-[40px] mb-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
