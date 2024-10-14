import React from "react";

const ProductCard = () => {
  return (
    <div className="w-[314px] md:w-[276px]">
      <div className="relative">
        <div className="absolute top-[5px] left-[5px]">
          <div>New</div>
          <div>Sold Out</div>
        </div>
        <div className="relative">
          <img
            src="https://impact-theme-home.myshopify.com/cdn/shop/products/4104312009000_PC_Portable_olive.jpg?v=1653057933&width=1200"
            alt="Product Image"
          />
        </div>
      </div>
      <div className="py-[30px]">
        <div>adhadhakjsdh</div>
        <div>asdjkashd</div>
        <div>aslkdald</div>
      </div>
    </div>
  );
};

export default ProductCard;
