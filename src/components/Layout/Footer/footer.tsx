"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { NewsletterSection } from "./newsletterSection";
import { PaymentMethods } from "./paymentMethods";
import { FooterLinks } from "./footerLinks";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const iconVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.2,
    rotate: 6,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

const Footer = () => {
  return (
    <footer className="bg-[#F2F2F2] py-[48px] flex justify-center mx-auto">
      <div className="px-[20px] md:px-[32px] lg:px-[48px] flex flex-col lg:gap-[64px] max-w-[1600px]">
        <div className="flex flex-col lg:flex-row gap-[30px]">
          <NewsletterSection />
          <FooterLinks />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-1/4"
          >
            <motion.h4
              variants={textVariants}
              className="font-[800] text-[18px] text-[#272727] mb-[4px]"
            >
              About
            </motion.h4>
            <motion.p
              variants={textVariants}
              className="text-[#797979] text-[16px]"
            >
              Thanks to <span className="underline">Article London</span> for
              allowing us to use their products in this demo store and HAY for
              the photography.
            </motion.p>
          </motion.div>
        </div>
        <div className="flex flex-col gap-[48px] py-[40px] lg:py-[0px]">
          <div className="flex gap-[20px] lg:gap-[0px] flex-col lg:flex-row justify-between">
            <div className="flex items-center gap-[10px]">
              <motion.div
                whileHover="hover"
                initial="initial"
                variants={iconVariants}
                className="cursor-pointer"
              >
                <FaFacebookF size={26} />
              </motion.div>
              <motion.div
                whileHover="hover"
                initial="initial"
                variants={iconVariants}
                className="cursor-pointer"
              >
                <FaInstagram size={26} />
              </motion.div>
              <motion.div
                whileHover="hover"
                initial="initial"
                variants={iconVariants}
                className="cursor-pointer"
              >
                <FaPinterestP size={26} />
              </motion.div>
              <motion.div
                whileHover="hover"
                initial="initial"
                variants={iconVariants}
                className="cursor-pointer"
              >
                <FaXTwitter size={26} />
              </motion.div>
            </div>
          </div>
          <div className="flex gap-[20px] lg:gap-[0px] flex-col lg:flex-row justify-between">
            <p className="text-[14px]">
              © 2024, Impact Theme Home.Powered by Shopify
            </p>
            <PaymentMethods />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
