"use client";

import React from "react";
import { motion } from "framer-motion";

const JustImgSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-white py-[50px]"
    >
      <picture className="w-full">
        <source
          media="(min-width: 640px)"
          srcSet="https://impact-theme-home.myshopify.com/cdn/shop/files/Sowden_Kettle_Sowden_Toaster.jpg?v=1656321120&width=3200"
        />
        <img
          src="https://impact-theme-home.myshopify.com/cdn/shop/files/Sowden_Kettle_Sowden_Toaster_mobile.jpg?v=1656322735&width=800"
          alt="lamp img"
          className="w-full h-full object-cover"
        />
      </picture>
    </motion.section>
  );
};

export default JustImgSection;
