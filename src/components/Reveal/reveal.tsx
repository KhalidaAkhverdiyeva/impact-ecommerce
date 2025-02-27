"use client";
import { motion } from "framer-motion";
import React from "react";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
}

const Reveal = ({ children, width = "fit-content" }: RevealProps) => {
  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
