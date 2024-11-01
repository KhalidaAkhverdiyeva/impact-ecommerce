import React, { useState } from "react";
import Image from "next/image";
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
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
        <div className="relative group" key={index}>
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover transition-opacity duration-300 cursor-pointer"
            width={1200}
            height={1200}
            onClick={() => openModal(index)}
          />
          <SearchBetterButton onClick={() => openModal(index)} />
        </div>
      ))}

      {isModalOpen && (
        <Modal
          image={gatheredImages[currentImageIndex]}
          onClose={closeModal}
          currentIndex={currentImageIndex}
          totalImages={gatheredImages.length}
          onPrev={goToPrevImage}
          onNext={goToNextImage}
        />
      )}
    </div>
  );
};

export default ProductImageGrid;
