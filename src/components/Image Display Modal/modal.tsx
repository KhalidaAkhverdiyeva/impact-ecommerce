import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Image from "next/image";
import { ModalProps } from "@/types";

const Modal: React.FC<ModalProps> = ({
  image,
  onClose,
  currentIndex,
  totalImages,
  onPrev,
  onNext,
}) => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-gray-700 z-10 "
      >
        <svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          viewBox="0 0 56 56"
        >
          <path
            d="M56 28C56 12.536 43.464 0 28 0S0 12.536 0 28s12.536 28 28 28 28-12.536 28-28Z"
            fill="#fff"
          ></path>
          <path
            d="M55.5 28C55.5 12.812 43.188.5 28 .5S.5 12.812.5 28 12.812 55.5 28 55.5 55.5 43.188 55.5 28Z"
            stroke="#252627"
            strokeOpacity=".12"
          ></path>
          <path
            d="m22.344 22.343 11.313 11.314m-11.313 0 11.313-11.313"
            stroke="#252627"
            strokeWidth="2"
          ></path>
        </svg>
      </button>

      <div className="relative flex flex-col items-center">
        <Image
          src={image}
          alt={`Image ${currentIndex + 1}`}
          className="max-w-full max-h-[100vh] object-cover relative"
          fill
          sizes="100vw"
          style={{ objectFit: "contain" }}
          priority
        />

        <div className="mt-5 flex items-center absolute bottom-[20px] left-[40%] bg-white rounded-[20px]">
          <button
            onClick={onPrev}
            disabled={currentIndex === 0}
            className=" text-gray-700 px-[20px]"
          >
            <GrFormPrevious />
          </button>
          <span className="px-[12px] py-[8px]">
            {currentIndex + 1}/{totalImages}
          </span>
          <button
            onClick={onNext}
            disabled={currentIndex === totalImages - 1}
            className=" text-gray-700 px-[20px]"
          >
            <GrFormNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
