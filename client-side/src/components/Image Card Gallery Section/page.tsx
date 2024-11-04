"use client";
import { useState } from "react";

const ImageGallery = () => {
  const initialImages = [
    {
      src: "https://impact-theme-home.myshopify.com/cdn/shop/files/Matin_Table_Lamp_S_lavender_Matin_Table_Lamp_L_white_Bottoms_Up_Vase_L_navy_blue_1_a874d15c-b8d4-4479-ae59-93e1c86f528d.jpg?v=1657541833&width=1000",
      title: "Image 1",
      description: "This is the first image description.",
    },
    {
      src: "https://impact-theme-home.myshopify.com/cdn/shop/files/Shade_Bin_01_1.jpg?v=1657541988&width=1000",
      title: "Image 2",
      description: "This is the second image description.",
    },
    {
      src: "https://impact-theme-home.myshopify.com/cdn/shop/files/New_Order_Combination_701_light_grey_Plica_Sprinkle_Juice_Vase_yellow_1.jpg?v=1657542014&width=1000",
      title: "Image 3",
      description: "This is the third image description.",
    },
  ];

  const [images, setImages] = useState(initialImages);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTimeout(() => {
      setImages((prevImages) => {
        const newImages = [...prevImages];
        const firstImage = newImages.shift();
        if (firstImage) newImages.push(firstImage);
        return newImages;
      });
      setCurrentIndex(0);
    }, 300);
  };

  const handlePrev = () => {
    setImages((prevImages) => {
      const newImages = [...prevImages];
      const lastImage = newImages.pop();
      if (lastImage) newImages.unshift(lastImage);
      return newImages;
    });
  };

  return (
    <div className="max-w-[1350px] mx-auto flex justify-between py-[50px] px-[20px] md:px-[32px] lg:px-[48px]">
      {/* Image Stack */}
      <div className="relative w-[520px] h-[520px]">
        {images.map((image, index) => {
          // Reduced rotation and translation values for a smoother effect
          const rotation = index === 0 ? 0 : (index - 1) * 3; // Smaller rotation
          const translateX = index === 0 ? "0" : `${(index - 1) * 3}px`; // Adjusted translation for X-axis
          const translateY = index === 0 ? "0" : `${(index - 1) * 1.5}px`; // Adjusted translation for Y-axis

          return (
            <img
              key={index}
              src={image.src}
              alt={image.title}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 ${
                index === 0 ? "z-20" : "z-10 opacity-70"
              }`}
              style={{
                transform: `rotate(${rotation}deg) translate(${translateX}, ${translateY})`, // Updated transformations
              }}
            />
          );
        })}
      </div>

      {/* Details Section */}
      <div className="flex flex-col justify-center space-y-4">
        <h2 className="text-2xl font-bold" id="title">
          {images[0].title}
        </h2>
        <p className="text-gray-600" id="description">
          {images[0].description}
        </p>
        <div className="flex space-x-4">
          <button
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
            onClick={handlePrev}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
