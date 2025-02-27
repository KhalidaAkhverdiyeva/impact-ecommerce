import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CollectionCard = () => {
  const collectionImages = [
    {
      mobileImg:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/links-kitchen.jpg?v=1653309043&width=300",
      webImg:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/links-kitchen.jpg?v=1653309043&width=600",
      title: "Kitchen",
    },
    {
      mobileImg:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/links-decoration.jpg?v=1653309079&width=300",
      webImg:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/links-decoration.jpg?v=1653309079&width=600",
      title: "Decoration",
    },
    {
      mobileImg:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/links-office.jpg?v=1653309091&width=300",
      webImg:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/links-office.jpg?v=1653309091&width=600",
      title: "Office",
    },
    {
      mobileImg:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/links-lighting.jpg?v=1653309101&width=300",
      webImg:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/links-lighting.jpg?v=1653309101&width=600",
      title: "Lighting",
    },
    {
      mobileImg:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/links-books.jpg?v=1653309107&width=300",
      webImg:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/links-books.jpg?v=1653309107&width=600",
      title: "Books",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 20, // Reduced from 50
      scale: 0.95, // Changed from 0.8
      rotate: -1, // Reduced from -2
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15, // Increased from 12 for more stability
        duration: 0.6, // Reduced from 0.8
      },
    },
  };

  const hoverAnimation = {
    scale: 1.01, // Reduced from 1.02
    y: -3, // Reduced from -5
    transition: {
      duration: 0.2, // Reduced from 0.3
      ease: "easeOut",
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="flex gap-[20px] px-[20px] md:px-[32px] lg:px-[48px]"
    >
      {collectionImages.map((image, index) => (
        <motion.div
          key={index}
          className="p-[20px] bg-[#F1F1F1] overflow-hidden min-w-[200px]"
          variants={item}
          whileHover={hoverAnimation}
          custom={index}
        >
          <picture>
            <source media="(min-width: 768px)" srcSet={image.webImg} />
            <Image
              src={image.mobileImg}
              alt={image.title}
              width={800}
              height={533}
              className="object-cover w-full h-auto"
            />
          </picture>
          <div className="text-center">
            <div className="font-[700] text-[#272727]">{image.title}</div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CollectionCard;
