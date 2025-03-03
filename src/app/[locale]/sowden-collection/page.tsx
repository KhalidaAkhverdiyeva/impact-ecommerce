"use client";
import { motion } from "framer-motion";
import BlueVibezz from "@/components/Blue Vibes Section/blueVibezz";
import JustImgSection from "@/components/Just Image Section/justImgSection";
import { Header } from "@/components/Layout/Header/header";
import FloatingTextSection from "@/components/Marquee Text/floatingTexts";
import ShopifySection from "@/components/Shopify Section/shopifySection";
import ToasterSection from "@/components/Toaster Section/toasterSection";
import React from "react";
import Image from "next/image";
import { SowdenImages } from "@/static/SowdenImages";

const SowdenCollectionPage = () => {
  return (
    <div>
      <Header transparent={false} />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-[1600px] mx-auto py-[50px] px-[20px] md:px-[32px] lg:px-[48px]"
      >
        <div className="flex flex-col gap-[15px] lg:gap-[25px] items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#C6E6F3] font-[900] text-[60px] md:text-[106px] lg:text-[216px] leading-[1]"
          >
            Sowden
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[26px] md:text-[32px] font-[800] max-w-[690px] text-[#272727] text-center leading-[1.2]"
          >
            Our collaboration with the designer George Sowden
          </motion.h3>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center text-[#272727] max-w-[690px]"
          >
            This collection brings the designer&apos;s signature aesthetic and
            style to a higher level, transforming essential household products
            into decorative as well as functional objects.
          </motion.div>
        </div>
      </motion.div>
      <JustImgSection />
      <BlueVibezz />

      <ToasterSection />

      <div className="max-w-[1600px] mx-auto py-[50px]">
        <div className="flex flex-col lg:items-center lg:flex-row gap-[36px] lg:gap-[100px] px-[20px] md:px-[32px] lg:px-[48px]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex gap-[20px] lg:w-[55%]"
          >
            <div className="w-[40%] relative h-[300px]">
              <Image
                src="https://impact-theme-home.myshopify.com/cdn/shop/files/George_Sowden_Tin_by_Sowden_Coffee_Sowden_Bottle_Travel_Cup_Tea.jpg?v=1659077866&width=900"
                alt="Sowden products"
                fill
                className="object-cover"
              />
            </div>
            <div className="pt-[40px] w-[60%] relative h-[300px]">
              <Image
                src="https://impact-theme-home.myshopify.com/cdn/shop/files/Sowden_Kettle_EU_yelllow_Sowden_Toaster_EU_blue_Salt_and_Pepper_M_yellow_6e8dd0d1-971e-4084-ad4c-4bb80cf8a534.jpg?v=1659077888&width=900"
                alt="Sowden kitchen products"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[#272727] flex flex-col items-center lg:items-start lg:w-[45%]"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="font-[900]"
            >
              About the designer
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-[40px] font-[900] lg:text-[60px]"
            >
              George Sowden
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center lg:text-left pt-[20px] max-w-[600px]"
            >
              George Sowden studied architecture at Gloucestershire College of
              Art. In the 1970s, Sowden moved to Milan to work with names such
              as Ettore Sottsass and Olivetti, and in the 1980s he became one of
              the founders of the design collective, Memphis Group. He has won
              numerous design prizes including the prestigious Compasso
              d&apos;Oro Award. Today he continues to live and work in Milan.
              For HAY, Sowden has designed the Coffee and Tea Pot, Sowden
              Bottle, Travel Cup, Tin by Sowden, Salt & Pepper, Sowden Toaster
              and Sowden Kettle.
            </motion.p>
          </motion.div>
        </div>
      </div>
      <FloatingTextSection
        text="Usefulness and enjoyment of everyday objects"
        color="#92BEE5"
      />
      <div className="max-w-[1600px] mx-auto py-[50px]">
        <div className="flex gap-[20px] overflow-x-auto no-scrollbar lg:overflow-visible px-[20px] md:px-[32px] lg:px-[48px]">
          {SowdenImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-[80%] md:w-[40%] lg:flex-1 lg:w-auto relative h-[400px]"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover"
              />
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                viewport={{ once: true }}
                className="absolute top-[20px] lg:top-[40px] left-[20px] lg:left-[40px] text-[#272727] w-[270px] lg:w-[330px] leading-[1]"
              >
                <p className="font-[700] mb-[8px] lg:text-[20px]">
                  {item.category}
                </p>
                <p className="font-[800] text-[24px] lg:text-[36px]">
                  {item.title}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <ShopifySection />
    </div>
  );
};

export default SowdenCollectionPage;
