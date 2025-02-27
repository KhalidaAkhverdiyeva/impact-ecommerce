import React, { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RichTextProps {
  title: string;
}

const RichTextSection: FC<RichTextProps> = ({ title }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
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
    <section className="bg-white py-[50px]">
      <motion.div
        ref={sectionRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-[1600px] mx-auto flex flex-col gap-[10px] md:gap-[20px] px-[20px] md:px-[32px] lg:px-[48px] text-center"
      >
        <motion.p
          variants={itemVariants}
          className="font-[800] lg:text-[18px] text-[#272727]"
        >
          Designers
        </motion.p>

        <motion.h3
          variants={itemVariants}
          className="text-[42px] md:text-[48px] lg:text-[62px] py-[10px] leading-[1] font-[800] text-[#272727]"
        >
          {title}
        </motion.h3>

        <motion.div variants={itemVariants} className="mx-auto">
          <p className="max-w-[750px] text-[#272727] leading-[1.3]">
            HAY has always believed that good design is everyone&apos;s right.
            That&apos;s why, from the very beginning, co-founders and Creative
            Directors Mette and Rolf Hay committed to working with their
            generation&apos;s best designers from all over the world to create
            high-quality products that would be available to a wide audience.
          </p>
          <motion.button
            variants={itemVariants}
            aria-label="View designers"
            className="border-[#272727] text-[#272727] border-[3px] font-[800] border-solid mt-[20px] py-[16px] px-[32px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View designers
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default RichTextSection;
