"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ProductCard from "../Product Card/productCard";
import { Product } from "@/types";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const ShopTheRoomSection = () => {
  const products = [
    {
      productId: "672f45dbeb2a0cb6cf44b9cb", // pillow
    },
    {
      productId: "672f27dcae83ae5d6d6664ed", // vase
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(products[0].productId);
  const [product, setProduct] = useState<Product | null>(null);
  const [activeBtn, setActiveBtn] = useState(0);

  async function fetchProducts(productId: string) {
    try {
      const response = await fetch(
        `http://localhost:3001/api/products/all/${productId}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setProduct(data.product);
      console.log("Fetched product:", data.product);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  }

  useEffect(() => {
    if (selectedProduct) {
      fetchProducts(selectedProduct);
    }
  }, [selectedProduct]);

  const handleButtonClick = (index: number, productId: string) => {
    setSelectedProduct(productId);
    setActiveBtn(index);
  };

  const handlePrevProduct = () => {
    const currentIndex = products.findIndex(
      (p) => p.productId === selectedProduct
    );
    const prevIndex =
      currentIndex <= 0 ? products.length - 1 : currentIndex - 1;
    setSelectedProduct(products[prevIndex].productId);
    setActiveBtn(prevIndex);
  };

  const handleNextProduct = () => {
    const currentIndex = products.findIndex(
      (p) => p.productId === selectedProduct
    );
    const nextIndex =
      currentIndex >= products.length - 1 ? 0 : currentIndex + 1;
    setSelectedProduct(products[nextIndex].productId);
    setActiveBtn(nextIndex);
  };

  return (
    <section className="bg-white">
      <div className="max-w-[1600px] mx-auto px-[20px] md:px-[32px] lg:px-[48px]">
        <div className="flex flex-col gap-[20px]">
          <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-[800] text-[#272727]">
            Shop the room
          </h1>
          <div className="relative flex flex-col gap-[30px] md:gap-[150px] md:flex-row mb-[50px]">
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
                onClick={() => handleButtonClick(1, products[1].productId)}
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
                onClick={() => handleButtonClick(0, products[0].productId)}
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

            <div className="w-[100%] md:w-[25%] flex flex-col justify-center">
              {product && <ProductCard product={product} />}

              {/* Navigation Buttons */}
              <div className="flex gap-[15px] justify-center mt-4">
                <button
                  onClick={handlePrevProduct}
                  className="p-4 border rounded-full text-black  transition-colors"
                >
                  <LuChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNextProduct}
                  className="p-4 border rounded-full text-black  transition-colors"
                >
                  <LuChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopTheRoomSection;
