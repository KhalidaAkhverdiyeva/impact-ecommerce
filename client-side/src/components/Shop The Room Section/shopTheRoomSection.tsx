"use client";
import React from "react";

const ShopTheRoomSection = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1600px] mx-auto px-[20px] md:px-[32px] lg:px-[48px] ">
        <div className="flex flex-col gap-[20px]">
          <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-[800] text-[#272727]">
            Shop the room
          </h1>
          <div className="relative flex flex-col  md:flex-row">
            <div className="w-[100%] md:w-[50%] relative">
              <img
                src="https://impact-theme-home.myshopify.com/cdn/shop/files/Pandarine_3_Seater_reclining_armrest_Lint_beige_oiled_oak_legs_Plica_Sprinkle_cream_Shaggy_Rug_cream.jpg?v=1656505302&width=1000"
                alt="Living Room"
                className="w-full h-auto"
              />
              {/* Button 1 with Heartbeat Effect */}
              <div className="absolute" style={{ top: "47%", left: "12%" }}>
                <div className="relative w-[42px] h-[42px] flex justify-center items-center">
                  <div className="absolute inset-0 bg-white rounded-full opacity-20 animate-heartbeat"></div>
                  <button
                    className="relative bg-white rounded-full w-[13px] h-[13px] flex justify-center items-center shadow-md"
                    onClick={() => alert("Button 1 clicked")}
                  ></button>
                </div>
              </div>
              {/* Button 2 with Heartbeat Effect */}
              <div className="absolute" style={{ top: "40%", left: "74%" }}>
                <div className="relative w-[42px] h-[42px] flex justify-center items-center">
                  <div className="absolute inset-0 bg-white rounded-full opacity-20 animate-heartbeat"></div>
                  <button
                    className="relative bg-white rounded-full w-[13px] h-[13px] flex justify-center items-center shadow-md"
                    onClick={() => alert("Button 2 clicked")}
                  ></button>
                </div>
              </div>
            </div>

            <div className="w-[100%] md:w-[50%] flex justify-center ">
              <img
                src="https://impact-theme-home.myshopify.com/cdn/shop/products/507906.jpg?v=1653058051&width=600"
                alt=""
                className="max-w-[480px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopTheRoomSection;
