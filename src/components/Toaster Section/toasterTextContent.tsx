"use client";

import React from "react";
import { motion } from "framer-motion";

const ToasterTextContent = () => {
  return (
    <div className="flex max-w-[1600px] mx-auto">
      <div className="mb-[50px] lg:absolute flex flex-col items-center lg:items-start justify-center lg:justify-start lg:p-[48px] px-[20px] md:px-[32px] lg:text-left lg:z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[700px] w-full lg:w-[330px]"
        >
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[32px] text-[#272727] md:text-[40px] lg:text-[48px] leading-[1] font-[800]"
          >
            Focus on the Sowden Toaster
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-[15px] text-[#303030] text-[14px] md:text-[16px] font-[400] pb-[20px]"
          >
            George Sowden combines intuitive controls and playful colors in his
            Sowden Toaster.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            aria-label="View product"
            className="text-white mt-[30px] bg-[#272727] font-[700] py-[13px] px-[24px] flex gap-[5px] items-center"
          >
            View product
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ToasterTextContent;
