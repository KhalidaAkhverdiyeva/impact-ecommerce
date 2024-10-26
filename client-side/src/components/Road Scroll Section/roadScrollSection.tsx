import React from "react";

const RoadScrollSection = () => {
  // Dummy data for the numbers (01 to 09)
  const sections = Array.from({ length: 9 }, (_, index) => `0${index + 1}`);

  return (
    <section>
      <div className="max-w-[1600px] mx-auto px-[20px] md:px-[32px] lg:px-[48px]">
        <div className="flex lg:flex-row lg:gap-[140px]">
          <div className="flex-1">
            <img
              src="https://impact-theme-home.myshopify.com/cdn/shop/files/06_2.jpg?v=1664271761&width=1500"
              alt="Australia"
            />
          </div>
          <div className="text-[#272727] flex-1">
            <h6 className="font-[800] text-[18px] mb-[25px]">Australia</h6>
            <p className="text-[50px] leading-[1] font-[800]">
              Wide selection of new releases and bestselling furniture, lighting
              and homewares direct from Denmark.
            </p>
          </div>
        </div>
        {/* Horizontal Controller */}
        <div className="mt-[50px] flex justify-center items-center">
          <div className="relative w-full">
            {/* Horizontal Line */}
            <div className="absolute top-[25%] left-0 right-0 transform -translate-y-1/2 h-[2px] bg-gray-300" />
            {/* Circles and Numbers */}
            <div className="flex justify-between items-center relative z-10">
              {sections.map((section, index) => (
                <div key={index} className="flex flex-col items-center">
                  {/* Circle */}
                  <div className="w-[20px] h-[20px] rounded-full border-2 border-gray-400 bg-white"></div>
                  {/* Number */}
                  <span className="mt-[10px] text-gray-500 text-[14px]">
                    {section}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadScrollSection;
