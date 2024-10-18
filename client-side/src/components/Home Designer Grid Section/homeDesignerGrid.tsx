import React from "react";

const HomeDesignerGridSection = () => {
  return (
    <section className="bg-white h-[760px] py-[50px]">
      <div className="mx-auto max-w-[1350px] h-[664px] px-[20px] md:px-[32px] lg:px-[48px]">
        <div className="flex gap-[24px] h-[664px]">
          {/* Left Image */}
          <div className="w-[50%] overflow-hidden flex items-center justify-center relative group cursor-pointer">
            <img
              src="https://impact-theme-home.myshopify.com/cdn/shop/files/designer-george-sowden.jpg?v=1653310809&width=1400"
              alt="Designer George Sowden"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
              <h2 className="text-white font-[800] text-[44px]">
                George Sowden
              </h2>
            </div>
          </div>

          {/* Right Section with Two Stacked Images */}
          <div className="w-[50%] flex flex-col gap-[24px] overflow-hidden">
            {/* Top Image */}
            <div className="flex-1 overflow-hidden flex items-center justify-center relative group cursor-pointer">
              <img
                src="https://impact-theme-home.myshopify.com/cdn/shop/files/designer-clara-von-zweigbergk.jpg?v=1653310798&width=1400"
                alt="Designer Clara Von Zweigbergk"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
                <h2 className="text-white font-[800] text-[44px]">
                  Clara Von Zweigbergk
                </h2>
              </div>
            </div>

            {/* Bottom Image */}
            <div className="flex-1 overflow-hidden flex items-center justify-center relative group cursor-pointer">
              <img
                src="https://impact-theme-home.myshopify.com/cdn/shop/files/designer-pierre-charpin.jpg?v=1653310786&width=1400"
                alt="Designer Pierre Charpin"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
                <h2 className="text-white font-[800] text-[44px]">
                  Pierre Charpin
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeDesignerGridSection;
