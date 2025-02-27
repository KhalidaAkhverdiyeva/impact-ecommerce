import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const HomeDesignerGridSection = () => {
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
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <section className="bg-white lg:h-[664px]">
      <motion.div
        ref={sectionRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mx-auto max-w-[1350px] lg:h-[664px] px-[20px] md:px-[32px] lg:px-[48px]"
      >
        <div className="flex flex-col md:flex-row gap-[12px] lg:gap-[24px] h-[600px] md:h-[320px] lg:h-[664px]">
          <motion.div
            variants={itemVariants}
            className="w-full flex-1 h-[300px] md:h-[100%] md:w-[50%] overflow-hidden flex items-center justify-center relative group cursor-pointer"
          >
            <Image
              src="https://impact-theme-home.myshopify.com/cdn/shop/files/designer-george-sowden.jpg?v=1653310809&width=1400"
              alt="Designer George Sowden"
              width={1400}
              height={1050} // Adjust height based on the image aspect ratio
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10"
            >
              <h2 className="text-white font-[800] text-[32px] lg:text-[44px] text-center">
                George Sowden
              </h2>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="w-full flex-1 h-[300px] md:h-[100%] md:w-[50%] flex flex-col gap-[12px] lg:gap-[24px] overflow-hidden"
          >
            <motion.div
              variants={itemVariants}
              className="flex-1 overflow-hidden flex items-center justify-center relative group cursor-pointer"
            >
              <Image
                src="https://impact-theme-home.myshopify.com/cdn/shop/files/designer-clara-von-zweigbergk.jpg?v=1653310798&width=1400"
                alt="Designer Clara Von Zweigbergk"
                width={1400}
                height={1050} // Adjust height based on the image aspect ratio
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10"
              >
                <h2 className="text-white font-[800] text-[32px] lg:text-[44px] text-center">
                  Clara Von Zweigbergk
                </h2>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex-1 overflow-hidden flex items-center justify-center relative group cursor-pointer"
            >
              <Image
                src="https://impact-theme-home.myshopify.com/cdn/shop/files/designer-pierre-charpin.jpg?v=1653310786&width=1400"
                alt="Designer Pierre Charpin"
                width={1400}
                height={1050} // Adjust height based on the image's aspect ratio
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10"
              >
                <h2 className="text-white font-[800] text-[32px] lg:text-[44px] text-center">
                  Pierre Charpin
                </h2>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeDesignerGridSection;
