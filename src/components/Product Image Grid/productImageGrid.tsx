"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SearchBetterButton from "../Seach Better Button/searchBetterButton";
import Modal from "../Image Display Modal/modal";

interface ProductImageGridProps {
  gatheredImages: string[];
}

const ProductImageGrid: React.FC<ProductImageGridProps> = ({
  gatheredImages,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Restore body scroll when modal is closed
    document.body.style.overflow = "unset";
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      Math.min(prevIndex + 1, gatheredImages.length - 1)
    );
  };

  return (
    <div className="hidden lg:grid grid-cols-2 gap-[25px] relative">
      {gatheredImages.map((image, index) => (
        <motion.div
          layoutId={`image-${index}`}
          className="relative group aspect-[3/4]"
          key={index}
        >
          <div
            onClick={() => openModal(index)}
            className="cursor-pointer w-full h-full"
          >
            <Image
              src={image}
              alt={`Product image ${index + 1}`}
              className="w-full h-full object-cover"
              width={1200}
              height={1600}
              priority={index === 0}
            />
          </div>
          <SearchBetterButton onClick={() => openModal(index)} />
        </motion.div>
      ))}

      <AnimatePresence>
        {isModalOpen && (
          <Modal
            layoutId={`image-${currentImageIndex}`}
            isOpen={isModalOpen}
            image={gatheredImages[currentImageIndex]}
            onClose={closeModal}
            currentIndex={currentImageIndex}
            totalImages={gatheredImages.length}
            onPrev={goToPrevImage}
            onNext={goToNextImage}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductImageGrid;
