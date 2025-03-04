"use client";
import CollectionCard from "@/components/Collection Card/collectionCard";
import { Header } from "@/components/Layout/Header/header";
import FloatingTextSection from "@/components/Marquee Text/floatingTexts";
import ShopifySection from "@/components/Shopify Section/shopifySection";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideIn = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInText = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
};

const rotateImage = {
  hidden: { opacity: 0, rotate: 0 },
  visible: { opacity: 1, rotate: -3, transition: { duration: 1 } }, // Rotate to 3 degrees for the first image
};

const rotateImageReverse = {
  hidden: { opacity: 0, rotate: 0 },
  visible: { opacity: 1, rotate: 3, transition: { duration: 1 } }, // Rotate to -3 degrees for the second image
};

const SlideIn = {
  hidden: { x: -1000 },
  visible: { x: 0, transition: { type: "spring", stiffness: 80 } },
};

const CollectionsPage = () => {
  return (
    <div>
      <Header transparent={false} />
      <motion.section
        className="max-w-[1600px] mx-auto"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="px-[20px] py-[48px] md:px-[32px] lg:px-[48px] text-center">
          <motion.span
            className="text-[54px] md:text-[94px] lg:text-[170px] font-[800]"
            style={{
              background:
                "linear-gradient(180deg, rgba(231, 231, 231, 1), rgba(255, 255, 255, 1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Collections
          </motion.span>
        </div>
      </motion.section>
      <CollectionCard />
      <motion.section initial="hidden" animate="visible" variants={fadeIn}>
        <div className="max-w-[1600px] mx-auto h-[480px] px-[20px] md:px-[32px] lg:px-[48px]">
          <div className="relative h-full">
            <motion.div className="relative h-full" variants={slideIn}>
              <Image
                src="https://impact-theme-home.myshopify.com/cdn/shop/files/PC_Portable_cream_white_Palissade_olive.jpg?v=1655974487&width=3200"
                alt="lampos"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </motion.div>
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <motion.div
              className="text-white absolute inset-0 flex flex-col items-center justify-center text-center p-4"
              variants={fadeIn}
            >
              <motion.h3 className="text-[48px] md:text-[64px] font-[800]">
                Lighting
              </motion.h3>
              <motion.p className="text-[14px] md:text-[16px] mt-2">
                Vast and varied selection of fresh, stylish lighting options,
                including pendant, table, floor lamps and more.
              </motion.p>
              <motion.button
                aria-label="Shop Lighting"
                className="mt-[24px] text-white border-solid font-[800] border-white border-[2px] px-[32px] py-[16px]"
              >
                Shop Lighting
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <FloatingTextSection text="Collaboration" color="#F2F2F2" />
      <motion.div
        className="max-w-[1600px] mx-auto"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="flex flex-col lg:items-center lg:flex-row gap-[36px] lg:gap-[100px] px-[20px] md:px-[32px] lg:px-[48px]">
          <motion.div
            className="flex items-center lg:w-[55%]"
            variants={SlideIn}
          >
            <motion.div className="w-[40%]" variants={rotateImage}>
              <Image
                src="https://impact-theme-home.myshopify.com/cdn/shop/files/Sowden_Kettle_EU_yelllow_Sowden_Toaster_EU_blue_Salt_and_Pepper_M_yellow_30c2a164-6b41-49df-b3d2-d4e7534a1679.jpg?v=1660123231&width=1000"
                alt="ch"
                width={500}
                height={500}
                // className="-rotate-3"
              />
            </motion.div>
            <motion.div
              className="pt-[40px] w-[60%]"
              variants={rotateImageReverse}
            >
              <Image
                src="https://impact-theme-home.myshopify.com/cdn/shop/files/Sowden_Toaster_EU_yellow.jpg?v=1660123240&width=1000"
                alt="chsolse"
                width={500}
                height={500}
                // className="rotate-3"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="text-[#272727] flex flex-col items-center lg:items-start lg:w-[45%]"
            variants={fadeInText}
          >
            <p className="font-[900] pb-[10px]">Sowden</p>
            <motion.h2
              className="text-[40px] md:text-[56px] font-[900] lg:text-[60px] text-center lg:text-left leading-[1]"
              variants={fadeInText}
            >
              Collaboration with the designer George Sowden
            </motion.h2>
            <motion.p
              className="text-center lg:text-left pt-[20px] max-w-[600px]"
              variants={fadeInText}
            >
              This collection brings the designer’s signature aesthetic and
              style...
            </motion.p>
            <motion.button
              aria-label="Shop Collection"
              className="bg-[#92BEE5] font-[700] text-white py-[16px] px-[32px] mt-[20px] md:mt-[40px]"
            >
              Shop Collection
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
      <ShopifySection />
    </div>
  );
};

export default CollectionsPage;
