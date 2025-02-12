"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/mousewheel";
import { Mousewheel } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BsHeadphones } from "react-icons/bs";
import { IoPricetagsOutline } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";

const ShopifySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<{ swiper: SwiperType }>(null);

  return (
    <section className="bg-white py-[50px] lg:py-[100px] lg:px-[48px]">
      <div className="max-w-[1420px] mx-auto">
        <Swiper
          ref={swiperRef}
          modules={[Mousewheel]}
          spaceBetween={30}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          mousewheel={{ forceToAxis: true }}
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <LiaShippingFastSolid className="w-[24px] h-[24px]" />
              <div className=" text-[16px] md:text-[20px] font-[800] mt-[20px]">
                Free shipping
              </div>
              <p className="mt-[16px] text-[14px] md:text-[16px]">
                Get free shipping on orders of $100 or more
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <BsHeadphones className="w-[24px] h-[24px]" />

              <div className="text-[16px] md:text-[20px] font-[800] mt-[20px]">
                Customer service
              </div>
              <p className="mt-[16px] text-[14px] md:text-[16px]">
                A question? Please contact us at 123-456-7890
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <IoPricetagsOutline className="w-[24px] h-[24px]" />

              <div className="text-[16px] md:text-[20px] font-[800] mt-[20px]">
                Refer a friend
              </div>
              <p className="mt-[16px] text-[14px] md:text-[16px]">
                Refer a friend and get 15% off each other
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <IoIosLock className="w-[24px] h-[24px]" />

              <div className="text-[16px] md:text-[20px] font-[800] mt-[20px]">
                Secure payment
              </div>
              <p className="mt-[16px] text-[14px] md:text-[16px]">
                Your payment information is processed securely
              </p>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="flex justify-center mt-4 lg:hidden">
          <div className="flex space-x-[15px]">
            {Array.from({ length: 4 }).map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  activeIndex === index ? "bg-black" : "bg-gray-400"
                }`}
                onClick={() => swiperRef.current?.swiper.slideTo(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopifySection;
