import React from "react";
import ProductCard from "./productCard";
import ProductCardSkeletons from "../Skeletons/Product Card Skeleton/productCardSkeleton";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { ProductGridProps } from "@/types";
import MobileSkeletons from "../Skeletons/Mobile Product Skeleton/mobileSkeleton";

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  loading,
  error,
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
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
    return <div className="lg:w-[1100px]">No Products Found!</div>;
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
    <div className=" flex flex-col">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-[10px] lg:gap-6 flex-grow">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
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
