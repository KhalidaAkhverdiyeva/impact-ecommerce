import React from "react";

const HomeDesignerGridSection = () => {
  return (
    <section className="bg-white lg:h-[664px]">
      <div className="mx-auto max-w-[1350px] lg:h-[664px] px-[20px] md:px-[32px] lg:px-[48px]">
        <div className="flex flex-col md:flex-row gap-[12px] lg:gap-[24px] h-[600px] md:h-[320px] lg:h-[664px]">
          <div className=" w-full flex-1 h-[300px] md:h-[100%] md:w-[50%] overflow-hidden flex items-center justify-center relative group cursor-pointer">
            <img
              src="https://impact-theme-home.myshopify.com/cdn/shop/files/designer-george-sowden.jpg?v=1653310809&width=1400"
              alt="Designer George Sowden"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
              <h2 className="text-white font-[800] text-[32px] lg:text-[44px] text-center">
                George Sowden
              </h2>
            </div>
          </div>

          <div className="w-full flex-1 h-[300px] md:h-[100%] md:w-[50%] flex flex-col gap-[12px] lg:gap-[24px] overflow-hidden">
            <div className="flex-1 overflow-hidden flex items-center justify-center relative group cursor-pointer">
              <img
                src="https://impact-theme-home.myshopify.com/cdn/shop/files/designer-clara-von-zweigbergk.jpg?v=1653310798&width=1400"
                alt="Designer Clara Von Zweigbergk"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
                <h2 className="text-white font-[800] text-[32px] lg:text-[44px] text-center">
                  Clara Von Zweigbergk
                </h2>
              </div>
            </div>

            <div className="flex-1 overflow-hidden flex items-center justify-center relative group cursor-pointer">
              <img
                src="https://impact-theme-home.myshopify.com/cdn/shop/files/designer-pierre-charpin.jpg?v=1653310786&width=1400"
                alt="Designer Pierre Charpin"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
                <h2 className="text-white font-[800] text-[32px] lg:text-[44px] text-center">
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
