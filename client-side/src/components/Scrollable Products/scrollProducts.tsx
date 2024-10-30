"use client";
import React, { useEffect, useRef, useState } from "react";
import ProductCard from "../Product Card/productCard";

interface ScrollableProductsProps {
  setScrollProgress: (progress: number) => void;
}

const ScrollableProducts: React.FC<ScrollableProductsProps> = ({
  setScrollProgress,
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [products, setProducts] = useState<any[]>([]); // State to hold product data
  const totalCards = 8; // Total number of cards

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/products/all");
      const data = await response.json();
      setProducts(data.products); // Assuming `data` is an array of products
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const scrollWidth = scrollRef.current.scrollWidth;
      const clientWidth = scrollRef.current.clientWidth;

      // Calculate the width of each card
      const cardWidth = scrollWidth / totalCards;

      // Calculate the number of visible cards in the viewport
      const visibleCards = clientWidth / cardWidth;

      // Adjust the total scrollable area, excluding the visible portion
      const adjustedScrollWidth = scrollWidth - clientWidth;

      // Calculate the initial offset percentage based on visible cards
      const initialOffset = (visibleCards / totalCards) * 100;

      // Calculate the current scroll progress
      const progress =
        initialOffset +
        (scrollLeft / adjustedScrollWidth) * (100 - initialOffset);

      // Set the scroll progress, ensuring it's between 0 and 100
      setScrollProgress(Math.min(progress, 100));
    }
  };

  useEffect(() => {
    fetchProducts(); // Fetch products on component mount

    const refCurrent = scrollRef.current;
    if (refCurrent) {
      refCurrent.addEventListener("scroll", handleScroll);
      // Call handleScroll initially to set the initial scroll progress
      handleScroll();
    }
    return () => {
      if (refCurrent) {
        refCurrent.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div>
      <div
        className="scroll-container relative flex overflow-x-auto px-[20px] md:px-[32px] lg:px-[48px] max-w-[1600px]"
        ref={scrollRef}
      >
        <div className="flex gap-[20px] relative overflow-visible">
          {products.map((product) => (
            <div key={product.id} className="flex-1 min-w-[300px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollableProducts;
