import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const DesignerInfoCard = () => {
  return (
    <div className="max-w-[1600px] mx-auto py-[50px]">
      <div className="flex flex-col lg:items-center lg:flex-row gap-[36px] lg:gap-[100px] px-[20px] md:px-[32px] lg:px-[48px]">
        <motion.div
          className="flex gap-[20px] lg:w-[55%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="w-[40%]" variants={imageVariants}>
            <Image
              src="https://impact-theme-home.myshopify.com/cdn/shop/files/thomas-bentzen-02.jpg?v=1659104239&width=1000"
              alt="Image 1"
              width={1000}
              height={667}
              className="object-cover"
            />
          </motion.div>
          <motion.div className="pt-[40px] w-[60%]" variants={imageVariants}>
            <Image
              src="https://impact-theme-home.myshopify.com/cdn/shop/files/thomas-bentzen-03.jpg?v=1659104228&width=1000"
              alt="Image 2"
              width={1000}
              height={667}
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="text-[#272727] flex flex-col items-center lg:items-start lg:w-[45%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p className="font-[900]" variants={textVariants}>
            Designer
          </motion.p>
          <motion.h2
            className="text-[40px] font-[900] lg:text-[60px]"
            variants={textVariants}
          >
            Thomas Bentzen
          </motion.h2>
          <motion.p
            className="text-center lg:text-left pt-[20px] max-w-[600px]"
            variants={textVariants}
          >
            Thomas Bentzen is a Danish designer who founded his own studio in
            Copenhagen in 2010. Previously, he was a partner at Studio Louise
            Campbell, where he worked for five years. He is a board member of
            the Danish Cabinetmakers Autumn Exhibition (SE) and an occasional
            teacher at the Royal Danish Academy of Fine Arts, School of Design.
            Bentzen is a methodical designer, who seeks to create fine-tuned
            products that are both engaging and durable. He works in the classic
            tradition of Scandinavian design – with a pragmatic, unassuming and
            universal outlook. Against this backdrop, he has shown a talent for
            creating designs that are imbued with a contemporary feel that spark
            a sense of joy too. For HAY, Bentzen has designed the DLM Table and
            Shade Bin.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default DesignerInfoCard;
