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
import { motion } from "framer-motion";

const ShopifySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<{ swiper: SwiperType }>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const slideVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.section
      className="bg-white py-[50px] lg:py-[100px] lg:px-[48px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
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
          {[
            {
              icon: <LiaShippingFastSolid className="w-[24px] h-[24px]" />,
              title: "Free shipping",
              text: "Get free shipping on orders of $100 or more",
            },
            {
              icon: <BsHeadphones className="w-[24px] h-[24px]" />,
              title: "Customer service",
              text: "A question? Please contact us at 123-456-7890",
            },
            {
              icon: <IoPricetagsOutline className="w-[24px] h-[24px]" />,
              title: "Refer a friend",
              text: "Refer a friend and get 15% off each other",
            },
            {
              icon: <IoIosLock className="w-[24px] h-[24px]" />,
              title: "Secure payment",
              text: "Your payment information is processed securely",
            },
          ].map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="flex flex-col items-center"
                variants={slideVariants}
              >
                <motion.div variants={itemVariants}>{item.icon}</motion.div>
                <motion.div
                  className="text-[16px] md:text-[20px] font-[800] mt-[20px]"
                  variants={itemVariants}
                >
                  {item.title}
                </motion.div>
                <motion.p
                  className="mt-[16px] text-[14px] md:text-[16px]"
                  variants={itemVariants}
                >
                  {item.text}
                </motion.p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <motion.div
          className="flex justify-center mt-4 lg:hidden"
          variants={itemVariants}
        >
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
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ShopifySection;
