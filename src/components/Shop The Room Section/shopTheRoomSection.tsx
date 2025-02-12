"use client";
import Image from "next/image";
import React, { useState } from "react";

const ShopTheRoomSection = () => {
  const products = [
    {
      image:
        "https://impact-theme-home.myshopify.com/cdn/shop/products/507906.jpg?v=1653058051&width=600",
    },
    {
      image:
        "https://impact-theme-home.myshopify.com/cdn/shop/products/508044_Bottoms_Up_Vase_L_navy_blue.jpg?v=1653058200&width=1400",
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(products[0].image);
  const [activeBtn, setActiveBtn] = useState(0);

  const handleButtonClick = (index: number, productImage: string) => {
    setSelectedProduct(productImage);
    setActiveBtn(index);
  };

  return (
    <section className="bg-white">
      <div className="max-w-[1600px] mx-auto px-[20px] md:px-[32px] lg:px-[48px]">
        <div className="flex flex-col gap-[20px]">
          <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-[800] text-[#272727]">
            Shop the room
          </h1>
          <div className="relative flex flex-col md:flex-row">
            <div className="w-[100%] md:w-[50%] relative">
              <Image
                src="https://impact-theme-home.myshopify.com/cdn/shop/files/Pandarine_3_Seater_reclining_armrest_Lint_beige_oiled_oak_legs_Plica_Sprinkle_cream_Shaggy_Rug_cream.jpg?v=1656505302&width=1000"
                alt="Living Room"
                width={1000}
                height={750}
                className="w-full h-auto"
              />
              {/* Button 1 */}
              <div
                className="absolute cursor-pointer"
                style={{ top: "47%", left: "12%" }}
                onClick={() => handleButtonClick(1, products[1].image)}
              >
                <div
                  className={`relative flex justify-center transition-all duration-300 ease-in-out items-center ${
                    activeBtn === 1 ? "w-[52px] h-[52px]" : "w-[32px] h-[32px]"
                  }`}
                >
                  <div className="absolute inset-0 bg-white transition-all duration-300 ease-in-out rounded-full opacity-20 animate-heartbeat"></div>
                  <button
                    aria-label="Product 1"
                    className={`relative bg-white transition-all duration-300 ease-in-out rounded-full ${
                      activeBtn === 1
                        ? "w-[14px] h-[14px]"
                        : "w-[10px] h-[10px]"
                    } flex justify-center items-center shadow-md`}
                  ></button>
                </div>
              </div>
              {/* Button 2 */}
              <div
                className="absolute cursor-pointer"
                style={{ top: "40%", left: "74%" }}
                onClick={() => handleButtonClick(0, products[0].image)}
              >
                <div
                  className={`relative flex justify-center transition-all duration-300 ease-in-out items-center ${
                    activeBtn === 0 ? "w-[52px] h-[52px]" : "w-[32px] h-[32px]"
                  }`}
                >
                  <div className="absolute inset-0 bg-white transition-all duration-300 ease-in-out rounded-full opacity-20 animate-heartbeat"></div>
                  <button
                    aria-label="Product 2"
                    className={`relative bg-white transition-all duration-300 ease-in-out rounded-full ${
                      activeBtn === 0
                        ? "w-[14px] h-[14px]"
                        : "w-[10px] h-[10px]"
                    } flex justify-center items-center transition-all duration-300 ease-in-out shadow-md`}
                  ></button>
                </div>
              </div>
            </div>

            <div className="w-[100%] md:w-[50%] flex justify-center">
              <Image
                src={selectedProduct}
                alt="Selected Product"
                className="w-[500px] "
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopTheRoomSection;
