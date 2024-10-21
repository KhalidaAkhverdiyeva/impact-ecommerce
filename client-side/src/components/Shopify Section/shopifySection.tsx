"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/mousewheel";
import { Mousewheel } from "swiper/modules";

const ShopifySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

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
              <div>
                <svg
                  role="presentation"
                  fill="none"
                  focusable="false"
                  strokeWidth="2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M2.22 5.472a.742.742 0 0 0-.33.194.773.773 0 0 0-.175.48c-.47 4.515-.48 7.225 0 11.707a.792.792 0 0 0 .505.737l9.494 3.696.285.079.286-.08 9.494-3.694a.806.806 0 0 0 .505-.737c.5-4.537.506-7.153 0-11.648a.765.765 0 0 0-.175-.542.739.739 0 0 0-.33-.257v.002"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M22.269 5.997a.771.771 0 0 0-.16-.335.744.744 0 0 0-.33-.257l-9.494-3.629a.706.706 0 0 0-.571 0L6.967 3.623 2.22 5.47a.742.742 0 0 0-.33.192.771.771 0 0 0-.16.336.806.806 0 0 0 .49.592l9.494 3.696h.57l5.216-2.03L21.78 6.59a.794.794 0 0 0 .492-.593h-.002Z"
                    fill="currentColor"
                    fillOpacity=".12"
                  ></path>
                  <path
                    d="m17.5 8.255-5.215 2.03h-.571L2.22 6.59a.806.806 0 0 1-.49-.592.771.771 0 0 1 .16-.336.742.742 0 0 1 .33-.192l4.747-1.847M17.5 8.255 21.78 6.59a.794.794 0 0 0 .492-.593h-.002a.771.771 0 0 0-.16-.335.744.744 0 0 0-.33-.257l-9.494-3.629a.706.706 0 0 0-.571 0L6.967 3.623M17.5 8.255 6.967 3.623M12 22.365v-12.08M15.5 17l4-1.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
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
              <div>
                <svg
                  role="presentation"
                  fill="none"
                  focusable="false"
                  strokeWidth="2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M1.714 14.143c0-3.919 2.613-4.898 3.92-4.898 2.35 0 2.938 1.96 2.938 2.938v3.92c0 2.35-1.96 2.938-2.939 2.938-1.306 0-3.919-.98-3.919-4.898ZM22.286 14.143c0-3.919-2.613-4.898-3.92-4.898-2.35 0-2.937 1.96-2.937 2.938v3.92c0 2.35 1.96 2.938 2.938 2.938 1.306 0 3.919-.98 3.919-4.898Z"
                    fill="currentColor"
                    fillOpacity=".12"
                  ></path>
                  <path
                    d="M1.714 14.143c0-3.919 2.613-4.898 3.92-4.898 2.35 0 2.938 1.96 2.938 2.938v3.92c0 2.35-1.96 2.938-2.939 2.938-1.306 0-3.919-.98-3.919-4.898ZM22.286 14.143c0-3.919-2.613-4.898-3.92-4.898-2.35 0-2.937 1.96-2.937 2.938v3.92c0 2.35 1.96 2.938 2.938 2.938 1.306 0 3.919-.98 3.919-4.898Z"
                    stroke="currentColor"
                  ></path>
                  <path
                    d="M2.38 11.263C2.524 6.537 4.929 1.286 12 1.286c7.06 0 9.468 5.232 9.617 9.951m.106 5.666s.134 3.079-1.447 4.42c-1.58 1.336-5.57 1.31-5.57 1.31"
                    stroke="currentColor"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </div>
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
              <div>
                <svg
                  role="presentation"
                  fill="none"
                  focusable="false"
                  strokeWidth="2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.89 21.975c-1.325.974-3.176.9-4.391-.209a131.923 131.923 0 0 1-9.792-9.94 3.17 3.17 0 0 1-.753-1.5C1.56 8.293.727 3.222 1.976 1.972c1.25-1.25 6.32-.416 8.352-.022.56.111 1.078.371 1.502.752a131.922 131.922 0 0 1 9.94 9.792c1.109 1.214 1.18 3.067.209 4.392-.701.955-1.442 1.914-2.31 2.78-.865.865-1.823 1.607-2.778 2.308ZM9.458 6.523a2.073 2.073 0 1 1-2.93 2.931 2.073 2.073 0 0 1 2.93-2.931Z"
                    fill="currentColor"
                    fillOpacity=".12"
                    stroke="currentColor"
                  ></path>
                </svg>
              </div>
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
              <div>
                <svg
                  role="presentation"
                  fill="none"
                  focusable="false"
                  strokeWidth="2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M3.236 18.182a5.071 5.071 0 0 0 4.831 4.465 114.098 114.098 0 0 0 7.865-.001 5.07 5.07 0 0 0 4.831-4.464 23.03 23.03 0 0 0 .165-2.611c0-.881-.067-1.752-.165-2.61a5.07 5.07 0 0 0-4.83-4.465c-1.311-.046-2.622-.07-3.933-.069a109.9 109.9 0 0 0-3.933.069 5.07 5.07 0 0 0-4.83 4.466 23.158 23.158 0 0 0-.165 2.609c0 .883.067 1.754.164 2.61Z"
                    fill="currentColor"
                    fillOpacity=".12"
                    stroke="currentColor"
                  ></path>
                  <path
                    d="M17 8.43V6.285A5 5 0 0 0 7 6.286V8.43"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12 17.714a2.143 2.143 0 1 0 0-4.286 2.143 2.143 0 0 0 0 4.286Z"
                    stroke="currentColor"
                  ></path>
                </svg>
              </div>
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
