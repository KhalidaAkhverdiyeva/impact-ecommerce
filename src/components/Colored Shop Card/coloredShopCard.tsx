import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ColoredShopCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonColor: string;
  imageUrls: {
    small: string;
    medium: string;
    large: string;
  };
}

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const ColoredShopCard: React.FC<ColoredShopCardProps> = ({
  title,
  description,
  buttonText,
  buttonColor,
  imageUrls,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="px-[20px] md:px-[32px] lg:px-[48px]"
    >
      <div className="flex flex-col lg:flex-row lg:items-center max-w-[1600px] mx-auto">
        <motion.div variants={imageVariants} className="lg:order-1 lg:w-[50%]">
          <picture>
            <source media="(min-width: 1024px)" srcSet={imageUrls.large} />
            <source media="(min-width: 768px)" srcSet={imageUrls.medium} />
            <Image
              src={imageUrls.small}
              alt="Product Image"
              width={800}
              height={533}
              className="object-cover w-full h-auto"
            />
          </picture>
        </motion.div>
        <motion.div
          variants={textVariants}
          className="px-[32px] py-[40px] md:p-[64px] lg:p-[80px] text-[#272727] lg:w-[50%]"
        >
          <h2 className="text-[34px] md:text-[44px] font-[900] leading-[1.1]">
            {title}
          </h2>
          <p className="pt-[20px] leading-[1.2] md:leading-[1.5] text-[#444444]">
            {description}
          </p>
          <motion.button
            variants={textVariants}
            aria-label="Shop"
            className="mt-[24px] py-[16px] px-[32px] font-[800]"
            style={{ backgroundColor: buttonColor }}
          >
            {buttonText}
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ColoredShopCard;
