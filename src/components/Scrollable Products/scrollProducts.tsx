"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import ProductCard from "../Product Card/productCard";
import { Product } from "@/types";
import ProgressBarContainer from "../New Arrivals Section/ProgressBarContainer";

interface ScrollableProductsProps {
  setScrollProgress: (progress: number) => void;
  scrollProgress: number;
}

const ScrollableProducts: React.FC<ScrollableProductsProps> = ({
  setScrollProgress,
  scrollProgress,
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const totalCards = 8;

  const calculateProgress = useCallback(() => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const scrollWidth = scrollRef.current.scrollWidth;
      const clientWidth = scrollRef.current.clientWidth;

      // Calculate how many cards are initially visible
      const cardWidth = scrollWidth / totalCards;
      const visibleCards = clientWidth / cardWidth;

      // Calculate initial progress based on visible cards
      const initialProgress = (visibleCards / totalCards) * 100;

      // Calculate remaining progress based on scroll position
      const remainingWidth = scrollWidth - clientWidth;
      const remainingProgress = 100 - initialProgress;
      const scrollProgress = (scrollLeft / remainingWidth) * remainingProgress;

      // Combine initial and scroll progress
      const totalProgress = initialProgress + scrollProgress;

      setScrollProgress(Math.min(totalProgress, 100));
    }
  }, [setScrollProgress, totalCards]);

  const fetchProducts = useCallback(async () => {
    try {
      const response = await fetch(
        "https://impact-server-side.onrender.com/api/products/all"
      );
      const data = await response.json();
      setProducts(data.products);
      // Calculate initial progress after products are loaded
      setTimeout(calculateProgress, 0);
    } catch (error) {
      console.error(error);
    }
  }, [calculateProgress]);

  const updateScrollButtons = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      // Add a small buffer (1px) to account for rounding errors
      const maxScroll = scrollWidth - clientWidth;
      setCanScrollRight(scrollLeft < maxScroll - 1);
    } else {
      // If ref not available yet, ensure right scroll is enabled by default
      setCanScrollRight(true);
    }
  }, []);

  const handleScroll = useCallback(() => {
    calculateProgress();
    updateScrollButtons();
  }, [calculateProgress, updateScrollButtons]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Ensure right scroll is enabled on initial load
    setCanScrollRight(true);
    fetchProducts();

    const refCurrent = scrollRef.current;
    if (refCurrent) {
      refCurrent.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (refCurrent) {
        refCurrent.removeEventListener("scroll", handleScroll);
      }
    };
  }, [fetchProducts, handleScroll]);

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

  // Add hover animation
  const hoverAnimation = {
    scale: 1.02,
    y: -5,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  };

  return (
    <div className="w-full">
      <div
        ref={scrollRef}
        className="scroll-container relative flex overflow-x-auto px-[20px] md:px-[32px] lg:px-[48px] max-w-[1600px]"
      >
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex gap-[20px] relative overflow-visible"
        >
          {products.map((product, index) => (
            <motion.div
              key={product._id}
              className="flex-1 min-w-[300px]"
              variants={item}
              whileHover={hoverAnimation}
              custom={index}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <ProgressBarContainer
        scrollProgress={scrollProgress}
        onScrollLeft={scrollLeft}
        onScrollRight={scrollRight}
        canScrollLeft={canScrollLeft}
        canScrollRight={canScrollRight}
      />
    </div>
  );
};

export default ScrollableProducts;
