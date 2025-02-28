import React from "react";
import ProductCard from "./productCard";
import ProductCardSkeletons from "../Skeletons/Product Card Skeleton/productCardSkeleton";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { ProductGridProps } from "@/types";
import MobileSkeletons from "../Skeletons/Mobile Product Skeleton/mobileSkeleton";
import { motion } from "framer-motion"; // Add this import

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  loading,
  error,
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
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
      y: 50,
      scale: 0.8,
      rotate: -2,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8,
      },
    },
  };

  const hoverAnimation = {
    scale: 1.02,
    y: -5,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  };

  if (loading) {
    return (
      <div className="w-full">
        <div className="block md:hidden w-full">
          <MobileSkeletons />
        </div>
        <div className="hidden md:block md:w-[100%]">
          <ProductCardSkeletons />
        </div>
      </div>
    );
  }
  if (error) return <div>Error: {error}</div>;

  if (products.length === 0) {
    return <div className="">No Products Found!</div>;
  }

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex flex-col">
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-3 gap-[10px] lg:gap-6 flex-grow"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {products.map((product, index) => (
          <motion.div
            key={product._id}
            variants={item}
            whileHover={hoverAnimation}
            custom={index}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
      <div className="flex justify-center items-center mt-6 w-[100%]">
        <div className="flex justify-center py-[10px] gap-[20px] w-[200px] border-solid border-[1px] border-[#e3e2e2]">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="text-[#4f4f4f] disabled:text-gray-300 "
          >
            <GrFormPrevious />
          </button>
          <div>
            {currentPage} / {totalPages}
          </div>
          <button
            aria-label="Next page"
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="text-[#4f4f4f] disabled:text-gray-300"
          >
            <GrFormNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
