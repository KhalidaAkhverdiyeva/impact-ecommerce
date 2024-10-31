import React from "react";

const Modal = ({
  image,
  onClose,
  currentIndex,
  totalImages,
  onPrev,
  onNext,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-700"
        >
          X
        </button>

        {/* Display Image */}
        <img
          src={image}
          alt={`Image ${currentIndex + 1}`}
          className="max-w-full max-h-[90vh] object-cover"
        />

        {/* Pagination Controls */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex items-center">
          <button
            onClick={onPrev}
            disabled={currentIndex === 0}
            className="mr-4 text-gray-700"
          >
            Prev
          </button>
          <span>
            {currentIndex + 1}/{totalImages}
          </span>
          <button
            onClick={onNext}
            disabled={currentIndex === totalImages - 1}
            className="ml-4 text-gray-700"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
