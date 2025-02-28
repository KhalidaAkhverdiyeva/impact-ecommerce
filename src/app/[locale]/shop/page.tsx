"use client";
import ExploreCollectionsSections from "@/components/Explore Collections Section/exploreCollectionsSection";
import FilterSection from "@/components/Filter Section/filterSection";
import { Header } from "@/components/Layout/Header/header";
import FloatingTextSection from "@/components/Marquee Text/floatingTexts";
import ShopifySection from "@/components/Shopify Section/shopifySection";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ShopPage = () => {
  const [color, setColor] = useState<string | null>(null);
  const [designer, setDesigner] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);

  const textRevealAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 60,
        damping: 12,
      },
    },
  };

  const aboutTextAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="relative">
      <Header />
      <div className=" h-[560px] lg:h-[640px]  relative overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            media="(min-width: 768px)"
            srcSet="https://impact-theme-home.myshopify.com/cdn/shop/files/Two-Colour_160x82_red_wb_lacquer_tabletop_maroon_red_frame_Slant_233_white_Indian_Steel_Pitcher_NO._2.jpg?v=1655974258&width=3200"
          />
          <Image
            src="https://impact-theme-home.myshopify.com/cdn/shop/files/Two-Colour_160x82_red_wb_lacquer_tabletop_maroon_red_frame_Slant_233_white_Indian_Steel_Pitcher_NO._2_mobile.jpg?v=1655974257&width=800"
            alt="office"
            fill
            className="object-cover"
            priority
          />
        </picture>
        <div className="absolute inset-0 flex items-center  bg-black bg-opacity-10">
          <div className="flex flex-col w-[1600px] mx-auto px-[20px] md:px-[32px] lg:px-[48px]">
            <motion.h2
              variants={textRevealAnimation}
              initial="hidden"
              animate="show"
              className="text-white font-[800] text-[40px] md:text-[48px] lg:text-[68px] "
            >
              New Arivals
            </motion.h2>
            <motion.p
              variants={textRevealAnimation}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.5 }}
              className="text-white"
            >
              As everyone heads back to work, whether that be into the office or
              the classroom, having an organized desk space is essential.
            </motion.p>
          </div>
        </div>
      </div>
      <FilterSection
        color={color}
        designer={designer}
        type={type}
        setColor={setColor}
        setDesigner={setDesigner}
        setType={setType}
      />
      <FloatingTextSection
        text="Create a productive work environment"
        color="#F8E39A"
      />
      <ExploreCollectionsSections />
      <div className="py-[50px]">
        <div className=" h-[560px] lg:h-[760px]  relative overflow-hidden">
          <picture className="absolute inset-0 w-full h-full">
            <source
              media="(min-width: 768px)"
              srcSet="https://impact-theme-home.myshopify.com/cdn/shop/files/HAY_MetteandRolf_Portrait.jpg?v=1656685244&width=1600"
            />
            <Image
              src="https://impact-theme-home.myshopify.com/cdn/shop/files/HAY_MetteandRolf_Portrait_mobile.jpg?v=1656685248&width=800"
              alt="thomas"
              fill
              className="object-cover"
              priority
            />
          </picture>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
            <div className="flex flex-col gap-[10px] items-center text-[#272727]">
              <motion.span
                variants={aboutTextAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="text-white font-[800] text-[16px] leading-[1] text-center max-w-[700px]"
              >
                About us
              </motion.span>
              <motion.h2
                variants={aboutTextAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.2 }}
                className="text-white font-[800] text-[40px] md:text-[68px] lg:text-[80px] leading-[1] text-center max-w-[700px]"
              >
                We do high-quality products
              </motion.h2>
              <motion.button
                variants={aboutTextAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.4 }}
                className="text-[18px] whitespace-nowrap font-[700] mt-[10px] lg:py-[14px] py-[13px] px-[24px] lg:px-[32px] bg-white inline-block w-[160px] text-center"
              >
                Learn more
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <ShopifySection />
    </div>
  );
};

export default ShopPage;
