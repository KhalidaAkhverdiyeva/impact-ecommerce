"use client";
import React from "react";
import { IoClose } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { motion } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  image: string;
  onClose: () => void;
  currentIndex: number;
  totalImages: number;
  onPrev: () => void;
  onNext: () => void;
  layoutId: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  image,
  onClose,
  currentIndex,
  totalImages,
  onPrev,
  onNext,
  layoutId,
}) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] bg-black bg-opacity-60 flex items-center justify-center"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white p-2 hover:opacity-75 z-[60]"
      >
        <IoClose size={24} />
      </button>

      <button
        onClick={onPrev}
        disabled={currentIndex === 0}
        className={`absolute left-4 text-white p-2 ${
          currentIndex === 0
            ? "opacity-50 cursor-not-allowed"
            : "hover:opacity-75"
        }`}
      >
        <IoIosArrowBack size={24} />
      </button>

      <motion.div
        layoutId={layoutId}
        className="relative aspect-[3/4] w-auto h-auto max-w-[90vw] max-h-[90vh]"
        style={{ margin: "auto" }}
      >
        <Image
          src={image}
          alt={`Product view ${currentIndex + 1}`}
          className="object-contain w-full h-full"
          width={1200}
          height={1600}
          priority
        />
      </motion.div>

      <button
        onClick={onNext}
        disabled={currentIndex === totalImages - 1}
        className={`absolute right-4 text-white p-2 ${
          currentIndex === totalImages - 1
            ? "opacity-50 cursor-not-allowed"
            : "hover:opacity-75"
        }`}
      >
        <IoIosArrowForward size={24} />
      </button>

      <div className="absolute bottom-4 text-white">
        {currentIndex + 1} / {totalImages}
      </div>
    </motion.div>
  );
};

export default Modal;
