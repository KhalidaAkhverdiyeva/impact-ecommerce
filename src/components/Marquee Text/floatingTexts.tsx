"use client";
import React from "react";
import { motion } from "framer-motion";

interface FloatingTextSectionProps {
  text: string;
  color?: string;
}

const FloatingTextSection: React.FC<FloatingTextSectionProps> = ({
  text,
  color,
}) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      rotate: -2,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1.02,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="overflow-hidden whitespace-nowrap py-[20px] bg-white"
    >
      {[1, 2, 3].map((_, index) => (
        <motion.div
          key={index}
          variants={textVariants}
          className="inline-block animate-marquee whitespace-nowrap text-[80px] md:text-[150px] font-[900]"
          style={{ color }}
        >
          <span className="px-4">{text}</span>
          <span className="px-4">{text}</span>
          <span className="px-4">{text}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FloatingTextSection;
