import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TextContent = () => {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <div className="flex max-w-[1600px] mx-auto">
      <motion.div
        ref={contentRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mb-[50px] lg:absolute flex flex-col items-center lg:items-start justify-center lg:justify-start lg:p-[48px] px-[20px] md:px-[32px] lg:text-left lg:z-10"
      >
        <div className="max-w-[700px] w-full lg:w-[330px]">
          <motion.h3
            variants={itemVariants}
            className="text-[32px] text-[#272727] lg:text-white md:text-[40px] lg:text-[48px] leading-[1] font-[800]"
          >
            About the PC Portable Lamp
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="pt-[15px] text-[#303030] text-[14px] md:text-[16px] lg:text-white font-[400] pb-[20px]"
          >
            Constructed in robust plastic and featuring a matte scratch- and
            water-resistant finish, its battery-powered design gives the freedom
            and flexibility to move it anywhere.
          </motion.p>
          <motion.button
            variants={itemVariants}
            aria-label="Learn more"
            className="text-white mt-[30px] bg-[#272727] font-[700] lg:text-[#272727] lg:bg-white w-[135px] py-[13px] px-[24px] flex gap-[5px] items-center"
          >
            Learn more
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default TextContent;
