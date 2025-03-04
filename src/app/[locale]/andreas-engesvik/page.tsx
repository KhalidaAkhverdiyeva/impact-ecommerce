"use client";
import React from "react";
import { motion } from "framer-motion";
import ColoredShopCard from "@/components/Colored Shop Card/coloredShopCard";
import RichTextSection from "@/components/Designers Rich Text Section/richTextSection";
import HomeDesignerGridSection from "@/components/Home Designer Grid Section/homeDesignerGrid";
import { Header } from "@/components/Layout/Header/header";
import FloatingTextSection from "@/components/Marquee Text/floatingTexts";
import ShopifySection from "@/components/Shopify Section/shopifySection";

const AndreasEngesvik = () => {
  return (
    <div className="relative">
      <Header />

      {/* Hero Section */}
      <div className="h-[560px] lg:h-[640px] relative overflow-hidden">
        <motion.picture
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <source
            media="(min-width: 768px)"
            srcSet="https://impact-theme-home.myshopify.com/cdn/shop/files/andreas-engesvik-hero.jpg?v=1656417295&width=3200"
          />
          <img
            src="https://impact-theme-home.myshopify.com/cdn/shop/files/andreas-engesvik-hero-mobile.jpg?v=1656417299&width=800"
            alt="andreas"
            className="w-full h-full object-cover"
          />
        </motion.picture>

        {/* Hero Title */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <motion.h2
            className="text-white font-[800] text-[40px] md:text-[48px] lg:text-[68px] text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Andreas Engesvik
          </motion.h2>
        </motion.div>
      </div>

      {/* Animated Product Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <ColoredShopCard
          title="Add a nice touch of color to your bathroom"
          description="With its simple yet functional design, the Tann Toothbrush from HAY is manufactured by tooth care professionals Jordan. Made with a plastic handle and nylon brushes in a variety of colors."
          buttonText="Shop"
          buttonColor="#C4D9CB"
          imageUrls={{
            small:
              "https://impact-theme-home.myshopify.com/cdn/shop/files/andreas-engesvik-product.jpg?v=1656417358&width=800",
            medium:
              "https://impact-theme-home.myshopify.com/cdn/shop/files/andreas-engesvik-product.jpg?v=1656417358&width=800",
            large:
              "https://impact-theme-home.myshopify.com/cdn/shop/files/andreas-engesvik-product.jpg?v=1656417358&width=1400",
          }}
        />
      </motion.div>

      {/* Floating Text */}
      <FloatingTextSection text="Meet our designers" color="#C4D9CB" />

      {/* Animated Rich Text Section */}
      <motion.div
        className="pb-[50px]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <RichTextSection title="From all over the world" />
      </motion.div>

      {/* Other Sections */}
      <HomeDesignerGridSection />
      <ShopifySection />
    </div>
  );
};

export default AndreasEngesvik;
