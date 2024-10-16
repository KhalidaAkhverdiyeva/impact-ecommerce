"use client";
import React, { useEffect, useRef } from "react";
import ProductCard from "../Product Card/productCard";

interface ScrollableProductsProps {
  setScrollProgress: (progress: number) => void;
}

const ScrollableProducts: React.FC<ScrollableProductsProps> = ({
  setScrollProgress,
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const scrollWidth = scrollRef.current.scrollWidth;
      const clientWidth = scrollRef.current.clientWidth;

      const progress = Math.min(
        (scrollLeft / (scrollWidth - clientWidth)) * 100,
        100
      );
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    const refCurrent = scrollRef.current;
    if (refCurrent) {
      refCurrent.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (refCurrent) {
        refCurrent.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="">
      <div
        className="scroll-container relative flex overflow-x-auto px-[20px] md:px-[32px] lg:px-[48px] max-w-[1550px]"
        ref={scrollRef}
      >
        <div className="flex gap-[20px] relative">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default ScrollableProducts;
