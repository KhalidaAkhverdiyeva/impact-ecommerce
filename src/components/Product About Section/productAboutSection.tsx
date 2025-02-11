import { Product } from "@/types";
import React from "react";

const ProductAboutSection: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="py-[50px]">
      <div className="flex flex-col lg:flex-row gap-[35px] lg:gap-[50px]  max-w-[1600px] mx-auto">
        <div className="flex lg:flex-[45%] flex-col  text-[#272727] px-[20px] md:px-[32px] lg:px-[48px]">
          <p className="font-[800] md:text-[18px]">About</p>
          <h4 className="my-[20px] md:my-[26px] text-[34px]  md:text-[40px] lg:text-[50px] font-[800] leading-[1]">
            {product.descriptionTitle}
          </h4>
          <p className=" text-[#3e3d3d] text-[14px] md:text-[18px] ">
            Vertical opaque and clear stripes create a subtle color variance in
            Kristine Five Melvær’s glass vase collection.
          </p>
        </div>
        <div className="bg-[#F4F4F4] lg:flex-[55%] py-[15px] px-[20px] md:px-[32px] lg:px-[48px] md:mx-[32px] lg:mr-[48px]">
          <div className="py-[16px] lg:py-[26px] flex flex-col md:flex-row md:items-center text-[18px] border-b-solid border-b-[#d7d6d6] border-b-[1px]">
            <div className="font-[800] md:flex-[30%]  text-[#272727]">
              Designer
            </div>
            <div className="text-[#272727B3] md:flex-[70%] text-[14px] md:text-[16px]">
              {product.designer}
            </div>
          </div>
          <div className="py-[16px] lg:py-[26px] flex flex-col md:flex-row md:items-center text-[18px] border-b-solid border-b-[#d7d6d6] border-b-[1px]">
            <div className="font-[800] md:flex-[30%] text-[#272727]">Color</div>
            <div className="text-[#272727B3] md:flex-[70%] text-[14px] md:text-[16px]">
              {product.colors}
            </div>
          </div>
          <div className="py-[16px] lg:py-[26px] flex flex-col md:flex-row md:items-center text-[18px] border-b-solid border-b-[#d7d6d6] border-b-[1px]">
            <div className="font-[800] md:flex-[30%] text-[#272727]">
              Material
            </div>
            <div className="text-[#272727B3] md:flex-[70%] text-[14px] md:text-[16px]">
              {product.material}
            </div>
          </div>
          <div className="py-[16px] lg:py-[26px] flex flex-col md:flex-row md:items-center text-[18px]">
            <div className="font-[800] md:flex-[30%] text-[#272727]">
              Dimensions
            </div>
            <div className="text-[#272727B3] md:flex-[70%] text-[14px] md:text-[16px]">
              {product.dimensions}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAboutSection;
