"use client";
import React, { useState, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { motion } from "framer-motion";

const ImageRevealSlider = () => {
  const leftImage =
    "https://impact-theme-home.myshopify.com/cdn/shop/files/Quilton-3-seater-Swarm-multi-colour_Quilton-Ottoman-Swarm-multi-colour_Slant-soft-black_Kofi-60x60-blue-tinted-glass_57a0844c-8cf6-4922-9835-a3ab8c8bb772.jpg?v=1663055864&width=2000";
  const rightImage =
    "https://impact-theme-home.myshopify.com/cdn/shop/files/CPH-90-Aquavert-linoleum-wb-Lacquer-Walnut-Base_AAC-155_Sense-nougat-alu-tilt-swivel-base_Slant-Soft-black_3e6d67b8-c715-455e-b387-fc04377ae4e8.jpg?v=1663055873&width=2000";

  const [dragPosition, setDragPosition] = useState(50); // Start in the middle
  const containerRef = useRef<HTMLDivElement>(null);

  // Spring animation for smooth dragging
  const [{ clip }, api] = useSpring(() => ({ clip: dragPosition }));

  // Gesture handling for dragging
  const bind = useDrag(
    ({ movement: [mx], memo = dragPosition, event }) => {
      // Prevent default scroll
      event.preventDefault();

      const containerWidth =
        containerRef.current?.clientWidth || window.innerWidth;
      const newPos = Math.min(
        Math.max(0, memo + (mx / containerWidth) * 100),
        100
      );

      setDragPosition(newPos);
      api.start({ clip: newPos, immediate: true }); // Update the clip-path immediately
      return memo; // Return the memo for the next drag cycle
    },
    {
      axis: "x",
      filterTaps: true,
      preventDefault: true,
      rubberband: true,
      from: () => [
        (dragPosition *
          (containerRef.current?.clientWidth || window.innerWidth)) /
          100,
        0,
      ],
    }
  );

  const revealVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-white py-[50px]">
      <div className="max-w-[1600px] mx-auto px-[20px] md:px-[32px] lg:px-[48px]">
        <motion.div
          className="text-center pb-[20px] md:pb-[40px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h3
            className="text-[32px] md:text-[40px] lg:text-[48px] font-[800]"
            variants={revealVariants}
          >
            Sources of inspiration
          </motion.h3>
          <motion.p
            className="pt-[15px] text-[14px] md:text-[16px]"
            variants={revealVariants}
          >
            Explore our environments and inspire yourself to find the right
            balance in your home.
          </motion.p>
        </motion.div>

        <motion.div
          ref={containerRef}
          className="relative h-[200px] md:h-[400px] lg:h-[700px] xl:h-[800px] overflow-hidden touch-none"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Image with clip-path controlled by drag position  */}
          <animated.div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${leftImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Text Overlay for Left Image */}
            <div className="absolute top-0 left-0 p-[10px] text-white z-10">
              <h2 className="text-2xl font-bold">Living room</h2>
            </div>
          </animated.div>

          {/* Right Image with clip-path controlled by drag position */}
          <animated.div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${rightImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              clipPath: clip.to((value) => `inset(0 0 0 ${value}%)`), // Adjust clip-path directly
            }}
          >
            {/* Text Overlay for Right Image */}
            <div className="absolute top-0 right-0 p-[10px] text-white z-10">
              <h2 className="text-2xl font-bold">Office</h2>
            </div>
          </animated.div>

          {/* Draggable Slider with centered larger SVG */}
          <animated.div
            {...bind()}
            className="absolute top-0 bottom-0 w-[2px] bg-white cursor-grab active:cursor-grabbing touch-none"
            style={{
              left: `${dragPosition}%`,
              transform: "translateX(-50%)",
              touchAction: "none",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                role="presentation"
                focusable="false"
                width="35" // Adjust width as needed
                height="45" // Adjust height as needed
                viewBox="0 0 32 40"
                className="absolute"
              >
                <path
                  d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16V24C32 32.8366 24.8366 40 16 40C7.16344 40 0 32.8366 0 24V16Z"
                  fill="#ffffff"
                ></path>
                <path
                  fill="#000000"
                  d="M11 14H13V26H11zM15 14H17V26H15zM19 14H21V26H19z"
                ></path>
              </svg>
            </div>
          </animated.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ImageRevealSlider;
