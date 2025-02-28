"use client";
import { Product } from "@/types";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const ProductAboutSection: React.FC<{
  product: Product;
  color: string;
}> = ({ product, color }) => {
  return (
    <div className="py-[50px]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="flex flex-col lg:flex-row gap-[35px] lg:gap-[50px] max-w-[1600px] mx-auto"
      >
        <motion.div
          variants={containerVariants}
          className="flex lg:flex-[45%] flex-col text-[#272727] px-[20px] md:px-[32px] lg:px-[48px]"
        >
          <motion.p
            variants={itemVariants}
            className="font-[800] md:text-[18px]"
          >
            About
          </motion.p>
          <motion.h4
            variants={itemVariants}
            className="my-[20px] md:my-[26px] text-[34px] md:text-[40px] lg:text-[50px] font-[800] leading-[1]"
            style={{ color: color }}
          >
            {product.descriptionTitle}
          </motion.h4>
          <motion.p
            variants={itemVariants}
            className="text-[#3e3d3d] text-[14px] md:text-[18px]"
          >
            Vertical opaque and clear stripes create a subtle color variance in
            Kristine Five Melvær's glass vase collection.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="bg-[#F4F4F4] lg:flex-[55%] py-[15px] px-[20px] md:px-[32px] lg:px-[48px] md:mx-[32px] lg:mr-[48px]"
        >
          {[
            { label: "Designer", value: product.designer },
            { label: "Color", value: product.colors },
            { label: "Material", value: product.material },
            { label: "Dimensions", value: product.dimensions },
          ].map((item, index, array) => (
            <motion.div
              key={item.label}
              variants={itemVariants}
              className={`py-[16px] lg:py-[26px] flex flex-col md:flex-row md:items-center text-[18px] ${
                index !== array.length - 1
                  ? "border-b-solid border-b-[#d7d6d6] border-b-[1px]"
                  : ""
              }`}
            >
              <div className="font-[800] md:flex-[30%] text-[#272727]">
                {item.label}
              </div>
              <div className="text-[#272727B3] md:flex-[70%] text-[14px] md:text-[16px]">
                {item.value}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProductAboutSection;
