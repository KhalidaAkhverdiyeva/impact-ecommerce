import React from "react";

const Quote = () => {
  return (
    <div className="text-[#272727]  max-w-[1600px] mx-auto">
      <div className="flex flex-col gap-[40px] max-w-[900px] mx-auto">
        <div className="relative">
          <img
            src="data:image/svg+xml,%3Csvg width='86' height='55' viewBox='0 0 86 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M71.3163 54.6H42.5163L60.3163 0.400024H85.5163L71.3163 54.6ZM29.3163 54.6H0.716309L18.9163 0.400024H44.1163L29.3163 54.6Z' fill='%23E9E9E9'/%3E%3C/svg%3E%0A"
            alt="quote"
            className="absolute top-[-20px] left-[-7px] md:left-[-40px] w-[51px] h-[37px] md:w-[70px] md:h-[45px]"
          />
          <blockquote className="text-[28px] md:text-[36px] lg:text-[44px] relative font-[800] leading-[1.1] text-center">
            We work with the best designers of our generation from around the
            world to create high-quality products that would be accessible to a
            wide audience.
          </blockquote>
        </div>
        <div className="flex flex-col items-center gap-[10px] justify-center">
          <div className="rounded-full w-[70px] h-[70px]  ">
            <img
              src="https://impact-theme-home.myshopify.com/cdn/shop/files/Mette.png?v=1656419248&width=140"
              alt=""
              className="w-full h-full"
            />
          </div>
          <p className="text-[#272727B3] text-[14px] text-center md:text-[16px]">
            Mette Hay
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
